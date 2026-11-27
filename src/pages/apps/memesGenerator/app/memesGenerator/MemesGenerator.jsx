import { useState } from "react";
import { FiDownload, FiImage, FiRefreshCw } from "react-icons/fi";
import { toPng } from "html-to-image";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

function MemesGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [memes, setMemes] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMemes(null);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.imgflip.com/get_memes", { signal: AbortSignal.timeout(15000) });
      if (!response.ok) throw new Error("Imgflip request failed.");
      const payload = await response.json();
      const templateList = payload?.data?.memes;
      if (payload?.success !== true || !Array.isArray(templateList)) {
        throw new Error("Imgflip returned an unexpected response.");
      }
      const validTemplates = templateList.filter((item) => item && item.id && typeof item.name === "string"
        && typeof item.url === "string" && item.url.startsWith("https://"));
      setMemes(validTemplates);
      if (validTemplates.length === 0) setErrorMessage("Imgflip did not return any usable templates. Try again in a moment.");
    } catch {
      const message = "Imgflip templates could not be loaded. Please try again.";
      setErrorMessage(message);
      toast.error(message);
    } finally {
      setIsLoading(false);
    }
  };

  const saveImage = (imageNumber, memeName) => {
    const memeElement = document.querySelector(`.meme-visual-${imageNumber}`);
    if (!memeElement) return;

    toPng(memeElement, { cacheBust: true, pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement("a");
        const fileName = memeName.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase();
        link.download = `${fileName || `meme-${imageNumber + 1}`}.png`;
        link.href = dataUrl;
        link.click();
        toast.success("Meme saved as PNG.");
      })
      .catch((error) => toast.error(error.message || "Unable to save this meme."));
  };

  return (
    <section id="generator" className={styles.container} aria-labelledby="generator-title">
      <div className={styles.main}>
        <div className={styles.formCard}>
          <div className={styles.cardHeading}>
            <div><p className={styles.eyebrow}>Template studio</p><h2 id="generator-title">Add your message</h2></div>
            <FiImage aria-hidden="true" />
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.field}><span>Top text</span><input value={topText} onChange={(event) => setTopText(event.target.value)} maxLength="80" placeholder="Write top text here" /></label>
            <label className={styles.field}><span>Bottom text</span><input value={bottomText} onChange={(event) => setBottomText(event.target.value)} maxLength="80" placeholder="Write bottom text here" /></label>
            <button type="submit" disabled={isLoading} className={styles.submitButton}>{isLoading ? <span className={styles.spinner} aria-hidden="true" /> : <FiRefreshCw aria-hidden="true" />}<span>{isLoading ? "Loading templates" : "Get meme images"}</span></button>
          </form>
          <p className={styles.helperText}>Captions are added in this browser and are not sent to Imgflip.</p>
        </div>

        <div className={styles.outputHeader}>
          <div><p className={styles.eyebrow}>Template results</p><h2>Pick a canvas and save it.</h2></div>
          {memes && <span>{memes.length} templates</span>}
        </div>

        {memes === null && (
          <div className={styles.emptyState} role={isLoading ? "status" : undefined}><FiImage aria-hidden="true" /><h3>{errorMessage ? "Templates could not be loaded." : "Your templates will appear here."}</h3><p>{errorMessage || (isLoading ? "Fetching public templates from Imgflip…" : "Enter text if you like, then load the latest public templates.")}</p></div>
        )}
        {memes?.length === 0 && (
          <div className={styles.emptyState} role="status"><FiImage aria-hidden="true" /><h3>No templates available.</h3><p>{errorMessage || "Imgflip did not return any usable templates. Try again in a moment."}</p></div>
        )}
        {memes?.length > 0 && (
          <div className={styles.outputContainer}>
            {memes.map((item, index) => (
              <article key={item.id || index} className={styles.memeCard}>
                <div className={`${styles.memeVisual} meme-visual-${index}`}>
                  <img src={item.url} className={styles.memeImage} alt={item.name} />
                  <div className={styles.memeTopText}>{topText}</div>
                  <div className={styles.memeBottomText}>{bottomText}</div>
                </div>
                <div className={styles.cardFooter}><span>{item.name}</span><button className={styles.saveButton} type="button" onClick={() => saveImage(index, item.name)} aria-label={`Save ${item.name}`}><FiDownload aria-hidden="true" /> Save</button></div>
              </article>
            ))}
          </div>
        )}
        <p className={styles.helperText}>Public templates come from Imgflip, are community-uploaded, and may change. Review an image before sharing it.</p>
      </div>
    </section>
  );
}

export default MemesGenerator;
