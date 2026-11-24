import {
    FiArrowUpRight,
    FiAward,
    FiCoffee,
    FiCodepen,
    FiFacebook,
    FiFolder,
    FiGlobe,
    FiGithub,
    FiHeart,
    FiLinkedin,
    FiMail,
    FiYoutube,
} from "react-icons/fi";

import styles from "./style.module.css";

const contactLinks = [
    {
        icon: FiGlobe,
        label: "Portfolio",
        destination: "ashishranjan.net",
        href: "https://www.ashishranjan.net/",
    },
    {
        icon: FiGithub,
        label: "GitHub",
        destination: "github.com/a2rp",
        href: "https://github.com/a2rp",
    },
    {
        icon: FiFolder,
        label: "Public repositories",
        destination: "Browse repositories",
        href: "https://github.com/a2rp?tab=repositories",
    },
    {
        icon: FiLinkedin,
        label: "LinkedIn",
        destination: "linkedin.com/in/aashishranjan",
        href: "https://www.linkedin.com/in/aashishranjan",
    },
    {
        icon: FiFacebook,
        label: "Facebook",
        destination: "facebook.com/theash.ashish",
        href: "https://www.facebook.com/theash.ashish/",
    },
    {
        icon: FiYoutube,
        label: "YouTube",
        destination: "youtube.com/@ashishranjan-ashz",
        href: "https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",
    },
    {
        icon: FiCodepen,
        label: "CodePen",
        destination: "codepen.io/ash1198",
        href: "https://codepen.io/ash1198",
    },
    {
        icon: FiMail,
        label: "Email",
        destination: "ash.ranjan09@gmail.com",
        href: "mailto:ash.ranjan09@gmail.com",
    },
];

const supportLinks = [
    {
        icon: FiHeart,
        label: "Support page",
        detail: "Visit support page",
        href: "https://a2rp-donation-page.netlify.app/",
    },
    {
        icon: FiCoffee,
        label: "Buy Me a Coffee",
        detail: "buymeacoffee.com/a2rp",
        href: "https://buymeacoffee.com/a2rp",
    },
    {
        icon: FiAward,
        label: "Patreon",
        detail: "patreon.com/a2rp",
        href: "https://www.patreon.com/a2rp",
    },
];

function ContactPage() {
    return (
        <main className={styles.page}>
            <header className={styles.hero}>
                <span className={styles.eyebrow}>Contact</span>
                <h1>Let’s connect.</h1>
                <p>
                    Find me across the web, send a message, or support the work.
                </p>
            </header>

            <div className={styles.content}>
                <section className={styles.connectSection}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.sectionIcon}>
                            <FiGlobe aria-hidden="true" />
                        </span>
                        <div>
                            <span className={styles.sectionEyebrow}>Say hello</span>
                            <h2>Connect</h2>
                        </div>
                    </div>

                    <div className={styles.contactList}>
                        {contactLinks.map(({ icon: Icon, label, destination, href }) => (
                            <a
                                className={styles.contactLink}
                                href={href}
                                key={label}
                                target={href.startsWith("mailto:") ? undefined : "_blank"}
                                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                            >
                                <span className={styles.contactIcon}>
                                    <Icon aria-hidden="true" />
                                </span>
                                <span className={styles.contactLabel}>{label}</span>
                                <span className={styles.contactDestination}>{destination}</span>
                                <FiArrowUpRight className={styles.linkArrow} aria-hidden="true" />
                            </a>
                        ))}
                    </div>
                </section>

                <section className={styles.supportSection}>
                    <div className={styles.sectionHeading}>
                        <span className={styles.sectionIcon}>
                            <FiHeart aria-hidden="true" />
                        </span>
                        <div>
                            <span className={styles.sectionEyebrow}>Keep it going</span>
                            <h2>Support</h2>
                        </div>
                    </div>

                    <p className={styles.supportIntro}>
                        If these projects are useful, you can support their continued
                        development in any of these ways.
                    </p>

                    <div className={styles.supportLinks}>
                        {supportLinks.map(({ icon: Icon, label, detail, href }) => (
                            <a
                                className={styles.supportLink}
                                href={href}
                                key={label}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className={styles.supportIcon}>
                                    <Icon aria-hidden="true" />
                                </span>
                                <span className={styles.supportLinkText}>
                                    <strong>{label}</strong>
                                    <small>{detail}</small>
                                </span>
                                <FiArrowUpRight className={styles.supportArrow} aria-hidden="true" />
                            </a>
                        ))}
                    </div>

                    <div className={styles.upiCard}>
                        <div className={styles.upiCopy}>
                            <span className={styles.upiEyebrow}>Pay by UPI</span>
                            <h3>Scan to support</h3>
                            <p>Use any UPI app to scan this code.</p>
                            <span className={styles.upiId}>ash.ranjan09-1@okhdfcbank</span>
                        </div>
                        <img
                            className={styles.qrCode}
                            src={`${import.meta.env.BASE_URL}images/qr-code.png`}
                            alt="UPI payment QR code for Ashish Ranjan"
                            loading="lazy"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}

export default ContactPage;
