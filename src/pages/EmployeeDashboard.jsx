import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import EmployeeProfile from "../components/EmployeeProfile";
import Footer from "../components/Footer";
import "../styles/EmployeeDashboard.css";

function EmployeeDashboard() {
  const [showProfile, setShowProfile] = useState(false);

  const employeeName = "Nico Robin"; 
  const employeePhoto = "https://images6.alphacoders.com/937/937800.png"; 

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
          {/* Fixed Header */}
          <header className="fixed-header">
            <div className="logo">
              <Link to="/" className="logo-text">TrackZone</Link>
            </div>
            <nav className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
            </nav>
          </header>

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
              style={{ cursor: "pointer", width: "25px", height: "25px" }}
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
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}

export default EmployeeDashboard;
