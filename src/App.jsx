import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RealTimeWeather from './components/RealTimeWeather';
import ForecastedWeather from './components/ForecastedWeather';
import ErrorComponent from './components/ErrorComponent';
import LoadingIndicator from './components/LoadingIndicator';
import LocationSettings from './components/LocationSettings';
import './App.css';

const API_KEY = 'cauKcfX5VUSARmiWAkV2aDhCEbKjT4Uo';

const App = () => {
  const [realTimeWeather, setRealTimeWeather] = useState(null);
  const [forecastedWeather, setForecastedWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleGetCurrentLocation();
  }, []);

  const fetchData = async (location) => {
    try {
      const realTimeResponse = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${API_KEY}`);
      const forecastResponse = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_KEY}`);
      setRealTimeWeather(realTimeResponse.data.data.values);
      setForecastedWeather(forecastResponse.data.data.values);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(true);
    }
  };

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const location = `${latitude},${longitude}`;
          fetchData(location);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleLocationChange = (location) => {
    fetchData(location);
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      {loading && <LoadingIndicator />}
      {error && <ErrorComponent message={error} />}
      {!loading && !error && (
        <div className='weather-datas'>
          <RealTimeWeather data={realTimeWeather} />
          <ForecastedWeather data={forecastedWeather} />
        </div>
      )}
      <LocationSettings onLocationChange={handleLocationChange} handleGetCurrentLocation={handleGetCurrentLocation} />
    </div>
  );
};

export default App;
