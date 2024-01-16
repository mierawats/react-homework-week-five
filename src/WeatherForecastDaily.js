import React from "react";

export default function WeatherForecastDaily(props) {
  let maxTemp = Math.round(props.data.temperature.maximum);
  let minTemp = Math.round(props.data.temperature.minimum);

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDaily">
      <div className="WeatherForecast-day fw-bold">{day()}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />
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
