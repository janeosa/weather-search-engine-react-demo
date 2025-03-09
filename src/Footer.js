import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <div className="footer">
      <p>
        This project was coded by{" "}
        <a
          href="https://github.com/janeosa"
          target="_blank"
          rel="noopener noreferrer"
        >
          Jane Ighodaro
        </a>
        , is open-sourced on{" "}
        <a
          href="https://github.com/janeosa/weather-search-engine-react-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://weather-search-engine-react-demo.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
        .
      </p>
    </div>
  );
}
