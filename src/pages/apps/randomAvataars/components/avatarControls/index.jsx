import { FaCheck, FaCopy, FaDownload, FaShuffle } from "react-icons/fa6";

import styles from "./style.module.css";

const RANDOM_STYLE_ID = "random";

function AvatarControls({
    avatarStyles,
    selectedStyleId,
    isLoading,
    onStyleChange,
    onGenerate,
    onDownload,
    onCopy,
}) {
    return (
        <section className={styles.controls}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Make it yours</span>
                <h2>Choose a style</h2>
                <p>Pick a look, then create a fresh avatar whenever you like.</p>
            </div>

            <div className={styles.styleSection}>
                <div className={styles.sectionHeading}>
                    <span>Avatar styles</span>
                    <span className={styles.count}>{avatarStyles.length}</span>
                </div>

                <div className={styles.styleList}>
                    <button
                        className={`${styles.styleOption} ${
                            selectedStyleId === RANDOM_STYLE_ID ? styles.selected : ""
                        }`}
                        type="button"
                        onClick={() => onStyleChange(RANDOM_STYLE_ID)}
                    >
                        <span className={styles.randomLabel}>
                            <FaShuffle aria-hidden="true" /> Random style
                        </span>
                        {selectedStyleId === RANDOM_STYLE_ID && (
                            <FaCheck className={styles.check} aria-hidden="true" />
                        )}
                    </button>

                    {avatarStyles.map((style) => (
                        <button
                            className={`${styles.styleOption} ${
                                selectedStyleId === style.id ? styles.selected : ""
                            }`}
                            key={style.id}
                            type="button"
                            onClick={() => onStyleChange(style.id)}
                        >
                            <span>{style.name}</span>
                            {selectedStyleId === style.id && (
                                <FaCheck className={styles.check} aria-hidden="true" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <button
                className={`${styles.button} ${styles.primaryButton}`}
                type="button"
                disabled={isLoading}
                onClick={onGenerate}
            >
                <FaShuffle aria-hidden="true" />
                {isLoading ? "Generating avatar…" : "Generate new avatar"}
            </button>

            <div className={styles.exportHeading}>Export your avatar</div>
            <div className={styles.actions}>
                <button
                    className={styles.button}
                    type="button"
                    disabled={isLoading}
                    onClick={onDownload}
                >
                    <FaDownload aria-hidden="true" /> Download PNG
                </button>
                <button
                    className={styles.button}
                    type="button"
                    disabled={isLoading}
                    onClick={onCopy}
                >
                    <FaCopy aria-hidden="true" /> Copy SVG
                </button>
            </div>

            <p className={styles.tip}>
                Use PNG for profile images and SVG when you need a graphic that
                scales cleanly.
            </p>
        </section>
    );
}

export default AvatarControls;
