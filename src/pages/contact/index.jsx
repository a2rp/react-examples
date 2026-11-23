import { FiExternalLink } from "react-icons/fi";

import styles from "./style.module.css";

function ContactPage() {
    return (
        <section className={styles.page}>
            <span className={styles.eyebrow}>Contact</span>
            <h1>Let’s connect.</h1>
            <p>For questions or collaboration, reach out through GitHub.</p>
            <a href="https://github.com/a2rp" target="_blank" rel="noreferrer">
                Open GitHub profile
                <FiExternalLink aria-hidden="true" />
            </a>
        </section>
    );
}

export default ContactPage;
