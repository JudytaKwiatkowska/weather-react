import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather />
      <footer>
        ✌️ This website was coded by Judyta Kwiatkowska, and is&nbsp;
        <a
          href="https://github.com/JudytaKwiatkowska/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced.
        </a>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
