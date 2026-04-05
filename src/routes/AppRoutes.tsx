import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/layout/Layout";

const NetworkPage = lazy(() => import("../pages/network/NetworkPage"));
const SurveillancePage = lazy(
  () => import("../pages/surveillance/SurveillancePage"),
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/surveillance" element={<SurveillancePage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
