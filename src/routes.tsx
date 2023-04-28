import IRoute from "./models/IRoute";
import Calendar from "./views/pages/calendar";
import Dashboard from "./views/pages/dashboard";
import HomePage from "./views/pages/home/index";
import ListUser from "./views/pages/listuser";
import EditUser from "./views/pages/edit-user";

export const routes: Array<IRoute> = [
  { path: "/", name: "home", exact: true, element: <HomePage /> },
  { path: "/dashboard", name: "dashboard", element: <Dashboard /> },
  { path: "/calendar", name: "calendar", element: <Calendar /> },
];
