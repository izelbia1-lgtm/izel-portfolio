import type { Project } from "../content";
import { Icon } from "./Icon";
export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}) {
  return (
    <article className={`project-card project-${project.id}`}>
      <div className="project-overline">
        <span>
          0{index + 1} /{" "}
          {project.type === "client"
            ? "REAL CLIENT WEBSITE"
            : "CONCEPT / PORTFOLIO WORK"}
        </span>
        <span>
          {index === 0
            ? "A place to discover. A way to connect."
            : index === 1
              ? "A fresh perspective on outdoor living."
              : "Clarity, from first visit to enquiry."}
        </span>
      </div>
      <button className="project-image" onClick={() => onOpen(project)}>
        <span className="preview-window">
          <span className="browser-chrome">
            <span className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span>{project.liveUrl ? new URL(project.liveUrl).hostname : project.name}</span>
            <Icon name="external" size={12} />
          </span>
          <img
            src={`./images/${project.image}`}
            srcSet={`./images/${project.id}-640.webp 640w, ./images/${project.image} 1440w`}
            sizes={
              index === 0
                ? "(max-width: 700px) 86vw, 80vw"
                : "(max-width: 700px) 86vw, 65vw"
            }
            alt={`${project.name} website homepage screenshot`}
            width="1440"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="preview-action">
          Explore the case study <span aria-hidden="true">↗</span>
        </span>
      </button>
      <div className="project-content">
        <div className="project-title">
          <span className="project-category">{project.category}</span>
          <h3>{project.name}</h3>
          <ul className="tags" aria-label="Technologies">
            {project.technologies.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="project-summary">
          <p>{project.description}</p>
          <div className="project-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Live site: ${project.name} (opens in a new tab)`}
              >
                Live site <Icon name="external" size={13} />
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                aria-label={`View code: ${project.name} on GitHub`}
              >
                <Icon name="github" size={14} />
                View code
              </a>
            )}
            <button
              className="text-link"
              onClick={() => onOpen(project)}
              aria-label={`View case study: ${project.name}`}
            >
              Case study <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
