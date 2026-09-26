import { motion } from "framer-motion";
import { ArrowRight, Mail, Download } from "lucide-react";
import Button from "../Button";
import SocialLinks from "../SocialLinks";
import Terminal from "../Terminal";
import { socialLinks, contactInfo } from "../../data/socialLinks";

export default function Hero() {
  const resumeLink = socialLinks.find((link) => link.id === "resume");

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-96 w-96 rounded-full bg-[var(--accent)]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1.5 text-xs text-[var(--text-muted)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-2)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-2)]" />
            </span>
            {contactInfo.availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-balance text-3xl font-medium leading-[1.15] sm:text-5xl"
          >
            Sudhir Mahur builds
            <br />
            <span className="text-[var(--accent)]">full stack experiences</span>
            <br />
            that feel effortless.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-lg text-sm leading-relaxed text-[var(--text-muted)] sm:text-base"
          >
            Full Stack Developer specialising in CRM and enterprise
            applications — building scalable Node.js backends, REST APIs, and
            accessible, high-performance React interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button onClick={() => scrollTo("projects")} icon={ArrowRight}>
              View projects
            </Button>
            <Button
              variant="secondary"
              onClick={() => scrollTo("contact")}
              icon={Mail}
              iconPosition="left"
            >
              Contact me
            </Button>
            <Button as="a" href={resumeLink.href} variant="ghost" icon={Download} download>
              Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
