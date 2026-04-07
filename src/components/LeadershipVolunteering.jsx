import { useEffect, useState } from "react";

const leadershipOrganizations = [
  {
    id: "slucsm",
    organization: "Sri Lanka University Catholic Students' Movement (SLUCSM)",
    galleryImages: [
      "/leadership-volunteering/slucsm/1.jpg",
      "/leadership-volunteering/slucsm/2.jpg",
      "/leadership-volunteering/slucsm/3.jpg",
      "/leadership-volunteering/slucsm/3 UNIT.jpg",
      "/leadership-volunteering/slucsm/4.jpg",
      "/leadership-volunteering/slucsm/5.jpg",
      "/leadership-volunteering/slucsm/6.jpg",
      "/leadership-volunteering/slucsm/7.jpg",
      "/leadership-volunteering/slucsm/8.jpg",
      "/leadership-volunteering/slucsm/9.jpg",
      "/leadership-volunteering/slucsm/10.jpg",
      "/leadership-volunteering/slucsm/11.jpg",
    ],
    roles: [
      {
        title: "President",
        period: "Aug 2023 - Sep 2024",
      },
    ],
  },
  {
    id: "ieee",
    organization: "IEEE Computer Society University of Ruhuna",
    galleryImages: [
      "/leadership-volunteering/axiom/1.jpeg",
      "/leadership-volunteering/axiom/2.jpeg",
      "/leadership-volunteering/axiom/3.jpeg",
      "/leadership-volunteering/axiom/4.jpeg",
      "/leadership-volunteering/axiom/5.jpeg",
    ],
    roles: [
      {
        title: "Organizing Committee Co Chairman - AXIOM",
        period: "Jun 2023 - Oct 2023",
      },
    ],
  },
  {
    id: "css",
    organization: "Catholic Students' Society, University of Ruhuna",
    galleryImages: [
      "/leadership-volunteering/css-ruhuna/1.jpeg",
      "/leadership-volunteering/css-ruhuna/2.jpeg",
      "/leadership-volunteering/css-ruhuna/3.jpeg",
      "/leadership-volunteering/css-ruhuna/4.jpeg",
      "/leadership-volunteering/css-ruhuna/5.jpeg",
      "/leadership-volunteering/css-ruhuna/6.jpeg",
    ],
    roles: [
      {
        title: "Engineering Faculty Coordinator",
        period: "Sep 2022 - Oct 2023",
      },
    ],
  },
  {
    id: "aiesec",
    organization: "AIESEC in University of Ruhuna",
    galleryImages: [
      "/leadership-volunteering/aiesec/1.jpeg",
      "/leadership-volunteering/aiesec/2.jpeg",
      "/leadership-volunteering/aiesec/3.jpeg",
      "/leadership-volunteering/aiesec/4.jpg",
      "/leadership-volunteering/aiesec/5.jpeg",
      "/leadership-volunteering/aiesec/6.jpeg",
    ],
    roles: [
      {
        title:
          "Organizing Committee Vice President (Public Relations) - CAREER INFIX'22",
        period: "Sep 2022 - Jan 2023",
        award:
          '"The Most Innovative Organizing Committee" for the term 22.23 in AIESEC, University of Ruhuna',
      },
      {
        title: "International Relations Manager - Incoming Global Talent",
        period: "Jan 2022 - Jan 2023",
      },
      {
        title: "Team Member - Marketing",
        period: "Jan 2022 - Aug 2022",
      },
      {
        title:
          "Organizing Committee Vice President (Event & Logistics) - GREEN LEADERS FOR BETTER TOMORROW",
        period: "Jan 2022 - Aug 2022",
      },
      {
        title: "Organizing Committee Vice President (Delegates) - EUPHONY",
        period: "Sep 2021 - Jan 2022",
      },
      {
        title: "Team Member - Incoming Global Talent",
        period: "Sep 2021 - Jan 2022",
        award:
          "IGT Outstanding Member of AIESEC in University of Ruhuna for the term 21.22.",
      },
    ],
  },
];

