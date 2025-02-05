import { SectionHeader } from "@/components/SectionHeader";
import { Timeline } from "@/sections/Timeline";

export const PortfolioSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="py-20 items-center tracking-wide mt-4 mx-4 lg:px-24 text-white/60 md:text-lg ">
          <p>
            I deliver practical and impactful solutions, bridging theory and
            application, applying domain-specific knowledge to address key
            challenges across various sectors with industry level coding and
            pipeline standards.
          </p>
        </div>
        <SectionHeader
          eyebrow="My Portfolio"
          title="Work and Education"
          description=""
        />
        <Timeline />
      </div>
    </div>
  );
};
