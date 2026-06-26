import { useT } from "../theme";
import { TypeWriter } from "./shared";
import nicolePic from "../assets/nicole.jpg";

function Petals({ dark }) {
  const petals = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 6.5) % 90}%`,
    delay: `${(i * 0.6) % 8}s`,
    dur: `${10 + (i * 0.9) % 12}s`,
    size: 6 + (i * 0.7) % 10,
    opacity: 0.12 + (i * 0.015) % 0.2,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {petals.map(p => (
        <div key={p.id} style={{
          position: "absolute", bottom: "-20px", left: p.left,
          width: p.size, height: p.size,
          borderRadius: "50% 0 50% 0",
          background: dark ? "#f4a7b9" : "#c9748f",
          opacity: p.opacity,
          animation: `floatUp ${p.dur} ${p.delay} ease-in-out infinite`,
        }} />
      ))}
      <div style={{
        position: "absolute", top: "10%", right: "15%",
        width: 420, height: 420, borderRadius: "50%",
        background: dark
          ? "radial-gradient(circle,rgba(244,167,185,0.08) 0%,transparent 70%)"
          : "radial-gradient(circle,rgba(201,116,143,0.12) 0%,transparent 70%)",
        animation: "pulse 7s ease-in-out infinite",
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "5%",
        width: 320, height: 320, borderRadius: "50%",
        background: dark
          ? "radial-gradient(circle,rgba(196,160,216,0.07) 0%,transparent 70%)"
          : "radial-gradient(circle,rgba(212,184,224,0.15) 0%,transparent 70%)",
        animation: "pulse 9s ease-in-out infinite reverse",
      }} />
    </div>
  );
}

export default function Hero({ dark, go }) {
  const t = useT(dark);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      background: dark
        ? "linear-gradient(145deg,#1a0a14 0%,#140810 60%,#1f0d18 100%)"
        : "linear-gradient(145deg,#fff5f8 0%,#fce8f0 55%,#f8f0ff 100%)",
      position: "relative", overflow: "hidden",
    }}>
      <Petals dark={dark} />

      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 3rem",
        display: "grid", gridTemplateColumns: "1fr 340px",
        gap: "5rem", alignItems: "center",
        position: "relative", zIndex: 1, width: "100%",
      }}>

        {/* LEFT: text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.8rem" }}>
            <div style={{ width: 28, height: 2, background: t.accent, borderRadius: 2 }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: t.accent, letterSpacing: "0.1em" }}>
              hello world · welcome
            </span>
          </div>

          {/* Nicole Iris on the same line */}
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem,7.5vw,5.5rem)", fontWeight: 900, color: t.heading, lineHeight: 1.06, letterSpacing: "-0.02em", marginBottom: "0.8rem" }}>
            Nicole <em style={{ fontStyle: "italic", color: t.accent }}>Iris</em>
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: t.accent, background: dark ? "rgba(244,167,185,0.12)" : "rgba(201,116,143,0.1)", border: `1px solid ${dark ? "rgba(244,167,185,0.25)" : "rgba(201,116,143,0.25)"}`, padding: "4px 12px", borderRadius: "20px" }}>Backend Developer</span>
            <span style={{ color: t.muted, fontSize: "0.75rem" }}>·</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.75rem", color: t.accent, background: dark ? "rgba(244,167,185,0.12)" : "rgba(201,116,143,0.1)", border: `1px solid ${dark ? "rgba(244,167,185,0.25)" : "rgba(201,116,143,0.25)"}`, padding: "4px 12px", borderRadius: "20px" }}>Full-Stack Developer</span>
          </div>

          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "clamp(0.95rem,2vw,1.2rem)", color: t.accent2, marginBottom: "1rem", minHeight: "1.6em" }}>
            <TypeWriter texts={["Full-Stack Developer", "React Specialist", "UI/UX Engineer", "Open-Source Builder"]} />
          </div>

          <p style={{ color: t.muted, fontSize: "1.02rem", lineHeight: 1.72, maxWidth: 500, marginBottom: "1.4rem" }}>
            I craft fast, beautiful, and purposeful web applications — turning ideas into polished digital experiences with clean code and intentional design.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.8rem" }}>
            {["React", "Node.js", "TypeScript", "PostgreSQL", "Tailwind", "Docker"].map(tag => (
              <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: t.accent, background: dark ? "rgba(244,167,185,0.1)" : "rgba(201,116,143,0.1)", border: `1px solid ${dark ? "rgba(244,167,185,0.2)" : "rgba(201,116,143,0.2)"}`, padding: "4px 12px", borderRadius: "20px" }}>{tag}</span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
            <button onClick={() => go("projects")} style={{ background: `linear-gradient(135deg,${t.accent},#a05070)`, color: "#fff", border: "none", padding: "13px 30px", borderRadius: 30, fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", boxShadow: "0 8px 24px rgba(201,116,143,0.3)", fontFamily: "'DM Sans',sans-serif" }}>View My Work</button>
            <button onClick={() => go("contact")} style={{ background: "transparent", color: t.accent, border: `1.5px solid ${t.accent}`, padding: "13px 30px", borderRadius: 30, fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", fontFamily: "'DM Sans',sans-serif" }}>Get in Touch</button>
          </div>
        </div>

        {/* RIGHT: photo */}
        <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>

          {/* Big bold N watermark */}
          <div style={{
            position: "absolute", zIndex: 0, pointerEvents: "none",
            fontFamily: "'Playfair Display', serif",
            fontSize: "22rem", fontWeight: 900, fontStyle: "italic",
            color: dark ? "rgba(244,167,185,0.06)" : "rgba(201,116,143,0.08)",
            lineHeight: 1, userSelect: "none",
            top: "50%", left: "50%",
            transform: "translate(-58%, -52%)",
          }}>N</div>

          {/* Dot grid top-right */}
          <svg style={{ position: "absolute", top: -50, right: -50, opacity: 0.35, pointerEvents: "none" }} width="200" height="200" viewBox="0 0 200 200">
            {Array.from({ length: 6 }, (_, row) => Array.from({ length: 6 }, (_, col) => (
              <circle key={`tr-${row}-${col}`} cx={col * 34 + 17} cy={row * 34 + 17} r="3" fill={dark ? "#f4a7b9" : "#c9748f"} />
            )))}
          </svg>

          {/* Dot grid bottom-left */}
          <svg style={{ position: "absolute", bottom: -40, left: -50, opacity: 0.25, pointerEvents: "none" }} width="150" height="150" viewBox="0 0 150 150">
            {Array.from({ length: 5 }, (_, row) => Array.from({ length: 5 }, (_, col) => (
              <circle key={`bl-${row}-${col}`} cx={col * 30 + 15} cy={row * 30 + 15} r="3" fill={dark ? "#f4a7b9" : "#c9748f"} />
            )))}
          </svg>

          {/* Bold outer rings */}
          <div style={{ position: "absolute", width: 460, height: 460, borderRadius: "50%", border: `2px solid ${dark ? "rgba(244,167,185,0.12)" : "rgba(201,116,143,0.18)"}`, pointerEvents: "none" }} />
          <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", border: `1.5px solid ${dark ? "rgba(244,167,185,0.08)" : "rgba(201,116,143,0.12)"}`, pointerEvents: "none" }} />

          <div style={{ position: "absolute", inset: -12, borderRadius: "50%", border: `2px dashed ${t.accent}`, opacity: 0.35, animation: "spin 18s linear infinite" }} />
          <div style={{ position: "absolute", inset: -24, borderRadius: "50%", background: dark ? "radial-gradient(circle,rgba(244,167,185,0.18) 0%,transparent 70%)" : "radial-gradient(circle,rgba(201,116,143,0.18) 0%,transparent 70%)" }} />
          <div style={{ width: 300, height: 300, borderRadius: "50%", overflow: "hidden", border: `4px solid ${t.accent}`, boxShadow: dark ? "0 20px 60px rgba(244,167,185,0.2)" : "0 20px 60px rgba(201,116,143,0.25)", position: "relative", zIndex: 1 }}>
            <img src={nicolePic} alt="Nicole Iris" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          </div>

          <div style={{ position: "absolute", bottom: 10, right: -10, background: dark ? "#261018" : "#fff", border: `1px solid ${t.border}`, borderRadius: 20, padding: "8px 14px", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 2, fontFamily: "'DM Mono', monospace", fontSize: "0.72rem" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#6ac37a", flexShrink: 0 }} />
            <span style={{ color: t.text, whiteSpace: "nowrap" }}>Open to work</span>
          </div>

          <div style={{ position: "absolute", top: 20, left: -20, background: dark ? "#261018" : "#fff", border: `1px solid ${t.border}`, borderRadius: 20, padding: "8px 14px", display: "flex", alignItems: "center", gap: "6px", boxShadow: "0 8px 24px rgba(0,0,0,0.1)", zIndex: 2, fontFamily: "'DM Mono', monospace", fontSize: "0.72rem" }}>
            <span>📍</span>
            <span style={{ color: t.text, whiteSpace: "nowrap" }}>PH · Remote OK</span>
          </div>
        </div>

      </div>
    </section>
  );
}