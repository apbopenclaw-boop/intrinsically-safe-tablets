import { GUIDE_PAGES } from '../data/guide-pages';

export const SITE = {
  name: 'Intrinsically Safe Tablets',
  url: 'https://explosionprooftablets.com',
  description:
    'Independent guidance on intrinsically safe and explosion-proof tablets for hazardous workplaces.',
  locale: 'en_GB',
  ogImage: '/og-image.png',
  // ON HOLD (Rory, 2026-10-26): these are the phones site's GA4 ID and Web3Forms key, copied with the engine. The GTM
  // container is the one the legacy tablet site also loads. Don't launch with them; Rory confirms the tablet IDs and
  // the form set-up first (launch checklist in CLAUDE.md).
  analytics: { ga4: 'G-H5CXD10JVJ', gtm: 'GTM-MFSPF6PH' },
  web3formsKey: '930572e9-b94e-4d18-9c2b-25999a09ef0f',
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  heading?: string;
  links: NavLink[];
}

/** A top-level nav entry: a plain link, or a dropdown made of one or more groups. */
export type NavItem =
  | (NavLink & { menu?: undefined })
  | { label: string; href: string; menu: NavGroup[]; footerLink?: NavLink };

export const FIND_TABLETS: NavLink = { label: 'Find tablets', href: '/tablets/' };
export const BUYING_GUIDE: NavLink = { label: 'Read the buying guide', href: '/guides/buying-guide/' };
export const CONTACT: NavLink = { label: 'Contact us', href: '/contact/' };

/*
 * Menus only show pages that exist: a Best for link appears once src/data/best/<slug>.ts exists, Compare once there is
 * a head-to-head, Guides once there is a guide. The Best for slugs below are provisional (the tags the import sets);
 * Phase E replaces them with the approved shortlist.
 */
const BEST_SLUGS = new Set(Object.keys(import.meta.glob('../data/best/*.ts')).map((f) => f.split('/').pop()!.replace(/\.ts$/, '')));
const HAS_COMPARE = Object.keys(import.meta.glob('../data/compare/*.ts')).length > 0;
const live = (links: NavLink[]) => links.filter((l) => !l.href.startsWith('/best/') || BEST_SLUGS.has(l.href.split('/')[2]));
const liveGroup = (g: NavGroup): NavGroup => ({ ...g, links: live(g.links) });

const BEST_BY_ZONE: NavGroup = {
  heading: 'By zone',
  links: [
    { label: 'Zone 1 tablets', href: '/best/zone-1-tablets/' },
    { label: 'Zone 2 tablets', href: '/best/zone-2-tablets/' },
  ],
};

export const BEST_BY_INDUSTRY: NavGroup = liveGroup({
  heading: 'By industry',
  links: [
    { label: 'Oil & gas', href: '/best/oil-and-gas/' },
    { label: 'Chemical processing', href: '/best/chemical-processing/' },
    { label: 'Pharmaceutical', href: '/best/pharmaceutical/' },
  ],
});

const BEST_BY_NEED: NavGroup = {
  heading: 'By need',
  links: [
    { label: 'iPad', href: '/best/ipad/' },
    { label: 'Windows tablets', href: '/best/windows-tablets/' },
    { label: 'Android tablets', href: '/best/android-tablets/' },
  ],
};

const BEST_MENU = [BEST_BY_ZONE, BEST_BY_INDUSTRY, BEST_BY_NEED].map(liveGroup).filter((g) => g.links.length);

export const MAIN_NAV: NavItem[] = [
  ...(BEST_MENU.length ? [{ label: 'Best for', href: '/best/', menu: BEST_MENU }] : []),
  ...(HAS_COMPARE ? [{ label: 'Compare', href: '/compare/' }] : []),
  ...(GUIDE_PAGES.length
    ? [{ label: 'Guides', href: '/guides/', menu: [{ links: GUIDE_PAGES.map((g) => ({ label: g.navLabel, href: `/guides/${g.slug}/` })) }] }]
    : []),
  { label: 'About', href: '/about/' },
];

export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Explore',
    links: [FIND_TABLETS, ...(HAS_COMPARE ? [{ label: 'Compare tablets', href: '/compare/' }] : [])],
  },
  {
    heading: 'Best for',
    links: live([
      { label: 'Zone 1 tablets', href: '/best/zone-1-tablets/' },
      { label: 'Zone 2 tablets', href: '/best/zone-2-tablets/' },
      { label: 'Oil & gas', href: '/best/oil-and-gas/' },
      { label: 'iPad', href: '/best/ipad/' },
    ]),
  },
  {
    heading: 'About',
    links: [
      { label: 'About us', href: '/about/' },
      { label: 'How we rate', href: '/how-we-rate/' },
      { label: 'Disclosure', href: '/disclosure/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
].filter((g) => g.links.length);

export const LEGAL_NAV: NavLink[] = [
  { label: 'Privacy', href: '/privacy.html' },
  { label: 'Terms', href: '/terms/' },
  { label: 'Cookies', href: '/cookies/' },
];
