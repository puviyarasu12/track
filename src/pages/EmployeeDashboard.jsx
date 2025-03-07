import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import EmployeeProfile from "../components/EmployeeProfile";
import "../styles/EmployeeDashboard.css";

function EmployeeDashboard() {
  const [showProfile, setShowProfile] = useState(false);

  const employeeName = "Nico Robin"; 
  const employeePhoto = "https://i.ytimg.com/vi/jFNC27WZaL0/maxresdefault.jpg"; 

  const toggleProfile = () => setShowProfile(true);
  const closeProfile = () => setShowProfile(false);

  // Close modal on "Esc" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeProfile();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      <div className="dashboard-main">
        {/* Top Header */}
        <div className="dashboard-header">
          <h1>Welcome, {employeeName} 👋</h1>
          
          {/* Profile Section */}
          <div className="profile-section">
            <img
              src={employeePhoto}
              alt="Profile"
              className="profile-pic"
              onClick={toggleProfile}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        {/* Profile Modal */}
        {showProfile && (
          <div className="profile-modal-overlay" onClick={closeProfile}>
            <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
              <span className="close-btn" onClick={closeProfile}>&times;</span>
              <EmployeeProfile />
            </div>
          </div>
        )}

        {/* Page Content (Only Show If Profile is Closed) */}
        {!showProfile && (
          <div className="dashboard-content">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
