import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'; // Import the useForm hook
import styles from './login.module.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Hook for handling forms
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const onSubmit = async (data: any) => {
    console.log('Data being sent to backend:', data); // Log the form data
    try {
      const response = await axios.post('http://localhost:8081/api/login', data);
      setMessage('Login successful!');
      setError('');
      console.log('Login Response:', response.data);
      console.log(response.data.userType);
    } catch (err) {
      console.error('Error occurred:', err);
      setMessage('');
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>Login</h2>

      {/* Display success/error messages */}
      {message && <div className={styles.successMessage}>{message}</div>}
      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Use handleSubmit for form submission */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Invalid email format',
              },
            })} // Validation for email format
          />
          {errors.email && (
            <p className="text-danger">
              {typeof errors.email.message === 'string' ? errors.email.message : 'Invalid email'}
            </p>
          )}
        </div>

        {/* Password */}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
            {...register('password', { required: 'Password is required' })} // Password required validation
          />
          {errors.password && (
            <p className="text-danger">
              {typeof errors.password.message === 'string' ? errors.password.message : 'Invalid password'}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
