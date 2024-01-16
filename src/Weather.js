import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import LoaderSpinner from "./LoaderSpinner";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feelslike: response.data.temperature.feels_like,
      description: response.data.condition.description,
      time: new Date(response.data.time * 1000),
      city: response.data.city,
      iconUrl: response.data.condition.icon_url,
    });
  }

  function search() {
    const apiKey = "cf804oa134f4b8cta94fba1330643173";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-10">
              <input
                type="search"
                placeholder="Enter a City"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
                required
              />
            </div>
            <div className="col-sm-2 text-center">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-80"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          data={weatherData}
          coordinates={weatherData.coordinates}
        />
      </div>
    );
  } else {
    search();
    return <LoaderSpinner />;
  }
}
