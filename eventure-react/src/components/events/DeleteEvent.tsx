import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";


const DeleteEvent = () => {
  const { id } = useParams(); // Get eventId from the URL
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false); // State to control delete confirmation dialog


  useEffect(() => {
    // If eventId is not present, redirect to events list
    if (!id) {
      navigate("/events");
    }
  }, [id, navigate]);


  const handleDeleteClick = () => {
    // Show confirmation dialog when delete button is clicked
    setShowConfirmDialog(true);
  };


  const handleCancelDelete = () => {
    // Close the confirmation dialog without deleting
    setShowConfirmDialog(false);
  };


  const handleDelete = async () => {
    if (!id || id.trim() === "") {
      Swal.fire("Error!", "Event ID is missing or invalid.", "error");
      return;
    }


    setIsLoading(true);


    try {
      // Show SweetAlert2 confirmation dialog
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
        // Perform the delete operation (replace with your actual delete API call)
        const response = await fetch( `http://localhost:8081/api/events/${id}`, {
          method: "DELETE",
        });


        if (!response.ok) {
          throw new Error("Failed to delete the event.");
        }


        // Show success message and redirect
        Swal.fire("Deleted!", "The event has been deleted.", "success");
        navigate("/events"); // Redirect to the events list after deletion
      }
    } catch (error) {
      Swal.fire("Error!", "Failed to delete the event. Please try again.", "error");
    } finally {
      setIsLoading(false);
      setShowConfirmDialog(false); // Hide the confirmation dialog after the operation is complete
    }
  };


  return (
    <div>
     
      {isLoading && <div>Loading...</div>}


      {/* Display the Delete button */}
      <button onClick={handleDeleteClick} className="btn btn-danger" disabled={isLoading}>
        {isLoading ? "Deleting..." : "Delete Event"}
      </button>


      {/* Show confirmation dialog when delete button is clicked */}
      {showConfirmDialog && (
        <div className="alert alert-danger mt-3">
          <h5>Are you sure you want to delete this event?</h5>
          <div>
            <button
              className="btn btn-danger"
              onClick={handleDelete}
              disabled={isLoading}
            >
              Yes, Delete
            </button>
            <button
              className="btn btn-secondary ml-2"
              onClick={handleCancelDelete}
              disabled={isLoading}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};


export default DeleteEvent;
