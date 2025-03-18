import React, { useState, useEffect, useCallback } from "react";
import { Outlet, Link } from "react-router-dom";
import SideBarad from "./SideBarad";
import AdminProfile from "../components/AdminProfile";
import Footer from "../components/Footer";
import "../styles/AdminDashboard.css";


function AdminDashboard() {
  const [showProfile, setShowProfile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768);

  const adminName = "Zoro";
  const adminPhoto = "https://images3.alphacoders.com/134/1345517.jpeg"; // Dummy avatar

  const toggleProfile = useCallback(() => {
    setShowProfile((prev) => !prev);
  }, []);

  const closeProfile = useCallback(() => {
    setShowProfile(false);
  }, []);

  // Close modal on "Esc" key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeProfile();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeProfile]);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="dashboard-container">
      {/* Fixed Header */}
      <header className="fixed-header">
        <div className="logo">
          <Link to="/" className="logo-text">TrackZone</Link>
        </div>
        <nav className="nav-links">
          <Link to="/home">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={() => setSidebarOpen(!sidebarOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Sidebar with toggle class */}
      <div className={`sidebarad ${sidebarOpen ? 'show' : ''}`}>
        <SideBarad />
      </div>

      <div className="dashboard-main">
        {/* Top Header */}
        <div className="dashboard-header">
          <h1>Welcome, {adminName} 👋</h1>

          {/* Profile Section */}
          <div className="profile-section">
            <img
              src={adminPhoto}
              alt="Admin Profile"
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
              <AdminProfile onClose={closeProfile} />
            </div>
          </div>
        )}

        {/* Page Content (Only Show If Profile is Closed) */}
        <div className="dashboard-content">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
