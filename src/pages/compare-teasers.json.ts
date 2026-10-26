import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { COMPARE_PAGES } from '../data/compare-pages';
import { compareTeaser } from '../lib/compare-teaser';
import type { Tablet } from '../lib/tablets';

/* Teasers for the /compare/ hub's picker, fetched once a visitor starts choosing tablets */
export const GET: APIRoute = async () => {
  const all = await getCollection('tablets');
  const byId = new Map(all.map((p) => [p.id, p]));
  const teasers = COMPARE_PAGES.map((page) => {
    const tablets = page.tablets.map((id) => {
      const p = byId.get(id);
      if (!p) throw new Error(`/compare/${page.slug}/: no tablet called "${id}"`);
      return p;
    }) as [Tablet, Tablet];
    return compareTeaser(page, tablets);
  });
  return new Response(JSON.stringify(Object.fromEntries(teasers.map((t) => [t.slug, t]))), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
