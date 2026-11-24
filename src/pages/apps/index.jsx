import { FiArrowUpRight, FiLayers, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

function AppsPage() {
    return (
        <section className={styles.page}>
            <span className={styles.eyebrow}>Apps</span>
            <h1>Small apps. One place.</h1>
            <p className={styles.intro}>Pick an app to try.</p>

            <div className={styles.appList}>
                <Link className={styles.appCard} to="/apps/accordion">
                    <span className={styles.appIcon}>
                        <FiLayers aria-hidden="true" />
                    </span>
                    <span className={styles.appDetails}>
                        <span className={styles.appType}>Interactive app</span>
                        <span className={styles.appName}>Accordion</span>
                        <span className={styles.appDescription}>
                            Expand and collapse FAQ answers.
                        </span>
                    </span>
                    <FiArrowUpRight className={styles.appArrow} aria-hidden="true" />
                </Link>
                <Link className={styles.appCard} to="/apps/accordion-pro">
                    <span className={styles.appIcon}>
                        <FiZap aria-hidden="true" />
                    </span>
                    <span className={styles.appDetails}>
                        <span className={styles.appType}>Interactive app</span>
                        <span className={styles.appName}>Accordion Pro</span>
                        <span className={styles.appDescription}>
                            Persistent accordion with flexible panel controls.
                        </span>
                    </span>
                    <FiArrowUpRight className={styles.appArrow} aria-hidden="true" />
                </Link>
            </div>
        </section>
    );
}

export default AppsPage;
