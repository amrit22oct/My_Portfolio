// src/config/AppNavigator.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Background from "../components/layout/Background";
import CursorTrail from "../components/layout/CursorTrail";

import { routes } from "./routes";
import NotFound from "../components/pages/NotFound";

const AppNavigator = () => {
  return (
    <div
      className="
        min-h-screen
        bg-[#f5f7fb] dark:bg-[#0f1220]
        text-black dark:text-white
        transition-colors duration-500
        relative
      "
    >
      <Background />
      <CursorTrail />

      <div className="relative z-10">
        <Navbar />

        <Suspense fallback={<div className="p-10">Loading...</div>}>
          <Routes>
            {routes.map(({ id, path, component: Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </div>
  );
};


export default AppNavigator;
