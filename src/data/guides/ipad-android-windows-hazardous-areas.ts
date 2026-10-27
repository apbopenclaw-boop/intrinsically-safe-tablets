import type { GuidePage } from '../guide-pages';

const page: GuidePage = {
  slug: 'ipad-android-windows-hazardous-areas',
  title: 'iPad, Android or Windows Tablets for Hazardous Areas',
  description:
    'iPad, Android or Windows for Zone 1 and Zone 2? Certification, apps, updates, cameras, screens and charging rules compared, with a verdict for each.',
  h1: 'iPad, Android or Windows: choosing an intrinsically safe tablet platform',
  navLabel: 'iPad, Android or Windows',
  lead:
    'Most hazardous-area tablet projects start with software. The permit system, the maintenance app, the inspection tool and the device management platform are usually chosen before anyone looks at a tablet, and they decide which operating system the tablet has to run. Each platform has certified options for Zone 1 and Zone 2, and each wins for a different kind of team.',
  datePublished: '2026-10-27',
  dateModified: '2026-10-27',
  body: `
<p>This guide compares the three platforms on the points that usually decide the choice: what’s certified, software, device management and support, cameras, screens and the practical rules of working in the zone. Each section ends with a verdict for the criteria it covers. The figures come from the current tablets, cases and conversions in our database, checked in October 2026.</p>

<h2>What’s certified on each platform</h2>

<p>The three platforms reach hazardous areas in different ways. Android and Windows tablets are mostly purpose-built and intrinsically safe, while iPads go in through certified cases and conversions, which for Zone 1 are flameproof (explosion-proof) enclosures around a standard iPad.</p>

<table>
  <thead>
    <tr><th></th><th>iPad</th><th>Android</th><th>Windows</th></tr>
  </thead>
  <tbody>
    <tr><td>Current options</td><td>17 cases and conversions</td><td>15 tablets</td><td>14 tablets</td></tr>
    <tr><td>Zone 1 options</td><td>7 (one full-size iPad Pro, six iPad mini)</td><td>4</td><td>2</td></tr>
    <tr><td>Zone 1 protection</td><td>Flameproof enclosure (Ex db)</td><td>Intrinsic safety (Ex ib), or flameproof on the ecom Tab-Ex 05 DZ1 and the Atexxo Galaxy conversion</td><td>Intrinsic safety (Ex ia or Ex ib)</td></tr>
    <tr><td>Zone 0</td><td>None</td><td>None</td><td>Eaton MTL GECMA IS Tablet PC, inside its supplied case</td></tr>
    <tr><td>Class I, Division 1</td><td>None (Division 2 at most)</td><td>ecom Tab-Ex 05 DZ1, i.safe MOBILE IS930.1 and IS940.1</td><td>i.safe MOBILE IS945.1; Eaton for Groups C and D only</td></tr>
    <tr><td>Zone 1 at IIC T6 (confirmed marking)</td><td>Xshielder iPad Pro 11-inch</td><td>ecom Tab-Ex 05 DZ1, Atexxo Zone 1 Galaxy Tab Active5</td><td>None (T4)</td></tr>
  </tbody>
</table>

<p>The <a href="/tablets/xshielder-ipad-pro-11/">Xshielder iPad Pro 11-inch</a> is the only Zone 1 option for a full-size iPad, rated IIC T6 with dust group IIIC under ATEX. The other six Zone 1 iPad options are cases and conversions for the iPad mini. Android has four Zone 1 tablets, two of them at T6, and Windows has two, the <a href="/tablets/eaton-gecma-is-tablet-pc/">Eaton MTL GECMA IS Tablet PC</a> and the <a href="/tablets/isafe-is945-1/">i.safe MOBILE IS945.1</a>.</p>

<p><strong>Verdict:</strong> Android and Windows cover the widest range of certificates, including North American Division 1, and Windows is the only route into Zone 0. For ATEX and IECEx Zone 1 and Zone 2 work, all three platforms are certified, and the Xshielder iPad Pro 11-inch matches the best Android gas and temperature rating at IIC T6 under ATEX.</p>

<h2>Software and apps</h2>

<p>The software a team already uses usually settles this before anything else. Engineering and configuration tools, CAD viewers and older line-of-business software are often built for Windows on Intel processors. Many field service, inspection and permit apps have native iPad versions, and companies with Android phone fleets often run the same apps on Android tablets.</p>

<table>
  <thead>
    <tr><th></th><th>iPad</th><th>Android</th><th>Windows</th></tr>
  </thead>
  <tbody>
    <tr><td>Apps</td><td>iPadOS App Store and in-house apps</td><td>Google Play and in-house apps</td><td>Desktop software and Microsoft Store apps</td></tr>
    <tr><td>x86 desktop software</td><td>No</td><td>No</td><td>Native on Intel tablets; through emulation on Arm (i.safe MOBILE IS945.1 and IS945.2, Getac ZX80W-EX)</td></tr>
    <tr><td>Processor in Zone 1</td><td>Apple M5 (iPad Pro) or A12, A15 or A17 Pro (iPad mini)</td><td>Qualcomm or Samsung Exynos</td><td>Intel Atom (Eaton) or Qualcomm (i.safe MOBILE)</td></tr>
  </tbody>
</table>

<p>Windows on Arm deserves a closer look. The i.safe MOBILE IS945.1 runs Windows 11 IoT Enterprise on a Qualcomm processor, so x86 applications run through Microsoft’s emulation. Test the applications that matter before committing a fleet. The Eaton runs Windows on an Intel Atom processor, so x86 software runs natively, and in Zone 2 Getac, Durabook, Winmate, BARTEC and ecom offer Windows tablets on Intel processors.</p>

<p><strong>Verdict:</strong> Windows for desktop software, especially x86 applications that have no tablet version. The iPad for teams whose field apps are iPad-first, and Android for fleets already built on Android apps.</p>

<h2>Device management and security updates</h2>

<p>Every platform here works with mainstream device management. iPads are managed through Apple Business Manager and the same MDM tools as any other iPad, Android tablets through Android Enterprise (with Samsung Knox on Samsung-based software), and Windows tablets through the tools IT already uses for Windows laptops.</p>

<p>Support life is where the platforms differ. Android makers state a date, Windows follows Microsoft’s lifecycle for the edition installed, and Apple doesn’t publish an end date for each iPad.</p>

<table>
  <thead>
    <tr><th>Tablet</th><th>Security updates, as stated</th></tr>
  </thead>
  <tbody>
    <tr><td>i.safe MOBILE IS940.1 and IS940.2 (Android 14)</td><td>Until Q4 2032</td></tr>
    <tr><td>i.safe MOBILE IS930.1 and IS930.2 (Android 14)</td><td>Until Q1 2027</td></tr>
    <tr><td>ecom Tab-Ex 05 DZ1 and DZ2 (Android)</td><td>ecom states updates until 2032</td></tr>
    <tr><td>Atexxo Zone 1 Galaxy Tab Active5 (Android)</td><td>January 2029 for the standard model; Samsung’s Enterprise Edition gets longer support, and Atexxo doesn’t say which it uses</td></tr>
    <tr><td>Eaton MTL GECMA IS Tablet PC and i.safe MOBILE IS945.1 (Windows 11 IoT Enterprise)</td><td>October 2034 if the edition is Windows 11 IoT Enterprise LTSC 2024; neither maker states the edition year</td></tr>
    <tr><td>Windows 11 Pro tablets (Zone 2)</td><td>Supported while kept on a current Windows 11 version</td></tr>
    <tr><td>Xshielder iPad Pro 11-inch (M5)</td><td>No end date published; expected 7–8 years, based on previous iPad Pro support</td></tr>
    <tr><td>iPad mini (A17 Pro) cases and conversions</td><td>Apple’s minimum runs to October 2029</td></tr>
  </tbody>
</table>

<p>Apple releases iPadOS updates directly to supported iPads, so an iPad in a case gets each one on the same day as the same model outside a case. Android makers adapt each release to their own hardware, so major Android versions can arrive later on hazardous-area tablets than on consumer ones.</p>

<p><strong>Verdict:</strong> The winner on management is whatever platform your IT team already runs. On support life, the i.safe MOBILE IS940 tablets, the iPad Pro and Windows 11 IoT Enterprise (if the edition is LTSC 2024) all point to support into the 2030s, while the i.safe MOBILE IS930.1’s Q1 2027 end date is close enough to weigh in any purchase now.</p>

<h2>Cameras, LiDAR and documentation</h2>

<p>Inspection and maintenance teams use the camera more than any other feature. Photos of nameplates, corrosion and leaks go straight into work orders, and video calls let a remote expert see what the technician sees. Whatever the platform, check what works through the case or housing, since the enclosure decides it.</p>

<table>
  <thead>
    <tr><th>Zone 1 tablet</th><th>Rear camera</th><th>Video</th><th>LiDAR</th></tr>
  </thead>
  <tbody>
    <tr><td>Xshielder iPad Pro 11-inch</td><td>12 MP with flash</td><td>4K, ProRes</td><td>Yes</td></tr>
    <tr><td>Atexxo Zone 1 iPad mini 7</td><td>12 MP with flash</td><td>4K</td><td>No</td></tr>
    <tr><td>i.safe MOBILE IS940.1</td><td>50 MP autofocus</td><td>Not in our data</td><td>No</td></tr>
    <tr><td>ecom Tab-Ex 05 DZ1</td><td>13 MP autofocus</td><td>4K at 30 fps</td><td>No</td></tr>
    <tr><td>Atexxo Zone 1 Galaxy Tab Active5</td><td>13 MP autofocus with flash</td><td>4K at 30 fps</td><td>No</td></tr>
    <tr><td>i.safe MOBILE IS945.1 (Windows)</td><td>12 MP autofocus</td><td>Not in our data</td><td>No</td></tr>
    <tr><td>Eaton MTL GECMA IS Tablet PC (Windows)</td><td>8 MP autofocus with flash</td><td>1080p at 30 fps</td><td>No</td></tr>
  </tbody>
</table>

<p>The iPad Pro is the only Zone 1 tablet here with LiDAR, which turns the tablet into a measuring and 3D scanning tool for as-built checks and maintenance planning. Xshielder confirms that the rear camera with 4K ProRes video, LiDAR and the front camera with Face ID all work through its cover. The <a href="/tablets/isafe-is940-1/">i.safe MOBILE IS940.1</a> has the highest megapixel count at 50 MP, which helps when a team crops into a photo of a gauge or label. Several Android and Windows tablets also come in camera-free versions for sites that restrict cameras, as do the Atexxo Zone 1 iPad mini conversions.</p>

<p><strong>Verdict:</strong> The iPad Pro wins for documentation and inspection, with 4K ProRes video and LiDAR confirmed through the cover. The i.safe MOBILE IS940.1 is the Android pick when a high-resolution sensor matters most.</p>

<h2>Screen, performance and weight</h2>

<table>
  <thead>
    <tr><th>Zone 1 tablet</th><th>Screen</th><th>Brightness</th><th>Weight</th></tr>
  </thead>
  <tbody>
    <tr><td>Xshielder iPad Pro 11-inch</td><td>11-inch OLED</td><td>1,000 nits</td><td>1,350 g</td></tr>
    <tr><td>Atexxo Zone 1 iPad mini 7</td><td>8.3-inch</td><td>500 nits</td><td>990 g</td></tr>
    <tr><td>i.safe MOBILE IS940.1 and IS945.1</td><td>10.1-inch</td><td>Not in our data</td><td>1,059 g</td></tr>
    <tr><td>ecom Tab-Ex 05 DZ1</td><td>8-inch</td><td>600 nits</td><td>1,122 g</td></tr>
    <tr><td>Atexxo Zone 1 Galaxy Tab Active5</td><td>8-inch</td><td>600 nits</td><td>940 g</td></tr>
    <tr><td>i.safe MOBILE IS930.1</td><td>8-inch</td><td>Not in our data</td><td>890 g</td></tr>
    <tr><td>Eaton MTL GECMA IS Tablet PC</td><td>10.1-inch</td><td>540 nits</td><td>1,430 g</td></tr>
  </tbody>
</table>

<p>Screen size follows the work. P&amp;IDs, isometrics and long forms are easier on a 10- or 11-inch screen, and an 8-inch tablet is easier to carry up a ladder or hold in one hand. The iPad Pro has the largest and brightest screen among Zone 1 tablets with a brightness figure, and its M5 chip has the most processing headroom for 3D models, large drawings and digital twins. The lightest Zone 1 tablets are 8-inch Android models, led by the <a href="/tablets/isafe-is930-1/">i.safe MOBILE IS930.1</a> at 890 g.</p>

<p><strong>Verdict:</strong> The iPad Pro for screen and processing power. An 8-inch Android tablet when weight matters most.</p>

<h2>Charging, batteries and temperature</h2>

<p>Dedicated tablets are designed around the certificate, and it shows in the practical rules of working in the zone.</p>

<table>
  <thead>
    <tr><th>Zone 1 tablet</th><th>Ambient up to</th><th>Charging in the zone</th><th>User-replaceable battery</th></tr>
  </thead>
  <tbody>
    <tr><td>Xshielder iPad Pro 11-inch</td><td>+45 °C</td><td>Not confirmed</td><td>No</td></tr>
    <tr><td>Atexxo Zone 1 iPad mini 7</td><td>+50 °C</td><td>No</td><td>No</td></tr>
    <tr><td>Atexxo Zone 1 Galaxy Tab Active5</td><td>+50 °C</td><td>No</td><td>Not in our data</td></tr>
    <tr><td>ecom Tab-Ex 05 DZ1</td><td>+55 °C</td><td>No</td><td>No</td></tr>
    <tr><td>i.safe MOBILE IS940.1 and IS945.1</td><td>+55 °C</td><td>Yes, within the certificate’s limits</td><td>Yes, outside the zone</td></tr>
    <tr><td>Eaton MTL GECMA IS Tablet PC</td><td>+55 °C</td><td>No</td><td>No</td></tr>
    <tr><td>i.safe MOBILE IS930.1</td><td>+60 °C</td><td>No</td><td>No</td></tr>
  </tbody>
</table>

<p>The i.safe MOBILE IS940.1 and IS945.1 are the only Zone 1 tablets confirmed for charging inside the hazardous area, through their dock interface, so a tablet can sit on a charger in a control point inside the zone. No current tablet in our data is cleared for a battery change in the zone. In Zone 2, a few Windows and Android tablets from BARTEC, Getac and Winmate add hot swap, which keeps the tablet running while its battery is changed outside.</p>

<p><strong>Verdict:</strong> Dedicated Android and Windows tablets win here, with wider ambient ranges, and charging in the zone on the i.safe MOBILE IS940 and IS945 tablets.</p>

<h2>Ex case on a standard tablet or a dedicated Ex tablet?</h2>

<p>Behind the platform choice sits a second one, between a certified case on a standard tablet and a tablet built for the zone. A case keeps the tablet the same as the ones used outside the zone, with the same apps, hardware as current as the model the case is made for, and updates from the platform maker. The Xshielder cover takes a standard iPad Pro 11-inch (M5), the current model, so the camera, LiDAR, screen and chip are those of the iPad sold today.</p>

<p>A dedicated tablet is certified as one device, and its maker designs the battery, ports and accessories around the certificate. That brings the wider temperature ranges, certified accessory lists and, on some models, charging in the zone. It also means hardware generations last longer, so a dedicated tablet bought late in its cycle may run an older chip than a consumer tablet bought the same year.</p>

<p>Our guide to <a href="/guides/is-ipad-intrinsically-safe/">whether an iPad is intrinsically safe</a> covers the case, conversion and dedicated routes brand by brand.</p>

<h2>Which suits which team</h2>

<h3>Inspection, integrity and maintenance teams</h3>

<p>Teams that document their work with photos, video and measurements get the most from an iPad Pro. The 4K ProRes camera, LiDAR, the 11-inch screen and the iPadOS app catalog suit inspection rounds, as-built checks and remote expert calls. See our <a href="/best/ipad/">best iPads for hazardous areas</a>.</p>

<h3>Engineers who need desktop software</h3>

<p>Windows is the platform for x86 engineering and configuration software. In Zone 1 that means the Eaton or the i.safe MOBILE IS945.1 (with emulation), and in Zone 2 the Intel-based tablets from Getac, Durabook, Winmate, BARTEC and ecom. See our <a href="/best/windows-tablets/">best Windows tablets for hazardous areas</a>.</p>

<h3>Fleets built on Android Enterprise</h3>

<p>Companies with Android phones and an Android Enterprise or Knox setup can add intrinsically safe or explosion-proof Android tablets with little extra work. The ecom Tab-Ex 05 DZ1 and the i.safe MOBILE IS940.1 lead the Zone 1 range. See our <a href="/best/android-tablets/">best Android tablets for hazardous areas</a>.</p>

<h3>Sites that need Zone 0 or Division 1</h3>

<p>Zone 0 points to the Eaton, inside its supplied case, and North American Division 1 sites need a Division 1 listing, which only dedicated Android and Windows tablets hold in our data.</p>

<h3>Long shifts with no time to leave the zone</h3>

<p>Where crews can’t walk out to charge, the i.safe MOBILE IS940.1 (Android) and IS945.1 (Windows) may be charged on a dock inside the zone, within their certificates’ limits.</p>
`,
  cta: {
    kind: 'neutral',
    heading: 'Compare tablets on the platform you run',
    html:
      'Once the platform is settled, the certificate and the work decide the tablet. <a href="/tablets/">Find tablets</a> filters every certified iPad option, Android tablet and Windows tablet in our database by zone, gas group, temperature class and features such as LiDAR, charging in the zone or a built-in barcode scanner.',
  },
  faq: [
    {
      q: 'Is there an intrinsically safe Windows tablet for Zone 1?',
      a: 'Yes, the Eaton MTL GECMA IS Tablet PC and the i.safe MOBILE IS945.1 are intrinsically safe Windows tablets certified for Zone 1. The Eaton runs x86 software natively, and the IS945.1 runs it through emulation on an Arm processor.',
    },
    {
      q: 'Can intrinsically safe Android tablets be managed with Android Enterprise?',
      a: 'Intrinsically safe Android tablets run standard Android, so they work with the same device management tools as other Android devices. ecom lists the Tab-Ex 05 as Android Enterprise Recommended, with Samsung Knox.',
    },
    {
      q: 'How long do intrinsically safe Android tablets get security updates?',
      a: 'Intrinsically safe Android tablets get security updates until the date their maker states, for example Q4 2032 for the i.safe MOBILE IS940.1 and Q1 2027 for the i.safe MOBILE IS930.1.',
    },
    {
      q: 'Do the cameras and Face ID work on an iPad in a Zone 1 case?',
      a: 'On the Xshielder iPad Pro 11-inch, Xshielder confirms that the rear camera, LiDAR, the front camera and Face ID all work through the Zone 1 cover. Other Zone 1 iPad options differ, and some conversions remove Touch ID, so check each product’s list.',
    },
    {
      q: 'Can x86 Windows software run on an intrinsically safe Windows on Arm tablet?',
      a: 'x86 Windows software runs on an intrinsically safe Windows on Arm tablet such as the i.safe MOBILE IS945.1 through Microsoft’s emulation. Test critical applications first, or choose an Intel-based tablet such as the Eaton MTL GECMA IS Tablet PC for native x86 support.',
    },
    {
      q: 'Is an iPad or an Android tablet better for hazardous-area inspections?',
      a: 'For hazardous-area inspections, an iPad Pro in a Zone 1 case has the edge on documentation, with 4K ProRes video and LiDAR, while Android tablets offer more North American Division 1 options and, on some i.safe MOBILE models, charging in the zone.',
    },
  ],
};

export default page;
