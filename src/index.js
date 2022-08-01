import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/_base.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("app")
);
