import { useState } from "react";
import { projects } from "../data/projects";
import ProjectModal from "./ProjectModal";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Projects</p>
        <h2>Selected mobile and platform work</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-preview">
              <img
                src={project.images[0]}
                alt={`${project.title} cover`}
                loading="lazy"
              />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul className="tag-list">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
            <button
              type="button"
              className="btn ghost"
              onClick={() => setSelectedProject(project)}
            >
              View Details
            </button>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default ProjectsSection;
