import apiService from '../api-service/apiService';
import './signup.css';
import React, { useEffect, useState } from 'react';
import {Container , Alert, Spinner} from 'react-bootstrap'  

const SignupForm = ({ handleSignUp }) => {
  const [errors, setErrors] = useState({});
  const [isSignedUp, setSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
    
  const handleSubmit = event => {
    event.preventDefault();
    
    apiService.post('/users/signup', formData)
      .then(response => {
        if (!response.data.status) {
          return setErrors({ name: response.data.errorName, message: response.data.message });
        } else {
          setSignUp(true);

          setTimeout(() => {
            handleSignUp(formData);
          }, 2000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      })
  }

  const errorHandler = (name) => {
    return name === errors.name && <div className="error">{errors.message}</div>;
  };

  return (
    <React.Fragment>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>First name</label>
            <input 
              type="text" 
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange} 
            />
            {errorHandler("firstName")}
          </div>
          <div className="input-container">
            <label>Last name</label>
            <input 
              type="text" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange} 
            />
            {errorHandler("lastName")}
          </div>
          <div className="input-container">
            <label>Email</label>
            <input 
              type="text" 
              name="email" 
              value={formData.email}
              onChange={handleChange} 
            />
            {errorHandler("email")}
            {errorHandler("emailExists")}
          </div>
          <div className="input-container">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password}
              onChange={handleChange} 
            />
            {errorHandler("password")}
          </div>
          <div className="input-container">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleChange} 
            />
            {errorHandler("confirmPassword")}
          </div>

          <div className="button-container">
            <button className="signup-btn" type="submit">Register</button>
          </div>
        </form>
      </div>
      {isSignedUp && (
        <Container className='p-4'>  
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <Alert variant="success">Data is saved sucessfully</Alert>  
        </Container>  
      )}
    </React.Fragment>
    
  )
}

export default SignupForm;