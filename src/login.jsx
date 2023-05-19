import React, { useState } from 'react';
import LoginForm from './login.form';

function Login({userData}) {
    return (
        <div className="app">
            <div className="login-form">
                <LoginForm data={userData} />
            </div>
        </div>
    );
}

export default Login;