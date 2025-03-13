import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear authentication token
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-title">{isCollapsed ? "EP" : "Employee Portal"}</h2>
        <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
          {isCollapsed ? "➡️" : "⬅️"}
        </button>
      </div>
      
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/employee" className={({ isActive }) => isActive ? "active" : ""}>
            🏠 {isCollapsed ? "" : "Dashboard"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/attendance-history" className={({ isActive }) => isActive ? "active" : ""}>
            📅 {isCollapsed ? "" : "Attendance History"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/salary-details" className={({ isActive }) => isActive ? "active" : ""}>
            💰 {isCollapsed ? "" : "Salary Details"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/leave-management" className={({ isActive }) => isActive ? "active" : ""}>
            📝 {isCollapsed ? "" : "Leave Management"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/task-board" className={({ isActive }) => isActive ? "active" : ""}>
            📋 {isCollapsed ? "" : "Task Board"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/announcements" className={({ isActive }) => isActive ? "active" : ""}>
            📢 {isCollapsed ? "" : "Announcements"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/change-password" className={({ isActive }) => isActive ? "active" : ""}>
            🔒 {isCollapsed ? "" : "Change Password"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/notifications" className={({ isActive }) => isActive ? "active" : ""}>
            🔔 {isCollapsed ? "" : "Notifications"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee/help-support" className={({ isActive }) => isActive ? "active" : ""}>
            ❓ {isCollapsed ? "" : "Help & Support"}
          </NavLink>
        </li>
        <li>
          <button className="logout-btn" onClick={handleLogout}>
            📄 {isCollapsed ? "" : "Logout"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
