import React from "react";

const Announcements = () => {
  const announcements = [
    "Company holiday on 15th August",
    "New HR policy updated",
    "Submit timesheets before Friday",
  ];

  return (
    <div style={styles.announcements}>
      <h2>Announcements</h2>
      <ul style={styles.list}>
        {announcements.map((note, index) => (
          <li key={index} style={styles.listItem}>{note}</li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  announcements: {
    width: "300px",
    margin: "auto",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    padding: "5px",
    borderBottom: "1px solid #ddd"
  }
};

export default Announcements;
