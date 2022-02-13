const TopData = ({ weatherData }) => {
  if (!weatherData.name) return null;
  const temperatureFeels = weatherData.main
    ? Math.round(weatherData.main.temp - 273.15)
    : null;

  const sky = weatherData.weather
    ? weatherData.weather[0].main
    : null;

  return (
    <div className="top">
      <div className="location">
        <p>{weatherData.name}</p>
      </div>
      <div className="temp">
        <h1>{temperatureFeels}°C</h1>
      </div>
      <div className="description">
        <p>{sky}</p>
      </div>
    </div>
  );
};

export default TopData;
