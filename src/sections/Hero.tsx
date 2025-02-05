import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowRight from "@/assets/icons/arrow-up-right.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="h-screen py-20 md:py-56 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-10"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-15}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={80}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={500}
          rotation={20}
          shouldOrbit
          orbitDuration="34s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-40} shouldOrbit orbitDuration="36s">
          <div className="size-3 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={180}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-20 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={100} shouldOrbit orbitDuration="40s">
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-3 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={140}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <SparkleIcon className="size-28 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={80} shouldOrbit orbitDuration="46s">
          <div className="size-3 rounded-full text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-70}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Person peeking from behind laptop"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for Full-time Work
            </div>
          </div>
          <div className="max-w-xl mx-auto">
            <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
              Scalable Neural Models for Your Needs
            </h1>
            <p className="mt-4 text-center text-white/60 md:text-lg">
              I craft domain-guided neural models using advanced machine
              learning and natural language technologies. {""}
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

// {
//   /* TODOS
//   1. Fix Circle Visibility
//   2. Replace Memoji
//   3. Implement a pop out about me like: https://anuragsinghbam.netlify.app/
//  */
//
// }
