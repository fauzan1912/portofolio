"use client";

import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 24;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

export default function FloatingParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = document.createElement("div");
      const size = randomBetween(2, 5);
      const x = randomBetween(0, 100);
      const y = randomBetween(10, 90);
      const duration = randomBetween(6, 14);
      const delay = randomBetween(0, 10);
      const opacity = randomBetween(0.2, 0.6);
      const isBlue = Math.random() > 0.5;

      p.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${isBlue ? "rgba(34,211,238,0.8)" : "rgba(168,85,247,0.7)"};
        box-shadow: 0 0 ${size * 3}px ${isBlue ? "rgba(34,211,238,0.5)" : "rgba(168,85,247,0.5)"};
        --duration: ${duration}s;
        --delay: ${delay}s;
        opacity: ${opacity};
        pointer-events: none;
      `;
      p.className = "particle";
      container.appendChild(p);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    />
  );
}
