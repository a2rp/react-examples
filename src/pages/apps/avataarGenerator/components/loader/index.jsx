import styles from "./style.module.css";

const Loader = ({ text = "Loading avatar..." }) => {
    return (
        <div className={styles.wrapper} role="status" aria-live="polite">
            <span className="spinner" />

            <span className="text">{text}</span>
        </div>
    );
};

export default Loader;
