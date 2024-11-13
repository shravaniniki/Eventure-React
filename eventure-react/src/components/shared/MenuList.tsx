

const MenuList = () => {
  return (
    <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="/">
        Home
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/events">
       Events
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/about">
        About
      </a>
    </li>
   
    <li className="nav-item">
      <a className="nav-link" href="/why">
        Why Us
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/team">
        Team
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="/login">
        <i className="fa fa-user" aria-hidden="true"></i> Login
      </a>
    </li>
    <form className="form-inline">
      <button
        className="btn my-2 my-sm-0 nav_search-btn"
        type="submit"
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
    </form>
  </ul>
  );
};

export default MenuList;
