import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { staggerItem } from "../hooks/useScrollAnimation";
import GithubIcon from "./icons/GithubIcon";

export default function ProjectCard({ project }) {
  const isLive = project.liveUrl && project.liveUrl !== "#";

  return (
    <motion.article
      variants={staggerItem}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated-2)]">
        <div className="flex h-full w-full items-center justify-center font-display text-3xl text-[var(--text-muted)] transition-transform duration-500 group-hover:scale-110">
          {project.title
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="text-sm text-white">{project.category}</span>
        </div>
        <span
          className={`absolute right-3 top-3 flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            isLive
              ? "bg-[var(--accent-2)]/15 text-[var(--accent-2-strong)]"
              : "bg-[var(--bg)]/70 text-[var(--text-muted)]"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isLive ? "bg-[var(--accent-2)]" : "bg-[var(--text-muted)]"
            }`}
          />
          Live Project
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-lg font-medium">{project.title}</h3>
        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-mono text-[var(--text-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <GithubIcon size={16} />
          </a>
          {isLive ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-1.5 rounded-md bg-[var(--accent)] px-3 py-2 text-sm font-medium text-[var(--color-ink-950)] transition-colors hover:bg-[var(--accent-strong)]"
            >
              View project
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-md border border-dashed border-[var(--border)] px-3 py-2 text-sm text-[var(--text-muted)]"
            >
              Live demo coming soon
              <ArrowUpRight size={14} aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
