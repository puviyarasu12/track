import React, { useState } from 'react';

const LeaveManagement = () => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Leave request for ${leaveType} from ${startDate} to ${endDate} submitted.`);
    // Here, you'd usually send this data to the backend
  };

  return (
    <div className="leave-management">
      <h1>Apply for Leave</h1>
      <form onSubmit={handleSubmit}>
        <label>Leave Type:</label>
        <select value={leaveType} onChange={(e) => setLeaveType(e.target.value)} required>
          <option value="">Select Type</option>
          <option value="Sick Leave">Sick Leave</option>
          <option value="Casual Leave">Casual Leave</option>
          <option value="Paid Leave">Paid Leave</option>
        </select>

        <label>Start Date:</label>
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />

        <label>End Date:</label>
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />

        <label>Reason:</label>
        <textarea value={reason} onChange={(e) => setReason(e.target.value)} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeaveManagement;
