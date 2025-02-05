import Link from "next/link";
import Image from "next/image";
import SiteLogo from "@/assets/images/soumo_logo.png";
import ContactLogo from "@/assets/icons/email.svg";
import { TechIcon } from "@/components/TechIcon";

const Navbar = () => {
  return (
    <nav className="fixed shadow-md w-full z-10 top-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-10">
          {/* Left Section - Logo */}
          <div className="flex justify-center items-center">
            <Link
              href="/"
              className="text-xl font-bold flex items-center space-x-2"
            >
              <Image
                src={SiteLogo}
                alt="Website Logo"
                className="hidden md:block h-12 w-auto"
              />
              <span className="hidden lg:block text-lg text-semibold  text-gray-300">
                Soumo's Website
              </span>
            </Link>
          </div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Middle Section - Navigation Links */}
            <div className="flex items-center px-2 py-2 border border-white/15 rounded-full bg-white/10 backdrop-blur">
              <Link
                href="/"
                className="text-gray-300 hover:bg-white/30 px-3 py-2 rounded-full font-semibold"
              >
                Home
              </Link>
              <Link
                href="/projects"
                className="text-gray-300 hover:bg-white/30 px-3 py-2 rounded-full font-semibold"
              >
                Projects
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-300 hover:bg-white/30 px-3 py-2 rounded-full font-semibold"
              >
                Portfolio
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:bg-white/30 px-3 py-2 rounded-full font-semibold"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
