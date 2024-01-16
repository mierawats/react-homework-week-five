import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "63214c4281922e3bb72fdf12dada7734";
  let lat = props.data.coordinates.latitude;
  let lon = props.data.coordinates.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day fw-bold">Thu</div>
          <div className="WeatherForecast-icon">
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <div>
            <span className="WeatherForecast-temp-max text-dark fw-bold">
              19°{" "}
            </span>
            <span className="WeatherForecast-temp-min">13°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
