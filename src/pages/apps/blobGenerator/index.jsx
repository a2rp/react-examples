import { useEffect, useMemo, useRef, useState } from "react";
import {
    FiArrowDown,
    FiCheck,
    FiCode,
    FiCopy,
    FiDroplet,
    FiRefreshCw,
    FiShuffle,
} from "react-icons/fi";

import styles from "./style.module.css";

const DEFAULTS = {
    width: 260,
    height: 260,
    corners: {
        topLeft: 30,
        topRight: 70,
        bottomRight: 50,
        bottomLeft: 40,
    },
    colors: {
        first: "#B6FFFA",
        second: "#80B3FF",
    },
    angle: 180,
};

const CORNERS = [
    { key: "topLeft", label: "Top left" },
    { key: "topRight", label: "Top right" },
    { key: "bottomRight", label: "Bottom right" },
    { key: "bottomLeft", label: "Bottom left" },
];

const PALETTES = [
    ["#B6FFFA", "#80B3FF"],
    ["#FFD6E0", "#B8C0FF"],
    ["#C3F0CA", "#7FD1AE"],
    ["#FFE29A", "#FFA99A"],
    ["#D1C2FF", "#8AA7FF"],
];

function clamp(value, min, max) {
    const number = Number.parseInt(value, 10);
    return Number.isNaN(number) ? min : Math.min(max, Math.max(min, number));
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function BlobGeneratorPage() {
    const [dimensions, setDimensions] = useState({ width: DEFAULTS.width, height: DEFAULTS.height });
    const [dimensionInputs, setDimensionInputs] = useState({
        width: String(DEFAULTS.width),
        height: String(DEFAULTS.height),
    });
    const [corners, setCorners] = useState(DEFAULTS.corners);
    const [colors, setColors] = useState(DEFAULTS.colors);
    const [angle, setAngle] = useState(DEFAULTS.angle);
    const [copyState, setCopyState] = useState("idle");
    const canvasRef = useRef(null);
    const [canvasSize, setCanvasSize] = useState({ width: 430, height: 380 });

    const borderRadius = useMemo(
        () => CORNERS.map(({ key }) => `${corners[key]}%`).join(" "),
        [corners],
    );
    const background = useMemo(
        () => `linear-gradient(${angle}deg, ${colors.first} 0%, ${colors.second} 100%)`,
        [angle, colors],
    );
    const cssOutput = useMemo(
        () =>
            [
                "/* Blob CSS */",
                `width: ${dimensions.width}px;`,
                `height: ${dimensions.height}px;`,
                `border-radius: ${borderRadius};`,
                `background: ${background};`,
            ].join("\n"),
        [background, borderRadius, dimensions],
    );
    const previewScale = Math.min(
        1,
        (canvasSize.width - 36) / dimensions.width,
        (canvasSize.height - 36) / dimensions.height,
    );

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas || typeof ResizeObserver === "undefined") {
            return undefined;
        }

        const observer = new ResizeObserver(([entry]) => {
            setCanvasSize({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
            });
        });

        observer.observe(canvas);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (copyState === "idle") {
            return undefined;
        }

        const timeoutId = window.setTimeout(() => setCopyState("idle"), 1800);
        return () => window.clearTimeout(timeoutId);
    }, [copyState]);

    function changeDimension(key, value) {
        setDimensionInputs((current) => ({ ...current, [key]: value }));

        if (value === "" || !Number.isFinite(Number(value))) {
            return;
        }

        setDimensions((current) => ({ ...current, [key]: clamp(value, 80, 600) }));
    }

    function commitDimension(key) {
        const value = clamp(dimensionInputs[key], 80, 600);
        setDimensions((current) => ({ ...current, [key]: value }));
        setDimensionInputs((current) => ({ ...current, [key]: String(value) }));
    }

    function changeCorner(key, value) {
        setCorners((current) => ({ ...current, [key]: clamp(value, 0, 100) }));
    }

    function randomize() {
        const width = randomInteger(160, 480);
        const height = randomInteger(160, 480);
        const palette = PALETTES[randomInteger(0, PALETTES.length - 1)];

        setDimensions({ width, height });
        setDimensionInputs({ width: String(width), height: String(height) });
        setCorners({
            topLeft: randomInteger(10, 90),
            topRight: randomInteger(10, 90),
            bottomRight: randomInteger(10, 90),
            bottomLeft: randomInteger(10, 90),
        });
        setColors({ first: palette[0], second: palette[1] });
        setAngle(randomInteger(0, 360));
        setCopyState("idle");
    }

    function reset() {
        setDimensions({ width: DEFAULTS.width, height: DEFAULTS.height });
        setDimensionInputs({ width: String(DEFAULTS.width), height: String(DEFAULTS.height) });
        setCorners(DEFAULTS.corners);
        setColors(DEFAULTS.colors);
        setAngle(DEFAULTS.angle);
        setCopyState("idle");
    }

    async function copyCSS() {
        try {
            await navigator.clipboard.writeText(cssOutput);
            setCopyState("copied");
        } catch {
            setCopyState("failed");
        }
    }

    return (
        <section className={styles.page}>
            <div className={styles.content}>
                <header className={styles.hero}>
                    <div className={styles.heroCopy}>
                        <p className={styles.eyebrow}>
                            <FiDroplet aria-hidden="true" /> CSS shape studio
                        </p>
                        <h1 className={styles.title}>
                            Shape your next <span>organic gradient.</span>
                        </h1>
                        <p className={styles.intro}>
                            Tune the silhouette, size, and colors in a live preview. Copy the CSS
                            when your blob feels right.
                        </p>
                    </div>
                    <a className={styles.jumpLink} href="#blob-workspace">
                        Open the studio <FiArrowDown aria-hidden="true" />
                    </a>
                </header>

                <div className={styles.workspace} id="blob-workspace">
                    <section className={styles.previewPanel} aria-labelledby="preview-title">
                        <header className={styles.panelHeader}>
                            <div>
                                <p className={styles.panelEyebrow}>Your shape</p>
                                <h2 className={styles.panelTitle} id="preview-title">
                                    Live preview
                                </h2>
                            </div>
                            <span className={styles.liveBadge}>
                                <span aria-hidden="true" /> Live
                            </span>
                        </header>

                        <div className={styles.canvas} ref={canvasRef}>
                            <div
                                className={styles.blob}
                                style={{
                                    width: `${dimensions.width}px`,
                                    height: `${dimensions.height}px`,
                                    borderRadius,
                                    background,
                                    transform: `scale(${previewScale})`,
                                }}
                                role="img"
                                aria-label={`Generated gradient blob, ${dimensions.width} by ${dimensions.height} pixels`}
                            />
                        </div>

                        <div className={styles.previewMeta}>
                            <div>
                                <span>Canvas size</span>
                                <strong>{dimensions.width} × {dimensions.height} px</strong>
                            </div>
                            <div>
                                <span>Gradient angle</span>
                                <strong>{angle}°</strong>
                            </div>
                        </div>
                    </section>

                    <section className={styles.controlsPanel} aria-labelledby="controls-title">
                        <header className={styles.panelHeader}>
                            <div>
                                <p className={styles.panelEyebrow}>Fine-tune the details</p>
                                <h2 className={styles.panelTitle} id="controls-title">Controls</h2>
                            </div>
                            <span className={styles.codeBadge}><FiCode aria-hidden="true" /> CSS</span>
                        </header>

                        <div className={styles.dimensionGroup}>
                            <label className={styles.field}>
                                <span>Width <small>px</small></span>
                                <input
                                    type="number"
                                    min="80"
                                    max="600"
                                    step="1"
                                    inputMode="numeric"
                                    value={dimensionInputs.width}
                                    onChange={(event) => changeDimension("width", event.target.value)}
                                    onBlur={() => commitDimension("width")}
                                />
                            </label>
                            <label className={styles.field}>
                                <span>Height <small>px</small></span>
                                <input
                                    type="number"
                                    min="80"
                                    max="600"
                                    step="1"
                                    inputMode="numeric"
                                    value={dimensionInputs.height}
                                    onChange={(event) => changeDimension("height", event.target.value)}
                                    onBlur={() => commitDimension("height")}
                                />
                            </label>
                        </div>

                        <section className={styles.controlSection} aria-labelledby="corners-title">
                            <div className={styles.groupHeading}>
                                <h3 id="corners-title">Corner radii</h3>
                                <span>Independent</span>
                            </div>
                            <div className={styles.cornerGrid}>
                                {CORNERS.map(({ key, label }) => (
                                    <label className={styles.rangeField} key={key}>
                                        <span className={styles.rangeLabel}>{label}</span>
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={corners[key]}
                                            onChange={(event) => changeCorner(key, event.target.value)}
                                            aria-label={`${label} radius`}
                                        />
                                        <strong>{corners[key]}%</strong>
                                    </label>
                                ))}
                            </div>
                        </section>

                        <section className={styles.controlSection} aria-labelledby="gradient-title">
                            <div className={styles.groupHeading}>
                                <h3 id="gradient-title">Gradient</h3>
                                <span>{angle}°</span>
                            </div>
                            <label className={styles.angleField}>
                                <span className={styles.visuallyHidden}>Gradient angle</span>
                                <input
                                    type="range"
                                    min="0"
                                    max="360"
                                    value={angle}
                                    onChange={(event) => setAngle(clamp(event.target.value, 0, 360))}
                                    aria-label="Gradient angle"
                                />
                            </label>
                            <div className={styles.colorGrid}>
                                <label className={styles.colorField}>
                                    <span>First color</span>
                                    <input
                                        type="color"
                                        value={colors.first}
                                        onChange={(event) => setColors((current) => ({ ...current, first: event.target.value }))}
                                    />
                                </label>
                                <label className={styles.colorField}>
                                    <span>Second color</span>
                                    <input
                                        type="color"
                                        value={colors.second}
                                        onChange={(event) => setColors((current) => ({ ...current, second: event.target.value }))}
                                    />
                                </label>
                            </div>
                        </section>

                        <div className={styles.actions}>
                            <button className={styles.secondaryButton} type="button" onClick={randomize}>
                                <FiShuffle aria-hidden="true" /> Randomize
                            </button>
                            <button className={styles.secondaryButton} type="button" onClick={reset}>
                                <FiRefreshCw aria-hidden="true" /> Reset
                            </button>
                            <button className={styles.copyButton} type="button" onClick={copyCSS}>
                                {copyState === "copied" ? (
                                    <><FiCheck aria-hidden="true" /> Copied</>
                                ) : (
                                    <><FiCopy aria-hidden="true" /> Copy CSS</>
                                )}
                            </button>
                        </div>

                        <div className={styles.codeBox}>
                            <div className={styles.codeHeader}>
                                <span>CSS output</span>
                                <span className={styles.copyMessage} aria-live="polite">
                                    {copyState === "failed" ? "Clipboard unavailable" : copyState === "copied" ? "Copied to clipboard" : "Ready to copy"}
                                </span>
                            </div>
                            <pre><code>{cssOutput}</code></pre>
                        </div>
                    </section>
                </div>

                <section className={styles.details} aria-label="How the Blob Generator works">
                    <article>
                        <span className={styles.detailIcon}><FiDroplet aria-hidden="true" /></span>
                        <h2>Shape it live</h2>
                        <p>Every control updates the preview and the CSS output together.</p>
                    </article>
                    <article>
                        <span className={styles.detailIcon}><FiShuffle aria-hidden="true" /></span>
                        <h2>Find a fresh form</h2>
                        <p>Randomize dimensions, corners, angle, and a coordinated color pair.</p>
                    </article>
                    <article>
                        <span className={styles.detailIcon}><FiCopy aria-hidden="true" /></span>
                        <h2>Take the CSS</h2>
                        <p>Copy the generated shape styles and use them in your own interface.</p>
                    </article>
                </section>
            </div>
        </section>
    );
}

export default BlobGeneratorPage;
