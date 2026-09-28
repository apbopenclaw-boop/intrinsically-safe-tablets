#!/usr/bin/env python3
"""Rebuild the shared page chrome on every page (see DESIGN.md). Safe to re-run.

- <head>: shared CSS (assets/tw.css + assets/site.css) instead of cdn.tailwindcss.com,
  favicon set, no build-tool leftovers; page <style> blocks lose their copies of shared
  rules (tokens, nav, buttons, badges, cards), keeping only page-specific rules.
- Skip link, one accessible header (EN/DE/NL/ES/PT-BR), dialog-style mobile menu, footer.
- <main id="main"> on every page; assets/site.js loaded once.
- The network consent banner loads before any Google tag (Consent Mode defaults first).
Pages without a site header (404) only get the <head> clean-up and site.js.

Usage (from the repo root): python3 scripts/build_chrome.py
"""
import pathlib, re, html

LANGS = ['en', 'de', 'nl', 'es', 'pt-br']
LABEL = {'en': 'EN', 'de': 'DE', 'nl': 'NL', 'es': 'ES', 'pt-br': 'PT'}
def _paths(name):
    return {l: ('/' if l == 'en' else f'/{l}/') + name for l in LANGS}
PAGES = {
    'home': {l: ('/' if l == 'en' else f'/{l}/') for l in LANGS},
    'best': _paths('best-atex-tablets-2026.html'), 'whatis': _paths('what-is-an-intrinsically-safe-tablet.html'),
    'zones': _paths('zone-1-vs-zone-2-tablets.html'), 'alts': _paths('ecom-tab-ex-alternatives.html'),
    'pricing': _paths('atex-tablet-pricing.html'), 'vsisafe': _paths('ecom-tab-ex-03-vs-isafe-is930.html'),
    'vsaegex': _paths('ecom-tab-ex-vs-aegex-10.html'), 'vsbartec': _paths('ecom-tab-ex-vs-bartec-agile.html'),
    'decision': _paths('atex-tablet-buying-decision-guide.html'), 'buyers': _paths('buyers-guide-2026.html'),
    'are': _paths('are-tablets-intrinsically-safe.html'), 'japan': _paths('japan-korea-certification.html'),
    'privacy': _paths('privacy.html'),
}
GUIDES = ['best', 'zones', 'whatis', 'alts', 'vsisafe', 'vsaegex', 'vsbartec', 'pricing']
MORE = ['decision', 'buyers', 'are', 'japan']   # linked from the footer
EN_MORE = {'decision': 'ATEX tablet buying decision guide', 'buyers': "Buyer's guide 2026", 'are': 'Are tablets intrinsically safe?', 'japan': 'Japan & Korea certification'}
def _nav(lang, sol, contact):
    h = PAGES['home'][lang]
    return [(sol, h + '#solutions'), ('GUIDES', None), ('Certification' if lang == 'en' else None, '/#certification'), (contact, h + '#contact')]
