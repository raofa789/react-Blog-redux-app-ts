import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRoutes from "./routes/app-routes";
import { Provider } from "react-redux";
import reduxStore from "./redux/redux-store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={reduxStore}>
      <AppRoutes />
    </Provider>
  </BrowserRouter>
);
