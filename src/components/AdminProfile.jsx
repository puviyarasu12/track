import React from "react";
import "../styles/AdminProfile.css";
//import profilePic from "../assets/profile.jpg"; // Update the path accordingly

function AdminProfile({ onClose }) {
  return (
    <div className="admin-profile">
      <div className="profile-card">
        <span className="close-btn" onClick={onClose}>✖</span>
        <img src={"https://images4.alphacoders.com/132/1327091.png"} alt="Admin Profile" className="profile-img" />
        <h2>Admin Profile</h2>
        <p><strong>Name:</strong> Admin</p>
        <p><strong>Email:</strong> admin@example.com</p>
        <p><strong>Role:</strong> Super Admin</p>
      </div>
    </div>
  );
}

export default AdminProfile;
