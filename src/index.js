import React from "react";
import { render } from "react-dom";
import App from "./app";
import "./css/style.css";
import { Provider } from "react-redux";
import store from "./store/index.js";

const rootDOM = document.getElementById("app");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDOM
);

if (module.hot) {
  module.hot.accept();
}
