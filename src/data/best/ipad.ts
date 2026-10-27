import type { BestPage } from '../best-pages';

const page: BestPage = {
  slug: 'ipad',
  title: 'Best ATEX iPads 2026: Intrinsically Safe & Ex-Proof',
  description:
    'The best iPads for hazardous areas in 2026, ranked by certified coverage. Explosion-proof cases and Ex conversions for Zone 1 and Zone 2 compared, with caveats.',
  h1: 'Best iPads for hazardous areas in 2026',
  eyebrow: 'Best for · By need',
  lead:
    'A standard iPad has no Ex certificate, so it can enter a hazardous area only inside a certified case or as a certified conversion, and Zone 1 work needs one certified for Zone 1. Beyond the certificate, what matters is how much of the iPad still works once it is enclosed: the cameras, LiDAR, Face ID, stylus input and charging all depend on the housing. Only two of the iPad options we rank have a confirmed marking and clear availability, and the other three picks here carry a warning because their markings are unconfirmed. These are our picks, from Zone 1 inspection work to compact and rugged options.',
  headings: {
    ranking: 'Our picks for iPads',
    checklist: 'What an Ex iPad must show',
    others: 'Other iPads on sale',
    faq: 'Hazardous area iPad questions',
  },
  glanceNote:
    'Each is a standard iPad in an Ex case or conversion. The first two have confirmed markings; picks 3 to 5 are marked unconfirmed (⚠) because their certificates or declarations are not published or not checked. Prices are on request.',
  glanceColumns: ['type', 'zones', 'tempClass', 'schemes', 'weight'],
  method: [
    'Rank 1 goes to the iPad option certified for the most hazardous-area work and best equipped for it. We look at zones first, then gas group, temperature class and dust group. The Xshielder iPad Pro 11-inch is rated Zone 1/21 with IIC T6 and IIIC, the widest of any iPad option with a confirmed marking: the other Zone 1 options with a confirmed marking are Atexxo’s iPad mini conversions at IIC T4 with dust group IIIA and the old-stock Xciel XCZ1 iPad mini 5 at IIC T5 with no dust rating. Of the options with unconfirmed markings, The Joy Factory lists IIC T6 with IIIC and Xciel’s XCZ1 iPad mini 6 and 7 list IIB T6. It also has the largest, brightest screen (11 inches, 1,000 nits) and the most powerful chip (M5 with 12–16 GB).',
    'Positions 2 to 5 each name the best iPad option for a different need, so they are not a strict order of certified coverage. Picks 3 to 5 are included with a warning: their markings are unconfirmed, so they rank below the two confirmed options whatever the marking says, and they must not be read as certified to the marking shown. Prices are on request for every maker, so cost does not affect the order. We leave out the Atexxo Zone 1 iPad mini 6 (iPadOS support ended in September 2026), the Xciel XCZ1 iPad mini 5 (old stock) and the Armadex Ex UniCase (pre-order).',
    'The order follows the certificates, and it would change if another maker published a certificate showing wider coverage, or if the unconfirmed markings were confirmed. Security support for iPad Pro models is shown as 7–8 years (based on previous iPad Pro support); for other iPads we show Apple’s minimum.',
  ],
  picks: [
    {
      id: 'xshielder-ipad-pro-11',
      label: 'Best overall iPad for hazardous areas',
      why: [
        'The Xshielder iPad Pro 11-inch is the iPad we would give a team that has to document its work in Zone 1. Inside the flameproof (Ex db) cover is a standard iPad Pro 11-inch (M5) running iPadOS 27, with an 11-inch Ultra Retina XDR screen at 1,000 nits and 12–16 GB of memory. Xshielder confirms that the 12 MP rear camera with 4K ProRes video, the LiDAR scanner, the 12 MP front camera with Face ID, stylus input, USB-C charging and data, and audio in and out all work through the cover, so inspection photos, 3D scans, marked-up drawings and video calls with an expert stay on one device.',
        'It is rated Ex db IIC T6 Gb for gas and Ex tb IIIC T80 °C Db for dust, Zone 1/21 under ATEX. That is every gas group, the strictest temperature class and conductive dust, and no other iPad option with a confirmed marking matches it. Security updates are expected for 7–8 years (based on previous iPad Pro support), and the iPad is managed like any other in your fleet.',
        'The limits matter for planning. The certificate is ATEX only, with no IECEx or North American listing yet, and it is rated to +45 °C. It weighs 1,350 g including the iPad, the IP65 rating is pending testing, the battery is not user-replaceable, and our data does not say whether charging over USB-C is allowed inside the zone. Stylus input is confirmed, but the stylus’s Ex rating is not stated, and Apple Pencil attachment and charging through the cover are not confirmed.',
      ],
    },
    {
      id: 'atexxo-zone-1-ipad-mini-7',
      label: 'Best compact iPad for Zone 1',
      why: [
        'When an iPad Pro is too big, the Atexxo Zone 1 iPad mini 7 is the compact Zone 1 option we would choose. Atexxo converts a standard iPad mini (A17 Pro) with a flameproof (Ex db) housing certified for Zone 1/21 under ATEX and IECEx, with published certificate numbers (ATEX EPS 22 ATEX 1 162 X, IECEx EPS 22.0020X). The 8.3-inch screen is 500 nits, the rear 12 MP camera works through a glass opening, and at 990 g including the tablet it is light for a Zone 1 iPad. A blocked-camera (-BC) variant suits sites that restrict cameras.',
        'It is the only iPad option here that adds a North American and a Brazilian approval: the CSA certificate covers Class I Zone 1 AEx db IIC T4 Gb and allows the marking Class I Division 2 Groups A to D at T4, and INMETRO covers Brazil. For iPad fleets on North American sites that makes it the practical choice.',
        'The trade-offs are the certificate and the tablet. It is IIC T4, so gases that ignite below 135 °C are outside it, and the dust group is IIIA, which covers combustible flyings only. Touch ID is removed, the ambient range is −20 °C to +50 °C, and charging is outside the hazardous area only. Apple’s minimum support runs to October 2029 and is not an expected end date.',
      ],
    },
    {
      id: 'joy-factory-axtion-extreme-ipad-mini',
      label: 'Best rugged compact option (marking unconfirmed)',
      why: [
        'This pick comes with a warning: our data flags the marking of The Joy Factory aXtion Extreme iPad mini as unconfirmed, so we do not describe it as certified to a specific marking. The Joy Factory lists a flameproof (Ex db) case for the iPad mini (A17 Pro) for Zone 1/21 and an IECEx certificate (TPS 25.0016X), but the ATEX version of the marking comes from its datasheet and the ATEX certificate is not published. Ask The Joy Factory for the certificate for your exact model before you specify it.',
        'What the case offers is ruggedness. It is rated IP68 and MIL-STD-810H with a 122 cm drop rating, the rear camera is stated to be fully functional through a glass opening, and it has VESA 75 and quarter-inch mounts, shoulder strap ports and an anti-static leather hand strap. The tablet inside is an 8.3-inch iPad mini at 500 nits.',
        'Other figures need care. The 1,396 g weight is from a single source, and the certificate marks no ambient range, so the standard default of −20 °C to +40 °C applies. Charging means dismantling the I/O port in a non-hazardous area, and Apple’s minimum support runs to October 2029.',
      ],
    },
    {
      id: 'xciel-xcz1-ipad-mini-7',
      label: 'Best for IIB gases on an iPad mini (marking unconfirmed)',
      why: [
        'This pick also carries a warning: the Xciel XCZ1 iPad mini 7’s marking is unconfirmed in our data. The IECEx marking is from the certificate, but the ATEX version comes from a distributor and the ATEX certificate is not published, so we cannot describe it as certified to a specific marking. Xciel lists a flameproof (Ex db) case with a listed marking of IIB T6 for Zone 1, and an IECEx certificate number (EXV 23.0054X) to check.',
        'Its listed marking suits sites whose gases are IIB or IIA, such as ethylene or propane, and that need a T6 limit; IIB does not cover hydrogen or acetylene, and our data lists no dust rating. Next to The Joy Factory case it is rated for a wider ambient range, −20 °C to +50 °C against the default +40 °C. The case offers mounting options: a magnet mounting system, locking system, carrying handle, shoulder strap and chest harness.',
        'The other figures are modest. It weighs 1,350 g (single source) with an IP54 rating, and charging is through a screwed USB-C cover outside the hazardous area. Capacitive stylus use, and the lack of Apple Pencil attach and charge through the sealed case, are inferred rather than stated by Xciel. Apple’s minimum support runs to October 2029.',
      ],
    },
    {
      id: 'atexxo-zone-2-ipad-pro-11',
      label: 'Best Zone 2 iPad Pro (marking unconfirmed)',
      why: [
        'The Atexxo Zone 2 iPad Pro 11-inch, Atexxo’s conversion of the iPad Pro for Zone 2, also comes with a warning: its marking is unconfirmed, because Atexxo does not publish the certificate or declaration of conformity. We list the marking as Atexxo states it, Ex ec ic IIC T4 Gc for gas and Ex tc IIIB T135 °C Dc for dust, for Zone 2/22 under ATEX, but we cannot check it and do not describe it as certified to it.',
        'It matters for fleets that want the iPad Pro hardware in a Zone 2 area. The iPad Pro 11-inch (M5) has an 11-inch Ultra Retina XDR screen at 1,000 nits and 12–16 GB of memory, and the conversion weighs 1,040 g including the tablet, 310 g less than the Xshielder iPad Pro 11-inch. Atexxo’s page mentions LiDAR 3D mapping, but our data marks that and the through-case features as inferred rather than confirmed. Security updates are expected for 7–8 years (based on previous iPad Pro support).',
        'It is for Zone 2 only, so it is not for Zone 1 areas, and the stated dust group, IIIB, does not cover conductive dust. There is no IECEx certificate and no North American listing. If your crews enter Zone 1, use rank 1.',
      ],
    },
  ],
  pool: (p) => p.data.os.name === 'iPadOS',
  others: {
    filterLabel: 'Filter all iPad options',
    filterHref: '/tablets/?os=iPadOS',
    tableLabel: 'Other current iPad options for hazardous areas',
    note: 'Discontinued models are left out; Find tablets lists them. A temperature class or marking shown as “Not verified” or “(unconfirmed)” is one we could not confirm from a certificate. Weights are for the complete unit, including the iPad.',
    columns: ['type', 'zones', 'gasGroup', 'tempClass', 'schemes', 'updates', 'weight'],
  },
  checklist: {
    lead: 'Your site’s hazardous area classification decides which of these matter. Confirm it with your safety engineer, then check the certificate for the exact iPad model you plan to buy.',
    items: [
      {
        title: 'Zone and protection method',
        text: 'For Zone 1, the iPad options are flameproof (Ex db) cases and conversions. Ex ic, Ex ec ic and Ex nR options are for Zone 2 only, so a Zone 2 rating never covers a Zone 1 area.',
      },
      {
        title: 'A confirmed marking',
        text: 'Ask for the ATEX or IECEx certificate, not just a datasheet. Picks 3 to 5 here are marked unconfirmed because the certificate or declaration is not published or not checked, so read the marking against the certificate before you buy.',
      },
      {
        title: 'Gas and dust groups, temperature class',
        text: 'The Xshielder iPad Pro 11-inch is IIC T6 with IIIC. The Atexxo Zone 1 iPad mini 7 is IIC T4 with IIIA, and the Xciel XCZ1 iPad mini 7 lists IIB, which does not cover hydrogen or acetylene.',
      },
      {
        title: 'The exact iPad model',
        text: 'A certificate covers one iPad model inside one case or housing. Check the model named on it and do not open the case or swap the iPad yourself unless the maker allows it.',
      },
      {
        title: 'What works through the case',
        text: 'Cameras, LiDAR, Face ID, the stylus and charging depend on the housing. Xshielder confirms them for the iPad Pro 11-inch; for the other options, check what the maker states and treat anything marked inferred as unconfirmed.',
      },
      {
        title: 'Security support',
        text: 'iPad Pro support is shown as 7–8 years (based on previous iPad Pro support). Other iPads show Apple’s minimum, such as October 2029 for the iPad mini 7, which is a floor and not an end date.',
      },
    ],
  },
  faq: [
    {
      q: 'What is the best iPad for hazardous areas?',
      a: 'On certified coverage, the Xshielder iPad Pro 11-inch ranks first: its flameproof (Ex db) cover is rated IIC T6 with dust group IIIC for Zone 1/21 under ATEX, with an 11-inch, 1,000-nit screen and an M5 chip. It is ATEX only with no IECEx or North American listing, and rated to +45 °C, so for North American sites the Atexxo Zone 1 iPad mini 7 is the alternative.',
    },
    {
      q: 'Is there an intrinsically safe iPad?',
      a: 'Not with a confirmed marking. The Zone 1 iPad options are flameproof (Ex db) cases and conversions, which contain an ignition inside the housing instead of limiting the energy in the circuits, so they are explosion-proof, not intrinsically safe. Atexxo and Xciel state Ex ec ic or Ex ic markings for their Zone 2 iPad options, but those markings are unconfirmed, and the Armadex Ex UniCase is a restricted-breathing (Ex nR) case for Zone 2.',
    },
    {
      q: 'Can I use a standard iPad in a hazardous area?',
      a: 'No. A standard iPad has no Ex certificate, so it needs a certified case or a certified conversion, and the certificate applies to that exact iPad model. The makers also restrict opening the housing, so do not open a case or swap the iPad yourself unless the maker allows it.',
    },
    {
      q: 'Can I use an iPad Pro in a Zone 1 area?',
      a: 'Yes, with a certified Zone 1 cover. The Xshielder iPad Pro 11-inch (M5) is the iPad Pro option with a confirmed Zone 1 marking, Ex db IIC T6 for Zone 1/21 under ATEX. Atexxo also offers a Zone 2 iPad Pro 11-inch, but its marking is unconfirmed and it is not for Zone 1.',
    },
    {
      q: 'Can I charge an iPad in a hazardous area?',
      a: 'Our data records no iPad option as allowed to charge inside the hazardous area. Atexxo’s Zone 1 conversions, The Joy Factory and Xciel’s XCZ1 cases state that charging is done outside it. Xshielder’s cover lets you charge over USB-C, but our data does not say whether that is permitted inside the zone, so ask Xshielder.',
    },
    {
      q: 'How long do Ex iPads get security updates?',
      a: 'Apple does not publish end dates. We show 7–8 years (based on previous iPad Pro support) for iPad Pro models such as the Xshielder iPad Pro 11-inch, and Apple’s minimum for other iPads, such as October 2029 for the Atexxo Zone 1 iPad mini 7.',
    },
  ],
  cta: {
    kind: 'xshielder',
    heading: 'Zone 1 iPads for your team',
    text:
      'Xshielder’s flameproof (Ex db) cover fits the iPad Pro 11-inch (M5), rated IIC T6 with dust group IIIC for Zone 1/21 under ATEX, with cameras, LiDAR, Face ID, stylus input and USB-C working through the cover. Tell the team about your site and fleet size to get a quote.',
    link: { label: 'See the iPad Pro 11-inch cover', href: 'https://xshielder.com/products/atex-ipad' },
  },
};

export default page;
