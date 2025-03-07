import React, { useState } from "react";
import "../styles/AdminDashboard.css"; // Optional styling

const LeaveRequests = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, employee: "John Doe", type: "Sick Leave", status: "Pending" },
    { id: 2, employee: "Jane Smith", type: "Casual Leave", status: "Pending" },
    { id: 3, employee: "Alex Johnson", type: "Annual Leave", status: "Approved" },
  ]);

  const handleAction = (id, newStatus) => {
    setLeaveRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: newStatus } : request
      )
    );
  };

  return (
    <div className="leave-requests">
      <h2>Leave Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Leave Type</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests.map(({ id, employee, type, status }) => (
            <tr key={id}>
              <td>{employee}</td>
              <td>{type}</td>
              <td className={status.toLowerCase()}>{status}</td>
              <td>
                {status === "Pending" ? (
                  <>
                    <button onClick={() => handleAction(id, "Approved")} className="approve">
                      ✅ Approve
                    </button>
                    <button onClick={() => handleAction(id, "Rejected")} className="reject">
                      ❌ Reject
                    </button>
                  </>
                ) : (
                  <span className="status-final">{status}</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaveRequests;
