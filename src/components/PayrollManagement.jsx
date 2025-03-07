import React, { useState } from "react";

const PayrollManagement = () => {
  const [payrollData] = useState([
    { employee: "John Doe", hoursWorked: 40, salary: "$4000" },
    { employee: "Jane Smith", hoursWorked: 35, salary: "$3500" },
  ]);

  return (
    <div>
      <h2>Payroll Management</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Hours Worked</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {payrollData.map((payroll, index) => (
            <tr key={index}>
              <td>{payroll.employee}</td>
              <td>{payroll.hoursWorked}</td>
              <td>{payroll.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PayrollManagement;
