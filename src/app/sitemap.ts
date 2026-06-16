import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cureplusbloodbank.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blood-donor-registration`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/volunteer-form`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/donor-form`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blood-donation-facts`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blood-donation-mysore`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}