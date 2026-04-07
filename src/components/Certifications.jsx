import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const certifications = [
  {
    name: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    issuer: "DeepLearning.AI",
    issued: "Mar 2025",
    credentialId: "6N5PADJ03NKE",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/6N5PADJ03NKE",
    certificatePath: "certifications/Tensorflow.jpeg",
  },
  {
    name: "Introduction to Android Mobile Application Development",
    issuer: "Meta",
    issued: "Sep 2024",
    credentialId: "TQ6ODSDT0FTV",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/TQ6ODSDT0FTV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    certificatePath: "certifications/android.jpeg",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Stanford Online",
    issued: "Nov 2023",
    credentialId: "G5LZEGV62RZX",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/G5LZEGV62RZX",
    certificatePath: "certifications/supervised%20ml.jpeg",
  },
];

function Certifications() {
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    if (!activeCertificate) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [activeCertificate]);

  return (
    <section id="certifications" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Certifications</p>
        <h2>Professional Certifications</h2>
      </div>

      <ul className="certifications-list">
        {certifications.map((certification) => (
          <li
            key={certification.name}
            className="achievement-item certification-item"
          >
            <button
              type="button"
              className="certificate-thumb-btn"
              onClick={() => setActiveCertificate(certification)}
              aria-label={`Preview ${certification.name} certificate`}
            >
              <img
                src={certification.certificatePath}
                alt={`${certification.name} certificate thumbnail`}
                className="certificate-thumb"
              />
            </button>

            <div className="certificate-copy">
              <p className="achievement-title">
                {certification.issuer}: {certification.name}
              </p>
              <p className="achievement-meta">Issued: {certification.issued}</p>
              <p className="achievement-meta">
                Credential ID: {certification.credentialId}
              </p>
            </div>
            <div className="achievement-actions certification-actions">
              <button
                type="button"
                className="btn ghost"
                onClick={() => setActiveCertificate(certification)}
              >
                Expanded Preview
              </button>
              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="credential-link"
              >
                Show Credential
              </a>
            </div>
          </li>
        ))}
      </ul>

      {activeCertificate && typeof document !== "undefined"
        ? createPortal(
            <div
              className="paper-viewer-overlay"
              role="dialog"
              aria-modal="true"
              aria-label={`${activeCertificate.name} certificate preview`}
              onClick={() => setActiveCertificate(null)}
            >
              <div
                className="paper-viewer"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="paper-viewer-header">
                  <h3>{activeCertificate.name}</h3>
                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => setActiveCertificate(null)}
                  >
                    Close
                  </button>
                </div>
                <img
                  src={activeCertificate.certificatePath}
                  alt={`${activeCertificate.name} certificate`}
                  className="certificate-preview-image"
                />
                <div className="paper-viewer-actions">
                  <a
                    className="btn ghost"
                    href={activeCertificate.certificatePath}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open in New Tab
                  </a>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}

export default Certifications;
