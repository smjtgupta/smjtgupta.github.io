import { HeroSection } from "@/sections/Hero";
import { AboutSection } from "@/sections/About";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ToolsSection } from "@/sections/Tools";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TapeSection />
      <ProjectsSection />
      <ToolsSection />
    </div>
  );
}
