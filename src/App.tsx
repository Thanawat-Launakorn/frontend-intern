import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts";
import ErrorPage from "./views/pages/error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<DefaultLayout />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
