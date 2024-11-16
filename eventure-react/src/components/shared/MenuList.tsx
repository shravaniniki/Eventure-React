import  { useState, useEffect } from "react";
import { useNavigate, NavLink, useLocation, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // User icon
import "./MenuList.css"; // Ensure this file contains appropriate styles

const MenuList = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false); // Dropdown visibility
  const navigate = useNavigate();
  const location = useLocation();

  // Check if the user is already logged in on component mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");
    if (storedEmail) {
      setIsLoggedIn(true);
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage and reset component state
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userType");
    setUserEmail("");
    setIsLoggedIn(false);
    setIsDropdownVisible(false); // Hide dropdown on logout
    navigate("/"); // Navigate to the home page after logout
  };

  // Toggle dropdown visibility when user clicks on the profile icon
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const handleClickOutside = (event: any) => {
    if (isDropdownVisible && !event.target.closest(".user-section")) {
      setIsDropdownVisible(false);
    }
  };

  // Close dropdown when clicking outside the dropdown
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownVisible]);

  return (
    <ul className="navbar-nav bg-dark fixed-top">
      {/* Brand Section */}
      <li className="nav-item brand-item">
        <NavLink className="nav-link brand-text" to="/">
          Eventure
        </NavLink>
      </li>

      {/* Navigation Links */}
      <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
        <NavLink className="nav-link" aria-current="page" to="/">
          Home
        </NavLink>
      </li>
      <li
        className={`nav-item ${
          location.pathname === "/events" ? "active" : ""
        }`}
      >
        <NavLink className="nav-link" aria-current="page" to="/events">
          Events
        </NavLink>
      </li>
      <li
        className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}
      >
        <NavLink className="nav-link" aria-current="page" to="/about">
          About
        </NavLink>
      </li>

      {/* Conditional Login/Signup or Profile Section */}
      <li className="nav-item">
        {isLoggedIn ? (
          <div className="nav-link user-section">
            <button className="user-icon" onClick={toggleDropdown}>
              <FaUserCircle size={24} />
            </button>
            {/* User Profile Dropdown */}
            {isDropdownVisible && (
              <div className="user-dropdown">
                <p>
                  <strong>Email:</strong> {userEmail}
                </p>
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link className="nav-link" to="/login">
            Login
          </Link>
        )}
      </li>
      <li
        className={`nav-item ${
          location.pathname === "/signup" ? "active" : ""
        }`}
      >
        {isLoggedIn ? (
          <div className="nav-link user-section"></div>
        ) : (
          <NavLink className="nav-link" to="/signup">
            Signup
          </NavLink>
        )}
      </li>
    </ul>
  );
};

export default MenuList;
