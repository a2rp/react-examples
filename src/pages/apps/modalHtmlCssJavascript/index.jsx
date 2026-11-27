import { useEffect, useRef, useState } from "react";
import {
    FaFacebookF,
    FaGithub,
    FaLinkedinIn,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa";
import { FiCoffee, FiCodepen, FiGlobe, FiHeart, FiMail } from "react-icons/fi";
import styles from "./style.module.scss";
import logo from "./assets/logo.png";

const footerLinks = [
    ["Portfolio", "https://www.ashishranjan.net/", FiGlobe],
    ["GitHub", "https://github.com/a2rp", FaGithub],
    ["CodePen", "https://codepen.io/ash1198", FiCodepen],
    ["LinkedIn", "https://www.linkedin.com/in/aashishranjan", FaLinkedinIn],
    ["Facebook", "https://www.facebook.com/theash.ashish/", FaFacebookF],
    ["YouTube", "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1", FaYoutube],
    ["Email", "mailto:ash.ranjan09@gmail.com", FiMail],
    ["Support", "https://a2rp-donation-page.netlify.app/", FiHeart],
    ["Buy Me a Coffee", "https://buymeacoffee.com/a2rp", FiCoffee],
    ["Patreon", "https://www.patreon.com/a2rp", FaPatreon],
];

function ModalHtmlCssJavascript() {
    const [isOpen, setIsOpen] = useState(false);
    const [showGoTop, setShowGoTop] = useState(false);
    const [message, setMessage] = useState("");
    const formRef = useRef(null);
    const modalRef = useRef(null);

    useEffect(() => {
        const updateGoTop = () => setShowGoTop(window.scrollY > 420);
        window.addEventListener("scroll", updateGoTop, { passive: true });
        updateGoTop();
        return () => window.removeEventListener("scroll", updateGoTop);
    }, []);

    useEffect(() => {
        if (!isOpen) return undefined;

        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const focusFrame = requestAnimationFrame(() =>
            modalRef.current?.querySelector("input")?.focus(),
        );
        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                setIsOpen(false);
                setMessage("");
                formRef.current?.reset();
                return;
            }
            if (event.key !== "Tab" || !modalRef.current) return;

            const items = [...modalRef.current.querySelectorAll(
                'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
            )].filter((item) => !item.hidden);
            const first = items[0];
            const last = items.at(-1);
            if (!first || !last) {
                event.preventDefault();
                modalRef.current.focus();
            } else if (!modalRef.current.contains(document.activeElement)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            } else if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            cancelAnimationFrame(focusFrame);
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
            if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
                previousFocus.focus();
            }
        };
    }, [isOpen]);

    const closeModal = () => {
        setIsOpen(false);
        setMessage("");
        formRef.current?.reset();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Demo only: no subscription was created and no data was sent.");
        formRef.current?.reset();
    };

    return (
        <div className={styles.app}>
            <header className={styles.siteHeader} inert={isOpen}>
                <a className={styles.brand} href="https://www.ashishranjan.net/">
                    <img src={logo} alt="Ashish Ranjan logo" />
                    <span><strong>Modal Studio</strong><small>HTML, CSS and JavaScript</small></span>
                </a>
                <span className={styles.headerBadge}>UI component demo</span>
            </header>

            <main className={styles.container} inert={isOpen}>
                <section className={styles.hero}>
                    <span className={styles.eyebrow}>INTERACTION PATTERN</span>
                    <h1>Simple modal,<br /><em>clear intent.</em></h1>
                    <p>Explore a lightweight subscription modal with accessible controls, a focused form and a calm visual layer.</p>
                    <button
                        className={styles.modalOpenButton}
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded={isOpen}
                        aria-controls="subscription-modal"
                        onClick={() => setIsOpen(true)}
                    >
                        Open subscription form <span aria-hidden="true">↗</span>
                    </button>
                    <div className={styles.featureRow}>
                        <span><b>01</b> Blur background</span>
                        <span><b>02</b> Escape to close</span>
                        <span><b>03</b> Responsive layout</span>
                    </div>
                </section>
                {showGoTop && (
                    <button className={styles.goTopButton} type="button" aria-label="Go to top" title="Go to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M6 11l6-6 6 6" /></svg>
                    </button>
                )}
            </main>

            <div
                ref={modalRef}
                id="subscription-modal"
                className={`${styles.formContainer} ${isOpen ? styles.isOpen : ""}`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                aria-hidden={!isOpen}
                inert={!isOpen}
                tabIndex={-1}
                onMouseDown={(event) => {
                    if (event.target === event.currentTarget) closeModal();
                }}
            >
                <div className={styles.modalCard}>
                    <button className={styles.closeButton} type="button" aria-label="Close subscription form" onClick={closeModal}>×</button>
                    <span className={styles.eyebrow}>STAY IN THE LOOP</span>
                    <h2 id="modal-title">Subscribe for updates.</h2>
                    <p className={styles.modalText} id="modal-description">This is a front-end demo. Form details stay in your browser and are not sent or stored.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <label htmlFor="subscriber-name">Name</label>
                        <input id="subscriber-name" name="name" type="text" className={styles.formInput} placeholder="Your name" autoComplete="name" required />
                        <label htmlFor="subscriber-email">Email</label>
                        <input id="subscriber-email" name="email" type="email" className={styles.formInput} placeholder="you@example.com" autoComplete="email" required />
                        <label htmlFor="subscriber-phone">Phone</label>
                        <input id="subscriber-phone" name="phone" type="tel" className={styles.formInput} placeholder="Phone number" autoComplete="tel" required />
                        <div className={styles.buttonContainer}>
                            <button className={styles.secondary} type="button" onClick={closeModal}>Cancel</button>
                            <button className={styles.subscribeButton} type="submit">Try demo</button>
                        </div>
                        <p className={styles.formMessage} role="status" aria-live="polite">{message}</p>
                    </form>
                </div>
            </div>

            <footer className={styles.siteFooter} inert={isOpen}>
                <nav className={styles.footerLinks} aria-label="Social and support links">
                    {footerLinks.map(([label, href, Icon]) => (
                        <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} title={label}>
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </nav>
                <p>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
            </footer>
        </div>
    );
}

export default ModalHtmlCssJavascript;
