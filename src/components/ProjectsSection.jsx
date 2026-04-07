import { useState } from "react";
import { projects } from "../data/projects";
import { techIcons } from "../data/techIcons";
import ProjectModal from "./ProjectModal";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section reveal">
      <div className="section-title-wrap">
        <p className="eyebrow">Projects</p>
        <h2>Featured Mobile and Platform Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const previewTech = project.techStack.slice(0, 6);
          const extraTechCount = project.techStack.length - previewTech.length;

          return (
            <article className="project-card" key={project.id}>
              <div className="project-preview">
                <img
                  src={project.images[0]}
                  alt={`${project.title} cover`}
                  loading="lazy"
                />
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-summary">{project.description}</p>
              </div>
              <ul className="tag-list project-card-stack">
                {previewTech.map((tech) => (
                  <li key={tech} className="tag-item project-card-chip">
                    {techIcons[tech] ? (
                      <>
                        <img
                          className="tag-icon project-card-chip-icon"
                          src={techIcons[tech]}
                          alt=""
                          aria-hidden="true"
                          loading="lazy"
                        />
                        <span className="project-card-chip-name">{tech}</span>
                      </>
                    ) : (
                      <span className="project-card-chip-name">{tech}</span>
                    )}
                  </li>
                ))}
                {extraTechCount > 0 && (
                  <li className="tag-item project-card-chip project-card-chip-more">
                    +{extraTechCount} more
                  </li>
                )}
              </ul>
              <button
                type="button"
                className="btn ghost project-card-action"
                onClick={() => setSelectedProject(project)}
              >
                View Details
              </button>
            </article>
          );
        })}
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
