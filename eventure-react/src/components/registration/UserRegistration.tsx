import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form, Col, Toast, ToastContainer } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './UserRegistration.css'; 

const UserRegistration = () => {
  const { id } = useParams<{ id: string }>();
  const eventId = parseInt(id || '0');
  const { register, handleSubmit } = useForm();
  const [showToast, setShowToast] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [isSaved, setIsSaved] = useState(false);
  const [userPhoneNo,setUserPhoneNo] = useState("");

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    const storedPhoneNo = localStorage.getItem('userPhoneNo');
    if (storedEmail && storedName && storedPhoneNo) {
      setUserEmail(storedEmail);
      setUserName(storedName);
      setUserPhoneNo(storedPhoneNo);
    }
  }, []);

  const onSubmit = async (data: any) => {
    
    data.eventId = eventId;
    data.email = userEmail;
    data.name = userName;
    data.phoneNo = userPhoneNo;
    try {
      const response = await axios.post('http://localhost:8081/api/register', data);
      console.log('Registration Successful:', response.data);
      setIsSaved(true);
      setShowToast(true);
    } catch (err: any) {
      console.error('Error during registration:', err);
    }
  };

  return (
    <>
      <div className="container">
        <h2>Register for Event</h2>

        <Form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Form.Group as={Col} md="12">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={userName}
              disabled
              {...register('name')}
            />
          </Form.Group>

          <Form.Group as={Col} md="12">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              defaultValue={userEmail}
              disabled
              {...register('email')}
            />
          </Form.Group>

          <Form.Group as={Col} md="12">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your phone number"
              defaultValue={userPhoneNo}
              {...register('phoneNo')}
            />
          </Form.Group>
<br></br>
          <Button type="submit" className="submitButton">Register</Button>
        </Form>

        {/* Toast for successful registration */}
        <ToastContainer className="p-3" position="top-center">
          <Toast show={showToast} onClose={() => setShowToast(false)} delay={3000} autohide>
            <Toast.Body className="bg-success text-white">Registration Successful!</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
};

export default UserRegistration;