S = {
 'en': dict(net='Network', skip='Skip to content', menu='Menu', open='Open menu', close='Close menu', guides='Guides', lang='Language', cta='Best Tablets 2026 →', more='More guides',
   nav=_nav('en', 'Solutions', 'Contact'), contact='/#contact', home='Home', tag='ATEX · IECEx reference',
   g={'best': ('Best ATEX Tablets 2026', 'Zone 1 and Zone 2 tablets compared'), 'zones': ('Zone 1 vs Zone 2 Tablets', 'Which certification do you need?'),
      'whatis': ('What Is an IS Tablet?', 'ATEX & IECEx certification explained'), 'alts': ('Tab-Ex Alternatives', 'Every alternative to ecom tablets'),
      'vsisafe': ('Tab-Ex 03 vs IS930.1', 'Zone 1 Android tablets head to head'), 'vsaegex': ('Tab-Ex vs Aegex 10', 'Android vs Windows in Zone 1'),
      'vsbartec': ('Tab-Ex vs Bartec Agile X', 'ecom and Bartec compared'), 'pricing': ('ATEX Tablet Costs', 'What drives the cost of an Ex tablet')},
   foot='Engineering reference, not a safety certificate.', privacy='Privacy', contact_l='Contact', network='Part of the Hazardous Area Guide network'),
 'de': dict(net='Netzwerk', skip='Zum Inhalt springen', menu='Menü', open='Menü öffnen', close='Menü schließen', guides='Ratgeber', lang='Sprache', cta='Beste Tablets 2026 →', more='Weitere Ratgeber (EN)',
   nav=_nav('de', 'Vergleich', 'Kontakt'), contact='/de/#contact', home='Startseite', tag='ATEX · IECEx Referenz',
   g={'best': ('Beste ATEX-Tablets 2026', 'Tablets für Zone 1 und 2 im Vergleich'), 'zones': ('Zone-1- vs. Zone-2-Tablets', 'Welche Zulassung brauchen Sie?'),
      'whatis': ('Was ist ein eigensicheres Tablet?', 'ATEX- und IECEx-Zertifizierung erklärt'), 'alts': ('Alternativen zum Tab-Ex', 'Alle Alternativen zu ecom-Tablets'),
      'vsisafe': ('Tab-Ex 03 vs. IS930.1', 'Zone-1-Android-Tablets im direkten Vergleich'), 'vsaegex': ('Tab-Ex vs. Aegex 10', 'Android oder Windows in Zone 1'),
      'vsbartec': ('Tab-Ex vs. Bartec Agile X', 'ecom und Bartec im Vergleich'), 'pricing': ('Kosten von ATEX-Tablets', 'Was den Preis eines Ex-Tablets bestimmt')},
   foot='Technische Referenz, kein Sicherheitszertifikat.', privacy='Datenschutz', contact_l='Kontakt', network='Teil des Hazardous-Area-Guide-Netzwerks'),
 'nl': dict(net='Netwerk', skip='Naar inhoud', menu='Menu', open='Menu openen', close='Menu sluiten', guides='Gidsen', lang='Taal', cta='Beste tablets 2026 →', more='Meer gidsen (EN)',
   nav=_nav('nl', 'Vergelijking', 'Contact'), contact='/nl/#contact', home='Home', tag='ATEX · IECEx referentie',
   g={'best': ('Beste ATEX-tablets 2026', 'Tablets voor Zone 1 en 2 vergeleken'), 'zones': ('Zone 1- vs Zone 2-tablets', 'Welke certificering hebt u nodig?'),
      'whatis': ('Wat is een intrinsiek veilige tablet?', 'ATEX- en IECEx-certificering uitgelegd'), 'alts': ('Alternatieven voor de Tab-Ex', 'Alle alternatieven voor ecom-tablets'),
      'vsisafe': ('Tab-Ex 03 vs IS930.1', 'Zone 1-Android-tablets vergeleken'), 'vsaegex': ('Tab-Ex vs Aegex 10', 'Android of Windows in Zone 1'),
      'vsbartec': ('Tab-Ex vs Bartec Agile X', 'ecom en Bartec vergeleken'), 'pricing': ('Kosten van ATEX-tablets', 'Wat de prijs van een Ex-tablet bepaalt')},
   foot='Technische referentie, geen veiligheidscertificaat.', privacy='Privacy', contact_l='Contact', network='Onderdeel van het Hazardous Area Guide-netwerk'),
 'es': dict(net='Red', skip='Saltar al contenido', menu='Menú', open='Abrir menú', close='Cerrar menú', guides='Guías', lang='Idioma', cta='Mejores tablets 2026 →', more='Más guías (EN)',
   nav=_nav('es', 'Comparativa', 'Contacto'), contact='/es/#contact', home='Inicio', tag='Referencia ATEX · IECEx',
   g={'best': ('Mejores tablets ATEX 2026', 'Tablets de Zona 1 y 2 comparadas'), 'zones': ('Tablets de Zona 1 vs Zona 2', '¿Qué certificación necesita?'),
      'whatis': ('¿Qué es una tablet intrínsecamente segura?', 'La certificación ATEX e IECEx explicada'), 'alts': ('Alternativas a la Tab-Ex', 'Todas las alternativas a las tablets de ecom'),
      'vsisafe': ('Tab-Ex 03 vs IS930.1', 'Tablets Android de Zona 1 cara a cara'), 'vsaegex': ('Tab-Ex vs Aegex 10', 'Android o Windows en Zona 1'),
      'vsbartec': ('Tab-Ex vs Bartec Agile X', 'ecom y Bartec comparadas'), 'pricing': ('Coste de las tablets ATEX', 'Qué determina el precio de una tablet Ex')},
   foot='Referencia técnica, no un certificado de seguridad.', privacy='Privacidad', contact_l='Contacto', network='Parte de la red Hazardous Area Guide'),
 'pt-br': dict(net='Rede', skip='Pular para o conteúdo', menu='Menu', open='Abrir menu', close='Fechar menu', guides='Guias', lang='Idioma', cta='Melhores tablets 2026 →', more='Mais guias (EN)',
   nav=_nav('pt-br', 'Comparação', 'Contato'), contact='/pt-br/#contact', home='Início', tag='Referência ATEX · IECEx',
   g={'best': ('Melhores tablets ATEX 2026', 'Tablets de Zona 1 e 2 comparados'), 'zones': ('Tablets de Zona 1 vs Zona 2', 'Qual certificação você precisa?'),
      'whatis': ('O que é um tablet intrinsecamente seguro?', 'A certificação ATEX e IECEx explicada'), 'alts': ('Alternativas ao Tab-Ex', 'Todas as alternativas aos tablets da ecom'),
      'vsisafe': ('Tab-Ex 03 vs IS930.1', 'Tablets Android de Zona 1 frente a frente'), 'vsaegex': ('Tab-Ex vs Aegex 10', 'Android ou Windows na Zona 1'),
      'vsbartec': ('Tab-Ex vs Bartec Agile X', 'ecom e Bartec comparados'), 'pricing': ('Custo dos tablets ATEX', 'O que determina o preço de um tablet Ex')},
   foot='Referência técnica, não um certificado de segurança.', privacy='Privacidade', contact_l='Contato', network='Parte da rede Hazardous Area Guide'),
}
for _l in LANGS:   # drop menu items a language does not use
    S[_l]['nav'] = [(t, h) for t, h in S[_l]['nav'] if t]
