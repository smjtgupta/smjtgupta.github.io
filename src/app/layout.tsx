import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    default: "Soumyajit Gupta | ML Engineer & Applied AI Scientist",
    template: "%s | Soumyajit Gupta",
  },
  description:
    "Soumyajit Gupta is an ML Engineer, NLP and LLM Researcher, and Applied AI Scientist specializing in fair toxicity detection, scalable neural networks, and interpretable machine learning for computational sciences.",
  keywords: [
    "Soumyajit Gupta",
    "Soumo",
    "Machine Learning Engineer",
    "NLP Researcher",
    "LLM Researcher",
    "Applied AI Scientist",
    "Toxicity Detection",
    "Fairness in AI",
    "Multi-Task Learning",
    "Neural Networks",
    "Computational Sciences",
    "University of Texas at Austin",
    "Smart Dust Systems",
  ],
  authors: [{ name: "Soumyajit Gupta" }],
  creator: "Soumyajit Gupta",
  publisher: "Soumo",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://smjtgupta.github.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Soumyajit Gupta - Portfolio",
    title: "Soumyajit Gupta | ML Engineer & Applied AI Scientist",
    description:
      "ML Engineer, NLP and LLM Researcher, and Applied AI Scientist specializing in fair toxicity detection, scalable neural networks, and interpretable machine learning.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Soumyajit Gupta - ML Engineer & Applied AI Scientist",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumyajit Gupta | ML Engineer & Applied AI Scientist",
    description:
      "ML Engineer, NLP and LLM Researcher specializing in fair toxicity detection and scalable neural networks.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          (inter as any).variable,
            "bg-gray-900 text-white antialiased font-sans"
          )}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-1/2 focus:-translate-x-1/2 focus:z-[9999] focus:bg-emerald-300 focus:text-gray-900 focus:px-6 focus:py-3 focus:rounded-lg"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Soumyajit Gupta",
              alternateName: "Soumo",
              givenName: "Soumyajit",
              familyName: "Gupta",
              jobTitle: [
                "ML Engineer",
                "NLP Researcher",
                "LLM Researcher",
                "Applied AI Scientist",
              ],
              url: "https://smjtgupta.github.io",
              email: "smjtgupta@gmail.com",
              worksFor: {
                 "@type": "Organization",
                name: "Smart Dust Systems",
                url: "https://www.smartdustsystems.com/",
               },
              alumniOf: [
                 {
                   "@type": "University",
                  name: "University of Texas at Austin",
                  url: "https://www.utexas.edu/",
                 },
                 {
                   "@type": "University",
                  name: "IIT Kharagpur",
                  address: { "@type": "PostalAddress", addressCountry: "IN" },
                 },
               ],
              sameAs: [
                "https://www.linkedin.com/in/soumyajit-gupta/",
                "https://scholar.google.com/citations?user=q3jQsVQAAAAJ&hl=en",
                "https://github.com/smjtgupta",
              ],
              knowsAbout: [
                "Machine Learning",
                "Natural Language Processing",
                "Large Language Models",
                "Artificial Intelligence",
                "Computational Sciences",
                "Fairness in AI",
                "Toxicity Detection",
                "Multi-Task Learning",
                "Neural Networks",
                "Computer Vision",
              ],
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
                addressRegion: "Maharashtra",
                addressLocality: "Mumbai",
              },
            }),
          }}
        />
        <Navbar />
        <main id="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
