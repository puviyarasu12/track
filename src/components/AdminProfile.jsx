import React, { useState, useCallback } from "react";
import "../styles/AdminProfile.css";

function AdminProfile({ onClose }) {
  const [profileData] = useState({
    name: "Administrator",
    email: "admin@trackzone.com",
    role: "Super Admin",
    department: "IT Management",
    joinDate: "2023-01-01",
    imageUrl: "https://images4.alphacoders.com/132/1327091.png"
  });

  const handleImageError = useCallback((e) => {
    e.target.src = "https://via.placeholder.com/120x120?text=Admin";
  }, []);

  return (
    <div className="admin-profile" onClick={(e) => e.target.className === 'admin-profile' && onClose()}>
      <div className="profile-card">
        <span className="close-btn" onClick={onClose}>✖</span>
        <img
          src={profileData.imageUrl}
          onError={handleImageError}
          alt="Admin Profile"
          className="profile-img"
        />
        <h2>{profileData.name}</h2>
        <div className="profile-info">
          <p><strong>Email:</strong> {profileData.email}</p>
          <p><strong>Role:</strong> {profileData.role}</p>
          <p><strong>Department:</strong> {profileData.department}</p>
          <p><strong>Join Date:</strong> {profileData.joinDate}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
