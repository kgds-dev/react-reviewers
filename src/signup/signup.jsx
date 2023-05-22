import './signup.css';
import React, { useState } from 'react';

const SignupForm = ({ handleSignUp }) => {
  const errorMessages = {
    userName: 'username is not valid',
    password: 'password is not valid',
    confirmPassword: 'passwords does not match'
  };

  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  }
    
  const handleSubmit = event => {
    event.preventDefault();

    const { username, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setErrors({ name: 'confirmPassword', message: errorMessages.confirmPassword });
    } else if (!password) {
      setErrors({ name: 'password', message: errorMessages.password });
    } else if (!username) {
      setErrors({ name: 'username', message: errorMessages.userName });
    } else {
      handleSignUp(formData);
      setErrors({});
    }
  }

  const errorHandler = (name) => {
    return name === errors.name && <div className="error">{errors.message}</div>;
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input 
            type="text" 
            name="username" 
            value={formData.username}
            onChange={handleChange} 
            required
          />
          {errorHandler("username")}
        </div>
        <div className="input-container">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password}
            onChange={handleChange} 
            required
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
            required
          />
          {errorHandler("confirmPassword")}
        </div>

        <div className="button-container">
          <button className="signup-btn" type="submit">Register</button>
        </div>
      </form>
    </div>
  )
}

export default SignupForm;