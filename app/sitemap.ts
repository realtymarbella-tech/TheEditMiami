import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = "https://santamaria-collection.vercel.app";
  const now = new Date();

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/cipriani-residences`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/elle-residences-miami`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/domus`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];
}
