import { useState } from "react";
import { useT } from "../theme";
import { FadeIn } from "./shared";
import { Ico } from "./icons";

// ── Paste your Formspree URL here (https://formspree.io → New Form → copy endpoint)
const FORMSPREE_URL = "https://formspree.io/f/mbdvgdwq";

const CONTACTS = [
  { icon: "mail",     label: "Email",    val: "niris.camua@gmail.com",          href: "mailto:niris.camua@gmail.com" },
  { icon: "linkedin", label: "LinkedIn", val: "nicole-camua0423",               href: "https://www.linkedin.com/in/nicole-camua0423/" },
  { icon: "github",   label: "GitHub",   val: "ncamuaa",                        href: "https://github.com/ncamuaa" },
  { icon: "globe",    label: "Timezone", val: "PHT (UTC+8) · Remote",           href: null },
];

export default function Contact({ dark }) {
  const t = useT(dark);
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) { setStatus("validate"); return; }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = {
    width: "100%", padding: "12px 14px",
    background: t.card, border: `1px solid ${t.border}`,
    borderRadius: 10, color: t.text, fontSize: "0.95rem",
    fontFamily: "'DM Sans', sans-serif", outline: "none", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ padding: "110px 0 90px", background: t.bg, transition: "background 0.4s" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 3rem" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: t.accent, letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "0.5rem" }}>// contact</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.9rem,4vw,2.9rem)", fontWeight: 800, color: t.heading, marginBottom: "1rem" }}>Let's Build Together</h2>
          <p style={{ color: t.muted, fontSize: "1.02rem", lineHeight: 1.72, maxWidth: 540 }}>Have a project in mind? I'm available for freelance, contracts, and full-time roles.</p>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginTop: "3rem", alignItems: "start" }}>

          {/* ── FORM ── */}
          <FadeIn delay={0.1}>
            <div>
              {[
                { label: "name",    name: "name",    type: "input",    ph: "Your Name" },
                { label: "email",   name: "email",   type: "input",    ph: "your@email.com" },
                { label: "subject", name: "subject", type: "input",    ph: "Project inquiry" },
                { label: "message", name: "message", type: "textarea", ph: "Tell me about your project..." },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: "1.2rem" }}>
                  <label style={{ display: "block", marginBottom: "0.4rem", fontSize: "0.82rem", fontWeight: 600, color: t.muted, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                    {f.label}
                  </label>
                  {f.type === "input"
                    ? <input name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.ph} style={inputStyle} />
                    : <textarea name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.ph} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                  }
                </div>
              ))}

              {/* Status messages */}
              {status === "validate" && (
                <div style={{ marginBottom: "1rem", padding: "12px 16px", background: "rgba(224,85,133,0.08)", border: "1px solid rgba(224,85,133,0.25)", borderRadius: 10, color: t.accent, fontSize: "0.88rem", fontWeight: 600 }}>
                  Please fill in your name, email, and message.
                </div>
              )}
              {status === "success" && (
                <div style={{ marginBottom: "1rem", padding: "12px 16px", background: "rgba(100,200,120,0.1)", border: "1px solid rgba(100,200,120,0.3)", borderRadius: 10, color: "#3a9a50", fontSize: "0.88rem", fontWeight: 600 }}>
                  Message sent! I'll get back to you within 24 hours. 🌸
                </div>
              )}
              {status === "error" && (
                <div style={{ marginBottom: "1rem", padding: "12px 16px", background: "rgba(220,80,80,0.08)", border: "1px solid rgba(220,80,80,0.25)", borderRadius: 10, color: "#cc4444", fontSize: "0.88rem", fontWeight: 600 }}>
                  Something went wrong. Email me directly at niris.camua@gmail.com
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  width: "100%", padding: "14px",
                  background: status === "sending" ? t.muted : `linear-gradient(135deg,${t.accent},#a05070)`,
                  color: "#fff", border: "none", borderRadius: 30, fontWeight: 700,
                  fontSize: "0.95rem", cursor: status === "sending" ? "not-allowed" : "pointer",
                  boxShadow: "0 8px 24px rgba(201,116,143,0.28)",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                  transition: "background 0.2s",
                }}
              >
                <Ico name="send" size={16} color="#fff" />
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </div>
          </FadeIn>

          {/* ── CONTACT INFO ── */}
          <FadeIn delay={0.2}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CONTACTS.map(c => (
                <a key={c.label} href={c.href || undefined} target={c.href ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ display: "flex", gap: "1rem", alignItems: "center", background: t.card, border: `1px solid ${t.border}`, borderRadius: 14, padding: "1.2rem", textDecoration: "none", cursor: c.href ? "pointer" : "default", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={e => { if (c.href) { e.currentTarget.style.borderColor = t.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: dark ? "rgba(244,167,185,0.1)" : "rgba(201,116,143,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Ico name={c.icon} size={17} color={t.accent} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.85rem", color: t.heading, marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: "0.87rem", color: t.muted }}>{c.val}</div>
                  </div>
                </a>
              ))}

              <div style={{ background: dark ? "rgba(244,167,185,0.06)" : "rgba(201,116,143,0.05)", border: `1px solid ${t.border}`, borderRadius: 14, padding: "1.5rem", textAlign: "center" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: dark ? "rgba(244,167,185,0.12)" : "rgba(201,116,143,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 0.75rem" }}>
                  <Ico name="heart" size={18} color={t.accent} />
                </div>
                <div style={{ fontWeight: 700, color: t.heading, marginBottom: 4, fontSize: "0.95rem" }}>Available for Work</div>
                <div style={{ fontSize: "0.83rem", color: t.muted }}>Response within 24 hours</div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}