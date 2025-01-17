import svdImage from "@/assets/images/svd.png";
import mtlImage from "@/assets/images/mtl.png";
import gapImage from "@/assets/images/gap.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "UT Austin",
    year: "2021",
    title: "Neural SVD solver for Big Data",
    results: [
      {
        title:
          "Two stage neural engine as alternative to randomized SVD techniques",
      },
      {
        title:
          "Explicit Memory requirement: guided by feature dimension and desired rank",
      },
      {
        title:
          "Fully interpretable model: all outputs and weights have specific meaning",
      },
    ],
    link: "https://arxiv.org/pdf/2010.14226",
    image: svdImage,
  },
  {
    company: "UT Austin",
    year: "2023",
    title: "Multi Task Learning Toxicity Model ",
    results: [
      {
        title:
          "Conditional MTL model to learn toxicity targeted at different groups",
      },
      {
        title:
          "Improved Recall ~8% and ~15% over Independent and SoA MTL models",
      },
      {
        title:
          "Runtime and Parameter reductions by ~56% and ~72% over Baseline",
      },
    ],
    link: "https://arxiv.org/pdf/2302.07372",
    image: mtlImage,
  },
  {
    company: "UT Austin",
    year: "2025",
    title: "GAP for Target-group detection",
    results: [
      {
        title: "Group-fairness loss function based on Accuracy Parity measure",
      },
      { title: "Balanced group accuracy around Target-group detection" },
      {
        title:
          "Group disparity reduced from ~22% to ~8% with minimal accuracy drop",
      },
    ],
    link: "https://arxiv.org/pdf/2407.11933",
    image: gapImage,
  },
];

export const ProjectsSection = () => {
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
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{ top: `calc(72px + ${projectIndex * 80}px` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 ">
                      <span>View Work</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 md:-mb-0 lg:mt-0 lg:absolute lg:w-full"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
