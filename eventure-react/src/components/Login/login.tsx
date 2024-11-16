import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(); // Hook for handling forms
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  // Checking if the user is already logged in
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    const storedUserType = localStorage.getItem("userType");
    if (storedEmail && storedUserType) {
      setUserEmail(storedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  // Handling form submission
  const onSubmit = async (data: any) => {
    setMessage(""); // Clear previous messages
    setError(""); // Clear previous errors
    console.log("Data being sent to backend:", data);

    try {
      const response = await axios.post(
        "http://localhost:8081/api/login",
        data
      );
      setMessage("Login successful!");
      setError("");
      console.log("Login Response:", response.data);

      // Store user details in local storage
      localStorage.setItem("userEmail", response.data.email);
      localStorage.setItem("userType", response.data.userType);

      setUserEmail(response.data.email);
      setIsLoggedIn(true);

      // Redirect based on userType
      if (response.data.userType === "organizer") {
        navigate("/organizer"); // Redirect organizer to home
      } else {
        navigate("/"); // Redirect user to their page
      }
    } catch (err: any) {
      console.error("Error occurred:", err);
      setMessage("");
      if (err.response) {
        // Server responded with a status code
        setError(
          err.response.data?.message || "Invalid credentials. Please try again."
        );
      } else if (err.request) {
        // No response received from server
        setError("No response from the server. Please try again later.");
      } else {
        // General error
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  // Handle logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userType");
    setUserEmail("");
    setIsLoggedIn(false);
    navigate("/"); // Redirect to login page
  };

  return (
    <div className={styles.loginContainer}>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {userEmail}</p>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h2 className={styles.title}>Login</h2>

          {/* Display success/error messages */}
          {message && <div className={styles.successMessage}>{message}</div>}
          {error && <div className={styles.errorMessage}>{error}</div>}

          {/* Use handleSubmit for form submission */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.inputField}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Invalid email format",
                  },
                })} // Validation for email format
              />
              {errors.email && (
                <p className={styles.errorText}>
                  {typeof errors.email.message === "string"
                    ? errors.email.message
                    : "Invalid email"}
                </p>
              )}
            </div>

            {/* Password */}
            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.inputField}
                {...register("password", { required: "Password is required" })} // Password required validation
              />
              {errors.password && (
                <p className={styles.errorText}>
                  {typeof errors.password.message === "string"
                    ? errors.password.message
                    : "Invalid password"}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
