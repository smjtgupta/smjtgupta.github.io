import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Link from "next/link";
import SiteLogo from "@/assets/images/soumo_logo.png";
import grainImage from "@/assets/images/grain.jpg";

export default function ProjectsPage() {
  return (
    <div>
      {/* Call the functions for each section */}
      <Header />
      <Hero />
      <Research />
      <Publications />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <div className="fixed flex justify-center items-center top-10 w-full z-10 px-4">
      <a
        href="/"
        className="absolute flex items-center gap-2 text-gray-300"
        style={{ left: "10vw" }}
      >
        <Image
          src={SiteLogo}
          alt="Website Logo"
          className="hidden md:block h-12 w-auto"
        />
        <span className="hidden lg:block text-lg text-semibold">HomePage</span>
      </a>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/" className="nav-item">
          HomePage
        </Link>
        <a href="#about" className="nav-item">
          Projects
        </a>
        <a href="#projects" className="nav-item">
          Publication
        </a>
      </nav>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="py-20 md:py-56 relative z-0 overflow-x-clip">
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Scalable Neural Models for Your Needs
          </h1>
          <p className="mt-4 mx-2 text-white/60 md:text-lg">
            I specialize in developing accurate and interpretable neural
            networks, challenging the common misconception that model accuracy
            and interpretability are inversely correlated. I demonstrate that{" "}
            <span className="font-bold">
              models with proper representation can be both highly accurate and
              fully interpretable
            </span>
            . My work provides interpretation and verification for domain
            experts, using domain-guided losses and orthogonality to address
            tasks in machine learning or natural language tasks, and
            computational sciences.
          </p>
          <p className="mt-4 mx-2  text-white/60 md:text-lg">
            My PhD thesis focuses on developing accurate and fair neural models
            for Natural Language tasks, particularly toxicity detection. It
            addresses the challenge of varying toxic language across demographic
            groups by promoting group-specific diversity measures. I tackle the
            risks of overfitting to majority groups and the fairness concerns
            that arise with "one-size-fits-all" models. My work uses{" "}
            <span className="font-bold">
              multi-task learning for group-targeted toxicity detection and
              fairness loss functions to ensure balanced errors across groups
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

const Research = () => {
  return (
    <section>
      <h2 className="py-4 text-xl items-center text-center">Research</h2>
      <p className="text-center pb-4">Coming Soon</p>
      {/* Add more research-related content */}
    </section>
  );
};

const Publications = () => {
  return (
    <section>
      <h2 className="py-4 text-xl items-center text-center">Publication</h2>
      <p className="text-center pb-4">Coming Soon.</p>
      {/* Add more publication-related content */}
    </section>
  );
};

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
const footerLinks = [
  {
    title: "LinkedIn",
    links: "https://www.linkedin.com/in/soumyajit-gupta/",
  },
  {
    title: "Scholar",
    links: "https://scholar.google.com/citations?user=q3jQsVQAAAAJ&hl=en",
  },
  {
    title: "ResearchGate",
    links: "#",
  },
  {
    title: "Github",
    links: "https://github.com/smjtgupta",
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-8 pt-4 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">
            <p className="text-center">
              &copy; Soumo 2025 | All rights reserved
              <br />
              Designed with NextJS, React and Tailwind CSS
            </p>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                href={link.links}
                target="_blank"
                rel="noopener noreferrer"
                key={link.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
