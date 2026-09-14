import type { MetadataRoute } from "next";
import { PROJECTS } from "../data/projects";
import { getAllPosts } from "../utils/blogApi";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ghostbyte.dev";
  const currentDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/de`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
      alternates: {
        languages: {
          en: baseUrl,
          de: `${baseUrl}/de`,
        },
      },
    },
    {
      url: `${baseUrl}/imprint`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.1,
      alternates: {
        languages: {
          en: `${baseUrl}/imprint`,
          de: `${baseUrl}/de/impressum`,
        },
      },
    },
    {
      url: `${baseUrl}/de/impressum`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.1,
      alternates: {
        languages: {
          en: `${baseUrl}/imprint`,
          de: `${baseUrl}/de/impressum`,
        },
      },
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.1,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy-policy`,
          de: `${baseUrl}/de/datenschutz`,
        },
      },
    },
    {
      url: `${baseUrl}/de/datenschutz`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.1,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy-policy`,
          de: `${baseUrl}/de/datenschutz`,
        },
      },
    },
  ];

  const dynamicProjectRoutes: MetadataRoute.Sitemap = PROJECTS.flatMap(
    (project) => {
      const enUrl = `${baseUrl}${project.link}`;
      const deUrl = `${baseUrl}/de${project.link}`;

      const languages = {
        en: enUrl,
        de: deUrl,
      };

      return [
        {
          url: enUrl,
          lastModified: currentDate,
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: { languages },
        },
        {
          url: deUrl,
          lastModified: currentDate,
          changeFrequency: "monthly",
          priority: 0.7,
          alternates: { languages },
        },
      ];
    },
  );

  const posts = getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticRoutes, ...dynamicProjectRoutes, ...blogRoutes];
}
