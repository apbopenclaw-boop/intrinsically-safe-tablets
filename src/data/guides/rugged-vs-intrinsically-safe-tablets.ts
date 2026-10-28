import type { GuidePage } from '../guide-pages';

const page: GuidePage = {
  slug: 'rugged-vs-intrinsically-safe-tablets',
  title: 'Rugged vs Intrinsically Safe Tablets: Zone 1 & 2 Guide',
  description:
    'Rugged tablets in Zone 1 or Zone 2? IP68 and MIL-STD-810H don’t cover ignition. See which Getac, Zebra, Panasonic and Dell tablets have Ex versions.',
  h1: 'Rugged vs intrinsically safe tablets: when a rugged tablet isn’t enough',
  navLabel: 'Rugged vs intrinsically safe tablets',
  lead:
    'Rugged tablets are a fixture across energy, utilities, manufacturing and logistics. A Getac, a Toughbook or a Zebra tablet handles drops, rain and gloved hands, so it’s natural to ask whether the same tablet can go into a classified area. The spec sheets don’t settle it, because rugged and certified tablets list the same IP ratings, drop heights and military test standards.',
  datePublished: '2026-10-27',
  dateModified: '2026-10-27',
  body: `
<p>The difference comes down to what the tablet is built to protect. A rugged tablet is built to survive the site. An intrinsically safe or explosion-proof tablet is certified so that it doesn’t ignite the site. Several rugged tablet makers sell a separate Ex version of a standard model, which makes the line between the two easier to blur than it is with phones.</p>

<h2>What makes a tablet rugged</h2>

<p>"Rugged" has no formal definition, so each maker decides what goes on the spec sheet. Two ratings come up on almost every one.</p>

<p><strong>IP ratings</strong> describe ingress protection. IP65 means dust-tight and protected against water jets. IP67 covers temporary immersion, and IP68 longer immersion under conditions the maker sets. <strong>MIL-STD-810H</strong> is a US Department of Defense test method covering drops, vibration, temperature, humidity and more. The maker chooses which tests to run and may run them in-house, so the claim is only as specific as the list of tests behind it.</p>

<p>Rugged tablets add features designed around field work, for example drop ratings onto concrete, touchscreens that work with gloves or in rain, sunlight-readable screens, programmable keys, built-in barcode readers and swappable batteries. Getac rates its standard ZX80 for −29 °C to +63 °C, a wider range than most consumer tablets.</p>

<h2>Rugged vs intrinsically safe: the difference that matters</h2>

<p>None of those ratings deal with ignition. A tablet can ignite a gas or dust atmosphere through a battery fault, a hot surface or a spark at a port, contact or button, and a tablet can pass every drop and immersion test and still carry all of those risks.</p>

<p>Certified tablets manage ignition risk in a recognized way. Intrinsically safe tablets limit the electrical and thermal energy inside the device, and flameproof (Ex db) designs contain an internal ignition inside a strong housing. The rating appears as an Ex marking on the label, backed by an ATEX or IECEx certificate or, for some Zone 2 equipment, the maker’s own ATEX declaration. In Europe, equipment has to be selected by zone, so a rugged tablet with no Ex marking can enter a classified area only if the site’s work permit allows it, usually backed by gas testing.</p>

<h2>Rugged tablet makers and their Ex versions</h2>

<p>Several rugged makers offer certified versions, and the table covers the brands buyers ask about most. Ratings come from the makers’ documents and certificates, checked in October 2026.</p>

<table>
  <thead>
    <tr><th>Maker and models</th><th>Hazardous-area rating</th><th>Zone 1?</th></tr>
  </thead>
  <tbody>
    <tr><td>Getac F110-EX G7, K120-EX G3, UX10-EX G5 (Windows); ZX10-EX G2, ZX80-EX (Android); ZX80W-EX (Windows)</td><td>Zone 2/22, Ex ic, IECEx certificates published (none names the ZX80W-EX yet), ATEX stated by Getac</td><td>No</td></tr>
    <tr><td>BARTEC ET60/65EX2, Android and Windows (built on Zebra’s ET6x)</td><td>Zone 2/22 under ATEX and IECEx; the Android version also has a UL Division 2 listing</td><td>No</td></tr>
    <tr><td>Zebra ET60 and ET65 (standard)</td><td>Class I, Division 2 for configurations Zebra lists as compliant</td><td>No</td></tr>
    <tr><td>Durabook R8-EX and U11I-EX (Windows)</td><td>Zone 2/22 under ATEX</td><td>No</td></tr>
    <tr><td>Winmate M101AD-EX and M101S-EX (Windows)</td><td>Zone 2 under IECEx, plus Class I, Division 2</td><td>No</td></tr>
    <tr><td>Panasonic Toughbook tablets</td><td>No current ATEX version found; the Toughpad FZ-G1 ATEX (Zone 2) is discontinued</td><td>No</td></tr>
    <tr><td>Dell Latitude Rugged Extreme</td><td>The Latitude 7220EX (Zone 2) is discontinued; we found no hazardous-area rating for the Latitude 7230</td><td>No</td></tr>
    <tr><td>Samsung Galaxy Tab Active5 and Active5 Pro (standard)</td><td>None from Samsung; Atexxo sells Ex conversions</td><td>Only as the Atexxo Zone 1 conversion</td></tr>
  </tbody>
</table>

<p>Two patterns stand out. Every Ex version of a rugged tablet in our data, current or discontinued, is certified for Zone 2 only, usually as intrinsically safe (Ex ic). And the Ex version is a separate product with its own certificate, so a standard model from the same family isn’t covered, however similar it looks. Zebra’s standard ET6x shows how specific the rules can be. Its Division 2 use depends on fitting screws over the battery latches and access door before entering the hazardous area, and only the tablet, or the tablet with Zebra’s ET6x keyboard, is covered.</p>

<p>Our <a href="/best/windows-tablets/">best Windows tablets</a> and <a href="/best/scanning/">best tablets for scanning</a> pages compare the current rugged Ex versions with the dedicated Zone 2 tablets.</p>

<h2>What the Ex version changes</h2>

<p>Turning a rugged tablet into a certified one changes more than the label, and the certificate’s conditions of use say how it may be used in the zone.</p>

<p><strong>Ports.</strong> Getac’s certificates for the F110-EX and ZX80-EX say the connection interfaces, such as USB, Thunderbolt, the DC input and the docking connector, must never be used in the hazardous area. BARTEC allows its ports to be used only where the explosive atmosphere is shown to be absent. Any accessory plugged in on site has to wait until the tablet is back in a safe area.</p>

<p><strong>Batteries and charging.</strong> Every current rugged Ex version in our data is charged and has its battery changed outside the hazardous area. Some keep their hot-swap design, including the Getac F110-EX G7, the BARTEC ET60/65EX2 and the Winmate tablets, which helps on long shifts as long as the swap happens outside.</p>

<p><strong>Temperature.</strong> The certified ambient range is often narrower than the standard model’s operating range. The <a href="/tablets/getac-zx80-ex/">Getac ZX80-EX</a> is certified for −21 °C to +55 °C, against −29 °C to +63 °C for the standard ZX80, and the discontinued Panasonic Toughpad FZ-G1 ATEX was limited to +5 °C to +45 °C in its Ex configuration.</p>

<p><strong>Accessories.</strong> Only the accessories named in the certificate, typically straps, harnesses and a digitizer pen, are covered for use in the zone. Chargers, docks and spare batteries are for safe areas.</p>

<h2>The pattern for Zone 1: look beyond rugged Ex versions</h2>

<p>Because the rugged Ex versions stop at Zone 2, a site with Zone 1 areas needs a different kind of tablet. Dedicated Ex tablets such as the <a href="/tablets/isafe-is940-1/">i.safe MOBILE IS940.1</a>, the <a href="/tablets/ecom-tab-ex-05-dz1/">ecom Tab-Ex 05 DZ1</a> and the <a href="/tablets/eaton-gecma-is-tablet-pc/">Eaton MTL GECMA IS Tablet PC</a> are built for Zone 1 and are rugged too, with IP67 or IP68 ratings on most. For iPad fleets, the <a href="/tablets/xshielder-ipad-pro-11/">Xshielder iPad Pro 11-inch</a> puts a current iPad Pro inside a flameproof cover certified under ATEX for Zone 1/21 at IIC T6, with its cameras, LiDAR and Face ID confirmed to work through the cover. Atexxo also converts the rugged Galaxy Tab Active5 for Zone 1.</p>

<p>Our <a href="/best/zone-1-tablets/">best Zone 1 tablets</a> page ranks the options, and our <a href="/guides/zone-1-vs-zone-2-tablets/">Zone 1 vs Zone 2 guide</a> covers what changes between the two certifications.</p>

<h2>Where a rugged tablet still makes sense</h2>

<p>Most sites with hazardous areas also have a lot of unclassified space, for example control rooms, workshops, warehouses, yards and vehicles. A rugged tablet suits those areas well, as it does field work with no classified zones at all.</p>

<p>Many operators run a mixed fleet for this reason. Certified tablets go to the people who enter Zone 1 or Zone 2, and everyone else carries a rugged one. The weak point is the zone boundary. A rugged tablet looks a lot like its Ex version, so clear device labeling and site rules help keep uncertified tablets out of classified areas.</p>
`,
  cta: {
    kind: 'neutral',
    heading: 'Find a tablet certified for your zone',
    html:
      'A rugged tablet can still suit work outside the classified area, but anything carried into Zone 1 or Zone 2 needs an Ex certificate for that zone. <a href="/tablets/">Find tablets</a> filters every certified tablet, case and conversion in our database by zone, certificate and features such as a built-in barcode scanner or hot swap.',
  },
  faq: [
    {
      q: 'Is a rugged tablet intrinsically safe?',
      a: 'A rugged tablet isn’t intrinsically safe because of its rugged ratings. Ratings such as IP68 and MIL-STD-810H cover water, dust and drops, and a tablet needs separate Ex certification, such as ATEX or IECEx, before it can be used in Zone 1 or Zone 2.',
    },
    {
      q: 'Is the Getac ZX80 intrinsically safe?',
      a: 'We found no hazardous-area certification for the standard Getac ZX80. Getac sells a separate Getac ZX80-EX, intrinsically safe (Ex ic) for Zone 2/22 under its published IECEx certificate, with ATEX certification stated by Getac.',
    },
    {
      q: 'Is there an ATEX version of the Panasonic Toughbook tablet?',
      a: 'We found no current ATEX version of a Panasonic Toughbook tablet. The Panasonic Toughpad FZ-G1 ATEX, certified for Zone 2, is discontinued.',
    },
    {
      q: 'Is the Zebra ET60 or ET65 certified for hazardous areas?',
      a: 'Zebra lists ET6x configurations that comply with Class I, Division 2 in North America. For ATEX and IECEx Zone 2/22, the certified version is the BARTEC ET60/65EX2, built on the same Zebra tablet.',
    },
    {
      q: 'Can a rugged tablet be used in Zone 1?',
      a: 'A rugged tablet can be used in Zone 1 only if it is certified for Zone 1, and every Ex version of a rugged tablet in our data is Zone 2 only. Zone 1 work needs a dedicated Ex tablet or a certified case or conversion.',
    },
    {
      q: 'Does MIL-STD-810H mean a tablet is safe in explosive atmospheres?',
      a: 'No. MIL-STD-810H describes durability tests such as drops and vibration, and it doesn’t assess ignition risk from batteries, hot surfaces or sparks, which is what ATEX and IECEx certification covers.',
    },
  ],
};

export default page;
