import axios from "axios";
import { useState } from "react";
import { IEvent } from "../../models/IEvent";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Row, Col, FloatingLabel, Button } from "react-bootstrap";

export const UserRegistration = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit } = useForm<IEvent>();

  const onSubmit = (formData: IEvent) => {
    console.log(formData);
    const saveEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8081/api/users",
          formData
        );
        console.log("success");
        console.log(response.data);
        setIsSaved(true);
        setShowError(false);
      } catch (error) {
        console.error("Error saving event:", error);
        setShowError(true);
      }
    };
    saveEmployee();
  };

  const handleForm = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1>Register Event</h1> <button className="btn btn-dark">Go Back</button>
      </div>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit(onSubmit)}
      >
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="name"
              {...register("organizer")}
            />

          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom02">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter Your Email"
              {...register("email")}
            />

          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom03">
            <Form.Label>PhoneNo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              {...register("phone")}
              required
            />

          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Event Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Event Name"
              {...register("name")}
              required
            />
          </Form.Group>
           
        <Button type="submit">
           Register
        </Button>
      </Form>
    </div>
  </div>
  </>
  )
}
