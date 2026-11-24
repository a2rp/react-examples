import { useState } from "react";
import {
    FiActivity,
    FiArrowDown,
    FiChevronDown,
    FiChevronUp,
    FiCode,
    FiLayers,
    FiMonitor,
    FiShield,
    FiZap,
} from "react-icons/fi";

import accessibleControlsImage from "./images/accessible-controls.jpg";
import accordionHeroImage from "./images/accordion-hero.jpg";
import responsiveLayoutImage from "./images/responsive-layout.jpg";
import reusableComponentImage from "./images/reusable-component.jpg";
import smoothTransitionsImage from "./images/smooth-transitions.jpg";
import styles from "./style.module.css";

const questions = [
    {
        id: 1,
        question: "What does this accordion do?",
        answer: "It expands one answer at a time, keeping the page easy to scan.",
    },
    {
        id: 2,
        question: "Can more than one answer stay open?",
        answer: "No. Opening a new item closes the previous one.",
    },
    {
        id: 3,
        question: "Can I use the keyboard?",
        answer: "Yes. Focus a question, then press Enter or Space.",
    },
    {
        id: 4,
        question: "How do I add my own questions?",
        answer: "Edit the FAQ data file.",
    },
];

const features = [
    {
        icon: FiCode,
        title: "Reusable",
        text: "Use your own question and answer data.",
        image: reusableComponentImage,
    },
    {
        icon: FiActivity,
        title: "Smooth",
        text: "Animated expand and collapse.",
        image: smoothTransitionsImage,
    },
    {
        icon: FiMonitor,
        title: "Responsive",
        text: "Fits mobile and desktop screens.",
        image: responsiveLayoutImage,
    },
    {
        icon: FiShield,
        title: "Accessible",
        text: "Keyboard controls with clear open states.",
        image: accessibleControlsImage,
    },
];

function AccordionPage() {
    const [activeId, setActiveId] = useState(1);

    function toggleQuestion(id) {
        setActiveId((currentId) => (currentId === id ? null : id));
    }

    function exploreFeatures() {
        const section = document.getElementById("features");

        if (!section) {
            return;
        }

        const sectionTop = section.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: Math.max(0, sectionTop - 90),
            behavior: "smooth",
        });
    }

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroCopy}>
                        <span className={styles.eyebrow}>React component</span>
                        <h1 className={styles.heroTitle}>Accordion for React</h1>
                        <p>Build clear FAQs with expandable answers.</p>

                        <button
                            className={styles.featuresButton}
                            type="button"
                            onClick={exploreFeatures}
                        >
                            <span>Explore features</span>
                            <FiArrowDown aria-hidden="true" />
                        </button>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.imageCard}>
                            <img
                                src={accordionHeroImage}
                                alt="Modern architecture viewed through a glass roof"
                            />

                            <div className={`${styles.badge} ${styles.badgeTop}`}>
                                <FiLayers aria-hidden="true" />
                                <strong>Reusable</strong>
                            </div>

                            <div className={`${styles.badge} ${styles.badgeBottom}`}>
                                <FiZap aria-hidden="true" />
                                <strong>Smooth</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.features} id="features">
                <div className={styles.featuresContainer}>
                    <span className={styles.eyebrow}>Features</span>
                    <h2 className={styles.featuresTitle}>Built for everyday interfaces.</h2>

                    <div className={styles.featureGrid}>
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <article className={styles.featureCard} key={feature.title}>
                                    <img
                                        src={feature.image}
                                        alt={`${feature.title} feature visual`}
                                        loading="lazy"
                                    />
                                    <span className={styles.featureIcon}>
                                        <Icon aria-hidden="true" />
                                    </span>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className={styles.accordion} id="accordion">
                <div className={styles.accordionContainer}>
                    <span className={styles.eyebrow}>Live interactive demo</span>
                    <h2 className={styles.accordionTitle}>
                        Frequently Asked <span>Questions</span>
                    </h2>

                    <div className={styles.faqList}>
                        {questions.map((item) => {
                            const isOpen = activeId === item.id;
                            const answerId = `accordion-answer-${item.id}`;

                            return (
                                <article
                                    className={`${styles.faqItem} ${isOpen ? styles.open : ""}`}
                                    key={item.id}
                                >
                                    <button
                                        className={styles.questionButton}
                                        type="button"
                                        aria-expanded={isOpen}
                                        aria-controls={answerId}
                                        onClick={() => toggleQuestion(item.id)}
                                    >
                                        <span>{item.question}</span>
                                        {isOpen ? (
                                            <FiChevronUp aria-hidden="true" />
                                        ) : (
                                            <FiChevronDown aria-hidden="true" />
                                        )}
                                    </button>
                                    <div
                                        className={styles.answerPanel}
                                        id={answerId}
                                        aria-hidden={!isOpen}
                                    >
                                        <div className={styles.answerInner}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AccordionPage;
