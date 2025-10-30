import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function InfoBox({ info }) {
  const IMAGES = {
    rain: "https://images.unsplash.com/photo-1511634829096-045a111727eb?auto=format&fit=crop&w=900&q=60",
    hot: "https://images.unsplash.com/photo-1541119638723-c51cbe2262aa?auto=format&fit=crop&w=900&q=60",
    cold: "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?auto=format&fit=crop&w=900&q=60",
  };

  const getWeatherImage = () => {
    if (info.humidity > 80) return IMAGES.rain;
    if (info.temp > 20) return IMAGES.hot;
    return IMAGES.cold;
  };

  const WeatherIcon =
    info.humidity > 80 ? ThunderstormIcon : info.temp > 20 ? WbSunnyIcon : AcUnitIcon;

  return (
    <div className="info-box">
      <Card sx={{ maxWidth: 360, margin: "30px auto", borderRadius: "15px", boxShadow: 3 }}>
        <CardMedia sx={{ height: 180 }} image={getWeatherImage()} title={info.weather} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.cityName} <WeatherIcon sx={{ verticalAlign: "middle", ml: 1 }} />
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            <p>🌡 Temperature: {info.temp} °C</p>
            <p>🤒 Feels Like: {info.feelsLike} °C</p>
            <p>📉 Min: {info.tempMin} °C | 📈 Max: {info.tempMax} °C</p>
            <p>💧 Humidity: {info.humidity}%</p>
            <p>🌬 Wind: {info.windSpeed} m/s</p>
            <p>☁️ Condition: {info.weather}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
