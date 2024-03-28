import React from 'react';

const ForecastedWeather = ({ data }) => {

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forecasted-weather">
      <h2>Forecasted Weather</h2>
      <div className='weather-item'>
        {/* displaying forecasted weather data using object mapping */}
        {
          Object.keys(data).map(key => {
            return (
              <p key={key}>{key}: {data[key]}</p>
            );
          })
        }
      </div>
    </div>
  );
};

export default ForecastedWeather;
