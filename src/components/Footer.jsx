import SocialLinks from "./SocialLinks";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border)]">
      <div
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--accent)]/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <p className="font-display text-base font-semibold">
              Sudhir Mahur<span className="text-[var(--accent)]">.</span>
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">
              Full Stack Developer building accessible, high-performance CRM
              and enterprise web applications.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="mb-3 text-sm font-medium">Navigate</p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[var(--text-muted)]">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="transition-colors hover:text-[var(--accent)]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-3 text-sm font-medium">Connect</p>
            <SocialLinks />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border)] pt-6 text-sm text-[var(--text-muted)] sm:flex-row">
          <p>© {year} Sudhir Mahur. All rights reserved.</p>
          <p>Built with React</p>
        </div>
      </div>
    </footer>
  );
}
