import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Wednesday 07:00",
      temperature: response.data.main.temp,
      humididty: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    });
  }

  if (WeatherData.ready) {
    return (
      <div className="Weather">
        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <div className="city">
          <h1>{WeatherData.city}</h1>
          <ul>
            <li>{WeatherData.date}</li>
            <li className="text-capitalize">{WeatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="weather-forecast">
              <img
                src={WeatherData.iconUrl}
                alt={WeatherData.description}
                className="image"
              />
              <div>
                <strong>{Math.round(WeatherData.temperature)}</strong>
                <span className="units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {WeatherData.humididty}%</li>
              <li>Wind: {Math.round(WeatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "493284cbe724ef66319043e8a8c97a54";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading Weather App...";
  }
}
