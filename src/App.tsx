import "./global.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts";
import ErrorPage from "./views/pages/error";
import Login from "./views/pages/login";
import Register from "./views/pages/register";

function App() {
  interface IRoute {
    id: string | number;
    path: string;
    element: React.ReactNode;
  }

  const routes: Array<IRoute> = [
    { id: 1, path: "/login", element: <Login /> },
    { id: 2, path: "/register", element: <Register /> },
    { id: 3, path: "*", element: <DefaultLayout /> },
    { id: 4, path: "/*", element: <ErrorPage /> },
  ];
  return (
    <div className="min-h-screen flex justify-between flex-col">
      <Routes>
        {routes.map(({ path, element, id }) => {
          return <Route path={path} element={element} key={id} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
