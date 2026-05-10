"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";

// SVG social icons
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const socials = [
  { icon: <GithubIcon />, label: "GitHub", href: "https://github.com", color: "rgba(255,255,255,0.7)" },
  { icon: <LinkedinIcon />, label: "LinkedIn", href: "https://linkedin.com", color: "rgba(59,130,246,0.8)" },
  { icon: <XIcon />, label: "X (Twitter)", href: "https://twitter.com", color: "rgba(255,255,255,0.70)" },
  { icon: <InstagramIcon />, label: "Instagram", href: "https://instagram.com", color: "rgba(225,48,108,0.8)" },
];

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ marginBottom: 16 }}><span className="section-label">Get in Touch</span></div>
          <h2 className="heading-lg" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.50))",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Let&apos;s build<br />something great
          </h2>
        </motion.div>

        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {/* Left – Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Intro card */}
            <div className="glass glass-reflection" style={{ padding: 32, flex: 1 }}>
              <h3 style={{ fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.90)", marginBottom: 14, letterSpacing: "-0.02em" }}>
                Open to opportunities
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.45)", lineHeight: 1.8, marginBottom: 24 }}>
                Whether you have a project in mind, need technical consultation,
                or just want to say hello — I&apos;m always happy to connect.
                Expect a reply within 24 hours.
              </p>

              {/* Contact buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glass"
                  style={{
                    justifyContent: "center",
                    background: "rgba(34,197,94,0.10)",
                    borderColor: "rgba(34,197,94,0.25)",
                    color: "rgba(255,255,255,0.90)",
                  }}
                >
                  <MessageCircle size={16} style={{ color: "rgba(34,197,94,0.8)" }} />
                  WhatsApp
                </a>
                <a
                  href="mailto:hi@fauzan.dev"
                  className="btn-glass"
                  style={{ justifyContent: "center" }}
                >
                  <Mail size={16} />
                  hi@fauzan.dev
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="glass glass-reflection" style={{ padding: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.10em", textTransform: "uppercase", color: "rgba(255,255,255,0.30)", marginBottom: 16 }}>
                Find me on
              </div>
              <div style={{ display: "flex", gap: 10 }}>
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      width: 44, height: 44, borderRadius: 14,
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: s.color,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="glass glass-reflection"
            style={{ padding: 32 }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.90)", marginBottom: 24, letterSpacing: "-0.02em" }}>
              Send a message
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="glass-input"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="glass-input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)", letterSpacing: "0.06em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>
                  Message
                </label>
                <textarea
                  required
                  placeholder="Tell me about your project..."
                  className="glass-input glass-textarea"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending || sent}
                whileHover={!sending && !sent ? { scale: 1.02 } : {}}
                whileTap={!sending && !sent ? { scale: 0.98 } : {}}
                className="btn-glass btn-primary"
                style={{
                  justifyContent: "center",
                  marginTop: 4,
                  opacity: sending ? 0.7 : 1,
                  background: sent ? "rgba(34,197,94,0.15)" : undefined,
                  borderColor: sent ? "rgba(34,197,94,0.30)" : undefined,
                }}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : sending ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                      style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "rgba(255,255,255,0.9)", borderRadius: "50%" }}
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
