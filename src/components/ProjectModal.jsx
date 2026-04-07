import { useEffect, useState } from "react";

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

  const hasMultipleImages = project.images.length > 1;

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % project.images.length);
  };

  const previousImage = () => {
    setActiveIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length,
    );
  };

  return (
    <div className="modal-overlay" role="presentation" onClick={onClose}>
      <article
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          Close
        </button>

        <div className="modal-gallery">
          <img
            src={project.images[activeIndex]}
            alt={`${project.title} preview ${activeIndex + 1}`}
            loading="lazy"
          />

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

        <div className="modal-content">
          <h3 id="project-title">{project.title}</h3>
          <p>{project.fullDescription}</p>
          <ul className="tag-list">
            {project.techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <div className="modal-actions">
            <a
              className="btn primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
            {project.demo && (
              <a
                className="btn ghost"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ProjectModal;
