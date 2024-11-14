import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory



const UpdateEvent = () => {
  const { id } = useParams(); // Get id from URL parameters
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);
  // Set up React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
  });
  // Fetch event details by ID
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8081/api/events/${id}`
        );
        setEventData(response.data);
        // Pre-populate the form with the fetched event data
        setValue("name", response.data.name);
        setValue("organizer", response.data.organizer);
        setValue("email", response.data.email);
        setValue("phone", response.data.phone);
        setValue("e_date", response.data.e_date);
        setValue("location", response.data.location);
        setValue("duration", response.data.duration);
        setValue("maxParticipants", response.data.maxParticipants);
        setValue("e_mode", response.data.e_mode);
        setValue("description", response.data.description);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };
    fetchEvent();
  }, [id, setValue]);
  // Handle form submission
  const onSubmit = async (data: any) => {
    try {
      await axios.put(`http://localhost:8081/api/events/${id}`, data);
      alert("Event updated successfully!");
      navigate("/events"); // Redirect to the events list page
    } catch (error) {
      console.error("Error updating event:", error);
      alert("Failed to update event.");
    }
  };

  // Loading state (while fetching event data)
  if (!eventData) return <p>Loading...</p>;

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
    <div className="col-md-10 col-lg-8"> 
   <div className="card shadow-sm">
     <div className="card-body">
       <h2 className="card-title mb-4 ">Update Event</h2>
       <form
         onSubmit={handleSubmit(onSubmit)}
         className="needs-validation"
         noValidate
       >
         <div className="mb-3 ">
           <label htmlFor="name" className="form-label">
             Event Name
           </label>
           <input
             type="text"
             id="name"
             className="form-control"
             {...register("name", { required: true })}
             required
           />
           {errors.name && (
             <p className="text-danger">
               {typeof errors.name.message || "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3  ">
           <label htmlFor="organizer" className="form-label">
             Organizer
           </label>
           <input
             type="text"
             id="organizer"
             className="form-control"
             {...register("organizer", {
               required: "Organizer is required",
             })}
           />
           {errors.organizer && (
             <p className="text-danger">
               {" "}
               {typeof errors.organizer.message === "string"
                 ? errors.organizer.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3  ">
           <label htmlFor="email" className="form-label">
             Email
           </label>
           <input
             type="email"
             id="email"
             className="form-control"
             {...register("email", {
               required: "Email is required",
               pattern: {
                 value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                 message: "Invalid email format",
               },
             })}
           />
           {errors.email && (
             <p className="text-danger">
               {" "}
               {typeof errors.email.message === "string"
                 ? errors.email.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3  ">
           <label htmlFor="phone" className="form-label">
             Phone
           </label>
           <input
             type="text"
             id="phone"
             className="form-control"
             {...register("phone", { required: "Phone number is required" })}
           />
           {errors.phone && (
             <p className="text-danger">
               {" "}
               {typeof errors.phone.message === "string"
                 ? errors.phone.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3 ">
           <label htmlFor="e_date" className="form-label">
             Event Date
           </label>
           <input
             type="date"
             id="e_date"
             className="form-control"
             {...register("e_date", { required: "Event date is required" })}
           />
           {errors.e_date && (
             <p className="text-danger">
               {" "}
               {typeof errors.e_date.message === "string"
                 ? errors.e_date.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3 ">
           <label htmlFor="location" className="form-label">
             Location
           </label>
           <input
             type="text"
             id="location"
             className="form-control"
             {...register("location", { required: "Location is required" })}
           />
           {errors.location && (
             <p className="text-danger">
               {" "}
               {typeof errors.location.message === "string"
                 ? errors.location.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3  ">
           <label htmlFor="duration" className="form-label">
             Duration
           </label>
           <input
             type="text"
             id="duration"
             className="form-control"
             {...register("duration", { required: "Duration is required" })}
           />
           {errors.duration && (
             <p className="text-danger">
               {" "}
               {typeof errors.duration.message === "string"
                 ? errors.duration.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3 ">
           <label htmlFor="maxParticipants" className="form-label">
             Max Participants
           </label>
           <input
             type="number"
             id="maxParticipants"
             className="form-control"
             {...register("maxParticipants", {
               required: "Max participants is required",
               min: { value: 1, message: "Must be greater than 0" },
             })}
           />
           {errors.maxParticipants && (
             <p className="text-danger">
               {" "}
               {typeof errors.maxParticipants.message === "string"
                 ? errors.maxParticipants.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3  ">
           <label htmlFor="e_mode" className="form-label">
             Event Mode
           </label>
           <div>
             <div className="form-check form-check-inline">
               <input
                 type="radio"
                 id="online"
                 value="Online"
                 className="form-check-input"
                 {...register("e_mode", {
                   required: "Event mode is required",
                 })}
               />
               <label htmlFor="online" className="form-check-label">
                 Online
               </label>
             </div>

             <div className="form-check form-check-inline">
               <input
                 type="radio"
                 id="offline"
                 value="Offline"
                 className="form-check-input"
                 {...register("e_mode", {
                   required: "Event mode is required",
                 })}
               />
               <label htmlFor="offline" className="form-check-label">
                 Offline
               </label>
             </div>
           </div>
           {errors.e_mode && (
             <p className="text-danger">
               {typeof errors.e_mode.message === "string"
                 ? errors.e_mode.message
                 : "Please select an event mode"}
             </p>
           )}
         </div>

         <div className="mb-3  ">
           <label htmlFor="description" className="form-label">
             Description
           </label>
           <textarea
             id="description"
             className="form-control"
             {...register("description", {
               required: "Description is required",
             })}
           />
           {errors.description && (
             <p className="text-danger">
               {" "}
               {typeof errors.description.message === "string"
                 ? errors.description.message
                 : "Invalid event name"}
             </p>
           )}
         </div>

         <div className="mb-3 d-flex justify-content-center">
           <button type="submit" className="btn btn-primary w-30">
             Update Event
           </button>
         </div>
       </form>
     </div>
   </div>
 </div>
 </div>
);
};

export default UpdateEvent;
