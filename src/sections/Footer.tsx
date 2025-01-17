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
