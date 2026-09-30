# explosionprooftablets.com design system

This file is the source of truth for how pages look and behave. The shared files implement it:

| File | What it holds |
|---|---|
| `assets/site.css` | Tokens, base styles, components (buttons, cards, badges, header, drawer, dark footer, forms, article prose, comparison table) |
| `assets/tw.css` | Compiled Tailwind utilities. Rebuild with `bash scripts/build-css.sh` after changing classes in any page |
| `assets/site.js` | Guides dropdown, mobile menu dialog, and every form marked `data-isp-form` |
| `scripts/build_chrome.py` | Rebuilds the header, mobile menu, footer and head on every page (EN/DE/NL/ES/PT-BR; guides that exist only in English are marked "(EN)" in translated menus). Safe to re-run |

Load order in every `<head>`: the consent banner script before any Google tag, then `site.css`, then `tw.css`, then the page's own `<style>`. Utilities must come after components so classes like `md:hidden` win.

## Look

Warm paper, ink and one blue. Every page uses the same light design (the three former dark pages were converted).

- **Surfaces:** `--bg` #f5f3f0 page, `--bg-alt` #eae7e2 bands and table heads, `--surface` #fff cards and white sections, `--void` #111 footer.
- **Text:** `--ink` #1a1a1a headings and buttons, `--graphite` body, `--ash` #5c5c56 captions. All pass WCAG AA on `--bg` and white.
- **Accent:** `--accent` #2563eb for small marks (logo line, callout border). Links in text are #1d4ed8, underlined.
- **Badges:** tinted, uppercase, 6px radius: `badge-z1` green, `badge-z2` yellow, `badge-atex` blue, `badge-iec` purple.
- **Type:** Instrument Serif for display headings (italic `<em>` for the second half of a heading), Inter for everything else, JetBrains Mono for eyebrows, table heads and form labels. Form fields use 16px text so phones don't zoom.
- **Shape:** pill buttons, 16px card radius with a hover lift, glass (blurred paper) sticky header, rounded dropdown panel. Tap targets are at least 44px on touch screens.

## Components

- **Buttons:** `.btn` plus `.btn-pri` (ink) or `.btn-sec` (transparent with border). One primary button per section.
- **Cards:** `.card` (white, hairline border). Padding comes from Tailwind classes or the page.
- **Callouts:** `.callout` (blue), `.callout-warn` (amber), `.callout-green`.
- **Links in text:** `.link`, or any link inside `.prose`.
- **Tables:** `.compare-table` for product overviews; wrap wide tables in `overflow-x-auto`. Tables inside `.prose` scroll on their own below 768px.
- **Forms:** `.field-label` + `.field`, with a `for`/`id` pair on every input, the `_honey` honeypot and a privacy line. Errors, sending state and the result come from `site.js`.
- **Footer:** the dark footer on every page: brand, guides, more guides (EN), network, privacy and contact.

## Page rules

- Every page has the skip link, one `<header>`, the `#mobileMenu` dialog, one `<main id="main">` and the footer. `build_chrome.py` writes all of them.
- Language links point to the same page in the other language, or that language's home page when no translation exists. Every translated page lists all versions with `hreflang`, plus `x-default` pointing to English.
- Titles stay at 60 characters or fewer and descriptions at 160 or fewer.
- Facts come from the home card grid (EN `index.html`, `#solutions`) as corrected in `tablets-steps/FACTS.md`; guides, translations, structured data and the llms files must match it. No rankings, superlatives or independence claims.
- Prices are "on request" everywhere. Every price or contact link goes to the form on the page's language home: `<home>?inquire=<product>#contact` (for example `/de/?inquire=Aegex%2010%20IS#contact`).
- Guides end with one primary action ("Compare all tablets →" to `<home>#solutions`), one secondary ("Ask about a tablet") and a short related-guides list.

## Behaviour

- **Guides dropdown:** a real button with `aria-expanded`. It closes on Escape, on outside click and when focus leaves it.
- **Mobile menu:** a dialog. Opening it moves focus to Close, Tab stays inside, Escape closes it, the page doesn't scroll behind it, and focus returns to the menu button.
- **Forms:** add `data-isp-form` to the form and a `<p data-form-status hidden>` after it. The script validates inline, posts to Web3Forms (api.web3forms.com, public access key) as JSON, fires the `generate_lead` event when sent, and shows the result in place. The inbox address is stored encoded in `site.js` and never appears in the HTML. `?inquire=` pre-fills the message.
- **Motion:** everything respects `prefers-reduced-motion`.

## Rebuilding

```bash
bash scripts/build-css.sh         # after any class change in the HTML
python3 scripts/build_chrome.py   # header, menu, footer, head, consent order, ?v= cache-busting hashes
```

Run them in this order: Cloudflare caches `/assets/*` for a year, so every page links the CSS and JS with a
`?v=<content hash>` that `build_chrome.py` computes from the current files.

## HAG network link policy (2026-09-30)

Run `python3 scripts/hag_link_policy.py <this-site-host>` after any chrome/nav rebuild, translation run or new page. It is idempotent and:
- tags every link to xshielder.com `rel="sponsored"` with UTM (`utm_campaign=hag_network`),
- adds `nofollow` to competitor links (list in the script),
- removes links to the other network sites from header/nav/footer (links in the text stay followed),
- inserts the footer sponsor line ("This site's main sponsor is Xshielder. Want to sponsor this site? Contact us. Part of the Hazardous Area Guide network.") in the page language,
- adds sponsored in-text callouts on the pages listed in `CALLOUTS`,
- loads `hag-links.js`, which sends a GA4 `network_link_click` event (link_type, placement) for every outbound click.
