import { useT } from "../theme";
import { FadeIn, HoverCard } from "./shared";
import { Ico } from "./icons";

const CERTS = [
  {
    icon: "layers",
    full: "Microsoft Office Specialist: Excel Associate (Office 2019)",
    org: "Microsoft",
    year: "2023",
  },
  {
    icon: "cpu",
    full: "Microsoft Office Specialist: Microsoft Access Expert (Office 2019)",
    org: "Microsoft",
    year: "2025",
  },
  {
    icon: "award",
    full: "Introduction to Cybersecurity",
    org: "Cisco",
    year: "2025",
  },
  {
    icon: "server",
    full: "IT Specialist: Device Configuration and Management",
    org: "Certiport",
    year: "2025",
  },
];

export default function Certifications({ dark }) {
  const t = useT(dark);

  return (
    <section id="certifications" style={{ padding: "110px 0 90px", background: t.bgAlt, transition: "background 0.4s" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 3rem" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: t.accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.5rem" }}>// certifications</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 800, color: t.heading, marginBottom: "1rem" }}>Credentials</h2>
          <p style={{ color: t.muted, fontSize: "1.02rem", lineHeight: 1.72, maxWidth: 540 }}>Certified across productivity, security, and IT — continuously leveling up.</p>
        </FadeIn>

        {/* Timeline */}
        <div style={{ position: "relative", marginTop: "2.5rem", paddingLeft: "2rem" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: "1.05rem", top: 0, bottom: 0,
            width: 2, background: `linear-gradient(to bottom, ${t.accent}, transparent)`
          }} />

          {CERTS.map((c, i) => (
            <FadeIn key={c.full} delay={i * 0.08}>
              <div style={{ position: "relative", marginBottom: "0.75rem", display: "flex", alignItems: "center" }}>
                {/* Dot */}
                <div style={{
                  position: "absolute", left: "-2rem",
                  width: 10, height: 10, borderRadius: "50%",
                  background: t.accent, border: `2px solid ${t.bgAlt}`,
                  flexShrink: 0, zIndex: 1
                }} />

                <HoverCard dark={dark} t={t} style={{
                  background: t.card, border: `1px solid ${t.border}`,
                  borderRadius: 12, padding: "0.9rem 1.2rem",
                  display: "flex", gap: "1rem", alignItems: "center",
                  width: "100%", cursor: "default"
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: dark ? "rgba(244,167,185,0.1)" : "rgba(201,116,143,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0
                  }}>
                    <Ico name={c.icon} size={17} color={t.accent} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: t.heading }}>{c.full}</div>
                    <div style={{ display: "flex", gap: "0.75rem", marginTop: "0.2rem" }}>
                      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: t.accent }}>{c.org}</span>
                      <span style={{ fontSize: "0.75rem", color: t.muted }}>{c.year}</span>
                    </div>
                  </div>
                </HoverCard>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}