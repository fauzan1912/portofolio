"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Download, ExternalLink, MapPin, Sparkles } from "lucide-react";
import FloatingParticles from "./FloatingParticles";

const avatarGradientConic =
  "conic-gradient(from 0deg, rgba(34,211,238,0.8), rgba(139,92,246,0.8), rgba(59,130,246,0.8), rgba(34,211,238,0.8))";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: 100,
      }}
    >
      <FloatingParticles />

      {/* Extra ambient orbs */}
      <div style={{
        position: "absolute", width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)",
        top: "10%", left: "5%", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
        bottom: "10%", right: "5%", pointerEvents: "none",
      }} />

      <motion.div
        style={{ y, opacity, position: "relative", zIndex: 1 }}
        className="px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 32 }}>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="section-label">
              <Sparkles size={12} />
              Available for work
            </div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="float"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            style={{ position: "relative" }}
          >
            {/* Rotating gradient ring */}
            <div
              className="avatar-ring"
              style={{
                position: "absolute",
                inset: -4,
                borderRadius: "50%",
                background: avatarGradientConic,
                zIndex: 0,
              }}
            />
            {/* Ring mask */}
            <div style={{
              position: "absolute", inset: 2, borderRadius: "50%",
              background: "#020617", zIndex: 1,
            }} />
            {/* Avatar */}
            <div style={{
              position: "relative", zIndex: 2,
              width: 120, height: 120, borderRadius: "50%",
              background: "linear-gradient(135deg, rgba(34,211,238,0.25) 0%, rgba(139,92,246,0.25) 50%, rgba(59,130,246,0.25) 100%)",
              border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 48, fontWeight: 700,
              boxShadow: "0 0 40px rgba(34,211,238,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}>
              F
            </div>

            {/* Online dot */}
            <div style={{
              position: "absolute", bottom: 6, right: 6, zIndex: 3,
              width: 16, height: 16, borderRadius: "50%",
              background: "#22c55e",
              border: "2px solid #020617",
              boxShadow: "0 0 8px rgba(34,197,94,0.6)",
            }} />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.40)", fontSize: 13 }}
          >
            <MapPin size={13} />
            Yogyakarta, Indonesia
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 style={{ margin: 0 }}>
              <span
                className="heading-xl shimmer-text"
                style={{ display: "block", marginBottom: 4 }}
              >
                Fullstack
              </span>
              <span
                className="heading-xl"
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.50))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Developer &
              </span>
              <span
                className="heading-xl"
                style={{
                  display: "block",
                  background: "linear-gradient(135deg, rgba(34,211,238,0.90), rgba(139,92,246,0.80))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                System Engineer
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.45)",
              lineHeight: 1.7,
              maxWidth: 560,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Building premium digital experiences — from scalable web systems to
            intelligent IoT solutions. I craft software that feels as good as it works.
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
          >
            {[
              { value: "4+", label: "Years Exp." },
              { value: "20+", label: "Projects" },
              { value: "10+", label: "Tech Stack" },
            ].map(({ value, label }) => (
              <div key={label} className="glass glass-reflection" style={{
                padding: "14px 24px", borderRadius: 20, textAlign: "center",
              }}>
                <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.95)" }}>{value}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.40)", marginTop: 2, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}
          >
            <a href="#projects" className="btn-glass btn-primary" style={{ fontSize: 14 }}>
              <ExternalLink size={16} />
              Explore Projects
            </a>
            <a href="/cv.pdf" download className="btn-glass" style={{ fontSize: 14 }}>
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              color: "rgba(255,255,255,0.25)", fontSize: 11, letterSpacing: "0.1em",
              textDecoration: "none", textTransform: "uppercase", fontWeight: 600,
              marginTop: 16,
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
            Scroll
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
