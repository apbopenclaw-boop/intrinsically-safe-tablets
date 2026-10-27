import type { BestPage } from '../best-pages';

const page: BestPage = {
  slug: 'pharmaceutical',
  title: 'Best Pharma Tablets 2026: Intrinsically Safe & Ex-Proof',
  description:
    'The best tablets for pharmaceutical sites in 2026, led by an Ex ia Windows tablet with a camera-free version. Intrinsically safe and Ex-proof picks compared.',
  h1: 'Best tablets for pharmaceutical sites in 2026',
  eyebrow: 'Best for · By industry',
  lead:
    'Pharmaceutical plants handle flammable solvents in synthesis, charging and drying, and combustible powders in milling, blending and granulation, so a tablet that moves between those areas usually needs both gas and dust certification, such as Zone 1/21 under ATEX, IECEx or your region’s scheme. Beyond the certificate, what matters is how the tablet fits a GMP routine: batch records, cleaning logs and equipment checks often run on Windows software, many sites restrict cameras in production areas (the rule is site-specific), barcode checks happen at dispensing and weighing, and equipment is cleaned often. These are our picks for each kind of pharmaceutical work, from camera-free production areas and material scanning to rounds in Zone 2.',
  headings: {
    ranking: 'Our picks for pharmaceutical sites',
    checklist: 'What a pharmaceutical tablet must show',
    others: 'Other Zone 1/21 tablets on sale',
    faq: 'Pharmaceutical tablet questions',
  },
  glanceNote:
    'The Eaton, the ecom Tab-Ex 05 DZ1 and the Atexxo are certified for Zone 1/21 and can also be used in Zone 2; the two other ecom tablets are Zone 2/22 only. Dust groups differ, so read the table. Prices are on request.',
  glanceColumns: ['zones', 'protection', 'dust', 'cameraFree', 'os'],
  method: [
    'Rank 1 goes to the Zone 1/21 tablet that suits the most pharmaceutical production areas. The Eaton MTL GECMA IS Tablet PC comes in a camera-free version for areas that restrict cameras, it is intrinsically safe to Ex ia, the highest level, it is certified for conductive dust (group IIIC) for powder handling, and it runs x86 Windows, so Windows desktop software, such as the clients many sites use for batch records and MES, runs natively. Camera rules are set by each site, so we treat a camera-free version as a capability to compare, not a rule for the whole industry, and we do not rank the Eaton on its Windows edition or support date, which Eaton does not state.',
    'Positions 2 to 5 are the best choices for four other kinds of work: a camera-free Android tablet for Zone 1/21 with a high water rating for wash-down, dispensing and material scanning in Zone 2 on Windows, a camera-free iPad, and Zone 2 rounds in camera-restricted areas. Two of those four are Zone 2/22 tablets, and the iPad’s dust group is IIIA, so each entry states its dust group. Every brand’s prices are on request, so cost does not affect the order.',
    'We do not pick the i.safe tablets for camera-free areas, because the camera-free version of the IS940.1 is listed by a distributor, not by i.safe. The order would change if another Zone 1/21 tablet offered a camera-free version with Ex ia protection and conductive-dust coverage.',
  ],
  picks: [
    {
      id: 'eaton-gecma-is-tablet-pc',
      label: 'Best overall for pharmaceutical sites',
      why: [
        'The Eaton MTL GECMA IS Tablet PC is the tablet that fits the most pharmaceutical production areas. It is intrinsically safe to Ex ia, IIC T4 for gas and IIIC T135°C for dust, certified for Zone 1/21 under ATEX and IECEx, and Zone 0 rated when used in the case supplied by Eaton, which matters for vessels and tanks. Eaton lists a camera-free version, which covers areas that ban cameras. Note that such a version cannot scan barcodes with a camera, and Eaton lists no scan engine, so plan scanning another way.',
        'It runs Windows 11 IoT Enterprise on an x86 processor, so Windows desktop software runs natively, and the 10.1-inch 2560 × 1600 screen shows batch records and procedures at full size. The 49.68 Wh battery gives a typical runtime of 12 hours, NFC is built in, a stylus is supplied, and a docking station is available for the safe area. Its UL certification covers Class I Division 1 for Groups C and D only, at T4, so not hydrogen or acetylene. Eaton’s manual shows IP67, which the IECEx certificate does not state.',
        'It is T4, which suits solvents such as ethanol, acetone and toluene, but not substances that ignite below 135 °C. It weighs 1,430 g, the screen is 540 nits, and it runs a quad-core Intel Atom (Apollo Lake) processor with 8 GB of memory, against a Core i5-1235U with 16 GB in the ecom Pad-Ex 01 P12 DZ2, so test your heaviest software on it. Eaton does not state which release of Windows 11 IoT Enterprise it ships, so ask for the edition and its support date. Charging and connecting are for safe areas only, and the battery is not user-replaceable.',
      ],
    },
    {
      id: 'ecom-tab-ex-05-dz1',
      label: 'Best camera-free Android tablet for Zone 1/21',
      why: [
        'For production areas that ban cameras and call for frequent cleaning, the Tab-Ex 05 DZ1 is the Android tablet to look at. ecom offers a camera-free version, and the tablet is IP68 for wash-down and MIL-STD-810H rugged. It is flameproof (Ex db) with an intrinsically safe (Ex ia) circuit, certified IIC T6 and IIIC T80°C for Zone 1/21 under ATEX and IECEx, with a Class I Division 1 listing in North America.',
        'ecom’s Ident-Ex 02 wireless 1D/2D scanner, Ex-approved for Zone 1/21, gives scanning that does not depend on the camera, though you should confirm with ecom that it pairs with the camera-free version. NFC is built in, the S Pen is intrinsically safe for use in the hazardous area, and a programmable function key can be set for push-to-talk, an emergency call or an alarm app. ecom states security updates until 2032 (unconfirmed).',
        'It is not certified for Zone 0, and the certificate asks users to keep it away from processes that generate a high electrostatic charge (pneumatic powder transfer is a typical example). It runs Android apps, not Windows software, on an 8-inch, 600-nit screen, it weighs 1,122 g, and the battery is not user-replaceable.',
      ],
    },
    {
      id: 'ecom-pad-ex-01-p12-dz2',
      label: 'Best for dispensing and material scanning in Zone 2',
      why: [
        'For dispensing booths, weighing rooms and stores that are classed Zone 2, where every container and label is scanned and the records live in Windows software, the Pad-Ex 01 P12 DZ2 is built for the job. An optional Honeywell N670X 1D/2D scan engine is Ex-certified as part of the unit, so scanning does not depend on the camera, and the camera is itself optional, with a camera-free version offered. It runs Windows 11 Pro (version 25H2) on a Core i5-1235U with 16 GB, on an 11.6-inch, 1,000-nit screen, and a tethered stylus is supplied.',
        'It is intrinsically safe (Ex ic) for Zone 2/22 under ATEX and IECEx, IIC T4, and has a North American listing for Class I Division 2. The 43.29 Wh battery is user-replaceable outside the hazardous area, the ambient range is −10 °C to +55 °C, and it lists approvals in Japan, South Africa, Brazil, China and Korea. Windows 11 Pro is supported while kept on a current version.',
        'Its dust group is IIIB, which covers combustible flyings and non-conductive dust but not conductive dust, so powder-handling areas with conductive dust are outside it. It is Zone 2/22 only, so it does not go into Zone 1 areas, IP64 is a splash rating rather than wash-down, the certificate says to clean it only with a damp cloth, it is not rated below −10 °C, and it weighs 1,200 g.',
      ],
    },
    {
      id: 'atexxo-zone-1-ipad-mini-7',
      label: 'Best camera-free iPad',
      why: [
        'For sites that use iPads for rounds and checklists but restrict cameras, Atexxo offers blocked-camera (-BC) variants of its Zone 1 iPad mini 7 conversion, which makes it the iPad pick here. It is flameproof (Ex db), IIC T4 for gas, certified for Zone 1/21 under ATEX and IECEx, and it also holds a CSA listing for Class I Zone 1 (AEx) and Class I Division 2, plus Inmetro for Brazil. It has an A17 Pro chip, an 8.3-inch screen and weighs 990 g.',
        'The housing keeps the touchscreen and buttons working, and the iPad inside is a standard iPad mini with iPadOS 27 and Apple’s minimum support, security updates guaranteed until at least October 2029. Touch ID is removed, and on the blocked-camera variant barcode scanning by camera is not possible.',
        'Its dust rating is IIIA, which covers combustible flyings only, not dusts, so it is not for powder handling in milling or blending, where the Eaton (IIIC) is the better choice. It is T4, the screen is 500 nits, the battery is not user-replaceable, charging happens in a safe area with the bottom cover removed, and it is not certified for Zone 0.',
      ],
    },
    {
      id: 'ecom-tab-ex-05-dz2',
      label: 'Best for Zone 2 rounds in camera-restricted areas',
      why: [
        'For operators doing rounds in Zone 2 areas where cameras are restricted, the Tab-Ex 05 DZ2 is the compact, rugged choice. ecom offers a camera-free version, it is IP68 and MIL-STD-810H rugged, and it is intrinsically safe (Ex ic) at IIC T5 with dust group IIIC T85°C for Zone 2/22 under ATEX and IECEx. It also carries Class I and II Division 2 and Class III in North America, with approvals in Brazil, Korea and South Africa.',
        'The S Pen is included, a programmable function key can be set for push-to-talk, an emergency call or an alarm app, NFC is built in, and ecom’s Ident-Ex 02 wireless scanner covers barcode checks without the camera. Its weight of 595 g comes from a single source and ecom’s own figures vary, so treat it as unconfirmed. ecom states security updates until 2032 (unconfirmed).',
        'It is for Zone 2 and 22 only, so it does not go into Zone 1 areas. T5 does not suit substances that ignite below 100 °C, the battery is not user-replaceable, and the Ex-protective case must be correctly fitted before it enters a hazardous area. It runs Android, not Windows software, on a 600-nit, 8-inch screen.',
      ],
    },
  ],
  pool: (p) => p.data.certification.zonesGas.includes('1') && p.data.certification.zonesDust.includes('21'),
  others: {
    filterLabel: 'Filter all Zone 1/21 tablets',
    filterHref: '/tablets/?zone=1&dust=21',
    tableLabel: 'Other current tablets certified for Zone 1/21',
    note: 'Find tablets also lists discontinued models and Zone 2 tablets, which are left out here. Where a camera-free version is available, ask the maker which accessories and apps it supports.',
    columns: ['type', 'zones', 'cameraFree', 'barcode', 'tempClass', 'certification', 'weight'],
  },
  checklist: {
    lead: 'Your plant’s area classification, dust assessment and camera policy decide which of these matter. Confirm them with your safety and quality teams, then read the certificate for your exact model.',
    items: [
      {
        title: 'Solvent gases and temperature class',
        text: 'Common process solvents such as ethanol, acetone and toluene ignite well above 135 °C, so T4 covers them. Hydrogen, used in hydrogenation, calls for gas group IIC, and any substance that ignites below 135 °C needs a stricter class: among our picks the ecom Tab-Ex 05 DZ2 is T5 (surfaces up to 100 °C) and the ecom Tab-Ex 05 DZ1 is T6 (up to 85 °C).',
      },
      {
        title: 'Dust zone and dust group',
        text: 'Milling, blending, charging and sieving can put combustible powder into the air, so look for Zone 21 certification next to the gas rating. A tablet rated IIIC also suits IIIB and IIIA dusts, while the ecom Pad-Ex 01 P12 DZ2 is IIIB and the Atexxo iPad mini 7 is IIIA, so they are not for conductive dust.',
      },
      {
        title: 'Camera policy and scanning',
        text: 'Check whether your production areas allow cameras, and whether the tablet comes in a camera-free version: the Eaton, both ecom Tab-Ex tablets and the ecom Pad-Ex do, and Atexxo offers blocked-camera variants. Then confirm that the scanning option you need, such as a scan engine or a wireless scanner, is supported on that exact version.',
      },
      {
        title: 'Static charge and cleaning',
        text: 'Pneumatic powder transfer can generate a strong electrostatic charge, and the ecom certificates require protection against such processes. Before a tablet is wiped down or washed, check its IP rating and where it comes from: ecom rates both Tab-Ex 05 tablets IP68, the Eaton’s IP67 is from its manual and not in its IECEx certificate, and the Pad-Ex’s IP64 is in its Ex marking, and its certificate says to clean it only with a damp cloth.',
      },
      {
        title: 'Software and support',
        text: 'If batch records or MES clients are Windows only, check that they run on the tablet’s Windows edition. The Eaton uses x86 Windows 11 IoT Enterprise, but Eaton does not state the edition, so its support date is unconfirmed, and the ecom Pad-Ex 01 P12 DZ2 uses Windows 11 Pro, supported while kept on a current version.',
      },
    ],
  },
  faq: [
    {
      q: 'What is the best tablet for a pharmaceutical plant?',
      a: 'On our criteria the Eaton MTL GECMA IS Tablet PC ranks first: it is intrinsically safe to Ex ia, certified IIC and IIIC for Zone 1/21 under ATEX and IECEx, runs x86 Windows 11 IoT Enterprise, and comes in a camera-free version. It is T4, weighs 1,430 g and has a 540-nit screen, so for a camera-free Android tablet with IP68 the ecom Tab-Ex 05 DZ1 is the alternative.',
    },
    {
      q: 'Are there camera-free Ex tablets for pharma sites?',
      a: 'Yes. The Eaton MTL GECMA IS Tablet PC, the ecom Tab-Ex 05 DZ1, the ecom Tab-Ex 05 DZ2 and the ecom Pad-Ex 01 P12 DZ2 all come in camera-free versions, and the Atexxo Zone 1 iPad mini 7 has blocked-camera variants. Camera rules are set by each site, so confirm the version and its accessories with the maker.',
    },
    {
      q: 'Do pharmaceutical plants need dust-rated tablets?',
      a: 'Where powders are handled, dust zones apply alongside gas zones, and conductive dust needs a group IIIC rating. The Eaton MTL GECMA IS Tablet PC and the ecom Tab-Ex 05 tablets are IIIC, the ecom Pad-Ex 01 P12 DZ2 is IIIB and the Atexxo Zone 1 iPad mini 7 is IIIA, so check your dust assessment against the group.',
    },
    {
      q: 'Can an iPad be used in a pharmaceutical plant?',
      a: 'Yes, in a certified Ex cover or conversion, since a standard iPad has no Ex certificate. The Atexxo Zone 1 iPad mini 7 is certified for Zone 1/21 under ATEX and IECEx, at T4 and dust group IIIA, and has blocked-camera variants, but IIIA covers combustible flyings only, not powder dust.',
    },
    {
      q: 'Which Ex tablets run Windows software for pharma work?',
      a: 'The Eaton MTL GECMA IS Tablet PC is certified for Zone 1/21 and runs x86 Windows 11 IoT Enterprise, and the ecom Pad-Ex 01 P12 DZ2 is certified for Zone 2/22 and runs Windows 11 Pro. Check that your batch-record or MES software runs on the exact edition.',
    },
    {
      q: 'What temperature class does a pharmaceutical tablet need?',
      a: 'Common process solvents such as ethanol, acetone and toluene ignite well above 135 °C, so T4 covers them, and the Eaton is T4. Any substance that ignites below 135 °C needs a stricter class: among our picks the ecom Tab-Ex 05 DZ2 is T5 and the ecom Tab-Ex 05 DZ1 is T6.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Need help matching a tablet to your production areas?',
    text:
      'Your zones, dust group and camera policy decide which tablets qualify, and the certificate for your exact version is what counts. Tell us about your site and we will help you compare tablets impartially.',
  },
};

export default page;
