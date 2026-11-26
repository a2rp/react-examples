import { useEffect, useMemo, useState } from "react";
import {
    FiArrowDown,
    FiArrowRight,
    FiCalendar,
    FiCheckCircle,
    FiClock,
    FiGlobe,
    FiRefreshCw,
} from "react-icons/fi";

import styles from "./style.module.css";

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
});

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "Local time";

function HelloReactPage() {
    const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

    useEffect(() => {
        const timerId = window.setInterval(() => setCurrentDateTime(new Date()), 1000);

        return () => window.clearInterval(timerId);
    }, []);

    const formattedDateTime = useMemo(
        () => ({
            date: dateFormatter.format(currentDateTime),
            time: timeFormatter.format(currentDateTime),
            iso: currentDateTime.toISOString(),
        }),
        [currentDateTime],
    );

    return (
        <section className={styles.page}>
            <div className={styles.content}>
                <section className={styles.hero} aria-labelledby="hello-title">
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>A friendly React starting point</p>
                        <h1 className={styles.title} id="hello-title">
                            Hello from <span>React.</span>
                        </h1>
                        <p className={styles.intro}>
                            A small, focused app that greets visitors with a live browser date and
                            time display.
                        </p>
                        <div className={styles.heroActions}>
                            <a className={styles.primaryAction} href="#clock">
                                See live clock <FiArrowDown aria-hidden="true" />
                            </a>
                            <a className={styles.secondaryAction} href="#details">
                                Explore details <FiArrowRight aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <article className={styles.clockCard} id="clock" aria-labelledby="clock-title">
                        <div className={styles.clockHeading}>
                            <span className={styles.iconBadge}>
                                <FiClock aria-hidden="true" />
                            </span>
                            <div>
                                <h2 className={styles.cardLabel} id="clock-title">
                                    Current browser time
                                </h2>
                                <p className={styles.cardCaption}>Formatted for this device</p>
                            </div>
                            <span className={styles.liveLabel}>
                                <span aria-hidden="true" /> Live
                            </span>
                        </div>

                        <time className={styles.clockTime} dateTime={formattedDateTime.iso}>
                            {formattedDateTime.time}
                        </time>
                        <p className={styles.clockDate}>{formattedDateTime.date}</p>
                        <p className={styles.clockZone}>
                            <FiGlobe aria-hidden="true" />
                            <span>{timeZone}</span>
                        </p>
                        <p className={styles.clockStatus}>
                            <FiRefreshCw aria-hidden="true" /> Updates every second
                        </p>
                    </article>
                </section>

                <section className={styles.details} id="details" aria-labelledby="details-title">
                    <div className={styles.sectionHeading}>
                        <p className={styles.eyebrow}>What this example shows</p>
                        <h2 className={styles.sectionTitle} id="details-title">
                            Small React ideas, clearly presented.
                        </h2>
                    </div>

                    <div className={styles.featureGrid}>
                        <article className={styles.featureCard}>
                            <span className={styles.iconBadge}>
                                <FiClock aria-hidden="true" />
                            </span>
                            <h3>Live state</h3>
                            <p>The clock refreshes its Date state once per second.</p>
                        </article>
                        <article className={styles.featureCard}>
                            <span className={styles.iconBadge}>
                                <FiGlobe aria-hidden="true" />
                            </span>
                            <h3>Local formatting</h3>
                            <p>Intl.DateTimeFormat uses the visitor&apos;s browser locale and time zone.</p>
                        </article>
                        <article className={styles.featureCard}>
                            <span className={styles.iconBadge}>
                                <FiCheckCircle aria-hidden="true" />
                            </span>
                            <h3>Clean lifecycle</h3>
                            <p>The timer is cleared when the page unmounts.</p>
                        </article>
                    </div>
                </section>

                <section className={styles.messageCard} aria-labelledby="message-title">
                    <span className={styles.messageIcon}>
                        <FiCalendar aria-hidden="true" />
                    </span>
                    <div>
                        <p className={styles.eyebrow}>Start with the basics</p>
                        <h2 className={styles.messageTitle} id="message-title">
                            A useful first screen for a React project.
                        </h2>
                        <p className={styles.messageCopy}>
                            Explore components, effects, state, and browser APIs in one simple
                            example.
                        </p>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default HelloReactPage;
