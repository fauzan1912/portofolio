"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const projects = [
  {
    title: "Hospital Information System",
    description:
      "Comprehensive HIS with BPJS e-Klaim integration, patient management, billing, pharmacy modules, and real-time reporting dashboard.",
    tags: ["Laravel", "MySQL", "Bootstrap", "REST API"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "linear-gradient(135deg, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.08) 100%)",
    accentColor: "rgba(34,211,238,0.7)",
    size: "large", // spans 2 columns
    emoji: "🏥",
  },
  {
    title: "E-Klaim Integration Platform",
    description:
      "BPJS Kesehatan API bridge for automated insurance claims processing with validation pipeline.",
    tags: ["Node.js", "Prisma", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.08) 100%)",
    accentColor: "rgba(139,92,246,0.7)",
    size: "small",
    emoji: "🔗",
  },
  {
    title: "Smart Audio DSP ESP32",
    description:
      "Real-time audio processing system on ESP32 with equalizer, noise gate, compressor and wireless control.",
    tags: ["ESP32", "C++", "MQTT", "Audio DSP"],
    github: "https://github.com",
    demo: null,
    featured: false,
    gradient: "linear-gradient(135deg, rgba(251,191,36,0.10) 0%, rgba(245,158,11,0.06) 100%)",
    accentColor: "rgba(251,191,36,0.7)",
    size: "small",
    emoji: "🎛️",
  },
  {
    title: "Asset Management System",
    description:
      "Enterprise asset tracking with QR codes, maintenance schedules, depreciation calculator, and audit reports.",
    tags: ["CodeIgniter", "MySQL", "jQuery"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    gradient: "linear-gradient(135deg, rgba(34,197,94,0.10) 0%, rgba(16,185,129,0.06) 100%)",
    accentColor: "rgba(34,197,94,0.7)",
    size: "small",
    emoji: "📦",
  },
  {
    title: "Employee Attendance App",
    description:
      "Face-recognition attendance system with geofencing, shift management, and payroll integration.",
    tags: ["Next.js", "Prisma", "TailwindCSS", "OpenCV"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    gradient: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 100%)",
    accentColor: "rgba(99,102,241,0.7)",
    size: "small",
    emoji: "📍",
  },
  {
    title: "JogjaOnTrip",
    description:
      "Tourism discovery platform for Yogyakarta with curated itineraries, booking integration, and interactive map.",
    tags: ["Next.js", "Laravel", "MySQL", "Maps API"],
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    gradient: "linear-gradient(135deg, rgba(236,72,153,0.10) 0%, rgba(168,85,247,0.08) 100%)",
    accentColor: "rgba(236,72,153,0.7)",
    size: "large",
    emoji: "🗺️",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  const isLarge = project.size === "large";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
      className={isLarge ? "col-span-1 md:col-span-2" : "col-span-1"}
    >
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="glass-reflection"
        style={{
          height: "100%",
          background: hovered
            ? project.gradient.replace("0.12", "0.18").replace("0.08", "0.12")
            : project.gradient,
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
          border: `1px solid ${hovered ? project.accentColor.replace("0.7", "0.25") : "rgba(255,255,255,0.08)"}`,
          borderRadius: 24,
          padding: 28,
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          boxShadow: hovered
            ? `0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.accentColor.replace("0.7", "0.15")}`
            : "0 4px 20px rgba(0,0,0,0.2)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* Top row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 14,
              background: project.accentColor.replace("0.7", "0.10"),
              border: `1px solid ${project.accentColor.replace("0.7", "0.20")}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 22,
              transition: "all 0.3s ease",
              transform: hovered ? "scale(1.1) rotate(-3deg)" : "scale(1)",
            }}>
              {project.emoji}
            </div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 650, color: "rgba(255,255,255,0.92)", letterSpacing: "-0.02em" }}>
                {project.title}
              </div>
              {project.featured && (
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 3 }}>
                  <Star size={10} style={{ color: project.accentColor }} fill={project.accentColor} />
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: project.accentColor }}>
                    Featured
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 8 }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.50)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.90)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.50)";
                }}
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.50)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.90)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.50)";
                }}
              >
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.7, flex: 1 }}>
          {project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "3px 10px",
                borderRadius: 100,
                fontSize: 11,
                fontWeight: 500,
                background: project.accentColor.replace("0.7", "0.08"),
                border: `1px solid ${project.accentColor.replace("0.7", "0.20")}`,
                color: project.accentColor,
                letterSpacing: "0.02em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Hover glow bar at bottom */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            height: 2,
            background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)`,
            borderRadius: 100,
            transformOrigin: "left",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56 }}
        >
          <div style={{ marginBottom: 16 }}><span className="section-label">Work</span></div>
          <h2 className="heading-lg" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.50))",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Featured<br />Projects
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
