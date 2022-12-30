import React from "react";
import ReactDOM from "react-dom";
import Global from "./globalStyle";
import Routes from './routes'

ReactDOM.render(
  <>
    <Routes />
    <Global />
  </>,
  document.getElementById("root")
);
