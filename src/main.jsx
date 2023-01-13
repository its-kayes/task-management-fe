import { CssBaseline } from "@mui/material";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "./index.css";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CssBaseline />
        <ToastContainer
          position="top-right"
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          autoClose={1000}
        />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
