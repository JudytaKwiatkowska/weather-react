import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          ✌️ This project was coded by Judyta Kwiatkowska, and is&nbsp;
          <a
            href="https://github.com/JudytaKwiatkowska/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://vocal-sable-0443a6.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
