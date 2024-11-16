import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>About</title>
        </Helmet>
      </HelmetProvider>
      <section className="bsb-about-6 py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Who are we?</h2>
              <p className="text-secondary mb-5 text-center lead fs-4">
                At Eventure, we specialize in organizing both technical and
                non-technical events, whether online or offline. Our dedicated
                team is committed to simplifying the event planning process
                through innovative technology and a user-friendly platform. From
                conferences to workshops, we’re here to support you every step
                of the way, ensuring your events are memorable and successful.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="mb-4 display-5 text-center">Why choose us?</h2>
          <div className="row gy-4 gy-lg-0 align-items-lg-center">
            <div className="col-12 col-lg-6">
              <img
                className="img-fluid rounded border border-dark"
                loading="lazy"
                src="https://media.istockphoto.com/id/1430871384/vector/event-planner-template-hand-drawn-cartoon-flat-illustration-with-planning-schedule-time.jpg?s=612x612&w=0&k=20&c=Aa-8uNDJCHmiilHB5A9-VYrbUmy5GhYG4VIfEtr9hmE="
                alt="About 6"
              />
            </div>
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-end">
                <div className="col-12 col-xl-11">
                  <div
                    className="accordion accordion-flush"
                    id="accordionAbout6"
                  >
                    <div className="accordion-item mb-4 border border-dark">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button bg-transparent fs-4 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Versatile Event Management
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionAbout6"
                      >
                        <div className="accordion-body">
                          Eventure caters to both technical and non-technical
                          events, providing tailored solutions for online and
                          offline formats, so you can create the perfect
                          experience for your audience.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 border border-dark">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className="accordion-button collapsed bg-transparent fs-4 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          User-Friendly Interface
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionAbout6"
                      >
                        <div className="accordion-body">
                          Our intuitive platform makes event planning a breeze,
                          allowing you to easily manage registrations,
                          schedules, and communications without the hassle.{" "}
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item mb-4 border border-dark">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className="accordion-button collapsed bg-transparent fs-4 fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Comprehensive Support
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionAbout6"
                      >
                        <div className="accordion-body">
                          With a dedicated support team ready to assist you,
                          Eventure ensures you have the guidance and resources
                          you need at every stage of your event, making the
                          planning process seamless and stress-free.{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
