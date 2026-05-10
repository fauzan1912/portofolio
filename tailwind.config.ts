import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      colors: {
        "glass-white": "rgba(255,255,255,0.08)",
        "glass-border": "rgba(255,255,255,0.10)",
        "cyan-glow": "rgba(34,211,238,0.8)",
        "purple-glow": "rgba(139,92,246,0.8)",
        "blue-glow": "rgba(59,130,246,0.8)",
      },
      backdropBlur: {
        "4xl": "80px",
        "5xl": "120px",
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "40px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 4s linear infinite",
        "rotate-ring": "rotateRing 8s linear infinite",
        "particle": "particleFloat 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        rotateRing: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        particleFloat: {
          "0%": { opacity: "0", transform: "translateY(0) scale(0)" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-120px) scale(1.5)" },
        },
      },
      boxShadow: {
        "glass": "0 4px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glass-hover": "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12)",
        "glow-cyan": "0 0 30px rgba(34,211,238,0.15), 0 0 60px rgba(34,211,238,0.05)",
        "glow-blue": "0 0 30px rgba(59,130,246,0.15), 0 0 60px rgba(59,130,246,0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
