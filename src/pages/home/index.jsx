import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLayers } from "react-icons/fi";
import { Link } from "react-router-dom";

import AppCard from "../../components/app-card";
import apps from "../../data/apps";
import styles from "./style.module.css";

function HomePage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>A React UI playground</span>
                    <h1>
                        Small apps.
                        <br />
                        <span>Clear ideas.</span>
                    </h1>
                    <p>
                        Explore hands-on React demos, each built around one useful
                        interface pattern.
                    </p>
                    <div className={styles.actions}>
                        <Link className={styles.primaryAction} to="/apps">
                            Explore apps <FiArrowUpRight aria-hidden="true" />
                        </Link>
                        <a
                            className={styles.secondaryAction}
                            href="https://github.com/a2rp/react-examples"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FiGithub aria-hidden="true" /> GitHub repository
                        </a>
                    </div>
                </div>

                <div className={styles.preview}>
                    <div className={styles.previewTop}>
                        <span className={styles.previewMark}>
                            <FiLayers aria-hidden="true" />
                        </span>
                        <span className={styles.previewLabel}>Inside the collection</span>
                        <span className={styles.previewCount}>02 demos</span>
                    </div>
                    <div className={styles.previewContent}>
                        <span className={styles.previewEyebrow}>Built to explore</span>
                        <h2>Useful patterns, made practical.</h2>
                        <p>Open a demo, try the interaction, and see the idea in action.</p>
                    </div>
                    <div className={styles.previewFooter}>
                        <span><i /> React</span>
                        <span><i /> Responsive</span>
                        <span><i /> Interactive</span>
                    </div>
                    <FiArrowDownRight className={styles.previewArrow} aria-hidden="true" />
                </div>
            </section>

            <section className={styles.collection}>
                <div className={styles.sectionHeading}>
                    <div>
                        <span className={styles.sectionEyebrow}>Start exploring</span>
                        <h2>Choose a demo</h2>
                    </div>
                    <Link className={styles.allAppsLink} to="/apps">
                        View all apps <FiArrowUpRight aria-hidden="true" />
                    </Link>
                </div>

                <div className={styles.demoGrid}>
                    {apps.map((app) => <AppCard key={app.title} app={app} />)}
                </div>
            </section>
        </div>
    );
}

export default HomePage;
