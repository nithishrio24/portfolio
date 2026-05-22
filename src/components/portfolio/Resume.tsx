import { useEffect, useState } from "react";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowDownToLine, Github, Loader2, Mail, Send, FileText } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(80),
  email: z.string().email("Enter a valid email").max(120),
  message: z.string().min(1, "Message is required").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const CONTACT_EMAIL_B64 = "bml0aGlzaG5zMjAwNEBnbWFpbC5jb20=";

function ContactEmailLink() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    setEmail(atob(CONTACT_EMAIL_B64));
  }, []);

  return (
    <a
      href={email ? `mailto:${email}` : undefined}
      className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:bg-accent"
    >
      <div className="flex items-center gap-4">
        <Mail className="h-5 w-5" />
        <div>
          <div className="font-display font-medium">Email</div>
          <div className="font-mono text-xs text-muted-foreground">
            {email ?? "\u00a0"}
          </div>
        </div>
      </div>
      <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
        →
      </span>
    </a>
  );
}

export function Resume() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-3xl border border-border bg-card p-10 md:p-16"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div
            className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full opacity-50 blur-3xl transition-opacity duration-700 group-hover:opacity-80"
            style={{
              background: "radial-gradient(circle, oklch(1 0 0 / 0.15), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                05 — Resume
              </div>
              <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-6xl">
                The full
                <br />
                <span className="text-muted-foreground italic">story.</span>
              </h2>
              <p className="mt-6 max-w-md text-muted-foreground">
                Download the complete CV with project deep-dives, certifications, and
                academic background.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <motion.a
                href="/NITHISH_RESUME_NS.pdf"
                download="NITHISH_RESUME_NS.pdf"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group/btn relative flex flex-col items-center gap-6 rounded-2xl glass-strong p-10"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-white text-black transition-transform duration-500 group-hover/btn:rotate-6">
                  <FileText className="h-10 w-10" strokeWidth={1.5} />
                </div>
                <div className="text-center">
                  <div className="font-display text-xl font-semibold tracking-tight">
                    NITHISH RESUME NS.pdf
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    PDF · Updated 2026
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium text-black transition-all group-hover/btn:gap-3">
                  <ArrowDownToLine className="h-4 w-4" />
                  Download Resume
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID;
    if (!formspreeId) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          subject: `Portfolio inquiry from ${data.name}`,
          message: data.message,
        }),
      });
      if (!res.ok) throw new Error("Formspree request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="md:col-span-5"
          >
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              06 — Contact
            </div>
            <h2 className="mt-6 font-display text-5xl font-semibold tracking-tighter md:text-7xl">
              Let&rsquo;s
              <br />
              build.
            </h2>
            <p className="mt-6 max-w-sm text-muted-foreground">
              Open to AI/ML engineering, data analyst, and research roles starting 2026.
              Drop a message or reach out directly.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border bg-card p-5 transition-all hover:bg-accent"
              >
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5" />
                  <div>
                    <div className="font-display font-medium">GitHub</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      @nithish-s
                    </div>
                  </div>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
              <ContactEmailLink />
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="md:col-span-7"
          >
            <div className="space-y-6 rounded-3xl border border-border bg-card p-8 md:p-10">
              <Field
                label="Name"
                maxLength={80}
                error={errors.name?.message}
                inputProps={register("name")}
              />
              <Field
                label="Email"
                type="email"
                maxLength={120}
                error={errors.email?.message}
                inputProps={register("email")}
              />
              <div>
                <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="mt-3 w-full resize-none border-0 border-b border-border bg-transparent pb-2 font-display text-lg outline-none transition-colors focus:border-foreground"
                  placeholder="Tell me about your project…"
                  {...register("message")}
                />
                {errors.message?.message && (
                  <p className="mt-2 font-mono text-[10px] text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>
              {status === "success" && (
                <p className="text-sm text-muted-foreground">
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-destructive">
                  Something went wrong. Please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-medium text-black transition-all hover:gap-3 hover:shadow-[0_0_40px_oklch(1_0_0/0.3)] disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    Sending…
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </>
                ) : (
                  <>
                    Send message
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  type = "text",
  maxLength,
  error,
  inputProps,
}: {
  label: string;
  type?: string;
  maxLength?: number;
  error?: string;
  inputProps: UseFormRegisterReturn;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        maxLength={maxLength}
        className="mt-3 w-full border-0 border-b border-border bg-transparent pb-2 font-display text-lg outline-none transition-colors focus:border-foreground"
        placeholder={`Your ${label.toLowerCase()}`}
        {...inputProps}
      />
      {error && (
        <p className="mt-2 font-mono text-[10px] text-destructive">{error}</p>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <div className="font-display text-7xl font-semibold leading-none tracking-tighter md:text-9xl">
              NITHISH<span className="text-muted-foreground">.</span>S
            </div>
            <div className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              AI Engineer · Data Analyst · 2026
            </div>
          </div>
          <div className="flex flex-col gap-2 md:items-end">
            <a
              href="#home"
              className="font-mono text-xs uppercase tracking-widest hover:text-muted-foreground"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
