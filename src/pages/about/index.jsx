import styles from "./style.module.css";

function AboutPage() {
    return (
        <section className={styles.page}>
            <span className={styles.eyebrow}>About</span>
            <h1>A collection of small React projects.</h1>
            <p>Each example focuses on one interface idea or interaction.</p>
        </section>
    );
}

export default AboutPage;
