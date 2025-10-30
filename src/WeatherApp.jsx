import { useState } from "react";
import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";

export default function WeatherApp() {
  // initially no weather data
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (newInfo) => setWeatherInfo(newInfo);

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginBottom: "20px" }}>🌦️ Weather Application</h1>
      <SearchBox updateInfo={updateInfo} />

      {/* show message or weather card based on state */}
      {weatherInfo ? (
        <InfoBox info={weatherInfo} />
      ) : (
        <p style={{ color: "#555", marginTop: "30px" }}>
          🔍 Enter a city name to check the weather
        </p>
      )}
    </div>
  );
}
