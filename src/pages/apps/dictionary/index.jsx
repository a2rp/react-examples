import { useState } from "react";
import { FiArrowUp, FiBookOpen, FiGithub, FiSearch } from "react-icons/fi";

import styles from "./style.module.css";

const partOfSpeechLabels = {
    n: "noun",
    v: "verb",
    adj: "adjective",
    adv: "adverb",
    u: "other",
};

function parseMeanings(result) {
    const fallback = (result.tags || []).find((tag) => tag in partOfSpeechLabels) || "u";
    const grouped = new Map();

    for (const rawDefinition of result.defs || []) {
        const separator = rawDefinition.indexOf("\t");
        const code = separator < 0
            ? fallback
            : rawDefinition.slice(0, separator).trim().toLowerCase();
        const definition = (separator < 0
            ? rawDefinition
            : rawDefinition.slice(separator + 1)
        ).trim();

        if (!definition) continue;
        const label = partOfSpeechLabels[code] || "other";
        grouped.set(label, [...(grouped.get(label) || []), definition]);
    }

    return [...grouped].map(([partOfSpeech, definitions]) => ({ partOfSpeech, definitions }));
}

function Dictionary() {
    const [searchWord, setSearchWord] = useState("");
    const [entry, setEntry] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const word = searchWord.trim().toLowerCase();
        if (!word || isLoading) return;

        setIsLoading(true);
        setEntry(null);
        setError("");
        const controller = new AbortController();
        const timeout = window.setTimeout(() => controller.abort(), 10000);

        try {
            const query = new URLSearchParams({ sp: word, qe: "sp", md: "dps", max: "1" });
            const response = await fetch(`https://api.datamuse.com/words?${query}`, {
                signal: controller.signal,
            });
            if (!response.ok) throw new Error("service");

            const results = await response.json();
            const match = results.find((item) => item.word.toLowerCase() === word);
            const meanings = match ? parseMeanings(match) : [];
            if (!meanings.length) throw new Error("missing");

            setEntry({ word: match.word, meanings });
        } catch (cause) {
            setError(cause.message === "missing"
                ? "We couldn't find that word. Check the spelling and try again."
                : cause.name === "AbortError"
                    ? "The lookup took too long. Please try again."
                    : "Dictionary service is unavailable right now. Please try again shortly.");
        } finally {
            window.clearTimeout(timeout);
            setIsLoading(false);
        }
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <a className={styles.brand} href="/" aria-label="React Mini Projects home">
                    <span className={styles.brandMark}><FiBookOpen aria-hidden="true" /></span>
                    <span><strong>Wordbook</strong><small>A clear path to meaning</small></span>
                </a>
                <a
                    className={styles.sourceLink}
                    href="https://github.com/a2rp/react_mini_projects/tree/main/src/pages/apps/dictionary"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FiGithub aria-hidden="true" /> <span>Source</span>
                </a>
            </header>

            <main className={styles.main}>
                <section className={styles.intro} aria-labelledby="dictionary-title">
                    <span className={styles.eyebrow}>WORD REFERENCE</span>
                    <h1 id="dictionary-title">Find the right words.</h1>
                    <p>Look up a word to explore its definitions and how it is used.</p>
                </section>

                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <label className={styles.searchField}>
                        <FiSearch aria-hidden="true" />
                        <span className={styles.srOnly}>Word to look up</span>
                        <input
                            autoComplete="off"
                            value={searchWord}
                            onChange={(event) => setSearchWord(event.target.value)}
                            disabled={isLoading}
                            placeholder="Try a word like resilient"
                        />
                    </label>
                    <button className={styles.searchButton} type="submit" disabled={isLoading || !searchWord.trim()}>
                        {isLoading ? <span className={styles.spinner} aria-hidden="true" /> : <FiSearch aria-hidden="true" />}
                        {isLoading ? "Searching" : "Search"}
                    </button>
                </form>

                <section className={styles.results} aria-live="polite" aria-busy={isLoading}>
                    {error && <p className={styles.error} role="alert">{error}</p>}
                    {!entry && !error && !isLoading && (
                        <div className={styles.emptyState}>
                            <span className={styles.emptyIcon}><FiBookOpen aria-hidden="true" /></span>
                            <h2>Your next word starts here</h2>
                            <p>Search above to see definitions grouped by part of speech.</p>
                        </div>
                    )}
                    {entry && (
                        <article className={styles.wordCard}>
                            <div className={styles.wordHeading}>
                                <span className={styles.resultEyebrow}>DICTIONARY ENTRY</span>
                                <h2>{entry.word}</h2>
                            </div>
                            <div className={styles.meanings}>
                                {entry.meanings.map(({ partOfSpeech, definitions }) => (
                                    <section className={styles.meaning} key={partOfSpeech}>
                                        <h3>{partOfSpeech}</h3>
                                        <ol>
                                            {definitions.map((definition, index) => (
                                                <li key={`${index}-${definition}`}>{definition}</li>
                                            ))}
                                        </ol>
                                    </section>
                                ))}
                            </div>
                            <p className={styles.attribution}>Definitions provided by Datamuse.</p>
                        </article>
                    )}
                </section>

                <p className={styles.dataNote}>
                    Word definitions are retrieved from the Datamuse API when you search.
                </p>
            </main>

            <footer className={styles.footer}>
                <span>Part of <a href="/">React Mini Projects</a></span>
                <a href="https://www.ashishranjan.net/" target="_blank" rel="noreferrer">Made by Ashish Ranjan</a>
            </footer>

            <button
                className={styles.goTop}
                type="button"
                aria-label="Go to top"
                title="Go to top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <FiArrowUp aria-hidden="true" />
            </button>
        </div>
    );
}

export default Dictionary;
