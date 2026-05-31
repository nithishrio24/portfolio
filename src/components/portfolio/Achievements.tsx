import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, type LucideIcon } from "lucide-react";

interface Achievement {
  icon: LucideIcon;
  badge: string;
  badgeColor: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  tag: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: Trophy,
    badge: "1st Place",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    title: "Hackathon Winner — SafeHer AI",
    organization: "Sri Sairam Engineering College × IBM × 1M1B",
    location: "Chennai",
    description:
      "Won ₹20,000 prize for SafeHer — an AI-powered voice detection model built to enhance women's safety.",
    tag: "AI & Safety",
  },
  {
    icon: Award,
    badge: "Winner",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    title: "Innovothon — Plant Disease Detection",
    organization: "Innovothon",
    description:
      "Won ₹2,000 prize for Plant Disease Detection system powered by Deep Learning — our final year project.",
    tag: "Deep Learning",
  },
  {
    icon: BookOpen,
    badge: "Published",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    title: "International Conference Paper",
    organization:
      "2nd International Conference on New Trends in Science, Engineering, Technology & Management",
    description:
      "Presented a research paper on Next Gen Farming — Plant Disease Detection Powered by Deep Learning.",
    tag: "Research",
  },
];

function AchievementCard({
  achievement,
  delay,
}: {
  achievement: Achievement;
  delay: number;
}) {
  const Icon = achievement.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl glass p-6 md:p-8 transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_-12px_oklch(1_0_0/0.15)]"
    >
      <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/5 blur-3xl transition-all duration-700 group-hover:bg-white/10" />

      <div className="relative">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border glass">
            <Icon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <span
            className={`rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-wider border ${achievement.badgeColor}`}
          >
            {achievement.badge}
          </span>
        </div>

        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
          {achievement.title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          {achievement.organization}
          {achievement.location && ` • ${achievement.location}`}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {achievement.description}
        </p>

        <div className="mt-4 inline-flex rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {achievement.tag}
        </div>
      </div>
    </motion.div>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            04 — Recognition
          </div>
          <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-7xl">
            Achievements.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Recognition and milestones along the journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ACHIEVEMENTS.map((achievement, i) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
