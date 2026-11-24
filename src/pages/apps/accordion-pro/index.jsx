import { useMemo } from "react";
import { FiArrowDown, FiCheckCircle, FiLayers, FiZap } from "react-icons/fi";

import Accordion from "./components/accordion";
import BackToTop from "./components/back-to-top";
import Controls from "./components/controls";
import Showcase from "./components/showcase";
import { accordionItems } from "./data/accordion-items";
import useLocalStorage from "./hooks/use-local-storage";

import heroImage from "./images/accordion-hero.jpg";
import styles from "./style.module.css";

const OPEN_STORAGE_KEY = "accordion-pro:open";
const MODE_STORAGE_KEY = "accordion-pro:mode";
const DEFAULT_OPEN_IDS = ["getting-started"];
const DEFAULT_MODE = "multiple";

function AccordionProPage() {
    const [openIds, setOpenIds, resetOpenIds] = useLocalStorage(
        OPEN_STORAGE_KEY,
        DEFAULT_OPEN_IDS,
    );
    const [mode, setMode, resetMode] = useLocalStorage(
        MODE_STORAGE_KEY,
        DEFAULT_MODE,
    );
    const validIds = useMemo(
        () => new Set(accordionItems.map((item) => item.id)),
        [],
    );
    const currentOpenIds = Array.isArray(openIds)
        ? openIds.filter((id) => validIds.has(id))
        : [];
    const currentMode = mode === "single" ? "single" : DEFAULT_MODE;

    function toggleItem(id) {
        setOpenIds((savedIds) => {
            const safeIds = Array.isArray(savedIds)
                ? savedIds.filter((savedId) => validIds.has(savedId))
                : [];
            const isOpen = safeIds.includes(id);

            if (isOpen) {
                return safeIds.filter((itemId) => itemId !== id);
            }

            return currentMode === "single" ? [id] : [...safeIds, id];
        });
    }

    function changeMode(nextMode) {
        setMode(nextMode);

        if (nextMode === "single") {
            setOpenIds((savedIds) => {
                const safeIds = Array.isArray(savedIds)
                    ? savedIds.filter((id) => validIds.has(id))
                    : [];

                return safeIds.length ? [safeIds[0]] : [];
            });
        }
    }

    function expandAll() {
        if (currentMode === "single") {
            setOpenIds([accordionItems[0].id]);
            return;
        }

        setOpenIds(accordionItems.map((item) => item.id));
    }

    function resetAll() {
        resetOpenIds();
        resetMode();
    }

    const allOpen =
        currentMode === "multiple" && currentOpenIds.length === accordionItems.length;

    function scrollToAccordion() {
        document.getElementById("accordion-pro-demo")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <span className={styles.kicker}>
                            <FiLayers aria-hidden="true" />
                            <span>Reusable React component</span>
                        </span>

                        <h1>
                            Accordion <span>Pro</span>
                        </h1>

                        <p className={styles.heroText}>
                            A responsive accordion with saved state, flexible
                            opening modes, and controls for managing every panel.
                        </p>

                        <div className={styles.heroActions}>
                            <button
                                className={styles.primaryAction}
                                type="button"
                                onClick={scrollToAccordion}
                        >
                            Try the demo <FiArrowDown aria-hidden="true" />
                        </button>
                    </div>

                        <div className={styles.stats}>
                            <div>
                                <strong>{accordionItems.length}</strong>
                                <span>demo panels</span>
                            </div>
                            <div>
                                <strong>{currentOpenIds.length}</strong>
                                <span>currently open</span>
                            </div>
                            <div>
                                <strong>{currentMode === "single" ? "1" : "∞"}</strong>
                                <span>opening mode</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <img
                            src={heroImage}
                            alt="Light passing through a modern architectural structure"
                        />
                        <div className={styles.visualCard}>
                            <FiCheckCircle aria-hidden="true" />
                            <span>
                                <strong>Ready to reuse</strong>
                                <small>Keyboard friendly and persistent</small>
                            </span>
                        </div>
                        <div className={styles.visualBadge}>
                            <FiZap aria-hidden="true" /> Smooth motion
                        </div>
                    </div>
                </section>

                <section className={styles.workspace} id="accordion-pro-demo">
                    <Controls
                        mode={currentMode}
                        onModeChange={changeMode}
                        onExpandAll={expandAll}
                        onCollapseAll={() => setOpenIds([])}
                        onReset={resetAll}
                        allOpen={allOpen}
                        noneOpen={currentOpenIds.length === 0}
                        openCount={currentOpenIds.length}
                        totalCount={accordionItems.length}
                    />

                    <Accordion
                        items={accordionItems}
                        openIds={currentOpenIds}
                        onToggle={toggleItem}
                    />

                    <Showcase />
                </section>
            </div>

            <BackToTop />
        </div>
    );
}

export default AccordionProPage;
