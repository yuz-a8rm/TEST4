import React from "react";
// import ReactDOM from "react-dom/client";
import App from "./App";
import { render } from "react-dom";

const rootElement = document.getElementById("root")!;
const root = document.getElementById("root"); //←React17ではこちら
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
