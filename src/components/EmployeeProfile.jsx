import React from "react";
import "../styles/EmployeeDashboard.css"; // Make sure you have a CSS file for styling

const EmployeeProfile = ({ name, email, role, onClose }) => {
  return (
    <div className="profile-popup">
      <div className="profile-content">
        <h2 className="profile-title">
          Emplyoee Profile <span className="close-btn" onClick={onClose}>❌</span>
        </h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Role:</strong> {role}</p>
      </div>
    </div>
  );
};

export default EmployeeProfile;
