import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['getac-f110-ex', 'isafe-is940-2'],
  title: 'Getac F110-EX G7 vs i.safe MOBILE IS940.2 Compared',
  description:
    'Getac F110-EX G7 or i.safe MOBILE IS940.2? Windows or Android for Zone 2: certificates, North America, charging, weight and screen compared, with our pick.',
  h1: 'Getac F110-EX G7 vs i.safe MOBILE IS940.2',
  eyebrow: 'Compare · Windows or Android for Zone 2',
  lead:
    'These two Zone 2 tablets do different jobs. The Getac F110-EX G7 is an 11.6-inch Windows 11 Pro tablet with a 13th-generation Intel Core processor and a 1,200-nit screen, at 1,680 g. The i.safe MOBILE IS940.2 is a 10.1-inch Android 14 tablet at 1,059 g, with 5G, security updates until Q4 2032, and a Class I Division 2 listing for North America. Both are intrinsically safe (Ex ic), IIC T4, certified for Zone 2/22 only. i.safe also allows the i.safe MOBILE IS940.2 to be charged inside the hazardous area. Here is how they compare, and which team should choose which.',
  verdict: {
    summary: [
      'They suit different work, so the pick depends on the software. We would choose the Getac F110-EX G7 for teams that need Windows desktop software and a large, bright screen, and for hot sites up to +60 °C. We would choose the i.safe MOBILE IS940.2 for Android fleets, for sites that need a published ATEX certificate or a North American Class I Division 2 listing, for crews who must charge in the zone, and for anyone carrying the tablet all shift: it weighs 621 g less.',
    ],
    choose: [
      {
        id: 'getac-f110-ex',
        reasons: [
          'Your software is Windows software: it runs Windows 11 Pro on x86, and the i.safe MOBILE IS940.2 runs Android 14 and cannot run Windows desktop software.',
          'Crews read drawings, procedures or work packs on site: its screen is 11.6 inches at 1,200 nits, against 10.1 inches with no brightness figure in our data for the i.safe MOBILE IS940.2.',
          'You need built-in scanning or RFID: it lists an optional 1D/2D imager and an optional HF RFID reader, where the i.safe MOBILE IS940.2 scans through its camera and lists no scan engine.',
          'Shifts outlast one battery: Getac lists hot-swap batteries for it, changed outside the hazardous area, and our data does not state hot swap for the i.safe MOBILE IS940.2.',
          'Your sites run hot: it is certified up to +60 °C ambient, against +55 °C for the i.safe MOBILE IS940.2.',
        ],
      },
      {
        id: 'isafe-is940-2',
        reasons: [
          'Your site or client wants a published ATEX certificate: it holds EPS 25 ATEX 1 002 X, where Getac states ATEX for the Getac F110-EX G7 but has not published the certificate.',
          'You work in North America: it is listed for NEC 500 Class I Division 2 Groups A to D at T4, and our data lists no North American listing for the Getac F110-EX G7.',
          'Crews cannot walk out to a charger: it may be charged inside the hazardous area within the certificate’s limits, where the Getac F110-EX G7 charges outside only.',
          'Crews carry the tablet through a shift: it weighs 1,059 g against 1,680 g for the Getac F110-EX G7.',
          'You are buying a fleet for years: i.safe states security updates until Q4 2032, and the tablet has a 50 MP rear camera and 5G.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'ATEX certificate',
      note: 'The i.safe MOBILE IS940.2 has a published ATEX certificate, EPS 25 ATEX 1 002 X. Getac states ATEX certification for the Getac F110-EX G7, but the certificate is not published, so we cannot verify it. Both have published IECEx certificates.',
    },
    {
      row: 'North America',
      note: 'The i.safe MOBILE IS940.2 is listed for NEC 500 Class I Division 2 Groups A, B, C and D at T4, plus Class II Division 2 and Class III. Our data lists no North American listing for the Getac F110-EX G7. For a US or Canadian site, that can decide the choice.',
    },
    {
      row: 'Operating system',
      note: 'The Getac F110-EX G7 runs Windows 11 Pro on an x86 Intel Core processor, so desktop software runs on it. The i.safe MOBILE IS940.2 runs Android 14 on an Arm chip. Check which your software needs first.',
    },
    {
      row: 'Charging',
      title: 'Charging in the hazardous area',
      note: 'i.safe allows the i.safe MOBILE IS940.2 to be charged inside the hazardous area, within the certificate’s limits, at 0 °C to +45 °C. The Getac F110-EX G7 must be charged outside it. For crews on long shifts, that changes how a fleet is run.',
    },
  ],
  sections: [
    {
      title: 'Certificates and North America',
      edge: 'isafe-is940-2',
      text: [
        'Both tablets are intrinsically safe (Ex ic), IIC T4, with protection levels Gc and Dc, certified for Zone 2/22 only. The Getac F110-EX G7 adds the “op is” marking for inherently safe optical radiation, with a dust surface temperature of 130 °C, against 135 °C for the i.safe MOBILE IS940.2. Both have a published IECEx certificate: IECEx EPS 21.0079X for the Getac F110-EX G7 and IECEx EPS 25.0002X for the i.safe MOBILE IS940.2. The Getac certificate names the model “F110-Exc” without the generation, which we matched to the G7 by its batteries, dust group and ambient range, so confirm the model with Getac.',
        'The difference is in what else is published. i.safe lists ATEX certificate EPS 25 ATEX 1 002 X and a North American listing for the i.safe MOBILE IS940.2, plus IA (South Africa) and KCs (Korea) approvals. Getac states ATEX for the Getac F110-EX G7, but the certificate is not published, and our data lists no North American listing. If your paperwork needs an ATEX certificate or a Class I Division 2 listing on file, the i.safe MOBILE IS940.2 is the easier one to document.',
      ],
    },
    {
      title: 'Windows against Android: software, memory and support',
      edge: 'even',
      text: [
        'The Getac F110-EX G7 runs Windows 11 Pro on a 13th-generation Intel Core i5 or i7 with 16 GB of DDR5 memory (32 GB optional) and a 256 GB SSD, with options up to 2 TB. Windows 11 is supported under Microsoft’s Modern Lifecycle while kept on a current version. For engineers with desktop applications, that is the point of the tablet. The i.safe MOBILE IS940.2 runs Android 14 on a Qualcomm QCM6490, a long-term support chipset, with 8 GB of memory and 128 GB of storage, microSD supported. Windows desktop software is not possible on it.',
        'For Android fleets the i.safe MOBILE IS940.2 has the clearer support position: i.safe states security updates until Q4 2032. On connectivity, it lists 5G NR and 4G LTE, Wi-Fi 6 and Bluetooth 5.2 with a dual SIM (nano-SIM and eSIM). The Getac F110-EX G7 has Wi-Fi 6E and Bluetooth 5.3, with optional 4G LTE, 5G Sub-6 and a dual SIM with eSIM, so order the cellular version you need.',
      ],
    },
    {
      title: 'Screen, scanning and heat',
      edge: 'getac-f110-ex',
      text: [
        'The Getac F110-EX G7 has an 11.6-inch, optically bonded screen at 1920 × 1080 and 1,200 nits, which Getac calls sunlight-readable, with a digitizer pen. The i.safe MOBILE IS940.2 has a 10.1-inch Gorilla Glass V3 screen at 1200 × 1920, usable with gloves; our data has no brightness figure for it, so its brightness is unverified. Our data does not confirm glove touch for the Getac F110-EX G7. The i.safe MOBILE IS940.2 lists a passive stylus as an accessory, not in the box.',
        'For scanning, the Getac F110-EX G7 offers a factory 1D/2D imager and an HF RFID reader, while the i.safe MOBILE IS940.2 scans through its 50 MP camera with an app and lists no dedicated scan engine. The Getac F110-EX G7 is also certified to +60 °C ambient, against +55 °C, with −21 °C and −20 °C at the cold end. Hot sites, large screens and built-in scanning are where it earns its extra weight.',
      ],
    },
    {
      title: 'Weight, camera and charging in the zone',
      edge: 'isafe-is940-2',
      text: [
        'The i.safe MOBILE IS940.2 weighs 1,059 g and the Getac F110-EX G7 1,680 g, a gap of 621 g. The i.safe MOBILE IS940.2 is IP68 against IP66, has a 50 MP autofocus rear camera against 8 MP, and both list a 5 MP front camera. Both list MIL-STD-810H: the Getac F110-EX G7 with a 1.2 m drop in use, the i.safe MOBILE IS940.2 without a drop height.',
        'The i.safe MOBILE IS940.2 may be charged inside the hazardous area, within the certificate’s limits, at 0 °C to +45 °C, through its 12-pin dock interface with the IS-DS940.1 dock. Its battery is replaceable, but only outside the hazardous area, and the USB-C cover is opened only outside. The Getac F110-EX G7 charges and has its batteries swapped outside only, and no connection interface may be used in the zone. It does list hot-swap batteries, which the i.safe data does not. The i.safe MOBILE IS940.2 also has a red programmable key for SOS or lone working, and PTT through the Ex-rated IS-PTTB1A.1 button accessory. We do not compare runtime, since our data has no figure for either.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the Getac F110-EX G7 better than the i.safe MOBILE IS940.2?',
      a: 'Neither is better across the board: one is Windows, the other Android. The Getac F110-EX G7 suits Windows software, a bright 11.6-inch screen and hot sites up to +60 °C. The i.safe MOBILE IS940.2 suits Android fleets, sites that need a published ATEX certificate or a North American Division 2 listing, in-zone charging and lighter carrying, at 1,059 g against 1,680 g.',
    },
    {
      q: 'Can either tablet be used in Zone 1?',
      a: 'No. Both are intrinsically safe (Ex ic) and certified to protection level Gc, which covers Zone 2 only. Zone 1 needs a tablet certified to Gb or higher, such as the i.safe MOBILE IS940.1, the Zone 1 sibling of the i.safe MOBILE IS940.2.',
    },
    {
      q: 'Which tablet can be charged in the hazardous area?',
      a: 'Only the i.safe MOBILE IS940.2, within its certificate’s limits and a charging range of 0 °C to +45 °C, for example on its IS-DS940.1 dock. The Getac F110-EX G7 must be charged outside the hazardous area, and its batteries are swapped outside too.',
    },
    {
      q: 'Does either have a North American listing?',
      a: 'The i.safe MOBILE IS940.2 is listed for NEC 500 Class I Division 2 Groups A to D at T4, with Class II Division 2 and Class III. Our data lists no North American listing for the Getac F110-EX G7, which is not the same as saying it has none, so ask Getac.',
    },
    {
      q: 'Which tablet runs Windows software?',
      a: 'The Getac F110-EX G7 runs Windows 11 Pro on x86. The i.safe MOBILE IS940.2 runs Android 14 on an Arm chip, and our data lists Windows desktop software as not possible on it.',
    },
    {
      q: 'Are both ATEX certified?',
      a: 'The i.safe MOBILE IS940.2 holds ATEX certificate EPS 25 ATEX 1 002 X. Getac states ATEX certification for the Getac F110-EX G7, but the certificate is not published, so we cannot verify it. Both hold published IECEx certificates.',
    },
    {
      q: 'How much do the Getac F110-EX G7 and i.safe MOBILE IS940.2 cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are certified for Zone 2/22 at IIC T4, so the choice comes down to Windows or Android, the certificates your site needs and whether crews charge in the zone. Tell us about your sites and we will help you choose impartially.',
  },
};

export default page;
