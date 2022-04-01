import React from "react";
import ReactDOM from "react-dom";
import "sweetalert2/dist/sweetalert2.min.css";
//
import { JournalApp } from "./JournalApp";
import "./styles/styles.scss";

ReactDOM.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
  document.getElementById("root")
);
