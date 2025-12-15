import AboutSection from "@/components/ui/AboutSection";
import ContactSection from "@/components/ui/ContactSection";
import ExperienceSection from "@/components/ui/ExperienceSection";
import HeroSection from "@/components/ui/HeroSection";
import ProjectsSection from "@/components/ui/ProjectsSection";
import SkillsSection from "@/components/ui/SkillsSection";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { WrapperMotion } from "@/components/WrapperMotion";

export default function Home() {
    return (
    <WrapperMotion>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </WrapperMotion>
  );
}
