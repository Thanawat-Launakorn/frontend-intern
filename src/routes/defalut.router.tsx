import type { RouteObject } from "react-router-dom";
import NoneLayout from "../layouts/none-layout";
import Page404 from "../views/pages/error/Page404";
import Page500 from "../views/pages/error/Page500";
import Login from "../views/pages/login";

export const routerDefault: RouteObject[] = [
  {
    path: "/error",
    element: <NoneLayout />,
    children: [
      { path: "/error/404", element: <Page404 /> },
      { path: "/error/500", element: <Page500 /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Page404 /> },
];
