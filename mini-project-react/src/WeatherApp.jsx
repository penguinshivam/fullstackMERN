import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "tokyo",
    feelsLike: 16.08,
    humidity: 85,
    temp: 16.19,
    tempMax: 17.59,
    tempMin: 14.78,
    weather: "overcast clouds",
  });
  let updateInfo = (result) => {
    setWeatherInfo(result);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Weather App By Shivam</h1>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
