import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./AppRoutes";
import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <Header />
            <main className={styles.routes}>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;
