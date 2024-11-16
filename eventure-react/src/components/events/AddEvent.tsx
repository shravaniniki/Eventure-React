import axios from "axios";
import { useState } from "react";
import { IEvent } from "../../models/IEvent";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import { Row, Col, FloatingLabel, Button } from "react-bootstrap";

const AddEvent = () => {
  const [isSaved, setIsSaved] = useState(false);
  const [showError, setShowError] = useState(false);
  const [validated, setValidated] = useState(false);

  const { register, handleSubmit } = useForm<IEvent>();

  const onSubmit = (formData: IEvent) => {
    console.log(formData);
    const saveEmployee = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8081/api/events",
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
            <h1>Add Event</h1>
          </div>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="name"
                  {...register("organizer")}
                />
                <Form.Control.Feedback type="invalid">
                  Enter name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email")}
                />
                <Form.Control.Feedback type="invalid">
                  Enter email
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom03">
                <Form.Label>PhoneNo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Phone Number"
                  {...register("phone")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  {" "}
                  Enter 10 digit phone number
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationCustom04">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Event Name"
                  {...register("name")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Event Name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom05">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Date[YYYY-MM-DD]"
                  {...register("e_date")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Date Format
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom06">
                <Form.Label>Duration</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Duration[hh:mm]"
                  {...register("duration")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter Duration
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="3" controlId="validationCustom07">
                <Form.Label>Attendees</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Maximum no of participants"
                  {...register("maxParticipants")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Enter Maximum count
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="3" controlId="validationCustom08">
                <Form.Label>Mode</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  {...register("e_mode", {
                    onChange: (e) => {
                      const locationInput = document.getElementById(
                        "validationCustom09"
                      ) as HTMLInputElement;
                      if (e.target.value === "Online") {
                        locationInput.disabled = true;
                      } else {
                        locationInput.disabled = false;
                      }
                    },
                  })}
                  required
                >
                  <option value="">Select Event Mode</option>
                  <option value="Offline">Offline</option>
                  <option value="Online">Online</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="5" controlId="validationCustom09">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Event Location"
                  {...register("location")}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a Event Address
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom10">
                <FloatingLabel
                  controlId="floatingTextarea1"
                  label="Description"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave Description here"
                    style={{ height: "80px" }}
                    {...register("description")}
                    required
                  />
                </FloatingLabel>
                <Form.Control.Feedback type="invalid">
                  Enter Description
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit" onClick={handleForm}>
              Add Event
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
