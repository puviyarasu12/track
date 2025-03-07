import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token'); // Remove authentication token
    localStorage.removeItem('userRole'); // Remove user role
    navigate('/'); // Redirect to home/login page
  }, [navigate]);

  return (
    <div>
      <h2>Logging Out...</h2>
    </div>
  );
};

export default Logout;
