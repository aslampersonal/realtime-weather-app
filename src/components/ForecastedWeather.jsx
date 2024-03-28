import React from 'react';

const ForecastedWeather = ({ data }) => {

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="forecasted-weather">
      <h2>Forecasted Weather</h2>
      <div className='weather-item'>
        {/* displaying forecasted weather data using object mapping */}
        {
          data.map((forecast, index) => (
            <div key={index}>
              <h3>Date: {forecast.time.slice(0,10)}</h3>
              {
                Object.keys(forecast.values).map(key => {
                  return (
                    <p key={key}>{key}: {forecast.values[key]}</p>
                  )
                })
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ForecastedWeather;
