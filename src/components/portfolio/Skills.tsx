import { motion } from "framer-motion";

const GROUPS = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "Gemini AI", level: 90 },
      { name: "TensorFlow", level: 88 },
      { name: "PyTorch", level: 82 },
      { name: "CNN", level: 85 },
      { name: "NLP", level: 84 },
      { name: "Hugging Face", level: 86 },
    ],
  },
  {
    title: "Data Analytics",
    items: [
      { name: "Power BI", level: 92 },
      { name: "Excel", level: 90 },
      { name: "Pandas", level: 94 },
      { name: "NumPy", level: 92 },
      { name: "Matplotlib", level: 86 },
      { name: "Seaborn", level: 84 },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "FastAPI", level: 88 },
      { name: "HF Transformers", level: 84 },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 92 },
      { name: "AWS", level: 75 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
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
              02 — Capabilities
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-7xl">
              The toolkit.
            </h2>
          </div>
          <div className="max-w-sm text-sm text-muted-foreground">
            A focused stack spanning generative AI, deep learning, and modern data
            analytics — chosen to ship production-grade systems.
          </div>
        </motion.div>

        <div className="space-y-px overflow-hidden rounded-2xl border border-border">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className="grid grid-cols-1 gap-6 bg-card p-8 md:grid-cols-12 md:gap-10"
            >
              <div className="md:col-span-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  / {String(gi + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  {g.title}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-x-10 gap-y-5 md:col-span-9 md:grid-cols-2">
                {g.items.map((s, i) => (
                  <SkillBar key={s.name} skill={s} delay={i * 0.05} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill, delay }: { skill: { name: string; level: number }; delay: number }) {
  return (
    <div className="group">
      <div className="mb-2 flex items-baseline justify-between">
        <span className="font-display text-base font-medium">{skill.name}</span>
        <span className="font-mono text-[10px] text-muted-foreground">
          {String(skill.level).padStart(2, "0")}
        </span>
      </div>
      <div className="relative h-[2px] overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-y-0 left-0 bg-white shadow-[0_0_12px_oklch(1_0_0/0.6)] transition-all duration-300 group-hover:shadow-[0_0_20px_oklch(1_0_0/0.8)]"
        />
      </div>
    </div>
  );
}
