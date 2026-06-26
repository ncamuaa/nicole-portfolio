import { useT } from "../theme";
import { FadeIn, HoverCard } from "./shared";
import { Ico } from "./icons";

const CERTS = [
  {
    icon: "layers",
    title: "Excel Associate",
    full: "Microsoft Office Specialist: Excel Associate (Office 2019)",
    org: "Microsoft",
    year: "2023",
  },
  {
    icon: "cpu",
    title: "Access Expert",
    full: "Microsoft Office Specialist: Microsoft Access Expert (Office 2019)",
    org: "Microsoft",
    year: "2025",
  },
  {
    icon: "award",
    title: "Intro to Cybersecurity",
    full: "Introduction to Cybersecurity",
    org: "Cisco",
    year: "2025",
  },
  {
    icon: "server",
    title: "IT Specialist",
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.4rem", marginTop: "3rem" }}>
          {CERTS.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <HoverCard dark={dark} t={t} style={{ background: t.card, border: `1px solid ${t.border}`, borderRadius: 16, padding: "1.8rem", cursor: "default", display: "flex", gap: "1.2rem", alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: dark ? "rgba(244,167,185,0.1)" : "rgba(201,116,143,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Ico name={c.icon} size={20} color={t.accent} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", color: t.heading, marginBottom: "0.25rem" }}>{c.full}</div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: t.accent, marginBottom: "0.2rem" }}>{c.org}</div>
                  <div style={{ fontSize: "0.78rem", color: t.muted }}>{c.year}</div>
                </div>
              </HoverCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}