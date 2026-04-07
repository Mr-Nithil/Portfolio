function GitHubStats() {
  return (
    <section id="github-stats" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">GitHub Insights</p>
        <h2>Open-source activity snapshot</h2>
      </div>
      <p className="section-copy">
        Live GitHub profile metrics powered by an external stats card service.
      </p>
      <div className="github-stats-card">
        <img
          src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=Mr-Nithil&theme=github_dark"
          alt="GitHub stats for Mr-Nithil"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default GitHubStats;
