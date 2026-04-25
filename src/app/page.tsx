import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import AILearningHub from "@/components/AILearningHub";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <ProjectsShowcase />
      <AILearningHub />
      <AboutSection />
      <Footer />
    </main>
  );
}