LOGO = ('<svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">'
        '<path d="M16 2.5l11.5 6.5v13L16 28.5 4.5 22V9L16 2.5Z" stroke="#1a1a1a" stroke-width="1.6" stroke-linejoin="round"/>'
        '<rect x="8" y="10" width="16" height="12" rx="1.8" stroke="#1a1a1a" stroke-width="1.6"/>'
        '<line x1="14" y1="19" x2="18" y2="19" stroke="#2563eb" stroke-width="1.6" stroke-linecap="round"/></svg>')

def glabel(g, lang):
    t = S[lang]['g'][g][0]
    return t + (' (EN)' if lang != 'en' and not exists(PAGES[g][lang]) else '')

def guide_href(g, lang):
    """Translated guide if it exists, else the English one (marked (EN) in the labels)."""
    u = PAGES[g][lang]
    return u if exists(u) else PAGES[g]['en']

def page_key(rel):
    url = '/' + (rel[:-len('index.html')] if rel.endswith('index.html') else rel)
    for k, v in PAGES.items():
        for l, u in v.items():
            if u == url:
                return k, l, url
    lang = rel.split('/')[0] if rel.split('/')[0] in LANGS else 'en'
    return None, lang, url

def exists(url):
    return pathlib.Path(url.lstrip('/') + ('index.html' if url.endswith('/') else '')).exists()

