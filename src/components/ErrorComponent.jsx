import React from 'react';

const ErrorComponent = ({ message }) => {
  
  return (
    <div className="error-component">
      <p>Error: {message}</p>
    </div>
  );
};

export default ErrorComponent;
