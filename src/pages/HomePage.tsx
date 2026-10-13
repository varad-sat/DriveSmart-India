import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { CARS_DATA } from '../data/cars';
import { searchContent, SearchResult } from '../data/searchIndex';
import { useApp } from '../context/AppContext';
import { SEO_DATA } from '../data/seoKeywords';
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
  List,
  LayoutGrid,
  BookOpen,
  SlidersHorizontal,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const { isFavourite, toggleFavourite, addToCompare, isInCompare } = useApp();
  const [heroSearch, setHeroSearch] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult>({ articles: [], cars: [] });
  const [viewMode, setViewMode] = useState<'linewise' | 'grid'>('linewise');
  const [activeCategory, setActiveCategory] = useState<string>('all');

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

  const allBlogs = [
    {
      id: '01',
      to: '/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india',
      title: 'Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?',
      exactLinkText: 'Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?',
      actionLabel: 'Read Petrol vs Diesel vs CNG vs EV Comparison',
      image: '/images/petrol-vs-diesel-vs-cng-vs-ev.webp',
      imageAlt: 'Petrol vs diesel vs CNG vs EV cars compared at fuel and charging stations',
      badge: 'Powertrain Breakdown',
      category: 'powertrain',
      readTime: '9 min read',
      tag: '₹/km Cost Analysis',
      highlights: ['Running Costs', 'Delhi-NCR 10/15 Yr Rules', 'DPF vs Battery'],
      description:
        'Compare per-kilometre operational running expenses (₹1.20 EV vs ₹7.50 Petrol), annual servicing charges, Delhi-NCR lifespan rules, and resale values across all four primary fuels.',
    },
    {
      id: '02',
      to: '/first-car-buying-guide-india-step-by-step',
      title: 'First Car Buying Guide: 10 Steps for Indian Buyers',
      exactLinkText: 'First Car Buying Guide: 10 Steps for Indian Buyers',
      actionLabel: 'Read First Car Buying Guide for Indian Buyers',
      image: '/images/first-car-buying-guide.webp',
      imageAlt: 'Modern car showroom with new vehicle on display for first time buyers',
      badge: 'Step-by-Step Blueprint',
      category: 'buying',
      readTime: '10 min read',
      tag: 'Showroom Protection',
      highlights: ['20% EMI Rule', 'Daylight PDI Check', 'Zero Dealer Markups'],
      description:
        'Master vehicle finance calculations, test-drive checklists, insurance policy add-ons, dealer discount negotiations, and thorough pre-delivery inspection procedures.',
    },
    {
      id: '03',
      to: '/monsoon-car-care-tips-rainy-season-protection',
      title: 'Monsoon Car Care Tips: 12 Ways to Protect Your Car',
      exactLinkText: 'Monsoon Car Care Tips: 12 Ways to Protect Your Car',
      actionLabel: 'Read Monsoon Car Care Tips & Protection Guide',
      image: '/images/monsoon-car-care-tips.webp',
      imageAlt: 'Car windshield wipers clearing heavy rain on wet road during monsoon',
      badge: 'Seasonal Protection',
      category: 'maintenance',
      readTime: '8 min read',
      tag: 'Rain Safeguards',
      highlights: ['Hydrostatic Lock Risk', '2.5mm Tyre Tread', 'Underbody Anti-Rust'],
      description:
        'Protect your motor from hydrostatic engine stall, rusty underbodies, deteriorated wiper blades, brake fading, and waterlogged urban flash floods.',
    },
    {
      id: '04',
      to: '/car-insurance-guide-india-zero-dep-explained',
      title: 'Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained',
      exactLinkText: 'Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained',
      actionLabel: 'Read Car Insurance Guide India',
      image: '/images/car-insurance-guide-india.webp',
      imageAlt: 'Car insurance policy documents and contract signing with pen',
      badge: 'Insurance & Finance',
      category: 'insurance',
      readTime: '8 min read',
      tag: 'Policy Rider Guide',
      highlights: ['Zero Depreciation', 'Return to Invoice', 'NCB 50% Transfer'],
      description:
        'Understand Zero Depreciation, Return to Invoice (RTI), and Engine Protection riders, and learn how buying directly online saves 20% to 40% on showroom insurance quotes.',
    },
    {
      id: '05',
      to: '/manual-vs-automatic-cars-india-amt-cvt-dct',
      title: 'Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter',
      exactLinkText: 'Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter',
      actionLabel: 'Read Manual vs Automatic Cars in India Guide',
      image: '/images/manual-vs-automatic-cars-india.webp',
      imageAlt: 'Modern car interior showing automatic transmission gear selector and center console',
      badge: 'Drivetrain Analysis',
      category: 'powertrain',
      readTime: '9 min read',
      tag: 'Gearbox Guide',
      highlights: ['Stop & Go Traffic', 'Clutch Overheating', 'Real City Mileage'],
      description:
        'Compare AMT, CVT, DCT, and Torque Converter transmissions for shift smoothness, bumper-to-bumper city crawl convenience, fuel economy, and long-term durability.',
    },
    {
      id: '06',
      to: '/car-mileage-tips-india-boost-fuel-economy',
      title: 'Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy',
      exactLinkText: 'Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy',
      actionLabel: 'Read Car Mileage Tips India Guide',
      image: '/images/car-mileage-tips-india.webp',
      imageAlt: 'Modern car digital dashboard and speedometer cruising on the expressway',
      badge: 'Fuel Efficiency Tips',
      category: 'maintenance',
      readTime: '8 min read',
      tag: 'Fuel Savings',
      highlights: ['Cold PSI Checks', '80 km/h Sweet Spot', 'Cut Signal Idling'],
      description:
        'Ten actionable techniques to boost real car mileage on Indian roads: cold tyre pressure checks, expressway cruising speeds, air filter maintenance, and idle fuel waste reduction.',
    },
  ];

  const homeSeo = SEO_DATA['/'];

  return (
    <>
      <SEOHead
        title={homeSeo.title}
        description={homeSeo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/"
        ogImage="https://drivesmart-india.vercel.app/images/car-buying-guide-india-hero.webp"
        keywords={`${homeSeo.mainKeyword}, ${homeSeo.relatedKeywords.join(', ')}`}
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
                to="/first-car-buying-guide-india-step-by-step"
                className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-base font-bold px-6 py-3.5 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <span>Read our first car buying guide</span>
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-semibold px-6 py-3.5 rounded-xl border border-white/20 transition-all"
              >
                <span>Compare Fuel Options</span>
              </Link>
              <Link
                to="/new-cars-in-india-2026"
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
                              to={`/cars/${car.seoSlug}`}
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

          {/* All Blogs Featured Directly at the Start of the Page - Linewise Feed */}
          <div id="latest-guides" className="mt-10 mb-10 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B1A] flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Editorial Guides & Research</span>
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  All Car Buying & Ownership Blogs
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  6 in-depth, research-backed guides written for Indian car buyers and owners
                </p>
              </div>

              {/* View Mode Toggle: Linewise (List) vs Grid */}
              <div className="flex items-center gap-2 self-start md:self-auto bg-slate-900/90 p-1 rounded-xl border border-slate-700/80 shadow-md">
                <button
                  type="button"
                  onClick={() => setViewMode('linewise')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'linewise'
                      ? 'bg-[#FF6B1A] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Switch to Linewise list view"
                >
                  <List className="w-3.5 h-3.5" />
                  <span>Linewise (List)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-[#FF6B1A] text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  aria-label="Switch to Grid view"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>Grid</span>
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-6 pb-2 overflow-x-auto text-xs">
              {[
                { id: 'all', label: 'All Blogs (6)' },
                { id: 'buying', label: 'Buying & Budget' },
                { id: 'powertrain', label: 'Powertrains & Fuel' },
                { id: 'maintenance', label: 'Maintenance & Care' },
                { id: 'insurance', label: 'Insurance & Protection' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white text-[#0B1F3A] font-bold shadow-sm'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* LINEWISE (LIST) VIEW */}
            {viewMode === 'linewise' ? (
              <div className="space-y-4">
                {allBlogs
                  .filter(
                    (blog) => activeCategory === 'all' || blog.category === activeCategory
                  )
                  .map((blog) => (
                    <article
                      key={blog.to}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-white/10 dark:border-slate-800 shadow-xl overflow-hidden hover:shadow-2xl hover:border-[#FF6B1A]/40 transition-all group flex flex-col md:flex-row items-stretch h-[470px] md:h-64 w-full"
                    >
                      {/* Left: Thumbnail image with badge */}
                      <div className="w-full md:w-72 lg:w-80 shrink-0 h-48 md:h-full relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <SmartImage
                          src={blog.image}
                          alt={blog.imageAlt}
                          width={600}
                          height={340}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                          <span className="text-[#FF6B1A] font-black">{blog.id}</span>
                          <span>{blog.badge}</span>
                        </div>
                      </div>

                      {/* Right: Linewise Content Details */}
                      <div className="p-5 md:p-6 flex flex-col justify-between flex-1 min-w-0 h-full overflow-hidden">
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 h-5 shrink-0">
                            <span className="inline-flex items-center gap-1 text-[#FF6B1A] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded text-[11px] font-bold">
                              {blog.tag}
                            </span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                            <span>•</span>
                            <span>Updated Oct 2026</span>
                          </div>

                          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 h-14 flex items-center mb-1 group-hover:text-[#FF6B1A] transition-colors">
                            <Link to={blog.to} className="line-clamp-2">{blog.title}</Link>
                          </h3>

                          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 h-10 mb-2 overflow-hidden">
                            {blog.description}
                          </p>

                          {/* Quick Highlights / Bullet Tags */}
                          <div className="flex items-center gap-1.5 mb-2 h-7 overflow-hidden shrink-0">
                            {blog.highlights.map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0"
                              >
                                ✓ {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 h-10 mt-auto">
                          <Link
                            to={blog.to}
                            className="text-xs sm:text-sm font-bold text-[#FF6B1A] hover:text-[#e05b12] inline-flex items-center gap-1.5 group-hover:underline truncate max-w-[calc(100%-110px)]"
                          >
                            <span className="truncate">{blog.exactLinkText}</span>
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                          </Link>
                          <Link
                            to={blog.to}
                            className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-[#FF6B1A]/10 text-[#FF6B1A] hover:bg-[#FF6B1A] hover:text-white text-xs font-bold transition-colors shrink-0"
                          >
                            <span>Read guide</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            ) : (
              /* GRID VIEW */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allBlogs
                  .filter(
                    (blog) => activeCategory === 'all' || blog.category === activeCategory
                  )
                  .map((blog) => (
                    <article
                      key={blog.to}
                      className="bg-white dark:bg-slate-900 rounded-2xl border border-white/10 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all group h-[480px] w-full"
                    >
                      <div className="h-48 w-full shrink-0 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <SmartImage
                          src={blog.image}
                          alt={blog.imageAlt}
                          width={600}
                          height={340}
                          loading="lazy"
                          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-white/20">
                          <span className="text-[#FF6B1A] font-black">{blog.id}</span>
                          <span>{blog.badge}</span>
                        </div>
                      </div>

                      <div className="p-5 flex-1 flex flex-col justify-between min-w-0 overflow-hidden">
                        <div>
                          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 h-5 shrink-0">
                            <span className="inline-flex items-center gap-1 text-[#FF6B1A] bg-orange-50 dark:bg-orange-950/40 px-2 py-0.5 rounded text-[11px] font-bold">
                              {blog.tag}
                            </span>
                            <span>•</span>
                            <span>{blog.readTime}</span>
                          </div>

                          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 h-14 flex items-center mb-2 group-hover:text-[#FF6B1A] transition-colors">
                            <Link to={blog.to} className="line-clamp-2">{blog.title}</Link>
                          </h3>

                          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 h-14 mb-3 overflow-hidden">
                            {blog.description}
                          </p>

                          {/* Highlights pills */}
                          <div className="flex items-center gap-1.5 mb-2 h-7 overflow-hidden shrink-0">
                            {blog.highlights.slice(0, 2).map((item, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shrink-0"
                              >
                                ✓ {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between shrink-0 h-11 mt-auto">
                          <Link
                            to={blog.to}
                            className="text-xs font-bold text-[#FF6B1A] hover:text-[#e05b12] inline-flex items-center gap-1 truncate max-w-[calc(100%-95px)]"
                          >
                            <span className="truncate">{blog.exactLinkText}</span>
                            <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                          </Link>
                          <Link
                            to={blog.to}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#FF6B1A]/10 text-[#FF6B1A] hover:bg-[#FF6B1A] hover:text-white text-[11px] font-bold transition-colors shrink-0"
                          >
                            <span>Read</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
              </div>
            )}
          </div>

          {/* Hero Showroom Image Banner */}
          <div className="max-w-4xl mx-auto pt-2">
            <SmartImage
              src="/images/car-buying-guide-india-hero.webp"
              alt="Comprehensive car buying guide India illustration showcasing latest cars in India 2026 on open expressway"
              width={1200}
              height={630}
              loading="lazy"
              caption="DriveSmart India guides you through modern Indian highways, showroom negotiations, and vehicle ownership."
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
                Browse Latest Cars in India 2026 Launches
              </h2>
            </div>
            <Link
              to="/new-cars-in-india-2026"
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
                      <Link to={`/cars/${car.seoSlug}`}>
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
                      to={`/cars/${car.seoSlug}`}
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
            Essential Car Tips for Beginners & Ownership Advice
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