def lang_links(key, lang, cls=''):
    out = []
    for l in LANGS:
        target = PAGES.get(key or 'home', PAGES['home'])[l]
        if not exists(target):
            target = PAGES['home'][l]
        cur = ' aria-current="true"' if l == lang else ''
        out.append(f'<a href="{target}" hreflang="{l}" lang="{l}"{cur}{cls}>{LABEL[l]}</a>')
    return out

def chrome(key, lang, url, compare):
    t = S[lang]
    home = PAGES['home'][lang]
    cur = lambda u: ' aria-current="page"' if url == u else ''
    items = []
    for label, href in t['nav']:
        if href is None:
            gl = ''.join(f'<a href="{guide_href(g, lang)}" class="dd-item"{cur(guide_href(g, lang))}><span class="dd-item-title">{html.escape(glabel(g, lang))}</span>'
                         f'<span class="dd-item-desc">{html.escape(t["g"][g][1])}</span></a>' for g in GUIDES)
            items.append(f'<div class="dd relative"><button type="button" class="dd-toggle" aria-expanded="false" aria-controls="guides-panel">{t["guides"]} '
                         '<svg width="12" height="12" viewBox="0 0 12 12" class="dd-chev" aria-hidden="true"><path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>'
                         f'<div class="dd-panel" id="guides-panel">{gl}</div></div>')
        else:
            items.append(f'<a href="{href}" class="nav-link">{html.escape(label)}</a>')
    compare_btn = f'\n      <a href="{guide_href("best", lang)}" class="btn btn-pri !py-2 !px-4 !text-[13px] hidden lg:inline-flex">{t["cta"]}</a>'
    drawer_links = ''.join(f'\n        <a href="{h}" class="mobile-nav-link">{html.escape(l)}</a>' for l, h in t['nav'] if h)
    drawer_guides = ''.join(f'\n        <a href="{guide_href(g, lang)}" class="mobile-nav-link !pl-5"{cur(guide_href(g, lang))}>{html.escape(glabel(g, lang))}</a>' for g in GUIDES)
    return f'''<a class="skip-link" href="#main">{t["skip"]}</a>
<header class="site-header glass sticky top-0 z-30">
  <div class="max-w-[1140px] mx-auto px-4 md:px-6 min-h-16 py-2 flex items-center gap-3 md:gap-6">
    <a href="{home}" class="brand flex items-center gap-2.5">
      {LOGO}
      <span class="flex flex-col leading-none min-w-0">
        <span class="brand-name">explosionprooftablets<span style="color:var(--ash)" class="font-normal hidden sm:inline">.com</span></span>
        <span class="brand-tag hidden sm:block">{t["tag"]}</span>
      </span>
    </a>
    <nav class="hidden md:flex items-center gap-6 text-[14px]" aria-label="Main">
      {"".join(items)}
    </nav>
    <div class="ml-auto flex items-center gap-2 md:gap-3">
      <nav class="hidden md:flex items-center gap-2 mono text-[12px]" aria-label="{t["lang"]}">{" ".join(lang_links(key, lang, ' class="nav-link"'))}</nav>{compare_btn}
      <button type="button" class="icon-btn md:hidden" data-menu-open aria-controls="mobileMenu" aria-expanded="false" aria-label="{t["open"]}">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
      </button>
    </div>
  </div>
</header>

<div id="mobileMenu" class="mobile-menu" role="dialog" aria-modal="true" aria-label="{t["menu"]}" hidden>
  <div class="scrim" data-menu-close></div>
  <div class="mobile-drawer">
    <div class="p-5">
      <div class="flex items-center justify-between mb-6">
        <span class="font-semibold text-sm">{t["menu"]}</span>
        <button type="button" class="icon-btn" data-menu-close aria-label="{t["close"]}">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <nav class="flex flex-col gap-1" aria-label="{t["menu"]}">
        <a href="{home}" class="mobile-nav-link"{cur(home)}>{t["home"]}</a>{drawer_links}
        <div class="my-3 h-px" style="background:var(--border)"></div>
        <span class="mono text-[11px] uppercase tracking-[0.12em] mb-1 px-3" style="color:var(--ash)">{t["guides"]}</span>{drawer_guides}
        <div class="my-3 h-px" style="background:var(--border)"></div>
        <span class="mono text-[11px] uppercase tracking-[0.12em] mb-2 px-3" style="color:var(--ash)">{t["lang"]}</span>
        <div class="lang-links px-3">{" ".join(lang_links(key, lang))}</div>
      </nav>
    </div>
  </div>
</div>
'''

