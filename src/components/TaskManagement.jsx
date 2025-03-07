import React, { useState } from "react";

const TaskManagement = () => {
  const [tasks] = useState([
    { task: "Complete report", status: "Pending" },
    { task: "Update attendance logs", status: "Completed" },
  ]);

  return (
    <div>
      <h2>Task Management</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.task} - <b>{task.status}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;
