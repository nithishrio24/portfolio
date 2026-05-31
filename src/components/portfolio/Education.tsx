import { motion } from "framer-motion";
import { Briefcase, Brain, ExternalLink, GraduationCap, type LucideIcon } from "lucide-react";

function InternshipCard({
  icon: Icon,
  duration,
  company,
  role,
  description,
  certificateUrl,
  delay,
}: {
  icon: LucideIcon;
  duration: string;
  company: string;
  role: string;
  description: string;
  certificateUrl: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-12px_oklch(1_0_0/0.15)]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10" />
      <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-2">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border glass">
            <Icon className="h-7 w-7" strokeWidth={1.5} />
          </div>
        </div>
        <div className="md:col-span-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {duration}
          </div>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
            {company}
          </h3>
          <p className="mt-3 text-lg text-muted-foreground">{role}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
          <a
            href={certificateUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            View Certificate <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
  return (
    <section id="education" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            04 — Education
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-7xl">
            Education & Internship.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 md:p-12"
        >
          <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10" />
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border glass">
                <GraduationCap className="h-7 w-7" />
              </div>
            </div>
            <div className="md:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                2022 — 2026
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                Sri Sairam College of Engineering
              </h3>
              <p className="mt-3 text-lg text-muted-foreground">
                B.E — Artificial Intelligence & Machine Learning
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                CGPA
              </div>
              <div className="mt-2 font-display text-6xl font-semibold tracking-tighter">
                8.<span className="text-muted-foreground">069</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 space-y-8">
          <InternshipCard
            icon={Briefcase}
            duration="2026 — 4 Months"
            company="Cloud Institution"
            role="Data Analyst Intern"
            description="Worked on Data Analytics projects using Excel, Power BI, Python and AWS"
            certificateUrl="/Cloud_Institution_Certificate.pdf"
            delay={0.2}
          />
          <InternshipCard
            icon={Brain}
            duration="2025 — 1 Month"
            company="Future Interns"
            role="Machine Learning Intern"
            description="Learned and implemented Machine Learning algorithms during the internship"
            certificateUrl="/Future_Interns_Certificate.pdf"
            delay={0.25}
          />
        </div>
      </div>
    </section>
  );
}
