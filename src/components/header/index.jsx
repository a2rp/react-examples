import { NavLink } from "react-router-dom";

import styles from "./style.module.css";

function Header() {
    const getLinkClassName = ({ isActive }) =>
        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <NavLink to="/" end className={styles.brand} aria-label="React Examples home">
                    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" />
                    <span>React Examples</span>
                </NavLink>

                <nav className={styles.navigation} aria-label="Main navigation">
                    <NavLink to="/" end className={getLinkClassName}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={getLinkClassName}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={getLinkClassName}>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
