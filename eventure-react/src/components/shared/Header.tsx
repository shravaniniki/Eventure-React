import { Link } from "react-router-dom";
import MenuList from "./MenuList"; // Assuming you have this component for the menu items

function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Eventure
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <MenuList />
        </div>
      </div>
    </nav>
  );
}

export default Header;
