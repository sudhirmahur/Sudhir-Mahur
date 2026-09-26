import { motion } from "framer-motion";
import { socialLinks } from "../data/socialLinks";

export default function SocialLinks({ className = "", size = 18 }) {
  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socialLinks
        .filter((link) => link.id !== "phone")
        .map(({ id, label, href, icon: Icon }) => (
          <li key={id}>
            <motion.a
              href={href}
              target={id === "resume" || href.startsWith("http") ? "_blank" : undefined}
              rel={id === "resume" || href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              <Icon size={size} aria-hidden="true" />
            </motion.a>
          </li>
        ))}
    </ul>
  );
}