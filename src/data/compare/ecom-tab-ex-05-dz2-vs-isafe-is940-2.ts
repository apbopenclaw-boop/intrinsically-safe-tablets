import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['ecom-tab-ex-05-dz2', 'isafe-is940-2'],
  title: 'ecom Tab-Ex 05 DZ2 vs i.safe MOBILE IS940.2 Compared',
  description:
    'ecom Tab-Ex 05 DZ2 or i.safe MOBILE IS940.2? Zone 2 Android: temperature class, charging in the zone, screen size and battery compared, with our pick.',
  h1: 'ecom Tab-Ex 05 DZ2 vs i.safe MOBILE IS940.2',
  eyebrow: 'Compare · Zone 2 Android tablets',
  lead:
    'These two Android tablets share their certification scope: intrinsically safe (Ex ic), Zone 2/22 under ATEX and IECEx in gas group IIC, a Class I Division 2 listing for Groups A to D, and the same −20 °C to +55 °C ambient range on the ATEX and IECEx certificates. They differ in temperature class, size and charging. The ecom Tab-Ex 05 DZ2 is an 8-inch tablet rated T5, with an S Pen included. The i.safe MOBILE IS940.2 is a 10.1-inch tablet rated T4 with a user-replaceable battery, and i.safe allows it to be charged inside the hazardous area. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'Both tablets cover Zone 2/22 and Division 2, so pick by your gases and by how your crews work. If your hazardous-area study includes gases that ignite between 100 °C and 135 °C, or your team scans with a certified wireless scanner and writes with a pen, we would choose the ecom Tab-Ex 05 DZ2. If your crews cannot leave the zone to charge, want a 10.1-inch screen or need a replaceable battery, we would choose the i.safe MOBILE IS940.2. Neither is certified for Zone 1.',
    ],
    choose: [
      {
        id: 'ecom-tab-ex-05-dz2',
        reasons: [
          'Your hazardous-area study includes gases that ignite between 100 °C and 135 °C: it is rated T5 (100 °C) and T85 °C for dust, against T4 and T135 °C for the i.safe MOBILE IS940.2.',
          'Your team scans labels and tags in the zone: ecom’s Ident-Ex 02 wireless 1D/2D scanner is Ex-rated, while our data lists only camera-based scanning by app for the i.safe MOBILE IS940.2.',
          'Your crews write or mark up in the field: a pressure-sensitive S Pen is included and named in the certificate, while the i.safe MOBILE IS940.2’s passive stylus is an accessory, not in the box.',
          'Your site restricts cameras: a camera-free version of the ecom Tab-Ex 05 DZ2 is available, and our data does not confirm one for the i.safe MOBILE IS940.2.',
        ],
      },
      {
        id: 'isafe-is940-2',
        reasons: [
          'Your crews work shifts longer than a battery and cannot walk out to charge: it may be charged inside the hazardous area within the certificate’s limits, for example on its IS-DS940.1 dock, where the ecom Tab-Ex 05 DZ2 charges outside only.',
          'You read drawings, checklists or forms on site: its screen is 10.1 inches against 8, with 8 GB of memory against 6 GB.',
          'You want to swap a battery instead of waiting for a charge: it has a user-replaceable 8,160 mAh battery, changed outside the hazardous area, while the ecom Tab-Ex 05 DZ2’s battery is not user-replaceable.',
          'Your teams photograph nameplates, gauges or damage: it has a 50 MP autofocus camera, against 13 MP for the ecom Tab-Ex 05 DZ2.',
          'You need a support date you can plan around: i.safe states security updates until Q4 2032, while ecom’s 2032 date is flagged unconfirmed in our data.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'Temperature class',
      note: 'T5 keeps the surface at or below 100 °C and T4 at or below 135 °C. T4 is fine for most gases but not those that ignite below 135 °C, so check the ignition temperatures of your substances against the class before anything else.',
    },
    {
      row: 'Charging',
      title: 'Charging in the hazardous area',
      note: 'i.safe allows the i.safe MOBILE IS940.2 to be charged inside the hazardous area, within the certificate’s limits, at 0 °C to +45 °C through its 12-pin dock interface. The ecom Tab-Ex 05 DZ2 must be charged outside it. For crews who cannot walk out to a charging point, this can decide the choice.',
    },
    {
      row: 'Display',
      title: 'Screen size',
      note: 'The i.safe MOBILE IS940.2 has a 10.1-inch screen and the ecom Tab-Ex 05 DZ2 an 8-inch one. The larger screen suits drawings and forms. The smaller one suits crews who prefer a smaller tablet.',
    },
    {
      row: 'Replaceable battery',
      title: 'User-replaceable battery',
      note: 'The i.safe MOBILE IS940.2’s battery is user-replaceable, changed outside the hazardous area only. The ecom Tab-Ex 05 DZ2’s is not. ecom quotes up to 14 hours of battery life and our data has no figure for i.safe, so we do not compare runtime.',
    },
  ],
  sections: [
    {
      title: 'Gas coverage and certification',
      edge: 'ecom-tab-ex-05-dz2',
      text: [
        'Both tablets are intrinsically safe (Ex ic), certified at protection level Gc/Dc for gas group IIC and dust group IIIC, and both are rated for −20 °C to +55 °C. The difference is the temperature class. The ecom Tab-Ex 05 DZ2 is T5, with a maximum surface temperature of 85 °C for dust. The i.safe MOBILE IS940.2 is T4, with 135 °C for dust. T4 is fine for most gases, but not those that ignite below 135 °C. If your hazardous-area study lists none, the gap will not matter to you. Neither tablet is for Zone 1.',
        'The North American listings follow the same split. Both cover Class I Division 2 Groups A to D and Class II Division 2 Groups F and G, with Class III. ecom’s SGS listing is at T5, also lists Class III Division 1, and limits the ambient range to +50 °C with dust group IIIB under the NEC and CEC. The i.safe MOBILE IS940.2’s NEC 500 listing is at T4. Both hold IA (South Africa) and KC (Korea) approvals, and ecom adds Inmetro (Brazil).',
      ],
    },
    {
      title: 'Charging, battery and accessories in the zone',
      edge: 'isafe-is940-2',
      text: [
        'The i.safe MOBILE IS940.2 may be charged where it is used. Its IECEx conditions set a charging temperature of 0 °C to +45 °C, its 12-pin dock interface may stay open in Ex areas, and i.safe lists the IS-DS940.1 docking station for charging in the Ex area. Its 8,160 mAh battery is user-replaceable, changed outside the hazardous area only. The ecom Tab-Ex 05 DZ2 has a 5,050 mAh battery that is not user-replaceable, and it is charged outside the hazardous area. ecom quotes up to 14 hours. Our data has no figure for i.safe, so we cannot compare runtime.',
        'In the zone, the two open different doors. The ecom Tab-Ex 05 DZ2 allows no wired connection in the Ex area, but its 3.5 mm audio port may be used with matching intrinsically safe audio equipment such as the ecom HS-Ex 01 J. The i.safe MOBILE IS940.2 keeps its USB-C and 16-pin covers closed in Ex areas. Its 12-pin dock interface may stay open, and i.safe lists a headset and the IS-PTTB1A.1 push-to-talk button as approved for Ex-area use on the 16-pin interface.',
      ],
    },
    {
      title: 'Screen, camera and weight',
      edge: 'even',
      text: [
        'The i.safe MOBILE IS940.2 has the larger screen, 10.1 inches at 1200 × 1920 under Gorilla Glass V3, usable with gloves, and it weighs 1,059 g. The ecom Tab-Ex 05 DZ2 has an 8-inch, 1920 × 1200 screen at up to 600 nits, with glove touch, wet-hands operation and an S Pen included. Our data has no brightness figure for the i.safe MOBILE IS940.2. The 595 g we list for the ecom Tab-Ex 05 DZ2 comes from a single source and ecom’s own figures vary, so we make no weight comparison.',
        'The i.safe MOBILE IS940.2 has a 50 MP autofocus camera against 13 MP with 8x digital zoom for the ecom Tab-Ex 05 DZ2, and both have a 5 MP front camera. ecom lists 4K video at 30 fps, and our data has no video figure for i.safe. Both tablets are IP68 and list MIL-STD-810H. Our data has no IP code in the ecom Ex certificate, so IP68 is ecom’s own rating. A camera-free version of the ecom Tab-Ex 05 DZ2 suits sites that restrict cameras.',
      ],
    },
    {
      title: 'Updates, connectivity and field tools',
      edge: 'even',
      text: [
        'On security updates the two are close. i.safe states Q4 2032 for the i.safe MOBILE IS940.2, which runs Android 14. ecom states security updates until 2032 for the ecom Tab-Ex 05 DZ2, a date our data flags as unconfirmed, so we would not choose on it, and our data lists Android 16 for it from a single source. Ask each maker for the exact end date for the version you order. Both have 5G, Wi-Fi 6 and NFC. The i.safe MOBILE IS940.2 has a Qualcomm QCM6490 with 8 GB, and the ecom Tab-Ex 05 DZ2 an Exynos 1380 with 6 GB. Both have 128 GB.',
        'On controls, the ecom Tab-Ex 05 DZ2 has a programmable function key that can be set to push-to-talk, an emergency call or an alarm. The i.safe MOBILE IS940.2 has a programmable red key for SOS or a lone-worker app, and push-to-talk comes through the Ex-rated IS-PTTB1A.1 button. For scanning, ecom’s Ident-Ex 02 wireless scanner is Ex-rated, while the i.safe MOBILE IS940.2 scans with its camera through an app, as our data lists no scan engine for it.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the ecom Tab-Ex 05 DZ2 better than the i.safe MOBILE IS940.2?',
      a: 'Neither is better across the board. The ecom Tab-Ex 05 DZ2 suits sites with gases that need T5 and teams that scan with a certified accessory or work with a pen. The i.safe MOBILE IS940.2 suits crews who must charge inside the zone, want a 10.1-inch screen or need a replaceable battery. Both are certified for Zone 2/22 and Class I Division 2.',
    },
    {
      q: 'Can either tablet be used in Zone 1?',
      a: 'No. Both are certified to protection level Gc, which covers Zone 2 only. The Zone 1 step ups are the ecom Tab-Ex 05 DZ1 and the i.safe MOBILE IS940.1, the Zone 1 version of the i.safe MOBILE IS940.2.',
    },
    {
      q: 'Can you charge either tablet in the hazardous area?',
      a: 'Only the i.safe MOBILE IS940.2, within its certificate’s limits and a charging range of 0 °C to +45 °C, for example on its IS-DS940.1 docking station. The ecom Tab-Ex 05 DZ2 must be charged outside the hazardous area, and its battery is not user-replaceable.',
    },
    {
      q: 'Are both tablets approved for North America?',
      a: 'Yes. Both are listed for Class I Division 2 Groups A to D and Class II Division 2 Groups F and G, with Class III. The ecom Tab-Ex 05 DZ2 is listed at T5 on an SGS certificate, with the ambient limited to +50 °C, and the i.safe MOBILE IS940.2 at T4 under NEC 500.',
    },
    {
      q: 'Which gets security updates for longer?',
      a: 'Neither is clearly ahead on the dates we have. i.safe states Q4 2032 for the i.safe MOBILE IS940.2, and ecom states updates until 2032 for the ecom Tab-Ex 05 DZ2, a date our data flags as unconfirmed. Ask each maker for the exact end date for the version you order.',
    },
    {
      q: 'Does either tablet have a built-in barcode scanner?',
      a: 'Our data lists no built-in scan engine for either tablet. The ecom Tab-Ex 05 DZ2 scans with the Ex-rated Ident-Ex 02 wireless scanner or by camera through an app. The i.safe MOBILE IS940.2 scans by camera through an app.',
    },
    {
      q: 'How much do the ecom Tab-Ex 05 DZ2 and i.safe MOBILE IS940.2 cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are certified for Zone 2/22 with a Class I Division 2 listing, so the choice comes down to your gases, how your crews charge and the screen size they need. Tell us about your sites and we will help you choose impartially.',
  },
};

export default page;