BLURB = {'en': 'Engineering reference for ATEX and IECEx certified tablets and iPad Ex solutions. Specs are taken from manufacturer certificates and datasheets.',
         'de': 'Technische Referenz für ATEX- und IECEx-zertifizierte Tablets und iPad-Ex-Lösungen. Die Daten stammen aus Herstellerzertifikaten und Datenblättern.',
         'nl': 'Technische referentie voor ATEX- en IECEx-gecertificeerde tablets en iPad Ex-oplossingen. Specificaties komen uit certificaten en datasheets van fabrikanten.',
         'es': 'Referencia técnica sobre tablets y soluciones iPad Ex con certificación ATEX e IECEx. Los datos proceden de certificados y fichas técnicas de los fabricantes.',
         'pt-br': 'Referência técnica sobre tablets e soluções iPad Ex com certificação ATEX e IECEx. Os dados vêm de certificados e fichas técnicas dos fabricantes.'}
NETWORK = [('https://intrinsicallysafephones.com', 'intrinsicallysafephones.com'), ('https://exknowledge.com', 'exknowledge.com'), ('https://hazardousareaguide.com', 'hazardousareaguide.com')]

def footer(lang):
    t = S[lang]
    en = '' if lang == 'en' else ' hreflang="en"'
    guides = ''.join(f'\n          <li><a href="{guide_href(g, lang)}">{html.escape(glabel(g, lang))}</a></li>' for g in GUIDES)
    more = ''.join(f'\n          <li><a href="{PAGES[g]["en"]}"{en}>{html.escape(EN_MORE[g])}</a></li>' for g in MORE)
    net = ''.join(f'\n          <li><a href="{u}">{n}</a></li>' for u, n in NETWORK)
    logo = LOGO.replace('#1a1a1a', '#ffffff')
    return f'''<footer class="site-footer">
  <div class="max-w-[1140px] mx-auto px-4 md:px-6 pt-16 pb-10">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
      <div class="sm:col-span-2 lg:col-span-4">
        <a href="{PAGES["home"][lang]}" class="footer-brand flex items-center gap-2.5 mb-4">{logo}<span>explosionprooftablets<span class="footer-dim">.com</span></span></a>
        <p class="max-w-[360px] leading-relaxed">{BLURB[lang]}</p>
      </div>
      <div class="lg:col-span-3 lg:col-start-6">
        <h2 class="footer-h">{t["guides"]}</h2>
        <ul class="space-y-1">{guides}
        </ul>
      </div>
      <div class="lg:col-span-2">
        <h2 class="footer-h">{t["more"]}</h2>
        <ul class="space-y-1">{more}
        </ul>
      </div>
      <div class="lg:col-span-2">
        <h2 class="footer-h">{t["net"]}</h2>
        <ul class="space-y-1">{net}
        </ul>
      </div>
    </div>
    <div class="footer-bottom mt-12 pt-6 flex flex-wrap gap-x-6 gap-y-2 justify-between">
      <span>© 2026 explosionprooftablets.com · {t["foot"]}</span>
      <span class="flex flex-wrap gap-x-5"><a href="{PAGES["privacy"][lang]}">{t["privacy"]}</a><a href="{t["contact"]}">{t["contact_l"]}</a></span>
    </div>
  </div>
</footer>'''

