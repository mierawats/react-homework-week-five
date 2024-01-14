import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="tempdata">
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="unit">
            °C |{" "}
            <a
              href="/"
              onClick={showFarenheit}
              className="text-decoration-none text-muted"
            >
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <div className="tempdata">
          <span className="temperature">{Math.round(fahrenheit)}</span>
          <span className="unit">
            <a
              href="/"
              onClick={showCelsius}
              className="text-decoration-none text-muted"
            >
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