function OrganizationCard({ organization, onOpenImage }) {
  const [previewStartIndex, setPreviewStartIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const previewCount = Math.min(4, organization.galleryImages.length);

  const previewImages = Array.from({ length: previewCount }, (_, index) => {
    const imageIndex =
      (previewStartIndex + index) % organization.galleryImages.length;
    return {
      path: organization.galleryImages[imageIndex],
      imageIndex,
    };
  });

  const showPreviousPreview = () => {
    setPreviewStartIndex(
      (currentIndex) =>
        (currentIndex - 1 + organization.galleryImages.length) %
        organization.galleryImages.length,
    );
  };

  const showNextPreview = () => {
    setPreviewStartIndex(
      (currentIndex) => (currentIndex + 1) % organization.galleryImages.length,
    );
  };

  return (
    <article className="leadership-card">
      <div className="leadership-card-header">
        <p className="leadership-card-label">Organization</p>
        <div className="leadership-card-header-row">
          <h3 className="leadership-card-title">{organization.organization}</h3>
          <button
            type="button"
            className="leadership-gallery-toggle"
            onClick={() => setIsGalleryOpen((current) => !current)}
            aria-expanded={isGalleryOpen}
            aria-controls={`leadership-gallery-${organization.id}`}
          >
            <span>Gallery</span>
            <span className="leadership-gallery-toggle-icon" aria-hidden="true">
              {isGalleryOpen ? "▴" : "▾"}
            </span>
          </button>
        </div>
      </div>

      <div
        className="leadership-role-box"
        aria-label={`${organization.organization} roles`}
      >
        {organization.roles.map((role) => (
          <div
            key={`${organization.id}-${role.title}`}
            className="leadership-role-row"
          >
            <div className="leadership-role-main">
              <p className="leadership-role-title">{role.title}</p>
            </div>
            <p className="leadership-role-period">{role.period}</p>

            {role.award ? (
              <div className="leadership-role-award" aria-label="Award">
                <p className="leadership-role-award-label">Award</p>
                <p className="leadership-role-award-text">{role.award}</p>
              </div>
            ) : role.note ? (
              <p className="leadership-role-note">{role.note}</p>
            ) : null}
          </div>
        ))}
      </div>

      {isGalleryOpen ? (
        <div
          id={`leadership-gallery-${organization.id}`}
          className="leadership-gallery-panel"
        >
          <div
            className="leadership-carousel"
            aria-label={`${organization.organization} gallery preview`}
          >
            <button
              type="button"
              className="leadership-carousel-nav"
              onClick={showPreviousPreview}
              aria-label="Show previous preview image"
            >
              ◀
            </button>

            <div className="leadership-carousel-strip">
              {previewImages.map((image) => (
                <button
                  key={`${organization.id}-${image.path}`}
                  type="button"
                  className="leadership-carousel-thumb"
                  onClick={() => onOpenImage(image.imageIndex)}
                  aria-label={`Open image ${image.imageIndex + 1} from ${organization.organization}`}
                >
                  <img src={encodeURI(image.path)} alt="" />
                </button>
              ))}
            </div>

            <button
              type="button"
              className="leadership-carousel-nav"
              onClick={showNextPreview}
              aria-label="Show next preview image"
            >
              ▶
            </button>
          </div>

          <p className="leadership-carousel-hint">
            Click any image to expand it.
          </p>
        </div>
      ) : null}
    </article>
  );
}

function LeadershipVolunteering() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openGallery = (organization, imageIndex) => {
    setActiveGallery(organization);
    setActiveImageIndex(imageIndex);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveImageIndex(0);
  };

  const showPreviousImage = () => {
    if (!activeGallery) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === 0
        ? activeGallery.galleryImages.length - 1
        : currentIndex - 1,
    );
  };

  const showNextImage = () => {
    if (!activeGallery) {
      return;
    }

    setActiveImageIndex((currentIndex) =>
      currentIndex === activeGallery.galleryImages.length - 1
        ? 0
        : currentIndex + 1,
    );
  };

  useEffect(() => {
    if (!activeGallery) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

  const activeImage = activeGallery
    ? activeGallery.galleryImages[activeImageIndex]
    : null;

  return (
    <section id="leadership-volunteering" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Leadership & Volunteering</p>
        <h2>Leadership Highlights and Gallery</h2>
      </div>

      <div className="leadership-list">
        {leadershipOrganizations.map((organization) => (
          <OrganizationCard
            key={organization.id}
            organization={organization}
            onOpenImage={(imageIndex) => openGallery(organization, imageIndex)}
          />
        ))}
      </div>

      {activeGallery ? (
        <div
          className="paper-viewer-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGallery.organization} gallery`}
          onClick={closeGallery}
        >
          <div
            className="paper-viewer leadership-gallery-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="paper-viewer-header">
              <h3>{activeGallery.organization}</h3>
              <button
                type="button"
                className="modal-close"
                onClick={closeGallery}
              >
                Close
              </button>
            </div>

            <p className="leadership-gallery-note">
              Image {activeImageIndex + 1} of{" "}
              {activeGallery.galleryImages.length}
            </p>

            <div className="leadership-gallery-viewer">
              <button
                type="button"
                className="leadership-gallery-nav"
                onClick={showPreviousImage}
                aria-label="Show previous image"
              >
                ◀
              </button>

              <figure className="leadership-gallery-stage">
                <img
                  src={encodeURI(activeImage)}
                  alt={`${activeGallery.organization} image ${activeImageIndex + 1}`}
                />
                <figcaption>
                  {activeImageIndex + 1} / {activeGallery.galleryImages.length}
                </figcaption>
              </figure>

              <button
                type="button"
                className="leadership-gallery-nav"
                onClick={showNextImage}
                aria-label="Show next image"
              >
                ▶
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default LeadershipVolunteering;
