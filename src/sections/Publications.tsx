import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

export const Publications = () => {
  return (
    <div className="py-20">
      <div className="container">
        <div className="flex flex-col items-center py-16">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Scalable Neural Models for Your Needs
          </h1>
          <p className="mt-4 mx-2 text-white/60 md:text-lg text-center">
            I specialize in building interpretable neural networks,
            demonstrating that with proper representation, a model can be both
            high-performing and transparent. My solutions are tailored for
            domain experts, using techniques like domain-guided losses and
            architectures to address complex tasks in machine learning, natural
            language processing, and computational sciences.
            <br /> <br />
            For my PhD, I worked on developing fair and accurate neural models
            for toxicity detection in natural language. I used Multi Task
            Learning models to learn how both shared and specific tones of
            toxicity vary across demographic groups. This goes beyond a
            “one-size-fits-all” model which most often overfits to majority
            groups and raises algorithmic fairness concerns.
          </p>
        </div>
        <SectionHeader
          eyebrow="My Submitted Works"
          title="Published and Arxiv"
          description="Grouped by Type"
        />
        <div className="mt-10 flex flex-col gap-8">
          <Card>
            <div className="flex flex-col p-4 md:py-4 md:px-6">
              <h3 className="text-center text-lg py-2 font-semibold">
                Conference
              </h3>
              <li className="flex items-start gap-3 pb-4">
                <span>[C8]</span>
                <p className="text-lg">
                  <strong>
                    Same Same, But Different: Conditional Multi-Task Learning
                    for Demographic-Specific Toxicity Detection [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2302.07372"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Lee, De-Arteaga, Lease. WWW 2023.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C7]</span>
                <p className="text-lg">
                  <strong>
                    Learning a neural Pareto manifold extractor with constraints
                    [
                    <a
                      className="text-cyan-300 underline"
                      href="https://proceedings.mlr.press/v180/gupta22a/gupta22a.pdf"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Singh, Bollapragada, Lease. UAI 2022.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C6]</span>
                <p className="text-lg">
                  <strong>
                    Pareto Solutions vs Dataset Optima: Concepts and Methods for
                    Optimizing Competing Objectives with Constraints in
                    Retrieval [
                    <a
                      className="text-cyan-300 underline"
                      href="https://dl.acm.org/doi/abs/10.1145/3471158.3472248"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Singh, Das, Lease. ICTIR 2022.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C5]</span>
                <p className="text-lg">
                  <strong>
                    A Streaming model for Generalized Rayleigh with extensions
                    to Minimum Noise Fraction [
                    <a
                      className="text-cyan-300 underline"
                      href="https://ieeexplore.ieee.org/document/9006512"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Bajaj. IEEE International Conference on Big Data 2019.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C4]</span>
                <p className="text-lg">
                  <strong>
                    Correlation, Prediction and Ranking of Evaluation Metrics in
                    Information Retrieval [
                    <a
                      className="text-cyan-300 underline"
                      href="https://ischool.utexas.edu/~leasema1/papers/gupta-ecir19.pdf"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  (Best Student Paper Award). Gupta, Lee, De-Arteaga, Lease. WWW
                  2023.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C3]</span>
                <p className="text-lg">
                  <strong>
                    Efficient Clustering-based Noise Covariance Estimation for
                    Maximum Noise Fraction [
                    <a
                      className="text-cyan-300 underline"
                      href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6276796/"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Bajaj. NCVPRIPG, Springer 2017.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C2]</span>
                <p className="text-lg">
                  <strong>
                    A GPU based real-time CUDA implementation for obtaining
                    Visual Saliency [
                    <a
                      className="text-cyan-300 underline"
                      href="https://dl.acm.org/doi/abs/10.1145/2683483.2683484"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Agarwal, Gupta, Mukhopadhyay, Layek. ICVGIP, ACM 2014.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[C1]</span>
                <p className="text-lg">
                  <strong>
                    Psychovisual saliency in color images [
                    <a
                      className="text-cyan-300 underline"
                      href="https://ieeexplore.ieee.org/document/6776158"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Agarwal, Layek, Mukhopadhyay. NCVPRIPG, IEEE 2013.
                </p>
              </li>
              <hr className="border-t border-gray-300 my-4" />
              <h3 className="text-center text-lg py-2 font-semibold">
                Journal
              </h3>
              <li className="flex items-start gap-3 pb-4">
                <span>[J2]</span>
                <p className="text-lg">
                  <strong>
                    HOFS: Higher order mutual information approximation for
                    feature selection in R [
                    <a
                      className="text-cyan-300 underline"
                      href="https://www.sciencedirect.com/science/article/pii/S2352711022000930"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gajowniczek, Wu, Gupta, Bajaj. SoftwareX, Elsevier 2022.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[J1]</span>
                <p className="text-lg">
                  <strong>
                    A Fully Automated, Faster Noise Rejection Approach to
                    Increasing the Analytical Capability of Chemical Imaging for
                    Digital Histopathology [
                    <a
                      className="text-cyan-300 underline"
                      href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0205219"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Mittal, Balla, Bhargava, Bajaj. PloS One 2019.
                </p>
              </li>
              <hr className="border-t border-gray-300 my-4" />
              <h3 className="text-center text-lg py-2 font-semibold">Arxiv</h3>
              <li className="flex items-start gap-3 pb-4">
                <span>[A7]</span>
                <p className="text-lg">
                  <strong>
                    Tail-Net: Extracting Lowest Singular Triplets for Big Data
                    Applications [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2104.13968"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Singh, Gupta. arXiv preprint 2021.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[A6]</span>
                <p className="text-lg">
                  <strong>
                    SCA-Net: A Self-Correcting Two-Layer Auto-encoder for
                    Hyperspectral Unmixing [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2102.05713"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Singh, Gupta, Lease, Dawson. arXiv preprint 2021.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[A5]</span>
                <p className="text-lg">
                  <strong>
                    Hybrid Neural Pareto Front (HNPF): A Two-Stage Neural-Filter
                    approach for Pareto Front Extraction [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2101.11684"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Singh, Lease, Dawson. arXiv preprint 2021.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[A4]</span>
                <p className="text-lg">
                  <strong>
                    Streaming Singular Value Decomposition for Big Data
                    Applications [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2101.14226"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Singh, Lease, Dawson. arXiv preprint 2020.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[A3]</span>
                <p className="text-lg">
                  <strong>
                    Extracting Optimal Solution Manifolds using Constrained
                    Neural Optimization [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2009.06024"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Singh, Lease. arXiv preprint 2020.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[A2]</span>
                <p className="text-lg">
                  <strong>
                    Prevention is Better than Cure: Handling Basis Collapse and
                    Transparency in Dense Networks [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2008.09878"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Gupta, Singh, Dawson. arXiv preprint 2020.
                </p>
              </li>
              <li className="flex items-start gap-3 pb-4">
                <span>[A1]</span>
                <p className="text-lg">
                  <strong>
                    TIME: A Fully Convolutional Neural Network Architecture with
                    Interpretable Kernels for Dynamic Physical Processes [
                    <a
                      className="text-cyan-300 underline"
                      href="https://arxiv.org/pdf/2003.02426"
                    >
                      pdf
                    </a>
                    ]
                  </strong>{" "}
                  <span className="hidden md:block"> </span>
                  Singh, Gupta, Lease, Dawson. arXiv preprint 2020.
                </p>
              </li>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
