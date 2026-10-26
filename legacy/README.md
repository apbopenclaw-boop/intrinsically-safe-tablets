# Legacy pages (drafts, not published)

The old English pages of explosionprooftablets.com, taken off the site when the Astro rebuild goes live. They are kept
here for reference and are not part of the build (only `public/` is copied into the site). Their facts are out of date
(e.g. an "ecom Tab-Ex Pro DZ1" that doesn't exist, the Tab-Ex 03 DZ1 shown as 10.1", the discontinued Aegex 10 shown as current).

Each old URL serves a small redirect page from `public/` (instant meta refresh plus a canonical link) that sends visitors
and search engines to the closest new page. Swap these for real 301s in Cloudflare when convenient. Targets marked
"Phase E" are provisional and move to the Best for and head-to-head pages once those exist.

| Old URL | New page | Note |
|---|---|---|
| /are-tablets-intrinsically-safe.html | / |
| /atex-tablet-buying-decision-guide.html | /tablets/ |
| /atex-tablet-pricing.html | /tablets/ | prices are on request
| /best-atex-tablets-2026.html | /tablets/?zone=1 | Phase E: /best/zone-1-tablets/
| /buyers-guide-2026.html | /tablets/ |
| /ecom-tab-ex-03-vs-isafe-is930.html | /tablets/ecom-tab-ex-03-dz1/ | Phase E: the head-to-head
| /ecom-tab-ex-alternatives.html | /tablets/ecom-tab-ex-05-dz1/ |
| /ecom-tab-ex-vs-aegex-10.html | /tablets/ecom-tab-ex-03-dz1/ | Phase E: the head-to-head
| /ecom-tab-ex-vs-bartec-agile.html | /tablets/ecom-tab-ex-03-dz1/ | Phase E: the head-to-head
| /japan-korea-certification.html | /tablets/ |
| /what-is-an-intrinsically-safe-tablet.html | / |
| /zone-1-vs-zone-2-tablets.html | / |

`llms-full.txt`, `reasoning.json`, `sitemap.xml` and `404.html` belonged to the old site (Astro now generates the sitemap
and 404). The German (`/de/`), Spanish (`/es/`), Dutch (`/nl/`), Brazilian Portuguese (`/pt-br/`) and privacy pages stay live in
`public/`, without the language switcher (Rory, 2026-10-26).
