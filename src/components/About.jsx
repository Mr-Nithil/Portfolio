function About() {
  return (
    <section id="about" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">About</p>
        <h2>Building Scalable Mobile Applications with Clean Architecture</h2>
      </div>

      <div className="about-grid">
        <div className="about-panel about-story">
          <p className="section-copy">
            I am a Software Engineer specializing in Flutter mobile development,
            with experience building and deploying production-grade
            applications. I focus on creating scalable, high-performance mobile
            systems with clean and maintainable architectures.
          </p>

          <p className="section-copy">
            My experience includes QR payments, real-time APIs, geolocation,
            Bluetooth and IoT integrations, with additional experience in
            Kotlin, Jetpack Compose, ASP.NET Core, and Node.js.
          </p>
        </div>

        <div className="about-panel about-highlights">
          <h3>Key areas of expertise</h3>
          <ul>
            <li>Production-ready mobile applications</li>
            <li>Payments, APIs, Bluetooth, and IoT workflows</li>
            <li>Clean Architecture and scalable systems</li>
            <li>End-to-end development and deployment</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
