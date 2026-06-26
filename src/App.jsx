import { useState, useEffect } from "react";
import { useT } from "./theme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NAV = ["home","about","services","projects","skills","certifications","contact"];

export default function App() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const t = useT(dark);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const curr = NAV.map(id => document.getElementById(id)).find(s => {
        if (!s) return false;
        const r = s.getBoundingClientRect();
        return r.top <= 80 && r.bottom > 80;
      });
      if (curr) setActive(curr.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: t.bg, color: t.text, minHeight: "100vh", overflowX: "hidden", transition: "background 0.4s, color 0.4s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #c9748f; border-radius: 3px; }
        @keyframes floatUp { 0%{transform:translateY(0) rotate(0deg);opacity:0} 20%{opacity:.25} 80%{opacity:.15} 100%{transform:translateY(-110vh) rotate(180deg);opacity:0} }
        @keyframes pulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.08)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        input:focus, textarea:focus { border-color: #c9748f !important; box-shadow: 0 0 0 3px rgba(201,116,143,0.15); outline: none; }
      `}</style>

      <Navbar dark={dark} setDark={setDark} scrolled={scrolled} active={active} go={go} />
      <Hero dark={dark} go={go} />
      <About dark={dark} />
      <Services dark={dark} />
      <Projects dark={dark} />
      <Skills dark={dark} />
      <Certifications dark={dark} />
      <Contact dark={dark} />
      <Footer dark={dark} />
    </div>
  );
}
