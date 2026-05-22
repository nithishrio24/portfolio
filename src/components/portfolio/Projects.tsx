import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import safeher from "@/assets/proj-safeher.jpg";
import rover from "@/assets/proj-rover.jpg";
import f1 from "@/assets/proj-f1.jpg";
import sales from "@/assets/proj-sales.jpg";

const PROJECTS = [
  {
    n: "01",
    title: "SafeHer",
    desc: "Real-time voice distress detection system using Gemini AI for emergency safety monitoring.",
    tech: ["Python", "Gemini AI", "FastAPI"],
    img: safeher,
    tag: "AI · Safety",
  },
  {
    n: "02",
    title: "Plant Disease Detection Rover",
    desc: "ESP32-CAM based intelligent rover using deep learning for crop disease identification.",
    tech: ["ESP32-CAM", "TensorFlow", "Deep Learning"],
    img: rover,
    tag: "Hardware · CV",
  },
  {
    n: "03",
    title: "F1 Race Strategy Dashboard",
    desc: "Interactive analytics dashboard for Formula 1 race strategy analysis.",
    tech: ["Power BI", "Python", "Data Viz"],
    img: f1,
    tag: "Analytics",
  },
  {
    n: "04",
    title: "AI-Powered Sales Forecasting",
    desc: "Predictive analytics dashboard for business sales forecasting.",
    tech: ["Power BI", "Python", "ML"],
    img: sales,
    tag: "Predictive · BI",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              03 — Selected Work
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-7xl">
              Featured projects.
            </h2>
          </div>
          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            04 / 04
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, i }: { p: (typeof PROJECTS)[number]; i: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative block overflow-hidden rounded-3xl border border-border bg-card ${
        i % 3 === 0 ? "md:translate-y-0" : "md:translate-y-12"
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img
          src={p.img}
          alt={p.title}
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full glass-strong px-3 py-1 font-mono text-[10px] uppercase tracking-widest">
          {p.tag}
        </div>
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          / {p.n}
        </div>
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-semibold tracking-tight">
            {p.title}
          </h3>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:rotate-45 group-hover:border-white group-hover:bg-white group-hover:text-black">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
