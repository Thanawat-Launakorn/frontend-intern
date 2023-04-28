import React, { lazy } from "react";
import IRoute from "./models/IRoute";
import Dashboard from "./views/pages/dashboard";
import HomePage from "./views/pages/home/index";
import ListUser from "./views/pages/listuser";
import EditUser from "./views/pages/edit-user";

export const routes: Array<IRoute> = [
  { path: "/", name: "home", exact: true, element: <HomePage /> },
  { path: "/dashboard", name: "dashboard", element: <Dashboard /> },
  { path: "/list-user", name: "listuser", element: <ListUser /> },
  { path: "/edit-user", name: "edituser", element: <EditUser /> },

];
