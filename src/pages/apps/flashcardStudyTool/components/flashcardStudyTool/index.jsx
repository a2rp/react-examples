import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheck, FiPlus, FiRotateCcw } from "react-icons/fi";
import styles from "./styles.module.css";

const seedCards = [
    { id: "1", front: "What does CSS stand for?", back: "Cascading Style Sheets" },
    { id: "2", front: "Which array method creates a new array from matching items?", back: "filter()" },
    { id: "3", front: "What is the value of a promise before it settles?", back: "Pending" },
    { id: "4", front: "What does the DOM represent?", back: "The document structure as objects that scripts can read and change" },
];

const readStoredValue = (key) => {
    try {
        const value = window.localStorage.getItem(key);
        return value === null ? undefined : JSON.parse(value);
    } catch {
        return undefined;
    }
};

const checkStorageAvailability = () => {
    try {
        const key = "recall-storage-probe";
        window.localStorage.setItem(key, "1");
        window.localStorage.removeItem(key);
        return true;
    } catch {
        return false;
    }
};

const persistStoredValue = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
        // Keep the in-memory deck usable when browser storage is unavailable.
    }
};

const readCards = () => {
    const storedCards = readStoredValue("recall-cards");
    if (storedCards === undefined) return seedCards;
    if (!Array.isArray(storedCards)) return seedCards;

    const ids = new Set();
    const validCards = storedCards.filter((card) => {
        if (!card || typeof card !== "object" || Array.isArray(card)) return false;
        if (typeof card.id !== "string" || !card.id.trim()) return false;
        if (typeof card.front !== "string" || !card.front.trim()) return false;
        if (typeof card.back !== "string" || !card.back.trim() || ids.has(card.id)) return false;
        ids.add(card.id);
        return true;
    });

    return storedCards.length > 0 && validCards.length === 0 ? seedCards : validCards;
};

const readKnownCards = (cards) => {
    const storedKnown = readStoredValue("recall-known");
    if (!Array.isArray(storedKnown)) return [];

    const cardIds = new Set(cards.map((card) => card.id));
    return [...new Set(storedKnown.filter((id) => typeof id === "string" && cardIds.has(id)))];
};

