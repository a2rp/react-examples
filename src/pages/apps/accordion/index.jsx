import { useState } from "react";
import { FiArrowLeft, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

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
        answer: "No. Opening a new question closes the previous answer.",
    },
    {
        id: 3,
        question: "Can I use the keyboard?",
        answer: "Yes. Focus a question, then press Enter or Space to open or close it.",
    },
    {
        id: 4,
        question: "How do I add my own questions?",
        answer: "Add another question and answer to the list in this page component.",
    },
];

function AccordionPage() {
    const [activeId, setActiveId] = useState(1);

    function toggleQuestion(id) {
        setActiveId((currentId) => (currentId === id ? null : id));
    }

    return (
        <section className={styles.page}>
            <Link className={styles.backLink} to="/apps">
                <FiArrowLeft aria-hidden="true" />
                All apps
            </Link>

            <div className={styles.content}>
                <span className={styles.eyebrow}>Interactive app</span>
                <h1>Accordion</h1>
                <p className={styles.description}>Open one answer at a time.</p>

                <div className={styles.questionList}>
                    {questions.map((item) => {
                        const isOpen = activeId === item.id;
                        const answerId = `accordion-answer-${item.id}`;

                        return (
                            <article
                                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                                key={item.id}
                            >
                                <button
                                    className={styles.question}
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
                                    className={styles.answer}
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
    );
}

export default AccordionPage;
