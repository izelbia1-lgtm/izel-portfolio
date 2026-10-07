import { profile } from "../content";
import { Icon } from "./Icon";
export function TrainingProject() {
  return (
    <article className="training-project">
      <div className="training-index">
        <span>04 / TRAINING PROJECT</span>
        <Icon name="layers" size={35} />
      </div>
      <div className="training-content">
        <h3>
          There’s more
          <br />
          beneath the surface.
        </h3>
        <h4>Full-stack dealership application</h4>
        <p>
          A training application with a React frontend, Django authentication
          and API views, and an Express / MongoDB service. Explore the
          repository for the implementation.
        </p>
        <ul className="tags" aria-label="Training project technologies">
          {["React", "Python", "Django", "Express", "MongoDB"].map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <a
        className="training-link"
        href={`${profile.github}/fullstack-saas-app`}
        target="_blank"
        rel="noreferrer"
      >
        <span>Explore the repository</span>
        <Icon name="external" size={22} />
      </a>
    </article>
  );
}
