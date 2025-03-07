import React, { useState } from "react";

const SettingsPermissions = () => {
  const [roles] = useState([
    { name: "Admin", permissions: ["View Reports", "Manage Payroll"] },
    { name: "Employee", permissions: ["View Attendance", "Request Leave"] },
  ]);

  return (
    <div>
      <h2>Settings & Permissions</h2>
      {roles.map((role, index) => (
        <div key={index}>
          <h3>{role.name}</h3>
          <p>Permissions: {role.permissions.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default SettingsPermissions;
