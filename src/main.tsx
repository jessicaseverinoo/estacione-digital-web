import React from "react";
import ReactDOM from "react-dom/client";
import { routes } from "./routes/Routes";
import "antd/dist/antd.css";

import { RouterProvider } from "react-router-dom";

const router = routes;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
