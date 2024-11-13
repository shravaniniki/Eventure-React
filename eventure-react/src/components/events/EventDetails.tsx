import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./EventDetails.css";
import { format } from "date-fns";
import { IEvent } from "../../models/IEvents";
import DeleteEvent from "./DeleteEvent";


const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState<IEvent>(); // State to store event details

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/events/${id}`
        );
        console.log(response.data);
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };


    fetchEventDetails();
  }, []);


  if (!event) return <p>Loading...</p>;
  const formattedDate = event.e_date ? format(new Date(event.e_date), 'yyyy-MM-dd') : 'Date not available';


  return (
    <div className="row">
      <h1>Event Details</h1>
      <p>You are viewing the details of Event Id: #{id}</p>
      <div className="card gr-1">
        <div className="card-body">
          <h5 className="card-title">{event.name} </h5> <br />
          <h6 className="card-subtitle mb-2 text-body-secondary">Mode: {event.e_mode}</h6>
          <br />
          <h6 className="card-subtitle mb-2 text-body-secondary">Date: {formattedDate}</h6>
          <br />
          <h6 className="card-subtitle mb-2 text-body-secondary">Location: {event.location}</h6>
          <br />
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Description:{event.description}
          </h6>
          <br />
          {/* Buttons for update and delete */}
          <div className="button-container">
          <Link to={`/events/update/${id}`}>
              <button className="btn btn-update">Update</button>
            </Link>
            <button className="btn btn-delete">
							<DeleteEvent/>
						</button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default EventDetails;
