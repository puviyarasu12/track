import React, { useState } from "react";

const ShiftScheduling = () => {
  const [shifts] = useState([
    { employee: "John Doe", shift: "9 AM - 5 PM" },
    { employee: "Jane Smith", shift: "10 AM - 6 PM" },
  ]);

  return (
    <div>
      <h2>Shift Scheduling</h2>
      <ul>
        {shifts.map((shift, index) => (
          <li key={index}>
            {shift.employee} - {shift.shift}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShiftScheduling;
