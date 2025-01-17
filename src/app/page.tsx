import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { PortfolioSection } from "@/sections/Portfolio";
import { ToolsSection } from "@/sections/Tools";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <TapeSection />
      <ProjectsSection />
      <TapeSection />
      <PortfolioSection />
      {/* <TestimonialsSection /> */}
      <ToolsSection />
      {/* <ContactSection /> */}
      <Footer />
      {/* <ProjectsPage /> */}
    </div>
  );
}
