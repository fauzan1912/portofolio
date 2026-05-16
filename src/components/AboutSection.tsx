"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Server, Cpu, BookOpen, Calendar, MapPin } from "lucide-react";

const timelineItems = [
  {
    year: "2024 – Now",
    role: "Fullstack Developer",
    place: "Freelance & Startup Projects",
    desc: "Building end-to-end systems with Next.js, Laravel, and IoT integrations.",
  },
  {
    year: "2023 – 2024",
    role: "Backend Engineer",
    place: "Hospital Information System",
    desc: "Developed BPJS e-Klaim integration, patient records, and billing modules.",
  },
  {
    year: "2022 – 2023",
    role: "IoT Developer",
    place: "Smart Audio DSP Project",
    desc: "Designed ESP32-based audio processing with real-time DSP filters.",
  },
  {
    year: "2021 – 2022",
    role: "Junior Web Developer",
    place: "University Projects",
    desc: "Built asset management and attendance systems with CodeIgniter.",
  },
];

const stats = [
  { icon: <Code2 size={18} />, value: "20+", label: "Projects Built" },
  { icon: <Server size={18} />, value: "4+", label: "Years Experience" },
  { icon: <Cpu size={18} />, value: "10+", label: "Tech Stacks" },
  { icon: <BookOpen size={18} />, value: "100%", label: "Passion for Code" },
];

function TimelineItem({ item, index }: { item: typeof timelineItems[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
      style={{ display: "flex", gap: 20, position: "relative" }}
    >
      {/* Line + dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 20, flexShrink: 0 }}>
        <div style={{
          width: 10, height: 10, borderRadius: "50%", flexShrink: 0, marginTop: 6,
          background: index === 0
            ? "linear-gradient(135deg, rgba(34,211,238,1), rgba(59,130,246,1))"
            : "rgba(255,255,255,0.20)",
          boxShadow: index === 0 ? "0 0 12px rgba(34,211,238,0.6)" : "none",
        }} />
        {index < timelineItems.length - 1 && (
          <div style={{ width: 1, flex: 1, background: "rgba(255,255,255,0.06)", marginTop: 6 }} />
        )}
      </div>

      <div style={{ paddingBottom: 28, flex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4, flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(34,211,238,0.7)", letterSpacing: "0.08em", display: "flex", alignItems: "center", gap: 4 }}>
            <Calendar size={11} /> {item.year}
          </span>
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.90)", marginBottom: 3, letterSpacing: "-0.01em" }}>
          {item.role}
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 8, display: "flex", alignItems: "center", gap: 4 }}>
          <MapPin size={11} /> {item.place}
        </div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          {item.desc}
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div><span className="section-label">About Me</span></div>
          <h2 className="heading-lg" style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.50))",
            backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Crafting digital<br />experiences that matter
          </h2>
        </motion.div>

        {/* Main card */}
        <div ref={ref} className="flex flex-col md:grid md:grid-cols-2 gap-5">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="glass glass-reflection md:col-span-1 md:row-span-1 order-1"
            style={{ padding: 36 }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.90)", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Who I Am
            </h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.50)", lineHeight: 1.8, marginBottom: 20 }}>
              I'm a Fullstack Developer and System Engineer based in Yogyakarta, Indonesia.
              I specialize in building robust, scalable web systems — from hospital information
              platforms to smart IoT devices.
            </p>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.50)", lineHeight: 1.8, marginBottom: 24 }}>
              My approach fuses backend engineering rigor with a deep appreciation for
              beautiful, intuitive interfaces. I believe the best software is invisible —
              it just works, and it feels great.
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Next.js", "Laravel", "TypeScript", "Docker", "ESP32"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
            className="glass glass-reflection md:col-start-2 md:row-span-2 order-3 md:order-none"
            style={{ padding: 36 }}
          >
            <h3 style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.90)", marginBottom: 28, letterSpacing: "-0.02em" }}>
              Experience Timeline
            </h3>
            <div>
              {timelineItems.map((item, i) => (
                <TimelineItem key={i} item={item} index={i} />
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-2 gap-3 md:col-start-1 md:row-start-2 order-2 md:order-none"
          >
            {stats.map(({ icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="glass-card glass-reflection"
                style={{ padding: "20px 24px" }}
              >
                <div style={{ color: "rgba(34,211,238,0.70)", marginBottom: 10 }}>{icon}</div>
                <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.03em", color: "rgba(255,255,255,0.95)", lineHeight: 1 }}>
                  {value}
                </div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginTop: 4, fontWeight: 500 }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
