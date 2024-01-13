import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control fs-5"
                autoFocus="on"
                required
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100 fs-5"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-2">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
              alt="Mostly Cloudy"
            />
          </div>
          <div className="col-4 text-start m-auto">
            <div className="tempdata">
              <span className="temperature">Math.Round({temperature})</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6 m-auto">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 75%</li>
              <li>Wind: 12 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "cf804oa134f4b8cta94fba1330643173";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
