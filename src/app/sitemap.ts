// import type { MetadataRoute } from 'next';
// import { getAllWorksList, getAllNotesList } from '@/lib/microcms';

// export const revalidate = 60 * 60 * 24; // 1 day

// if (!process.env.SITE_URL) {
//   throw new Error('SITE_URL is not defined');
// }

// // Remove trailing slash from SITE_URL if present
// const siteUrl = process.env.SITE_URL.replace(/\/$/, '');

// const buildUrl = (path = '') => `${siteUrl}${path}`;

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const worksContent = await getAllWorksList();
//   const notesContent = await getAllNotesList();

//   const worksUrls: MetadataRoute.Sitemap = worksContent.map((content) => ({
//     url: buildUrl(`/${content.id}`),
//     lastModified: content.updatedAt,
//   }));
//   const notesUrls: MetadataRoute.Sitemap = notesContent.map((content) => ({
//     url: buildUrl(`/notes/${content.id}`),
//     lastModified: content.updatedAt,
//   }));

//   const now = new Date();

//   return [
//     {
//       url: buildUrl(''),
//       lastModified: now,
//     },
//     {
//       url: buildUrl('/notes'),
//       lastModified: now,
//     },
//     ...worksUrls,
//     ...notesUrls,
//   ];
// }
