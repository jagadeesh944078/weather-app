import React from "react";
import { Typography } from "@mui/material";

const WeatherDetails = ({ weatherData }) => {
  if (!weatherData) return <div>Loading...</div>;
  const formatDate = (dateStr) => {
    const options = { weekday: "long" };
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", options);
  };

  const getCloudImage = (clouds) => {
    if (clouds < 25) {
      return "../src/assets/clear.png";
    } else if (clouds < 50) {
      return "../src/assets/cloud.png";
    } else if (clouds < 75) {
      return "../src/assets/drizzle.png";
    } else {
      return "../src/assets/cloud.png";
    }
  };

  return (
    <div className="weather-details-container">
      <div className="background-image">
        <Typography variant="h4" className="city-name">
          {weatherData.city_name}
        </Typography>
      </div>
      <div className="content-container">
        {weatherData.data.map((dayData, index) => (
          <div key={index} className="weather-day">
            <Typography variant="body1" className="day-name">
              {formatDate(dayData.date)}
            </Typography>
            <Typography variant="body1" className="temperature">
              Temperature: {dayData.temp}°C
            </Typography>
            <Typography variant="body1" className="clouds">
              Clouds: {dayData.clouds}%
            </Typography>
            <div
              className="cloud-image"
              style={{
                backgroundImage: `url(${getCloudImage(dayData.clouds)})`,
              }}
            ></div>
            {/* Add more weather details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
