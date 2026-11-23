import { FiGithub } from "react-icons/fi";

import styles from "./style.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerInner}>
                <span>© {new Date().getFullYear()} React Examples</span>
                <a href="https://github.com/a2rp/react-examples" target="_blank" rel="noreferrer">
                    <FiGithub aria-hidden="true" />
                    GitHub
                </a>
            </div>
        </footer>
    );
}

export default Footer;
