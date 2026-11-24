import {
    FiActivity,
    FiArrowDown,
    FiCheck,
    FiChevronDown,
    FiLayers,
} from "react-icons/fi";

import AppCard from "../../components/app-card";
import apps from "../../data/apps";
import styles from "./style.module.css";

function AppsPage() {
    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>
                        <FiActivity aria-hidden="true" />
                        Interactive collection
                    </span>
                    <h1>
                        Small ideas.
                        <br />
                        <span>Made interactive.</span>
                    </h1>
                    <p>
                        Explore focused React demos built around useful interface
                        patterns. Pick one, try it, and see how it works.
                    </p>
                    <div className={styles.heroActions}>
                        <a className={styles.primaryAction} href="#demos">
                            Explore the demos <FiArrowDown aria-hidden="true" />
                        </a>
                        <div className={styles.heroNote}>
                            <span className={styles.noteIcon}>
                                <FiCheck aria-hidden="true" />
                            </span>
                            <span>Free to try. No setup needed.</span>
                        </div>
                    </div>
                </div>

                <aside className={styles.patternPreview}>
                    <div className={styles.previewHeader}>
                        <span className={styles.previewMark}>
                            <FiLayers aria-hidden="true" />
                        </span>
                        <span className={styles.previewHeading}>
                            Pattern preview
                            <small>Disclosure component</small>
                        </span>
                        <span className={styles.previewIndex}>01 / 02</span>
                    </div>

                    <div className={styles.previewDemo} aria-hidden="true">
                        <div className={`${styles.previewRow} ${styles.previewRowOpen}`}>
                            <span>How does an accordion work?</span>
                            <FiChevronDown />
                        </div>
                        <p className={styles.previewAnswer}>
                            Reveal helpful content when someone needs it.
                        </p>
                        <div className={styles.previewRow}>
                            <span>Can I control how panels open?</span>
                            <FiChevronDown />
                        </div>
                        <div className={styles.previewRow}>
                            <span>Does it work on mobile?</span>
                            <FiChevronDown />
                        </div>
                    </div>

                    <div className={styles.previewFooter}>
                        <span><i /> Focused examples</span>
                        <span><i /> Ready in your browser</span>
                    </div>
                </aside>
            </section>

            <section className={styles.collection} id="demos">
                <div className={styles.sectionHeading}>
                    <div>
                        <span className={styles.sectionEyebrow}>Choose a starting point</span>
                        <h2>Explore the collection</h2>
                    </div>
                    <span className={styles.appCount}>
                        <FiLayers aria-hidden="true" />
                        02 interactive apps
                    </span>
                </div>

                <div className={styles.appGrid}>
                    {apps.map((app) => <AppCard key={app.title} app={app} />)}
                </div>
            </section>
        </main>
    );
}

export default AppsPage;
