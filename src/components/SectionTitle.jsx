import { motion } from "framer-motion";
import { fadeUp } from "../hooks/useScrollAnimation";

export default function SectionTitle({ kicker, title, description, align = "left" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div {...fadeUp} className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {kicker && (
        <div className="flex items-center gap-2 text-sm text-[var(--accent)]">
          <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
          {kicker}
        </div>
      )}
      <h2 className="font-display text-2xl sm:text2xl font-medium text-balance">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
