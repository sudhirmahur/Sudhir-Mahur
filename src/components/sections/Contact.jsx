import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import SectionTitle from "../SectionTitle";
import SocialLinks from "../SocialLinks";
import { slideInLeft, slideInRight } from "../../hooks/useScrollAnimation";
import { contactInfo } from "../../data/socialLinks";

const initialForm = { name: "", email: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // Hook this up to a real backend or email service (e.g. Formspree,
    // Resend, or a custom API route). No request is sent from this template.
    setStatus("submitting");
    setTimeout(() => {
      setStatus("sent");
      setForm(initialForm);
    }, 900);
  };

  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          kicker="Contact"
          title="Let's build something together."
          description="Have a role, project, or idea in mind? I'd like to hear about it."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div {...slideInLeft} className="flex flex-col gap-6">
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--bg-elevated-2)] text-[var(--accent)]">
                <Mail size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Email</p>
                <p className="text-sm font-medium">{contactInfo.email}</p>
              </div>
            </a>

            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5 transition-colors hover:border-[var(--accent)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--bg-elevated-2)] text-[var(--accent)]">
                <Phone size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Phone</p>
                <p className="text-sm font-medium">{contactInfo.phone}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[var(--bg-elevated-2)] text-[var(--accent)]">
                <MapPin size={18} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Location</p>
                <p className="text-sm font-medium">{contactInfo.location}</p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm text-[var(--text-muted)]">Find me elsewhere</p>
              <SocialLinks />
            </div>
          </motion.div>

          <motion.form
            {...slideInRight}
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5 rounded-lg border border-[var(--border)] bg-[var(--bg-elevated)] p-6 sm:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="Your name"
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                className="w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-xs text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-md border border-[var(--border)] bg-[var(--bg)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="Tell me about your project or role..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-sm font-medium text-[var(--color-ink-950)] transition-colors hover:bg-[var(--accent-strong)] disabled:opacity-70"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  Message sent
                </>
              ) : (
                <>
                  {status === "submitting" ? "Sending..." : "Send message"}
                  {status !== "submitting" && <Send size={16} aria-hidden="true" />}
                </>
              )}
            </button>
            <p className="text-xs text-[var(--text-muted)]" role="status" aria-live="polite">
              {status === "sent" &&
                "Thanks for reaching out — I'll get back to you soon."}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
