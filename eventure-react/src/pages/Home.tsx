import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Header from "../components/shared/Header";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { IEvent } from "../models/IEvent";

const Home = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get("http://localhost:8081/api/events");
        setEvents(response.data);
        setIsLoading(false);
      } catch (error) {
        setError("Failed to load events. Please try again.");
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  const handleExploreEvents = () => {
    navigate("/events");
  };

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
          {isLoading && <p>Loading events...</p>}
          {error && <p className="error-message">{error}</p>}

          <div className="events-wrapper">
            {!isLoading &&
              !error &&
              events.slice(0, 3).map((event) => (
                <div className="feature-card" key={event.id}>
                  <h2>{event.name}</h2>
                  <p>
                    <strong>Mode:</strong> {event.e_mode}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                  <button
                    className="cta-button"
                    onClick={() => navigate(`/events/user/${event.id}`)}
                  >
                    View Details
                  </button>
                </div>
              ))}
          </div>

          <button className="view-all-button" onClick={handleExploreEvents}>
            View All Events
          </button>
        </section>

        <section className="footer">
          <p>&copy; 2024 Eventure - All Rights Reserved</p>
        </section>
      </div>
    </>
  );
};

export default Home;
