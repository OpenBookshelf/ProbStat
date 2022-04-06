import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Latex from "./components/hooks/LATEX";

ReactDOM.render(
  <Latex>
    <App />
  </Latex>,
  document.getElementById("root")
);

reportWebVitals(console.log);
