import React, { useState } from 'react';
import Geocode from 'react-geocode';

const LocationSettings = ({ onLocationChange, handleGetCurrentLocation }) => {
  const [location, setLocation] = useState('');

  const API_KEY = 'cauKcfX5VUSARmiWAkV2aDhCEbKjT4Uo';

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (location.trim() === '') return;
    onLocationChange(location);
  };

  return (
    <div className="location-settings">
      <h2>Location Settings</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Enter Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={handleLocationChange}
          placeholder="E.g., New York, Toronto"
        />
        <button type="submit">Set Location</button>
        <button type="button" onClick={handleGetCurrentLocation}>
          Use Current Location
        </button>
      </form>
    </div>
  );
};

export default LocationSettings;
