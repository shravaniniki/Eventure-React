import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import axios from "axios";

const DeleteEvent = () => {
  const { id } = useParams();  // Get event id from the URL
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);  // State to store event details
  const [isLoading, setIsLoading] = useState(false);  // Loading state for the fetch and delete

  // Fetch the event details when the page loads
  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/events/${id}`);
        setEvent(response.data);  // Store event data in state
      } catch (error) {
        console.error("Error fetching event details:", error);
        Swal.fire("Error!", "Failed to fetch event details.", "error");
        navigate("/events/list");  // Redirect to event list if fetching fails
      }
    };

    if (id) {
      fetchEventDetails();  // Fetch event details if id is valid
    } else {
      navigate("/events/list");  // Redirect to list if there's no valid ID
    }
  }, [id, navigate]);

  // Function to handle deleting the event
  const deleteEvent = async () => {
    setIsLoading(true);  // Start loading indicator

    try {
      const response = await fetch(`http://localhost:8081/api/events/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the event.");
      }

      // Show success message using SweetAlert
      await Swal.fire("Deleted!", "The event has been deleted.", "success");
      navigate("/events/list", { replace: true });  // Redirect to events list after successful delete
    } catch (error) {
      await Swal.fire("Error!", error.message || "Failed to delete the event.", "error");
    } finally {
      setIsLoading(false);  // End loading indicator
    }
  };

  const handleDeleteClick = async () => {
    if (!id || id.trim() === "") {
      return Swal.fire("Error!", "Event ID is missing or invalid.", "error");
    }

    // Confirm deletion with SweetAlert
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Do you really want to delete the event: "${event?.name}"?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      await deleteEvent();  // Proceed with deletion if confirmed
    }
  };

  if (!event) {
    return <div>Loading event details...</div>;  // Show loading message while event data is being fetched
  }

  return (
    <div className="delete-event-container">
      <h1>Delete Event</h1>
      <div className="event-details">
        <h3>Are you sure you want to delete this event?</h3>
        <p><strong>Event Name:</strong> {event.name}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Date:</strong> {new Date(event.e_date).toLocaleDateString()}</p>
        <p><strong>Description:</strong> {event.description}</p>
        <p><strong>Mode:</strong> {event.e_mode}</p>
        <p><strong>Organizer:</strong> {event.organizer}</p>
        <p><strong>Max Participants:</strong> {event.maxParticipants}</p>
        <p><strong>Phone:</strong> {event.phone}</p>
      </div>
      
      <button
        onClick={handleDeleteClick}
        className="btn btn-danger"
        disabled={isLoading}
      >
        {isLoading ? "Deleting..." : "Delete Event"}
      </button>
    </div>
  );
};

export default DeleteEvent;
