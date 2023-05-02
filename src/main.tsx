import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AuthProvider from "./context/auth/jwt/AuthProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
