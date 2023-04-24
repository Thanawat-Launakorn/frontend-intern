import React, { lazy } from "react";
import IRoute from "./models/IRoute";
import Dashboard from "./views/pages/dashboard";
import HomePage from "./views/pages/home/index";

export const routes: Array<IRoute> = [
  { path: "/", name: "home", exact: true, element: <HomePage /> },
  { path: "/dashboard", name: "dashboard", element: <Dashboard /> },
];
