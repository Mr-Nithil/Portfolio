import { useEffect, useState } from "react";

const publications = [
  {
    conference: "IEEE Latin-American Conference on Communications",
    conferenceDates: "5-7 November 2025",
    paperTitle:
      "AE-RAGX: Combining Autoencoders with Retrieval-Augmented Generation for Explainable Anomaly Detection using LLMs",
    paperPath: "/conf-paper/a23-perera%20final.pdf",
  },
];

function Publications() {
  const [activePublication, setActivePublication] = useState(null);

  useEffect(() => {
    if (!activePublication) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActivePublication(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activePublication]);

  return (
    <section id="publications" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Publications</p>
        <h2>Published Research Work</h2>
      </div>

      <ul className="publications-list">
        {publications.map((publication) => (
          <li
            key={publication.paperTitle}
            className="achievement-item publication-item"
          >
            <button
              type="button"
              className="publication-thumb-btn"
              onClick={() => setActivePublication(publication)}
              aria-label={`Preview ${publication.paperTitle} paper`}
            >
              <iframe
                src={`${publication.paperPath}#page=1&zoom=page-fit&view=FitH&toolbar=0&navpanes=0&scrollbar=0&pagemode=none`}
                title={`${publication.paperTitle} paper thumbnail`}
                className="publication-thumb"
              />
            </button>

            <div className="publication-copy">
              <div className="publication-text">
                <p className="achievement-meta publication-conference">
                  {publication.conference}
                </p>
                <p className="achievement-meta">
                  {publication.conferenceDates}
                </p>
                <p className="achievement-title">{publication.paperTitle}</p>
              </div>
              <div className="achievement-actions publication-actions">
                <button
                  type="button"
                  className="btn ghost"
                  onClick={() => setActivePublication(publication)}
                >
                  Preview Paper
                </button>
                <a
                  className="btn ghost"
                  href={publication.paperPath}
                  download
                  aria-label={`Download ${publication.paperTitle} paper`}
                >
                  Download Paper
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {activePublication ? (
        <div
          className="paper-viewer-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${activePublication.paperTitle} paper preview`}
          onClick={() => setActivePublication(null)}
        >
          <div
            className="paper-viewer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="paper-viewer-header">
              <h3>{activePublication.paperTitle}</h3>
              <button
                type="button"
                className="modal-close"
                onClick={() => setActivePublication(null)}
              >
                Close
              </button>
            </div>
            <iframe
              src={activePublication.paperPath}
              title={`${activePublication.paperTitle} preview`}
              className="paper-viewer-frame"
            />
            <div className="paper-viewer-actions">
              <a
                className="btn ghost"
                href={activePublication.paperPath}
                download
              >
                Download Paper
              </a>
              <a
                className="btn ghost"
                href={activePublication.paperPath}
                target="_blank"
                rel="noreferrer"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Publications;
