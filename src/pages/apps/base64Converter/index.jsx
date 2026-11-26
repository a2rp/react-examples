import { useState } from "react";

import ConverterPanel from "./components/converterPanel/index.jsx";
import styles from "./style.module.css";

const sampleText =
    "Hello from Base64 Studio 👋\nUTF-8 keeps café, 東京, and emoji readable.";

function Base64ConverterPage() {
    const [value, setValue] = useState(sampleText);
    const [mode, setMode] = useState("encode");
    const [urlSafe, setUrlSafe] = useState(false);

    const useOutputAsInput = (nextValue, nextMode) => {
        setValue(nextValue);
        setMode(nextMode);
    };

    return (
        <section className={styles.page}>
            <div className={styles.pageContent}>
                <header className={styles.introduction}>
                    <div>
                        <span className={styles.eyebrow}>Browser-based text utility</span>
                        <h1>
                            Encode and decode
                            <br />
                            <span>text with Base64.</span>
                        </h1>
                        <p>
                            Convert UTF-8 text in either direction and keep the
                            result ready to copy.
                        </p>
                    </div>
                    <div className={styles.localBadge}>
                        <span aria-hidden="true" />
                        Runs in your browser
                    </div>
                </header>

                <ConverterPanel
                    value={value}
                    onChange={setValue}
                    mode={mode}
                    onModeChange={setMode}
                    urlSafe={urlSafe}
                    onUrlSafeChange={setUrlSafe}
                    onUseOutput={useOutputAsInput}
                />

                <div className={styles.encodingNotes}>
                    <div>
                        <strong>UTF-8 aware</strong>
                        <span>Accented text and emoji stay intact.</span>
                    </div>
                    <div>
                        <strong>Standard or URL-safe</strong>
                        <span>Choose the output format for your use case.</span>
                    </div>
                    <div>
                        <strong>Private by design</strong>
                        <span>Your text stays on this device.</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Base64ConverterPage;
