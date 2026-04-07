const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "publications", label: "Publications" },
  { id: "certifications", label: "Certifications" },
  { id: "leadership-volunteering", label: "Leadership & Volunteering" },
  { id: "contact", label: "Contact" },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="Go to home section">
        NS
      </a>

      <nav aria-label="Primary">
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
