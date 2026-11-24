import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLayers, FiZap } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const demos = [
    {
        title: "Accordion",
        description: "A clear, single-open FAQ interaction.",
        to: "/apps/accordion",
        icon: FiLayers,
        number: "01",
    },
    {
        title: "Accordion Pro",
        description: "Persistent panels with flexible controls.",
        to: "/apps/accordion-pro",
        icon: FiZap,
        number: "02",
    },
];

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
                    {demos.map(({ title, description, to, icon: Icon, number }) => (
                        <Link className={styles.demoCard} key={title} to={to}>
                            <span className={styles.demoNumber}>{number}</span>
                            <span className={styles.demoIcon}>
                                <Icon aria-hidden="true" />
                            </span>
                            <span className={styles.demoDetails}>
                                <strong>{title}</strong>
                                <span>{description}</span>
                            </span>
                            <FiArrowUpRight className={styles.demoArrow} aria-hidden="true" />
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;
