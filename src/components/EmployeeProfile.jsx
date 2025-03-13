import React, { useState } from "react";
import "../styles/EmployeeDashboard.css";

const EmployeeProfile = ({ onClose }) => {
  const [employee] = useState({
    name: "Nico Robin",
    email: "robin@trackzone.com",
    role: "Software Engineer",
    department: "Development",
    joinDate: "2023-06-15",
    contactNumber: "+1234567890",
    imageUrl: "https://images6.alphacoders.com/132/1327088.png"
  });

  return (
    <div className="profile-popup">
      <div className="profile-content">
        <div className="profile-header">
          <h2>Employee Profile</h2>
          <span className="close-btn" onClick={onClose}>✖</span>
        </div>
        
        <div className="profile-image">
          <img src={employee.imageUrl} alt={employee.name} />
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

export default EmployeeProfile;
