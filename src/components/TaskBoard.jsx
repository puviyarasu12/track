import React, { useState } from "react";

const TaskBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete report", status: "Pending" },
    { id: 2, title: "Team meeting", status: "In Progress" },
  ]);
  const [newTask, setNewTask] = useState("");

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: newStatus } : task));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, title: newTask, status: "Pending" }]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.taskBoard}>
      <h2>Task Board</h2>

      {/* Add Task Section */}
      <div style={styles.addTask}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>Add</button>
      </div>

      {/* Task List */}
      {tasks.length > 0 ? (
        tasks.map(task => (
          <div key={task.id} style={{ ...styles.task, ...getStatusStyle(task.status) }}>
            <p>{task.title}</p>
            <div style={styles.controls}>
              <select
                value={task.status}
                onChange={(e) => updateStatus(task.id, e.target.value)}
                style={styles.select}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>
              <button onClick={() => deleteTask(task.id)} style={styles.deleteButton}>❌</button>
            </div>
          </div>
        ))
      ) : (
        <p style={styles.noTasks}>No tasks available</p>
      )}
    </div>
  );
};

/* Function to style tasks based on status */
const getStatusStyle = (status) => {
  switch (status) {
    case "Pending":
      return { background: "#ffeeba" };
    case "In Progress":
      return { background: "#cce5ff" };
    case "Completed":
      return { background: "#d4edda" };
    default:
      return {};
  }
};

const styles = {
  taskBoard: {
    width: "350px",
    margin: "auto",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  },
  addTask: {
    display: "flex",
    gap: "10px",
    marginBottom: "15px"
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  addButton: {
    padding: "8px 12px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  },
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
    padding: "8px",
    borderRadius: "5px"
  },
  controls: {
    display: "flex",
    gap: "8px",
    alignItems: "center"
  },
  select: {
    padding: "5px",
    borderRadius: "5px"
  },
  deleteButton: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 8px",
    borderRadius: "5px",
    cursor: "pointer"
  },
  noTasks: {
    textAlign: "center",
    color: "#888"
  }
};

export default TaskBoard;
