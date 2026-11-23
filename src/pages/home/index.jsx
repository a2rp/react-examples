import { FiLayers } from "react-icons/fi";

import styles from "./style.module.css";

function HomePage() {
    return (
        <section className={styles.page}>
            <span className={styles.eyebrow}>Small React apps</span>
            <h1>One home for React examples.</h1>
            <p className={styles.intro}>Focused demos of useful UI patterns and interactions.</p>

            <div className={styles.emptyState}>
                <FiLayers aria-hidden="true" />
                <div>
                    <h2>Examples are coming soon.</h2>
                    <p>New demos will appear here as they are added.</p>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
