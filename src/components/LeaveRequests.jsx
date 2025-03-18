import React, { useState, useMemo } from "react";
import "../styles/AdminDashboard.css"; // Optional styling

const LeaveRequests = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  const filteredRequests = useMemo(() => 
    leaveRequests
      .filter(req => {
        const matchesFilter = filter === 'all' || req.status.toLowerCase() === filter;
        const matchesSearch = req.employee.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            req.type.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
      })
  , [leaveRequests, filter, searchTerm]);

  return (
    <div className="leave-requests">
      <h2>Leave Requests</h2>
      <div className="controls">
        <input
          type="text"
          placeholder="Search requests..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select 
          onChange={(e) => setFilter(e.target.value)}
          className="filter-select"
        >
          <option value="all">All Requests</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>
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
          {filteredRequests.map(({ id, employee, type, status }) => (
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