SHARED_SEL = re.compile(r'^(:root|html|body|html,\s*body|\.serif|\.mono|\.glass|\.lang-select|#guidesDD\b.*|\.dd-[\w-]+(:hover)?|\.dd-chev|\.mobile-[\w-]+(:hover)?|'
                        r'\.btn(-primary|-secondary|-ghost|-pri|-sec)?(:hover)?|\.badge(-green|-warn|-neutral|-dark|-atex|-iec|-z1|-z2)?|\.card(:hover)?|\.chip|'
                        r'\*|\.glass-nav|\.nav-links(\.open)?|\.burger|\.gradient-text|\.prose( [a-z0-9]+)?|\.callout(-warn|-green)?|\.vs-cell|\.winner)$')
KEEP_PROPS = re.compile(r'^\s*(padding[\w-]*|margin[\w-]*)\s*:')

def strip_shared_rules(css):
    def rule(m):
        sels = [x.strip() for x in m.group(1).split(',')]
        if sels and all(SHARED_SEL.match(x) for x in sels):
            keep = [d.strip() for d in m.group(2).split(';') if KEEP_PROPS.match(d)]
            return ('\n  ' + m.group(1).strip() + '{' + ';'.join(keep) + '}') if keep else ''
        return m.group(0)
    css = re.sub(r'/\*.*?\*/', '', css, flags=re.S)
    css = re.sub(r'([^{}@]+)\{([^{}]*)\}', rule, css)
    return re.sub(r'\s*@media[^{]*\{\s*\}', '', css)   # media blocks left empty

BANNER = '<script src="https://hazardousareaguide.com/consent-banner.js"></script>'

import hashlib
def _ver(*names):
    """Content hash for cache busting: Cloudflare caches /assets/* for a year."""
    h = hashlib.md5()
    for name in names:
        h.update(pathlib.Path(name).read_bytes())
    return h.hexdigest()[:8]
CSS_V = _ver('assets/site.css', 'assets/tw.css')
JS_V = _ver('assets/site.js')

HEAD_ASSETS = ('<link rel="icon" href="/favicon.svg" type="image/svg+xml">\n'
               '<link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png">\n'
               '<link rel="apple-touch-icon" href="/apple-touch-icon.png">\n'
               f'<link rel="stylesheet" href="/assets/site.css?v={CSS_V}">\n'   # components first ...
               f'<link rel="stylesheet" href="/assets/tw.css?v={CSS_V}">\n')    # ... so utilities (md:hidden etc.) win

