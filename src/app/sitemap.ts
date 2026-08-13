import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
        url: "https://smjtgupta.github.io",
        lastModified: new Date("2026-08-13"),
        changeFrequency: "always" as const,
        priority: 1,
      },
      {
        url: "https://smjtgupta.github.io/projects",
        lastModified: new Date("2026-08-13"),
        changeFrequency: "weekly" as const,
        priority: 0.95,
      },
      {
        url: "https://smjtgupta.github.io/portfolio",
        lastModified: new Date("2026-08-13"),
        changeFrequency: "monthly" as const,
        priority: 0.9,
      },
      {
        url: "https://smjtgupta.github.io/contact",
        lastModified: new Date("2026-08-13"),
        changeFrequency: "monthly" as const,
        priority: 0.85,
      },
   ];
}
