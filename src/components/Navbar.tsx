"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          width: "calc(100% - 48px)",
          maxWidth: 900,
        }}
      >
        <div
          style={{
            background: scrolled
              ? "rgba(2,6,23,0.80)"
              : "rgba(255,255,255,0.06)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 100,
            padding: "10px 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "background 0.4s ease",
            boxShadow: scrolled
              ? "0 20px 60px rgba(0,0,0,0.5)"
              : "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(34,211,238,0.3), rgba(139,92,246,0.3))",
              border: "1px solid rgba(34,211,238,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Zap size={16} color="rgba(34,211,238,0.9)" strokeWidth={2.5} />
            </div>
            <span style={{ fontWeight: 700, fontSize: 15, color: "rgba(255,255,255,0.9)", letterSpacing: "-0.02em" }}>
              fauzan<span style={{ color: "rgba(34,211,238,0.8)" }}>.dev</span>
            </span>
          </a>

          {/* Desktop Links */}
          <nav className="mobile-hide" style={{ display: "flex", gap: 4 }}>
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "6px 16px",
                    borderRadius: 100,
                    fontSize: 13,
                    fontWeight: 500,
                    textDecoration: "none",
                    color: isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.50)",
                    background: isActive ? "rgba(255,255,255,0.10)" : "transparent",
                    transition: "all 0.2s ease",
                    letterSpacing: "-0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.80)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.50)";
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="mobile-hide btn-glass btn-primary"
            style={{ padding: "7px 20px", fontSize: 13 }}
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            className="mobile-show"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 10,
              width: 36, height: 36,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "white",
            }}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{
              position: "fixed",
              top: 90,
              left: 24,
              right: 24,
              zIndex: 999,
              background: "rgba(2,6,23,0.92)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid rgba(255,255,255,0.10)",
              borderRadius: 24,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 16px",
                  borderRadius: 14,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  color: "rgba(255,255,255,0.80)",
                  background: active === link.href.replace("#", "") ? "rgba(255,255,255,0.08)" : "transparent",
                  transition: "background 0.2s",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
