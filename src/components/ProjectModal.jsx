import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { techIcons } from "../data/techIcons";

function ProjectModal({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!project) {
      return undefined;
    }

    const onEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscape);
      document.body.style.overflow = "";
    };
  }, [onClose, project]);

  useEffect(() => {
    setActiveIndex(0);
  }, [project]);

  if (!project) {
    return null;
  }

  if (typeof document === "undefined") {
    return null;
  }

  const descriptionPoints = (
    project.fullDescriptionPoints && project.fullDescriptionPoints.length > 0
      ? project.fullDescriptionPoints
      : project.fullDescription
          .split(". ")
          .map((point) => point.trim())
          .filter(Boolean)
          .map((point) =>
            point.endsWith(".") || point.endsWith("!") || point.endsWith("?")
              ? point
              : `${point}.`,
          )
  ).slice(0, 8);

  const overview = project.overview || project.description;
  const keyHighlights =
    project.keyFeatures && project.keyFeatures.length > 0
      ? project.keyFeatures
      : descriptionPoints;
  const technicalImplementation =
    project.techStackDetails && project.techStackDetails.length > 0
      ? project.techStackDetails
      : project.techStack.map(
          (tech) => `${tech} used as part of this project.`,
        );
  const architecturePoints =
    project.architecturePoints && project.architecturePoints.length > 0
      ? project.architecturePoints
      : project.architecture
        ? [project.architecture]
        : [
            "Feature-oriented modular structure with clear separation between UI, business logic, and data access.",
          ];
  const additionalInfoPoints =
    project.additionalInfoPoints && project.additionalInfoPoints.length > 0
      ? project.additionalInfoPoints
      : project.outcomes && project.outcomes.length > 0
        ? project.outcomes
        : project.impactPoints && project.impactPoints.length > 0
          ? project.impactPoints
          : [
              "Additional implementation notes, results, and refinements can be added here later.",
            ];
  const linkedInDemo = project.linkedinDemo || project.demo;
  const hasMultipleImages = project.images.length > 1;

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setActiveIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return createPortal(
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-gallery">
          <div className="modal-head-row">
            <div>
              <h3 id="project-title" className="modal-head-title">
                {project.title}
              </h3>
              <p className="modal-project-year">Built in {project.year}</p>
            </div>
            <button
              type="button"
              className="modal-close"
              onClick={onClose}
              aria-label="Close project details"
            >
              Close
            </button>
          </div>

          <img
            src={project.images[activeIndex]}
            alt={`${project.title} preview ${activeIndex + 1}`}
            loading="lazy"
          />

          {hasMultipleImages && (
            <p className="modal-gallery-count">
              {activeIndex + 1} / {project.images.length}
            </p>
          )}

          {hasMultipleImages && (
            <>
              <button
                type="button"
                className="carousel-btn prev"
                onClick={previousImage}
                aria-label="Previous image"
              >
                Prev
              </button>
              <button
                type="button"
                className="carousel-btn next"
                onClick={nextImage}
                aria-label="Next image"
              >
                Next
              </button>
            </>
          )}
        </div>

        {hasMultipleImages && (
          <div className="modal-thumbs" aria-label="Project image thumbnails">
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                className={`modal-thumb ${index === activeIndex ? "is-active" : ""}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
              >
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}

        <div className="modal-content">
          <section className="modal-section" aria-label="Project overview">
            <h4>Project Overview</h4>
            <p className="modal-summary modal-summary-secondary">{overview}</p>
          </section>

          <div className="modal-editorial-grid">
            <section className="modal-section" aria-label="Key features">
              <h4>Key Features</h4>
              <ul className="modal-points">
                {keyHighlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            <section
              className="modal-section"
              aria-label="Tech stack and details"
            >
              <h4>Tech Stack and Details</h4>
              <ul className="modal-points modal-tech-details">
                {technicalImplementation.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="modal-stack-divider" aria-hidden="true" />
              <div
                className="modal-stack-grid"
                aria-label="Technology icons and names"
              >
                {project.techStack.map((tech) => (
                  <span key={tech} className="modal-stack-chip">
                    {techIcons[tech] ? (
                      <img
                        className="modal-stack-chip-image"
                        src={techIcons[tech]}
                        alt={tech}
                        loading="lazy"
                      />
                    ) : (
                      <span className="modal-stack-chip-fallback">
                        {tech.slice(0, 2)}
                      </span>
                    )}
                    <span className="modal-stack-chip-name">{tech}</span>
                  </span>
                ))}
              </div>
            </section>

            <section className="modal-section" aria-label="Architecture">
              <h4>Architecture</h4>
              <ul className="modal-points">
                {architecturePoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className="modal-section"
              aria-label="Additional information"
            >
              <h4>Additional Info</h4>
              <ul className="modal-points">
                {additionalInfoPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="modal-actions">
            <a
              className="btn primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            {linkedInDemo ? (
              <a
                className="btn ghost"
                href={linkedInDemo}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Demo Video
              </a>
            ) : (
              <button type="button" className="btn ghost" disabled>
                LinkedIn Demo Coming Soon
              </button>
            )}
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
}

export default ProjectModal;
