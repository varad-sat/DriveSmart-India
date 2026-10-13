import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { CARS_DATA } from '../data/cars';
import { searchContent, SearchResult } from '../data/searchIndex';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Fuel,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  TrendingUp,
  Award,
  ChevronRight,
  Sparkles,
  Search,
  Heart,
  Scale,
  ArrowRight,
  Car,
  Calculator,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { isFavourite, toggleFavourite, addToCompare, isInCompare } = useApp();
  const [heroSearch, setHeroSearch] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult>({ articles: [], cars: [] });

  const handleHeroSearchChange = (val: string) => {
    setHeroSearch(val);
    if (val.trim().length > 1) {
      setSearchResults(searchContent(val));
    } else {
      setSearchResults({ articles: [], cars: [] });
    }
  };

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'DriveSmart India',
      url: 'https://drivesmart-india.vercel.app/',
      description:
        'Your complete car buying guide for India. Compare fuel types, plan your first car purchase and learn simple car care tips. Start reading today!',
      publisher: {
        '@type': 'Organization',
        name: 'DriveSmart India',
        url: 'https://drivesmart-india.vercel.app/',
        logo: 'https://drivesmart-india.vercel.app/images/car-buying-guide-india-hero.webp',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'DriveSmart India',
      url: 'https://drivesmart-india.vercel.app/',
      logo: 'https://drivesmart-india.vercel.app/images/car-buying-guide-india-hero.webp',
      sameAs: ['https://parivahan.gov.in'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What budget is recommended for a first-time car buyer in India?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'For most first-time buyers in India, a total budget between ₹6 Lakh and ₹10 Lakh on-road offers the ideal balance of safety features, fuel efficiency, manageable loan EMIs, and low long-term maintenance costs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which fuel type is best for city commuting in Indian metros?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Electric vehicles and factory-fitted CNG cars offer the lowest operational costs for congested city driving, whereas petrol automatics provide maximum driving convenience for daily commutes under 30 kilometres.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is pre-delivery inspection (PDI) critical before registration?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A pre-delivery inspection verifies that your allocated vehicle has no transit scratches, odometer tampering, or manufacturing defects before the dealer initiates irreversible RTO registration in your name.',
          },
        },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="Car Buying Guide India: Tips & Reviews | DriveSmart"
        description="Your complete car buying guide for India. Compare fuel types, plan your first car purchase and learn simple car care tips. Start reading today!"
        canonicalUrl="https://drivesmart-india.vercel.app/"
        ogImage="https://drivesmart-india.vercel.app/images/car-buying-guide-india-hero.webp"
        type="website"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0B1F3A] to-[#132c4e] text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FF6B1A]/20 text-[#FF6B1A] border border-[#FF6B1A]/30 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Independent Automotive Insights for 2026</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
              Your Complete Car Buying Guide India
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
              Navigate Indian car showrooms with unshakeable confidence using our verified car buying guide India designed for modern families and smart first-time owners.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <Link
                to="/first-car-buying-guide"
                className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-base font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <span>Read our first car buying guide</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all"
              >
                <span>Compare Fuel Options</span>
              </Link>
              <Link
                to="/cars"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all"
              >
                <Car className="w-4 h-4 text-[#FF6B1A]" />
                <span>Explore 2026 Cars</span>
              </Link>
            </div>

            {/* Live Search Bar on Homepage */}
            <div className="max-w-xl mx-auto relative text-left">
              <div className="relative">
                <input
                  type="text"
                  value={heroSearch}
                  onChange={(e) => handleHeroSearchChange(e.target.value)}
                  placeholder="Search articles, guides, fuel types, or 2026 cars (e.g. Sierra, CNG, loan, tyres)..."
                  className="w-full bg-slate-900/90 border border-slate-700 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B1A] focus:ring-2 focus:ring-[#FF6B1A]/40 shadow-xl"
                  aria-label="Live search across guides and 2026 cars"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              </div>

              {/* Live search results card */}
              {heroSearch.trim().length > 1 && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-3 z-30 max-h-80 overflow-y-auto text-slate-900 dark:text-white">
                  {searchResults.articles.length === 0 && searchResults.cars.length === 0 ? (
                    <div className="p-4 text-center text-xs text-slate-500">
                      No matching guides or cars found. Try keywords like &ldquo;CNG&rdquo;, &ldquo;PDI&rdquo;, &ldquo;Tata&rdquo;, &ldquo;monsoon&rdquo;.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {searchResults.articles.length > 0 && (
                        <div>
                          <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            Articles & Guides
                          </div>
                          {searchResults.articles.map((item) => (
                            <Link
                              key={item.url}
                              to={item.url}
                              className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs"
                            >
                              <div className="font-bold text-slate-900 dark:text-white hover:text-[#FF6B1A]">
                                {item.title}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                {item.snippet}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                      {searchResults.cars.length > 0 && (
                        <div>
                          <div className="px-2 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                            2026 Cars
                          </div>
                          {searchResults.cars.map((car) => (
                            <Link
                              key={car.slug}
                              to={`/cars/${car.slug}`}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs"
                            >
                              <div>
                                <span className="font-bold text-slate-900 dark:text-white">
                                  {car.name}
                                </span>{' '}
                                <span className="text-slate-500 text-[11px]">
                                  ({car.brand} • {car.bodyType})
                                </span>
                              </div>
                              <span className="font-bold text-[#FF6B1A]">
                                {car.priceMinLakh ? `₹${car.priceMinLakh}L` : 'TBC'}
                              </span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* All Blogs Featured Directly at the Start of the Page */}
          <div id="latest-guides" className="mt-10 mb-10 text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B1A] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Editorial Guides</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  All Car Buying & Ownership Blogs
                </h2>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 self-start sm:self-auto">
                Updated October 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Petrol vs Diesel vs CNG vs EV */}
              <article className="bg-white dark:bg-slate-900 rounded-2xl border border-white/10 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all group">
                <div>
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src="/images/petrol-vs-diesel-vs-cng-vs-ev.webp"
                      alt="Petrol vs diesel vs CNG vs EV cars compared at fuel and charging stations"
                      width={600}
                      height={340}
                      loading="eager"
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                      <Fuel className="w-3 h-3 text-[#FF6B1A]" />
                      <span>Powertrain Analysis</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>9 min read</span>
                      <span>•</span>
                      <span>₹/km Running Costs</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-[#FF6B1A] transition-colors">
                      <Link
                        to="/petrol-vs-diesel-vs-cng-vs-ev"
                        className="hover:text-[#FF6B1A] transition-colors"
                      >
                        Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Compare per-kilometre operational running expenses, annual servicing charges, Delhi-NCR lifespan rules, and resale values across all four primary fuels.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/petrol-vs-diesel-vs-cng-vs-ev"
                    className="text-xs font-bold text-[#FF6B1A] hover:text-[#e05b12] inline-flex items-center gap-1.5 mt-3"
                  >
                    <span>Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>

              {/* Card 2: First Car Buying Guide */}
              <article className="bg-white dark:bg-slate-900 rounded-2xl border border-white/10 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all group">
                <div>
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src="/images/first-car-buying-guide.webp"
                      alt="First car buying guide: young buyer receiving keys of a new car"
                      width={600}
                      height={340}
                      loading="eager"
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                      <Compass className="w-3 h-3 text-[#FF6B1A]" />
                      <span>Step-by-Step Blueprint</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>10 min read</span>
                      <span>•</span>
                      <span>10-Step Checklist</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-[#FF6B1A] transition-colors">
                      <Link
                        to="/first-car-buying-guide"
                        className="hover:text-[#FF6B1A] transition-colors"
                      >
                        First Car Buying Guide: 10 Steps for Indian Buyers
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Master vehicle finance calculations, test-drive checklists, insurance policy add-ons, and thorough pre-delivery inspection procedures.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/first-car-buying-guide"
                    className="text-xs font-bold text-[#FF6B1A] hover:text-[#e05b12] inline-flex items-center gap-1.5 mt-3"
                  >
                    <span>First Car Buying Guide: 10 Steps for Indian Buyers</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>

              {/* Card 3: Monsoon Car Care Tips */}
              <article className="bg-white dark:bg-slate-900 rounded-2xl border border-white/10 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all group">
                <div>
                  <div className="relative overflow-hidden">
                    <SmartImage
                      src="/images/monsoon-car-care-tips.webp"
                      alt="Monsoon car care tips: car driving safely on a wet road in heavy rain"
                      width={600}
                      height={340}
                      loading="eager"
                      className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                      <ShieldCheck className="w-3 h-3 text-[#FF6B1A]" />
                      <span>Seasonal Protection</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <span>8 min read</span>
                      <span>•</span>
                      <span>12 Safety Tips</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug mb-2 group-hover:text-[#FF6B1A] transition-colors">
                      <Link
                        to="/monsoon-car-care-tips"
                        className="hover:text-[#FF6B1A] transition-colors"
                      >
                        Monsoon Car Care Tips: 12 Ways to Protect Your Car
                      </Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Protect your motor from hydrostatic engine stall, rusty underbodies, deteriorated wiper blades, brake fading, and waterlogged urban flash floods.
                    </p>
                  </div>
                </div>
                <div className="p-5 pt-0 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    to="/monsoon-car-care-tips"
                    className="text-xs font-bold text-[#FF6B1A] hover:text-[#e05b12] inline-flex items-center gap-1.5 mt-3"
                  >
                    <span>Monsoon Car Care Tips: 12 Ways to Protect Your Car</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </div>
          </div>

          {/* Hero Showroom Image Banner */}
          <div className="max-w-4xl mx-auto pt-2">
            <SmartImage
              src="/images/car-buying-guide-india-hero.webp"
              alt="Car buying guide India showing a family choosing a new car at a showroom"
              width={1200}
              height={630}
              loading="lazy"
              caption="DriveSmart India guides you through showrooms, loan financing, and fuel comparisons."
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Section 2: Question H2 */}
        <section id="what-will-you-learn" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            What Will You Learn From This Car Buying Guide India?
          </h2>
          {/* Direct Answer Paragraph (40-60 words) */}
          <p className="text-base text-slate-700 dark:text-slate-300 font-medium bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg leading-relaxed">
            This car buying guide India teaches you how to accurately budget on-road costs, evaluate petrol, diesel, CNG, and electric powertrains, negotiate dealer quotations without hidden accessories, and inspect vehicles prior to registration. You will gain actionable frameworks to choose safe, reliable cars perfectly suited to diverse Indian driving habits.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Purchasing a motor vehicle in India involves navigating regional road tax brackets (RTO fees ranging from 8% to 18%), complex insurance add-ons, long dealership delivery lead times, and fluctuating fuel prices. Many prospective owners commit expensive financial blunders simply because they confuse ex-showroom quotes with real-world on-road commitments.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Whether you commute daily through crowded Bengaluru or Mumbai traffic, take weekend highway journeys across national expressways, or need a dependable second car for daily school errands, our curated advice ensures your capital goes toward genuine comfort, high safety ratings, and dependable mechanical durability.
          </p>
        </section>

        {/* Section 3: Question H2 using related keyword */}
        <section id="choose-best-cars" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            How Do You Choose the Best Cars in India for Your Budget?
          </h2>
          {/* Direct Answer Paragraph (40-60 words) */}
          <p className="text-base text-slate-700 dark:text-slate-300 font-medium bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg leading-relaxed">
            To choose the best cars in India for your budget, calculate your total on-road ceiling, limit your monthly loan EMI to twenty percent of net income, prioritize minimum four-star Bharat NCAP crash safety ratings, and select a powertrain whose fuel economics closely match your actual monthly driving distance.
          </p>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            The Indian passenger automobile market offers tremendous variety across hatchbacks, compact crossovers, mid-size sedans, and three-row family utility vehicles. However, the best cars in India are not necessarily the most expensive or feature-heavy models. Instead, the right vehicle matches your passenger capacity requirements, terrain conditions, and maintenance capabilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs font-bold text-[#FF6B1A] uppercase tracking-wider">Under ₹8 Lakh</span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-1">Compact City Runabouts</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Ideal for first-time drivers. High fuel economy (18-24 km/l), easy parking, and affordable insurance renewals.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs font-bold text-[#FF6B1A] uppercase tracking-wider">₹8 to ₹15 Lakh</span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-1">Crossovers & Sedans</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                The sweet spot in India. Includes 6 airbags, turbo-petrol or EV choices, connected tech, and ground clearance up to 200mm.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
              <span className="text-xs font-bold text-[#FF6B1A] uppercase tracking-wider">Above ₹15 Lakh</span>
              <h3 className="font-bold text-slate-900 dark:text-white mt-1">Mid-Size & Family SUVs</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Extended highway cruising, Level 2 ADAS active safety, panoramic sunroofs, and versatile 7-seater configurations.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Latest Car Launches 2026 (6 Car Cards) */}
        <section id="latest-car-launches" className="space-y-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B1A]">
                Market Rollout
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
                Latest Car Launches 2026
              </h2>
            </div>
            <Link
              to="/cars"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B1A] hover:underline"
            >
              <span>View all 10 new 2026 cars</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {CARS_DATA.slice(0, 6).map((car) => {
              const priceDisplay =
                car.priceMinLakh && car.priceMaxLakh
                  ? `₹${car.priceMinLakh.toFixed(2)} – ₹${car.priceMaxLakh.toFixed(2)} Lakh`
                  : 'Price: to be confirmed';
              const isFav = isFavourite(car.slug);

              return (
                <article
                  key={car.slug}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative group"
                >
                  <div>
                    <div className="relative mb-3">
                      <SmartImage
                        src={car.image}
                        alt={car.imageAlt}
                        width={400}
                        height={240}
                        fallbackText={car.name}
                        loading="lazy"
                        className="h-36 w-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => toggleFavourite(car.slug)}
                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 dark:bg-slate-800/90 shadow-xs flex items-center justify-center hover:scale-110 transition-transform"
                        title={isFav ? 'Remove from garage' : 'Save to favourites'}
                        aria-label={`Save ${car.name} to favourites`}
                      >
                        <Heart
                          className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-slate-600 dark:text-slate-300'}`}
                        />
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      <span>{car.brand}</span>
                      <span>{car.bodyType}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] transition-colors">
                      <Link to={`/cars/${car.slug}`}>
                        {car.name}
                      </Link>
                    </h3>

                    <div className="text-xs font-black text-[#FF6B1A] mt-1">
                      {priceDisplay}
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {car.fuelTypes.map((fuel) => (
                        <span
                          key={fuel}
                          className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                        >
                          {fuel}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-3">
                    <Link
                      to={`/cars/${car.slug}`}
                      className="text-xs font-bold text-[#FF6B1A] hover:underline inline-flex items-center gap-1"
                    >
                      <span>View {car.name} price and features</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Section 5: Why Beginners Trust Us */}
        <section id="why-trust-us" className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Why Should Beginners Trust DriveSmart India?
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Finding genuine, unbiased car tips for beginners on the Indian internet can be challenging. Most dealership portals and sponsored influencer videos present promotional brochures disguised as reviews. At DriveSmart India, our editorial mission is centered exclusively on real consumer welfare, zero sales commissions, and pragmatic engineering facts.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Real On-Road Cost Clarity</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  We show how state road taxes, fast-tag charges, dealer handling charges, and essential insurance add-ons affect your real bank balance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Actionable Car Tips for Beginners</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Every guide offers clear explanations free of technical jargon, providing practical car tips for beginners that anyone can put into action immediately.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Official Regulatory Alignment</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  Our content cross-references official standards published on the{' '}
                  <a
                    href="https://parivahan.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#FF6B1A] underline hover:text-[#e05b12]"
                  >
                    Parivahan Sewa vehicle portal
                  </a>{' '}
                  to ensure you always follow legitimate Indian transport protocols.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm">Long-Term Maintenance Safeguards</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                  From monsoon floodproofing to tyre tread depth preservation, we assist you throughout your entire vehicular ownership lifecycle.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Short FAQ */}
        <section id="faq" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-[#FF6B1A]" />
            <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Frequently Asked Questions About Indian Car Buying
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                What budget is recommended for a first-time car buyer in India?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                For most first-time buyers in India, a total budget between ₹6 Lakh and ₹10 Lakh on-road offers the ideal balance of safety features, fuel efficiency, manageable loan EMIs, and low long-term maintenance costs.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Which fuel type is best for city commuting in Indian metros?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Electric vehicles and factory-fitted CNG cars offer the lowest operational costs for congested city driving, whereas petrol automatics provide maximum driving convenience for daily commutes under 30 kilometres.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Why is pre-delivery inspection (PDI) critical before registration?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                A pre-delivery inspection verifies that your allocated vehicle has no transit scratches, odometer tampering, or manufacturing defects before the dealer initiates irreversible RTO registration in your name.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion block */}
        <section className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            Start Your Automotive Journey with DriveSmart India
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-4 leading-relaxed">
            In conclusion, this complete car buying guide India gives you the knowledge and practical strategies needed to inspect vehicles, compare running economics, and drive home your dream automobile with total peace of mind.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 italic">
            Prices and costs vary by city and model; check with your dealer.
          </p>
        </section>
      </main>
    </>
  );
};
