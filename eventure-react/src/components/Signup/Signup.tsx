import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form'; // Import the useForm hook
import styles from './Signup.module.css';

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm(); // Hook for handling forms
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const onSubmit = async (data: any) => {
    console.log('Data being sent to backend:', data); // Log the form data
    try {
      const response = await axios.post('http://localhost:8081/api/sign-up', data);
      setMessage('User registered successfully!');
      setError('');
    } catch (err) {
      console.error('Error occurred:', err);
      setMessage('');
      setError('Failed to register user. Please try again.');
    }
  };
  return (
    <div className={styles.signupContainer}>
      <h2 className={styles.title}>Sign Up</h2>

      {/* Display success/error messages */}
      {message && <div className={styles.successMessage}>{message}</div>}
      {error && <div className={styles.errorMessage}>{error}</div>}

      {/* Use handleSubmit for form submission */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            className={styles.inputField}
            {...register('name', { required: 'Name is required' })} // Register input with validation
          />
          {errors.name && (
            <p className="text-danger">
              {typeof errors.name.message === 'string' ? errors.name.message : 'Invalid name'}
            </p>
          )}
        </div>

        {/* Phone Number */}
        <div className={styles.formGroup}>
          <label htmlFor="phoneNo" className={styles.label}>Phone Number</label>
          <input
            type="text"
            id="phoneNo"
            className={styles.inputField}
            {...register('phoneNo', { required: 'Phone number is required' })} // Register input with validation
          />
          {errors.phoneNo && (
            <p className="text-danger">
              {typeof errors.phoneNo.message === 'string' ? errors.phoneNo.message : 'Invalid phone number'}
            </p>
          )}
        </div>

        {/* Email */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            className={styles.inputField}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: 'Invalid email format',
              },
            })} // Validation for email format
          />
          {errors.email && (
            <p className="text-danger">
              {typeof errors.email.message === 'string' ? errors.email.message : 'Invalid email'}
            </p>
          )}
        </div>

        {/* Password */}
        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>Password</label>
          <input
            type="password"
            id="password"
            className={styles.inputField}
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Password must be at least 6 characters' },
            })} // Password validation
          />
          {errors.password && (
            <p className="text-danger">
              {typeof errors.password.message === 'string' ? errors.password.message : 'Invalid password'}
            </p>
          )}
        </div>

        {/* User Type */}
        <div className={styles.formGroup}>
          <label htmlFor="type" className={styles.label}>User Type</label>
          <select
            id="type"
            className={styles.inputField}
            {...register('type')} // Register input without validation
          >
            <option value="user">User</option>
            <option value="organizer">Event Organizer</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className={styles.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
