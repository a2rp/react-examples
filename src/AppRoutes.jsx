import { lazy, Suspense } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import Spinner from "./components/spinner";

const HomePage = lazy(() => import("./pages/home"));
const AppsPage = lazy(() => import("./pages/apps"));
const AccordionPage = lazy(() => import("./pages/apps/accordion/index.jsx"));
const AccordionProPage = lazy(() => import("./pages/apps/accordion-pro/index.jsx"));
const AnalogClockPage = lazy(() => import("./pages/apps/analog-clock/index.jsx"));
const AvataarGeneratorPage = lazy(() => import("./pages/apps/avataarGenerator/index.jsx"));
const RandomAvataarsPage = lazy(() => import("./pages/apps/randomAvataars/index.jsx"));
const ApiRequestWorkbenchPage = lazy(() => import("./pages/apps/apiRequestWorkbench/index.jsx"));
const Base64ConverterPage = lazy(() => import("./pages/apps/base64Converter/index.jsx"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense fallback={<Spinner />} key={location.pathname}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/apps" element={<Outlet />}>
                    <Route index element={<AppsPage />} />
                    <Route path="accordion" element={<AccordionPage />} />
                    <Route path="accordion-pro" element={<AccordionProPage />} />
                    <Route path="analog-clock" element={<AnalogClockPage />} />
                    <Route path="avataar-generator" element={<AvataarGeneratorPage />} />
                    <Route path="random-avataars" element={<RandomAvataarsPage />} />
                    <Route path="api-request-workbench" element={<ApiRequestWorkbenchPage />} />
                    <Route path="base64-converter" element={<Base64ConverterPage />} />
                </Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
