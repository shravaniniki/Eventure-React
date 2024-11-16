import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../events/ListEvents.css";
import { IEvent } from "../../models/IEvent";

const ListEventUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventList, setEventList] = useState<IEvent[]>([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const response = await axios.get("http://localhost:8081/api/events");
        setIsLoading(false);
        console.log(response.data);
        setEventList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getEvents();
  }, []);

  return (
    <>
      <div className="row">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">
            List of Events
          </h1>
          <div className="col-lg-6 mx-auto"></div>
        </div>
      </div>

      <div className="row justify-content-center">
        {isLoading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!isLoading &&
          eventList.map((event: IEvent, index) => {
            const gradientClass = `gr-${(index % 10) + 1}`; // Cycle through .gr-1, .gr-2, .gr-3
            const formattedDate = event.e_date
              ? format(new Date(event.e_date), "yyyy-MM-dd")
              : "Date not available";

            return (
              <div className="col-12 col-md-6 col-lg-4" key={event.id}>
                <div className={`card ${gradientClass}`}>
                  <div className="card-body">
                    <h5 className="card-title">{event.name}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Mode: {event.e_mode}
                    </h6>
                    <br />
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Date: {formattedDate}
                    </h6>
                    <br />
                    <h6 className="card-subtitle mb-2 text-body-secondary">
                      Location: {event.location}
                    </h6>
                    <br />

                    <Link to={`/event/${event.id}`} className="card-link">
                      View Event Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListEventUser;
