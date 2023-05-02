import RequireAuth from "../auth/app-auth";
import DefaultLayout from "../components/layouts";
import Calendar from "../views/pages/calendar";
import Dashboard from "../views/pages/dashboard";
import ListUser from "../views/pages/listuser";
import { IRoute, IRouteCustom } from "./interface.routes";
const listUser: Array<IRoute> = [
  {
    keyName: "user",
    index: true,
    path: "/listuser",
    element: <ListUser />,
  },
];

const dashBoard: Array<IRoute> = [
  {
    keyName: "overview",
    index: true,
    path: "/dashboard",
    element: <Dashboard />,
  },
];

const calendar: Array<IRoute> = [
  {
    keyName: "calendar",
    index: true,
    path: "/calendar",
    element: <Calendar />,
  },
];

export const routerAuthorization: Array<IRouteCustom> = [
  {
    element: <RequireAuth />,
    children: [
      {
        path: "/",
        element: <DefaultLayout />,
        children: [...listUser, ...dashBoard, ...calendar],
      },
    ],
  },
];
