import type { GuidePage } from '../guide-pages';

const page: GuidePage = {
  slug: 'using-tablets-hazardous-areas',
  title: 'Using Intrinsically Safe Tablets: Charging, Batteries, Ports',
  description:
    'Can you charge an intrinsically safe tablet in Zone 1, swap its battery or plug in a headset? What certificates allow, tablet by tablet, in plain terms.',
  h1: 'Using an intrinsically safe tablet in the zone: charging, batteries, ports and accessories',
  navLabel: 'Charging, batteries and ports in the zone',
  lead:
    'Once a certified tablet is on site, the practical questions start. Can it go on charge in the control point inside the zone? Can a technician swap the battery halfway through a round, plug in a scanner or wear a headset? The answers sit in the certificate’s conditions of use, and they differ between tablets more than spec sheets suggest.',
  datePublished: '2026-10-27',
  dateModified: '2026-10-27',
  body: `
<p>This guide goes through those conditions topic by topic, using the certificates and manuals behind the tablets in our database. It’s a guide to what to look for, not a substitute for the documents themselves. The certificate and manual for your exact model and version are what count on site.</p>

<h2>What the "X" on a certificate means</h2>

<p>Many Ex certificate numbers end in X, for example IECEx EPS 24.0082X. The X means the certificate sets specific conditions of use, and the equipment is certified only on those terms. They’re listed in the certificate and repeated in the manual, and they’re where the rules on charging, batteries and ports come from.</p>

<p>Some conditions apply to most tablets. Protect the tablet from high-energy impacts, keep it away from processes that generate strong electrostatic charge, and in some cases protect it from prolonged UV light. Others are specific. The Atexxo Zone 1 conversions require the glass window to be protected from impacts above 2 J, the Eaton MTL GECMA IS Tablet PC may be used in Zone 0 only inside its carry case because of a friction hazard, and Getac, BARTEC and Eaton name the exact battery types that may be used.</p>

<h2>Charging in the hazardous area</h2>

<p>Most tablets must be charged outside the hazardous area. In our data, only four are confirmed for charging inside it: the <a href="/tablets/isafe-is940-1/">i.safe MOBILE IS940.1</a>, <a href="/tablets/isafe-is940-2/">IS940.2</a>, <a href="/tablets/isafe-is945-1/">IS945.1</a> and <a href="/tablets/isafe-is945-2/">IS945.2</a>. They charge through a 12-pin dock interface, which may stay open in the zone, and i.safe lists its IS-DS940.1 docking station for this. The IS940.1’s certificate limits charging to 0 °C to +45 °C, so a dock in a cold or hot location needs planning.</p>

<p>Every other tablet in our data is either charged outside the hazardous area or has no confirmed rule. For some products, including the Xshielder iPad Pro 11-inch, our data doesn’t say whether charging inside the zone is allowed, so ask the maker before planning around it. Charging outside comes with conditions too. The i.safe MOBILE IS930.1 should be charged at +5 °C to +35 °C, and the ecom Tab-Ex 05 DZ1 at −5 °C to +55 °C, from a SELV or PELV (extra-low voltage) supply.</p>

<h2>Batteries and hot swap</h2>

<p>No current tablet in our data is cleared for a battery change inside the hazardous area. Where the battery is user-replaceable, the swap happens outside, and the certificate usually names the battery type, so only the maker’s approved batteries may be fitted. Of the current tablets in our data, 18 have a user-replaceable battery and 25 don’t.</p>

<p>Hot swap helps on long shifts. Six current Zone 2 tablets keep running while the battery is changed: the BARTEC Agile S NI, the <a href="/tablets/bartec-et60-65ex2-android/">BARTEC ET60/65EX2</a> in its Android and Windows versions, the <a href="/tablets/getac-f110-ex/">Getac F110-EX G7</a> and the Winmate M101AD-EX and M101S-EX. The swap still happens outside the zone, so the benefit is that the tablet doesn’t need to restart.</p>

<p>Battery life figures are hard to compare. Makers measure them differently, for example BARTEC with Wi-Fi on and the backlight at 50 %, so treat them as a rough guide and test the tablet on your own apps.</p>

<h2>Ports and wired connections</h2>

<p>The usual rule is that ports stay closed in the zone, but the details vary. Getac’s certificates say connection interfaces such as USB, Thunderbolt, the DC input and the docking connector must never be used in the hazardous area. BARTEC allows its ports to be connected or disconnected only where the explosive atmosphere is shown to be absent. The Eaton must not be charged, connected or disconnected in the hazardous area.</p>

<p>A few tablets are designed for connections in the zone. The i.safe MOBILE IS940.1 and IS940.2 keep their USB-C port under a cover opened only outside, but their 16-pin ISM interface takes accessories listed for Ex use, such as i.safe’s headsets and the IS-PTTB1A.1 push-to-talk button. The <a href="/tablets/ecom-tab-ex-05-dz2/">ecom Tab-Ex 05 DZ2</a> allows no wired connections in the Ex area, apart from its 3.5 mm audio port, which may be used with intrinsically safe audio equipment that matches its entity parameters, such as ecom’s HS-Ex 01 J headset.</p>

<h2>Accessories certified for the zone</h2>

<p>A tablet’s certificate covers only the accessories it names, and accessories with their own Ex certificate have to match the tablet’s. Typical zone-rated accessories include straps, harnesses, holsters, screen protectors and styluses. BARTEC’s certificate for the ET60/65EX2 Android, for example, names its battery, hand strap, shoulder strap, holster, screen protector and stylus. ecom’s certificate for the Tab-Ex 05 DZ1 names the S Pen, leather case and chest harness, and the ecom Ident-Ex 02 wireless barcode scanner carries its own Zone 1 approval.</p>

<p>Chargers, docks, cables and spare batteries are almost always for safe areas only. The i.safe dock is the exception, as the one charging accessory in our data listed for use in the zone. If crews need a scanner, headset or vehicle mount inside the zone, check that it’s named in the tablet’s certificate or carries a compatible Ex approval of its own.</p>

<h2>Cases and conversions: what can be opened</h2>

<p>Certified cases and conversions add their own rules about opening the housing. The <a href="/tablets/atexxo-zone-1-ipad-mini-7/">Atexxo Zone 1 conversions</a> must not be opened in the hazardous area, so the bottom cover comes off for charging and SIM changes only outside. The Armadex Ex UniCase may only be opened or closed outside the hazardous area, its USB lid must stay fitted in the zone, and each new type of tablet fitted to it needs a routine test under its certificate. The Xshielder iPad Pro 11-inch case can be removed only by Xshielder’s authorized personnel, and Xshielder confirms that its USB-C port remains usable for charging and data, as on a standard iPad Pro.</p>

<p>What works through the housing varies just as much. Our tablet pages list it for every case and conversion, as far as each maker states it, from cameras and Face ID to buttons and charging.</p>

<h2>Building the rules into site practice</h2>

<p>The conditions only help if crews know them. A one-page summary for each tablet model, covering where it charges, where batteries are swapped, which ports may be used and which accessories are rated, makes the rules easy to follow. Labeling chargers and docks for safe-area use, adding the tablet to the site’s pre-use checks and including it in the explosion protection document closes the loop.</p>
`,
  cta: {
    kind: 'neutral',
    heading: 'Check the rules for any tablet',
    html:
      'Tablet pages in our database have a “Safe use” section with the ambient range, charging and battery rules, and the certificate’s conditions of use. <a href="/tablets/">Find tablets</a> also filters by features such as charging in the zone and hot swap.',
  },
  faq: [
    {
      q: 'Can you charge an intrinsically safe tablet in Zone 1?',
      a: 'Most intrinsically safe tablets must be charged outside the hazardous area. In our data, only i.safe MOBILE’s IS940.1 and IS945.1 are confirmed for charging inside Zone 1, through their dock interface and within their certificates’ limits.',
    },
    {
      q: 'Can you change the battery of an intrinsically safe tablet in a hazardous area?',
      a: 'No current intrinsically safe tablet in our data is cleared for a battery change inside the hazardous area. Batteries are swapped outside, and only the battery types named by the maker may be fitted.',
    },
    {
      q: 'Can you use a headset with an intrinsically safe tablet in the zone?',
      a: 'Some intrinsically safe tablets support headsets in the zone, for example i.safe MOBILE’s IS940 tablets with their Ex-listed headsets and the ecom Tab-Ex 05 DZ2 with matching intrinsically safe audio equipment. Check that the headset is named for your tablet.',
    },
    {
      q: 'Can you plug a USB device into an ATEX tablet in a hazardous area?',
      a: 'Most ATEX tablets don’t allow USB connections in the hazardous area. Getac’s certificates bar every connection interface there, and BARTEC allows connections only where the explosive atmosphere is shown to be absent.',
    },
    {
      q: 'Which intrinsically safe tablets have hot-swap batteries?',
      a: 'In our data, six current intrinsically safe tablets have hot-swap batteries, all certified for Zone 2: the BARTEC Agile S NI, the BARTEC ET60/65EX2 (Android and Windows), the Getac F110-EX G7 and the Winmate M101AD-EX and M101S-EX.',
    },
    {
      q: 'What does the X at the end of an Ex certificate number mean?',
      a: 'The X at the end of an Ex certificate number means the certificate sets specific conditions of use, such as charging only outside the hazardous area or protecting the device from impacts. The equipment is certified only when used on those terms.',
    },
  ],
};

export default page;
