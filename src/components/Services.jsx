import { useT } from "../theme";
import { FadeIn, HoverCard } from "./shared";
import { Ico } from "./icons";

const SERVICES = [
  {
    icon: "code",
    title: "Frontend Development",
    desc: "Building responsive, performant user interfaces using React, Next.js, and modern CSS. Pixel-perfect implementation from any design.",
    tags: ["React", "Next.js", "TypeScript", "CSS"],
  },
  {
    icon: "server",
    title: "Backend Development",
    desc: "Scalable APIs, microservices, and server-side logic with Node.js, Python, and cloud infrastructure.",
    tags: ["Node.js", "Python", "REST", "GraphQL"],
  },
  {
    icon: "database",
    title: "Database Design",
    desc: "Schema design, query optimization, and data architecture for both SQL and NoSQL databases.",
    tags: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "smartphone",
    title: "Mobile Development",
    desc: "Cross-platform mobile apps using React Native — one codebase for iOS and Android.",
    tags: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    icon: "pen",
    title: "UI/UX Design",
    desc: "Translating ideas into intuitive interfaces. Wireframes, prototypes, and design systems that scale.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: "cloud",
    title: "DevOps & Deployment",
    desc: "CI/CD pipelines, containerization, and cloud deployment to keep your product running smoothly.",
    tags: ["Docker", "AWS", "Vercel", "GitHub Actions"],
  },
];

export default function Services({ dark }) {
  const t = useT(dark);

  return (
    <section id="services" style={{ padding: "110px 0 90px", background: t.bg, transition: "background 0.4s" }}>
      <style>{`
        .srv-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          margin-top: 3rem;
        }
        .srv-card {
          background: ${dark ? "#1a1225" : t.card};
          border: 1px solid ${t.border};
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0;
          cursor: default;
          transition: border-color 0.2s;
        }
        .srv-card:hover {
          border-color: ${t.accent};
        }
        .srv-top-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.2rem;
        }
        .srv-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: ${dark ? "rgba(244,167,185,0.1)" : "rgba(201,116,143,0.08)"};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .srv-num {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          color: ${t.muted};
          opacity: 0.6;
        }
        .srv-title {
          font-weight: 700;
          font-size: 1rem;
          color: ${t.heading};
          margin-bottom: 0.55rem;
          line-height: 1.3;
        }
        .srv-desc {
          font-family: 'DM Mono', monospace;
          font-size: 0.78rem;
          color: ${t.muted};
          line-height: 1.7;
          flex: 1;
          margin-bottom: 1.4rem;
        }
        .srv-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          margin-top: auto;
        }
        .srv-tag {
          font-family: 'DM Mono', monospace;
          font-size: 0.7rem;
          color: ${t.muted};
          border: 1px solid ${t.border};
          border-radius: 999px;
          padding: 4px 12px;
          white-space: nowrap;
        }
        @media (max-width: 860px) {
          .srv-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 560px) {
          .srv-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 3rem" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: t.accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ display: "inline-block", width: 28, height: 1.5, background: t.accent }} />
            WHAT CAN I DO
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 800, color: t.heading, marginBottom: "1rem" }}>
            Areas of <em style={{ fontStyle: "italic", color: t.accent }}>Expertise</em>
          </h2>
          <p style={{ fontFamily: "'DM Mono', monospace", color: t.muted, fontSize: "1rem", lineHeight: 1.72, maxWidth: 560 }}>
            End-to-end development across the full stack — from idea to shipped product.
          </p>
        </FadeIn>

        <div className="srv-grid">
          {SERVICES.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.07}>
              <div className="srv-card">
                <div className="srv-top-row">
                  <div className="srv-icon-wrap">
                    <Ico name={s.icon} size={20} color={t.accent} />
                  </div>
                  <span className="srv-num">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="srv-title">{s.title}</div>
                <div className="srv-desc">{s.desc}</div>
                <div className="srv-tags">
                  {s.tags.map(tag => (
                    <span className="srv-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}