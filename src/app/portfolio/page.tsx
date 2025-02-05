import { ToolsSection } from "@/sections/Tools";
import { PortfolioSection } from "@/sections/Portfolio";

export default function PortfolioPage() {
  return (
    <div>
      {/* Call the functions for each section */}
      <PortfolioSection />
      <ToolsSection />
    </div>
  );
}
