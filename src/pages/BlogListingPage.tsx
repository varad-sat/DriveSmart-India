import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { SEO_DATA } from '../data/seoKeywords';
import { BookOpen, Sparkles, Clock, ArrowRight, ChevronRight, ShieldCheck, Zap } from 'lucide-react';

export const BlogListingPage: React.FC = () => {
  const seo = SEO_DATA['/blog'];

  const articles = [
    {
      to: '/blog/new-suvs-in-india-2026',
      title: 'New SUVs in India 2026: Complete Launch Guide, Specs & Prices',
      badge: 'SUV Launches',
      readTime: '9 min read',
      image: '/images/first-car-buying-guide.webp',
      imageAlt: 'Leading car blog India covering latest SUV launches and prices',
      desc: 'Discover all new SUVs in India 2026 including Tata Sierra, Kia Syros, and Renault Duster with full specs, price expectations, and segment comparisons.',
    },
    {
      to: '/blog/electric-cars-in-india-2026',
      title: 'Electric Cars in India 2026: Real-World Range, Models & EV Prices',
      badge: 'EV Special',
      readTime: '10 min read',
      image: '/images/monsoon-car-care-tips.webp',
      imageAlt: 'Insightful car blog India analysis of electric vehicle ranges and ownership',
      desc: 'Comprehensive breakdown of electric cars in India 2026. Explore Mahindra XEV 9e, Maruti Suzuki e Vitara, real charging costs, and battery warranties.',
    },
    {
      to: '/blog/petrol-vs-diesel-vs-cng-vs-ev',
      title: 'Petrol vs Diesel vs CNG vs EV: Which Fuel Type Car Is Best in 2026?',
      badge: 'Powertrain Guide',
      readTime: '12 min read',
      image: '/images/petrol-vs-diesel-vs-cng-vs-ev.webp',
      imageAlt: 'Comprehensive car blog India powertrain comparison matrix',
      desc: 'Compare per-kilometer running costs, city fuel efficiency, DPF reliability, and resale value across petrol, diesel, CNG, and electric powertrains.',
    },
    {
      to: '/first-car-buying-guide-india-step-by-step',
      title: 'First Car Buying Guide India: 10 Essential Steps for Beginners',
      badge: 'Beginner Guide',
      readTime: '10 min read',
      image: '/images/first-car-buying-guide.webp',
      imageAlt: 'Car blog India essential first car buying guide',
      desc: 'Everything first-time Indian car buyers need: on-road budget formulation, loan negotiation, pre-delivery inspections, and dealership transparency.',
    },
    {
      to: '/monsoon-car-care-tips-rainy-season-protection',
      title: 'Monsoon Car Care Tips: 12 Rainy Season Protection Steps',
      badge: 'Maintenance',
      readTime: '8 min read',
      image: '/images/monsoon-car-care-tips.webp',
      imageAlt: 'Car blog India vehicle maintenance and monsoon protection strategies',
      desc: 'Protect your vehicle against waterlogging, avoid hydrostatic engine lock, test tyre tread depths, and maintain wiper performance.',
    },
    {
      to: '/car-insurance-guide-india-zero-dep-explained',
      title: 'Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained',
      badge: 'Insurance',
      readTime: '9 min read',
      image: '/images/car-insurance-guide-india.webp',
      imageAlt: 'Car blog India motor insurance and policy breakdown',
      desc: 'Understand critical insurance riders, prevent dealership policy markups, and safeguard against expensive flood and accident repair bills.',
    },
  ];

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/blog"
        keywords={`${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`}
        type="website"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Car Blog India
              </span>
            </li>
          </ol>
        </nav>

        {/* Page Header (Single H1) */}
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Independent Automotive Journalism</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            The Definitive Car Blog India for Smart Automobile Buyers
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Welcome to DriveSmart, your premier <strong>car blog India</strong> resource delivering data-backed vehicle insights, honest reviews, and market trends. Whether you need reliable <strong>car buying tips</strong> or want to keep track of the latest <strong>new car news India</strong>, our editorial team breaks down vehicle ownership without industry bias.
          </p>
        </header>

        {/* H2: Essential Car Buying Tips and Guides */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-[#0B1F3A] dark:text-white">
                Essential Car Buying Tips and Editorial Guides
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Practical car buying tips that simplify financing, powertrain selection, and long-term maintenance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((item) => (
              <article
                key={item.to}
                className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md hover:border-[#FF6B1A] transition-all flex flex-col group"
              >
                <div className="h-44 overflow-hidden relative bg-slate-100 dark:bg-slate-800">
                  <SmartImage
                    src={item.image}
                    alt={item.imageAlt}
                    width={400}
                    height={220}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
                    {item.badge}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-[#FF6B1A] transition-colors line-clamp-2">
                      <Link to={item.to}>{item.title}</Link>
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B1A] hover:text-[#e05b12] pt-2"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* H2: Latest New Car News India & Analysis */}
        <section className="bg-slate-100 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white mb-3">
            Latest New Car News India & Market Insights
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            Indian car buyers today encounter rapid electrification, evolving crash test standards under Bharat NCAP, and surging SUV popularity. Our dedicated journalists publish real-time new car news India coverage to ensure you never overpay for outdated inventory or fall prey to showroom markups.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                Verified Fuel & Price Analysis
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We monitor state fuel tax structures and electric vehicle subsidies, delivering accurate car buying tips you can rely on before negotiating on-road quotes.
              </p>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white mb-1">
                Upcoming 2026 Launches
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Stay updated on new car news India regarding upcoming safety features, hybrid powertrains, and newly announced waiting periods for popular hatchbacks and SUVs.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <footer className="text-center p-6 bg-orange-50/50 dark:bg-orange-950/20 rounded-2xl border border-orange-100 dark:border-orange-900/40">
          <p className="text-sm text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            In conclusion, staying educated through our dedicated <strong>car blog India</strong> guarantees you make financially sound decisions when purchasing, financing, and maintaining your automobile.
          </p>
        </footer>
      </div>
    </>
  );
};
