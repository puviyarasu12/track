import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Sidebar.css";


const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(
    localStorage.getItem("sidebarCollapsed") === "true"
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Handle sidebar collapse state
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", isCollapsed);
  }, [isCollapsed]);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleSidebar = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    } else {
      setIsCollapsed(!isCollapsed);
    }
  };

  const menuItems = [
    { path: "/employee", icon: "🏠", label: "Dashboard" },
    { path: "/employee/attendance-history", icon: "📅", label: "Attendance History" },
    { path: "/employee/salary-details", icon: "💰", label: "Salary Details" },
    { path: "/employee/leave-management", icon: "📝", label: "Leave Management" },
    { path: "/employee/task-board", icon: "📋", label: "Task Board" },
    { path: "/employee/announcements", icon: "📢", label: "Announcements" },
    { path: "/employee/change-password", icon: "🔒", label: "Change Password" },
    { path: "/employee/notifications", icon: "🔔", label: "Notifications" },
    { path: "/employee/help-support", icon: "❓", label: "Help & Support" },
  ];

  return (
    <>
      {isMobile && (
        <div 
          className={`sidebar-overlay ${isOpen ? "active" : ""}`} 
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <nav className={`sidebar ${isCollapsed ? "collapsed" : ""} ${isMobile && isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h2 className="sidebar-title">
            {isCollapsed ? "EP" : "Employee Portal"}
          </h2>
          <button className="toggle-btn" onClick={toggleSidebar}>
            {isCollapsed ? "➡️" : "⬅️"}
          </button>
        </div>
        
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                <span>{item.icon}</span>
                {!isCollapsed && item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <button className="logout-btn" onClick={handleLogout}>
              <span>📄</span>
              {!isCollapsed && "Logout"}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;