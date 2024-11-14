import React from "react";
import "./HomePage.css"; // Custom CSS (if any)
import HeroImage from "../assets/hero-bg.png"; // Path to your background image
import slider from "../assets/slider-img.png"; // Path to your slider image


const Home: React.FC = () => {
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
                           Sign up
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
      {/* <ListEvents /> */}
     
    </>
  );
};

export default Home;
