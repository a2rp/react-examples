import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Spinner from "./components/spinner";

const HomePage = lazy(() => import("./pages/home"));
const AppsPage = lazy(() => import("./pages/apps"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

function AppRoutes() {
    const location = useLocation();

    return (
        <Suspense fallback={<Spinner />} key={location.pathname}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/apps" element={<AppsPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
