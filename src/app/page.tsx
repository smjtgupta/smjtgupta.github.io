import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolsSection } from "@/sections/Tools";
import memojiImage from "@/assets/images/memoji-computer.png";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import profileImage from "@/assets/images/profile_pic.jpg";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import svdImage from "@/assets/images/svd.png";
import mtlImage from "@/assets/images/mtl.png";
import gapImage from "@/assets/images/gap.png";
import mnfImage from "@/assets/images/mnf.png";

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  spinDuration,
  orbitDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  spinDuration?: string;
  orbitDuration?: string;
}>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin === true && "animate-spin")}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{ transform: `rotate(${rotation * -1}deg)` }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <div className="h-screen pt-20 md:pt-40 pb-20 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={430} rotation={-15} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={80} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={500} rotation={20} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="6s">
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-40} shouldOrbit orbitDuration="36s">
          <div className="size-3 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={180} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-20 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration="40s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={140} shouldOrbit orbitDuration="44s" shouldSpin spinDuration="6s">
          <SparkleIcon className="size-28 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={80} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-70} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="6s">
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Available for Full-time Work</div>
          </div>
          <div className="max-w-xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Scalable Neural Models for Your Needs
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I craft domain-guided neural models using advanced machine
              learning and natural language technologies.{" "}
              <span className="hidden md:block"> </span>
              My work blends accuracy and interpretability to provide
              data-driven insights for impactful outcomes.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center mt-4 gap-4">
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
                <ArrowRight className="size-4" />
                <span className="font-semibold">Contact Me</span>
              </button>
            </Link>
            <a href="#about" className="py-6">
              <button className="flex items-center justify-center border border-white/50 bg-white/10 size-16 rounded-full animate-bounce">
                <ArrowDown className="size-8" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Soumyajit Gupta"
          description="Machine Learning - Neural Nets - Agentic AI - Computational Sciences"
        />
        <div className="mt-10 flex flex-col gap-20">
          <Card className="px-4 py-12">
            <div className="flex items-center flex-col md:flex-row w-full h-full">
              <div className="flex-1 items-center justify-center">
                <p className="md:pl-6 pb-4">
                  This is{" "}
                  <span className="text-emerald-300 font-semibold">Soumo</span>,
                  based in Reno, Nevada. I&apos;m a domain-driven neural network
                  modeler and data scientist.
                </p>
                <p className="md:pl-6 pb-4">
                  I graduated with a PhD - Computer Science in 2025 from the{" "}
                  <a
                    href="https://www.utexas.edu/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 font-semibold underline"
                  >
                    University of Texas at Austin
                  </a>
                  . My thesis was on Multi-Task models for group-targeted
                  Toxicity detection, co-advised by{" "}
                  <a
                    href="https://www.ischool.utexas.edu/~ml/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 font-semibold underline"
                  >
                    Matthew Lease
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://mariadearteaga.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 font-semibold underline"
                  >
                    Maria De-Arteaga
                  </a>
                  .
                </p>
                <p className="md:pl-6 pb-4">
                  Presently I&apos;m working as an AI Engineer and Modeler for{" "}
                  <a
                    href="https://www.smartdustsystems.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-300 font-semibold underline"
                  >
                    Smart Dust Systems
                  </a>{" "}
                  for over an year. I&apos;m also open to explore{" "}
                  <span className="text-emerald-300 font-semibold">
                    Full-time In-person
                  </span>{" "}
                  roles around{" "}
                  <span className="text-emerald-300 font-semibold">
                    applied AI and Agentic Modeling
                  </span>{" "}
                  domain area.
                </p>
                <p className="md:pl-6 pb-4">
                  Here&apos;s a link to my{" "}
                  <Link
                    href="/Thesis_UT2025_Soumya.pdf"
                    target="_blank"
                    className="text-emerald-300 font-semibold underline"
                  >
                    Thesis doc
                  </Link>
                  , till the Official one is out.
                </p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="size-60 rounded-full items-center overflow-hidden bg-cover bg-center">
                  <Image src={profileImage} alt="profile image" />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const portfolioProjects = [
  {
    company: "UT Austin",
    year: "2018",
    title: "Hyperspectral Imaging Analysis",
    featured: true,
    results: [
      { title: "End-to-End cancer detection pipelines for biopsy tissue samples" },
      { title: "Low Rank, Fast and memory efficient Denoising Algorithms with error bounds" },
      { title: "Higher Order feature selection algorithms to weed out redundant and irrelevant features" },
    ],
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0205219",
    image: mnfImage,
  },
  {
    company: "UT Austin",
    year: "2021",
    title: "Neural SVD solver for Big Data",
    featured: true,
    results: [
      { title: "Two stage neural engine as alternative to randomized SVD techniques" },
      { title: "Explicit Memory requirement: guided by feature dimension and desired rank" },
      { title: "Fully interpretable model: all outputs and weights have specific meaning" },
    ],
    link: "https://arxiv.org/pdf/2010.14226",
    image: svdImage,
  },
  {
    company: "UT Austin",
    year: "2023",
    title: "GAP for Target-group detection",
    featured: true,
    results: [
      { title: "Group-fairness loss function based on Accuracy Parity measure" },
      { title: "Balanced group accuracy around Target-group detection" },
      { title: "Group disparity reduced from ~22% to ~8% with minimal accuracy drop" },
    ],
    link: "https://arxiv.org/pdf/2407.11933",
    image: gapImage,
  },
  {
    company: "UT Austin",
    year: "2025",
    title: "Multi Task Learning Toxicity Model ",
    featured: true,
    results: [
      { title: "Conditional MTL model to learn toxicity targeted at different groups" },
      { title: "Improved Recall ~8% and ~15% over Independent and SoA MTL models" },
      { title: "Runtime and Parameter reductions by ~56% and ~72% over Baseline" },
    ],
    link: "https://arxiv.org/pdf/2302.07372",
    image: mtlImage,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20" id="projects">
      <div className="container">
        <div className="flex flex-col items-center">
          <SectionHeader
            eyebrow="Real-World Results"
            title="Featured Projects"
            description="Explore my journey of shaping ideas into practical and scalable outcomes"
          />
          <Link href="/projects">
            <button className="mt-4 inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
              <ArrowUpRightIcon className="size-4" />
              <span className="font-semibold">View All Projects</span>
            </button>
          </Link>
        </div>
        <div className="mt-10 flex flex-col gap-20">
          {portfolioProjects
            .filter((p) => p.featured)
            .map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-8 md:pt-12 md:pb-12 md:px-10 lg:pt-16 lg:pb-16 lg:px-20 sticky"
                style={{ top: `calc(72px + ${projectIndex * 80}px` }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div>
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <button className="bg-white text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        <span>View Related Publication</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                  </div>
                  <div className="relative lg:pb-16">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:w-full"
                    />
                  </div>
                </div>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-2 text-sm md:text-base text-white/50">
                      <CheckCircleIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ToolsSection />
    </div>
  );
}
