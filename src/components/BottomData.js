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
        <p>感じています</p>
      </div>
      <div className="humidity">
        <p className="bold">{humidity}%</p>
        <p>湿度</p>
      </div>
      <div className="wind">
        <p className="bold">{windSpeed}MPH</p>
        <p>風速</p>
      </div>
    </div>
  );
};

export default BottomData;
