import aboutPic from "../assets/about_pic.jpg";

const platformBadges = [
  {
    label: "Android",
    src: "/mobile-engineering-portfolio/android.png",
    alt: "Android",
  },
  {
    label: "iOS",
    src: "/mobile-engineering-portfolio/apple-logo.png",
    alt: "Apple iOS",
  },
  {
    label: "Flutter",
    src: "/mobile-engineering-portfolio/icon_flutter.png",
    alt: "Flutter",
  },
  {
    label: "Kotlin",
    src: "/mobile-engineering-portfolio/Kotlin icon.png",
    alt: "Kotlin",
  },
  {
    label: "React Native",
    src: "/mobile-engineering-portfolio/React_Native_idNPBI6-rm_0.png",
    alt: "React Native",
  },
];

function Hero() {
  return (
    <section id="hero" className="hero section reveal">
      <div className="hero-layout">
        <div className="hero-content">
          <p className="eyebrow">Mobile Engineering Portfolio</p>
          <h1>
            Nithil Sheshan
            <span>Mobile Engineer | Flutter Developer</span>
          </h1>
          <p className="hero-copy">
            Flutter Engineer building production-grade mobile apps with Flutter,
            Dart, Kotlin, and React Native. Strong in Clean Architecture, MVVM,
            Bloc/Provider/Riverpod, and REST API integration with experience in
            real-time data, QR payments, geolocation, and Bluetooth features.
          </p>

          <div className="hero-platforms" aria-label="Mobile platforms">
            {platformBadges.map((platform) => (
              <div className="hero-platform-badge" key={platform.label}>
                <img src={platform.src} alt={platform.alt} loading="lazy" />
                <span>{platform.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a
              className="btn ghost"
              href="/Nithil_Sheshan_Mobile_Engineer_CV.pdf"
              download
            >
              Download CV
            </a>
            <a className="btn ghost" href="#contact">
              Contact
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src={aboutPic} alt="Nithil Sheshan" loading="lazy" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
