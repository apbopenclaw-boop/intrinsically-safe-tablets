import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['eaton-gecma-is-tablet-pc', 'xshielder-ipad-pro-11'],
  title: 'Eaton MTL GECMA IS Tablet PC vs Xshielder iPad Pro 11-inch',
  description:
    'Eaton MTL GECMA IS Tablet PC or Xshielder iPad Pro 11-inch? Windows or iPad for Zone 1: Zone 0, gas class, heat, screen and LiDAR compared, with our pick.',
  h1: 'Eaton MTL GECMA IS Tablet PC vs Xshielder iPad Pro 11-inch',
  eyebrow: 'Compare · iPad or Windows for Zone 1',
  lead:
    'These two tablets do different jobs, so this is a choice between Windows and iPadOS for Zone 1 work. The Eaton MTL GECMA IS Tablet PC is a 10.1-inch intrinsically safe (Ex ia) tablet that runs x86 Windows 11 IoT Enterprise and is Zone 0 rated inside its supplied case. The Xshielder iPad Pro 11-inch is a flameproof (Ex db) cover around an iPad Pro 11-inch (M5), rated T6 for Zone 1/21 under ATEX, with LiDAR and a 1,000-nit screen. The Eaton MTL GECMA IS Tablet PC is T4 but holds IECEx, a North American listing and a +55 °C rating, where the Xshielder iPad Pro 11-inch is ATEX only and rated to +45 °C. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'Pick by the software your team has to run and the gases on your site. If your Zone 1 work needs desktop Windows software, Zone 0 access or a North American listing, we would choose the Eaton MTL GECMA IS Tablet PC. If you run iPad apps, work with gases that ignite below 135 °C, or want photos, LiDAR scans and a brighter screen in Zone 1/21 under ATEX, we would choose the Xshielder iPad Pro 11-inch.',
    ],
    choose: [
      {
        id: 'eaton-gecma-is-tablet-pc',
        reasons: [
          'Your engineers or inspectors run desktop Windows software in Zone 1: it is an x86 tablet with Windows 11 IoT Enterprise, and an iPad cannot run Windows applications.',
          'Some of your work is in Zone 0: it is rated Ga/Da for it inside the case Eaton supplies, while the Xshielder iPad Pro 11-inch is certified for Zone 1/21 only.',
          'Your sites need IECEx or a North American listing: it holds IECEx NMK 25.0029X and a Class I Division 1 listing for Groups C and D, while the Xshielder iPad Pro 11-inch is ATEX only, with IECEx planned.',
          'Your sites run hot: it is certified up to +55 °C ambient, against +45 °C for the Xshielder iPad Pro 11-inch.',
          'Your site bans cameras: Eaton offers a camera-free version, and our data lists none for the Xshielder iPad Pro 11-inch.',
        ],
      },
      {
        id: 'xshielder-ipad-pro-11',
        reasons: [
          'Your hazardous-area study includes gases that ignite below 135 °C: it is rated T6 (85 °C) and T80 °C for dust, against T4 and 135 °C for the Eaton MTL GECMA IS Tablet PC.',
          'Your inspectors take photos, video and 3D scans: the 12 MP camera with 4K ProRes video and the LiDAR scanner work through the cover, against 8 MP and 1080p video, with no depth sensor, on the Eaton MTL GECMA IS Tablet PC.',
          'You want a brighter screen on a lighter tablet: up to 1,000 nits against 540 nits, and 1,350 g including the iPad against 1,430 g.',
          'You already manage iPads: it is a standard iPad Pro 11-inch (M5) inside, with the same apps and Apple device management, 12 or 16 GB of memory and Wi-Fi 7.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'Windows desktop software',
      title: 'Windows software',
      note: 'The Eaton MTL GECMA IS Tablet PC runs x86 Windows software natively. The Xshielder iPad Pro 11-inch runs iPadOS only, so Windows applications do not run on it. If your software exists only for Windows, the choice is made.',
    },
    {
      row: 'Protection level (EPL)',
      title: 'Zone 0 or Zone 1 only',
      note: 'The Eaton MTL GECMA IS Tablet PC is rated Ga/Da, and Eaton limits Zone 0 use to the case it supplies. The Xshielder iPad Pro 11-inch is rated Gb/Db for Zone 1/21. If any of your work is in Zone 0, only the Eaton MTL GECMA IS Tablet PC qualifies, and only inside that case.',
    },
    {
      row: 'Temperature class',
      note: 'T6 keeps the surface at or below 85 °C and T4 at or below 135 °C. T4 is fine for most gases but not those that ignite below 135 °C, so check the ignition temperatures of your substances against the class.',
    },
    {
      row: 'Ambient temperature (Ta)',
      title: 'Maximum ambient temperature',
      note: 'The Eaton MTL GECMA IS Tablet PC has 10 °C more headroom than the Xshielder iPad Pro 11-inch, which matters for plants and yards in hot climates. Go by the ambient range in the certificate, not the operating range on a datasheet.',
    },
    {
      row: '3D scanning / LiDAR',
      title: 'LiDAR and 3D scanning',
      note: 'The Xshielder iPad Pro 11-inch has the iPad Pro’s LiDAR scanner, and Xshielder confirms it works through the cover. Our data lists no depth sensor for the Eaton MTL GECMA IS Tablet PC.',
    },
  ],
  sections: [
    {
      title: 'Windows software, platform and updates',
      edge: 'eaton-gecma-is-tablet-pc',
      text: [
        'This is the real dividing line. The Eaton MTL GECMA IS Tablet PC runs Windows 11 IoT Enterprise on an Intel quad-core Atom (Apollo Lake) at 1.6 GHz, with 8 GB of RAM, 256 GB of storage and a microSDXC slot up to 2 TB, and our data lists Windows desktop software as built in. For teams whose plant, maintenance or engineering software exists only as a Windows application, that is the whole case for it.',
        'The Xshielder iPad Pro 11-inch runs iPadOS 27 on an Apple M5 with 12 or 16 GB of memory and 256 GB to 2 TB of storage, with the same apps and Apple device management as any iPad. On updates, our data gives October 2034 for the Eaton MTL GECMA IS Tablet PC, but that is Microsoft’s date for the Windows 11 IoT Enterprise LTSC 2024 edition and Eaton does not state which edition it ships. Xshielder expects 7–8 years, based on previous iPad Pro support. We would not choose on either date.',
      ],
    },
    {
      title: 'Gas coverage and temperature class',
      edge: 'xshielder-ipad-pro-11',
      text: [
        'Both tablets are certified for gas group IIC and dust group IIIC under ATEX, but the Xshielder iPad Pro 11-inch is rated T6, with a maximum surface temperature of 85 °C for gas and 80 °C for dust. The Eaton MTL GECMA IS Tablet PC is T4, with 135 °C for both. T4 is fine for most gases, but not those that ignite below 135 °C. If your hazardous-area study lists none, the gap will not matter to you.',
        'The protection methods differ too. The Eaton MTL GECMA IS Tablet PC is intrinsically safe (Ex ia), which limits the energy in the device. The Xshielder iPad Pro 11-inch is a flameproof (Ex db) cover that contains an explosion instead. Under the North American listing the Eaton MTL GECMA IS Tablet PC’s gas group is IIB, covering Class I Division 1 Groups C and D, so hydrogen and acetylene (Groups B and A) are outside that listing.',
      ],
    },
    {
      title: 'Zone 0, approvals and heat',
      edge: 'eaton-gecma-is-tablet-pc',
      text: [
        'The Eaton MTL GECMA IS Tablet PC has the wider range of places it may be used. It is rated Ga/Da, with the ATEX marking II 1GD, and Eaton limits Zone 0 use to the case it supplies, with a friction hazard noted in the conditions of use. Outside Zone 0 it holds ATEX (Nemko 25ATEX1018X) and IECEx (NMK 25.0029X) certificates and a UL listing, which also lists it for Class I Zone 0 AEx ia IIB T4. Xshielder confirms ATEX certification for the Xshielder iPad Pro 11-inch, has published no certificate number yet, and plans IECEx. Our data has no North American listing for it.',
        'Heat is the other gap. The Eaton MTL GECMA IS Tablet PC is certified from −20 °C to +55 °C, against −20 °C to +45 °C for the Xshielder iPad Pro 11-inch. In the zone, Eaton allows no accessories or extensions on its tablet, and its SIM and microSD slots must stay closed. Eaton’s conditions say to charge it only with its own charger, outside the hazardous area.',
      ],
    },
    {
      title: 'Screen, cameras, battery and carrying',
      edge: 'even',
      text: [
        'The Xshielder iPad Pro 11-inch has the brighter screen and the better cameras. Its 11-inch Ultra Retina XDR display reaches 1,000 nits (SDR maximum) at 2420 × 1668, against 540 nits at 2560 × 1600 on the Eaton MTL GECMA IS Tablet PC’s 10.1-inch panel. Xshielder confirms that the 12 MP rear camera with 4K video and ProRes, the LiDAR scanner and the Face ID front camera work through the cover. The Eaton MTL GECMA IS Tablet PC has an 8 MP autofocus camera with 1080p video, and a camera-free version for sites that ban cameras.',
        'The Eaton MTL GECMA IS Tablet PC has the bigger battery, 49.68 Wh against 31.29 Wh, and Eaton quotes a typical 12 hours; our data lists up to 10 hours of web or video on Wi-Fi for the Xshielder iPad Pro 11-inch. These are makers’ figures measured in different ways, so test your own workload. Neither battery is user-replaceable. The Xshielder iPad Pro 11-inch weighs 1,350 g including the iPad, 80 g less than the Eaton MTL GECMA IS Tablet PC at 1,430 g. Eaton’s IP67 comes from the ATEX marking in its manual, not the IECEx certificate, and the Xshielder iPad Pro 11-inch’s IP65 is pending testing. We call this section even.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the Eaton MTL GECMA IS Tablet PC better than the Xshielder iPad Pro 11-inch?',
      a: 'Neither is better across the board, and they do different jobs. The Eaton MTL GECMA IS Tablet PC suits teams that need x86 Windows software, Zone 0 access, a North American listing or +55 °C. The Xshielder iPad Pro 11-inch suits teams that run iPad apps, handle gases that need T6, or want its screen, cameras and LiDAR. Both are certified for Zone 1/21.',
    },
    {
      q: 'Can either tablet be used in Zone 0?',
      a: 'Only the Eaton MTL GECMA IS Tablet PC, and only inside the case supplied by Eaton. The Xshielder iPad Pro 11-inch is certified for Zone 1/21 (protection level Gb/Db) and is not certified for Zone 0.',
    },
    {
      q: 'Is either tablet approved for North America or IECEx?',
      a: 'The Eaton MTL GECMA IS Tablet PC is both: it holds IECEx NMK 25.0029X and a UL listing for Class I Division 1 Groups C and D at T4, so not Groups A or B. The Xshielder iPad Pro 11-inch is ATEX only. IECEx is planned, and our data has no North American listing for it.',
    },
    {
      q: 'Which gets security updates for longer?',
      a: 'We cannot call it. Our data gives October 2034 for the Eaton MTL GECMA IS Tablet PC, but that is Microsoft’s date for the Windows 11 IoT Enterprise LTSC 2024 edition, and Eaton does not state its edition. Xshielder expects 7–8 years for the Xshielder iPad Pro 11-inch, based on previous iPad Pro support. Ask each maker for the exact date for the version you order.',
    },
    {
      q: 'Can you charge either tablet in the hazardous area?',
      a: 'Not the Eaton MTL GECMA IS Tablet PC: Eaton says it must be charged outside the hazardous area, and its battery is not user-replaceable. For the Xshielder iPad Pro 11-inch our data has no value for charging inside the zone, so it is not confirmed either way. Its battery swap is outside the hazardous area only.',
    },
    {
      q: 'Can either tablet run Windows desktop software?',
      a: 'Only the Eaton MTL GECMA IS Tablet PC, which runs x86 Windows 11 IoT Enterprise. The Xshielder iPad Pro 11-inch runs iPadOS, so Windows applications do not run on it, though it runs iPad apps and works with Apple device management.',
    },
    {
      q: 'How much do the Eaton MTL GECMA IS Tablet PC and Xshielder iPad Pro 11-inch cost?',
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
