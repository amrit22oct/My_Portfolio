import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./Routes/index.jsx";
import NotFound from "../components/pages/NotFound";
import WindowLayout from "../components/layout/WindowLayout";
import PageLoader from "../components/layout/PageLoader";

const AppNavigator = () => {
  return (
    <WindowLayout>
      <Suspense fallback={<PageLoader />}>
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






// import { Routes, Route } from "react-router-dom";
// import {
//   Suspense,
//   useCallback,
//   useEffect,
//   useState,
// } from "react";

// import {
//   routes,
//   routeLoaders,
// } from "./Routes/index.jsx";

// import NotFound from "../components/pages/NotFound";
// import WindowLayout from "../components/layout/WindowLayout";
// import Loader from "../components/layout/loader";
// import PageLoader from "../components/layout/PageLoader";

// const RouteContent = ({ onLoaded }) => {
//   useEffect(() => {
//     // Route component has now mounted
//     onLoaded();
//   }, [onLoaded]);

//   return (
//     <Routes>
//       {routes.map(({ id, path, component: Component }) => (
//         <Route
//           key={id}
//           path={path}
//           element={<Component />}
//         />
//       ))}

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// const AppNavigator = () => {
//   const [initialLoading, setInitialLoading] = useState(true);
//   const [contentLoaded, setContentLoaded] = useState(false);

//   // Preload everything while CyberCoreLoader is running
//   // useEffect(() => {
//   //   Object.values(routeLoaders).forEach((loadRoute) => {
//   //     loadRoute();
//   //   });

//   //   // CyberCoreLoader = 7000ms
//   //   const timer = setTimeout(() => {
//   //     setInitialLoading(false);
//   //   }, 7000);

//   //   return () => clearTimeout(timer);
//   // }, []);

//   const handleContentLoaded = useCallback(() => {
//     setContentLoaded(true);
//   }, []);

//   // DO NOT mount anything until loader finishes
//   // if (initialLoading) {
//   //   return <Loader />;
//   // }

//   return (
//     <WindowLayout showFooter={contentLoaded}>
//       <Suspense fallback={<PageLoader />}>
//         <RouteContent onLoaded={handleContentLoaded} />
//       </Suspense>
//     </WindowLayout>
//   );
// };

// export default AppNavigator;