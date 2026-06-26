import { useState, useEffect, useRef } from "react";

export function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

export function HoverCard({ children, style, dark, t }) {
  const [hov, setHov] = useState(false);
  return (
    <div style={{
      ...style,
      transform: hov ? "translateY(-5px)" : "translateY(0)",
      boxShadow: hov
        ? dark ? "0 16px 48px rgba(244,167,185,0.12)" : "0 16px 48px rgba(201,116,143,0.14)"
        : "0 2px 12px rgba(0,0,0,0.05)",
      borderColor: hov ? t.accent : t.border,
      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </div>
  );
}

export function TypeWriter({ texts }) {
  const [idx, setIdx] = useState(0);
  const [char, setChar] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const curr = texts[idx];
    const timer = setTimeout(() => {
      if (!del) {
        if (char < curr.length) setChar(c => c + 1);
        else setTimeout(() => setDel(true), 1800);
      } else {
        if (char > 0) setChar(c => c - 1);
        else { setDel(false); setIdx(i => (i + 1) % texts.length); }
      }
    }, del ? 40 : 85);
    return () => clearTimeout(timer);
  }, [char, del, idx, texts]);
  return (
    <span>
      {texts[idx].slice(0, char)}
      <span style={{ borderRight: "2px solid currentColor", animation: "blink 1s step-end infinite" }}>&nbsp;</span>
    </span>
  );
}
