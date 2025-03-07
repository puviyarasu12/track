import React, { useState } from "react";

const AttendanceLogs = () => {
  const [logs] = useState([
    { employee: "John Doe", checkIn: "9:00 AM", checkOut: "5:00 PM", status: "Present" },
    { employee: "Jane Smith", checkIn: "10:00 AM", checkOut: "6:00 PM", status: "Present" },
  ]);

  return (
    <div>
      <h2>Attendance Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.employee}</td>
              <td>{log.checkIn}</td>
              <td>{log.checkOut}</td>
              <td>{log.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceLogs;
