import { NavLink } from "react-router-dom";

const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          aria-current="page"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/events"
        >
          Events
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/login"
        >
          Login
        </NavLink>
      </li>
			<li className="nav-item">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/signup"
        >
          Signup
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuList;
