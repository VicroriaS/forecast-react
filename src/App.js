import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="Weather-app">
      <div className="container">
        <Weather />
        <h1>Forecast-app</h1>
        <footer>
          This project is created by{" "}
          <a
            href="https://www.linkedin.com/in/frontenddevviktoriiasandul"
            target="_blank"
            rel="noreferrer"
          >
            Viktoriia Sandul
          </a>{" "}
          <span>and</span>
          <a
            href="https://github.com/VicroriaS/forecast-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Open-soursed on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
