import { useNavigate } from 'react-router-dom';
import apiService from '../api-service/apiService';
import SignUpForm from '../signup/signup';
import './login.css';
import React, { useState } from 'react';
import { Toast, Spinner } from 'react-bootstrap';

function LoginForm() {
    const [errors, setError] = useState('');
    const [showSignUpForm, setShowSignUpForm] = useState(false); // initial state is false
    const navigate = useNavigate();

     const handleSubmit = (event) => {
        setError('');
        event.preventDefault();
        const { email, password } = event.target.elements;

        const userInfo = {
            email: email.value,
            password: password.value
        };

        apiService.post('/users/login', userInfo)
            .then(res => {
                if (!res.data.status) {
                    setError(res.data.message);
                } else {
                    setError('');
                    navigate('/dashboard', {state: {username: userInfo.email}});
                }
            })
            .catch(error => {
                alert(error);
            });
    }

    const handleSignUpClick = () => {
        setShowSignUpForm(true);
    };

    const handleSignUp = (formData) => {
        console.log(formData);
        setShowSignUpForm(false);
    };

    return (
        <>
            {errors && (
                <>
                    {/* <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner> */}
                    <Toast bg="danger" style={{color: 'white'}}>
                        <Toast.Body>{errors}</Toast.Body>
                    </Toast>
                </>
            )}
            {showSignUpForm ?
                    (
                        <SignUpForm handleSignUp={handleSignUp} />
                    ) :
                    (
                        <>
                            <div className="form">
                                <form onSubmit={handleSubmit}>
                                    <div className="input-container">
                                        <label>Email</label>
                                        <input type="text" name="email" required />
                                    </div>
                                    <div className="input-container">
                                        <label>Password</label>
                                        <input type="password" name="password" required />
                                    </div>

                                    <div className="button-container">
                                        <button className="login-btn" type="submit">Login</button>
                                        <button className="signup-btn" type="button" onClick={handleSignUpClick}>Sign Up</button>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}
        </>
    )
}

export default LoginForm;