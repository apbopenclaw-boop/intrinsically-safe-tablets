import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['getac-f110-ex', 'getac-zx80-ex'],
  title: 'Getac F110-EX G7 vs Getac ZX80-EX Compared',
  description:
    'Getac F110-EX G7 or Getac ZX80-EX? 11.6-inch Windows or 8-inch Android for Zone 2: weight, screen, heat and battery compared, with our pick for each job.',
  h1: 'Getac F110-EX G7 vs Getac ZX80-EX',
  eyebrow: 'Compare · Windows or Android for Zone 2',
  lead:
    'These two rugged tablets from Getac do different jobs. The Getac F110-EX G7 is an 11.6-inch Windows 11 Pro tablet with a 13th-generation Intel Core processor, a 1,200-nit screen and a weight of 1,680 g. The Getac ZX80-EX is an 8-inch Android 15 tablet on a Qualcomm QCS6490 with a 1,000-nit screen and a weight of 780 g. They share the same Ex marking: intrinsically safe (Ex ic op is), IIC T4, certified for Zone 2/22 only, with published IECEx certificates and ATEX stated by Getac but not published. The choice is the work, not the certificate. Here is how they compare, and which team should carry which.',
  verdict: {
    summary: [
      'Neither is the better tablet, because they suit different work. We would choose the Getac F110-EX G7 for engineers and supervisors who need Windows desktop software, a large screen for drawings and work packs, and a battery that can be hot-swapped outside the zone. We would choose the Getac ZX80-EX for crews who walk, climb and scan all shift and run Android apps: it weighs 900 g less, has the higher IP rating, and lists a 1.8 m drop against 1.2 m in use.',
    ],
    choose: [
      {
        id: 'getac-f110-ex',
        reasons: [
          'Your software is Windows software: it runs Windows 11 Pro on x86, and the Getac ZX80-EX runs Android 15 and cannot run Windows desktop software.',
          'Crews read drawings, procedures or work packs on site: its screen is 11.6 inches at 1,200 nits, against 8 inches at 1,000 nits.',
          'Shifts outlast one battery: Getac lists LifeSupport hot-swap batteries for it, changed outside the hazardous area, where our data does not state hot swap for the Getac ZX80-EX.',
          'Your sites run hot: it is certified up to +60 °C ambient, against +55 °C for the Getac ZX80-EX.',
          'You need a large local drive or more memory: 16 GB of memory (32 GB optional) and an SSD of 256 GB up to 2 TB, against 12 GB and 256 GB.',
        ],
      },
      {
        id: 'getac-zx80-ex',
        reasons: [
          'Crews carry the tablet through a whole shift, on ladders or along racking: it weighs 780 g against 1,680 g for the Getac F110-EX G7.',
          'Your apps are Android apps, or your fleet already runs Android: it has Android 15 on a Qualcomm QCS6490 with 12 GB of memory.',
          'The tablet gets knocked about: it is IP67 with a 1.8 m drop rating, against IP66 and 1.2 m in use for the Getac F110-EX G7.',
          'Your teams photograph nameplates or damage: it has a 16 MP rear and 8 MP front camera, against 8 MP and 5 MP.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'Operating system',
      note: 'The Getac F110-EX G7 runs Windows 11 Pro on an x86 Intel Core processor, so desktop software runs on it. The Getac ZX80-EX runs Android 15 on an Arm chip. Check which your software needs before anything else.',
    },
    {
      row: 'Weight',
      note: 'The Getac ZX80-EX weighs 780 g and the Getac F110-EX G7 1,680 g, a gap of 900 g. For a tablet held in one hand or carried on a strap through a shift, you notice it.',
    },
    {
      row: 'Display',
      title: 'Screen size',
      note: 'The Getac F110-EX G7 has an 11.6-inch, optically bonded screen at 1,200 nits, and the Getac ZX80-EX an 8-inch one at 1,000 nits. The larger screen suits drawings and forms; the smaller one suits a tablet used on the move.',
    },
    {
      row: 'Hot-swap battery',
      note: 'Getac lists LifeSupport hot-swap batteries for the Getac F110-EX G7. For the Getac ZX80-EX it lists a swappable optional second battery, and our data does not state hot swap for the Ex version. Both are swapped outside the hazardous area only.',
    },
  ],
  sections: [
    {
      title: 'Software, processor and memory',
      edge: 'even',
      text: [
        'This is the real divide. The Getac F110-EX G7 is a Windows 11 Pro machine on a 13th-generation Intel Core i5 or i7 (some with vPro) with 16 GB of DDR5 memory, or 32 GB as an option, and a 256 GB NVMe SSD with options up to 2 TB. Windows 11 is supported under Microsoft’s Modern Lifecycle while kept on a current version, and it runs desktop software natively. The Getac ZX80-EX runs Android 15 on a Qualcomm QCS6490 with 12 GB of memory and 256 GB of storage plus microSD, and our data notes at least three Android version upgrades per generation (device dependent), but from a secondary source: Getac doesn’t state it for this model.',
        'On support, our data gives the Getac ZX80-EX security updates until February 2029, but that is Getac’s date for the standard ZX80 and Getac lists none for the Ex version, so treat it as unconfirmed. Both have Wi-Fi 6E, with Bluetooth 5.3 on the Getac F110-EX G7 and 5.2 on the Getac ZX80-EX, and both offer optional 4G LTE and 5G Sub-6 and a dual SIM with eSIM. The Getac F110-EX G7 also lists a fingerprint reader and a Windows Hello face camera as options, where biometrics for the Getac ZX80-EX are not in our data.',
      ],
    },
    {
      title: 'Screen, cameras and pen',
      edge: 'even',
      text: [
        'The Getac F110-EX G7 has an 11.6-inch screen at 1920 × 1080 and 1,200 nits, optically bonded, and calls it sunlight-readable. The Getac ZX80-EX has an 8-inch screen at 1920 × 1200 and 1,000 nits, also described as sunlight-readable. Both are dual-mode touch (multi-touch and digitizer) with a digitizer pen. Our data does not confirm glove touch for either: Getac’s datasheet for the Getac F110-EX G7 does not state a glove or wet mode.',
        'On cameras the Getac ZX80-EX is ahead, with a 16 MP autofocus rear camera and an 8 MP front camera, against 8 MP autofocus and 5 MP on the Getac F110-EX G7. Both can run video calls through an app. For scanning, both list an optional built-in 1D/2D imager, so order the version that has it. The Getac F110-EX G7 also lists an optional HF RFID reader, and the Getac ZX80-EX an optional NFC module.',
      ],
    },
    {
      title: 'Weight, ruggedness and carrying',
      edge: 'getac-zx80-ex',
      text: [
        'The Getac ZX80-EX weighs 780 g, which our data lists among the lightest Zone 2 tablets of its size. The Getac F110-EX G7 weighs 1,680 g, 900 g more. Both list MIL-STD-810H. The Getac ZX80-EX is IP67 with a 1.8 m drop rating, and the Getac F110-EX G7 is IP66 with a 1.2 m drop in use. For crews working up ladders, in plant corridors or along racking, the lighter tablet with the higher IP rating and the 1.8 m drop figure is the easier one to live with.',
        'The Getac F110-EX G7 repays its weight with the large screen and the full Windows machine, and it suits work where the tablet is carried on a strap or set down on a bench and used at length. Both are tablets only in the Ex configuration, with no keyboard, and both come with a hand strap and a shoulder strap listed as usable in the zone, though we have not checked those lists against each exact model’s certificate.',
      ],
    },
    {
      title: 'Certificates, heat and battery swapping',
      edge: 'getac-f110-ex',
      text: [
        'The two share the same marking, Ex ic op is IIC T4 Gc and IIIC T130 °C Dc, with IECEx EPS 21.0079X for the Getac F110-EX G7 and IECEx EPS 25.0039X for the Getac ZX80-EX. Getac states ATEX certification for both but the certificates are not published, and our data lists no North American listing for either. Both certificates name the model with a “c” suffix and no generation; we matched them to these tablets by batteries, dust group and ambient range, so confirm the exact model with Getac. The Getac F110-EX G7 is certified to +60 °C ambient and the Getac ZX80-EX to +55 °C, with −21 °C at the cold end for both.',
        'Neither may be charged or have its battery changed in the hazardous area, and no connection interface may be used there. The Getac F110-EX G7 takes two swappable batteries, with an optional larger pair, and Getac lists hot swap. The Getac ZX80-EX has an internal battery and an optional second 4,990 mAh battery, and our data does not state hot swap for the Ex version. We do not compare runtime, because our data has none for either.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the Getac F110-EX G7 better than the Getac ZX80-EX?',
      a: 'Neither is better across the board: they do different jobs. The Getac F110-EX G7 is the one for Windows software, an 11.6-inch screen and hot-swap batteries, and it is certified to +60 °C. The Getac ZX80-EX is the one for Android apps and carrying all shift, at 780 g against 1,680 g. Both are certified for Zone 2/22 only.',
    },
    {
      q: 'Can either tablet be used in Zone 1?',
      a: 'No. Both are intrinsically safe (Ex ic) and certified to protection level Gc, which covers Zone 2 only. Zone 1 needs a tablet certified to Gb or higher.',
    },
    {
      q: 'Which tablet runs Windows software?',
      a: 'The Getac F110-EX G7 runs Windows 11 Pro on an x86 Intel Core processor. The Getac ZX80-EX runs Android 15 on an Arm chip, and our data lists Windows desktop software as not possible on it.',
    },
    {
      q: 'Which is lighter, and by how much?',
      a: 'The Getac ZX80-EX, at 780 g against 1,680 g for the Getac F110-EX G7, a gap of 900 g.',
    },
    {
      q: 'Can I change the battery or charge either tablet in the hazardous area?',
      a: 'No, for both. Getac’s certificate conditions say the battery is never changed, charged or removed in hazardous areas, and no connection interface may be used there. The Getac F110-EX G7 lists hot-swap batteries, and the Getac ZX80-EX an optional second battery, all swapped outside.',
    },
    {
      q: 'Are they ATEX certified?',
      a: 'Getac states ATEX certification for both, but the certificates are not published, so we cannot verify them. Both hold IECEx certificates that we can read: IECEx EPS 21.0079X for the Getac F110-EX G7 and IECEx EPS 25.0039X for the Getac ZX80-EX. Ask Getac for the ATEX documents if your site needs them.',
    },
    {
      q: 'How much do the Getac F110-EX G7 and Getac ZX80-EX cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are certified for Zone 2/22 with the same marking, so the choice comes down to Windows or Android, screen size and how far crews carry the tablet. Tell us about your sites and we will help you choose impartially.',
  },
};

export default page;
