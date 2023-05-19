import React, { useState } from 'react';


function LoginForm({ data }) {

    const errorMessages = {
        userName: 'username is not valid',
        password: 'password is not valid'
    };

    const [isSubmitted, setSubmit] = useState(false);
    const [errors, setError] = useState({});
    const [loggedInUser, setUser] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const { username, password } = event.target.elements;

        const userData = data.find(user => user.username === username.value);

        if (!userData) {
            setError({ name: 'username', message: errorMessages.userName });
        } else if (userData.password !== password.value) {
            setError({ name: 'password', message: errorMessages.password });
        } else {
            setSubmit(true);
            setUser(userData.username);
        }
    }

    const errorHandler = name => {
       return name === errors.name && (<div className="error">{errors.message}</div>)
    }

    return (
      <>
        {isSubmitted ? <div> {loggedInUser} Succesfully logged in</div> : (
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>Username</label>
                        <input type="text" name="username" required/>
                        {errorHandler("username")}
                    </div>
                    <div className="input-container">
                        <label>Password</label>
                        <input type="password" name="password" required/>
                        {errorHandler("password")}
                    </div>

                    <div className="button-container">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        )}
      </>
    )
}

export default LoginForm;