const BottomData = ({ weatherData }) => {
  if (!weatherData.name) return null;
  const temperatureFeels = weatherData.main
    ? Math.round(weatherData.main.feels_like - 273.15)
    : null;

  const humidity = weatherData.main
    ? weatherData.main.humidity
    : null;

  const windSpeed = weatherData.wind ? weatherData.wind.speed : null;

  return (
    <div className="bottom">
      <div className="feels">
        <p className="bold">{temperatureFeels}°C</p>
        <p>Feels like</p>
      </div>
      <div className="humidity">
        <p className="bold">{humidity}%</p>
        <p>Humidity</p>
      </div>
      <div className="wind">
        <p className="bold">{windSpeed}MPH</p>
        <p>Wind speed</p>
      </div>
    </div>
  );
};

export default BottomData;
