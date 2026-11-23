import { Link } from "react-router-dom";

import styles from "./style.module.css";

function NotFoundPage() {
    return (
        <section className={styles.page}>
            <span className={styles.code}>404</span>
            <h1>Page not found.</h1>
            <p>That route doesn’t exist.</p>
            <Link to="/">Back home</Link>
        </section>
    );
}

export default NotFoundPage;
