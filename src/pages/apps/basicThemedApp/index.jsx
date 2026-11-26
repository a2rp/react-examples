import { useEffect, useState } from "react";
import { FiArrowRight, FiMoon, FiSun } from "react-icons/fi";

import logo from "./images/basic-themed-app-logo.png";
import styles from "./style.module.css";

const THEME_KEY = "basic-themed-app-theme";

function getInitialTheme() {
    try {
        const savedTheme = window.localStorage.getItem(THEME_KEY);

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme;
        }
    } catch {
        // Use the browser preference when local storage is unavailable.
    }

    return window.matchMedia?.("(prefers-color-scheme: light)")?.matches ? "light" : "dark";
}

const features = [
    {
        title: "Design tokens",
        description:
            "Shared CSS variables keep colors, spacing, borders, and shadows consistent across the app.",
    },
    {
        title: "Theme persistence",
        description:
            "Your light or dark preference is saved locally and restored on your next visit.",
    },
    {
        title: "Responsive foundation",
        description:
            "A flexible layout adapts from a wide desktop view to smaller screens.",
    },
];

function BasicThemedAppPage() {
    const [theme, setTheme] = useState(getInitialTheme);
    const nextTheme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        try {
            window.localStorage.setItem(THEME_KEY, theme);
        } catch {
            // Theme switching remains available for this visit without storage.
        }
    }, [theme]);

    return (
        <section className={styles.page}>
            <div className={styles.demo} data-theme={theme}>
                <header className={styles.header}>
                    <div className={styles.brand}>
                        <img className={styles.logo} src={logo} alt="" />
                        <span>Basic Themed App</span>
                    </div>
                    <button
                        className={styles.themeButton}
                        type="button"
                        aria-label={`Switch to ${nextTheme} theme`}
                        aria-pressed={theme === "light"}
                        onClick={() => setTheme(nextTheme)}
                    >
                        {theme === "light" ? (
                            <FiMoon aria-hidden="true" />
                        ) : (
                            <FiSun aria-hidden="true" />
                        )}
                    </button>
                </header>

                <div className={styles.content}>
                    <section className={styles.hero} aria-labelledby="themed-app-title">
                        <p className={styles.eyebrow}>React and Vite starter</p>
                        <h1 className={styles.title} id="themed-app-title">
                            A reusable shell for themed interfaces.
                        </h1>
                        <p className={styles.intro}>
                            A small, responsive foundation with design tokens, a persistent theme
                            switcher, and a polished layout ready for your next front-end idea.
                        </p>
                        <div className={styles.actions}>
                            <a
                                className={styles.primaryAction}
                                href="https://github.com/a2rp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View GitHub <FiArrowRight aria-hidden="true" />
                            </a>
                            <a
                                className={styles.secondaryAction}
                                href="https://www.ashishranjan.net/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit portfolio <FiArrowRight aria-hidden="true" />
                            </a>
                        </div>
                    </section>

                    <section className={styles.featureGrid} aria-label="Project features">
                        {features.map((feature) => (
                            <article className={styles.featureCard} key={feature.title}>
                                <h2>{feature.title}</h2>
                                <p>{feature.description}</p>
                            </article>
                        ))}
                    </section>
                </div>
            </div>
        </section>
    );
}

export default BasicThemedAppPage;
