function Education() {
  const isResultLine = (note) =>
    note.startsWith("Overall result:") ||
    note.startsWith("OGPA:") ||
    note.startsWith("Z Score:");

  const educationTimeline = [
    {
      period: "2021 - Jan 2026",
      qualification: "BSc Engineering (Hons) in Computer Engineering",
      institute: "University of Ruhuna",
      notes: ["OGPA: 3.48 / 4.00"],
    },
    {
      period: "2021 - 2022",
      qualification: "Certificate in Basic Graphic Designing",
      institute: "Wijaya Graphics, Sri Lanka",
      notes: [],
    },
    {
      period: "2019",
      qualification: "G.C.E. Advanced Level (Physical Science Stream)",
      institute: "St. Peter's College, Gampaha Branch",
      notes: [
        "Overall result: 2 A's and 1 B",
        "Combined Mathematics (A)",
        "Chemistry (A)",
        "Physics (B)",
        "Z Score: 1.8249",
      ],
    },
    {
      period: "2016",
      qualification: "G.C.E. Ordinary Level",
      institute: "St. Peter's College, Gampaha Branch",
      notes: [
        "Overall result: 9 A's",
        "Catholicism (A)",
        "Sinhala Language and Literature (A)",
        "English Language (A)",
        "Mathematics (A)",
        "History (A)",
        "Science (A)",
        "Western Music (A)",
        "Business Studies and Accounting (A)",
        "Information Technology (A)",
      ],
    },
  ];

  return (
    <section id="education" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Education</p>
        <h2>Academic Foundation in Engineering Journey</h2>
      </div>

      <div className="edu-timeline" aria-label="Education timeline">
        {educationTimeline.map((item, index) => (
          <article
            key={`${item.qualification}-${item.period}`}
            className={`edu-timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="edu-timeline-marker" aria-hidden="true" />
            <div className="edu-timeline-content">
              <p className="edu-period">{item.period}</p>
              <h3>{item.qualification}</h3>
              <p className="edu-institute">{item.institute}</p>
              {item.notes.length > 0 && (
                <ul>
                  {item.notes.map((note) => {
                    const [label, value] = note.split(":");
                    const highlighted = isResultLine(note);
                    const isZScore = note.startsWith("Z Score:");

                    if (highlighted && value) {
                      return (
                        <li
                          key={note}
                          className={`edu-note-highlight ${isZScore ? "edu-note-zscore" : ""}`.trim()}
                        >
                          <span className="edu-note-key">{label}:</span>{" "}
                          <span className="edu-note-value">{value.trim()}</span>
                        </li>
                      );
                    }

                    return <li key={note}>{note}</li>;
                  })}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Education;
