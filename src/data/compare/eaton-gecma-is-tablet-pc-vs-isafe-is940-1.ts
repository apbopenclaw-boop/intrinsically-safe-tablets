import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['eaton-gecma-is-tablet-pc', 'isafe-is940-1'],
  title: 'Eaton MTL GECMA IS Tablet PC vs i.safe MOBILE IS940.1',
  description:
    'Eaton MTL GECMA IS Tablet PC or i.safe MOBILE IS940.1? Windows or Android for Zone 1: Zone 0, gas groups, weight and charging compared, with our pick.',
  h1: 'Eaton MTL GECMA IS Tablet PC vs i.safe MOBILE IS940.1',
  eyebrow: 'Compare · Windows or Android for Zone 1',
  lead:
    'These two 10.1-inch intrinsically safe tablets do different jobs, so this is a choice between Windows and Android for Zone 1 work. The Eaton MTL GECMA IS Tablet PC (Ex ia) runs x86 Windows 11 IoT Enterprise and is Zone 0 rated inside its supplied case. The i.safe MOBILE IS940.1 (Ex ib) is an Android tablet with 5G that weighs 371 g less, and i.safe allows it to be charged inside the hazardous area. Both are certified for Zone 1/21 under ATEX and IECEx at IIC T4. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'Pick by the software your team has to run and the gases on your site. If your Zone 1 work needs desktop Windows software, a sharper screen or Zone 0 access, we would choose the Eaton MTL GECMA IS Tablet PC. If you run Android apps, work in North America with gases in Groups A or B, charge in the zone, or want a lighter tablet with an alarm key and Ex-rated push-to-talk accessories, we would choose the i.safe MOBILE IS940.1.',
    ],
    choose: [
      {
        id: 'eaton-gecma-is-tablet-pc',
        reasons: [
          'Your engineers or inspectors run desktop Windows software in Zone 1: it is an x86 tablet with Windows 11 IoT Enterprise.',
          'Some of your work is in Zone 0: it is rated Ga/Da for it inside the case Eaton supplies, while the i.safe MOBILE IS940.1’s certificate covers Zone 1/21.',
          'You read drawings, data or dashboards on site: its screen is 2560 × 1600 at 540 nits, against 1200 × 1920 on the i.safe MOBILE IS940.1, which has no brightness figure in our data.',
          'You store large files on the tablet, such as drawings, manuals or inspection photos: it has 256 GB with microSDXC up to 2 TB, against 128 GB and microSD.',
          'Your site restricts cameras: Eaton offers a camera-free version of the Eaton MTL GECMA IS Tablet PC, while our data does not confirm one for the i.safe MOBILE IS940.1.',
        ],
      },
      {
        id: 'isafe-is940-1',
        reasons: [
          'Your North American sites handle acetylene or hydrogen: it is listed for Class I Division 1 Groups A to D, where the Eaton MTL GECMA IS Tablet PC covers Groups C and D only.',
          'Your crews work shifts longer than a battery: it may be charged inside the hazardous area within the certificate’s limits, where the Eaton MTL GECMA IS Tablet PC must be charged outside.',
          'Your crews carry the tablet all shift: it weighs 1,059 g against 1,430 g, and is rated IP68 and MIL-STD-810H.',
          'Your teams rely on push-to-talk or lone-worker alarms: it has a programmable red key and Ex-rated push-to-talk, headset and speaker-microphone accessories, while the IECEx conditions for the Eaton MTL GECMA IS Tablet PC allow no accessories or extensions in the hazardous area, apart from the carry case it needs in Zone 0.',
          'Some of your crews work underground: the i.safe MOBILE IS940.M1 mining version adds Group I certification.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'Protection level (EPL)',
      title: 'Zone 0 or Zone 1 only',
      note: 'The Eaton MTL GECMA IS Tablet PC is rated Ga/Da, and Eaton limits Zone 0 use to the case it supplies. The i.safe MOBILE IS940.1 is rated Gb/Db for Zone 1/21. If any of your work is in Zone 0, only the Eaton MTL GECMA IS Tablet PC qualifies, and only inside that case.',
    },
    {
      row: 'North America',
      title: 'Gas groups in North America',
      note: 'The Eaton MTL GECMA IS Tablet PC’s UL listing covers Class I Division 1 Groups C and D at T4, so not acetylene (Group A) or hydrogen (Group B). The i.safe MOBILE IS940.1’s NEC 500 listing covers Groups A to D at T4. On a site classified by Division, this can decide the choice on its own.',
    },
    {
      row: 'Windows desktop software',
      title: 'Windows software',
      note: 'The Eaton MTL GECMA IS Tablet PC runs x86 Windows software natively. The i.safe MOBILE IS940.1 is Android and cannot run Windows applications. If your software exists only for Windows, the choice is made.',
    },
    {
      row: 'Charging',
      title: 'Charging in the hazardous area',
      note: 'i.safe allows the i.safe MOBILE IS940.1 to be charged inside the hazardous area, within a charging range of 0 °C to +45 °C. The Eaton MTL GECMA IS Tablet PC must be charged outside it, with its own charger. For crews who cannot walk out to a charging point, this can decide the choice.',
    },
  ],
  sections: [
    {
      title: 'Windows software, screen and processing',
      edge: 'eaton-gecma-is-tablet-pc',
      text: [
        'This is the real dividing line. The Eaton MTL GECMA IS Tablet PC runs Windows 11 IoT Enterprise on an Intel quad-core Atom (Apollo Lake) at 1.6 GHz, with 8 GB of RAM and 256 GB of storage, and our data lists Windows desktop software as built in. For teams whose plant, maintenance or engineering software exists only as a Windows application, that is the whole case for it. Its 10.1-inch screen is 2560 × 1600 at 540 nits, a stylus is supplied, and the rear camera is 8 MP with 1080p video.',
        'The i.safe MOBILE IS940.1 runs Android 14 on a Qualcomm QCM6490, a long-term support chipset, with 8 GB of RAM and 128 GB of storage. Its 10.1-inch Gorilla Glass V3 screen is 1200 × 1920, with a 50 MP autofocus camera, 5G NR, Wi-Fi 6 and a dual SIM (nano-SIM and eSIM). Eaton lists Wi-Fi 802.11 a/b/g/n/ac with optional LTE-A. For web tools and Android apps the i.safe MOBILE IS940.1 does the job; for Windows applications it does not.',
      ],
    },
    {
      title: 'Zone 0, gas groups and ratings',
      edge: 'even',
      text: [
        'Under ATEX and IECEx both are certified for Zone 1/21, gas group IIC and dust group IIIC, at T4 and 135 °C, with the same ambient range of −20 °C to +55 °C. The Eaton MTL GECMA IS Tablet PC is rated Ga/Da, intrinsically safe at level ia, and Zone 0 use is allowed only inside the case Eaton supplies, with a friction hazard warning. The i.safe MOBILE IS940.1 is rated Gb/Db at level ib, and neither it nor its certificate covers Zone 0.',
        'North America reverses the picture. The Eaton MTL GECMA IS Tablet PC’s UL listing is Class I Division 1 Groups C and D at T4, with Class I Zone 0 AEx ia IIB T4, and in North America its gas group is IIB, so hydrogen and acetylene are outside it. The i.safe MOBILE IS940.1’s NEC 500 listing covers Class I Division 1 Groups A to D at T4, Class II Division 1 Groups E, F and G and Class III. Each tablet wins one of these two points, so which counts depends on your site.',
      ],
    },
    {
      title: 'Weight, charging and battery',
      edge: 'isafe-is940-1',
      text: [
        'The i.safe MOBILE IS940.1 weighs 1,059 g against 1,430 g for the Eaton MTL GECMA IS Tablet PC, 371 g less, and it is rated IP68 against IP67. It may be charged inside the hazardous area, and i.safe lists the IS-DS940.1 docking station for it. Its battery is user-replaceable, changed outside the hazardous area only. The Eaton MTL GECMA IS Tablet PC’s battery is not user-replaceable, and Eaton’s conditions allow no charging, connecting or disconnecting in hazardous areas, with its dock for safe areas only.',
        'The Eaton MTL GECMA IS Tablet PC has two 3,450 mAh cells at 7.2 V, 49.68 Wh, and Eaton quotes a typical 12 hours. The i.safe MOBILE IS940.1 has an 8,160 mAh battery, and our data has no battery-life figure for it, so we do not compare runtime. Test Eaton’s figure against your own workload, and note that a tablet that can be charged where it is used does not have to leave the zone to recharge.',
      ],
    },
    {
      title: 'Updates, accessories and field tools',
      edge: 'isafe-is940-1',
      text: [
        'On updates, i.safe states security updates until Q4 2032 for the i.safe MOBILE IS940.1. Our data gives October 2034 for the Eaton MTL GECMA IS Tablet PC, which is Microsoft’s end date for the Windows 11 IoT Enterprise LTSC 2024 edition, but Eaton does not state which edition it ships. We would not choose on that date: ask Eaton for the exact support end date for the version you order.',
        'In the field, the i.safe MOBILE IS940.1 lists more. It has a freely programmable red key for SOS or a lone-worker app, Ex-rated accessories for use in the zone (the IS-PTTB1A.1 push-to-talk button, headsets and the IS-RSM3A.1 remote speaker microphone) and a mining version, the i.safe MOBILE IS940.M1. The Eaton MTL GECMA IS Tablet PC scans through a camera app, with Aegex’s AegexScan as an option, and supplies a stylus. Eaton’s conditions of use allow no accessories or extensions in the hazardous area, and our data lists no key or ruggedness standard for it.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the Eaton MTL GECMA IS Tablet PC better than the i.safe MOBILE IS940.1?',
      a: 'Neither is better across the board. The Eaton MTL GECMA IS Tablet PC suits teams that need x86 Windows software, a sharper screen or Zone 0 access. The i.safe MOBILE IS940.1 suits Android teams, Division 1 sites with Group A or B gases, crews who charge in the zone and anyone who wants a lighter tablet. Both are intrinsically safe and certified for Zone 1/21.',
    },
    {
      q: 'Can either tablet be used in Zone 0?',
      a: 'Only the Eaton MTL GECMA IS Tablet PC, and only inside the case supplied by Eaton. The i.safe MOBILE IS940.1 is certified for Zone 1/21 (protection level Gb/Db) and is not certified for Zone 0.',
    },
    {
      q: 'Do both cover hydrogen and acetylene in North America?',
      a: 'No. The i.safe MOBILE IS940.1 is listed for Class I Division 1 Groups A to D, which include acetylene and hydrogen. The Eaton MTL GECMA IS Tablet PC is listed for Groups C and D only. Under ATEX and IECEx both are rated for gas group IIC.',
    },
    {
      q: 'Can you charge either tablet in the hazardous area?',
      a: 'Only the i.safe MOBILE IS940.1, within its certificate’s limits and a charging range of 0 °C to +45 °C. The Eaton MTL GECMA IS Tablet PC must be charged outside the hazardous area with Eaton’s charger, and its battery is not user-replaceable.',
    },
    {
      q: 'Which gets security updates for longer?',
      a: 'On the dates we have, the Eaton MTL GECMA IS Tablet PC, to October 2034, but that is Microsoft’s date for the LTSC 2024 edition and Eaton does not state its edition. i.safe states Q4 2032 for the i.safe MOBILE IS940.1. Treat the Eaton date as unconfirmed until Eaton confirms it.',
    },
    {
      q: 'Can the i.safe MOBILE IS940.1 run Windows software?',
      a: 'No. It is an Android tablet, and our data lists Windows desktop software as not possible on it. The Eaton MTL GECMA IS Tablet PC is an x86 tablet that runs Windows 11 IoT Enterprise.',
    },
    {
      q: 'How much do the Eaton MTL GECMA IS Tablet PC and i.safe MOBILE IS940.1 cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are intrinsically safe and certified for Zone 1/21, so the choice comes down to your software and your gases: Windows or Android, Groups C and D or A to D, Zone 0 or not. Tell us about your sites and we will help you choose impartially.',
  },
};

export default page;
