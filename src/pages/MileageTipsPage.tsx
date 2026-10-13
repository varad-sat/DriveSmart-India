import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { TableOfContents } from '../components/TableOfContents';
import { RelatedArticles } from '../components/RelatedArticles';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { ShareButtons } from '../components/ShareButtons';
import {
  Gauge,
  HelpCircle,
  ChevronRight,
  User,
  Calendar,
  Clock,
  Fuel,
  CheckCircle,
  Zap,
} from 'lucide-react';

export const MileageTipsPage: React.FC = () => {
  const tocItems = [
    { id: 'why-mileage-drops', title: 'Why Does Real-World Car Mileage Drop in India?' },
    { id: 'tyre-pressure-impact', title: 'How Much Does Tyre Pressure Affect Fuel Economy?' },
    { id: 'ac-vs-windows', title: 'Should You Drive with AC On or Windows Down?' },
    { id: 'driving-habits', title: 'What Driving Habits Maximize Mileage in Traffic?' },
    { id: 'air-filter-maintenance', title: 'How Does Air Filter Cleaning Improve Mileage?' },
    { id: 'idling-fuel-waste', title: 'How Much Fuel Is Wasted Idling at Indian Traffic Lights?' },
    { id: 'tips-checklist-table', title: '10 Mileage Boosting Techniques Summary Table' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const faqData = [
    {
      q: 'Does driving above 100 km/h reduce car fuel economy significantly?',
      a: 'Yes. Aerodynamic drag increases quadratically with speed. Driving at 110–120 km/h on expressways burns 20% to 25% more fuel than maintaining an optimal cruising speed of 80–90 km/h in top gear.',
    },
    {
      q: 'How often should tyre pressure be checked in Indian weather conditions?',
      a: 'Check tyre pressure every two weeks or before every long highway trip when the tyres are cold (driven less than 2 km). An under-inflated tyre by just 4 PSI increases rolling resistance and drops fuel economy by 5%.',
    },
    {
      q: 'Does using premium high-octane petrol increase mileage in ordinary commuter cars?',
      a: 'No. Unless your vehicle specifically requires 95-octane fuel (like high-compression turbo-petrol engines), standard 91-octane petrol delivers identical mileage. Premium fuels contain extra detergents but do not increase energy content.',
    },
    {
      q: 'Can synthetic engine oil improve fuel efficiency in India?',
      a: 'Yes. Fully synthetic motor oils with lower cold viscosity (such as 0W-20 or 5W-30) reduce internal hydrodynamic drag and friction during cold morning starts, boosting fuel efficiency by 1.5% to 3%.',
    },
    {
      q: 'Does driving in neutral down hill slopes save fuel in modern cars?',
      a: 'No. Rolling in neutral is dangerous and does not save fuel. Modern electronic fuel injection (EFI) engines cut fuel delivery to zero when coasting in gear with throttle released, whereas idling in neutral continues to consume fuel.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy',
      description:
        'Actionable guide on how to increase car mileage in India: tyre pressures, AC usage vs drag, expressway cruising speeds, and idling reduction techniques.',
      image: 'https://drivesmart-india.vercel.app/images/car-mileage-tips-india.webp',
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
        '@id': 'https://drivesmart-india.vercel.app/car-mileage-tips-india',
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
          name: 'Car Mileage Tips India',
          item: 'https://drivesmart-india.vercel.app/car-mileage-tips-india',
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
        title="Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy"
        description="Learn how to increase car mileage in India: practical tips for tyre pressure, AC usage, highway cruising speeds, and stop-and-go city driving."
        canonicalUrl="https://drivesmart-india.vercel.app/car-mileage-tips-india"
        ogImage="https://drivesmart-india.vercel.app/images/car-mileage-tips-india.webp"
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
                Car Mileage Tips India
              </span>
            </li>
          </ol>
        </nav>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight mb-4">
            Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy
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
              <span>8 min read</span>
            </span>
            <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Fuel Efficiency Masterclass
            </span>
          </div>

          <ShareButtons
            title="Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy"
            url="/car-mileage-tips-india"
          />
        </header>

        <SmartImage
          src="/images/car-mileage-tips-india.webp"
          alt="Modern car digital dashboard and speedometer cruising on the expressway"
          width={1200}
          height={630}
          loading="eager"
          caption="Unlocking double-digit percentage fuel savings through optimal expressway cruising speeds and steady throttle habits."
        />

        <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-8">
          With petrol touching ₹100+ per litre across most Indian states, mastering practical <strong>car mileage tips India</strong> can save motorists between ₹15,000 and ₹30,000 in annual fuel bills. Many car owners blame manufacturer ARAI lab claims when real-world efficiency drops, but simple driving modifications and basic vehicle checks can quickly restore peak kilometers per litre.
        </div>

        <TableOfContents items={tocItems} />

        <div className="max-w-[750px] mx-auto space-y-12 text-slate-800 dark:text-slate-200 text-[16px] sm:text-[17px] leading-[1.8]">
          {/* Section 1 */}
          <section id="why-mileage-drops" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Why Does Real-World Car Mileage Drop in India?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Real-world car mileage drops in India primarily due to extreme stop-and-go city congestion, prolonged AC compressor usage in 40°C heat, under-inflated tyres, clogged air filters from road dust, and aggressive throttle-and-brake driving habits.
            </p>
            <p>
              Official ARAI test figures are measured inside temperature-controlled laboratories on rolling chassis dynos without traffic lights, luggage, or passenger weight. In actual Indian road driving, sudden braking converts hard-earned kinetic energy into wasted brake pad heat.
            </p>
            <p>
              To compare typical per-kilometre operational costs across fuel alternatives, consult our comprehensive{' '}
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                className="font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                petrol vs diesel vs CNG vs EV guide
              </Link>{' '}
              for Indian motorists.
            </p>
          </section>

          {/* Section 2 */}
          <section id="tyre-pressure-impact" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How Much Does Tyre Pressure Affect Fuel Economy?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Tyre pressure significantly impacts fuel economy: driving on tyres under-inflated by just 4 to 5 PSI increases rolling resistance and reduces mileage by three to five percent. Maintaining correct cold manufacturer pressures can save up to two full tanks of fuel annually.
            </p>
            <p>
              Always adhere to the PSI values printed on the driver-side door sill sticker rather than generic advice from fuel station attendants. Check pressures early in the morning when tyres are cold, as heat generated during highway driving can artificially inflate readings by 3–4 PSI.
            </p>
          </section>

          {/* Section 3 */}
          <section id="ac-vs-windows" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Should You Drive with AC On or Windows Down?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Drive with windows down in slow city traffic under 45 km/h, but always keep windows rolled up with AC active at speeds above 60 km/h on expressways. Open windows at high speeds create aerodynamic parachute drag that wastes more fuel than the AC compressor consumes.
            </p>
            <p>
              In scorching Indian summers, park in shaded bays whenever possible. If your cabin is boiling hot upon entry, roll down all windows for the first two minutes of driving to flush out trapped hot air before switching on the air conditioner at a comfortable 23°C to 24°C setting.
            </p>
          </section>

          {/* Section 4 */}
          <section id="driving-habits" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              What Driving Habits Maximize Mileage in Traffic?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Maximize mileage in traffic by practicing progressive throttle inputs, maintaining a 3-second buffer to minimize abrupt panic braking, upshifting gears early between 1,800 and 2,200 RPM, and anticipating traffic signal light cycles to coast smoothly.
            </p>
            <p>
              Treat the accelerator pedal like an egg under your foot: press smoothly rather than stomping. Sudden acceleration dumps excessive fuel into engine combustion chambers without yielding proportional forward speed in slow city queues.
            </p>
          </section>

          {/* Section 5 */}
          <section id="air-filter-maintenance" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How Does Air Filter Cleaning Improve Mileage?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Cleaning or replacing a dusty engine air filter improves mileage by ensuring optimum air-fuel stoichiometric ratio (14.7:1). In dust-heavy Indian operating conditions, a choked air filter suffocates the engine, resulting in rich combustion that wastes up to seven percent more fuel.
            </p>
            <p>
              Inspect and tap clean the engine air filter every 5,000 kilometres, and replace it every 10,000 to 15,000 kilometres. It costs less than ₹400 for most mass-market Indian hatchbacks and sedans but immediately revives throttle responsiveness and fuel efficiency.
            </p>
          </section>

          {/* Section 6 */}
          <section id="idling-fuel-waste" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How Much Fuel Is Wasted Idling at Indian Traffic Lights?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              A running car engine consumes roughly 0.6 to 1.0 litre of fuel per hour while idling with air conditioning running. If a traffic signal countdown exceeds twenty seconds, turning off your engine saves noticeable fuel and reduces localized urban tailpipe toxicity.
            </p>
            <p>
              Modern cars equipped with Automatic Idle Stop-Start (such as Maruti Suzuki Smart Hybrid or Mahindra micro-hybrid systems) handle this automatically. For older vehicles, manual shutdown at 60-second red lights pays direct financial dividends at the petrol pump.
            </p>
          </section>

          {/* Section 7: Checklist Table */}
          <section id="tips-checklist-table" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              10 Mileage Boosting Techniques Summary Table
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Technique</th>
                    <th className="p-3.5 font-bold">Action Item</th>
                    <th className="p-3.5 font-bold">Expected Fuel Saving</th>
                    <th className="p-3.5 font-bold">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">1. Correct Cold PSI</td>
                    <td className="p-3.5">Check tyre pressure every fortnight</td>
                    <td className="p-3.5 text-emerald-700 font-bold">3% to 5%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Very Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">2. Expressway Sweet Spot</td>
                    <td className="p-3.5">Cruise at 80–90 km/h instead of 115 km/h</td>
                    <td className="p-3.5 text-emerald-700 font-bold">15% to 20%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">3. Anticipate Braking</td>
                    <td className="p-3.5">Lift off throttle early before speed breakers</td>
                    <td className="p-3.5 text-emerald-700 font-bold">6% to 10%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Moderate</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">4. AC Climate Temperature</td>
                    <td className="p-3.5">Set automatic climate control to 24°C</td>
                    <td className="p-3.5 text-emerald-700 font-bold">3% to 6%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Very Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">5. Clean Air Filter</td>
                    <td className="p-3.5">Inspect and clean every 5,000 km</td>
                    <td className="p-3.5 text-emerald-700 font-bold">4% to 7%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">6. Cut Boot Dead Weight</td>
                    <td className="p-3.5">Remove unneeded heavy gear from luggage area</td>
                    <td className="p-3.5 text-emerald-700 font-bold">2% to 4%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Very Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">7. Cut Long Signal Idling</td>
                    <td className="p-3.5">Turn off ignition if signal exceeds 30s</td>
                    <td className="p-3.5 text-emerald-700 font-bold">4% to 8%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">8. Low-Viscosity Synthetic Oil</td>
                    <td className="p-3.5">Switch to 0W-20 / 5W-30 full synthetic</td>
                    <td className="p-3.5 text-emerald-700 font-bold">2% to 3%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Service Visit</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">9. Roll Windows Up at Speed</td>
                    <td className="p-3.5">Keep glass closed on highways &gt;60 km/h</td>
                    <td className="p-3.5 text-emerald-700 font-bold">4% to 8%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Very Easy</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">10. Wheel Alignment</td>
                    <td className="p-3.5">Align tyres every 10,000 km</td>
                    <td className="p-3.5 text-emerald-700 font-bold">2% to 4%</td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">Service Visit</td>
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
                Frequently Asked Questions About Car Mileage in India
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

          <RelatedArticles currentPath="/car-mileage-tips-india" />
        </div>
      </article>
    </>
  );
};
