import SignUpForm from '../signup/signup';
import './login.css';
import React, { useEffect, useState } from 'react';


function LoginForm({ userData }) {
    const errorMessages = {
        userName: 'username is not valid',
        password: 'password is not valid'
    };

    const [isSubmitted, setSubmit] = useState(false);
    const [errors, setError] = useState({});
    const [loggedInUser, setUser] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false); // initial state is false

    const handleSubmit = event => {
        event.preventDefault();

        const { username, password } = event.target.elements;

        const response = userData.find(user => user.username === username.value);

        if (!response) {
            setError({ name: 'username', message: errorMessages.userName });
        } else if (response.password !== password.value) {
            setError({ name: 'password', message: errorMessages.password });
        } else {
            setSubmit(true);
            setUser(response.username);
        }
    }

    const errorHandler = name => {
        return name === errors.name && (<div className="error">{errors.message}</div>)
    }

    const handleSignUpClick = () => {
        setShowSignUpForm(true);
    };
    
    const handleSignUp = (formData) => {
        console.log('Sign-up form data:', formData);
        setShowSignUpForm(false);
        userData.push(formData);
        console.log(userData);
    };

    return (
        <>
            {isSubmitted ?
                (<div> {loggedInUser} Succesfully logged in</div>) :
                showSignUpForm ?
                    (
                        <SignUpForm handleSignUp={handleSignUp} />
                    ) :
                    (
                        <div className="form">
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>Username</label>
                                    <input type="text" name="username" required />
                                    {errorHandler("username")}
                                </div>
                                <div className="input-container">
                                    <label>Password</label>
                                    <input type="password" name="password" required />
                                    {errorHandler("password")}
                                </div>

                                <div className="button-container">
                                    <button className="login-btn" type="submit">Login</button>
                                    <button className="signup-btn" type="button" onClick={handleSignUpClick}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    )}
        </>
    )
}

export default LoginForm;