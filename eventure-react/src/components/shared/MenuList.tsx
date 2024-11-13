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

import "./Header.css"
export const MenuList = () => {
  return (
    <>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  ">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="about.html"> About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="service.html">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="why.html">Why Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="team.html">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true" /> Login</a>
          </li>
          <form className="form-inline">
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
        </ul>
      </div>
    </>
  )
}
