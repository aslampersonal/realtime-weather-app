import React from 'react';

const RealTimeWeather = ({ data }) => {
    
  if (!data) {
    return <div className="real-time-weather">Loading...</div>;
  }

  return (
    <div className="real-time-weather">
      <h2>Real-Time Weather</h2>
      <div className='weather-item'>
        {/* displaying real-time weather data using object mapping */}
        {
          Object.keys(data).map(key => {
            return (
              <p>{key}: {data[key]}</p>
            )
          })
        }
      </div>
    </div>
  );
};

export default RealTimeWeather;