def process(p):
    rel = p.as_posix()
    s = o = p.read_text(encoding='utf-8')
    if 'http-equiv="refresh"' in s[:3000]:
        return False
    key, lang, url = page_key(rel)
    head, body = s.split('</head>', 1)
    head = re.sub(r'\s*<template id="__bundler_thumbnail">.*?</template>', '', head, flags=re.S)
    head = re.sub(r'\s*<script src="https://cdn\.tailwindcss\.com"></script>', '', head)
    head = re.sub(r'\s*<script>\s*tailwind\.config\s*=.*?</script>', '', head, flags=re.S)
    head = re.sub(r'[ \t]*<link rel="(?:icon|apple-touch-icon)"[^>]*>\n?', '', head)
    head = re.sub(r'[ \t]*<link rel="stylesheet" href="/assets/(?:tw|site)\.css(?:\?v=\w+)?">\n?', '', head)
    head = re.sub(r'(<style[^>]*>)(.*?)(</style>)', lambda m: m.group(1) + strip_shared_rules(m.group(2)) + m.group(3), head, flags=re.S)
    head = re.sub(r'[ \t]*(\.burger\{[^}]*\}|@media\(max-width:767px\)\{\.burger\{display:block\}[^\n]*)\n', '', head)   # old burger menu
    head = re.sub(r'[ \t]*<style[^>]*>\s*</style>\s*', '', head)
    a = re.search(r'[ \t]*<link rel="preconnect"|[ \t]*<link href="https://fonts|[ \t]*<style|[ \t]*<script type="application/ld\+json"', head)
    at = a.start() if a else len(head)
    head = head[:at] + HEAD_ASSETS + head[at:]
    # Consent Mode defaults must be set before any Google tag runs (banner script says so).
    if BANNER in head:
        head = re.sub(r'[ \t]*' + re.escape(BANNER) + r'\n?', '', head)
        g = re.search(r'[ \t]*(<!-- Google Ads|<!-- GA4|<script async src="https://www\.googletagmanager|<script>\(function\(w,d,s,l,i\))', head)
        at = g.start() if g else len(head)
        head = head[:at] + BANNER + '\n' + head[at:]
    hm = re.search(r'(<a class="skip-link"[^>]*>[^<]*</a>\s*)?<header\b.*?</header>\s*', body, re.S)
    if hm:
        block = chrome(key, lang, url, compare=(key == 'home'))
        dm = re.search(r'<div id="mobileMenu".*?\n</div>\n', body[hm.end():], re.S)
        end = hm.end() + dm.end() if dm and body[hm.end():hm.end() + dm.start()].strip() == '' else hm.end()
        body = body[:hm.start()] + block + body[end:]
        fm = re.search(r'<footer\b.*?</footer>', body, re.S)
        if fm:
            body = body[:fm.start()] + footer(lang) + body[fm.end():]
        if not re.search(r'<main\b', body):
            start = body.find(block) + len(block)
            f2 = body.find('<footer', start)
            body = body[:start] + '\n<main id="main">\n' + body[start:f2] + '</main>\n\n' + body[f2:]
    if 'id="main"' not in body and re.search(r'<main\b', body):
        body = re.sub(r'<main id="[^"]*"', '<main', body, count=1)
        body = re.sub(r'<main\b([^>]*)>', r'<main id="main"\1>', body, count=1)
    # the footer belongs after <main>, not inside it
    fm, me = re.search(r'<footer\b', body), body.find('</main>')
    if fm and me > fm.start():
        body = body[:me] + body[me + len('</main>'):]
        body = body[:fm.start()] + '</main>\n\n' + body[fm.start():]
    body = re.sub(r'\s*<script>document\.querySelector\(\'\.burger\'\).*?</script>', '', body, flags=re.S)
    body = re.sub(r"document\.addEventListener\('click',function\(e\)\{var d=document\.getElementById\('guidesDD'\);if\(d&&!d\.contains\(e\.target\)\)d\.classList\.remove\('dd-open'\);\}\);\s*", '', body)
    body = re.sub(r"document\.querySelectorAll\('#mobileMenu a'\)\.forEach\(function\(a\)\{a\.addEventListener\('click',function\(\)\{document\.getElementById\('mobileMenu'\)\.classList\.add\('hidden'\);\}\);\}\);\s*", '', body)
    body = re.sub(r'<script>\s*</script>\s*', '', body)
    body = re.sub(r'<script src="/assets/site\.js(?:\?v=\w+)?" defer></script>', f'<script src="/assets/site.js?v={JS_V}" defer></script>', body)
    if '/assets/site.js' not in body:
        body = body.replace('</body>', f'<script src="/assets/site.js?v={JS_V}" defer></script>\n</body>', 1)
    s = head + '</head>' + body
    if s != o:
        p.write_text(s, encoding='utf-8')
        return True
    return False

if __name__ == '__main__':
    n = sum(process(p) for p in sorted(pathlib.Path('.').rglob('*.html'))
            if not ({'.git', '.audit', 'node_modules'} & set(p.parts)) and not p.name.startswith('google'))
    print('pages updated:', n)
