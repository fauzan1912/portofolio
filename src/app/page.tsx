import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Home() {
  return (
    <>
      {/* Background */}
      <div className="mesh-bg" aria-hidden="true" />
      <div className="orb-blue" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Cursor reactive lighting */}
      <CursorGlow />

      {/* App shell */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <main>
          <HeroSection />

          {/* Glass divider between sections */}
          <div style={{ padding: "0 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="glass-divider" />
            </div>
          </div>

          <AboutSection />

          <div style={{ padding: "0 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="glass-divider" />
            </div>
          </div>

          <SkillsSection />

          <div style={{ padding: "0 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="glass-divider" />
            </div>
          </div>

          <ProjectsSection />

          <div style={{ padding: "0 24px" }}>
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
              <div className="glass-divider" />
            </div>
          </div>

          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
