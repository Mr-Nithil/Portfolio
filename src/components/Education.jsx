import { useState } from "react";

function Education() {
  const [expandedResults, setExpandedResults] = useState({});

  const isResultLine = (note) =>
    note.startsWith("Overall result:") ||
    note.startsWith("OGPA:") ||
    note.startsWith("Z Score:");

  const toggleResultDetails = (itemKey) => {
    setExpandedResults((current) => ({
      ...current,
      [itemKey]: !current[itemKey],
    }));
  };

  const educationTimeline = [
    {
      period: "May 2021 - Jan 2026",
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
      period: "Aug 2019",
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
      period: "Dec 2016",
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
        {educationTimeline.map((item, index) => {
          const itemKey = `${item.qualification}-${item.period}`;
          const overallResultIndex = item.notes.findIndex((note) =>
            note.startsWith("Overall result:"),
          );
          const hasExpandableResults =
            overallResultIndex !== -1 && item.notes.length > 1;
          const isExpanded = Boolean(expandedResults[itemKey]);
          const notesToRender = hasExpandableResults
            ? [
                item.notes[overallResultIndex],
                ...(isExpanded
                  ? item.notes.filter((_, i) => i !== overallResultIndex)
                  : []),
              ]
            : item.notes;

          return (
            <article
              key={itemKey}
              className={`edu-timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="edu-timeline-marker" aria-hidden="true" />
              <div className="edu-timeline-content">
                <p className="edu-period">{item.period}</p>
                <h3>{item.qualification}</h3>
                <p className="edu-institute">{item.institute}</p>
                {notesToRender.length > 0 && (
                  <ul>
                    {notesToRender.map((note) => {
                      const [label, value] = note.split(":");
                      const highlighted = isResultLine(note);
                      const isZScore = note.startsWith("Z Score:");
                      const isOverallResult =
                        note.startsWith("Overall result:");

                      if (highlighted && value) {
                        return (
                          <li
                            key={note}
                            className={`edu-note-highlight ${isZScore ? "edu-note-zscore" : ""} ${isOverallResult ? "has-toggle" : ""}`.trim()}
                          >
                            <span className="edu-note-text">
                              <span className="edu-note-key">{label}:</span>{" "}
                              <span className="edu-note-value">
                                {value.trim()}
                              </span>
                            </span>
                            {isOverallResult && hasExpandableResults ? (
                              <button
                                type="button"
                                className="edu-result-toggle"
                                onClick={() => toggleResultDetails(itemKey)}
                                aria-expanded={isExpanded}
                              >
                                {isExpanded ? "Hide" : "Show"}
                              </button>
                            ) : null}
                          </li>
                        );
                      }

                      return <li key={note}>{note}</li>;
                    })}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Education;
