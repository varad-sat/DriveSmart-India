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
  Sparkles,
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Car,
} from 'lucide-react';

export const NewSuvsArticlePage: React.FC = () => {
  const seo = SEO_DATA['/blog/new-suvs-in-india-2026'];
  const suvCars = CARS_DATA.filter((c) => c.bodyType.includes('SUV'));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: seo.title,
    description: seo.metaDescription,
    image: 'https://drivesmart-india.vercel.app/images/first-car-buying-guide.webp',
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
        canonicalUrl="https://drivesmart-india.vercel.app/blog/new-suvs-in-india-2026"
        ogImage="https://drivesmart-india.vercel.app/images/first-car-buying-guide.webp"
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
                New SUVs in India 2026
              </span>
            </li>
          </ol>
        </nav>

        {/* Article Header (Single H1) */}
        <header className="mb-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] border border-orange-200 dark:border-orange-800">
              SUV Buyer's Guide
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              2026 Market Analysis
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight">
            Complete Guide to New SUVs in India 2026: Prices, Specs & Buying Advice
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
              9 min read
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              Verified On-Road Specs
            </span>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-md bg-slate-100 dark:bg-slate-800">
          <SmartImage
            src="/images/first-car-buying-guide.webp"
            alt="Showcase of new SUVs in India 2026 highlighting modern compact and midsize utility vehicles"
            width={896}
            height={504}
            className="w-full h-auto object-cover max-h-[420px]"
          />
          <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 italic text-center">
            New SUVs in India 2026 offer commanding ground clearance, robust suspension tuning, and high Bharat NCAP safety ratings.
          </div>
        </div>

        {/* Article Body Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-8 text-slate-800 dark:text-slate-200 leading-relaxed">
          {/* Introduction (first 100 words contains mainKeyword) */}
          <section className="space-y-4">
            <p className="text-base sm:text-lg leading-relaxed font-medium text-slate-700 dark:text-slate-300">
              The Indian automotive landscape is witnessing an unprecedented transformation, with <strong>new SUVs in India 2026</strong> capturing over 52% of all passenger vehicle registrations across tier-1 and tier-2 cities. From rugged sub-compact crossovers to futuristic high-riding electric SUVs, consumers prioritize commanding seating postures, pothole-defying ground clearance, and versatile cargo flexibility for weekend highway family trips.
            </p>
            <p>
              In this detailed handbook, we analyze every major contender arriving in showrooms this year, evaluating exact ex-showroom pricing, powertrain options, safety credentials, and cabin ergonomics to help you identify the perfect utility vehicle for your family garage.
            </p>
          </section>

          {/* H2: Latest SUV Launches India to Watch Out For - AEO Question & Answer format */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              What Are the Latest SUV Launches India to Watch for in 2026?
            </h2>
            {/* Direct Answer Paragraph for AEO */}
            <p className="text-base text-slate-700 dark:text-slate-300 font-medium bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg leading-relaxed">
              The <strong>latest SUV launches India</strong> include the reborn Tata Sierra lifestyle SUV, next-generation Hyundai Venue, upgraded Kia Seltos, and the rugged Renault Duster. These models deliver Level 2 ADAS active safety suites, panoramic sunroofs, refined turbo-petrol powertrains, and high Bharat NCAP crash protection tailored for Indian highways.
            </p>
            <p>
              Automakers have planned their most ambitious product offensives yet, making new SUVs in India 2026 more diverse and technologically sophisticated than ever before. Whether you seek traditional turbo-petrol punch, torque-rich diesel long-range capabilities, or zero-tailpipe emission battery packs, this year brings stellar options across segments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6">
              {suvCars.slice(0, 4).map((car) => (
                <div
                  key={car.slug}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF6B1A]">
                        {car.brand}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
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
                      <span>Full Specs</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p>
              Among these exciting additions, the reborn Tata Sierra SUV brings iconic curved rear quarter-glass heritage blended with state-of-the-art Level 2 ADAS radar arrays, whereas the Kia Syros introduces lounge-like second-row ventilation into the sub-4-meter urban segment. Tracking the latest SUV launches India ensures buyers avoid picking phased-out models facing immediate depreciation.
            </p>
          </section>

          {/* H2: Finding the Best SUV Under 15 Lakh - AEO Question & Answer format */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Which Is the Best SUV Under 15 Lakh for Indian Roads?
            </h2>
            {/* Direct Answer Paragraph for AEO */}
            <p className="text-base text-slate-700 dark:text-slate-300 font-medium bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg leading-relaxed">
              The <strong>best SUV under 15 lakh</strong> for Indian roads includes the Hyundai Venue, Kia Syros, and entry-level variants of the Tata Sierra. These crossovers offer 5-star crash resilience, high ground clearance exceeding 190 mm, robust suspensions for rough city roads, and fuel economy between 17 and 21 km/l.
            </p>
            <p>
              The ₹10 Lakh to ₹15 Lakh price band represents the sweet spot of the Indian market. Securing the best SUV under 15 lakh requires balancing mechanical reliability, crash safety standards, fuel efficiency, and post-purchase servicing network presence.
            </p>

            <div className="overflow-x-auto my-6 not-prose">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">SUV Model</th>
                    <th className="p-3.5 font-bold">Price Range</th>
                    <th className="p-3.5 font-bold">Engine & Fuel</th>
                    <th className="p-3.5 font-bold">Key Strength</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Kia Syros</td>
                    <td className="p-3.5">₹9.00 – ₹17.50 L</td>
                    <td className="p-3.5">Petrol / EV</td>
                    <td className="p-3.5 text-emerald-600 font-semibold">Rear seat legroom & cabin tech</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Hyundai Venue</td>
                    <td className="p-3.5">₹7.94 – ₹13.48 L</td>
                    <td className="p-3.5">Petrol / Diesel</td>
                    <td className="p-3.5 text-emerald-600 font-semibold">Low ownership cost & resale value</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Nissan Gravite</td>
                    <td className="p-3.5">₹5.99 – ₹9.99 L</td>
                    <td className="p-3.5">Petrol / Turbo</td>
                    <td className="p-3.5 text-emerald-600 font-semibold">Most affordable crossover value</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Tata Sierra Base</td>
                    <td className="p-3.5">₹11.49 – ₹15.00 L</td>
                    <td className="p-3.5">Turbo Petrol</td>
                    <td className="p-3.5 text-emerald-600 font-semibold">Chassis rigidity & commanding road stance</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              When selecting the best SUV under 15 lakh, prioritize safety features such as 6 standard airbags, Electronic Stability Control (ESC), and hill-hold assist over cosmetic sunroofs. Models featuring robust underbody clearance of at least 190 mm provide exceptional peace of mind across broken monsoon roads.
            </p>
          </section>

          {/* H2: Buyer Checklist for New SUVs in India 2026 */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Essential Buyer Checklist Before Booking New SUVs in India 2026
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-6">
              <div className="p-4 rounded-xl bg-orange-50/60 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Real On-Road Budget Verification
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Always compute state RTO road tax and registration levies, which typically add 8% to 14% on top of advertised ex-showroom tags.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-orange-50/60 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  Daylight Pre-Delivery Inspection (PDI)
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Never accept delivery after dark. Inspect body panels, tire manufacturing dates, and fluid lines before signing registration documents.
                </p>
              </div>
            </div>
            <p>
              In addition to these points, prospective buyers evaluating new SUVs in India 2026 should take extended test drives across city gridlock and expressway stretches to check real-world steering weight and body roll during swift lane transitions.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Summary & Final Recommendation
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              In conclusion, investing in <strong>new SUVs in India 2026</strong> represents a compelling upgrade for Indian families seeking superior crash resilience, highway composure, and versatile interior space. By examining realistic maintenance expenses and comparing models side-by-side on DriveSmart, you ensure your next automotive purchase delivers enduring satisfaction for years to come.
            </p>
            <p className="text-xs text-slate-500 italic">
              Prices and costs vary by city and model; check with your dealer.
            </p>
          </section>
        </div>

        {/* Cross-linking to comparison tools */}
        <div className="mt-10 p-6 bg-gradient-to-r from-[#0B1F3A] to-[#132c4e] rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base">Want to compare specific SUV specifications?</h3>
            <p className="text-xs text-slate-300 mt-1">
              Put Tata Sierra, Kia Syros, and Hyundai Venue side-by-side in our free tool.
            </p>
          </div>
          <Link
            to="/compare-cars-in-india"
            className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shrink-0"
          >
            <span>Launch SUV Comparison</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-12">
          <RelatedArticles currentPath="/blog/new-suvs-in-india-2026" />
        </div>
      </article>
    </>
  );
};
