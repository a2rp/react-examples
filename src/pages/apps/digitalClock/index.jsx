import { useEffect, useMemo, useState } from "react";

import styles from "./style.module.css";

const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
const supportedTimeZones = typeof Intl.supportedValuesOf === "function"
    ? Intl.supportedValuesOf("timeZone")
    : [];
const timeZones = [...new Set([localTimeZone, "UTC", ...supportedTimeZones])];

function getTimeParts(date, timeZone) {
    return Object.fromEntries(
        new Intl.DateTimeFormat("en-GB", {
            timeZone,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hourCycle: "h23",
        })
            .formatToParts(date)
            .map(({ type, value }) => [type, value]),
    );
}

function DigitalClockPage() {
    const [timeZone, setTimeZone] = useState(localTimeZone);
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const timerId = window.setInterval(() => setNow(new Date()), 1000);
        return () => window.clearInterval(timerId);
    }, []);

    const timeParts = useMemo(() => getTimeParts(now, timeZone), [now, timeZone]);
    const date = useMemo(
        () => new Intl.DateTimeFormat(undefined, {
            timeZone,
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        }).format(now),
        [now, timeZone],
    );

    return (
        <main className={styles.page}>
            <section className={styles.clockSection} aria-labelledby="digital-clock-title">
                <header className={styles.header}>
                    <p className={styles.eyebrow}>WORLD CLOCK</p>
                    <h1 className={styles.title} id="digital-clock-title">Digital Clock</h1>
                    <p className={styles.description}>Live local time and date across time zones.</p>
                </header>

                <div className={styles.clockCard}>
                    <p className={styles.date} aria-live="polite">{date}</p>
                    <div className={styles.clock} role="timer" aria-label={`Current time in ${timeZone}`}>
                        {[
                            ["Hours", timeParts.hour],
                            ["Minutes", timeParts.minute],
                            ["Seconds", timeParts.second],
                        ].map(([label, value], index) => (
                            <div className={styles.timeUnit} key={label}>
                                {index > 0 && <span className={styles.separator} aria-hidden="true">:</span>}
                                <div className={styles.timeNumber}>{value}</div>
                                <span className={styles.timeLabel}>{label}</span>
                            </div>
                        ))}
                    </div>

                    <label className={styles.timezonePicker} htmlFor="digital-clock-timezone">
                        <span>Timezone</span>
                        <select
                            id="digital-clock-timezone"
                            value={timeZone}
                            onChange={(event) => setTimeZone(event.target.value)}
                        >
                            {timeZones.map((zone) => (
                                <option value={zone} key={zone}>{zone.replaceAll("_", " ")}</option>
                            ))}
                        </select>
                    </label>
                    <p className={styles.timezone}>Showing time in {timeZone.replaceAll("_", " ")}</p>
                </div>
            </section>
        </main>
    );
}

export default DigitalClockPage;
