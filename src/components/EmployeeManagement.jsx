import React, { useState } from "react";
import "../styles/AdminDashboard.css"; // Import styling

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "John Doe", role: "Software Engineer", email: "john@example.com", password: "password123", profilePic: "" },
    { id: 2, name: "Jane Smith", role: "HR Manager", email: "jane@example.com", password: "securepass", profilePic: "" },
    { id: 3, name: "Alice Johnson", role: "Project Manager", email: "alice@example.com", password: "alice2023", profilePic: "" },
  ]);

  const [newEmployee, setNewEmployee] = useState({ 
    name: "", 
    role: "", 
    email: "", 
    password: "", 
    profilePic: "" 
  });

  const [editingEmployee, setEditingEmployee] = useState(null);

  const handleChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewEmployee({ ...newEmployee, profilePic: URL.createObjectURL(file) });
    }
  };

  const addEmployee = () => {
    if (!newEmployee.name || !newEmployee.role || !newEmployee.email || !newEmployee.password) return;
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setNewEmployee({ name: "", role: "", email: "", password: "", profilePic: "" });
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const startEdit = (employee) => {
    setEditingEmployee(employee);
  };

  const handleEditChange = (e) => {
    setEditingEmployee({ ...editingEmployee, [e.target.name]: e.target.value });
  };

  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditingEmployee({ ...editingEmployee, profilePic: URL.createObjectURL(file) });
    }
  };

  const saveEdit = () => {
    setEmployees(employees.map((emp) => (emp.id === editingEmployee.id ? editingEmployee : emp)));
    setEditingEmployee(null);
  };

  return (
    <div className="employee-management">
      <h2>Employee Management</h2>

      {/* Employee Table */}
      <table>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Role</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>
                {employee.profilePic ? (
                  <img src={employee.profilePic} alt="Profile" width="40" height="40" />
                ) : "No Image"}
              </td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.email}</td>
              <td>
                <button className="edit" onClick={() => startEdit(employee)}>✏️ Edit</button>
                <button className="delete" onClick={() => deleteEmployee(employee.id)}>🗑️ Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Employee Modal */}
      {editingEmployee && (
        <div className="modal">
          <div className="modal-content">
            <h3>Edit Employee</h3>
            <input type="text" name="name" value={editingEmployee.name} onChange={handleEditChange} placeholder="Name" />
            <input type="text" name="role" value={editingEmployee.role} onChange={handleEditChange} placeholder="Role" />
            <input type="email" name="email" value={editingEmployee.email} onChange={handleEditChange} placeholder="Email" />
            <input type="password" name="password" value={editingEmployee.password} onChange={handleEditChange} placeholder="New Password" />
            <input type="file" accept="image/*" onChange={handleEditFileChange} />
            <button onClick={saveEdit} className="save">💾 Save</button>
            <button onClick={() => setEditingEmployee(null)} className="cancel">❌ Cancel</button>
          </div>
        </div>
      )}

      {/* Add New Employee Form */}
      <div className="add-employee">
        <h3>Add Employee</h3>
        <input type="text" name="name" value={newEmployee.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="role" value={newEmployee.role} onChange={handleChange} placeholder="Role" />
        <input type="email" name="email" value={newEmployee.email} onChange={handleChange} placeholder="Email" />
        <input type="password" name="password" value={newEmployee.password} onChange={handleChange} placeholder="Password" />
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={addEmployee} className="add">➕ Add</button>
      </div>
    </div>
  );
};

export default EmployeeManagement;
