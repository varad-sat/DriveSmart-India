import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { RelatedArticles } from '../components/RelatedArticles';
import { SEO_DATA } from '../data/seoKeywords';
import { CARS_DATA } from '../data/cars';
import {
  Calendar,
  Clock,
  User,
  ShieldCheck,
  ChevronRight,
  Zap,
  BatteryCharging,
  TrendingDown,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const ElectricCarsArticlePage: React.FC = () => {
  const seo = SEO_DATA['/blog/electric-cars-in-india-2026'];
  const evCars = CARS_DATA.filter((c) => c.fuelTypes.includes('Electric'));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seo.title,
    description: seo.metaDescription,
    image: 'https://drivesmart-india.vercel.app/images/monsoon-car-care-tips.webp',
    author: {
      '@type': 'Organization',
      name: 'DriveSmart Editorial Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'DriveSmart India',
    },
    datePublished: '2026-10-12',
    dateModified: '2026-10-12',
  };

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/blog/electric-cars-in-india-2026"
        ogImage="https://drivesmart-india.vercel.app/images/monsoon-car-care-tips.webp"
        keywords={`${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`}
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
              <Link to="/blog" className="hover:text-[#FF6B1A] transition-colors">
                Blog
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium truncate">
                Electric Cars in India 2026
              </span>
            </li>
          </ol>
        </nav>

        {/* Article Header (Single H1) */}
        <header className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Electric Mobility Special</span>
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              Clean Energy Economics
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight">
            Complete Guide to Electric Cars in India 2026: Range, Specs & EV Prices
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-2 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
              <User className="w-4 h-4 text-[#FF6B1A]" />
              DriveSmart Editorial Team
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              October 2026
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              10 min read
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              ARAI & Real-World Tested
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-800">
          <SmartImage
            src="/images/monsoon-car-care-tips.webp"
            alt="Overview of electric cars in India 2026 featuring rapid public DC fast charging and advanced battery packs"
            width={896}
            height={504}
            className="w-full h-auto object-cover max-h-[420px]"
          />
          <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 italic text-center">
            Electric cars in India 2026 offer per-kilometer running costs as low as ₹1.20 alongside 400+ km real highway range.
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed">
          {/* Introduction (first 100 words contains mainKeyword) */}
          <section className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              Rapid battery technology maturation and expanding expressway fast-charging corridors have made <strong>electric cars in India 2026</strong> a genuinely practical, money-saving reality for everyday motorists. While previous generation EVs suffered from modest range and charging anxiety, the latest wave of dedicated modular architectures offers over 450 km of real-world cruising per single recharge.
            </p>
            <p>
              In this comprehensive guide, we examine realistic battery degradation patterns, home solar charging synergies, and public DC fast-charging speeds to help you determine if making the switch to electric mobility makes solid financial sense for your household.
            </p>
          </section>

          {/* H2: Choosing the Best Electric Car in India - AEO Question & Answer format */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Which Is the Best Electric Car in India for Daily Commuting?
            </h2>
            {/* Direct Answer Paragraph for AEO */}
            <p className="text-base text-slate-700 dark:text-slate-300 font-medium bg-emerald-50/70 dark:bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg leading-relaxed">
              The <strong>best electric car in India</strong> for daily commuting provides a real-world driving range of 350+ km, fast DC charging compatibility, and liquid-cooled battery thermal management. Leading models like the Maruti Suzuki e Vitara and Mahindra XEV 9S offer low running expenses of roughly ₹1.25 per km alongside 8-year battery warranty coverage.
            </p>
            <p>
              Selecting the best electric car in India requires analyzing your weekly commuting mileage against available charging infrastructure at your apartment or independent home. For buyers covering over 1,200 km each month, the operational savings compared to petrol cars exceed ₹75,000 annually.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {evCars.map((car) => (
                <div
                  key={car.slug}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {car.brand}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                        {car.bodyType}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      <Link to={`/cars/${car.seoSlug}`} className="hover:text-[#FF6B1A]">
                        {car.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                      {car.overview}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#0B1F3A] dark:text-white">
                      ₹{car.priceMinLakh} – ₹{car.priceMaxLakh} Lakh
                    </span>
                    <Link
                      to={`/cars/${car.seoSlug}`}
                      className="text-xs font-bold text-[#FF6B1A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View {car.name} specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Modern flagships like the Mahindra XEV 9e and Maruti Suzuki e Vitara feature liquid-cooled lithium-iron-phosphate (LFP) chemistries specifically engineered to handle intense 45°C Indian summer ambient temperatures without thermal throttling, reinforcing why they stand out as the best electric car in India candidates.
            </p>
          </section>

          {/* H2: Understanding Real EV Price in India - AEO Question & Answer format */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How Does EV Price in India Compare to Long-Term Fuel Savings?
            </h2>
            {/* Direct Answer Paragraph for AEO */}
            <p className="text-base text-slate-700 dark:text-slate-300 font-medium bg-emerald-50/70 dark:bg-emerald-950/30 border-l-4 border-emerald-500 p-4 rounded-r-lg leading-relaxed">
              While upfront <strong>EV price in India</strong> ranges between ₹16 Lakh and ₹28 Lakh for mainstream models, electric cars offset the purchase premium within 30,000 to 40,000 kilometres of driving through cheap ₹1.25/km home charging, low 5% GST levies, and zero road tax exemptions in multiple Indian states.
            </p>
            <p>
              When evaluating EV price in India, looking solely at the ex-showroom invoice overlooks decisive fiscal benefits. Thanks to nationwide concessions, electric cars attract only 5% Goods and Services Tax (GST) compared to 28% + 22% cess on combustion vehicles, and several states waive RTO registration charges completely.
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Electric Model</th>
                    <th className="p-3.5 font-bold">EV Price in India</th>
                    <th className="p-3.5 font-bold">Battery Pack</th>
                    <th className="p-3.5 font-bold">Claimed Range</th>
                    <th className="p-3.5 font-bold">Cost Per KM</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Maruti Suzuki e Vitara</td>
                    <td className="p-3.5">₹19.50 – ₹25.00 L</td>
                    <td className="p-3.5">49 – 61 kWh</td>
                    <td className="p-3.5">~500 km</td>
                    <td className="p-3.5 text-emerald-600 font-bold">₹1.25 / km</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Mahindra XEV 9e</td>
                    <td className="p-3.5">₹21.90 – ₹30.50 L</td>
                    <td className="p-3.5">59 – 79 kWh</td>
                    <td className="p-3.5">~535 km</td>
                    <td className="p-3.5 text-emerald-600 font-bold">₹1.35 / km</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Tata Sierra EV</td>
                    <td className="p-3.5">₹18.00 – ₹24.00 L</td>
                    <td className="p-3.5">55 – 65 kWh</td>
                    <td className="p-3.5">~480 km</td>
                    <td className="p-3.5 text-emerald-600 font-bold">₹1.30 / km</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Consequently, even if initial EV price in India carries an upfront premium of ₹2 to ₹3 Lakh over equivalent petrol automatics, you break even within 30,000 to 40,000 kilometers of driving. Beyond that threshold, every kilometer traveled yields substantial direct household savings.
            </p>
          </section>

          {/* H2: Battery Health and Charging Infrastructure */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Battery Longevity and Charging for Electric Cars in India 2026
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                  <BatteryCharging className="w-4 h-4 text-emerald-600 shrink-0" />
                  Home AC Wallbox Charging
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Installing a 7.4 kW home wallbox allows complete overnight recharging from 10% to 100% in roughly 7 to 8 hours for less than ₹300 at standard residential domestic tariffs.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  8-Year / 1,60,000 KM Warranty
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Major Indian manufacturers guarantee at least 70% to 80% battery state-of-health retention across eight years, alleviating resale depreciation anxieties.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Summary & Environmental Verdict
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              In conclusion, adopting <strong>electric cars in India 2026</strong> is no longer an experimental luxury but a mathematically sound ownership decision for commuters who travel regularly. With silent driving comfort, instantaneous electric motor response, and rapid highway charger rollouts, driving green has never been more rewarding.
            </p>
            <p className="text-xs text-slate-500 italic">
              Prices and costs vary by city and model; check with your dealer.
            </p>
          </section>
        </div>

        {/* Cross-linking to fuel cost calculator */}
        <div className="mt-10 p-6 bg-gradient-to-r from-[#0B1F3A] to-[#132c4e] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base">Calculate your exact EV vs Petrol savings</h3>
            <p className="text-xs text-slate-300 mt-1">
              Input your monthly commuting distance to see monthly and yearly rupees saved.
            </p>
          </div>
          <Link
            to="/tools/car-fuel-cost-calculator-india"
            className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <span>Open Fuel Cost Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12">
          <RelatedArticles currentPath="/blog/electric-cars-in-india-2026" />
        </div>
      </article>
    </>
  );
};
