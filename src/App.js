import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import RobotPage from "./pages/RobotPage/RobotPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/robots" element={<MainPage />} />
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="/robots/:id" element={<RobotPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
