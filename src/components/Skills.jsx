const skillGroups = [
  {
    label: "Mobile Development",
    items: [
      "Flutter",
      "Dart",
      "Jetpack Compose",
      "Kotlin",
      "React Native",
      "Material Design",
      "Cupertino",
    ],
  },
  {
    label: "State Management",
    items: ["Bloc", "Riverpod", "Provider"],
  },
  {
    label: "Architecture & Patterns",
    items: [
      "Clean Architecture",
      "MVVM",
      "MVC",
      "SOLID Principles",
      "Service Pattern",
      "Repository Pattern",
    ],
  },
  {
    label: "System Design & Scalability",
    items: [
      "Microservices Architecture",
      "API Design",
      "Database Design",
      "Containerization",
    ],
  },
  {
    label: "Backend Development",
    items: ["ASP.NET Core", "Node.js", "Express.js", "RESTful APIs"],
  },
  {
    label: "Security & Authentication",
    items: [
      "JWT Auth",
      "OAuth",
      "Firebase Auth",
      "Role-Based Access Control",
      "Supabase Auth",
    ],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Hive"],
  },
  {
    label: "Cloud & BaaS",
    items: ["AWS", "Firebase", "Supabase"],
  },
  {
    label: "Programming Languages",
    items: ["C", "C++", "C#", "JavaScript", "Python"],
  },
  {
    label: "Frontend Development",
    items: ["HTML", "CSS", "React", "Bootstrap", "TypeScript"],
  },
  {
    label: "DevOps & Tools",
    items: ["Docker", "Jenkins", "Linux", "Git", "GitHub", "GitLab"],
  },
  {
    label: "Testing & QA",
    items: ["Unit Testing", "Widget Testing", "flutter_test"],
  },
  {
    label: "API & Doc Tools",
    items: ["Postman", "Swagger"],
  },
  {
    label: "Design & Prototyping",
    items: ["Figma", "Adobe XD", "Photoshop"],
  },
  {
    label: "IDEs",
    items: ["VS Code", "Xcode", "Android Studio"],
  },
  {
    label: "AI-Assisted Development",
    items: ["Cursor", "Antigravity", "GitHub Copilot"],
  },
];

const skillLogos = {
  Flutter:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  Dart: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  Kotlin:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  "Material Design": "https://img.icons8.com/color/48/material-ui.png",
  Cupertino: "https://img.icons8.com/color/48/ios-logo.png",
  Bloc: "stack-icons/bloc.png",
  Riverpod: "stack-icons/riverpod.png",
  Provider: "https://img.icons8.com/color/48/data-configuration.png",
  "Jetpack Compose":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jetpackcompose/jetpackcompose-original.svg",
  "React Native":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "ASP.NET Core":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  "Clean Architecture": "https://img.icons8.com/color/48/flow-chart.png",
  MVVM: "https://img.icons8.com/color/48/template.png",
  "SOLID Principles": "https://img.icons8.com/color/48/lego-head.png",
  MVC: "https://img.icons8.com/color/48/template.png",
  "Service Pattern": "https://img.icons8.com/color/48/services--v1.png",
  "Repository Pattern": "https://img.icons8.com/color/48/repository.png",
  "Microservices Architecture":
    "https://img.icons8.com/color/48/networking-manager.png",
  "API Design": "https://img.icons8.com/color/48/api-settings.png",
  "Database Design": "https://img.icons8.com/color/48/database.png",
  Containerization: "https://img.icons8.com/color/48/docker.png",
  "JWT Auth":
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg",
  "Firebase Auth":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  "Role-Based Access Control": "https://img.icons8.com/color/48/shield.png",
  "Supabase Auth":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  OAuth: "https://img.icons8.com/color/48/key-security.png",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  Docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  AWS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "RESTful APIs": "https://img.icons8.com/color/48/api.png",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  GitLab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  Linux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  "Unit Testing": "https://img.icons8.com/color/48/test-tube.png",
  "Widget Testing": "https://img.icons8.com/color/48/test-passed.png",
  flutter_test:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  MySQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  SQLite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  Hive: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Swagger:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
  "Android Studio":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Xcode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg",
  Cursor: "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/cursor.svg",
  "GitHub Copilot":
    "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/githubcopilot.svg",
  Antigravity: "stack-icons/antigravity-color.png",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "Adobe XD": "https://api.iconify.design/logos:adobe-xd.svg",
  Photoshop: "https://api.iconify.design/logos:adobe-photoshop.svg",
};

function Skills() {
  return (
    <section id="skills" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Technical Skills</p>
        <h2>Core technologies and engineering capabilities</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.label} className="skill-card">
            <h3>{group.label}</h3>
            <ul className="tag-list" aria-label={`${group.label} skills`}>
              {group.items.map((item) => {
                const iconUrl = skillLogos[item];

                return (
                  <li key={item} className="tag-item">
                    {iconUrl ? (
                      <>
                        <img
                          className="tag-icon"
                          src={iconUrl}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                        <span>{item}</span>
                      </>
                    ) : (
                      <span>{item}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
