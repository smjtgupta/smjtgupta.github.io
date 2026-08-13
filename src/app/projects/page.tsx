import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";

export const metadata = {
  title: "Projects",
  description:
    "Explore Soumyajit Gupta's projects in neural networks, ML, NLP, computational sciences — covering fairness-aware toxicity detection, hyperspectral imaging, and interpretable deep learning models.",
  alternates: {
    canonical: "/projects",
  },
};

interface Publication {
  label: string;
  title: string;
  pdfUrl: string;
  authors: string;
}

const publications: Publication[] = [
  {
    label: "[C10]",
    title: "Fairness-Aware Multi-Group Target Detection in Online Discussion",
    pdfUrl: "https://dl.acm.org/doi/pdf/10.1145/3805689.3806441",
    authors: "Gupta, De-Arteaga, Lease. FAccT 2026.",
  },
  {
    label: "[C9]",
    title:
      "Finding Pareto trade-offs in fair and accurate detection of toxic speech",
    pdfUrl: "https://mattlease.com/papers/gupta_iConf25.pdf",
    authors: "Gupta*, Kovatchev*, Das, De-Arteaga, Lease. iConf 2025.",
  },
  {
    label: "[C8]",
    title:
      "Same Same, But Different: Conditional Multi-Task Learning for Demographic-Specific Toxicity Detection",
    pdfUrl: "https://arxiv.org/pdf/2302.07372",
    authors: "Gupta*, Lee*, De-Arteaga, Lease. WWW 2023.",
  },
  {
    label: "[C7]",
    title: "Learning a neural Pareto manifold extractor with constraints",
    pdfUrl: "https://proceedings.mlr.press/v180/gupta22a/gupta22a.pdf",
    authors: "Gupta*, Singh*, Bollapragada, Lease. UAI 2022.",
  },
  {
    label: "[C6]",
    title:
      "Pareto Solutions vs Dataset Optima: Concepts and Methods for Optimizing Competing Objectives with Constraints in Retrieval",
    pdfUrl: "https://dl.acm.org/doi/abs/10.1145/3471158.3472248",
    authors: "Gupta*, Singh*, Das, Lease. ICTIR 2022.",
  },
  {
    label: "[C5]",
    title:
      "A Streaming model for Generalized Rayleigh with extensions to Minimum Noise Fraction",
    pdfUrl: "https://ieeexplore.ieee.org/document/9006512",
    authors: "Gupta, Bajaj. IEEE International Conference on Big Data 2019.",
  },
  {
    label: "[C4]",
    title:
      "Correlation, Prediction and Ranking of Evaluation Metrics in Information Retrieval",
    pdfUrl: "https://mattlease.com/papers/gupta-ecir19.pdf",
    authors:
      "(Best Student Paper Award). Gupta, Kutlu, Khetan, Lease. WWW 2023.",
  },
  {
    label: "[C3]",
    title:
      "Efficient Clustering-based Noise Covariance Estimation for Maximum Noise Fraction",
    pdfUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6276796/",
    authors: "Gupta, Bajaj. NCVPRIPG, Springer 2017.",
  },
  {
    label: "[C2]",
    title:
      "A GPU based real-time CUDA implementation for obtaining Visual Saliency",
    pdfUrl: "https://dl.acm.org/doi/abs/10.1145/2683483.2683484",
    authors: "Gupta*, Agarwal*, Mukhopadhyay, Layek. ICVGIP, ACM 2014.",
  },
  {
    label: "[C1]",
    title: "Psychovisual saliency in color images",
    pdfUrl: "https://ieeexplore.ieee.org/document/6776158",
    authors: "Gupta*, Agarwal*, Layek, Mukhopadhyay. NCVPRIPG, IEEE 2013.",
  },
  {
    label: "[J2]",
    title:
      "HOFS: Higher order mutual information approximation for feature selection in R",
    pdfUrl:
      "https://www.sciencedirect.com/science/article/pii/S2352711022000930",
    authors: "Gajowniczek, Wu, Gupta, Bajaj. SoftwareX, Elsevier 2022.",
  },
  {
    label: "[J1]",
    title:
      "A Fully Automated, Faster Noise Rejection Approach to Increasing the Analytical Capability of Chemical Imaging for Digital Histopathology",
    pdfUrl:
      "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0205219",
    authors: "Gupta*, Mittal*, Balla, Bhargava, Bajaj. PloS One 2019.",
  },
  {
    label: "[A8]",
    title:
      "A Scalable Multi-Task Learning Framework for Modeling Demographic Disagreements in Annotation Tasks",
    pdfUrl: "",
    authors: "Gupta, De-Arteaga, Lease. Coming soon on Arxiv",
  },
  {
    label: "[A7]",
    title:
      "Tail-Net: Extracting Lowest Singular Triplets for Big Data Applications",
    pdfUrl: "https://arxiv.org/pdf/2104.13968",
    authors: "Gupta*, Singh*. arXiv preprint 2021.",
  },
  {
    label: "[A6]",
    title:
      "SCA-Net: A Self-Correcting Two-Layer Auto-encoder for Hyperspectral Unmixing",
    pdfUrl: "https://arxiv.org/pdf/2102.05713",
    authors: "Gupta*, Singh*, Lease, Dawson. arXiv preprint 2021.",
  },
  {
    label: "[A5]",
    title:
      "Hybrid Neural Pareto Front (HNPF): A Two-Stage Neural-Filter approach for Pareto Front Extraction",
    pdfUrl: "https://arxiv.org/pdf/2101.11684",
    authors: "Gupta*, Singh*, Lease, Dawson. arXiv preprint 2021.",
  },
  {
    label: "[A4]",
    title: "Streaming Singular Value Decomposition for Big Data Applications",
    pdfUrl: "https://arxiv.org/pdf/2101.14226",
    authors: "Gupta*, Singh*, Lease, Dawson. arXiv preprint 2020.",
  },
  {
    label: "[A3]",
    title:
      "Extracting Optimal Solution Manifolds using Constrained Neural Optimization",
    pdfUrl: "https://arxiv.org/pdf/2009.06024",
    authors: "Gupta*, Singh*, Lease. arXiv preprint 2020.",
  },
  {
    label: "[A2]",
    title:
      "Prevention is Better than Cure: Handling Basis Collapse and Transparency in Dense Networks",
    pdfUrl: "https://arxiv.org/pdf/2008.09878",
    authors: "Gupta*, Singh*, Dawson. arXiv preprint 2020.",
  },
  {
    label: "[A1]",
    title:
      "TIME: A Fully Convolutional Neural Network Architecture with Interpretable Kernels for Dynamic Physical Processes",
    pdfUrl: "https://arxiv.org/pdf/2003.02426",
    authors: "Gupta*, Singh*, Lease, Dawson. arXiv preprint 2020.",
  },
];

