import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDaily from "./WeatherForecastDaily";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState();
  let icon = props.data.iconUrl;

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDaily data={forecast[0]} icon={icon} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "63214c4281922e3bb72fdf12dada7734";
    let lat = props.data.coordinates.latitude;
    let lon = props.data.coordinates.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
