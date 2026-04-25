import Navigation from "@/components/layout/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import MascotSection from "@/components/sections/MascotSection";
import AILearningHub from "@/components/sections/AILearningHub";
import AboutSection from "@/components/sections/AboutSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ProjectsShowcase />
      <MascotSection />
      <AILearningHub />
      <AboutSection />
      <Footer />
    </main>
  );
}
