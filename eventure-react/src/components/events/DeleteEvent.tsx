import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

const DeleteEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If eventId is not present, redirect to events list
    if (!id) {
      navigate("/events/list");
    }
  }, [id, navigate]);

  const deleteEvent = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`http://localhost:8081/api/events/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete the event.");
      }

      return Swal.fire("Deleted!", "The event has been deleted.", "success");
    } catch (error) {
      return Swal.fire("Error!", error.message || "Failed to delete the event. Please try again.", "error");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteClick = async () => {
    if (!id || id.trim() === "") {
      return Swal.fire("Error!", "Event ID is missing or invalid.", "error");
    }

    // Confirm delete action with SweetAlert2
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this event?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      await deleteEvent(); // Proceed with the delete operation
      navigate("/events/list"); // Redirect to events list after deletion
    }
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <button onClick={handleDeleteClick} className="btn btn-danger" disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete Event"}
      </button>
    </div>
  );
};

export default DeleteEvent;
