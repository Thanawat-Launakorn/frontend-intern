import React, { lazy } from "react";
import IRoute from "./models/IRoute";
import Dashboard from "./views/pages/dashboard";
import HomePage from "./views/pages/home/index";
import ListUser from "./views/pages/listuser";

export const routes: Array<IRoute> = [
  { path: "/home", name: "home", exact: true, element: <HomePage /> },
  { path: "/dashboard", name: "dashboard", element: <Dashboard /> },
  { path: "/list-user", name: "listuser", element: <ListUser /> },
];
