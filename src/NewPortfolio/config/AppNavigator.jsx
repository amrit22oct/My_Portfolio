// src/config/AppNavigator.jsx

import { Routes, Route } from "react-router-dom";

import Navbar from "../components/molecules/Navbar";
import Background from "../../Components/Background.jsx";
import CursorTrail from "../../Components/CursorTrail";
import Footer from "../../Section/Footer";
import { routes } from "./Routes";

const AppNavigator = () => {
  return (
    <div className="app-container relative">
      <Background />
      <CursorTrail />

      <div className="relative z-10">
        <Navbar />

        <Routes>
          {routes.map(({ id, path, component }) => (
            <Route key={id} path={path} element={component} />
          ))}
        </Routes>

        <Footer />
      </div>
    </div>
  );
};

export default AppNavigator;
