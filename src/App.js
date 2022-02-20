import "./App.css";

import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/robots" element={<MainPage />} />
        <Route path="/" element={<Navigate to="/robots" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
