import { Link } from "react-router-dom";
import "./Header.css";

const MenuList = () => {
  return (
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/events">
          Events
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/why">
          Team
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          <i className="fa fa-user" aria-hidden="true"></i> Signup
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          </svg>
        </Link>
      </li>
      <form className="form-inline">
        <button className="btn my-2 my-sm-0 nav_search-btn" type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    </ul>
  );
};

export default MenuList;
