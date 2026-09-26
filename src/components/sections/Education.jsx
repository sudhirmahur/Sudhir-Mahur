import { motion } from "framer-motion";
import { GraduationCap, Award, CalendarClock } from "lucide-react";
import SectionTitle from "../SectionTitle";
import { fadeUp } from "../../hooks/useScrollAnimation";
import { education, certifications } from "../../data/education";

export default function Education() {
  return (
    <section id="education" className="py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          kicker="Education"
          title="Academic background."
          description="Foundations in computer science that continue to shape how I approach frontend engineering."
        />

        <div className="mt-14 flex flex-col gap-6">
          {education.map((edu) => (
            <motion.div
              key={edu.id}
              {...fadeUp}
              className="rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[var(--bg-elevated-2)] text-[var(--accent)]">
                  <GraduationCap size={20} aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-medium">{edu.degree}</h3>
                  <p className="text-[var(--text-muted)]">{edu.institute}</p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-[var(--text-muted)]">
                    <span className="flex items-center gap-1.5">
                      <CalendarClock size={14} aria-hidden="true" />
                      {edu.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Award size={14} aria-hidden="true" />
                      CGPA: {edu.cgpa}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--text-muted)]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {certifications.length > 0 && (
            <motion.div {...fadeUp} className="mt-4">
              <h3 className="mb-4 font-display text-lg font-medium">Certifications</h3>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-4"
                  >
                    <Award size={18} className="text-[var(--accent)]" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-medium">{cert.title}</p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {cert.issuer}, {cert.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
