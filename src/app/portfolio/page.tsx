import { SectionHeader } from "@/components/SectionHeader";
import { ToolsSection } from "@/sections/Tools";

export const metadata = {
  title: "Portfolio",
  description:
     "Soumyajit Gupta's professional portfolio: experience as AI Engineer at Smart Dust Systems, Research Assistant at UT Austin; PhD and MS from University of Texas, MTech from IIT Kharagpur.",
  alternates: {
    canonical: "/portfolio",
  },
};

const workExperienceData = [
   {
    role: "AI Engineer",
    company: ["Smart Dust Systems", "Reno, USA", "Feb 2025 - Present"],
    responsibilities: [
       "Modeling to identify page features and improve SERP ranking for content",
       "Tracking web and LLM search ranking to learn algorithmic updates",
       "Search & Generative Optimization (SEO & GEO) for on-page content refinement",
       "Agentic AI workflow leveraging knowledge graph & integrated MCP tools",
     ],
   },
   {
    role: "AI Research Assistant",
    company: ["UT Austin, USA & Wipro, India", "Jan 2022 - Dec 2023"],
    responsibilities: [
       "Developing multi-modal toxicity detection models across languages",
       "Organizing multi-level labeling schema for toxicity datasets",
       "Ensuring fairness in performance across demographics",
     ],
   },
   {
    role: ["Imaging Intern"],
    company: ["HomeAway (now Vrbo), Austin, USA", "(June - Aug) 2017"],
    responsibilities: [
       "Implemented real-time algorithms to measure and improve image properties",
       "Framework deployed to tag and assess all past and incoming images",
       "Used AWS to score the company's images db and Mech Turk for validation",
     ],
   },
   {
    role: ["Software Intern"],
    company: ["UT Austin, Dell Medical School", "(June - Aug) 2016"],
    responsibilities: [
       "Real-time 3D image segmentation assist during facial reconstruction surgery",
       "Exporting 3D models for use in various surgical planning tools and 3D printing",
       "Patient-specific modeling & compliance with medical data privacy and security",
     ],
   },
];

const educationData = [
   {
    degree: "PhD in Computer Science",
    institution: ["University of Texas", "at Austin, USA"],
    responsibilities: [
       "Research on scalable Machine Learning algorithms and Neural Network design",
       "Content Moderation & Fairness for Group-dependent tasks",
       "Advisors: Matthew Lease & Maria De-Arteaga",
     ],
   },
   {
    degree: "MS in Computer Science",
    institution: ["University of Texas", "at Austin, USA"],
    responsibilities: [
       "Specialized in Machine Learning for Computational Sciences",
       "Fast pipelines for biopsy analysis using Hyperspectral Imaging",
       "Advisor: Chandrajit Bajaj",
     ],
   },
   {
    degree: "MTech in Electronics & Electrical Engg.",
    institution: "IIT Kharagpur, India",
    responsibilities: [
       "Specialized in Computational Imaging  & Embedded Systems",
       "Computational Saliency Models & Parallel Programming",
       "Advisor: Jayanta Mukhopadhyay & Ritwik K. Layek",
     ],
   },
];

const PortfolioSection = () => {
  return (
     <div className="py-20">
       <div className="container">
         <header className="py-20 items-center text-center tracking-wide mt-4 text-white/70 md:text-lg max-w-5xl mx-auto">
           <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
             Portfolio
           </h1>
           <p className="mt-4">
             I deliver practical scalable solutions, bridging theory and
             application, applying domain-specific knowledge to address key
             challenges across sectors with industry level coding and pipeline
             standards.
           </p>
         </header>

         <section id="work" aria-label="Work History">
           <SectionHeader
            eyebrow="Professional Experience"
            title="Work History"
            description=""
           />
           <ul className="mt-10 flex flex-col gap-16" aria-label="Work experience entries">
             {workExperienceData.map((item, index) => (
               <li key={index} className="flex flex-col md:flex-row gap-8">
                 <div className="md:w-1/3">
                   {Array.isArray(item.role) ? (
                     <h3 className="font-serif text-2xl md:text-3xl flex flex-col gap-1">
                       {item.role.map((line, i) => (
                         <span key={i}>{line}</span>
                       ))}
                     </h3>
                   ) : (
                     <h3 className="font-serif text-2xl md:text-3xl">
                       {item.role}
                     </h3>
                   )}
                   {Array.isArray(item.company) ? (
                     <p className="text-white/70 mt-1 flex flex-col gap-1">
                       {item.company.map((line, i) => (
                         <span key={i}>{line}</span>
                       ))}
                     </p>
                   ) : (
                    <p className="text-white/70 mt-1">{item.company}</p>
                    )}
                  </div>
                  <div className="md:w-2/3">
                    <ul className="flex flex-col gap-4 text-white/60">
                      {item.responsibilities.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-400">{"\u2022"}</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section id="education" aria-label="Education">
           <SectionHeader
            eyebrow="Academic Background"
            title="Education"
            description=""
           />
           <ul className="mt-10 flex flex-col gap-16" aria-label="Education entries">
             {educationData.map((item, index) => (
               <li key={index} className="flex flex-col md:flex-row gap-8">
                 <div className="md:w-1/3">
                   {Array.isArray(item.institution) ? (
                     <h3 className="font-serif text-2xl md:text-3xl flex flex-col gap-1">
                       {item.institution.map((line, i) => (
                         <span key={i}>{line}</span>
                       ))}
                     </h3>
                   ) : (
                     <h3 className="font-serif text-2xl md:text-3xl">
                       {item.institution}
                     </h3>
                   )}
                    <p className="text-white/70 mt-1">{item.degree}</p>
                  </div>
                  <div className="md:w-2/3">
                    <ul className="flex flex-col gap-4 text-white/60">
                      {item.responsibilities.map((r, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-emerald-400">{"\u2022"}</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
             ))}
           </ul>
         </section>
       </div>
     </div>
   );
};

export default function PortfolioPage() {
  return (
      <>
        <PortfolioSection />
        <ToolsSection />
      </>
    );
}
