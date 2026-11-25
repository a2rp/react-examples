import { useEffect, useRef, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { FiSmile } from "react-icons/fi";

import AvatarControls from "./components/avatarControls";
import AvatarPreview from "./components/avatarPreview";
import { AVATAR_STYLES, getAvatarStyle, loadAvatarStyle } from "./data/avatarStyles";
import styles from "./style.module.css";

const RANDOM_STYLE_ID = "random";

function createSeed() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
        return crypto.randomUUID().replaceAll("-", "").slice(0, 12);
    }

    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

function RandomAvataarsPage() {
    const [selectedStyleId, setSelectedStyleId] = useState(RANDOM_STYLE_ID);
    const [generationVersion, setGenerationVersion] = useState(0);
    const [generatedStyleName, setGeneratedStyleName] = useState("Your avatar");
    const [seed, setSeed] = useState("");
    const [svg, setSvg] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [notice, setNotice] = useState("");
    const requestId = useRef(0);

    useEffect(() => {
        const currentRequestId = ++requestId.current;
        let isCurrent = true;
        const style = selectedStyleId === RANDOM_STYLE_ID
            ? AVATAR_STYLES[Math.floor(Math.random() * AVATAR_STYLES.length)]
            : getAvatarStyle(selectedStyleId);
        const nextSeed = createSeed();

        loadAvatarStyle(style.id)
            .then((styleModule) => {
                if (!isCurrent || requestId.current !== currentRequestId) {
                    return;
                }

                const avatarSvg = createAvatar(styleModule, { seed: [nextSeed] }).toString();
                setSvg(avatarSvg);
                setSeed(nextSeed);
                setGeneratedStyleName(style.name);
                setIsLoading(false);
            })
            .catch(() => {
                if (!isCurrent || requestId.current !== currentRequestId) {
                    return;
                }

                setIsLoading(false);
                setNotice("We couldn't create that avatar. Please try again.");
            });

        return () => {
            isCurrent = false;
        };
    }, [generationVersion, selectedStyleId]);

    useEffect(() => {
        if (!notice) {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => setNotice(""), 2800);

        return () => window.clearTimeout(timeoutId);
    }, [notice]);

    function handleDownload() {
        if (!svg) {
            setNotice("Generate an avatar before downloading it.");
            return;
        }

        const objectUrl = URL.createObjectURL(
            new Blob([svg], { type: "image/svg+xml;charset=utf-8" }),
        );
        const image = new Image();

        image.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = 1024;
            canvas.height = 1024;

            const context = canvas.getContext("2d");

            if (!context) {
                URL.revokeObjectURL(objectUrl);
                setNotice("Your browser couldn't prepare the PNG.");
                return;
            }

            context.drawImage(image, 0, 0, canvas.width, canvas.height);

            const link = document.createElement("a");
            link.download = `random-avatar-${Date.now()}.png`;
            link.href = canvas.toDataURL("image/png");
            document.body.appendChild(link);
            link.click();
            link.remove();
            URL.revokeObjectURL(objectUrl);
            setNotice("PNG downloaded.");
        };

        image.onerror = () => {
            URL.revokeObjectURL(objectUrl);
            setNotice("We couldn't prepare the PNG. Please try again.");
        };

        image.src = objectUrl;
    }

    function queueGeneration(styleId) {
        setSelectedStyleId(styleId);
        setGenerationVersion((version) => version + 1);
        setIsLoading(true);
        setNotice("");
    }

    async function handleCopy() {
        if (!svg) {
            setNotice("Generate an avatar before copying its SVG.");
            return;
        }

        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(svg);
            } else {
                const textArea = document.createElement("textarea");
                textArea.value = svg;
                textArea.setAttribute("readonly", "");
                textArea.style.position = "fixed";
                textArea.style.opacity = "0";
                document.body.appendChild(textArea);
                textArea.select();
                const copied = document.execCommand("copy");
                textArea.remove();

                if (!copied) {
                    throw new Error("Clipboard copy failed");
                }
            }

            setNotice("SVG copied to clipboard.");
        } catch {
            setNotice("Clipboard access failed. Please try again.");
        }
    }

    return (
        <main className={styles.app}>
            <div className={styles.page}>
                <section className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <span className={styles.eyebrow}>
                            <FiSmile aria-hidden="true" /> DiceBear avatar studio
                        </span>
                        <h1>Create your next avatar.</h1>
                        <p>
                            Explore 28 illustration styles, find a look you love,
                            and export your new avatar as a crisp PNG or scalable SVG.
                        </p>
                    </div>

                    <div className={styles.heroStats}>
                        <span className={styles.statNumber}>28</span>
                        <span className={styles.statLabel}>avatar styles</span>
                        <span className={styles.statNote}>Free to create and export</span>
                    </div>
                </section>

                <section className={styles.workspace}>
                    <AvatarPreview
                        svg={svg}
                        seed={seed}
                        selectedStyleName={generatedStyleName}
                        isLoading={isLoading}
                    />
                    <AvatarControls
                        avatarStyles={AVATAR_STYLES}
                        selectedStyleId={selectedStyleId}
                        isLoading={isLoading}
                        onStyleChange={queueGeneration}
                        onGenerate={() => queueGeneration(selectedStyleId)}
                        onDownload={handleDownload}
                        onCopy={handleCopy}
                    />
                </section>

                <p className={styles.notice} role="status">{notice}</p>
            </div>
        </main>
    );
}

export default RandomAvataarsPage;
