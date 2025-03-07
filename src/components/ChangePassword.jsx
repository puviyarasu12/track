import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleChangePassword = (e) => {
    e.preventDefault();

    const storedPassword = localStorage.getItem('userPassword') || 'emp123';

    if (oldPassword !== storedPassword) {
      alert('Old password is incorrect!');
      return;
    }

    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!');
      return;
    }

    localStorage.setItem('userPassword', newPassword);
    alert('Password changed successfully!');
    navigate('/employee-dashboard');
  };

  return (
    <div className="container">
      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
