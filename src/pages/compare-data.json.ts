import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getImage } from 'astro:assets';
import { COMPARE_ROWS, tabletFacts } from '../lib/tablets';

/* Data for the site-wide compare tray, fetched only when the tray is used */
export const GET: APIRoute = async () => {
  const tablets = await getCollection('tablets');
  const facts = await Promise.all(
    tablets.map(async (p) => {
      const thumb = p.data.image
        ? (await getImage({ src: p.data.image, width: 120, height: 120, fit: 'contain', format: 'webp' })).src
        : undefined;
      const f = tabletFacts(p, thumb);
      return { id: f.id, name: f.name, brand: f.brand, href: f.href, thumb: f.thumb, compare: f.compare };
    }),
  );
  return new Response(JSON.stringify({ rows: COMPARE_ROWS.map((r) => r.label), tablets: facts }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