const FlashcardStudyTool = () => {
    const [cards, setCards] = useState(readCards);
    const [known, setKnown] = useState(() => readKnownCards(cards));
    const [index, setIndex] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [formError, setFormError] = useState("");
    const [storageAvailable] = useState(checkStorageAvailability);

    useEffect(() => {
        persistStoredValue("recall-cards", cards);
    }, [cards]);

    useEffect(() => {
        persistStoredValue("recall-known", known);
    }, [known]);

    const card = cards[index];

    const move = (step) => {
        if (!cards.length) return;
        setIndex((current) => (current + step + cards.length) % cards.length);
        setFlipped(false);
    };

    const markKnown = () => {
        if (!card) return;
        setKnown((items) => [...new Set([...items, card.id])]);
        move(1);
    };

    const markNeedsAnotherLook = () => {
        if (!card) return;
        setKnown((items) => items.filter((id) => id !== card.id));
        move(1);
    };

    const addCard = (event) => {
        event.preventDefault();
        const prompt = front.trim();
        const answer = back.trim();

        if (!prompt || !answer) {
            setFormError("Enter a prompt and an answer to add a card.");
            return;
        }

        setFormError("");
        setCards((items) => [...items, { id: crypto.randomUUID(), front: prompt, back: answer }]);
        setFront("");
        setBack("");
    };

    const updatePrompt = (value) => {
        setFront(value);
        if (formError) setFormError("");
    };

    const updateAnswer = (value) => {
        setBack(value);
        if (formError) setFormError("");
    };

    return (
        <section className={styles.flashcardStudyTool} id="dashboard">
            <header className={styles.header}>
                <div>
                    <p className={styles.label}>DAILY RECALL / FRONTEND BASICS</p>
                    <h1>Make it stick.</h1>
                    <p>One card at a time. Bring the answer to mind before you turn it over.</p>
                </div>
                <div className={styles.streak}>
                    <span aria-hidden="true">✳</span>
                    <strong>{known.length.toString().padStart(2, "0")}</strong>
                    <small>cards confident</small>
                </div>
            </header>

            {!storageAvailable && (
                <p className={styles.storageWarning} role="status">
                    Browser storage is unavailable. Your changes will be kept only until you close or reload this page.
                </p>
            )}

            <div className={styles.studyLayout} id="workspace">
                <aside className={styles.deckRail}>
                    <div className={styles.deckTitle}>
                        <span>01</span>
                        <div><b>Web foundations</b><small>{cards.length} cards · personal deck</small></div>
                    </div>
                    <p className={styles.railLabel}>TODAY’S REVIEW</p>
                    <div className={styles.reviewStat}>
                        <strong>{Math.max(cards.length - known.length, 0)}</strong>
                        <span>left to practice</span>
                    </div>
                    <div
                        className={styles.progress}
                        role="progressbar"
                        aria-label="Cards marked confident"
                        aria-valuemin={0}
                        aria-valuemax={Math.max(cards.length, 1)}
                        aria-valuenow={known.length}
                        aria-valuetext={`${known.length} of ${cards.length} cards marked confident`}
                    >
                        <span style={{ width: (cards.length ? Math.min(100, known.length / cards.length * 100) : 0) + "%" }} />
                    </div>
                    <p className={styles.progressText}>{known.length} of {cards.length} marked confident</p>
                    <div className={styles.tip}>
                        <b>Try this</b>
                        <p>Say the answer out loud before you flip the card.</p>
                    </div>
                </aside>

                <div className={styles.practice}>
                    <div className={styles.cardMeta}>
                        <span>QUESTION {String(cards.length ? index + 1 : 0).padStart(2, "0")} <i>/ {String(cards.length).padStart(2, "0")}</i></span>
                        <button type="button" onClick={() => setFlipped((value) => !value)} disabled={!card}>
                            <FiRotateCcw aria-hidden="true" /> Flip card
                        </button>
                    </div>

                    {card ? (
                        <button
                            type="button"
                            className={styles.flashcard}
                            onClick={() => setFlipped((value) => !value)}
                            aria-label={flipped
                                ? `Answer: ${card.back}. Activate to show the prompt.`
                                : `Question: ${card.front}. Activate to reveal the answer.`}
                        >
                            <span className={styles.cardCorner}>{flipped ? "ANSWER" : "PROMPT"}</span>
                            <span className={styles.cardText}>{flipped ? card.back : card.front}</span>
                            <span className={styles.tapHint}>{flipped ? "Click to see prompt" : "Click to reveal answer"}</span>
                        </button>
                    ) : (
                        <div className={styles.flashcard}>
                            <span className={styles.cardText}>Add your first card below</span>
                        </div>
                    )}

                    <div className={styles.cardControls}>
                        <button type="button" onClick={() => move(-1)} aria-label="Previous card" disabled={!card}><FiArrowLeft aria-hidden="true" /></button>
                        <div>{cards.length ? index + 1 : 0}<span> / {cards.length}</span></div>
                        <button type="button" onClick={() => move(1)} aria-label="Next card" disabled={!card}><FiArrowRight aria-hidden="true" /></button>
                    </div>
                    <div className={styles.ratings}>
                        <button type="button" className={styles.reviewButton} onClick={markNeedsAnotherLook} disabled={!card}>Need another look</button>
                        <button type="button" className={styles.knownButton} onClick={markKnown} disabled={!card}><FiCheck aria-hidden="true" /> I know this</button>
                    </div>
                </div>
            </div>

            <form className={styles.addCard} onSubmit={addCard}>
                <div className={styles.addHeading}>
                    <FiPlus aria-hidden="true" />
                    <div><b>Add a flashcard</b><span>Build your own review deck</span></div>
                </div>
                <label>Prompt<input value={front} onChange={(event) => updatePrompt(event.target.value)} placeholder="Question or term" required maxLength={240} /></label>
                <label>Answer<input value={back} onChange={(event) => updateAnswer(event.target.value)} placeholder="Definition or explanation" required maxLength={1000} /></label>
                <button type="submit">Add card <FiPlus aria-hidden="true" /></button>
                {formError && <p className={styles.formError} role="alert">{formError}</p>}
            </form>
        </section>
    );
};

export default FlashcardStudyTool;
