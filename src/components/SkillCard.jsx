import { motion } from "framer-motion";
import { staggerItem } from "../hooks/useScrollAnimation";

export default function SkillCard({ skill }) {
  const { name, icon: Icon, description, level } = skill;

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]/50"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[var(--bg-elevated-2)] text-[var(--accent)] transition-transform duration-200 group-hover:-translate-y-0.5">
          <Icon size={19} aria-hidden="true" />
        </div>
        <h3 className="font-medium">{name}</h3>
      </div>
      <p className="mt-3 text-sm text-[var(--text-muted)]">{description}</p>
      {typeof level === "number" && (
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[var(--bg-elevated-2)]">
          <motion.div
            className="h-full rounded-full bg-[var(--accent)]"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />
        </div>
      )}
    </motion.div>
  );
}
