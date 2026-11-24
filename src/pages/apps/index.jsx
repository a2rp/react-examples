import {
    FiActivity,
    FiArrowDown,
    FiArrowUpRight,
    FiCheck,
    FiChevronDown,
    FiLayers,
    FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import accordionImage from "./accordion/images/accordion-hero.jpg";
import accordionProImage from "./accordion-pro/images/accordion-hero.jpg";
import styles from "./style.module.css";

const apps = [
    {
        number: "01",
        level: "FOUNDATION",
        title: "Accordion",
        description:
            "A focused FAQ pattern with clear, single-panel expansion and smooth transitions.",
        image: accordionImage,
        imageAlt: "Sculptural architecture seen through a bright glass canopy",
        icon: FiLayers,
        to: "/apps/accordion",
        features: ["Single open panel", "Keyboard ready", "Smooth motion"],
        action: "Try Accordion",
    },
    {
        number: "02",
        level: "ADVANCED",
        title: "Accordion Pro",
        description:
            "A flexible accordion with saved preferences, multiple opening modes, and quick controls.",
        image: accordionProImage,
        imageAlt: "Snow-covered mountain peaks beneath a clear blue sky",
        icon: FiZap,
        to: "/apps/accordion-pro",
        features: ["Saved state", "Single or multiple", "Panel controls"],
        action: "Try Accordion Pro",
    },
];

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
                    {apps.map(({ number, level, title, description, image, imageAlt, icon: Icon, to, features, action }) => (
                        <Link className={styles.appCard} key={title} to={to}>
                            <div className={styles.cardVisual}>
                                <img src={image} alt={imageAlt} loading="lazy" />
                                <span className={styles.visualShade} aria-hidden="true" />
                                <span className={styles.cardNumber}>{number}</span>
                                <span className={styles.cardCategory}>{level}</span>
                                <span className={styles.visualIcon}>
                                    <Icon aria-hidden="true" />
                                </span>
                            </div>

                            <div className={styles.cardContent}>
                                <span className={styles.cardEyebrow}>Interactive React app</span>
                                <h3>{title}</h3>
                                <p>{description}</p>

                                <ul className={styles.featureList}>
                                    {features.map((feature) => (
                                        <li key={feature}>
                                            <FiCheck aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <span className={styles.cardAction}>
                                    {action}
                                    <FiArrowUpRight aria-hidden="true" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default AppsPage;
