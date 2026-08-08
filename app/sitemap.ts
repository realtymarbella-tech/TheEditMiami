import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = "https://www.santamaria-collection.com";
  const now = new Date();

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0,
      alternates: { languages: { es: `${BASE}/`, en: `${BASE}/en` } } },
    { url: `${BASE}/en`, lastModified: now, changeFrequency: "weekly", priority: 1.0,
      alternates: { languages: { es: `${BASE}/`, en: `${BASE}/en` } } },
    { url: `${BASE}/cipriani-residences`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { es: `${BASE}/cipriani-residences`, en: `${BASE}/en/cipriani-residences` } } },
    { url: `${BASE}/en/cipriani-residences`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { es: `${BASE}/cipriani-residences`, en: `${BASE}/en/cipriani-residences` } } },
    { url: `${BASE}/elle-residences-miami`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { es: `${BASE}/elle-residences-miami`, en: `${BASE}/en/elle-residences-miami` } } },
    { url: `${BASE}/en/elle-residences-miami`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { es: `${BASE}/elle-residences-miami`, en: `${BASE}/en/elle-residences-miami` } } },
    { url: `${BASE}/domus-brickell`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { es: `${BASE}/domus-brickell`, en: `${BASE}/en/domus-brickell` } } },
    { url: `${BASE}/en/domus-brickell`, lastModified: now, changeFrequency: "weekly", priority: 0.9,
      alternates: { languages: { es: `${BASE}/domus-brickell`, en: `${BASE}/en/domus-brickell` } } },
  ];
}
