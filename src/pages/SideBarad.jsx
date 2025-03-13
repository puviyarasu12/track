import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Sidebarad.css";

function SideBarad() {
  return (
    <div className="sidebarad">
      <h2>Admin Panel</h2>
      <ul>
        <li>
          <NavLink to="/admin" end>
            <span>📊</span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reportAnalysis">
          <span>📊</span> Analysis
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/employee-management">
            <span>👨‍💼</span> Employee Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/geofence-management">
            <span>📍</span> Geofence Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/attendance-logs">
            <span>🕒</span> Attendance Logs
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/payroll-management">
            <span>💰</span> Payroll Management
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/leave-requests">
            <span>📆</span> Leave Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/shift-scheduling">
            <span>⏳</span> Shift Scheduling
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/reports-analytics">
            <span>📑</span> Reports & Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/notifications">
            <span>🔔</span> Notifications & Alerts
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/settings-permissions">
            <span>⚙️</span> Settings & Permissions
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBarad;
