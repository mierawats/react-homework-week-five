import React from "react";

export default function WeatherForecastDaily(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day fw-bold">{day()}</div>
      <div className="WeatherForecast-icon">
        <img src={props.icon} alt={props.data.weather[0].description} />
      </div>
      <div>
        <span className="WeatherForecast-temp-max text-dark fw-bold">
          {maxTemp}°{" "}
        </span>
        <span className="WeatherForecast-temp-min">{minTemp}°</span>
      </div>
    </div>
  );
}
