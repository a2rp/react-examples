import { FiRefreshCw } from "react-icons/fi";

import styles from "./style.module.css";

function AvatarPreview({ svg, seed, selectedStyleName, isLoading }) {
    return (
        <section className={styles.preview}>
            <div className={styles.header}>
                <div>
                    <span className={styles.eyebrow}>Avatar preview</span>
                    <h2 className={styles.title}>{selectedStyleName}</h2>
                </div>
                <span className={styles.status}>
                    <i className={isLoading ? styles.loadingDot : undefined} />
                    {isLoading ? "Generating" : "Ready"}
                </span>
            </div>

            <div className={styles.stage}>
                {svg ? (
                    <img
                        className={styles.avatar}
                        src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`}
                        alt={`${selectedStyleName} avatar preview`}
                    />
                ) : (
                    <div className={styles.emptyState}>
                        <FiRefreshCw aria-hidden="true" />
                        <span>Preparing your avatar</span>
                    </div>
                )}
            </div>

            <div className={styles.footer}>
                <span className={styles.seedLabel}>Unique seed</span>
                <code>{seed || "Generating…"}</code>
            </div>
        </section>
    );
}

export default AvatarPreview;
