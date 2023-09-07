import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { LoginPage } from "./pages/loginPage";
import store from "./store";
import { Provider } from "react-redux";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoginPage />
    </Provider>
  </React.StrictMode>
);
