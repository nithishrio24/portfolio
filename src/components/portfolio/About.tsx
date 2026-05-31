import { motion } from "framer-motion";

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                01 — About
              </div>
              <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-6xl">
                A mind for
                <br />
                <span className="text-muted-foreground italic">machines & Analytics.</span>
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal delay={0.15}>
              <p className="font-display text-2xl font-light leading-snug tracking-tight md:text-4xl">
                <span className="text-foreground">AI & ML Engineer (2026 graduate)</span>{" "}
                <span className="text-muted-foreground">
                  with hands-on experience building real-world AI systems and intelligent
                  analytics solutions. Skilled in Generative AI, Machine Learning, FastAPI,
                  TensorFlow, and modern data analytics tools. Passionate about solving
                  practical problems through AI innovation, predictive systems, and
                  interactive data visualization.
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border md:grid-cols-4">
                {[
                  { k: "2026", v: "Graduation" },
                  { k: "4+", v: "Projects" },
                  { k: "20+", v: "Tools" },
                  { k: "8.069", v: "CGPA" },
                ].map((s) => (
                  <div
                    key={s.v}
                    className="bg-card p-6 transition-colors hover:bg-accent"
                  >
                    <div className="font-display text-3xl font-semibold tracking-tighter md:text-4xl">
                      {s.k}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {s.v}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
