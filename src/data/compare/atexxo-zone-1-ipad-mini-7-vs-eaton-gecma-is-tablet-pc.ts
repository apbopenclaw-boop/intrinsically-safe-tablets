import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['atexxo-zone-1-ipad-mini-7', 'eaton-gecma-is-tablet-pc'],
  title: 'Atexxo Zone 1 iPad mini 7 vs Eaton MTL GECMA IS Tablet PC',
  description:
    'Atexxo Zone 1 iPad mini 7 or Eaton MTL GECMA IS Tablet PC? iPad or Windows for Zone 1: dust group, Zone 0, weight and updates compared, with our pick.',
  h1: 'Atexxo Zone 1 iPad mini 7 vs Eaton MTL GECMA IS Tablet PC',
  eyebrow: 'Compare · iPad or Windows for Zone 1',
  lead:
    'These two tablets do different jobs, so this is a choice between an iPad and a Windows tablet for Zone 1 work. The Atexxo Zone 1 iPad mini 7 is a standard iPad mini (A17 Pro) in a flameproof (Ex db) housing: 8.3 inches, 990 g, running iPadOS 27. The Eaton MTL GECMA IS Tablet PC is a 10.1-inch intrinsically safe (Ex ia) tablet that runs x86 Windows 11 IoT Enterprise, weighs 1,430 g, and is Zone 0 rated inside its supplied case. Both are IIC T4 and certified for Zone 1/21 under ATEX and IECEx, but their dust groups differ. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'Pick by the software your team has to run and the areas you work in. If your Zone 1 work needs desktop Windows software, a 10.1-inch screen, Zone 0 access, dust group IIIC or a North American Class I Division 1 listing, we would choose the Eaton MTL GECMA IS Tablet PC. If you run iPadOS apps with Apple device management, carry the tablet all shift, or want 5G, Wi-Fi 6E and a 12 MP camera with 4K video, we would choose the Atexxo Zone 1 iPad mini 7.',
    ],
    choose: [
      {
        id: 'atexxo-zone-1-ipad-mini-7',
        reasons: [
          'Your crews carry the tablet all shift: it weighs 990 g including the iPad, against 1,430 g for the Eaton MTL GECMA IS Tablet PC.',
          'Your team already works in iPadOS apps and manages Apple devices: it is a standard iPad mini (A17 Pro) inside the housing.',
          'Your North American site is classified by zone and handles hydrogen or acetylene: its CSA listing is IIC (AEx db IIC T4 Gb in the US), while the Eaton MTL GECMA IS Tablet PC’s North American gas group is IIB.',
          'You want faster connectivity and sharper video: the cellular version has 5G and Wi-Fi 6E, and its 12 MP rear camera records 4K, against optional LTE-A, 802.11 a/b/g/n/ac and 1080p video.',
        ],
      },
      {
        id: 'eaton-gecma-is-tablet-pc',
        reasons: [
          'Your engineers or inspectors run desktop Windows software in Zone 1: it is an x86 tablet with Windows 11 IoT Enterprise.',
          'Some of your work is in Zone 0: it is rated Ga/Da for it inside the case Eaton supplies, while the Atexxo Zone 1 iPad mini 7 is rated Gb/Db for Zone 1/21.',
          'Your Zone 21 areas contain dust, not just flyings: it is certified for dust group IIIC, while the Atexxo Zone 1 iPad mini 7 is IIIA.',
          'Your North American sites are classified by Division: it holds a UL listing for Class I, II and III Division 1 (Class I Groups C and D at T4), where the Atexxo Zone 1 iPad mini 7’s CSA listing is zone-based, with a Division 2 marking.',
          'You read drawings or dashboards on site and want the larger screen: 10.1 inches at 2560 × 1600, against 8.3 inches at 2266 × 1488.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'Protection level (EPL)',
      title: 'Zone 0 or Zone 1 only',
      note: 'The Eaton MTL GECMA IS Tablet PC is rated Ga/Da, and Eaton limits Zone 0 use to the case it supplies. The Atexxo Zone 1 iPad mini 7 is rated Gb/Db for Zone 1/21. If any of your work is in Zone 0, only the Eaton MTL GECMA IS Tablet PC qualifies, and only inside that case.',
    },
    {
      row: 'Dust group',
      note: 'Both tablets reach T135 °C for dust, but the Atexxo Zone 1 iPad mini 7 is rated for dust group IIIA, which is combustible flyings only, not dusts. The Eaton MTL GECMA IS Tablet PC is IIIC. If your area classification includes dust, check this first.',
    },
    {
      row: 'North America',
      title: 'Listing in North America',
      note: 'The Eaton MTL GECMA IS Tablet PC’s UL listing covers Class I Division 1 Groups C and D at T4, so not acetylene or hydrogen, plus Class II and III Division 1. The Atexxo Zone 1 iPad mini 7’s CSA listing is Class I Zone 1 at IIC T4, with a Division 2 marking, for gas only. Which fits depends on how your site is classified.',
    },
    {
      row: 'Windows desktop software',
      title: 'Windows software',
      note: 'The Eaton MTL GECMA IS Tablet PC runs x86 Windows software natively. The Atexxo Zone 1 iPad mini 7 runs iPadOS only, so Windows applications are not possible on it. If your software exists only for Windows, the choice is made.',
    },
  ],
  sections: [
    {
      title: 'Windows software, screen and processing',
      edge: 'eaton-gecma-is-tablet-pc',
      text: [
        'This is the real dividing line. The Eaton MTL GECMA IS Tablet PC runs Windows 11 IoT Enterprise on an Intel quad-core Atom (Apollo Lake) at 1.6 GHz, with 8 GB of RAM and 256 GB of storage, plus a microSDXC slot for cards of up to 2 TB. Our data lists Windows desktop software as built in. For teams whose plant, maintenance or engineering software exists only as a Windows application, that is the whole case for it. It also has the larger screen, 10.1 inches at 2560 × 1600 and 540 nits.',
        'The Atexxo Zone 1 iPad mini 7 runs iPadOS 27 on an Apple A17 Pro, with 8 GB of RAM (Apple does not publish RAM, so that figure comes from teardowns) and 128, 256 or 512 GB of storage. Its 8.3-inch screen is 2266 × 1488 at 500 nits. It suits teams that already standardize on iPads and Apple device management, and runs iPad apps and web tools well, but our data lists Windows software as not possible on it. Its Touch ID fingerprint scanner is removed in the conversion.',
      ],
    },
    {
      title: 'Gases, dust, Zone 0 and North America',
      edge: 'eaton-gecma-is-tablet-pc',
      text: [
        'On gases the two start level: Zone 1/21 under ATEX and IECEx, gas group IIC, temperature class T4 (135 °C), and a dust surface limit of 135 °C. T4 is fine for most gases, but not those that ignite below 135 °C. The Eaton MTL GECMA IS Tablet PC adds the dust group IIIC, against IIIA for the Atexxo Zone 1 iPad mini 7, which covers combustible flyings only. It is also rated for Zone 0, but only inside the case Eaton supplies, and the certificate warns of a friction hazard. It has 5 °C more ambient headroom, up to +55 °C against +50 °C.',
        'North America splits the other way on gases. The Eaton MTL GECMA IS Tablet PC’s UL listing is Class I Division 1 Groups C and D at T4, plus Class II and III Division 1, and its North American gas group is IIB, so hydrogen and acetylene are outside it. The Atexxo Zone 1 iPad mini 7’s CSA listing is Class I Zone 1 AEx db IIC T4 Gb in the US and Ex db IIC T4 Gb in Canada, and the certificate also allows a Class I Division 2 marking, for gas only, with no Class II or III rating. Match each listing to how your site is classified.',
      ],
    },
    {
      title: 'Weight, cameras and connectivity',
      edge: 'atexxo-zone-1-ipad-mini-7',
      text: [
        'For a tablet that moves around, the Atexxo Zone 1 iPad mini 7 has the advantage. It weighs 990 g including the iPad, against 1,430 g for the Eaton MTL GECMA IS Tablet PC, 440 g less. Eaton rates the Eaton MTL GECMA IS Tablet PC IP67, and the ATEX marking in its manual includes IP67, but its IECEx certificate states no IP code. Our data has no ingress figure for the Atexxo Zone 1 iPad mini 7, which means unverified, not absent.',
        'The Atexxo Zone 1 iPad mini 7 has the faster radios and the higher camera specification. Its cellular version has 5G sub-6 GHz, Wi-Fi 6E and Bluetooth 5.3, against optional LTE-A Cat 12 or UMTS, 802.11 a/b/g/n/ac and Bluetooth 5.2, and it is eSIM only. Its 12 MP rear camera works through a glass opening and records 4K video; the Eaton MTL GECMA IS Tablet PC has an 8 MP autofocus camera and 1080p video. Both scan through a camera app, and both have a camera-free version: the Atexxo -BC version has blocked cameras. The Eaton MTL GECMA IS Tablet PC lists built-in NFC, and our data records no NFC reader on any iPad, which it flags as unconfirmed.',
      ],
    },
    {
      title: 'Battery, charging and updates',
      edge: 'even',
      text: [
        'The Atexxo Zone 1 iPad mini 7 has a 19.3 Wh battery, and Apple quotes up to 10 hours of web or video use on Wi-Fi (9 hours on cellular). The Eaton MTL GECMA IS Tablet PC has two 3,450 mAh cells at 7.2 V, 49.68 Wh, and Eaton quotes a typical 12 hours. Both are makers’ figures with different wording, so test your own workload before you rely on either. Neither battery is user-replaceable, and neither tablet may be charged in the hazardous area. Atexxo specifies charging at +10 °C to +45 °C, and Eaton’s charger and dock are for safe areas only.',
        'On updates, Apple’s minimum for the Atexxo Zone 1 iPad mini 7 runs to at least October 2029, a floor rather than an end date. Our data gives October 2034 for the Eaton MTL GECMA IS Tablet PC, Microsoft’s end date for the Windows 11 IoT Enterprise LTSC 2024 edition, but Eaton does not state which edition it ships. We would not choose on the longer date: ask Eaton for the exact support end date for the version you order.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the Atexxo Zone 1 iPad mini 7 better than the Eaton MTL GECMA IS Tablet PC?',
      a: 'Neither is better across the board. The Eaton MTL GECMA IS Tablet PC suits teams that need x86 Windows software, a 10.1-inch screen, Zone 0 access, dust group IIIC or a Division 1 listing. The Atexxo Zone 1 iPad mini 7 suits iPadOS teams and crews who want a lighter tablet. Both are certified for Zone 1/21 at IIC T4.',
    },
    {
      q: 'Can either tablet be used in Zone 0?',
      a: 'Only the Eaton MTL GECMA IS Tablet PC, and only inside the case supplied by Eaton. The Atexxo Zone 1 iPad mini 7 is certified for Zone 1/21 (protection level Gb/Db) and is not certified for Zone 0.',
    },
    {
      q: 'Are both tablets approved for North America?',
      a: 'Yes, in different ways. The Eaton MTL GECMA IS Tablet PC is listed by UL for Class I Division 1 Groups C and D at T4 and for Class I, II and III Division 1, so not acetylene or hydrogen. The Atexxo Zone 1 iPad mini 7 has a CSA listing for Class I Zone 1 (IIC T4) and allows a Class I Division 2 marking, for gas only.',
    },
    {
      q: 'Can you charge either tablet in the hazardous area?',
      a: 'No. Both must be charged outside the hazardous area, and neither battery is user-replaceable. The Atexxo Zone 1 iPad mini 7 is charged through its USB-C port behind a bottom cover opened only outside the hazardous area, and Eaton’s dock and charger for the Eaton MTL GECMA IS Tablet PC are for safe areas only.',
    },
    {
      q: 'Which gets security updates for longer?',
      a: 'On the dates we have, the Eaton MTL GECMA IS Tablet PC, to October 2034, but that is Microsoft’s date for the LTSC 2024 edition and Eaton does not state its edition. For the Atexxo Zone 1 iPad mini 7, Apple’s minimum runs to at least October 2029. Treat Eaton’s date as unconfirmed until Eaton confirms it.',
    },
    {
      q: 'Can the Atexxo Zone 1 iPad mini 7 run Windows software?',
      a: 'No. It runs iPadOS, so Windows applications are not possible on it. The Eaton MTL GECMA IS Tablet PC runs Windows 11 IoT Enterprise on an x86 processor, and our data lists Windows desktop software as built in.',
    },
    {
      q: 'How much do the Atexxo Zone 1 iPad mini 7 and Eaton MTL GECMA IS Tablet PC cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are certified for Zone 1/21 at IIC T4, so the choice comes down to your software and your area classification: iPad or Windows, dust group IIIA or IIIC, Zone 0 or not. Tell us about your sites and we will help you choose impartially.',
  },
};

export default page;
