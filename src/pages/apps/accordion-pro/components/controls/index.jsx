import {
    FiCheck,
    FiChevronsDown,
    FiChevronsUp,
    FiLayers,
    FiRefreshCw,
    FiSliders,
} from "react-icons/fi";

import styles from "./style.module.css";

function Controls({
    mode,
    onModeChange,
    onExpandAll,
    onCollapseAll,
    onReset,
    allOpen,
    noneOpen,
    openCount,
    totalCount,
}) {
    return (
        <section className={styles.controls}>
            <div className={styles.topRow}>
                <div className={styles.intro}>
                    <span className={styles.introIcon}>
                        <FiSliders aria-hidden="true" />
                    </span>
                    <div>
                        <span className={styles.eyebrow}>Quick controls</span>
                        <p>Choose a panel mode and manage every item quickly.</p>
                    </div>
                </div>

                <div className={styles.actions}>
                    <span className={styles.openCount}>
                        {openCount}<span>/{totalCount} open</span>
                    </span>
                    <button
                        className={`${styles.button} ${styles.primary}`}
                        type="button"
                        onClick={onExpandAll}
                        disabled={allOpen || mode === "single"}
                        title={mode === "single" ? "Switch to multiple mode to expand all panels" : "Expand all panels"}
                    >
                        <FiChevronsDown aria-hidden="true" />
                        <span>Expand all</span>
                    </button>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={onCollapseAll}
                        disabled={noneOpen}
                        title="Collapse all panels"
                    >
                        <FiChevronsUp aria-hidden="true" />
                        <span>Collapse all</span>
                    </button>
                    <button
                        className={`${styles.button} ${styles.reset}`}
                        type="button"
                        onClick={onReset}
                        title="Reset saved state"
                    >
                        <FiRefreshCw aria-hidden="true" />
                        <span>Reset state</span>
                    </button>
                </div>
            </div>

            <fieldset className={styles.modeFieldset}>
                <legend>
                    <FiLayers aria-hidden="true" /> Opening mode
                </legend>
                <div className={styles.modeOptions}>
                    <label className={`${styles.modeOption} ${mode === "single" ? styles.selected : ""}`}>
                        <input
                            type="radio"
                            name="accordion-pro-mode"
                            value="single"
                            checked={mode === "single"}
                            onChange={() => onModeChange("single")}
                        />
                        <span className={styles.radioMark}>
                            {mode === "single" && <FiCheck aria-hidden="true" />}
                        </span>
                        <span className={styles.optionText}>
                            <strong>One at a time</strong>
                            <small>Opening a panel closes the previous one.</small>
                        </span>
                    </label>
                    <label className={`${styles.modeOption} ${mode === "multiple" ? styles.selected : ""}`}>
                        <input
                            type="radio"
                            name="accordion-pro-mode"
                            value="multiple"
                            checked={mode === "multiple"}
                            onChange={() => onModeChange("multiple")}
                        />
                        <span className={styles.radioMark}>
                            {mode === "multiple" && <FiCheck aria-hidden="true" />}
                        </span>
                        <span className={styles.optionText}>
                            <strong>More than one</strong>
                            <small>Keep multiple panels open together.</small>
                        </span>
                    </label>
                </div>
            </fieldset>
        </section>
    );
}

export default Controls;
