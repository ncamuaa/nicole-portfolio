import { useT } from "../theme";

export default function Footer({ dark }) {
  const t = useT(dark);
  return (
    <footer style={{ background: dark ? "#0e0610" : "#1a0814", color: "#9a6878", textAlign: "center", padding: "2.2rem", fontFamily: "'DM Mono', monospace", fontSize: "0.82rem" }}>
      <div>© Nicole Iris · 2026</div>
    </footer>
  );
}