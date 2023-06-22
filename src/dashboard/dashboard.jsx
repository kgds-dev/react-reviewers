import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
    const location = useLocation();
    return(
        <div className="dashboard-container">
            <h1>Welcome {location.state.username}</h1>
        </div>
    )
}

export default Dashboard;