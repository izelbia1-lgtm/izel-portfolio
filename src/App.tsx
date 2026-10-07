import { useState } from "react";
import { experience, profile, projects, skills, type Project } from "./content";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProjectCard } from "./components/ProjectCard";
import { CaseStudy } from "./components/CaseStudy";
import { Contact } from "./components/Contact";
import { Icon } from "./components/Icon";
import { TrainingProject } from "./components/TrainingProject";
const services = [
  [
    "Business websites",
    "A considered home for your business, with a clear structure and room for your story.",
  ],
  [
    "Website redesigns",
    "A fresh design that helps people find what matters and take the next step.",
  ],
  [
    "Responsive development",
    "Interfaces that feel comfortable on phones, tablets and desktops.",
  ],
  [
    "WhatsApp & enquiry integration",
    "Direct connections through contact forms, quote functionality and WhatsApp.",
  ],
  [
    "Basic SEO & launch setup",
    "Search-friendly foundations, deployment and the details that prepare a site for launch.",
  ],
];
export default function App() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <section id="work" className="work section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">01 / A selection of my work</span>
                <h2>
                  Different businesses.
                  <br />
                  <em>Considered solutions.</em>
                </h2>
              </div>
              <p>
                Real client work, independent concepts and full-stack training.
                A closer look at what I build.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onOpen={setSelected}
                />
              ))}
            </div>
            <TrainingProject />
          </div>
        </section>
        <section id="services" className="services section-pad">
          <div className="container services-grid">
            <div className="services-intro">
              <span className="eyebrow">02 / For your business</span>
              <h2>
                Have a business?
                <br />
                Let’s give it a<br />
                <em>better home</em>
                <br />
                online.
              </h2>
              <p>
                Simple to use. Thoughtfully designed. Built around the people
                you want to reach.
              </p>
              <a className="button primary" href="#contact">
                Let’s work together <span aria-hidden="true">↗</span>
              </a>
              <span className="service-note">
                A personal approach, from idea to implementation.
              </span>
            </div>
            <div className="service-list">
              {services.map(([title, copy], index) => (
                <article key={title}>
                  <span className="service-number">0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                  <span className="service-arrow" aria-hidden="true">
                    ↗
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="about section-pad">
          <div className="container">
            <div className="about-top">
              <span className="eyebrow">03 / The person behind the work</span>
              <span className="about-monogram" aria-hidden="true">
                ib.
              </span>
            </div>
            <div className="about-grid">
              <div>
                <h2>
                  A curious mind.
                  <br />A practical approach.
                  <br />
                  <em>A little perspective.</em>
                </h2>
                <p className="personal-statement">
                  Good websites should make things easier.
                  <br />
                  For the people using them.
                  <br />
                  And the people behind them.
                </p>
              </div>
              <div className="about-copy">
                <h3>I’m Izel Bianchina.</h3>
                <p>
                  A software and web developer based in Johannesburg, South
                  Africa. I work with React, JavaScript, TypeScript, Node.js and
                  Django to build small-business websites and full-stack
                  applications.
                </p>
                <p>
                  My background includes freelance technical support and remote
                  operations. My freelance work included debugging and
                  troubleshooting; at PBMS, I coordinated schedules,
                  communications and task tracking.
                </p>
                <p>
                  I’ve completed IBM’s Full Stack Software Developer
                  Professional Certificate. I’m looking for a junior developer
                  role where I can contribute and keep learning, alongside
                  selected freelance website projects.
                </p>
                <a
                  className="text-link"
                  href="./Izel_Bianchina_CV.pdf"
                  download
                >
                  Download my CV <Icon name="download" size={16} />
                </a>
              </div>
            </div>
            <div className="personal-facts">
              <div>
                <span>BASED IN</span>
                <p>Johannesburg, South Africa</p>
              </div>
              <div>
                <span>LOOKING AHEAD</span>
                <p>Junior developer opportunities</p>
              </div>
              <div>
                <span>LET’S COLLABORATE</span>
                <p>Selected freelance website projects</p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="skills section-pad">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">04 / The tools behind the work</span>
                <h2>
                  Creative thinking.
                  <br />
                  <em>Technical foundations.</em>
                </h2>
              </div>
              <p>
                Technologies I use across my projects and training, from the
                first component to the systems behind it.
              </p>
            </div>
            <div className="skill-ledger">
              {skills.map((group, index) => (
                <article className="skill-row" key={group.name}>
                  <span className="skill-number">0{index + 1}</span>
                  <h3>
                    {group.name === "Tools & training"
                      ? "Tools & deployment"
                      : group.name}
                  </h3>
                  <div>
                    <ul className="skill-list">
                      {group.items.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    {group.training && (
                      <div className="training-note">
                        <span>IBM programme exposure</span>
                        <ul className="skill-list">
                          {group.training.map((skill) => (
                            <li key={skill}>{skill}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="experience section-pad">
          <div className="container">
            <div className="experience-heading">
              <span className="eyebrow">05 / Experience & education</span>
              <h2>
                Learning by doing.
                <br />
                <em>Building on experience.</em>
              </h2>
              <a className="text-link" href="./Izel_Bianchina_CV.pdf" download>
                The full picture <Icon name="download" size={16} />
              </a>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-entry" key={item.title}>
                  <div className="experience-meta">
                    <span className="experience-type">{item.kind}</span>
                    <span className="experience-dates">{item.dates}</span>
                  </div>
                  <div className="experience-details">
                    <h3>{item.title}</h3>
                    <p className="organisation">{item.organisation}</p>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
              <article className="experience-entry education">
                <div className="experience-meta">
                  <span className="experience-type">Education</span>
                  <span className="experience-dates">Completed 2026</span>
                </div>
                <div className="experience-details">
                  <h3>
                    Full Stack Software Developer Professional Certificate
                  </h3>
                  <p className="organisation">IBM</p>
                  <p>
                    A completed 15-course programme covering full-stack
                    development and cloud technologies.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="github" className="github">
          <div className="container github-inner">
            <div>
              <span className="eyebrow">Behind every finished interface</span>
              <h2>
                There’s a little more
                <br />
                <em>to explore.</em>
              </h2>
            </div>
            <p>
              Explore the components, application logic and implementation in my
              GitHub repositories.
            </p>
            <a
              className="github-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={25} />
              <span>izelbia1-lgtm</span>
              <Icon name="external" size={18} />
            </a>
          </div>
        </section>
        <Contact />
      </main>
      <footer className="container footer">
        <a className="footer-name" href="#home">
          Izel Bianchina<span>.</span>
        </a>
        <p>
          Software & web developer
          <br />© {new Date().getFullYear()} Izel Bianchina
        </p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {profile.linkedin && <a href={profile.linkedin}>LinkedIn</a>}
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
      <CaseStudy project={selected} onClose={() => setSelected(null)} />
    </>
  );
}
