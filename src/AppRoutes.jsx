import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import styles from "./AppRoutes.module.css";

const HomePage = lazy(() => import("./pages/home"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const NotFoundPage = lazy(() => import("./pages/not-found"));

function LoadingFallback() {
    return (
        <div className={styles.loading} role="status" aria-label="Loading page">
            <span className={styles.spinner} aria-hidden="true" />
            <span className={styles.screenReaderText}>Loading page</span>
        </div>
    );
}

function AppRoutes() {
    return (
        <Suspense fallback={<LoadingFallback />}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes;
