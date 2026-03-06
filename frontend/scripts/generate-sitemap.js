import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://haydenlalljie.com';

const staticRoutes = ['/', '/services', '/portfolio', '/projects'];

const projects = JSON.parse(
  readFileSync(resolve(__dirname, '../src/data/collections/projects.json'), 'utf-8')
);

const publishedSlugs = projects.docs
  .filter((p) => p.publicationStatus === 'published')
  .map((p) => ({ slug: p.slug, updatedAt: p.updatedAt }));

const staticEntries = staticRoutes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`
  )
  .join('');

const dynamicEntries = publishedSlugs
  .map(({ slug, updatedAt }) => {
    const lastmod = new Date(updatedAt).toISOString().split('T')[0];
    return `
  <url>
    <loc>${BASE_URL}/portfolio/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
  })
  .join('');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${staticEntries}${dynamicEntries}
</urlset>
`;

const outputPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outputPath, sitemap);
console.log(`Sitemap written to ${outputPath} (${publishedSlugs.length} project pages + ${staticRoutes.length} static pages)`);
