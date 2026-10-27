import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['bartec-et60-65ex2-android', 'ecom-tab-ex-05-dz2'],
  title: 'BARTEC ET60/65EX2 Android vs ecom Tab-Ex 05 DZ2 Compared',
  description:
    'BARTEC ET60/65EX2 Android or ecom Tab-Ex 05 DZ2? 10.1-inch or 8-inch Zone 2 Android: temperature class, scanning and battery compared, with our pick.',
  h1: 'BARTEC ET60/65EX2 Android vs ecom Tab-Ex 05 DZ2',
  eyebrow: 'Compare · Zone 2 Android tablets',
  lead:
    'These two Android tablets are both intrinsically safe (Ex ic) and certified for Zone 2/22 in gas group IIC under ATEX and IECEx. Both carry a Class I Division 2 listing for North America, and both are rated −20 °C to +55 °C under the ATEX and IECEx certificates. They differ in size and in how crews work with them. The BARTEC ET60/65EX2 Android is a 10.1-inch, 1,000-nit tablet rated T4, with an optional built-in scan engine and a user-replaceable battery. The ecom Tab-Ex 05 DZ2 is an 8-inch, 600-nit tablet rated T5, with an S Pen included. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'Both tablets cover Zone 2/22 and Division 2, so pick by your gases and by how your crews work. If your hazardous-area study includes gases that ignite between 100 °C and 135 °C, or your team writes with a pen, scans with a certified wireless scanner or wants a smaller 8-inch tablet, we would choose the ecom Tab-Ex 05 DZ2. If your crews scan all shift, need to swap a battery on the spot or want a 10.1-inch screen at 1,000 nits, we would choose the BARTEC ET60/65EX2 Android. Neither is certified for Zone 1.',
    ],
    choose: [
      {
        id: 'bartec-et60-65ex2-android',
        reasons: [
          'Your crews scan stock, tags or equipment all shift: its optional SE55 1D/2D scan engine is built in, where the ecom Tab-Ex 05 DZ2 scans with a wireless scanner accessory or its camera.',
          'Your crews cannot wait for a charge: its 8,920 mAh battery is user-replaceable and hot-swappable, changed outside the hazardous area, while the ecom Tab-Ex 05 DZ2’s battery is not user-replaceable.',
          'You read drawings, checklists or forms in bright light: its screen is 10.1 inches, optically bonded, at 1,000 nits, against 8 inches at 600 nits.',
          'You run a 5G fleet that needs precise positioning: the ET65 version adds dual-band L1 + L5 GNSS, and our data does not confirm dual-band GNSS for the ecom Tab-Ex 05 DZ2.',
        ],
      },
      {
        id: 'ecom-tab-ex-05-dz2',
        reasons: [
          'Your hazardous-area study includes gases that ignite between 100 °C and 135 °C: it is rated T5 (100 °C) and T85 °C for dust, against T4 and 135 °C for the BARTEC ET60/65EX2 Android.',
          'Your crews write or mark up in the field: a pressure-sensitive S Pen is included in the box, and ecom lists wet-hands operation as well as glove touch.',
          'Your crews use a headset in the zone: its 3.5 mm audio port may be used with matching intrinsically safe audio equipment such as the ecom HS-Ex 01 J, while the BARTEC ET60/65EX2 Android’s ports may be used in the zone only if the atmosphere is shown to be absent.',
          'Your site restricts cameras: a camera-free version of the ecom Tab-Ex 05 DZ2 is available, and our data does not confirm one for the BARTEC ET60/65EX2 Android.',
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
      row: 'Replaceable battery',
      title: 'User-replaceable battery',
      note: 'The BARTEC ET60/65EX2 Android’s 8,920 mAh battery is user-replaceable and hot-swappable, changed outside the hazardous area only. The ecom Tab-Ex 05 DZ2’s is not user-replaceable. ecom quotes up to 14 hours and BARTEC up to 10 hours indoors under its own test conditions, so we do not rank them on runtime.',
    },
    {
      row: 'Barcode scanning',
      note: 'The BARTEC ET60/65EX2 Android has an optional built-in SE55 1D/2D scan engine, which changes its Ex marking to “op is”. The ecom Tab-Ex 05 DZ2 has no built-in engine: it scans with the Ex-rated Ident-Ex 02 wireless scanner or by camera through an app.',
    },
    {
      row: 'Display',
      title: 'Screen size and brightness',
      note: 'The BARTEC ET60/65EX2 Android has a 10.1-inch, 1,000-nit screen and the ecom Tab-Ex 05 DZ2 an 8-inch, 600-nit one. The larger, brighter screen suits drawings and outdoor reading. The smaller one suits crews who prefer a smaller tablet.',
    },
  ],
  sections: [
    {
      title: 'Gas coverage and certification',
      edge: 'ecom-tab-ex-05-dz2',
      text: [
        'Both tablets are intrinsically safe (Ex ic), certified at protection level Gc/Dc for gas group IIC and dust group IIIC, and both are rated for −20 °C to +55 °C. The difference is the temperature class. The ecom Tab-Ex 05 DZ2 is T5, with a maximum surface temperature of 85 °C for dust. The BARTEC ET60/65EX2 Android is T4, with 135 °C for dust. T4 is fine for most gases, but not those that ignite below 135 °C. If your hazardous-area study lists none, the gap will not matter to you. Neither tablet may be used in Zone 1.',
        'The North American listings both cover Class I Division 2 Groups A to D and Class II Division 2 Groups F and G, with Class III. BARTEC’s UL listing is at T4 and covers the North America types B7-T2E1 and B7-T2E3 only. ecom’s SGS listing is at T5 and also lists Class III Division 1. Under the NEC and CEC both put Zone 22 dust in group IIIB, not IIIC, and ecom’s SGS certificate limits the ambient range to +50 °C. Our data does not state a separate North American ambient for BARTEC.',
      ],
    },
    {
      title: 'Scanning, battery and shifts',
      edge: 'bartec-et60-65ex2-android',
      text: [
        'The BARTEC ET60/65EX2 Android is the scanning tablet of the pair. Its optional SE55 1D/2D Advanced Range scan engine is built in, which changes its Ex marking to “op is”, and without the engine the marking is plain Ex ic. The ecom Tab-Ex 05 DZ2 has no built-in engine: it scans with ecom’s Ident-Ex 02 wireless 1D/2D scanner, which is Ex-rated, or by camera through an app. A team that scans all shift carries one device with BARTEC, and a tablet plus a scanner with ecom.',
        'BARTEC’s 8,920 mAh battery is user-replaceable, and an internal supercapacitor keeps the tablet powered during a swap, though swapping and charging are for outside the hazardous area only. The ecom Tab-Ex 05 DZ2’s 5,050 mAh battery is not user-replaceable and is also charged outside the hazardous area only. ecom quotes up to 14 hours. BARTEC quotes up to 10 hours indoors with the standard battery, WLAN on and 50 % backlight, so the figures are not like for like. Our data does not state hot swap for ecom.',
      ],
    },
    {
      title: 'Screen, camera and ruggedness',
      edge: 'even',
      text: [
        'The BARTEC ET60/65EX2 Android has a 10.1-inch optically bonded screen at 1,000 nits and weighs 1,074 g. The ecom Tab-Ex 05 DZ2 has an 8-inch, 1920 × 1200 screen at up to 600 nits, with glove touch, wet-hands operation and a pressure-sensitive S Pen included. The 595 g we list for the ecom Tab-Ex 05 DZ2 comes from a single source and ecom’s own figures vary, so we make no weight comparison. BARTEC’s resolution is flagged unconfirmed in our data, which means unverified, not absent.',
        'BARTEC has a 16 MP autofocus rear camera with LED flash and an 8 MP front camera with a mechanical privacy shade. ecom has 13 MP autofocus with 8x digital zoom and a 5 MP front camera, and lists 4K video at 30 fps, where our data has no video figure for BARTEC. ecom rates the ecom Tab-Ex 05 DZ2 IP68 and BARTEC’s IP64 is the figure in its Ex marking, though its datasheet gives IP66, so check the rating with BARTEC. Our data has no IP code in the ecom Ex certificate, so IP68 is ecom’s own rating.',
      ],
    },
    {
      title: 'Updates, connectivity and field tools',
      edge: 'even',
      text: [
        'On security updates the two are close, and both dates are flagged unconfirmed in our data. BARTEC’s December 2031 is Zebra’s date for the ET60/ET65 it is built on, and BARTEC says it needs a LifeGuard service contract. ecom states security updates until 2032. The BARTEC ET60/65EX2 Android runs Android 14, upgradeable to Android 16 per BARTEC’s datasheet. Our data lists Android 16 for the ecom Tab-Ex 05 DZ2 from a single source. Ask each maker for the exact end date for the version you order.',
        'The ET60 is Wi-Fi only, with Wi-Fi 6E, and the ET65 adds 5G and eSIM. The ecom Tab-Ex 05 DZ2 has 5G Sub-6 and 4G LTE, with a Wi-Fi-only version also available. BARTEC uses a Qualcomm 6490 with 8 GB of RAM and ecom an Exynos 1380 with 6 GB. Both have 128 GB of storage and NFC. BARTEC has three programmable keys and no dedicated SOS key, so emergency calls run through an app. ecom’s programmable function key can be set to an emergency call, an alarm or push-to-talk.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the BARTEC ET60/65EX2 Android better than the ecom Tab-Ex 05 DZ2?',
      a: 'Neither is better across the board. The BARTEC ET60/65EX2 Android suits teams that scan all shift, swap batteries and want a 10.1-inch screen at 1,000 nits. The ecom Tab-Ex 05 DZ2 suits sites with gases that need T5 and crews who work with a pen or a certified wireless scanner. Both are certified for Zone 2/22 and Class I Division 2.',
    },
    {
      q: 'Can either tablet be used in Zone 1?',
      a: 'No. Both are certified to protection level Gc, which covers Zone 2 only. The Zone 1 step up in ecom’s range is the ecom Tab-Ex 05 DZ1.',
    },
    {
      q: 'Can you charge either tablet in the hazardous area?',
      a: 'No. Both must be charged outside the hazardous area, and both batteries are swapped or changed there too. The BARTEC ET60/65EX2 Android’s battery is user-replaceable and hot-swappable, and the ecom Tab-Ex 05 DZ2’s is not. If charging in the zone matters, the i.safe MOBILE IS940.2 may be charged inside it within its certificate’s limits.',
    },
    {
      q: 'Are both tablets approved for North America?',
      a: 'Yes. Both are listed for Class I Division 2 Groups A to D and Class II Division 2 Groups F and G, with Class III. BARTEC’s UL listing is at T4 for the B7-T2E1 and B7-T2E3 types only, and ecom’s SGS listing is at T5 with the ambient limited to +50 °C. Under the NEC and CEC both put Zone 22 dust in group IIIB.',
    },
    {
      q: 'Which gets security updates for longer?',
      a: 'Neither is clearly ahead on the dates we have, and both are flagged unconfirmed. BARTEC’s December 2031 is Zebra’s date for the tablet it is built on, and ecom states updates until 2032. Ask each maker for the exact end date for the version you order.',
    },
    {
      q: 'Does either tablet have a built-in barcode scanner?',
      a: 'The BARTEC ET60/65EX2 Android has an optional built-in SE55 1D/2D scan engine. The ecom Tab-Ex 05 DZ2 has none built in: it scans with the Ex-rated Ident-Ex 02 wireless scanner or by camera through an app.',
    },
    {
      q: 'How much do the BARTEC ET60/65EX2 Android and ecom Tab-Ex 05 DZ2 cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are certified for Zone 2/22 with a Class I Division 2 listing, so the choice comes down to your gases, how your crews scan and swap batteries, and the screen size they need. Tell us about your sites and we will help you choose impartially.',
  },
};

export default page;
