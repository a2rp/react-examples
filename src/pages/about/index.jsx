import {
    FiArrowUpRight,
    FiCode,
    FiLayers,
    FiMonitor,
    FiShield,
    FiZap,
} from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

const principles = [
    {
        icon: FiLayers,
        title: "Focused by design",
        text: "Each demo centers on one interface pattern, so the purpose stays clear.",
    },
    {
        icon: FiZap,
        title: "Made to interact",
        text: "Explore working controls and states instead of static UI mockups.",
    },
    {
        icon: FiShield,
        title: "Built for real screens",
        text: "Responsive layouts and keyboard-friendly controls are part of the examples.",
    },
];

const demos = [
    {
        number: "01",
        icon: FiLayers,
        title: "Accordion",
        description:
            "A straightforward FAQ pattern with animated, single-panel expansion.",
        to: "/apps/accordion",
    },
    {
        number: "02",
        icon: FiZap,
        title: "Accordion Pro",
        description:
            "A flexible accordion with saved state, panel modes, and quick controls.",
        to: "/apps/accordion-pro",
    },
];

const technologies = [
    { icon: FiCode, name: "React", detail: "Interface components" },
    { icon: FiLayers, name: "React Router", detail: "Page navigation" },
    { icon: FiZap, name: "Vite", detail: "Development and builds" },
    { icon: FiMonitor, name: "CSS Modules", detail: "Scoped page styles" },
];

function AboutPage() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>About React Examples</span>
                    <h1>
                        Small projects.
                        <br />
                        <span>Useful things to learn.</span>
                    </h1>
                    <p>
                        React Examples is a collection of focused, browser-ready demos.
                        Each app explores one useful interface pattern through clear
                        structure and hands-on interaction.
                    </p>
                    <div className={styles.heroActions}>
                        <Link className={styles.primaryAction} to="/apps">
                            Explore the apps <FiArrowUpRight aria-hidden="true" />
                        </Link>
                        <a
                            className={styles.secondaryAction}
                            href="https://github.com/a2rp/react-examples"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View the repository
                        </a>
                    </div>
                </div>

                <aside className={styles.projectCard}>
                    <span className={styles.cardEyebrow}>The idea</span>
                    <h2>Learn by using it.</h2>
                    <p>
                        Open a demo, try its controls, and see how a small React
                        interface responds.
                    </p>
                    <div className={styles.projectStats}>
                        <div>
                            <strong>02</strong>
                            <span>interactive apps</span>
                        </div>
                        <div>
                            <strong>01</strong>
                            <span>shared project</span>
                        </div>
                    </div>
                    <div className={styles.cardAccent} aria-hidden="true" />
                </aside>
            </section>

            <section className={styles.principles}>
                <div className={styles.sectionHeading}>
                    <span className={styles.sectionEyebrow}>Project approach</span>
                    <h2>Useful examples, without the noise.</h2>
                    <p>
                        Each page stays focused on the interaction it is built to show.
                    </p>
                </div>
                <div className={styles.principleGrid}>
                    {principles.map(({ icon: Icon, title, text }) => (
                        <article className={styles.principleCard} key={title}>
                            <span className={styles.principleIcon}>
                                <Icon aria-hidden="true" />
                            </span>
                            <h3>{title}</h3>
                            <p>{text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className={styles.collection}>
                <div className={styles.sectionHeading}>
                    <span className={styles.sectionEyebrow}>In the collection</span>
                    <h2>Start with a working demo.</h2>
                </div>
                <div className={styles.demoGrid}>
                    {demos.map(({ number, icon: Icon, title, description, to }) => (
                        <Link className={styles.demoCard} key={title} to={to}>
                            <span className={styles.demoNumber}>{number}</span>
                            <span className={styles.demoIcon}>
                                <Icon aria-hidden="true" />
                            </span>
                            <span className={styles.demoContent}>
                                <strong>{title}</strong>
                                <span>{description}</span>
                            </span>
                            <FiArrowUpRight className={styles.demoArrow} aria-hidden="true" />
                        </Link>
                    ))}
                </div>
            </section>

            <section className={styles.stack}>
                <div className={styles.stackIntro}>
                    <span className={styles.sectionEyebrow}>Technology</span>
                    <h2>A small, modern React stack.</h2>
                    <p>
                        Shared routing brings the examples together, while each app
                        keeps its own components, assets, and styles close to the page.
                    </p>
                </div>
                <div className={styles.techGrid}>
                    {technologies.map(({ icon: Icon, name, detail }) => (
                        <div className={styles.techItem} key={name}>
                            <Icon aria-hidden="true" />
                            <span>
                                <strong>{name}</strong>
                                <small>{detail}</small>
                            </span>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default AboutPage;
