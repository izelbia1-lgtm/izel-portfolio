import { profile } from "../content";
import { Icon } from "./Icon";
export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-top">
          <span className="eyebrow">WEB DEVELOPER · JOHANNESBURG</span>
          <span className="hero-signature">
            Independent in spirit.
            <br />
            Considered in every detail.
          </span>
        </div>
        <div className="hero-statement">
          <h1>
            I design & build
            <br />
            <em>considered</em>
            <br />
            <span className="hero-last">
              digital experiences<span className="hero-period">.</span>
            </span>
          </h1>
          <a className="studio-seal" href="#work">
            <span>DESIGN MEETS</span>
            <Icon name="code" size={30} />
            <span>DEVELOPMENT</span>
          </a>
        </div>
        <div className="hero-bottom">
          <div className="hero-intro">
            <span className="intro-name">Izel Bianchina</span>
            <p>
              Software & web developer. I build websites for businesses,
              thoughtful frontend experiences and practical full-stack
              applications.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View my work <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#contact">
              Let’s work together <span aria-hidden="true">↗</span>
            </a>
          </div>
          <a
            className="hero-github"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" size={17} /> GitHub
          </a>
        </div>
        <div className="hero-foot">
          <span>Thoughtful websites. Practical software.</span>
          <a href="#work">
            SELECTED WORK <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
