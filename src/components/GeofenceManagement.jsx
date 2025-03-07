import React, { useState } from "react";

const GeofenceManagement = () => {
  const [location, setLocation] = useState({ lat: "", lng: "" });

  return (
    <div>
      <h2>Geofence Management</h2>
      <input
        type="text"
        placeholder="Latitude"
        value={location.lat}
        onChange={(e) => setLocation({ ...location, lat: e.target.value })}
      />
      <input
        type="text"
        placeholder="Longitude"
        value={location.lng}
        onChange={(e) => setLocation({ ...location, lng: e.target.value })}
      />
      <button onClick={() => alert("Geofence Location Saved!")}>Save Geofence</button>
    </div>
  );
};

export default GeofenceManagement;
