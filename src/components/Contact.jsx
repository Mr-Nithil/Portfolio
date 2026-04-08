function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build scalable mobile experiences that matter</h2>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <div className="contact-card-head">
            <p className="eyebrow">Open for opportunities</p>
            <p className="contact-summary">
              Actively seeking Flutter and mobile engineering roles where I can
              build scalable, high-impact applications used in real-world
              environments.
            </p>
          </div>

          {/* <div className="contact-pills" aria-label="Contact highlights">
            <span>Flutter-focused</span>
            <span>Actively seeking opportunities</span>
            <span>Open to remote roles</span>
            <span>Open to freelance</span>
            <span>Cross-platform apps</span>
            <span>Kotlin & Android</span>
            <span>Clean Architecture</span>
            <span>Scalable mobile apps</span>
          </div> */}

          <ul className="link-list">
            <li className="contact-link location">
              <span className="icon-slot" aria-hidden="true" />
              <div>
                <span className="link-label">Location</span>
                <span className="link-value">Gampaha, Sri Lanka</span>
              </div>
            </li>

            <li className="contact-link phone">
              <span className="icon-slot" aria-hidden="true" />
              <div>
                <span className="link-label">Phone</span>
                <a href="tel:+94717059404">+94 71 705 9404</a>
              </div>
            </li>

            <li className="contact-link email">
              <span className="icon-slot" aria-hidden="true" />
              <div>
                <span className="link-label">Email</span>
                <a href="mailto:nithil.sheshan@gmail.com">
                  nithil.sheshan@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-link github">
              <span className="icon-slot" aria-hidden="true" />
              <div>
                <span className="link-label">GitHub</span>
                <a
                  href="https://github.com/Mr-Nithil"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Mr-Nithil
                </a>
              </div>
            </li>

            <li className="contact-link linkedin">
              <span className="icon-slot" aria-hidden="true" />
              <div>
                <span className="link-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/nithil-sheshan-4a3945210/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/nithil-sheshan-4a3945210
                </a>
              </div>
            </li>

            <li className="contact-link medium">
              <span className="icon-slot" aria-hidden="true" />
              <div>
                <span className="link-label">Medium</span>
                <a
                  href="https://medium.com/@nithilsheshan"
                  target="_blank"
                  rel="noreferrer"
                >
                  medium.com/@nithilsheshan
                </a>
              </div>
            </li>
          </ul>
        </article>

        <article className="contact-card contact-spotlight">
          <div className="contact-spotlight-head">
            <p className="eyebrow">Why work with me</p>
            <h3>Engineering clarity, speed, and real-world impact</h3>
            <p className="contact-summary">
              I focus on building production-ready mobile apps with clean
              architecture, scalable systems, and strong user experience.
            </p>
          </div>

          <div className="contact-animation" aria-hidden="true">
            <div className="contact-orbit contact-orbit-large">
              <span />
              <span />
              <span />
            </div>

            <div className="contact-orbit contact-orbit-small">
              <span />
              <span />
            </div>

            <div className="contact-tiles">
              <div className="contact-tile tile-primary">
                <span className="tile-label">Availability</span>
                <strong>Open for mobile engineering roles</strong>
              </div>

              <div className="contact-tile tile-secondary">
                <span className="tile-label">Core Stack</span>
                <strong>Flutter, Dart & Kotlin</strong>
              </div>

              <div className="contact-tile tile-tertiary">
                <span className="tile-label">Architecture</span>
                <strong>Clean Architecture, MVVM</strong>
              </div>

              <div className="contact-tile tile-tertiary">
                <span className="tile-label">Focus</span>
                <strong>Scalable, real-world mobile apps</strong>
              </div>
            </div>
          </div>

          <div className="contact-actions">
            <a className="btn primary" href="mailto:nithil.sheshan@gmail.com">
              Get in touch
            </a>

            <a className="btn secondary" href="Nithil_Sheshan_CV.pdf" download>
              Download CV
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Contact;
