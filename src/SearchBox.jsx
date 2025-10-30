import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "01887dd85a11b4a9c2390ecf1be1c64d";

  const getWeatherInfo = async () => {
    const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "City not found");
    }

    return {
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
      cityName: data.name,
      windSpeed: data.wind.speed,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    try {
      setError("");
      const info = await getWeatherInfo();
      updateInfo(info);
      setCity("");
    } catch (err) {
      setError("❌ " + err.message);
    }
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City Name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          sx={{ width: "250px" }}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
