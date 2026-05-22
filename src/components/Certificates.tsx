import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const CERTIFICATES = [
  {
    title: "TCS ION Career Edge - Young Professional",
    issuer: "TCS iON",
    category: "Professional Development",
    badgeClass: "border border-border bg-accent text-accent-foreground",
    certificateUrl: "/TCS_ION_Certificate.pdf",
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    category: "Cloud & Infrastructure",
    badgeClass: "border border-border text-muted-foreground",
    certificateUrl: "/NPTEL_Cloud_Computing_Certificate.pdf",
  },
  {
    title: "Applied Generative AI Certification",
    issuer: "Infosys Springboard",
    category: "Artificial Intelligence",
    badgeClass: "border border-border bg-accent text-accent-foreground",
    certificateUrl: "/Infosys_GenAI_Certificate.pdf",
  },
  {
    title: "Python Fundamentals",
    issuer: "Infosys Springboard",
    category: "Programming",
    badgeClass: "border border-border text-muted-foreground",
    certificateUrl: "/Python_Fundamentals_Certificate.pdf",
  },
  {
    title: "Responsible AI: Applying AI Principles with Google Cloud",
    issuer: "Google Cloud",
    category: "Artificial Intelligence",
    badgeClass: "border border-border bg-accent text-accent-foreground",
    certificateUrl: "/Google_Responsible_AI_Certificate.pdf",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    category: "Data & Analytics",
    badgeClass: "border border-border text-muted-foreground",
    certificateUrl: "/Data_Analytics_Essentials_Certificate.pdf",
  },
] as const;

export function Certificates() {
  return (
    <section id="certificates" className="relative px-6 py-32">
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
              05 — Certificates
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-7xl">
              <span className="text-gradient">Certificates.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Courses & training programs I have completed
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {CERTIFICATES.map((cert, i) => (
            <CertificateCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({
  cert,
  index,
}: {
  cert: (typeof CERTIFICATES)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl glass p-7 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-12px_oklch(1_0_0/0.15)]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10" />
      <div className="relative">
        <Award className="h-5 w-5 text-muted-foreground" strokeWidth={1.5} />
        <span
          className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${cert.badgeClass}`}
        >
          {cert.category}
        </span>
        <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
          {cert.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
        <a
          href={cert.certificateUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View Certificate <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  );
}
