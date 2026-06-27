import { useT } from "../theme";
import { FadeIn, HoverCard } from "./shared";

const PROJECTS = [
  {
    title: "EduVerso",
    desc: "An AI-powered microlearning app that uses voice interaction, peer feedback, and gamified missions to enhance student learning.",
    tags: ["AI", "Voice Interaction", "Gamification", "React"],
    accent: "#e05585",
    live: "https://eduverso.vercel.app",
    github: "https://github.com/ncamuaa/EDUVERSO-SBA.git",
  },
  {
    title: "Donor Management System",
    desc: "A system for managing donor information, tracking donations, and generating detailed reports for organizations.",
    tags: ["PHP", "MySQL", "CRUD", "Reporting"],
    accent: "#d4b8e0",
    live: null,
    github: "https://github.com/nicoleiris/donor-system",
  },
  {
    title: "Event Planner",
    desc: "A system for organizing and managing events, including schedules, attendee tracking, and budget management.",
    tags: ["React", "Node.js", "MongoDB", "Dashboard"],
    accent: "#f4a7b9",
    live: "https://eventplanner-ashen-phi.vercel.app",
    github: "https://github.com/ncamuaa/eventplanner.git",
  },
  {
    title: "Dev Portfolio",
    desc: "This portfolio website — a personal branding site built with React and Vite featuring dark/light mode, animations, and a working contact form.",
    tags: ["React", "Vite", "Formspree", "CSS-in-JS"],
    accent: "#c47ed8",
    live: "https://nicoleiris.dev",
    github: "https://github.com/nicoleiris/portfolio",
  },
];

export default function Projects({ dark }) {
  const t = useT(dark);

  return (
    <section id="projects" style={{ padding: "110px 0 90px", background: t.bgAlt, transition: "background 0.4s" }}>
      <style>{`
        .proj-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          padding: 6px 14px;
          border-radius: 999px;
          border: 1px solid ${t.border};
          background: transparent;
          color: ${t.muted};
          cursor: pointer;
          text-decoration: none;
          transition: border-color 0.18s, color 0.18s, background 0.18s;
        }
        .proj-btn:hover {
          border-color: ${t.accent};
          color: ${t.accent};
          background: ${dark ? "rgba(244,167,185,0.07)" : "rgba(201,116,143,0.07)"};
        }
        .proj-btn-live {
          border-color: ${t.accent};
          color: ${t.accent};
          background: ${dark ? "rgba(244,167,185,0.1)" : "rgba(201,116,143,0.08)"};
        }
        .proj-btn-live:hover {
          background: ${dark ? "rgba(244,167,185,0.18)" : "rgba(201,116,143,0.16)"};
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 3rem" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: t.accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.5rem" }}>// projects</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 800, color: t.heading, marginBottom: "1rem" }}>Selected Work</h2>
          <p style={{ color: t.muted, fontSize: "1.02rem", lineHeight: 1.72, maxWidth: 540 }}>Projects I've built during my studies — each one solving a real problem.</p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.4rem", marginTop: "3rem" }}>
          {PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.09}>
              <HoverCard dark={dark} t={t} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, overflow: "hidden", cursor: "default" }}>
                <div style={{ height: 5, background: `linear-gradient(90deg,${p.accent},${p.accent}88)` }} />
                <div style={{ padding: "1.6rem", display: "flex", flexDirection: "column", gap: 0 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem", color: t.heading, marginBottom: "0.5rem" }}>{p.title}</div>
                  <div style={{ fontSize: "0.88rem", color: t.muted, lineHeight: 1.65, marginBottom: "1rem" }}>{p.desc}</div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.2rem" }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", background: dark ? "rgba(244,167,185,0.08)" : "rgba(201,116,143,0.07)", color: t.accent, padding: "3px 10px", borderRadius: 20, border: `1px solid ${t.border}` }}>{tag}</span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", paddingTop: "1rem", borderTop: `1px solid ${t.border}` }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-btn proj-btn-live">
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="6" cy="6" r="4.5" />
                          <path d="M6 1.5C6 1.5 4.5 3.5 4.5 6s1.5 4.5 1.5 4.5M6 1.5C6 1.5 7.5 3.5 7.5 6S6 10.5 6 10.5M1.5 6h9" />
                        </svg>
                        Live
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                      </svg>
                      GitHub
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn">
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 1h4v4M11 1L5 7M4 2H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V8" />
                      </svg>
                      Link
                    </a>
                  </div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}