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
            I have developed real-world applications involving QR-based
            payments, geolocation services, Bluetooth features, and real-time
            API-driven workflows. Alongside Flutter, I have worked with Kotlin
            and Jetpack Compose, and I am exploring React Native.
          </p>

          <p className="section-copy">
            I also build backend systems using ASP.NET Core and Node.js,
            enabling end-to-end development of modern mobile applications. I
            follow Clean Architecture, MVVM, and SOLID principles to ensure
            scalability and maintainability.
          </p>
        </div>

        <div className="about-panel about-highlights">
          <h3>Key areas of expertise</h3>
          <ul>
            <li>Flutter cross-platform mobile development</li>
            <li>Clean Architecture, MVVM, and state management</li>
            <li>RESTful APIs and real-time systems</li>
            <li>Backend development with ASP.NET Core and Node.js</li>
            <li>Full-stack system development</li>
            <li>PostgreSQL, MongoDB, Firebase, Supabase</li>
            <li>Docker-based deployment</li>
          </ul>
        </div>
      </div>

      <p className="about-closing">
        I am interested in mobile engineering opportunities where I can build
        scalable applications and continue growing as an engineer.
      </p>
    </section>
  );
}

export default About;
