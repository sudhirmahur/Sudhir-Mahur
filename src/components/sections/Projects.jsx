import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../SectionTitle";
import ProjectCard from "../ProjectCard";
import { projects, projectFilters } from "../../data/projects";
import { staggerContainer } from "../../hooks/useScrollAnimation";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Projects"
          title="A few things I've built."
          description="A mix of full-stack apps and frontend-only builds, each one built to be responsive, accessible, and genuinely usable."
        />

        <div className="mt-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                activeFilter === filter
                  ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                  : "border-[var(--border)] text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFilter}
          {...staggerContainer(0.08)}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
