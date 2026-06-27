import { Ico } from "./icons";
import logo from "../assets/logo.svg";

const NAV = ["home","about","services","projects","skills","certifications","contact"];

export default function Navbar({ dark, setDark, scrolled, active, go }) {
  const t = dark ? {
    navBg: "rgba(26,10,20,0.88)", border: "#3d1a28", accent: "#f4a7b9", muted: "#9a7080",
  } : {
    navBg: "rgba(255,248,251,0.92)", border: "#fad0e0", accent: "#e05585", muted: "#b0607a",
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0", height: 62,
      background: scrolled ? t.navBg : "transparent",
      backdropFilter: scrolled ? "blur(14px)" : "none",
      borderBottom: `1px solid ${scrolled ? t.border : "transparent"}`,
      transition: "all 0.35s",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 3rem", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>

      {/* ── Logo ── */}
      <button
        onClick={() => go("home")}
        style={{ background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
        aria-label="Go to home"
      >
        <img src={logo} alt="Nicole logo" width={36} height={36} style={{ display: "block" }} />
      </button>

      <ul style={{ display: "flex", gap: "1.6rem", alignItems: "center", listStyle: "none" }}>
        {NAV.map(id => (
          <li key={id}>
            <a onClick={() => go(id)} style={{
              fontFamily: "'DM Mono', monospace", fontSize: "0.76rem",
              color: active === id ? t.accent : t.muted,
              letterSpacing: "0.05em", cursor: "pointer",
              borderBottom: active === id ? `1.5px solid ${t.accent}` : "1.5px solid transparent",
              paddingBottom: "2px", transition: "color 0.2s",
            }}>{id}</a>
          </li>
        ))}
        <li>
          <button onClick={() => setDark(d => !d)} style={{
            display: "flex", alignItems: "center", gap: "6px",
            background: dark ? "#261018" : "#fce8f0",
            border: `1px solid ${t.border}`, borderRadius: 20,
            padding: "6px 14px", color: t.accent, cursor: "pointer",
            fontSize: "0.82rem", fontFamily: "'DM Mono', monospace", transition: "all 0.2s",
          }}>
            <Ico name={dark ? "flower" : "moon"} size={14} color={t.accent} />
            {dark ? "light" : "dark"}
          </button>
        </li>
      </ul>
      </div>
    </nav>
  );
}