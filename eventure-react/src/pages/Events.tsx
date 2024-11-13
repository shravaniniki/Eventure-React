import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IEvent } from "../models/IEvents";

const Events = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [eventList, setEventList] = useState<IEvent[]>([]);

  useEffect(() => {
    // Will be called after the initial rendering and only once
    // whenever the component is coming into browser view -- this will be called
    // ideal place for us to hit the rest api.
    // 1. What's the REST API URL?  https://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method? GET
    // 3. What's the REST API client tool? axios (npm i axios)

    console.log("Inside useEffect");
    async function getEvents() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(response.data);
        setIsLoading(false);
        setEventList(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getEvents();
  }, []); // dependency list

  return (
    <>
      <div className="row">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">
            Welcome to Event Manager
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus corrupti dolore praesentium debitis. Repellendus
              nobis quas quae consectetur iste ad odio! Explicabo sequi qui
              pariatur ipsam a eligendi consectetur quam?
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <Link
                className="btn btn-primary btn-lg px-4 gap-3"
                to="/events/add"
              >
                Add Employee
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Listing Employees</h2>

        {isLoading && (
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {eventList.map((event: IEvent) => {
          return (
            <div className="col-md-3" key={event.id}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Phone: {event.phone}
                  </h6>
                  <Link to={`/events/${event.id}`} className="card-link">
                    View More
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

export default Events;