import type { ComparePage } from '../compare-pages';

const page: ComparePage = {
  tablets: ['bartec-et60-65ex2-android', 'getac-zx80-ex'],
  title: 'BARTEC ET60/65EX2 Android vs Getac ZX80-EX Compared',
  description:
    'BARTEC ET60/65EX2 Android or Getac ZX80-EX? 10.1-inch or 8-inch Zone 2 Android: certification, North America, weight and battery compared, with our pick.',
  h1: 'BARTEC ET60/65EX2 Android vs Getac ZX80-EX',
  eyebrow: 'Compare · Zone 2 Android tablets',
  lead:
    'These two Android tablets share the same Zone 2 certification class: intrinsically safe (Ex ic), IIC T4, Zone 2/22, with a 1,000-nit screen, a 16 MP rear camera and an optional built-in 1D/2D scanner. The difference is size. The BARTEC ET60/65EX2 Android is a 10.1-inch, 1,074 g tablet with a hot-swap battery and a UL listing for its North America types. The Getac ZX80-EX is an 8-inch tablet on Android 15 with 12 GB of memory, and at 780 g it shares the lightest confirmed weight of any current tablet in our data. Neither may be used in Zone 1. Here is how they compare, and which we would choose for which team.',
  verdict: {
    summary: [
      'For most Zone 2 fleets we would choose the BARTEC ET60/65EX2 Android: it has the larger screen, a hot-swap battery, a published ATEX certificate and a North American Class I Division 2 listing. We would choose the Getac ZX80-EX for crews who carry the tablet on foot all shift and want the 8-inch, 780 g format, for teams who want Android 15 with 12 GB of memory, and for sites where a 1.8 m drop rating matters.',
    ],
    choose: [
      {
        id: 'bartec-et60-65ex2-android',
        reasons: [
          'You work in North America: it holds a UL listing for Class I Division 2 Groups A to D for the B7-T2E1 and B7-T2E3 types, where our data has no North American listing for the Getac ZX80-EX.',
          'Your safety file asks for a published ATEX certificate: BARTEC publishes EPS 25 ATEX 1 087 X, while Getac states ATEX certification but has not published the certificate.',
          'Crews read drawings, checklists and forms on site: its screen is 10.1 inches against 8, at the same 1,000 nits.',
          'Your shifts outlast a battery: it has an 8,920 mAh battery with hot swap through an internal supercapacitor, and BARTEC states up to 10 hours indoors, whereas Getac does not state hot swap for the Ex version, so our data does not confirm it for the Getac ZX80-EX.',
        ],
      },
      {
        id: 'getac-zx80-ex',
        reasons: [
          'Crews walk long rounds with the tablet in one hand or on a strap: it weighs 780 g against 1,074 g, a gap of 294 g.',
          'You want the newer Android release: it ships with Android 15, against Android 14 for the BARTEC ET60/65EX2 Android (upgradeable to Android 16, per BARTEC’s datasheet).',
          'Your apps need memory and local storage: it has 12 GB of RAM and 256 GB of storage, against 8 GB and 128 GB.',
          'Your crews drop tablets: it lists a drop height of 1.8 m (6 ft), against 1.5 m to concrete for the BARTEC ET60/65EX2 Android.',
        ],
      },
    ],
  },
  differences: [
    {
      row: 'North America',
      title: 'North American listing',
      note: 'The BARTEC ET60/65EX2 Android has a UL listing for Class I, II and III Division 2, for the North America types only. Our data has no North American listing for the Getac ZX80-EX, so check with Getac before specifying it for a Division 2 site.',
    },
    {
      row: 'ATEX certificate',
      title: 'Published ATEX certificate',
      note: 'BARTEC publishes ATEX certificate EPS 25 ATEX 1 087 X for the BARTEC ET60/65EX2 Android. Getac states ATEX certification for the Getac ZX80-EX, but the certificate is not published; our data holds its IECEx certificate only. If your safety file needs the ATEX certificate, ask Getac for it.',
    },
    {
      row: 'Weight',
      note: 'The Getac ZX80-EX weighs 780 g and the BARTEC ET60/65EX2 Android 1,074 g, a gap of 294 g. That is the biggest difference you feel in daily use, on a strap or in one hand through a shift.',
    },
    {
      row: 'Display',
      title: 'Screen size',
      note: 'The BARTEC ET60/65EX2 Android has a 10.1-inch screen and the Getac ZX80-EX an 8-inch one, both at 1,000 nits. The larger screen suits drawings and forms, and the smaller one suits a tablet that is carried on rounds.',
    },
  ],
  sections: [
    {
      title: 'Size and carrying',
      edge: 'even',
      text: [
        'The choice is format. The BARTEC ET60/65EX2 Android has a 10.1-inch, optically bonded Gorilla Glass display and weighs 1,074 g. The Getac ZX80-EX has an 8-inch, 1,920 × 1,200 display at 1,000 nits and weighs 780 g, the joint lightest confirmed weight of any current tablet in our data. The Getac tablet suits crews who walk, climb and hold the device in one hand.',
        'The larger tablet suits crews who read drawings and fill in forms while standing at a panel or a skid. The BARTEC takes bare or gloved fingertip or stylus input; the Getac has dual-mode touch with a digitizer pen, and our data does not confirm glove touch for it. The BARTEC’s resolution is unconfirmed (a single source gives 1,920 × 1,200).',
      ],
    },
    {
      title: 'Certification and North America',
      edge: 'bartec-et60-65ex2-android',
      text: [
        'Both are marked Ex ic op is (the BARTEC ET60/65EX2 Android only with its optional scan engine, otherwise Ex ic), IIC T4 Gc for gas and IIIC Dc for dust, for Zone 2/22, and both are certified up to +55 °C ambient. The BARTEC ET60/65EX2 Android holds ATEX (EPS 25 ATEX 1 087 X) and IECEx (EPS 25.0018X) certificates, with a dust surface temperature of 135 °C. The Getac ZX80-EX holds IECEx EPS 25.0039X, with a dust limit of 130 °C. The lower ambient limit is −21 °C for the Getac and −20 °C for the BARTEC.',
        'Getac also states ATEX certification, but the certificate is not published. Its IECEx certificate names the model “ZX80-Exc” without the generation, and our match to this tablet is unconfirmed, so confirm the exact model with Getac. For North America, the BARTEC is listed by UL for Class I Division 2 Groups A to D at T4, for the B7-T2E1 and B7-T2E3 types only, with a Zone 22 dust group of IIIB under the NEC and CEC. Our data has no North American listing for the Getac.',
      ],
    },
    {
      title: 'Battery, charging and ports in the zone',
      edge: 'bartec-et60-65ex2-android',
      text: [
        'Neither tablet may be charged in the hazardous area, and both batteries are changed outside it. The BARTEC ET60/65EX2 Android has an 8920 mAh battery, hot swap through an internal supercapacitor, and BARTEC’s figure of up to 10 hours indoors with WLAN on and a 50 % backlight. The Getac ZX80-EX lists a 4060 mAh typical battery and an optional second 4990 mAh battery. The certificate’s conditions name two battery types, and our data does not state hot swap for the Ex version. Our data has no runtime figure for the Getac, so we do not compare battery life.',
        'Ports are restricted on both. On the BARTEC, the USB-A, USB-C, dock and keyboard connectors may be used only if the atmosphere is shown to be absent. On the Getac, the certificate bars every connection interface from hazardous areas, including USB-C, microSD and the SIM tray. Plan data transfers and charging at a safe-area point.',
      ],
    },
    {
      title: 'Android, performance and field features',
      edge: 'even',
      text: [
        'Both run Qualcomm’s 6490 family (QCM6490 in the BARTEC, QCS6490 in the Getac). The Getac ZX80-EX comes with Android 15, 12 GB of RAM and 256 GB of storage. The BARTEC ET60/65EX2 Android runs Android 14 with 8 GB and 128 GB, upgradeable to Android 16 per BARTEC’s datasheet. Both take a microSD card. For security updates, both dates in our data are unconfirmed: December 2031 is Zebra’s date for the tablet the BARTEC is built on, and BARTEC says it needs a LifeGuard service contract; February 2029 is Getac’s date for the standard ZX80.',
        'Cameras are close: 16 MP autofocus rear cameras on both, and 8 MP front cameras, with a mechanical privacy shade on the BARTEC. Both offer a built-in 1D/2D scanner as an option, NFC (built in on the BARTEC, optional on the Getac) and Wi-Fi 6E. The BARTEC comes as the Wi-Fi-only ET60 or the 5G ET65; the Getac offers optional 4G LTE and 5G Sub-6 with dual SIM and eSIM. Ruggedness: the Getac lists IP67 and a 1.8 m drop, and the BARTEC a 1.5 m drop to concrete; the BARTEC’s IP rating is unconfirmed (IP64 in its Ex marking), so we do not compare IP ratings.',
      ],
    },
  ],
  faq: [
    {
      q: 'Is the BARTEC ET60/65EX2 Android better than the Getac ZX80-EX?',
      a: 'Neither is better across the board. The BARTEC ET60/65EX2 Android suits teams who want the larger 10.1-inch screen, a hot-swap battery, a published ATEX certificate and a North American listing. The Getac ZX80-EX suits crews who want an 8-inch, 780 g tablet on Android 15 with 12 GB of memory. Both are certified for Zone 2/22.',
    },
    {
      q: 'Can either tablet be used in Zone 1 or Zone 0?',
      a: 'No. Both are intrinsically safe (Ex ic) and certified to protection level Gc, which covers Zone 2 only, so neither is for Zone 1 or Zone 0. For Zone 1 you need a tablet certified for it, which also works in Zone 2.',
    },
    {
      q: 'Are both tablets approved for North America?',
      a: 'Our data shows a UL listing for the BARTEC ET60/65EX2 Android: Class I Division 2 Groups A to D at T4, for the B7-T2E1 and B7-T2E3 types only. We have found no North American listing for the Getac ZX80-EX, which is not the same as saying it has none, so ask Getac.',
    },
    {
      q: 'Which tablet is lighter?',
      a: 'The Getac ZX80-EX, at 780 g against 1,074 g for the BARTEC ET60/65EX2 Android, a gap of 294 g. It has an 8-inch screen, where the BARTEC has a 10.1-inch one.',
    },
    {
      q: 'Can you charge or swap the battery in the hazardous area?',
      a: 'No. Both must be charged and have their batteries changed outside the hazardous area. The BARTEC ET60/65EX2 Android has hot swap through an internal supercapacitor, and Getac’s Ex datasheet does not state hot swap for the Getac ZX80-EX, which offers an optional second 4990 mAh battery.',
    },
    {
      q: 'Do both tablets have a built-in barcode scanner?',
      a: 'Both offer one as an option. The BARTEC ET60/65EX2 Android takes an SE55 1D/2D scan engine, which changes its Ex marking to “op is”. The Getac ZX80-EX offers an optional built-in 1D/2D imager. Specify the scanner when you order.',
    },
    {
      q: 'How much do the BARTEC ET60/65EX2 Android and Getac ZX80-EX cost?',
      a: 'Prices depend on volume, configuration and region, so both are on request. Contact us for a price.',
    },
  ],
  cta: {
    kind: 'neutral',
    heading: 'Still deciding between the two?',
    text: 'Both tablets are certified for Zone 2/22 on Android, so the choice comes down to screen size, weight, region and battery routine. Tell us about your sites and we will help you choose impartially, or check whether a Zone 1 tablet would suit better.',
  },
};

export default page;
