import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.time} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row m-3">
        <div className="col-sm-7">
          <div className="row">
            <div className="col-6">
              <img src={props.data.iconUrl} alt={props.data.description} />
            </div>
            <div className="col-6 text-start m-auto ">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-sm-5 m-auto">
          <ul className="weatherDetails">
            <li>Feels Like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
