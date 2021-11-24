import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/custom.css";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/configureStore";

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById("root"));
