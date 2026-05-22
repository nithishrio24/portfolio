import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    document.documentElement.classList.add("hide-cursor");
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      document.documentElement.classList.remove("hide-cursor");
    };
  }, []);

  return (
    <>
      <div
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 200ms",
        }}
      >
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>
      <div
        className="pointer-events-none fixed z-[9998] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, oklch(1 0 0 / 0.08) 0%, transparent 60%)",
          opacity: hidden ? 0 : 1,
          transition: "opacity 300ms, left 120ms ease-out, top 120ms ease-out",
        }}
      />
    </>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setP(scrolled * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-[9997] h-[2px] bg-transparent">
      <div
        className="h-full bg-white"
        style={{ width: `${p}%`, transition: "width 80ms linear" }}
      />
    </div>
  );
}

export function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="font-display text-4xl font-semibold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              NITHISH<span className="text-muted-foreground">.</span>S
            </motion.div>
            <div className="h-px w-48 overflow-hidden bg-border">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
