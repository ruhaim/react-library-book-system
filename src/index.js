import React from "react";
import { render } from "react-dom";
import App from "./views/App";
import store from "./store/store";
import { Provider } from "react-redux";

const reduxWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
render(reduxWrapper(), document.getElementById("root"));
