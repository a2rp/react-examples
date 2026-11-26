import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scroll-to-top";
import AppRoutes from "./AppRoutes";
import { useLocation } from "react-router-dom";
import styles from "./App.module.css";

function App() {
    const { pathname } = useLocation();
    const isCinematicCarousel = pathname === "/apps/cinematic-carousel-ui";

    return (
        <div className={styles.app}>
            <ScrollToTop />
            {!isCinematicCarousel && <Header />}
            <main className={isCinematicCarousel ? styles.cinematicCarouselRoute : styles.routes}>
                <AppRoutes />
            </main>
            {!isCinematicCarousel && <Footer />}
        </div>
    );
}

export default App;
