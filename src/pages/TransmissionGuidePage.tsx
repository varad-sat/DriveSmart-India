import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { TableOfContents } from '../components/TableOfContents';
import { RelatedArticles } from '../components/RelatedArticles';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { ShareButtons } from '../components/ShareButtons';
import {
  Cog,
  HelpCircle,
  ChevronRight,
  User,
  Calendar,
  Clock,
  Car,
  Fuel,
  ArrowRight,
} from 'lucide-react';

export const TransmissionGuidePage: React.FC = () => {
  const tocItems = [
    { id: 'manual-vs-automatic', title: 'Manual vs Automatic: Which Is Better for Indian Roads?' },
    { id: 'amt-transmission', title: 'What Is an AMT (Automated Manual Transmission)?' },
    { id: 'cvt-transmission', title: 'How Does a CVT (Continuous Variable Transmission) Work?' },
    { id: 'torque-converter', title: 'Why Is a Torque Converter the Most Reliable Automatic?' },
    { id: 'dct-transmission', title: 'What Are the Pros and Cons of a Dual-Clutch (DCT/DSG)?' },
    { id: 'mileage-comparison', title: 'Do Automatic Cars Give Lower Mileage in India?' },
    { id: 'gearbox-comparison-table', title: 'Automatic Gearbox Comparison Table' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const faqData = [
    {
      q: 'Which automatic transmission is best for heavy city traffic in India?',
      a: 'Torque Converter and CVT automatics are best for stop-and-go city traffic due to their fluid-smooth crawling ability and lack of clutch jerk, whereas AMT transmissions can feel jerky between first and second gears.',
    },
    {
      q: 'Do automatic cars cost more to maintain than manual cars in India?',
      a: 'Yes. Automatic cars carry a ₹60,000 to ₹1.5 Lakh higher purchase premium. Dual-clutch (DCT/DSG) gearboxes require specialized transmission fluid renewals and expensive clutch-pack replacements if overheated in bumper-to-bumper crawls.',
    },
    {
      q: 'Can an automatic car match manual car fuel economy in India?',
      a: 'Modern CVTs and AMTs closely match or even exceed manual mileage by maintaining optimal engine revs. High-performance DCTs also deliver swift shifts with minimal fuel waste, while conventional torque converters consume 5% to 10% more fuel in urban conditions.',
    },
    {
      q: 'Why do dual-clutch (DCT) gearboxes overheat in Indian summer traffic?',
      a: 'Dual-clutch transmissions use dry clutch friction plates that slip continuously in slow creeping traffic under 10 km/h, generating extreme heat in 40°C Indian summers. Drivers should use neutral (N) at traffic signals rather than riding the brakes in drive (D).',
    },
    {
      q: 'Which automatic gearbox has the lowest long-term failure rate in India?',
      a: 'Conventional Torque Converters (AT) have the lowest failure rate because their hydraulic planetary gear mechanism has no friction clutch wear plates, ensuring trouble-free lifespans well beyond 1.5 lakh kilometres.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter',
      description:
        'Comprehensive guide comparing manual and automatic transmissions in India: AMT, CVT, DCT, and Torque Converter reliability, mileage, and traffic convenience.',
      image: 'https://drivesmart-india.vercel.app/images/manual-vs-automatic-cars-india.webp',
      author: {
        '@type': 'Organization',
        name: 'DriveSmart Team',
        url: 'https://drivesmart-india.vercel.app/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'DriveSmart India',
        url: 'https://drivesmart-india.vercel.app/',
      },
      datePublished: '2026-10-12',
      dateModified: '2026-10-12',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://drivesmart-india.vercel.app/manual-vs-automatic-cars-india',
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
          name: 'Manual vs Automatic Cars in India',
          item: 'https://drivesmart-india.vercel.app/manual-vs-automatic-cars-india',
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
        title="Manual vs Automatic Cars in India: Transmission Guide"
        description="Manual vs automatic cars in India: compare AMT, CVT, DCT, and Torque Converter gearboxes for mileage, maintenance, city ease, and reliability."
        canonicalUrl="https://drivesmart-india.vercel.app/manual-vs-automatic-cars-india"
        ogImage="https://drivesmart-india.vercel.app/images/manual-vs-automatic-cars-india.webp"
        type="article"
        schema={schema}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <nav aria-label="Breadcrumbs" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#FF6B1A] transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Manual vs Automatic Cars in India
              </span>
            </li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight mb-4">
            Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-white">
              <User className="w-4 h-4 text-[#FF6B1A]" />
              <span>DriveSmart Team</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Updated: October 2026</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>9 min read</span>
            </span>
            <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              Drivetrain Technical Comparison
            </span>
          </div>

          <ShareButtons
            title="Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter"
            url="/manual-vs-automatic-cars-india"
          />
        </header>

        <SmartImage
          src="/images/manual-vs-automatic-cars-india.webp"
          alt="Modern car interior showing automatic transmission gear selector and center console"
          width={1200}
          height={630}
          loading="eager"
          caption="Evaluating clutchless driving convenience, gearbox shift logic, and running mileage across distinct transmission types."
        />

        <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-8">
          With Indian metropolitan traffic growing more congested each year, the debate over <strong>manual vs automatic cars in India</strong> has evolved. Once dismissed as gas-guzzlers with expensive servicing, modern automatic transmissions have become mainstream. However, choosing between an AMT, CVT, DCT, or Torque Converter requires understanding their real-world trade-offs in city crawls and highway overtakes.
        </div>

        <TableOfContents items={tocItems} />

        <div className="max-w-[750px] mx-auto space-y-12 text-slate-800 dark:text-slate-200 text-[16px] sm:text-[17px] leading-[1.8]">
          {/* Section 1 */}
          <section id="manual-vs-automatic" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Manual vs Automatic: Which Is Better for Indian Roads?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Automatic cars are far better for Indian urban commuters who drive more than thirty minutes daily in congested traffic, eliminating painful left-knee clutch fatigue. Manual cars remain superior for budget buyers seeking maximum mechanical simplicity, ₹60,000 to ₹1.5 Lakh lower upfront purchase prices, and cheaper clutch maintenance.
            </p>
            <p>
              In cities like Bengaluru, Mumbai, and Delhi, drivers depress the clutch pedal up to 500 times in a single 15-kilometre commute. An automatic transmission completely relieves this physical burden, allowing you to focus on lane discipline and hazard awareness.
            </p>
            <p>
              Before settling on a gearbox type, check our detailed{' '}
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                className="font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                petrol vs diesel vs CNG vs EV comparison
              </Link>{' '}
              to match your transmission choice with the right fuel economy profile.
            </p>
          </section>

          {/* Section 2 */}
          <section id="amt-transmission" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              What Is an AMT (Automated Manual Transmission)?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              An AMT (Automated Manual Transmission) is a regular manual gearbox fitted with hydraulic or electromechanical actuators that automatically operate the clutch and change gears. It offers near-identical fuel efficiency to a manual car with the lowest automatic price premium of approximately ₹50,000 to ₹65,000.
            </p>
            <p>
              Popularized by Maruti Suzuki (as AGS - Auto Gear Shift) and Tata Motors, AMTs are the most affordable two-pedal option in India. However, AMTs suffer from a noticeable &ldquo;head-nod&rdquo; hesitation during gear shifts, especially when accelerating briskly.
            </p>
          </section>

          {/* Section 3 */}
          <section id="cvt-transmission" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How Does a CVT (Continuous Variable Transmission) Work?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              A CVT (Continuously Variable Transmission) uses two variable-diameter pulleys connected by a steel belt instead of fixed toothed gears, delivering infinitely variable ratios with seamless shift-shock-free acceleration. It is exceptionally smooth and fuel-efficient in urban driving.
            </p>
            <p>
              The defining advantage of a CVT (found in Honda, Nissan, and Toyota cars) is linear, elastic progression. There are no discrete gear shifts, so passengers feel zero jerkiness. The main drawback is the &ldquo;rubber-band effect&rdquo; on sudden highway overtakes, where the engine revs high before vehicular speed catches up.
            </p>
          </section>

          {/* Section 4 */}
          <section id="torque-converter" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Why Is a Torque Converter the Most Reliable Automatic?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              A Torque Converter is the most reliable automatic because it transfers engine power using hydraulic transmission fluid rather than physical friction clutches. This fluid coupling eliminates mechanical wear during slow crawling and mountain hill starts, giving it unmatched durability in Indian conditions.
            </p>
            <p>
              Modern 6-speed and 8-speed torque converters (found in Mahindra SUVs, Hyundai, Kia, and Skoda models) lock up their torque converters at cruising speeds, achieving fuel economy remarkably close to manual gearboxes while retaining effortless low-speed creeping.
            </p>
          </section>

          {/* Section 5 */}
          <section id="dct-transmission" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              What Are the Pros and Cons of a Dual-Clutch (DCT/DSG)?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              The primary pro of a Dual-Clutch (DCT/DSG) transmission is lightning-fast gear changes in milliseconds with instantaneous power delivery and high mechanical efficiency. The major con is susceptibility to clutch overheating in stop-and-go 40°C Indian city traffic, leading to expensive long-term repair costs.
            </p>
            <p>
              Enthusiast drivers love DCTs for their crisp paddle-shift responsiveness. However, Indian drivers must practice disciplined habits: never hold the vehicle stationary on steep inclines using the accelerator, and shift into Neutral at red lights rather than holding the brakes in Drive for extended minutes.
            </p>
          </section>

          {/* Section 6 */}
          <section id="mileage-comparison" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Do Automatic Cars Give Lower Mileage in India?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Modern automatic cars in India typically yield within five to ten percent of manual fuel efficiency. While older 4-speed automatics suffered heavy fuel penalties, contemporary AMTs, CVTs, and multi-speed torque converters optimize engine RPMs efficiently, often beating aggressive human manual drivers in real-world commuting.
            </p>
            <p>
              To calculate exact fuel savings and per-kilometre operational expenses across transmissions, check our free{' '}
              <Link
                to="/tools/car-fuel-cost-calculator-india"
                className="font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                fuel running cost calculator
              </Link>{' '}
              to forecast your monthly budget.
            </p>
          </section>

          {/* Section 7: Comparison Table */}
          <section id="gearbox-comparison-table" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Automatic Gearbox Comparison Table
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Gearbox Type</th>
                    <th className="p-3.5 font-bold">Shift Smoothness</th>
                    <th className="p-3.5 font-bold">Fuel Efficiency</th>
                    <th className="p-3.5 font-bold">Long-Term Reliability</th>
                    <th className="p-3.5 font-bold">Price Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">AMT (AGS)</td>
                    <td className="p-3.5 text-amber-600 font-semibold">Average (Shift lag)</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Excellent (Matches manual)</td>
                    <td className="p-3.5 font-medium">Good (Cheap to repair)</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">₹50,000 – ₹65,000</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">CVT</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Flawless (No gear steps)</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">Very Good in City</td>
                    <td className="p-3.5 font-medium">High (Avoid heavy towing)</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">₹1.0L – ₹1.3L</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Torque Converter (AT)</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">Very Smooth</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-300">Moderate to Good</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Best in India (Bulletproof)</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">₹1.1L – ₹1.6L</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">DCT / DSG</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Instant & Sporty</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">High on Highways</td>
                    <td className="p-3.5 text-rose-600 font-semibold">Needs Traffic Discipline</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">₹1.2L – ₹1.8L</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8: FAQ */}
          <section id="faq" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF6B1A]" />
              <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
                Frequently Asked Questions About Indian Car Transmissions
              </h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <RelatedArticles currentPath="/manual-vs-automatic-cars-india" />
        </div>
      </article>
    </>
  );
};
