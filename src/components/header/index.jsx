import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const menuPanelRef = useRef(null);

    useEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        const menuButton = menuButtonRef.current;
        const previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                return;
            }

            if (event.key !== "Tab") {
                return;
            }

            const focusableElements = menuPanelRef.current?.querySelectorAll(
                'a[href], button:not([disabled])',
            );
            const firstElement = focusableElements?.[0];
            const lastElement = focusableElements?.[focusableElements.length - 1];

            if (!menuPanelRef.current?.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? lastElement : firstElement)?.focus();
                return;
            }

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement?.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement?.focus();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousBodyOverflow;
            document.removeEventListener("keydown", handleKeyDown);
            menuButton?.focus();
        };
    }, [isMenuOpen]);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <NavLink
                    to="/"
                    end
                    className={styles.brand}
                    aria-label="React Examples home"
                >
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Ashish Ranjan"
                    />
                    <span>React Examples</span>
                </NavLink>

                <button
                    ref={menuButtonRef}
                    className={styles.menuButton}
                    type="button"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="site-navigation-menu"
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                </button>
            </div>

            {isMenuOpen && (
                <div
                    className={styles.menuOverlay}
                    role="presentation"
                    onClick={closeMenu}
                >
                    <div
                        ref={menuPanelRef}
                        id="site-navigation-menu"
                        className={styles.menuPanel}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Site navigation"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className={styles.menuHeader}>
                            <span className={styles.menuTitle}>Menu</span>
                            <button
                                ref={closeButtonRef}
                                className={styles.closeButton}
                                type="button"
                                aria-label="Close menu"
                                onClick={closeMenu}
                            >
                                <FiX aria-hidden="true" />
                            </button>
                        </div>

                        <nav className={styles.menuList} aria-label="Main navigation">
                            <NavLink to="/" end className={styles.navLink} onClick={closeMenu}>
                                Home
                            </NavLink>
                            <NavLink to="/about" className={styles.navLink} onClick={closeMenu}>
                                About
                            </NavLink>
                            <NavLink to="/contact" className={styles.navLink} onClick={closeMenu}>
                                Contact
                            </NavLink>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
