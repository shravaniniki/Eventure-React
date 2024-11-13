import { MenuList } from "./MenuList"
import "./Header.css";
export const Header = () => {
  return (
    <>  
    <header className="header_section">
  <div className="container-fluid">
    <nav className="navbar navbar-expand-lg custom_nav-container ">
      <a className="navbar-brand" href="index.html">
        <span>
          Eventure
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className=""> </span>
      </button>
     <MenuList/>
    </nav>
  </div>
</header>
</>
  )
}


export default Header;