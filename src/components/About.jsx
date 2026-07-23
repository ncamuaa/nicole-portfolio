import { useT } from "../theme";
import { FadeIn } from "./shared";
import resumeFile from "../assets/CAMUA_NICOLE_-_RESUME.pdf";

export default function About({ dark }) {
  const t = useT(dark);

  return (
    <section
      id="about"
      style={{
        padding: "90px 0 80px",
        background: t.bgAlt,
        transition: "background 0.4s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        .about-eyebrow {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: ${t.accent};
          margin-bottom: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .about-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1.5px;
          background: ${t.accent};
        }

        .about-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          color: ${t.heading};
          line-height: 1.12;
          margin-bottom: 1.4rem;
        }
        .about-heading em {
          font-style: italic;
          color: ${t.accent};
        }

        .about-body {
          color: ${t.muted};
          font-size: 1rem;
          line-height: 1.8;
          margin-bottom: 0.9rem;
        }

        .about-cta-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 1.6rem;
          flex-wrap: wrap;
        }

        .about-resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: ${t.accent};
          color: white;
          font-family: 'DM Mono', monospace;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 0.85rem 1.6rem;
          border-radius: 999px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
          box-shadow: 0 6px 18px rgba(0,0,0,0.18);
        }
        .about-resume-btn:hover {
          transform: translateY(-2px);
          opacity: 0.92;
        }
        .about-resume-btn svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        /* RIGHT COLUMN */
        .about-right {
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
        }

        .about-top-row {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 0.2rem;
        }

        .about-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: linear-gradient(145deg, #e8a0d0 0%, ${t.accent} 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          border: 2.5px dashed ${t.accent};
          outline: 4px solid ${t.bgAlt};
          flex-shrink: 0;
        }

        .about-otw-badge {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: ${t.heading};
          color: ${t.bgAlt};
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          padding: 0.55rem 1.1rem;
          border-radius: 999px;
        }
        .about-otw-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #6CE39A;
          box-shadow: 0 0 0 3px rgba(108,227,154,0.25);
          flex-shrink: 0;
        }

        /* SKILL CARDS */
        .about-skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.85rem;
        }

        .about-skill-card {
          background: ${t.cardBg || (dark ? "#2a1635" : "#2a1635")};
          border-radius: 16px;
          padding: 1.3rem 1.2rem;
          color: white;
        }

        .about-skill-icon {
          font-size: 1.4rem;
          margin-bottom: 0.65rem;
          display: block;
          color: ${t.accent};
        }

        .about-skill-title {
          font-weight: 600;
          font-size: 0.97rem;
          color: white;
          margin-bottom: 0.4rem;
        }

        .about-skill-desc {
          font-family: 'DM Mono', monospace;
          font-size: 0.73rem;
          color: #b89ab5;
          line-height: 1.65;
        }

        @media (max-width: 820px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
        <div className="about-grid">

          {/* ── LEFT: copy ── */}
          <FadeIn>
            <div className="about-eyebrow">about me</div>
            <h2 className="about-heading">
              Turning ideas into<br />
              <em>digital reality</em>
            </h2>
            <p className="about-body">
              I'm a full-stack developer passionate about building clean, purposeful web applications.
              I care about how things work under the hood just as much as making them feel great to use.
            </p>
            <p className="about-body">
              Through internships and academic projects, I've worked across frontend and backend
              technologies. I'm now looking for my first professional role as a backend or full-stack developer.
            </p>

            <div className="about-cta-row">
              <a
                className="about-resume-btn"
                href={resumeFile}
                download="CAMUA_NICOLE_RESUMEE.pdf"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </FadeIn>

          {/* ── RIGHT: avatar + skill cards ── */}
          <FadeIn delay={0.18}>
            <div className="about-right">

              <div className="about-top-row">
                <div className="about-avatar">N</div>
                <div className="about-otw-badge">
                  <span className="about-otw-dot" />
                  Open to work
                </div>
              </div>

              <div className="about-skills-grid">
                {[
                  { icon: "</>", title: "Clean Code", desc: "Readable, maintainable code with attention to architecture and best practices." },
                  { icon: "🤝", title: "Team Player", desc: "I collaborate well, communicate clearly, and thrive in fast-moving team environments." },
                  { icon: "☕", title: "Problem Solver", desc: "Complex challenges excite me. I break down problems and find elegant solutions." },
                  { icon: "♡",  title: "Passionate",    desc: "I genuinely love what I do. Building things that matter keeps me motivated daily." },
                ].map(({ icon, title, desc }) => (
                  <div className="about-skill-card" key={title}>
                    <span className="about-skill-icon">{icon}</span>
                    <div className="about-skill-title">{title}</div>
                    <div className="about-skill-desc">{desc}</div>
                  </div>
                ))}
              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}