import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scroll-to-top";
import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";
import styles from "./App.module.css";

function App() {
    const { pathname } = useLocation();
    const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
    const isStandaloneApp = [
        "/apps/cinematic-carousel-ui",
        "/apps/clipboard-snippet-library",
        "/apps/code-diff-viewer",
        "/apps/color-contrast-checker",
        "/apps/color-gradient-explorer",
        "/apps/color-palette-studio",
        "/apps/color-picker",
        "/apps/cron-expression-builder",
        "/apps/css-gradient-maker",
        "/apps/currency-converter",
        "/apps/daily-planner",
        "/apps/date-countdown-tool",
        "/apps/design-token-editor",
        "/apps/dictionary",
        "/apps/dropdown-pro",
        "/apps/dynamic-tabs",
        "/apps/emi-calculator",
        "/apps/file-size-visualizer",
        "/apps/flashcard-study-tool",
        "/apps/fontpair-studio",
        "/apps/git-command-explorer",
        "/apps/hello-react-counter",
        "/apps/hello-world-react",
        "/apps/light-dark-theme-toggle",
        "/apps/html-colors",
        "/apps/http-status-reference",
        "/apps/icon-library-browser",
        "/apps/image-compression-preview",
        "/apps/image-slider",
    ].includes(normalizedPathname);
    const RouteContainer = isStandaloneApp ? "div" : "main";

    return (
        <div className={styles.app}>
            <ScrollToTop />
            {!isStandaloneApp && <Header />}
            <RouteContainer className={isStandaloneApp ? styles.standaloneAppRoute : styles.routes}>
                <AppRoutes />
            </RouteContainer>
            {!isStandaloneApp && <Footer />}
        </div>
    );
}

export default App;
