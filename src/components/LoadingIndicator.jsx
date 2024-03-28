import React from 'react';

const LoadingIndicator = () => {
  return (
    // loading indicator while data fetching
    <div className="loading-indicator">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingIndicator;
