import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const y = window.scrollY + window.innerHeight / 3;
      let current = "home";
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
      className="fixed left-1/2 top-4 z-[9996] -translate-x-1/2"
    >
      <nav
        className={`glass-strong flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
          scrolled ? "scale-95" : "scale-100"
        }`}
      >
        <a
          href="#home"
          className="hidden px-4 font-display text-sm font-semibold tracking-tight sm:block"
        >
          NS<span className="text-muted-foreground">.</span>
        </a>
        <div className="hidden h-4 w-px bg-border sm:block" />
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="relative rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-4 sm:text-sm"
          >
            {active === s.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={`relative ${active === s.id ? "text-foreground" : ""}`}>
              {s.label}
            </span>
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
