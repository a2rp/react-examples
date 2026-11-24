import { FiLayers, FiSmartphone, FiZap } from "react-icons/fi";

import architectureImage from "../../images/accordion-hero.jpg";
import controlsImage from "../../images/accordion-controls.jpg";
import responsiveImage from "../../images/accordion-responsive.jpg";
import styles from "./style.module.css";

const showcaseItems = [
    {
        title: "Reusable structure",
        description: "Small components keep the interaction easy to extend.",
        image: architectureImage,
        alt: "Modern architecture with clean lines and light",
        icon: FiLayers,
    },
    {
        title: "Focused controls",
        description: "Clear controls make large content sets simple to manage.",
        image: controlsImage,
        alt: "A calm shoreline with people walking in the distance",
        icon: FiZap,
    },
    {
        title: "Responsive by default",
        description: "Every panel and control adapts to smaller screens.",
        image: responsiveImage,
        alt: "A wide mountain valley under a soft sky",
        icon: FiSmartphone,
    },
];

function Showcase() {
    return (
        <section className={styles.showcase} id="accordion-pro-features">
            <div className={styles.sectionHeading}>
                <span className={styles.eyebrow}>Built for real interfaces</span>
                <h2>Simple patterns, polished details.</h2>
                <p>
                    Use it for FAQs, documentation, settings, product tours, and
                    interfaces that need progressive disclosure.
                </p>
            </div>

            <div className={styles.cards}>
                {showcaseItems.map(({ title, description, image, alt, icon: Icon }) => (
                    <article className={styles.card} key={title}>
                        <div className={styles.imageWrap}>
                            <img src={image} alt={alt} loading="lazy" />
                            <span className={styles.cardIcon}>
                                <Icon aria-hidden="true" />
                            </span>
                        </div>
                        <div className={styles.cardBody}>
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Showcase;
