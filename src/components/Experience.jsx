const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Fuelback Asia Pvt Ltd",
    period: "May 2025 - Oct 2025",
    highlights: [
      "Developed and maintained 2 production-grade Flutter applications supporting QR-based payment, geolocation-based services, Bluetooth integrations for proximity-based features and banking integrations.",
      "Designed scalable application architecture using Bloc and Provider for state management, collaborating closely with designers to ensure UI fidelity.",
      "Implemented REST API integrations for real-time transaction processing and data synchronization.",
      "Identified and resolved UI layout inconsistencies and logic errors through analytical thinking to improve application stability, taking ownership of stability improvements end-to-end.",
      "Managed Flutter package updates and ensured compatibility with the latest stable Flutter releases.",
      "Experience preparing apps for release and understanding Play Store/App Store deployment workflows.",
    ],
  },
  {
    title: "Intern Software Engineer",
    company: "SixthFlow Research",
    period: "Jul 2024 - Dec 2024",
    highlights: [
      "Translated product requirements into pixel-perfect UI designs in Figma for GeoTS V2.0, collaborating closely with developers for implementation.",
      "Built Flutter UI components for GeoTS V1.0, ensuring consistency, responsiveness, and smooth user interactions using Material components with a solid understanding of the Flutter widget lifecycle.",
      "Maintained technical documentation and README files as application features evolved.",
      "Built the GeoTS V2.0 Native Android mobile app using Kotlin, Jetpack Compose & Firebase.",
      "Conducted technical feasibility analyses for 4 cloud technologies (Choreo, Firebase, Astro and LangChain).",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Experience</p>
        <h2>Real World Experience</h2>
      </div>

      <div className="edu-timeline" aria-label="Experience timeline">
        {experiences.map((item, index) => (
          <article
            key={`${item.title}-${item.period}`}
            className={`edu-timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="edu-timeline-marker" aria-hidden="true" />
            <div className="edu-timeline-content">
              <p className="edu-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="edu-institute">{item.company}</p>
              <ul>
                {item.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
