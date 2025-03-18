import React from "react";

const Announcements = () => {
  const announcements = [
    "Company holiday on 15th August",
    "New HR policy updated",
    "Submit timesheets before Friday",
  ];

  return (
    <div className="announcements">
      <h2>Announcements</h2>
      <ul className="announcements-list">
        {announcements.map((note, index) => (
          <li key={index} className="announcement-item">{note}</li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
