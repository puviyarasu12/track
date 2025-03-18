import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebarad.css";

function SideBarad() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebarad ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? '☰' : '☰'}
        </button>
        {isOpen && <h2>Admin Panel</h2>}
      </div>
      <ul>
        <li>
          <NavLink to="/admin" end>
            <span>📊</span> {isOpen && "Dashboard"}
          </NavLink>
        </li>
        <li>
        <NavLink to="/admin/reportAnalysis">
  <span>📈</span> {isOpen && "Analysis"}
</NavLink>

        </li>
        <li>
          <NavLink to="/admin/employee-management">
            <span>👨‍💼</span> {isOpen && "Employee Management"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/geofence-management">
            <span>📍</span> {isOpen && "Geofence Management"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/attendance-logs">
            <span>🕒</span> {isOpen && "Attendance Logs"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/payroll-management">
            <span>💰</span> {isOpen && "Payroll Management"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/leave-requests">
            <span>📆</span> {isOpen && "Leave Requests"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/shift-scheduling">
            <span>⏳</span> {isOpen && "Shift Scheduling"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/notifications">
            <span>🔔</span> {isOpen && "Notifications & Alerts"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/settings-permissions">
            <span>⚙️</span> {isOpen && "Settings & Permissions"}
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="logout-link">
            <span>🚪</span> {isOpen && "Logout"}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBarad;
