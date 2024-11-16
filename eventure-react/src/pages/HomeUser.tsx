import { useNavigate } from "react-router-dom";
import "./home.css";
import Header from "../components/shared/Header";
import { HelmetProvider, Helmet } from "react-helmet-async";

const HomeUser = () => {
  const navigate = useNavigate();

  const handleExploreEvents = () => {
    // Redirect to /events/list when the button is clicked
    navigate("/events/list");
  };

  function handleAddEvent() {
    navigate("/events/add");
  }

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="home-container">
        <Header />
        <section className="hero-section">
          <div className="hero-content">
            <h1>Welcome to Eventure</h1>
            <p>Your ultimate event management platform</p>
            <button className="cta-button" onClick={handleExploreEvents}>
              Explore Events
            </button>
          </div>
        </section>

        <section className="features">
          <div className="feature-card">
            <h2>Organize Events</h2>
            <p>Manage and create events easily with our platform.</p>
            <button className="cta-button" onClick={handleAddEvent}>
              Add Events
            </button>
          </div>

          <div className="feature-card">
            <h2>View Your Events</h2>
            <p>See your scheduled events </p>
            <button className="cta-button" onClick={handleExploreEvents}>
              Your Events
            </button>
          </div>
        </section>

        <section className="footer">
          <p>&copy; 2024 Eventure - All Rights Reserved</p>
        </section>
      </div>
    </>
  );
};

export default HomeUser;
