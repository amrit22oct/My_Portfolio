import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import NotFound from "../components/pages/NotFound";
import WindowLayout from "../components/layout/WindowLayout";


const AppNavigator = () => {
  return (
    <WindowLayout>
      <Suspense fallback={<div className="p-10">Loading...</div>}>
        <Routes>
          {routes.map(({ id, path, component: Component }) => (
            <Route key={id} path={path} element={<Component />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </WindowLayout>
  );
};

export default AppNavigator;
