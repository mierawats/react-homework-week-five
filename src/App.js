import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer className="footer text-center m-3">
        Coded by {""}
        <a
          href="https://www.linkedin.com/in/azmiera-expert/"
          target="_blank"
          rel="noreferrer"
        >
          Miera Azmi
        </a>
        , is an open-sourced on {""}
        <a
          href="https://github.com/mierawats/react-weather-forecast-website"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        , and hosted by {""}
        <a
          href="https://react-weather-forecast-website.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
