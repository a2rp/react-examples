import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiChevronDown, FiMenu, FiSearch, FiX } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

import apps from "../../data/apps";
import styles from "./style.module.css";

function Header() {
    const { pathname } = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [appsExpansionOverride, setAppsExpansionOverride] = useState(null);
    const [headerAppsOverride, setHeaderAppsOverride] = useState(null);
    const menuButtonRef = useRef(null);
    const closeButtonRef = useRef(null);
    const menuPanelRef = useRef(null);
    const headerAppsRef = useRef(null);
    const isAppsExpanded = appsExpansionOverride?.pathname === pathname
        ? appsExpansionOverride.expanded
        : pathname.startsWith("/apps");
    const isHeaderAppsOpen =
        headerAppsOverride?.pathname === pathname && headerAppsOverride.isOpen;
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const matchesMenuLink = (label) =>
        !normalizedSearchTerm || label.toLowerCase().includes(normalizedSearchTerm);
    const showHome = matchesMenuLink("Home");
    const showAbout = matchesMenuLink("About");
    const showContact = matchesMenuLink("Contact");
    const matchingApps = apps.filter((app) => matchesMenuLink(app.title));
    const showApps = matchesMenuLink("Apps") || matchingApps.length > 0;
    const visibleApps =
        normalizedSearchTerm && !matchesMenuLink("Apps") ? matchingApps : apps;
    const menuAppsExpanded = normalizedSearchTerm
        ? showApps
        : isAppsExpanded;
    const hasMenuSearchResults = showHome || showAbout || showContact || showApps;
    const getPrimaryLinkClassName = ({ isActive }) =>
        isActive ? `${styles.primaryLink} ${styles.active}` : styles.primaryLink;

    useEffect(() => {
        if (!isHeaderAppsOpen) {
            return undefined;
        }

        function handlePointerDown(event) {
            if (!headerAppsRef.current?.contains(event.target)) {
                setHeaderAppsOverride({ pathname, isOpen: false });
            }
        }

        function handleKeyDown(event) {
            if (event.key === "Escape") {
                setHeaderAppsOverride({ pathname, isOpen: false });
            }
        }

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isHeaderAppsOpen, pathname]);

    useLayoutEffect(() => {
        if (!isMenuOpen) {
            return undefined;
        }

        const menuButton = menuButtonRef.current;
        const root = document.documentElement;
        const body = document.body;
        const previousDocumentOverflow = root.style.overflow;
        const previousBodyPaddingRight = body.style.paddingRight;
        const previousContentWidth = root.clientWidth;

        root.style.overflow = "hidden";

        // Some browsers stop reserving the scrollbar gutter when overflow is
        // hidden. Measure the actual width change and compensate only when it
        // happens, so the page keeps the same content width while the menu is open.
        const contentWidthChange = Math.max(0, root.clientWidth - previousContentWidth);

        if (contentWidthChange > 0) {
            const currentBodyPaddingRight = Number.parseFloat(
                window.getComputedStyle(body).paddingRight,
            ) || 0;
            body.style.paddingRight = `${currentBodyPaddingRight + contentWidthChange}px`;
        }

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
            root.style.overflow = previousDocumentOverflow;
            body.style.paddingRight = previousBodyPaddingRight;
            document.removeEventListener("keydown", handleKeyDown);
            menuButton?.focus();
        };
    }, [isMenuOpen]);

    function closeMenu() {
        setIsMenuOpen(false);
        setSearchTerm("");
        setHeaderAppsOverride({ pathname, isOpen: false });
    }

    function closeHeaderAppsDropdown() {
        setHeaderAppsOverride({ pathname, isOpen: false });
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

                <div className={styles.headerActions}>
                    <nav className={styles.primaryNavigation} aria-label="Main navigation">
                        <NavLink to="/" end className={getPrimaryLinkClassName} onClick={closeHeaderAppsDropdown}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={getPrimaryLinkClassName} onClick={closeHeaderAppsDropdown}>
                            About
                        </NavLink>
                        <NavLink to="/contact" className={getPrimaryLinkClassName} onClick={closeHeaderAppsDropdown}>
                            Contact
                        </NavLink>
                        <div
                            ref={headerAppsRef}
                            className={`${styles.primaryApps} ${pathname.startsWith("/apps") ? styles.primaryAppsActive : ""} ${isHeaderAppsOpen ? styles.primaryAppsOpen : ""}`}
                        >
                            <NavLink to="/apps" className={getPrimaryLinkClassName} onClick={closeHeaderAppsDropdown}>
                                Apps
                            </NavLink>
                            <button
                                className={styles.primaryAppsToggle}
                                type="button"
                                aria-label="Toggle app pages"
                                aria-expanded={isHeaderAppsOpen}
                                aria-controls="header-app-subroutes"
                                onClick={() =>
                                    setHeaderAppsOverride((currentState) => ({
                                        pathname,
                                        isOpen: !(
                                            currentState?.pathname === pathname &&
                                            currentState.isOpen
                                        ),
                                    }))
                                }
                            >
                                <FiChevronDown aria-hidden="true" />
                            </button>
                            <div
                                className={styles.primaryDropdown}
                                id="header-app-subroutes"
                                hidden={!isHeaderAppsOpen}
                            >
                                {apps.map((app) => (
                                    <NavLink
                                        key={app.to}
                                        to={app.to}
                                        className={styles.dropdownLink}
                                        onClick={closeHeaderAppsDropdown}
                                    >
                                        {app.title}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </nav>

                    <button
                        ref={menuButtonRef}
                        className={styles.menuButton}
                        type="button"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        aria-controls="site-navigation-menu"
                        onClick={() => {
                            setHeaderAppsOverride({ pathname, isOpen: false });
                            setAppsExpansionOverride(null);
                            setSearchTerm("");
                            setIsMenuOpen((isOpen) => !isOpen);
                        }}
                    >
                        {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
                    </button>
                </div>
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

                        <div className={styles.menuSearch}>
                            <FiSearch aria-hidden="true" />
                            <input
                                type="search"
                                value={searchTerm}
                                placeholder="Search menu"
                                aria-label="Search menu links"
                                autoComplete="off"
                                onChange={(event) => setSearchTerm(event.target.value)}
                            />
                        </div>

                        <nav className={styles.menuList} aria-label="Main navigation">
                            {showHome && (
                                <NavLink to="/" end className={styles.navLink} onClick={closeMenu}>
                                    Home
                                </NavLink>
                            )}
                            {showAbout && (
                                <NavLink to="/about" className={styles.navLink} onClick={closeMenu}>
                                    About
                                </NavLink>
                            )}
                            {showContact && (
                                <NavLink to="/contact" className={styles.navLink} onClick={closeMenu}>
                                    Contact
                                </NavLink>
                            )}
                            {showApps && (
                                <div className={styles.menuApps}>
                                <div className={styles.menuAppsRow}>
                                    <NavLink
                                        to="/apps"
                                        className={styles.navLink}
                                        onClick={closeMenu}
                                    >
                                        Apps
                                    </NavLink>
                                    <button
                                        className={styles.submenuToggle}
                                        type="button"
                                        aria-label={menuAppsExpanded ? "Collapse app pages" : "Expand app pages"}
                                        aria-expanded={menuAppsExpanded}
                                        aria-controls="menu-app-subroutes"
                                        onClick={() =>
                                            setAppsExpansionOverride((currentState) => {
                                                const isExpanded =
                                                    currentState?.pathname === pathname
                                                        ? currentState.expanded
                                                        : pathname.startsWith("/apps");

                                                return { pathname, expanded: !isExpanded };
                                            })
                                        }
                                    >
                                        <FiChevronDown aria-hidden="true" />
                                    </button>
                                </div>
                                <div
                                    className={styles.menuSubList}
                                    id="menu-app-subroutes"
                                    hidden={!menuAppsExpanded}
                                >
                                    {visibleApps.map((app) => (
                                        <NavLink
                                            key={app.to}
                                            to={app.to}
                                            className={styles.menuSubLink}
                                            onClick={closeMenu}
                                        >
                                            {app.title}
                                        </NavLink>
                                    ))}
                                </div>
                                </div>
                            )}
                            {normalizedSearchTerm && !hasMenuSearchResults && (
                                <p className={styles.menuEmptyState}>No matching pages.</p>
                            )}
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
