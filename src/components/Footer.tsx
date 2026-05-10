"use client";

import { motion } from "framer-motion";
import { Heart, Zap } from "lucide-react";

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: <GithubIcon />, href: "https://github.com", label: "GitHub" },
  { icon: <LinkedinIcon />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <XIcon />, href: "https://twitter.com", label: "X (Twitter)" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{ padding: "0 24px 40px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="glass-divider" style={{ marginBottom: 32 }} />

        <div
          className="glass glass-reflection"
          style={{
            padding: "24px 32px",
            borderRadius: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(34,211,238,0.3), rgba(139,92,246,0.3))",
              border: "1px solid rgba(34,211,238,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Zap size={14} color="rgba(34,211,238,0.9)" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 14, color: "rgba(255,255,255,0.80)", letterSpacing: "-0.02em" }}>
              fauzan<span style={{ color: "rgba(34,211,238,0.7)" }}>.dev</span>
            </span>
          </div>

          {/* Nav */}
          <nav style={{ display: "flex", gap: 4, flexWrap: "wrap", justifyContent: "center" }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  padding: "5px 12px",
                  borderRadius: 100,
                  fontSize: 12,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.40)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  letterSpacing: "-0.01em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.40)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials + copyright */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                whileHover={{ scale: 1.15, y: -2 }}
                transition={{ duration: 0.2 }}
                style={{
                  color: "rgba(255,255,255,0.35)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
              >
                {s.icon}
              </motion.a>
            ))}

            <span style={{ width: 1, height: 16, background: "rgba(255,255,255,0.10)" }} />

            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", gap: 4 }}>
              Made with <Heart size={11} style={{ color: "rgba(236,72,153,0.6)" }} fill="rgba(236,72,153,0.6)" /> by Fauzan · {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
