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
import logo from "./source/public/logo.png";
import architecture from "./source/public/gallery-architecture.jpg";
import landscape from "./source/public/gallery-landscape.jpg";

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

function MouseTrailerPage() {
    const pageRef = useRef(null);
    const trailerRef = useRef(null);
    const menuButtonRef = useRef(null);
    const [activeLabel, setActiveLabel] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        const page = pageRef.current;
        const trailer = trailerRef.current;
        if (!page || !trailer) return undefined;

        let frame = 0;
        let x = 0;
        let y = 0;
        const move = (event) => {
            if (event.pointerType === "touch") return;
            x = event.clientX;
            y = event.clientY;
            if (frame) return;
            frame = window.requestAnimationFrame(() => {
                trailer.style.transform = `translate3d(${x - trailer.offsetWidth / 2}px, ${y - trailer.offsetHeight / 2}px, 0)`;
                frame = 0;
            });
        };
        const pointerOver = (event) => {
            const card = event.target.closest("[data-trailer-label]");
            if (card && page.contains(card)) setActiveLabel(card.dataset.trailerLabel);
        };
        const pointerOut = (event) => {
            if (!event.target.closest("[data-trailer-label]")) return;
            const nextCard = event.relatedTarget?.closest?.("[data-trailer-label]");
            if (!nextCard || !page.contains(nextCard)) setActiveLabel("");
        };

        page.addEventListener("pointermove", move);
        page.addEventListener("pointerover", pointerOver);
        page.addEventListener("pointerout", pointerOut);
        return () => {
            page.removeEventListener("pointermove", move);
            page.removeEventListener("pointerover", pointerOver);
            page.removeEventListener("pointerout", pointerOut);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, []);

    useEffect(() => {
        const updateGoTop = () => setShowGoTop(window.scrollY > 420);
        window.addEventListener("scroll", updateGoTop, { passive: true });
        updateGoTop();
        return () => window.removeEventListener("scroll", updateGoTop);
    }, []);

    useEffect(() => {
        if (!isMenuOpen) return undefined;
        const closeOnOutsideClick = (event) => {
            if (!event.target.closest(`.${styles.siteNav}`) && !menuButtonRef.current?.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };
        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
                menuButtonRef.current?.focus();
            }
        };
        document.addEventListener("click", closeOnOutsideClick);
        document.addEventListener("keydown", closeOnEscape);
        return () => {
            document.removeEventListener("click", closeOnOutsideClick);
            document.removeEventListener("keydown", closeOnEscape);
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);
    const scrollToTop = () => window.scrollTo({
        top: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });

    return (
        <div className={styles.app} ref={pageRef}>
            <header className={styles.siteHeader}>
                <a className={styles.brand} href="https://www.ashishranjan.net/" aria-label="Ashish Ranjan portfolio">
                    <img src={logo} alt="" />
                    <span><small>A2RP INTERACTION</small><strong>Mouse Trailer</strong></span>
                </a>
                <nav className={`${styles.siteNav} ${isMenuOpen ? styles.isOpen : ""}`} id="mouse-trailer-nav" aria-label="Main navigation">
                    <a href="#demo" onClick={closeMenu}>Demo</a>
                    <a href="#how-it-works" onClick={closeMenu}>How it works</a>
                    <a href="#footer" onClick={closeMenu}>Links</a>
                </nav>
                <button
                    ref={menuButtonRef}
                    className={styles.menuButton}
                    type="button"
                    aria-controls="mouse-trailer-nav"
                    aria-expanded={isMenuOpen}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    onClick={() => setIsMenuOpen((open) => !open)}
                >
                    <span /><span /><span />
                </button>
            </header>

            <div ref={trailerRef} className={`${styles.trailer} ${activeLabel ? styles.isActive : ""}`} aria-hidden="true">
                <span className={styles.trailerMark}>+</span>
                <span className={styles.trailerLabel}>{activeLabel}</span>
            </div>

            <main id="demo" className={styles.pageMain}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <span className={styles.eyebrow}>CURSOR-LED DETAIL</span>
                        <h1>Make the pointer part of the story.</h1>
                        <p>Move across the visual cards to see a lightweight mouse trailer respond with a useful cue. The interaction stays subtle, quick and easy to reuse.</p>
                        <a className={styles.textLink} href="#how-it-works">Explore the interaction <span aria-hidden="true">↗</span></a>
                    </div>
                    <div className={styles.heroVisual} aria-label="Mouse trailer demo area">
                        <div className={styles.visualGlow} />
                        <span className={styles.visualCaption}>Move your cursor</span>
                    </div>
                </section>

                <section id="how-it-works" className={styles.gallerySection}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.eyebrow}>HOW IT WORKS</span>
                        <h2>Small movement, clear feedback.</h2>
                        <p>Hover over each card. The trailer changes its label so the pointer gives the visitor a little more context.</p>
                    </div>
                    <div className={styles.galleryGrid}>
                        <article className={styles.galleryCard} data-trailer-label="Explore">
                            <img src={architecture} alt="Abstract architectural structure" />
                            <div><span className={styles.cardNumber}>01</span><h3>Explore details</h3><p>A soft pointer cue can guide attention without taking over the page.</p></div>
                        </article>
                        <article className={styles.galleryCard} data-trailer-label="Discover">
                            <img src={landscape} alt="Open landscape under a bright sky" />
                            <div><span className={styles.cardNumber}>02</span><h3>Discover context</h3><p>Use a small visual response to make image-led sections feel more considered.</p></div>
                        </article>
                        <article className={`${styles.galleryCard} ${styles.galleryCardText}`} data-trailer-label="Move around">
                            <span className={styles.cardNumber}>03</span><h3>Move around</h3><p>The trailer follows the cursor on larger screens and stays hidden on touch devices.</p>
                        </article>
                    </div>
                </section>
                {showGoTop && (
                    <button className={styles.goTopButton} type="button" aria-label="Go to top" title="Go to top" onClick={scrollToTop}>
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 7-7 7 7M12 5v14" /></svg>
                    </button>
                )}
            </main>

            <footer id="footer" className={styles.siteFooter}>
                <div className={styles.footerIntro}><span className={styles.eyebrow}>MORE FROM ASHISH</span><h2>Keep interfaces useful, expressive and easy to explore.</h2></div>
                <nav className={styles.footerLinks} aria-label="Social and support links">
                    {footerLinks.map(([label, href, Icon]) => (
                        <a key={label} href={href} target={href.startsWith("mailto:") ? undefined : "_blank"} rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"} aria-label={label} title={label}>
                            <Icon aria-hidden="true" />
                        </a>
                    ))}
                </nav>
                <p>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></p>
            </footer>
        </div>
    );
}

export default MouseTrailerPage;
