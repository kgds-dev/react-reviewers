import React, { useState } from 'react';
import LoginForm from './login.form';

const Login = ({data}) => {
    return (
        <div className="app">
            <div className="login-form">
                <LoginForm userData={data} />
            </div>
        </div>
    );
}

export default Login;