import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";

import styles from "./style.module.css";

function AppCard({ app }) {
    const { number, level, title, description, image, imageAlt, icon: Icon, to, features, action } = app;

    return (
        <Link className={styles.card} to={to}>
            <div className={styles.visual}>
                <img src={image} alt={imageAlt} loading="lazy" />
                <span className={styles.visualShade} aria-hidden="true" />
                <span className={styles.number}>{number}</span>
                <span className={styles.category}>{level}</span>
                <span className={styles.icon}>
                    <Icon aria-hidden="true" />
                </span>
            </div>

            <div className={styles.content}>
                <span className={styles.eyebrow}>Interactive React app</span>
                <h3>{title}</h3>
                <p>{description}</p>

                <ul className={styles.features}>
                    {features.map((feature) => (
                        <li key={feature}>
                            <FiCheck aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <span className={styles.action}>
                    {action}
                    <FiArrowUpRight aria-hidden="true" />
                </span>
            </div>
        </Link>
    );
}

export default AppCard;
