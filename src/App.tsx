import "./global.css";
import { RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import routes from "./routes/_router";
import Loading from "./views/pages/loading";
import AuthProvider from "./context/auth/jwt/AuthProvider";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </Suspense>
  );
}

export default App;
