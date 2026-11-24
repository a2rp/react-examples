import { lazy, Suspense } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";

import Spinner from "./components/spinner";

const HomePage = lazy(() => import("./pages/home"));
const AppsPage = lazy(() => import("./pages/apps"));
const AccordionPage = lazy(() => import("./pages/apps/accordion/index.jsx"));
const AccordionProPage = lazy(() => import("./pages/apps/accordion-pro/index.jsx"));
const AnalogClockPage = lazy(() => import("./pages/apps/analog-clock/index.jsx"));
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
                </Route>
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
