import { motion } from "framer-motion";
import {
  MapPin,
  Briefcase,
  CalendarClock,
  GraduationCap,
  Download,
} from "lucide-react";

import SectionTitle from "../SectionTitle";
import StatCounter from "../StatCounter";
import { fadeUp, slideInRight } from "../../hooks/useScrollAnimation";
import { contactInfo } from "../../data/socialLinks";

const stats = [
  { target: 4, suffix: "+", label: "Projects shipped" },
  { target: 15, suffix: "+", label: "Technologies" },
  { target: 1, suffix: "+", label: "Year experience" },
  { target: 1, suffix: "", label: "Certification" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Title */}
        <SectionTitle
          kicker="About"
          title="A full stack developer who cares about the details."
          description="B.Tech in Computer Science, now building CRM and enterprise applications end to end — scalable backend services, REST APIs, and accessible, high-performing frontend interfaces."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT CARD */}
          <motion.div {...slideInRight} className="order-2 lg:order-1">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6">

              {/* Profile */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--bg-elevated-2)] font-display text-xl text-[var(--accent)]">
                  SM
                </div>

                <div>
                  <h3 className="font-display text-base font-medium">
                    {contactInfo.name}
                  </h3>

                  <p className="text-sm text-[var(--text-muted)]">
                    {contactInfo.role}
                  </p>
                </div>
              </div>

              {/* Personal Information */}
              <ul className="mt-6 space-y-4 text-sm">

                {/* Location */}
                <li className="flex items-center gap-3 text-[var(--text-muted)]">
                  <MapPin
                    size={16}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  {contactInfo.location}
                </li>

                {/* Job */}
                <li className="flex items-center gap-3 text-[var(--text-muted)]">
                  <Briefcase
                    size={16}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  Full Stack Developer at Infoprolearning
                </li>

                {/* Experience */}
                <li className="flex items-center gap-3 text-[var(--text-muted)]">
                  <CalendarClock
                    size={16}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  1+ year of full stack experience
                </li>

                {/* Education */}
                <li className="flex items-center gap-3 text-[var(--text-muted)]">
                  <GraduationCap
                    size={16}
                    className="text-[var(--accent)]"
                    aria-hidden="true"
                  />

                  B.Tech CSE, Sunder Deep Engineering College
                </li>

              </ul>

              {/* Availability */}
              <div className="mt-6 flex items-center gap-2 rounded-md border border-[var(--accent-2)]/30 bg-[var(--accent-2)]/10 px-3 py-2 text-sm text-[var(--accent-2-strong)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent-2)]" />
                {contactInfo.availability}
              </div>

              {/* Download Resume */}
              <a
                href="/Sudhir_Resume.pdf"
                download="Sudhir_Resume.pdf"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-[var(--accent)] bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              >
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            {...fadeUp}
            className="order-1 flex flex-col gap-6 lg:order-2"
          >

            {/* Paragraph 1 */}
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              I'm a Full Stack Developer with over a year of experience in
              Node.js and React.js, specialising in CRM and enterprise
              application development. I build scalable backend services,
              REST APIs, and dynamic frontend interfaces, with a consistent
              focus on accessibility (WCAG 2.1) and performance optimisation.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              At Infoprolearning, I work on live CRM and enterprise
              applications end to end — from requirements analysis through
              deployment — in an Agile environment. Earlier, at JPR
              Technosoft, I shipped production features across the MERN
              stack, including role-based access control, payment
              integrations, and notification services.
            </p>

            {/* Stats */}
            <div className="mt-4 grid grid-cols-2 gap-6 border-t border-[var(--border)] pt-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <StatCounter
                  key={stat.label}
                  {...stat}
                />
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}