import IRoute from "./models/IRoute";
import Calendar from "./views/pages/calendar";
import Dashboard from "./views/pages/dashboard";
import HomePage from "./views/pages/home/index";
import EditUser from "./views/pages/edit-user";
import Listuser from "./views/pages/listuser";

export const routes: Array<IRoute> = [
  { path: "/", name: "home", exact: true, element: <HomePage /> },
  { path: "/dashboard", name: "dashboard", element: <Dashboard /> },
  { path: "/calendar", name: "calendar", element: <Calendar /> },
  { path: "/list-user", name: "listuser", element: <Listuser /> },
  { path: "/edit-user/:id", name: "edituser", element: <EditUser /> },
];
