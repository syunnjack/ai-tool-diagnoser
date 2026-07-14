import type { APIRoute } from 'astro';
import { diagnoses } from '../data/diagnoses';

export const GET: APIRoute = ({ site }) => {
  const base = site?.toString().replace(/\/$/, '') ?? '';

  const urls = [
    { loc: `${base}/`, priority: '1.0' },
    { loc: `${base}/about/`, priority: '0.3' },
    ...diagnoses.flatMap((diagnosis) => [
      { loc: `${base}/diagnosis/${diagnosis.slug}/`, priority: '0.9' },
      ...diagnosis.results.map((result) => ({
        loc: `${base}/diagnosis/${diagnosis.slug}/result/${result.slug}/`,
        priority: '0.8',
      })),
    ]),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
