import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "../src/components/App/App";
import { BrowserRouter } from "react-router-dom";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
