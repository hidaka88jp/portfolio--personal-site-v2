import type { MetadataRoute } from 'next';

if (!process.env.SITE_URL) {
  throw new Error('SITE_URL is not defined');
}

// Remove trailing slash from SITE_URL if present
const siteUrl = process.env.SITE_URL.replace(/\/$/, '');

export default function robots(): MetadataRoute.Robots {
  // Do not allow crawling in non-production environments (e.g., development, staging)
  if (process.env.NODE_ENV !== 'production') {
    return {
      rules: [
        {
          userAgent: '*',
          disallow: '/',
        },
      ],
    };
  }

  // Allow crawling of all pages in production, but disallow crawling of /notes and its subpages
  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/notes',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