const groups: { type: string; filter: (p: Publication) => boolean }[] = [
  { type: "Conference", filter: (p) => p.label.startsWith("[C") },
  { type: "Journal", filter: (p) => p.label.startsWith("[J") },
  { type: "Arxiv", filter: (p) => p.label.startsWith("[A") },
];

const IntroSection = () => {
  return (
    <section
      className="flex flex-col items-center pt-40"
      aria-label="Introduction"
    >
      <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
        Projects — Scalable Neural Models
      </h1>
      <p className="mt-4 mx-2 text-white/70 md:text-lg text-center max-w-6xl">
        I specialize in building interpretable neural networks, demonstrating
        that with proper representation, a model can be both high-performing and
        transparent. My solutions are tailored for domain experts, using
        techniques like domain-guided losses and architectures to address
        complex tasks in machine learning, natural language processing, and
        computational sciences.
        <br /> <br />
        For my PhD, I worked on developing fair and accurate neural models for
        toxicity detection in natural language. I used Multi Task Learning
        models to learn how both shared and specific tones of toxicity vary
        across demographic groups. This goes beyond a
        &ldquo;one-size-fits-all&rdquo; model which most often overfits to
        majority groups and raises algorithmic fairness concerns.
      </p>
    </section>
  );
};

interface ProjectItem {
  title: string;
  bullets: string[];
}

interface ProjectField {
  field: string;
  projects: ProjectItem[];
}

