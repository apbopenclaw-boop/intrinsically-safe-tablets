import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';
import { BEST_PAGES } from '../data/best-pages';
import { COMPARE_PAGES } from '../data/compare-pages';
import { GUIDE_PAGES } from '../data/guide-pages';
import { TYPE_LABEL, schemeList, zoneLabel, type Tablet } from '../lib/tablets';

// Built from the same data as the pages, so the summary for AI tools never drifts from the site

const line = (p: Tablet) => {
  const d = p.data;
  const facts = [zoneLabel(p), schemeList(p).join(', ') || d.certification.note, d.os.name !== 'Other' && d.os.name]
    .filter(Boolean)
    .join(', ');
  const host = d.hostDevice ? ` for the ${d.hostDevice}` : '';
  const status = d.status === 'discontinued' ? ' Discontinued.' : '';
  return `- [${d.name}](${SITE.url}/tablets/${p.id}/): ${facts}. ${TYPE_LABEL[d.type]}${host}.${status}`;
};

const TYPE_HEADING: Record<Tablet['data']['type'], string> = {
  dedicated: 'Dedicated Ex tablets',
  'rugged-variant': 'Ex versions of rugged tablets',
  'ex-case': 'Certified Ex cases for iPads',
  conversion: 'Converted tablets',
};

const section = (heading: string, links: { slug: string; title: string; description: string }[], base: string) =>
  links.length
    ? [`## ${heading}`, ...links.map((l) => `- [${l.title}](${SITE.url}/${base}/${l.slug}/): ${l.description}`), '']
    : [];

export const GET: APIRoute = async () => {
  const tablets = (await getCollection('tablets')).sort((a, b) => a.data.name.localeCompare(b.data.name));
  const types = Object.keys(TYPE_HEADING) as Tablet['data']['type'][];

  const body = [
    '# explosionprooftablets.com',
    '',
    `> ${SITE.name}: ${SITE.description} ${tablets.length} ATEX and IECEx certified tablets, Ex cases and converted tablets for Zone 1 and Zone 2, compared from their certificates.`,
    '',
    '## What this site covers',
    '- Tablets certified for Zone 1 and Zone 2 (gas) and Zone 21 and 22 (dust) under ATEX, IECEx and UKEX, launched from about 2019',
    '- Four kinds: dedicated Ex tablets, Ex versions of rugged tablets, certified Ex cases for iPads, and converted tablets',
    '- Protection concepts: intrinsic safety (Ex ia, ib, ic), flameproof enclosure (Ex db), increased safety (Ex ec), restricted breathing (Ex nR)',
    '- Ex markings, temperature classes, certificate numbers and conditions of use come from certificates, declarations of conformity and makers\' datasheets. Every tablet page lists its sources.',
    '- A value we could not confirm is marked as unconfirmed on the page. Prices are not listed: tablets are sold on request.',
    '- Only products certified with Ex i protection are called intrinsically safe. Flameproof and other products are called explosion-proof or ATEX certified.',
    '',
    `## Sponsor`,
    `- The site is sponsored by Xshielder, a Norwegian maker of explosion-proof cases for iPhone and iPad: ${SITE.url}/disclosure/`,
    '',
    '## Main pages',
    `- [All tablets](${SITE.url}/tablets/): filter by zone, protection, operating system, screen size, type and weight`,
    `- [How we rate](${SITE.url}/how-we-rate/): sources and the rules applied to every tablet`,
    `- [About](${SITE.url}/about/)`,
    '',
    ...section('Best for', BEST_PAGES, 'best'),
    ...section('Head-to-head comparisons', COMPARE_PAGES, 'compare'),
    ...section('Guides', GUIDE_PAGES, 'guides'),
    ...types.flatMap((t) => {
      const list = tablets.filter((p) => p.data.type === t);
      return list.length ? [`## ${TYPE_HEADING[t]}`, ...list.map(line), ''] : [];
    }),
    '## Related sites',
    '- Intrinsically safe phones: https://intrinsicallysafephones.com',
    '- Hazardous Area Guide network: https://hazardousareaguide.com',
    '',
    '## Contact',
    `- Questions, corrections and price requests: ${SITE.url}/contact/`,
    `- Privacy: ${SITE.url}/privacy.html`,
    '',
  ];

  return new Response(body.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
