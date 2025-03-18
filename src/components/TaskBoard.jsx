import React, { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete report", status: "pending" },
    { id: 2, title: "Team meeting", status: "in-progress" },
  ]);
  const [newTask, setNewTask] = useState("");

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus.toLowerCase().replace(" ", "-") } : task));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, status: "pending" }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="task-board">
      <h2>Task Board</h2>

      <div className="add-task">
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length > 0 ? (
        tasks.map(task => (
          <div key={task.id} className={`task ${task.status}`}>
            <p>{task.title}</p>
            <div className="controls">
              <select
                value={task.status.replace("-", " ")}
                onChange={(e) => updateStatus(task.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
              <button onClick={() => deleteTask(task.id)}>❌</button>
            </div>
          </div>
        ))
      ) : (
        <p className="no-tasks">No tasks available</p>
      )}
    </div>
  );
};

export default TaskBoard;
