import React, { useState, useEffect } from "react";
import "../styles/EmployeeDashboard.css";

const AdminProfile = ({ onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [employee] = useState({
    name: "Zoro",
    email: "Zoro@trackzone.com",
    role: "Software Engineer",
    department: "Development",
    joinDate: "2023-06-15",
    contactNumber: "+1234567890",
    imageUrl: "https://images3.alphacoders.com/134/1345517.jpeg"
  });

  useEffect(() => {
    const img = new Image();
    img.src = employee.imageUrl;
    img.onload = () => setIsLoading(false);
  }, [employee.imageUrl]);

  return (
    <div className="profile-popup" onClick={onClose}>
      <div className="profile-content" onClick={e => e.stopPropagation()}>
        <div className="profile-header">
          <h2>Admin Profile</h2>
          <span className="close-btn" onClick={onClose}>✖</span>
        </div>
        
        <div className="profile-image">
          {isLoading ? (
            <div className="loading-spinner">Loading...</div>
          ) : (
            <img 
              src={employee.imageUrl} 
              alt={employee.name}
              className="profile-img"
            />
          )}
        </div>
        
        <div className="profile-details">
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Role:</strong> {employee.role}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Join Date:</strong> {employee.joinDate}</p>
          <p><strong>Contact:</strong> {employee.contactNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
