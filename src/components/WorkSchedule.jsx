import React from "react";

const WorkSchedule = () => {
  const schedules = [
    { employee: "John Doe", workHours: "9 AM - 5 PM" },
    { employee: "Jane Smith", workHours: "10 AM - 6 PM" },
  ];

  return (
    <div>
      <h2>Work Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Work Hours</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule, index) => (
            <tr key={index}>
              <td>{schedule.employee}</td>
              <td>{schedule.workHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkSchedule;
