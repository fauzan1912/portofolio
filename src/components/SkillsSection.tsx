"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    color: "rgba(34,211,238,0.8)",
    glow: "rgba(34,211,238,0.15)",
    skills: [
      { name: "Next.js", level: 92, icon: "▲" },
      { name: "TypeScript", level: 88, icon: "TS" },
      { name: "Tailwind CSS", level: 95, icon: "✦" },
      { name: "Framer Motion", level: 80, icon: "◎" },
    ],
  },
  {
    category: "Backend",
    color: "rgba(139,92,246,0.8)",
    glow: "rgba(139,92,246,0.15)",
    skills: [
      { name: "Laravel", level: 90, icon: "L" },
      { name: "Node.js", level: 82, icon: "⬡" },
      { name: "Prisma ORM", level: 78, icon: "◈" },
      { name: "CodeIgniter", level: 85, icon: "CI" },
    ],
  },
  {
    category: "Database & DevOps",
    color: "rgba(59,130,246,0.8)",
    glow: "rgba(59,130,246,0.15)",
    skills: [
      { name: "MySQL", level: 88, icon: "DB" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Linux", level: 80, icon: "🐧" },
      { name: "Git / GitHub", level: 92, icon: "⌥" },
    ],
  },
  {
    category: "IoT & Hardware",
    color: "rgba(251,191,36,0.8)",
    glow: "rgba(251,191,36,0.12)",
    skills: [
      { name: "ESP32", level: 85, icon: "⚡" },
      { name: "MQTT", level: 78, icon: "↔" },
      { name: "Audio DSP", level: 72, icon: "♫" },
      { name: "C / C++", level: 70, icon: "C" },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.70)" }}>{name}</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.35)" }}>{level}%</span>
      </div>
      <div style={{
        height: 4, borderRadius: 100,
        background: "rgba(255,255,255,0.06)",
        overflow: "hidden",
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.23, 1, 0.32, 1] }}
          style={{
            height: "100%",
            borderRadius: 100,
            background: `linear-gradient(90deg, ${color}, ${color.replace("0.8", "0.4")})`,
            boxShadow: `0 0 8px ${color.replace("0.8", "0.5")}`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ marginBottom: 16 }}><span className="section-label">Tech Arsenal</span></div>
          <h2 className="heading-lg" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.50))",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Skills &<br />Technologies
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 16,
          }}
        >
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: gi * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="glass-card glass-reflection"
              style={{ padding: 28 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: group.color,
                  boxShadow: `0 0 12px ${group.glow}`,
                }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.40)" }}>
                  {group.category}
                </span>
              </div>

              {/* Skills */}
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={group.color}
                  delay={gi * 0.12 + si * 0.08 + 0.2}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech Icon Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginTop: 32, display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}
        >
          {["Next.js", "Laravel", "CodeIgniter", "MySQL", "Docker", "Linux", "ESP32", "Node.js", "Prisma", "Tailwind CSS", "TypeScript", "Git"].map((tech) => (
            <motion.span
              key={tech}
              className="tag"
              whileHover={{
                background: "rgba(34,211,238,0.10)",
                borderColor: "rgba(34,211,238,0.25)",
                color: "rgba(255,255,255,0.80)",
                scale: 1.05,
              }}
              transition={{ duration: 0.2 }}
              style={{ cursor: "default", padding: "6px 16px", fontSize: 12 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
