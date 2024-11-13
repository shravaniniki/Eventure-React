import React from "react";
import "./HomePage.css"; // Custom CSS (if any)
import HeroImage from "../assets/hero-bg.png"; // Path to your background image
import slider from "../assets/slider-img.png"; // Path to your slider image

const Home: React.FC = () => {
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
                </div>
              </nav>
            </div>
          </header>
        </div>

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
              <div className="carousel-item">
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
                        <img src={slider} alt="Slider Image" />{" "}
                        {/* Use the imported slider image */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Indicators */}
           
          </div>
        </div>
      </section>
      {/* Service section */}
      <section className="service_section layout_padding">
        <div className="service_container">
          <div className="container">
            <div className="heading_container heading_center">
              <h2>
                Our <span>Events</span>
              </h2>
              <p>Explore which event suits you better</p>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s1.png" alt="Service 1" />
                  </div>
                  <div className="detail-box">
                    <h5>Currency Wallet</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s2.png" alt="Service 2" />
                  </div>
                  <div className="detail-box">
                    <h5>Security Storage</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="box">
                  <div className="img-box">
                    <img src="images/s3.png" alt="Service 3" />
                  </div>
                  <div className="detail-box">
                    <h5>Expert Support</h5>
                    <p>
                      fact that a reader will be distracted by the readable
                      content of a page when looking at its layout. The point of
                      using
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="#">View All</a>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="about_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Magni quod blanditiis non minus sed aut voluptatum illum quisquam
              aspernatur ullam vel beatae rerum ipsum voluptatibus
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                <img src="images/about-img.png" alt="About Us" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <h3>We Are Finexo</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All
                </p>
                <p>
                  Molestiae odio earum non qui cumque provident voluptates,
                  repellendus exercitationem, possimus at iste corrupti officiis
                  unde alias eius ducimus reiciendis soluta eveniet. Nobis ullam
                  ab omnis quasi expedita.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* Why Section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Why Choose <span>Us</span>
            </h2>
          </div>
          <div className="why_container">
            <div className="box">
              <div className="img-box">
                <img src="images/w1.png" alt="Why Us 1" />
              </div>
              <div className="detail-box">
                <h5>Expert Management</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w2.png" alt="Why Us 2" />
              </div>
              <div className="detail-box">
                <h5>Secure Investment</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w3.png" alt="Why Us 3" />
              </div>
              <div className="detail-box">
                <h5>Instant Trading</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="images/w4.png" alt="Why Us 4" />
              </div>
              <div className="detail-box">
                <h5>Happy Customers</h5>
                <p>
                  Incidunt odit rerum tenetur alias architecto asperiores omnis
                  cumque doloribus aperiam numquam! Eligendi corrupti, molestias
                  laborum dolores quod nisi vitae voluptate ipsa? In tempore
                  voluptate ducimus officia id, aspernatur nihil. Tempore
                  laborum nesciunt ut veniam, nemo officia ullam repudiandae
                  repellat veritatis unde reiciendis possimus animi autem natus
                </p>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="#">Read More</a>
          </div>
        </div>
      </section>
      {/* End Why Section */}
      {/* Info Section */}
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="#">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>Location</span>
                  </a>
                  <a href="#">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>Call +01 1234567890</span>
                  </a>
                  <a href="#">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>demo@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="info_social">
                <a href="#">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
                <a href="#">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  necessary, making this the first true generator on the
                  Internet. It uses a dictionary of over 200 Latin words,
                  combined with a handful
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a className="active" href="/">
                    Home
                  </a>
                  <a href="/about">About</a>
                  <a href="/services">Services</a>
                  <a href="/why">Why Us</a>
                  <a href="/team">Team</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Info Section */}
      {/* Footer Section */}
      <section className="footer_section">
        <div className="container">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            <a href="https://html.design/">Free Html Templates</a>
          </p>
        </div>
      </section>
      {/* End Footer Section */}
    </div>
  );
};

export default Home;
