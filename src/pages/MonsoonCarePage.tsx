import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { TableOfContents } from '../components/TableOfContents';
import { RelatedArticles } from '../components/RelatedArticles';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { ShareButtons } from '../components/ShareButtons';
import {
  Calendar,
  Clock,
  User,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Droplets,
  Wrench,
  CheckCircle2,
} from 'lucide-react';

export const MonsoonCarePage: React.FC = () => {
  const currentPath = '/monsoon-car-care-tips';

  const tocItems = [
    {
      id: 'why-extra-care-needed',
      title: 'Why Does Your Car Need Extra Care in the Monsoon?',
    },
    {
      id: 'check-tyres-and-brakes',
      title: 'How Do You Check Tyres and Brakes for the Rainy Season?',
    },
    {
      id: 'replace-wipers-lights',
      title: 'When Should You Replace Wipers and Check Lights?',
    },
    {
      id: 'how-to-protect-car-in-rain',
      title: 'How to Protect Car in Rain From Rust and Paint Damage?',
    },
    {
      id: 'is-it-safe-waterlogged-roads',
      title: 'Is It Safe to Drive Through Waterlogged Roads?',
    },
    {
      id: 'what-to-do-flooded-car',
      title: 'What Should You Do If Your Car Gets Flooded?',
    },
    {
      id: 'insurance-monsoon-damage',
      title: 'Does Car Insurance Cover Monsoon Damage?',
    },
    {
      id: 'rainy-season-checklist-table',
      title: 'Car Maintenance in Rainy Season: Monthly Checklist',
    },
    {
      id: 'faqs',
      title: 'Frequently Asked Questions',
    },
  ];

  const faqData = [
    {
      q: 'Why should I never crank the engine if my car stalls in deep standing water?',
      a: 'Attempting to restart an engine stalled in deep water forces water through the air intake directly into combustion cylinders, causing immediate hydrostatic lock that bends connecting rods and completely destroys the engine block.',
    },
    {
      q: 'What is the minimum safe tyre tread depth for Indian monsoon highway driving?',
      a: 'You should maintain at least 2.5 to 3.0 millimetres of tyre tread depth during the rainy season to effectively disperse standing rainwater and prevent dangerous aquaplaning at speeds over 60 km/h.',
    },
    {
      q: 'Does comprehensive car insurance automatically pay for water-damaged engines?',
      a: 'No, standard comprehensive motor insurance excludes engine damage caused by water ingress under the consequential loss clause; you must have an Engine and Gearbox Protection add-on cover to receive a full claim settlement.',
    },
    {
      q: 'How frequently should windshield wiper blades be replaced in India?',
      a: 'Wiper blades should be replaced once every year right before the arrival of the south-west monsoon, as extreme summer heat hardens and cracks the natural rubber squeegees, leading to windshield streaking.',
    },
    {
      q: 'Is anti-rust underbody coating worth the investment for Indian cars?',
      a: 'Yes, bituminous or rubberized underbody coatings prevent corrosive road sludge, stagnant rainwater, and municipal salts from rusting the exposed floor pan, chassis cross-members, and silencer exhaust pipes.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Monsoon Car Care Tips: 12 Ways to Protect Your Car',
      description:
        'Monsoon car care tips to protect your car in the rain: tyres, wipers, brakes, rust prevention and more. Keep your car safe this season. Read now!',
      image:
        'https://drivesmart-india.vercel.app/images/monsoon-car-care-tips.webp',
      author: {
        '@type': 'Organization',
        name: 'DriveSmart Team',
        url: 'https://drivesmart-india.vercel.app/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'DriveSmart India',
        url: 'https://drivesmart-india.vercel.app/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://drivesmart-india.vercel.app/images/car-buying-guide-india-hero.webp',
        },
      },
      datePublished: '2026-10-12',
      dateModified: '2026-10-12',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://drivesmart-india.vercel.app/monsoon-car-care-tips-rainy-season-protection',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://drivesmart-india.vercel.app/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Monsoon Car Care Tips',
          item: 'https://drivesmart-india.vercel.app/monsoon-car-care-tips-rainy-season-protection',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title="Monsoon Car Care Tips: Rainy Season Guide | DriveSmart"
        description="Monsoon car care tips to protect your car in the rain: tyres, wipers, brakes, rust prevention and more. Keep your car safe this season. Read now!"
        canonicalUrl="https://drivesmart-india.vercel.app/monsoon-car-care-tips-rainy-season-protection"
        ogImage="https://drivesmart-india.vercel.app/images/monsoon-car-care-tips.webp"
        type="article"
        schema={schema}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#FF6B1A] transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-medium">
                Monsoon Car Care Tips
              </span>
            </li>
          </ol>
        </nav>

        {/* H1 Heading */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight leading-tight mb-4">
            Monsoon Car Care Tips: 12 Ways to Protect Your Car This Rainy Season
          </h1>

          {/* Meta Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 pb-4 border-b border-slate-200">
            <span className="flex items-center gap-1.5 font-medium text-slate-900">
              <User className="w-4 h-4 text-[#FF6B1A]" />
              <span>DriveSmart Team</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Updated: October 2026</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>8 min read</span>
            </span>
            <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              Seasonal Readiness Guide
            </span>
          </div>

          {/* Social Share Buttons */}
          <ShareButtons
            title="Monsoon Car Care Tips: 12 Ways to Protect Your Car"
            url="/monsoon-car-care-tips"
          />
        </header>

        {/* Featured Image */}
        <SmartImage
          src="/images/monsoon-car-care-tips.webp"
          alt="Car windshield wipers clearing heavy rain on wet asphalt road during monsoon downpours"
          width={1200}
          height={630}
          loading="eager"
          caption="Practical seasonal safeguards to protect wiper blades, underbody coating, and mechanical components during downpours."
        />

        {/* First 100 Words with Main Keyword */}
        <div className="text-lg text-slate-700 leading-relaxed font-normal mb-8">
          The arrival of the Indian rainy season brings cool relief from harsh summer heat, but torrential downpours, flash floods, and inundated roads pose immense hazards to automobiles. Practicing proactive <strong>monsoon car care tips</strong> is essential to prevent catastrophic engine failure, rust corrosion, electrical short circuits, and dangerous highway aquaplaning. In this manual, our automotive experts share twelve crucial techniques to safeguard your vehicle throughout heavy Indian monsoons.
        </div>

        {/* Table of Contents */}
        <TableOfContents items={tocItems} />

        {/* Article Body - max-w ~ 750px */}
        <div className="max-w-[750px] mx-auto space-y-12 text-slate-800 text-[16px] sm:text-[17px] leading-[1.8]">
          {/* Section 1 */}
          <section id="why-extra-care-needed" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Why Does Your Car Need Extra Care in the Monsoon?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Your car needs extra care in the monsoon because torrential rain, acidic moisture, and road mud rapidly accelerate metallic rust, compromise braking friction, reduce tyre road traction by up to forty percent, and create fatal risks of water entering low-mounted engine air intakes.
            </p>
            <p>
              During Indian monsoons, city streets in Mumbai, Chennai, Kolkata, and Gurugram transform into fast-flowing canals within minutes of a cloudburst. Stagnant rainwater collects dirt, oil spills, and drainage runoff, forming an acidic cocktail that clings to vehicle undercarriages, suspension linkages, and brake discs.
            </p>
            <p>
              Furthermore, wet asphalt dramatically increases stopping distances. A car travelling at 80 km/h that stops within 32 metres on dry tarmac can require more than 48 metres to halt safely on soaked highway surfaces. Neglecting periodic maintenance during these wet months directly imperils both your financial investment and your family's physical safety.
            </p>
          </section>

          {/* Section 2: Tips 1-3 */}
          <section id="check-tyres-and-brakes" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              How Do You Check Tyres and Brakes for the Rainy Season?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              To check tyres and brakes for the rainy season, measure tyre tread depth to verify it exceeds 2.5 mm, inspect brake pads for at least 4 mm thickness, and ensure brake fluid is clear of moisture contamination. Healthy tyre channels actively channel standing water outward to stop aquaplaning.
            </p>

            <div className="space-y-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 1: Inspect Tyre Tread Depth and Tread Wear Indicators (TWIs)
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Tyres rely on deep directional circumferential grooves to siphon puddles away from the contact patch. If your tread is worn down below 2.0 mm, the tyre cannot evacuate water quickly enough, causing the vehicle to ride on a thin sheet of water (hydroplaning), causing complete loss of steering control. Conduct the classic Indian one-rupee coin test: insert the coin into the tread groove; if the outer ring of the coin remains completely visible, replace the tyres immediately.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 2: Maintain Correct Cold Tyre Pressure
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Contrary to a widespread Indian myth that lowering tyre pressure improves wet grip, under-inflated tyres actually buckle inward at the center of the tread, reducing contact pressure and exacerbating aquaplaning. Maintain the exact manufacturer-recommended PSI listed on the driver door jamb sticker.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 3: Service Brake Calipers and Flush Moisture-Contaminated Brake Fluid
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Brake fluid (DOT 3 and DOT 4) is hygroscopic, meaning it actively absorbs atmospheric humidity. High monsoon humidity degrades fluid boiling points, causing spongy brake pedals and severe brake fade under emergency stops. Have a qualified technician inspect brake pad friction material and lubricate caliper slider pins.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Tips 4-5 */}
          <section id="replace-wipers-lights" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              When Should You Replace Wipers and Check Lights?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Replace windshield wiper blades immediately if they squeak, chatter, or leave hazy streaks across glass, and inspect all exterior lighting before the monsoon starts. Indian summer heat hardens silicone and natural rubber squeegees, while high humidity can cause electrical condensation inside fog lamp housings.
            </p>

            <div className="space-y-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 4: Fit Fresh Frameless Wiper Blades and Fill Washer Fluid
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  A fresh set of aerodynamic frameless wiper blades costs between ₹400 and ₹1,200 and restores crystal-clear forward visibility during monsoon cloudbursts. Add an anti-foaming windshield washer fluid additive containing detergent to cut through greasy road spray thrown up by trucks. Never use household dishwashing liquids, which harden rubber squeegees and clog delicate washer spray nozzles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 5: Verify All Headlamps, Taillamps, and Fog Lights
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  In heavy rain, daytime visibility plummets to under 50 metres. Turn on low-beam headlights and amber fog lamps so other motorists can spot your car from a distance. Never switch on hazard warning lights while driving through rain; hazard flashers must be reserved strictly for stationary breakdowns. Using hazards while moving confuses trailing drivers and prevents you from indicating directional turns.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Tips 6-8 */}
          <section id="how-to-protect-car-in-rain" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              How to Protect Car in Rain From Rust and Paint Damage?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              To learn how to protect car in rain from corrosion, apply an anti-rust underbody coating, coat the exterior paint in high-grade synthetic sealant wax, clear leaf debris from door drainage holes, and switch carpet mats to thick rubberised deep-dish floor trays that block mildew.
            </p>

            <div className="space-y-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 6: Apply Underbody Anti-Rust Protection Coating
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  The underside of your car bears the brunt of mud, flying gravel, and stagnant water. A professional rubberised or bitumen underbody coating (offered by 3M, Dinitrol, or authorised service centres for ₹2,500 to ₹5,000) provides a tough chemical shield preventing oxidisation on floor pans and structural chassis members.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 7: Wax Paintwork with Hydrophobic Ceramic or Polymer Sealants
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Understanding how to protect car in rain involves safeguarding clear coats. Acidic rainwater and atmospheric pollutants eat away at clear-coat lacquers, leaving stubborn water spots. Applying a quality polymer synthetic sealant or ceramic detailer before June creates a hydrophobic barrier, making raindrops bead and glide off exterior panels effortlessly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 8: Clear Debris From Sunroof Channels and Door Sills
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Every modern vehicle has tiny water drainage channels running through the windshield cowl, sunroof cassettes, and bottom door seals. In India, dried leaves, neem blossoms, and windblown dust accumulate in these channels during summer. When heavy rains hit, clogged channels overflow directly into cabin carpets and headliners, causing electrical shortages and foul-smelling mould. Clean these weep holes using compressed air or flexible nylon lines.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Tips 9-10 */}
          <section id="is-it-safe-waterlogged-roads" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Is It Safe to Drive Through Waterlogged Roads?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              It is not safe to drive through waterlogged roads if the water level exceeds the midpoint of your vehicle wheels or covers the exhaust tip. If you must proceed through moderate standing water, select first gear, maintain continuous accelerator pressure, and crawl steadily to prevent exhaust backflow.
            </p>

            <div className="space-y-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 9: Assess Water Depth Against Surrounding Landmarks
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Before driving into a flooded underpass or urban intersection, halt and watch leading traffic. If water rises above the wheel rims of an autorickshaw or reaches the bottom door cladding of an SUV ahead, turn around and find an alternate detour. Open stormwater drains and missing manhole covers represent hidden death traps beneath murky floodwaters. Consult live flood warnings issued by the{' '}
                  <a
                    href="https://mausam.imd.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
                  >
                    <span>India Meteorological Department (IMD)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>{' '}
                  before undertaking long journeys during monsoon red alerts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-base mb-1">
                  Tip 10: Hold Constant Engine RPM and Never Shift Gears in Water
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  If the water depth is within safe limits (below wheel hub center), engage first gear in a manual or manual mode in an automatic. Keep your engine RPM steadily elevated around 2,000 to 2,500 RPM while gently modulating speed via the clutch or brake. This continuous exhaust pressure prevents water from being sucked back into the exhaust tailpipe. Never lift off the accelerator suddenly in deep puddles.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Tip 11 */}
          <section id="what-to-do-flooded-car" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              What Should You Do If Your Car Gets Flooded?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              If your car stalls in standing water, do not crank the engine under any circumstance. Cranking a flooded engine induces hydrostatic lock, which bends pistons and cracks engine cylinder blocks. Instead, turn off the ignition, disembark safely, push the car to higher ground, and contact flatbed towing.
            </p>
            <p>
              Understanding why you must <strong>not crank the engine</strong> is basic physics: internal combustion engines compress air and fuel vapor, which are compressible gases. Liquid water, however, is non-compressible. If water enters the combustion chamber through the air intake snorkel and the starter motor forces the piston upward, the water stops the piston violently, destroying connecting rods and engine casings in a fraction of a second.
            </p>
            <p>
              Disconnect the negative terminal of your vehicle battery if safe to do so. This stops short circuits from frying sophisticated Electronic Control Units (ECUs), airbag sensors, and digital infotainment clusters submerged in floor carpets.
            </p>
          </section>

          {/* Section 7: Tip 12 */}
          <section id="insurance-monsoon-damage" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Does Car Insurance Cover Monsoon Damage?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Standard comprehensive car insurance does not cover engine damage from water intake unless you have purchased an Engine and Gearbox Protection add-on. Hydrostatic lock is classified as consequential damage under standard policies, meaning claims will be rejected without specific rider endorsements.
            </p>
            <p>
              Insurance companies in India treat hydrostatic lock as driver negligence because the vehicle was cranked while submerged. Adding an Engine Protection Cover costs just ₹1,500 to ₹3,500 per year, but saves you between ₹1.5 Lakh and ₹4.5 Lakh in major engine rebuild expenses.
            </p>
            <p>
              Additionally, ensure your policy includes 24x7 Roadside Assistance with unlimited flatbed towing. During monsoon floods, normal winching can damage automatic gearboxes and low bumpers; flatbed transport ensures zero additional transit harm.
            </p>
            <p>
              If you are currently researching new vehicles or reviewing insurance add-ons for your upcoming purchase, refer back to our{' '}
              <Link
                to="/first-car-buying-guide-india-step-by-step"
                className="font-bold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                complete first car buying guide
              </Link>
              , which breaks down insurance riders line by line.
            </p>
          </section>

          {/* Checklist Table */}
          <section id="rainy-season-checklist-table" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Car Maintenance in Rainy Season: Monthly Checklist
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              Follow this structured timetable for car maintenance in rainy season to maintain peak mechanical health and passenger safety across all monsoon months.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Inspection Area</th>
                    <th className="p-3.5 font-bold">Recommended Action</th>
                    <th className="p-3.5 font-bold">Frequency</th>
                    <th className="p-3.5 font-bold">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Tyres & Tread Depth</td>
                    <td className="p-3.5">Measure tread &gt; 2.5mm, verify cold PSI and spare wheel</td>
                    <td className="p-3.5">Every 15 Days</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Free (DIY)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Wipers & Washer Fluid</td>
                    <td className="p-3.5">Replace streak-prone blades, top up hydrophobic washer soap</td>
                    <td className="p-3.5">Pre-Monsoon & Monthly</td>
                    <td className="p-3.5">₹400 – ₹1,200</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Braking System</td>
                    <td className="p-3.5">Inspect pad thickness, test pedal firmness, clean rotor discs</td>
                    <td className="p-3.5">Monthly</td>
                    <td className="p-3.5">₹500 – ₹1,500</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Underbody Anti-Rust</td>
                    <td className="p-3.5">Inspect coating integrity, wash mud sludge off wheel wells</td>
                    <td className="p-3.5">Once per Season</td>
                    <td className="p-3.5">₹2,500 – ₹4,500</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Cabin Drainage & Seals</td>
                    <td className="p-3.5">Unclog sunroof drains, apply silicone spray on door rubbers</td>
                    <td className="p-3.5">Bi-Monthly</td>
                    <td className="p-3.5">₹300 – ₹800</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Electrical & Battery</td>
                    <td className="p-3.5">Coat battery terminals with petroleum jelly, test alternator output</td>
                    <td className="p-3.5">Monthly</td>
                    <td className="p-3.5">₹200 – ₹500</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              Prices and costs vary by city and model; check with your dealer.
            </p>
          </section>

          {/* Fuel options context in wet conditions */}
          <section className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-900 text-base mb-2">
              Powertrain Safety: EVs vs Combustion Cars in Waterlogging
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-3">
              Did you know that electric vehicles are exceptionally well-sealed against standing water? Modern EV battery packs and motors carry stringent IP67 and IP68 waterproof ratings, completely eliminating the danger of hydrostatic engine lock that threatens petrol and diesel cars. To learn more about modern powertrain distinctions, explore our comprehensive{' '}
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                className="font-bold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                petrol vs diesel vs CNG vs EV comparison
              </Link>
              .
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-slate-100 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Wrapping Up Your Monsoon Vehicle Protection
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              In conclusion, implementing these proven <strong>monsoon car care tips</strong> guarantees that your automobile survives heavy Indian downpours without unexpected breakdowns or expensive workshop overhauls. Keep your tyres well-grooved, replace worn wipers early, protect your chassis against rust, and remember the golden rule: never crank a stalled vehicle in standing floodwaters.
            </p>
            <p className="text-xs text-slate-500 italic">
              Prices and costs vary by city and model; check with your dealer.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faqs" className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF6B1A]" />
              <h2 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles Component */}
          <RelatedArticles currentPath={currentPath} />
        </div>
      </article>
    </>
  );
};
