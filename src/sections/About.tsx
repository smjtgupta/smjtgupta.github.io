import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import profileImage from "@/assets/images/profile_pic.jpg";

export const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Soumyajit Gupta"
          description="Machine Learning - Neural Nets - Natural Language - Computational Sciences"
        />
        <div className="mt-10 flex flex-col gap-20">
          <Card className="px-4 py-12">
            <div className="flex items-center flex-col md:flex-row w-full h-full">
              <div className="flex-1 items-center justify-center">
                <p className="md:pl-6 pb-4">
                  This is{" "}
                  <span className="text-emerald-300 font-semibold">Soumo</span>,
                  based in Reno, Nevada. <br />
                  I'm a representation and interpretation-driven neural modeler
                  and data scientist.
                </p>
                <p className="md:pl-6 pb-4">
                  I recently finished my PhD on Multi-Task models for
                  group-targeted Toxicity detection, co-advised by{" "}
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
                  , from UT Austin, Department of Computer Science.
                </p>
                <p className="md:pl-6 pb-4">
                  I am currently available for{" "}
                  <span className="text-emerald-300 font-semibold">
                    Full-time Remote or In-person
                  </span>{" "}
                  positions in the{" "}
                  <span className="text-emerald-300 font-semibold">
                    Reno and Las Vegas
                  </span>{" "}
                  area.
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
