import React, { useState } from "react";
import "./HomePage.css"; // Custom CSS (if any)
import HeroImage from "../assets/hero-bg.png"; // Path to your background image
import slider from "../assets/slider-img.png"; // Path to your slider image

import ListEvents from "../components/events/ListEvents";
import  MenuList  from "../components/shared/MenuList";
import { useNavigate } from "react-router-dom";


const Home: React.FC = () => {
  const navigate = useNavigate();
  const [showListEvents, setShowListEvents] = useState(false);


  // Handle the "View All" button to navigate to '/events/list'
  const handleViewAll = () => {
    navigate("/events/list");
  };
  return (
    <>
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

        {/* Slider Section */}
        <div className="slider_section">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {/* First Carousel Item */}
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>Eventure</h1>
                        <p>
                          Discover, manage, and make every event unforgettable
                          with Eventure.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="btn1">
                         Add Event
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={slider} alt="Slider Image" />{" "}
                        {/* Use the imported slider image */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Second Carousel Item */}
              {/* <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail-box">
                        <h1>Eventure</h1>
                        <p>
                          Your ultimate destination for seamless event
                          experiences.
                        </p>
                        <div className="btn-box">
                          <a href="#" className="btn1">
                            Read More
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box">
                        <img src={slider} alt="Slider Image" />{" "} */}
                        {/* Use the imported slider image */}
                      {/* </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Carousel Indicators */}
           
          </div>
        </div>
      </section>
      <section className="service_section layout_padding">
        
          <div className="container">
            <div className="heading_container heading_center">
              


            {/* Display first three events */}
            <ListEvents limit={3} />


            <div className="btn-box">
              <button onClick={handleViewAll} className="btn1">
                View All
              </button>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default Home;
