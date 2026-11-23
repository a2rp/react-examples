import styles from "./style.module.css";

function AppsPage() {
    return (
        <section className={styles.page}>
            <span className={styles.eyebrow}>Apps</span>
            <h1>React apps, in one place.</h1>
            <p>Interactive examples will appear here.</p>
        </section>
    );
}

export default AppsPage;
