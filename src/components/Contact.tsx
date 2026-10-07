import { useState, type FormEvent } from "react";
import { profile } from "../content";
import { Icon } from "./Icon";
export function Contact() {
  const [draft, setDraft] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");
  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSubject(`${data.get("topic")} — ${data.get("name")}`);
    setDraft(
      `Hi Izel,\n\n${data.get("message")}\n\n${data.get("name")}\n${data.get("email")}`,
    );
    setStatus(
      "Your email draft is ready. Open your email app to review and send it.",
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus("Message copied. You can paste it into an email.");
    } catch {
      setStatus(
        "Copy is unavailable in this browser. Select and copy the message below.",
      );
    }
  }
  return (
    <section id="contact" className="contact section-pad">
      <div className="container">
        <div className="contact-heading">
          <span className="eyebrow">06 / An open invitation</span>
          <h2>
            Have something in mind?
            <br />
            <em>Let’s make it real.</em>
            <span className="contact-spark" aria-hidden="true">
              ✳
            </span>
          </h2>
        </div>
        <div className="contact-grid">
          <div className="contact-details">
            <p>
              Whether you’re looking for a developer to join your team or a
              website for your business, I’d like to hear from you.
            </p>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <span aria-hidden="true">↗</span>
            </a>
            <div className="contact-location">
              <span>BASED IN</span>
              <p>{profile.location}</p>
            </div>
            <div className="social-links">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Icon name="github" size={16} />
                GitHub
              </a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              )}
              {profile.whatsapp && (
                <a
                  href={`https://wa.me/${profile.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              )}
            </div>
            <span className="contact-note">
              A good conversation is a good place to start.
            </span>
          </div>
          <form className="contact-form" onSubmit={prepare}>
            <div className="form-heading">
              <span>A little about your idea</span>
              <span>01 — SAY HELLO</span>
            </div>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Alex Smith"
                />
              </label>
              <label>
                Email address
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                  placeholder="alex@example.com"
                />
              </label>
            </div>
            <label>
              I’m getting in touch about
              <select name="topic">
                <option>A website project</option>
                <option>A developer opportunity</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              Your message
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={4}
                placeholder="A little about your project or opportunity…"
              />
            </label>
            <div className="form-bottom">
              <p className="form-note">
                This form prepares an email on your device. Nothing is stored or
                sent automatically.
              </p>
              <button className="button primary" type="submit">
                Prepare email <span aria-hidden="true">↗</span>
              </button>
            </div>
            <p className="form-status" role="status">
              {status}
            </p>
            {draft && (
              <div className="email-draft">
                <label>
                  Prepared message
                  <textarea readOnly value={draft} rows={7} />
                </label>
                <div className="draft-actions">
                  <a
                    className="button primary"
                    href={`mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(draft)}`}
                  >
                    Open email app
                  </a>
                  <button type="button" className="text-link" onClick={copy}>
                    Copy message
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
