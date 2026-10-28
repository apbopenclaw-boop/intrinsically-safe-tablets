import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['isafe-is940-1', 'xshielder-ipad-pro-11'],
  title: 'i.safe MOBILE IS940.1 vs Xshielder iPad Pro 11-inch Compared',
  description:
    'i.safe MOBILE IS940.1 or Xshielder iPad Pro 11-inch? T4 or T6, +55 °C or +45 °C, charging in the zone, weight, screen and LiDAR compared, with our pick.',
  h1: 'i.safe MOBILE IS940.1 vs Xshielder iPad Pro 11-inch',
  eyebrow: 'Compare · iPad or Android for Zone 1',
  lead:
    'These two tablets are certified for Zone 1/21 and gas group IIC, but they take different routes to it and do different jobs. The i.safe MOBILE IS940.1 is an intrinsically safe (Ex ib) 10.1-inch Android tablet with ATEX, IECEx and North American certificates, a +55 °C ambient rating, a battery you can swap and permission to charge in the hazardous area within its certificate. The Xshielder iPad Pro 11-inch is a flameproof (Ex db) cover around an iPad Pro 11-inch (M5), rated T6 instead of T4, with LiDAR and a 1,000-nit screen, but ATEX only, rated to +45 °C and 291 g heavier. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'Pick by your gases, your sites and how the tablet is charged. For sites that need IECEx or a North American listing, ambient heat up to +55 °C, charging in the zone, underground work, or a lighter tablet with a red alarm key, we would choose the i.safe MOBILE IS940.1. For sites with gases that ignite below 135 °C, and for crews who want the iPad Pro’s screen, cameras and LiDAR in Zone 1/21 under ATEX, we would choose the Xshielder iPad Pro 11-inch.',
    ],
    choose: [
      {
        id: 'isafe-is940-1',
        reasons: [
          'Your sites need IECEx or a North American listing: it holds IECEx EPS 24.0001X and a Class I Division 1 Groups A to D listing, while the Xshielder iPad Pro 11-inch is ATEX only, with IECEx planned and no North American listing in our data.',
          'Your crews top up the tablet where they work: charging is allowed in the hazardous area within the certificate’s limits, and the IS-DS940.1 docking station is listed for it, where our data has no value for the Xshielder iPad Pro 11-inch.',
          'Your sites run hot: it is certified up to +55 °C ambient, against +45 °C for the Xshielder iPad Pro 11-inch.',
          'Your crews carry the tablet all shift: it weighs 1,059 g against 1,350 g, its battery can be swapped outside the hazardous area, and i.safe rates it IP68 and MIL-STD-810H.',
          'Some of your crews work underground: the i.safe MOBILE IS940.M1 mining version adds Group I certification.',
        ],
      },
      {
        id: 'xshielder-ipad-pro-11',
        reasons: [
          'Your hazardous-area study includes gases that ignite below 135 °C: it is rated T6 (85 °C) and T80 °C for dust, against T4 and 135 °C for the i.safe MOBILE IS940.1.',
          'Your inspectors scan rooms and equipment: the LiDAR scanner works through the cover, and our data lists no depth sensor for the i.safe MOBILE IS940.1.',
          'You read drawings and data on site: the 11-inch screen is 2420 × 1668 at up to 1,000 nits, against 10.1 inches at 1200 × 1920, and our data has no brightness figure for the i.safe MOBILE IS940.1.',
          'You already manage iPads: it is a standard iPad Pro 11-inch (M5) inside, with the same apps and Apple device management, 12 or 16 GB of memory and Wi-Fi 7.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'Temperature class',
      note: 'The temperature class decides which gases a tablet may be used around. T6 (85 °C) is the stricter rating; T4 (135 °C) is fine for most gases, but not those that ignite below 135 °C. The Xshielder iPad Pro 11-inch is the only one of the two that covers them.',
    },
    {
      row: 'ATEX certificate',
      title: 'Published certificates and approvals',
      note: 'i.safe publishes ATEX and IECEx certificate numbers and a North American listing for the i.safe MOBILE IS940.1. Xshielder confirms ATEX certification for the Xshielder iPad Pro 11-inch but has published no certificate number yet, and IECEx is planned. If your site or client needs IECEx or a Division listing, this decides the choice.',
    },
    {
      row: 'Ambient temperature (Ta)',
      title: 'Maximum ambient temperature',
      note: 'The i.safe MOBILE IS940.1 has 10 °C more headroom than the Xshielder iPad Pro 11-inch, which matters for plants and yards in hot climates. Go by the ambient range in the certificate, not the operating range on a datasheet.',
    },
    {
      row: 'Charging',
      title: 'Charging in the hazardous area',
      note: 'i.safe allows the i.safe MOBILE IS940.1 to be charged in the hazardous area within the certificate’s limits. Our data has no value for the Xshielder iPad Pro 11-inch, so it is not confirmed either way. If crews cannot walk out to charge, ask Xshielder first.',
    },
    {
      row: '3D scanning / LiDAR',
      title: 'LiDAR and 3D scanning',
      note: 'The Xshielder iPad Pro 11-inch has the iPad Pro’s LiDAR scanner, and Xshielder confirms it works through the cover. Our data lists no depth sensor for the i.safe MOBILE IS940.1.',
    },
  ],
  sections: [
    {
      title: 'Gas coverage and temperature class',
      edge: 'xshielder-ipad-pro-11',
      text: [
        'Both tablets are certified for Zone 1/21 at protection level Gb/Db, with gas group IIC and dust group IIIC. The difference is the class. The Xshielder iPad Pro 11-inch is rated T6, with a maximum surface temperature of 85 °C for gas and 80 °C for dust. The i.safe MOBILE IS940.1 is T4, with 135 °C for both. T4 is fine for most gases, but not those that ignite below 135 °C, so a site whose study lists one of them is the Xshielder iPad Pro 11-inch’s ground.',
        'The protection methods differ too. The i.safe MOBILE IS940.1 is intrinsically safe (Ex ib), which limits the energy in the device and is what allows its accessories and its charging rules. The Xshielder iPad Pro 11-inch is a flameproof (Ex db) cover that contains an explosion instead. Neither is certified for Zone 0. If your study lists no gas below 135 °C, the class will not matter to you.',
      ],
    },
    {
      title: 'Approvals, heat and where you can work',
      edge: 'isafe-is940-1',
      text: [
        'The i.safe MOBILE IS940.1 has the broader paperwork. It holds ATEX EPS 24 ATEX 1 010 X and IECEx EPS 24.0001X, and a North American listing for Class I Division 1 Groups A to D at T4, Class II Division 1 and Class III, where our data has no North American listing for the Xshielder iPad Pro 11-inch. It also lists approvals for South Africa, China, Brazil, Japan, India and Korea. Xshielder confirms ATEX certification, has published no certificate number yet, and plans IECEx.',
        'Heat and mining follow. The i.safe MOBILE IS940.1 is certified from −20 °C to +55 °C, against −20 °C to +45 °C for the Xshielder iPad Pro 11-inch. For underground work, i.safe offers the i.safe MOBILE IS940.M1, certified for Group I, and our data lists no mining version of the Xshielder iPad Pro 11-inch. If you rely on the North American listing, note that it shows IP64, where i.safe lists IP68 for the standard tablet.',
      ],
    },
    {
      title: 'Screen, cameras and software',
      edge: 'even',
      text: [
        'The Xshielder iPad Pro 11-inch has the bigger screen and the stronger platform: an 11-inch Ultra Retina XDR display at 2420 × 1668 and up to 1,000 nits, an M5 with 12 or 16 GB of memory, and Wi-Fi 7. Xshielder confirms that the 12 MP rear camera with 4K ProRes video, the LiDAR scanner, the 12 MP front camera with Face ID, stylus input and the speakers and microphones work through the cover. The i.safe MOBILE IS940.1 has a 10.1-inch screen at 1200 × 1920 with glove touch, a Qualcomm QCM6490 with 8 GB, 128 GB plus microSD, 5G and NFC.',
        'On cameras each has a case. The i.safe MOBILE IS940.1 has a 50 MP rear camera, which suits detailed inspection photos, and the Xshielder iPad Pro 11-inch has 12 MP, 4K ProRes video and LiDAR. Resolution alone does not decide image quality, so we call it even. On software, the i.safe MOBILE IS940.1 runs Android 14 with security updates until Q4 2032, a maker’s date. The Xshielder iPad Pro 11-inch runs iPadOS 27 with updates expected for 7–8 years, based on previous iPad Pro support, an expectation and not a date.',
      ],
    },
    {
      title: 'Carrying, controls and charging',
      edge: 'isafe-is940-1',
      text: [
        'For a tablet that moves around, the i.safe MOBILE IS940.1 is the easier one to live with. It weighs 1,059 g against 1,350 g, is rated IP68 and MIL-STD-810H, and has a battery that can be swapped outside the hazardous area, while the Xshielder iPad Pro 11-inch’s battery is not user-replaceable and its IP65 rating is pending testing. It has a freely programmable red key for SOS or a lone-worker app and an Ex-rated push-to-talk button accessory. The Xshielder iPad Pro 11-inch has no programmable hardware key.',
        'Charging is the planning point. i.safe allows the i.safe MOBILE IS940.1 to be charged in the hazardous area within the certificate’s limits, with charging temperature limited to 0 °C to +45 °C, and lists its IS-DS940.1 docking station for it. Our data has no value for charging the Xshielder iPad Pro 11-inch inside the zone, and its USB-C port is accessible for charging and data. Confirm the charging rules with Xshielder before you plan around them. Our data has no battery-life figure for the i.safe MOBILE IS940.1, so runtime cannot be compared.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the i.safe MOBILE IS940.1 better than the Xshielder iPad Pro 11-inch?',
      a: 'Neither is better across the board. The i.safe MOBILE IS940.1 suits sites that need IECEx or a North American listing, ambient heat up to +55 °C, charging in the zone or a lighter tablet. The Xshielder iPad Pro 11-inch suits sites with gases that need T6 and teams that want the iPad Pro’s screen, cameras and LiDAR. Both are certified for Zone 1/21.',
    },
    {
      q: 'Can either tablet be used in Zone 0?',
      a: 'No. Both are certified to protection level Gb/Db, which covers Zone 1/21 and Zone 2/22, and neither is certified for Zone 0.',
    },
    {
      q: 'Is either tablet approved for North America or IECEx?',
      a: 'The i.safe MOBILE IS940.1 is both: it holds IECEx EPS 24.0001X and a Class I Division 1 Groups A to D listing at T4. The Xshielder iPad Pro 11-inch is ATEX only. IECEx is planned, and our data has no North American listing for it.',
    },
    {
      q: 'Which gets security updates for longer?',
      a: 'On the makers’ own statements they are close. i.safe states security updates until Q4 2032 for the i.safe MOBILE IS940.1, and Xshielder expects 7–8 years for the Xshielder iPad Pro 11-inch, based on previous iPad Pro support. The i.safe date is a stated end date, and the Xshielder figure is an expectation.',
    },
    {
      q: 'Can you charge either tablet in the hazardous area?',
      a: 'The i.safe MOBILE IS940.1 may be, within the certificate’s limits, and i.safe lists its IS-DS940.1 docking station for it. For the Xshielder iPad Pro 11-inch our data has no value for charging inside the zone, so it is not confirmed either way. Both batteries can be swapped outside the hazardous area only, but only the i.safe MOBILE IS940.1’s is user-replaceable.',
    },
    {
      q: 'Is there a mining version of either tablet?',
      a: 'For the i.safe MOBILE IS940.1, yes: the i.safe MOBILE IS940.M1 is also certified for Group I (underground mining). Our data lists no mining version of the Xshielder iPad Pro 11-inch, and its marking covers equipment group II only, so do not take it underground.',
    },
    {
      q: 'How much do the i.safe MOBILE IS940.1 and Xshielder iPad Pro 11-inch cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'xshielder',
    heading: 'Xshielder iPad Pro 11-inch cover for Zone 1/21',
    text: 'A flameproof cover for the iPad Pro 11-inch (M5), certified IIC T6 for Zone 1/21 under ATEX, with the cameras, LiDAR and stylus input working through the cover. Tell us about your site and fleet size to get a quote.',
    link: { label: 'See the iPad Pro 11-inch cover', href: 'https://xshielder.com/products/atex-ipad' },
  },
};

export default page;