const projectFields: ProjectField[] = [
  {
    field: "Machine Learning & Neural Networks",
    projects: [
      {
        title: "Neural SVD Solver for Big Data",
        bullets: [
          "Two-stage neural engine as alternative to randomized SVD techniques",
          "Explicit memory requirement guided by feature dimension and desired rank",
          "Fully interpretable model with meaningful outputs and weights",
        ],
      },
      {
        title: "Hyperspectral Unmixing for Mixture Model",
        bullets: [
          "Autoencoder structure (SCA-Net) to perform blind unmixing of mixture model",
          "Achieves 1000x lower RMSE and SAD scores than reported in state of the art works",
          "Low-weight network with strict interpretability in terms of model",
        ],
      },
      {
        title: "Streaming Low-rank Model for Generalized Rayleigh",
        bullets: [
          "Improved model for Generalized Rayleigh using low-rank constraint for streaming big data",
          "Extensions to Minimum Noise Fraction for Denoising and Linear/Kernel Discriminant Analysis",
          "Achieves around 10x efficiency in time and space compared to state of the art models",
        ],
      },
    ],
  },
  {
    field: "Computational Sciences & Imaging",
    projects: [
      {
        title: "Hyperspectral Imaging Analysis",
        bullets: [
          "End-to-end cancer detection pipelines for biopsy tissue samples",
          "Low-rank, fast and memory-efficient denoising algorithms with error bounds",
          "Higher-order feature selection to weed out redundant and irrelevant features",
        ],
      },
      {
        title: "Real-Time CUDA Visual Saliency",
        bullets: [
          "GPU-based real-time implementation for obtaining visual saliency",
          "Psychovisual saliency models for color images",
        ],
      },
      {
        title: "3D Image Segmentation for Surgical Planning",
        bullets: [
          "Real-time 3D image segmentation assist during facial reconstruction surgery",
          "Exporting 3D models for surgical planning tools and 3D printing",
        ],
      },
      {
        title: "Camera motion estimation for Cryo-EM images",
        bullets: [
          "Simulated Cryo-EM images with simulated noise from Protein Database structures",
          "Built 3D virus capsid geometry from 2D image stacks using bundle assignment",
          "Trained customed ResNet for relative pose estimation of cameras and virus class identification",
        ],
      },
    ],
  },
  {
    field: "Natural Language Processing",
    projects: [
      {
        title: "Multi-Task Learning Toxicity Model",
        bullets: [
          "Conditional MTL model to learn toxicity targeted at different groups",
          "Improved recall ~8% and ~15% over Independent and SoA MTL models",
          "Runtime and parameter reductions by ~56% and ~72% over baseline",
        ],
      },
      {
        title: "GAP for Target-Group Detection",
        bullets: [
          "Group-fairness loss function based on Accuracy Parity measure",
          "Balanced group accuracy around target-group detection",
          "Group disparity reduced from ~22% to ~8% with minimal accuracy drop",
        ],
      },
      {
        title: "Neural Pareto Optimality for Classification and Search",
        bullets: [
          "Interpretable PINN-based Pareto hypernetwork (SUHNPF) to benchmark non-convex verifiable solutions",
          "Extension to finding Pareto Front for Accuracy v.s. Fairness and Relevance v.s. Diversity tasks",
          "Scalable to high dimensional neural problems to trace out an approximate Pareto trade-off front",
        ],
      },
    ],
  },
];

const ProjectsSectionNew = () => {
  return (
    <section className="py-20" aria-label="Projects">
      <div className="container flex flex-col gap-16">
        {projectFields.map((field) => (
          <article key={field.field}>
            <SectionHeader eyebrow="" title={field.field} description="" />
            <ul
              className="flex flex-col gap-6 mt-6"
              aria-label={`Projects in ${field.field}`}
            >
              {field.projects.map((project) => (
                <li key={project.title}>
                  <Card className="px-6 py-6 md:px-8 md:py-8">
                    <h3 className="font-serif text-lg md:text-xl mb-3">
                      {project.title}
                    </h3>
                    <ul>
                      {project.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm md:text-base text-white/70"
                        >
                          <CheckCircleIcon
                            className="size-4 md:size-5 mt-0.5 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

const Publications = () => {
  return (
    <section className="pb-20" aria-label="Publications">
      <div className="container">
        <SectionHeader
          eyebrow="My Submitted Works"
          title="Published and Arxiv"
          description="Grouped by Type"
        />
        <ul className="mt-10 flex flex-col gap-8">
          <li>
            <Card>
              <div className="flex flex-col p-4 md:py-4 md:px-6">
                {groups.map((group) => {
                  const items = publications.filter(group.filter);
                  return (
                    <div key={group.type}>
                      <h3 className="text-center text-lg py-2 font-semibold">
                        {group.type}
                      </h3>
                      <ul aria-label={`${group.type} publications`}>
                        {items.map((pub) => (
                          <li
                            key={pub.label}
                            className="flex items-start gap-3 pb-4"
                          >
                            <span>{pub.label}</span>
                            <p className="text-lg">
                              <strong>
                                {pub.title} [
                                <a
                                  className="text-cyan-300 underline"
                                  href={pub.pdfUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  pdf
                                </a>
                                ]
                              </strong>{" "}
                              <span className="hidden md:block"> </span>
                              {pub.authors}
                            </p>
                          </li>
                        ))}
                      </ul>
                      {group.type !== "Arxiv" && (
                        <hr className="border-t border-gray-300 my-4" />
                      )}
                    </div>
                  );
                })}
              </div>
            </Card>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default function ProjectsPage() {
  return (
    <>
      <IntroSection />
      <ProjectsSectionNew />
      <Publications />
    </>
  );
}
