import React from "react";
import "./HomePage.css"; // Custom CSS (if any)
import HeroImage from "../assets/hero-bg.png"; // Path to your background image


import ListEvents from "../components/events/ListEvents";
import MenuList from "../components/shared/MenuList";

const Events: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section
        className="hero_section"
        style={{
          backgroundImage: `url(${HeroImage})`, // Background Image
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div className="hero_content">
          {/* Header Section (NavBar) */}
          <header className="header_section">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-lg custom_nav-container">
                <a className="navbar-brand" href="/">
                  <span>Eventure</span>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <MenuList />
                </div>
              </nav>
            </div>
          </header>
        </div>
      </section>
      <ListEvents />
    </div>
  );
};

export default Events;
