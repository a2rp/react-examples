import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scroll-to-top";
import AppRoutes from "./AppRoutes";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <ScrollToTop />
            <Header />
            <main className={styles.routes}>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;
