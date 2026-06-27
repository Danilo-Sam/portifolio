import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <div className="fixed inset-0 z-[1] bg-grid pointer-events-none" />
      <div className="vignette" />
      <div className="scanline-overlay" />

      {/* HUD readouts */}
      <div className="fixed top-20 right-4 z-30 hidden lg:block font-mono text-[10px] text-steel/70 text-right leading-relaxed">
        <p>STACK: JAVA / SPRING</p>
        <p>REACT / NEXT.JS</p>
      </div>

      <Navbar />

      <main className="relative">
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
