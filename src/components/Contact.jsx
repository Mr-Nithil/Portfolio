import { useState } from "react";

function Contact() {
  const [isSent, setIsSent] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsSent(true);
  };

  return (
    <section id="contact" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build something meaningful</h2>
      </div>

      <div className="contact-grid">
        <article className="contact-card">
          <div className="contact-card-head">
            <p className="eyebrow">Direct contact</p>
            <p className="contact-summary">
              Open to Flutter mobile engineering roles and building scalable,
              real-world applications.
            </p>
          </div>

          <div className="contact-pills" aria-label="Contact highlights">
            <span>Flutter-focused</span>
            <span>Actively seeking opportunities</span>
            <span>Open to remote roles</span>
            <span>Open to freelance</span>
            <span>Cross-platform apps</span>
            <span>Kotlin & Android</span>
            <span>Clean Architecture</span>
            <span>Scalable mobile apps</span>
          </div>

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

          <div className="contact-actions">
            <a className="btn primary" href="mailto:nithil.sheshan@gmail.com">
              Get in touch
            </a>

            <a className="btn secondary" href="Nithil_Sheshan_CV.pdf" download>
              Download CV
            </a>
          </div>
        </article>

        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required />

          <button type="submit" className="btn primary">
            Send Message
          </button>

          {isSent && (
            <p className="form-note">Thanks. I will get back to you soon.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
