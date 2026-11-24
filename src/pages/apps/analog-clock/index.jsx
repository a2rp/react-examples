import { useEffect, useRef, useState } from "react";

import styles from "./style.module.css";

const hourLabels = Array.from({ length: 12 }, (_, index) => (index === 0 ? 12 : index));
const minuteMarks = Array.from({ length: 60 }, (_, index) => index);
const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
});

function getClockInfo(date) {
    const hours = date.getHours();
    const displayHours = hours % 12 || 12;

    return {
        time: [displayHours, date.getMinutes(), date.getSeconds()]
            .map((value) => String(value).padStart(2, "0"))
            .join(":"),
        period: hours >= 12 ? "PM" : "AM",
        date: dateFormatter.format(date),
        iso: date.toISOString(),
    };
}

function AnalogClockPage() {
    const [clockInfo, setClockInfo] = useState(() => getClockInfo(new Date()));
    const hourHandRef = useRef(null);
    const minuteHandRef = useRef(null);
    const secondHandRef = useRef(null);

    useEffect(() => {
        let animationFrameId;
        let displayedSecond = -1;

        function updateClock() {
            const now = new Date();
            const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
            const minutes = now.getMinutes() + seconds / 60;
            const hours = (now.getHours() % 12) + minutes / 60;

            if (secondHandRef.current) {
                secondHandRef.current.style.transform = `translateX(-50%) rotate(${seconds * 6}deg)`;
            }

            if (minuteHandRef.current) {
                minuteHandRef.current.style.transform = `translateX(-50%) rotate(${minutes * 6}deg)`;
            }

            if (hourHandRef.current) {
                hourHandRef.current.style.transform = `translateX(-50%) rotate(${hours * 30}deg)`;
            }

            if (now.getSeconds() !== displayedSecond) {
                displayedSecond = now.getSeconds();
                setClockInfo(getClockInfo(now));
            }

            animationFrameId = window.requestAnimationFrame(updateClock);
        }

        animationFrameId = window.requestAnimationFrame(updateClock);

        return () => window.cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <main className={styles.page}>
            <section className={styles.clockSection}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Analog Clock</h1>
                    <p className={styles.description}>
                        A smooth real-time clock with your local time and date.
                    </p>
                </header>

                <div className={styles.clockCard}>
                    <div
                        className={styles.clockContainer}
                        role="img"
                        aria-label="Analog clock with smoothly moving hour, minute, and second hands"
                    >
                        <div className={styles.hourMarks} aria-hidden="true">
                            {hourLabels.map((label, index) => (
                                <span
                                    className={styles.hourMark}
                                    key={label}
                                    style={{ "--hour": index }}
                                >
                                    {label}
                                </span>
                            ))}
                        </div>

                        <div className={styles.minuteMarks} aria-hidden="true">
                            {minuteMarks.map((minute) => (
                                <span
                                    className={`${styles.minuteMark} ${minute % 5 === 0 ? styles.major : ""}`}
                                    key={minute}
                                    style={{ "--minute": minute }}
                                />
                            ))}
                        </div>

                        <div className={styles.brand} aria-hidden="true">
                            <span className={styles.brandName}>a2rp</span>
                            <span className={styles.brandText}>Analog Clock</span>
                        </div>

                        <div className={`${styles.hand} ${styles.hour}`} ref={hourHandRef} />
                        <div className={`${styles.hand} ${styles.minute}`} ref={minuteHandRef} />
                        <div className={`${styles.hand} ${styles.second}`} ref={secondHandRef} />
                        <div className={styles.centerDot} aria-hidden="true" />
                    </div>

                    <div className={styles.timeInfo} aria-live="polite">
                        <div className={styles.digitalRow}>
                            <time className={styles.digitalTime} dateTime={clockInfo.iso}>
                                {clockInfo.time}
                            </time>
                            <span className={styles.period}>{clockInfo.period}</span>
                        </div>
                        <p className={styles.currentDate}>{clockInfo.date}</p>
                        <div className={styles.status}>
                            <span className={styles.statusDot} aria-hidden="true" />
                            <span>Local time</span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default AnalogClockPage;
