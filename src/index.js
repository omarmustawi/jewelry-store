import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./Css/base/button.css";
import "./Css/base/alerts.css";
import "./Css/base/loading.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import MenuContext from "./Component/Context/MenuContext";
import WindowContext from "./Component/Context/WindowContext";
import { Provider } from "react-redux";
import store from "./store/store";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <WindowContext>
      <MenuContext>
        <React.StrictMode>
          <Router>
            <App />
          </Router>
        </React.StrictMode>
      </MenuContext>
    </WindowContext>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
