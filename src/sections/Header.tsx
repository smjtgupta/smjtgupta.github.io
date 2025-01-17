import Image from "next/image";
import SiteLogo from "@/assets/images/soumo_logo.png";

export const Header = () => {
  return (
    <div className="fixed flex justify-center items-center top-10 w-full z-10 px-4">
      <a
        href="#"
        className="absolute flex items-center gap-2 text-gray-300"
        style={{ left: "10vw" }}
      >
        <Image
          src={SiteLogo}
          alt="Website Logo"
          className="hidden md:block h-12 w-auto"
        />
        <span className="hidden lg:block text-lg text-semibold">
          Soumo's Website
        </span>
      </a>
      <nav className="absolute left-1/2 transform -translate-x-1/2 flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#about" className="nav-item">
          About
        </a>
        <a href="#projects" className="nav-item">
          Projects
        </a>
        <a href="#portfolio" className="nav-item">
          Portfolio
        </a>
        <a href="#tools" className="nav-item">
          Tools
        </a>
      </nav>
    </div>
  );
};
