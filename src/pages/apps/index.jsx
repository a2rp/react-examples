import { useState } from "react";
import {
    FiActivity,
    FiArrowDown,
    FiCheck,
    FiChevronDown,
    FiChevronLeft,
    FiChevronRight,
    FiLayers,
} from "react-icons/fi";

import AppCard from "../../components/app-card";
import apps from "../../data/apps";
import styles from "./style.module.css";

const APPS_PER_PAGE = 1;

function AppsPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(apps.length / APPS_PER_PAGE);
    const firstItemIndex = (currentPage - 1) * APPS_PER_PAGE;
    const visibleApps = apps.slice(firstItemIndex, firstItemIndex + APPS_PER_PAGE);

    function changePage(page) {
        if (page < 1 || page > totalPages || page === currentPage) {
            return;
        }

        setCurrentPage(page);
        document.getElementById("app-results")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroCopy}>
                    <span className={styles.eyebrow}>
                        <FiActivity aria-hidden="true" />
                        Interactive collection
                    </span>
                    <h1>
                        Small ideas.
                        <br />
                        <span>Made interactive.</span>
                    </h1>
                    <p>
                        Explore focused React demos built around useful interface
                        patterns. Pick one, try it, and see how it works.
                    </p>
                    <div className={styles.heroActions}>
                        <a className={styles.primaryAction} href="#demos">
                            Explore the demos <FiArrowDown aria-hidden="true" />
                        </a>
                        <div className={styles.heroNote}>
                            <span className={styles.noteIcon}>
                                <FiCheck aria-hidden="true" />
                            </span>
                            <span>Free to try. No setup needed.</span>
                        </div>
                    </div>
                </div>

                <aside className={styles.patternPreview}>
                    <div className={styles.previewHeader}>
                        <span className={styles.previewMark}>
                            <FiLayers aria-hidden="true" />
                        </span>
                        <span className={styles.previewHeading}>
                            Pattern preview
                            <small>Disclosure component</small>
                        </span>
                        <span className={styles.previewIndex}>01 / {String(apps.length).padStart(2, "0")}</span>
                    </div>

                    <div className={styles.previewDemo} aria-hidden="true">
                        <div className={`${styles.previewRow} ${styles.previewRowOpen}`}>
                            <span>How does an accordion work?</span>
                            <FiChevronDown />
                        </div>
                        <p className={styles.previewAnswer}>
                            Reveal helpful content when someone needs it.
                        </p>
                        <div className={styles.previewRow}>
                            <span>Can I control how panels open?</span>
                            <FiChevronDown />
                        </div>
                        <div className={styles.previewRow}>
                            <span>Does it work on mobile?</span>
                            <FiChevronDown />
                        </div>
                    </div>

                    <div className={styles.previewFooter}>
                        <span><i /> Focused examples</span>
                        <span><i /> Ready in your browser</span>
                    </div>
                </aside>
            </section>

            <section className={styles.collection} id="demos">
                <div className={styles.sectionHeading}>
                    <div>
                        <span className={styles.sectionEyebrow}>Choose a starting point</span>
                        <h2>Explore the collection</h2>
                    </div>
                    <span className={styles.appCount}>
                        <FiLayers aria-hidden="true" />
                        {String(apps.length).padStart(2, "0")} interactive apps
                    </span>
                </div>

                <div className={styles.appGrid} id="app-results">
                    {visibleApps.map((app) => (
                        <AppCard key={app.title} app={app} featured />
                    ))}
                </div>

                <div className={styles.pagination}>
                    <div className={styles.paginationInfo}>
                        <span className={styles.paginationLabel}>Showing</span>
                        <strong>{String(firstItemIndex + 1).padStart(2, "0")}</strong>
                        <span>of {String(apps.length).padStart(2, "0")} apps</span>
                        <div className={styles.progressTrack} aria-hidden="true">
                            <span
                                className={styles.progressFill}
                                style={{ width: `${(currentPage / totalPages) * 100}%` }}
                            />
                        </div>
                    </div>

                    <nav className={styles.paginationControls} aria-label="App pages">
                        <button
                            className={styles.pageArrow}
                            type="button"
                            disabled={currentPage === 1}
                            onClick={() => changePage(currentPage - 1)}
                        >
                            <FiChevronLeft aria-hidden="true" />
                            <span>Previous</span>
                        </button>

                        <div className={styles.pageNumbers}>
                            {Array.from({ length: totalPages }, (_, index) => {
                                const page = index + 1;

                                return (
                                    <button
                                        className={styles.pageNumber}
                                        type="button"
                                        key={page}
                                        aria-current={currentPage === page ? "page" : undefined}
                                        aria-label={`Go to page ${page}`}
                                        onClick={() => changePage(page)}
                                    >
                                        {String(page).padStart(2, "0")}
                                    </button>
                                );
                            })}
                        </div>

                        <button
                            className={styles.pageArrow}
                            type="button"
                            disabled={currentPage === totalPages}
                            onClick={() => changePage(currentPage + 1)}
                        >
                            <span>Next</span>
                            <FiChevronRight aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </section>
        </main>
    );
}

export default AppsPage;
