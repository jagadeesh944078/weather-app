import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(city);
    navigate("/weather-details");
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Weather Forecast</h1>
      <div className="search-bar-container">
        <TextField
          label="Enter City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{
            width: "500px",
            "& fieldset": {
              borderColor: "#007bff", // Increase border color
            },
            "& input": {
              color: "white", // Text color
            },
          }}
        />
      </div>
      <Button variant="contained" onClick={handleSearch}>
        Get Weather
      </Button>
    </div>
  );
};

export default Dashboard;
