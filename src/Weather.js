import React from "react";
import "./styles.css";

export default function Weather() {
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
        <h1>Rome</h1>
        <ul>
          <li>Last updated: Tuesday 14:54</li>
          <li>Sunny</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="weather-forecast">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              className="image"
            />
            <div>
              <strong>19</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: 30%</li>
            <li>Wind: 3 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
