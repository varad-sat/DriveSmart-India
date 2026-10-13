import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { SEO_DATA } from '../data/seoKeywords';
import { ShieldCheck, Award, HeartHandshake, Compass, Users, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const seo = SEO_DATA['/about'];

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/about"
        keywords={`${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`}
        type="website"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
                About Us
              </span>
            </li>
          </ol>
        </nav>

        {/* Header (Single H1) */}
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Independent Automotive Portal</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            About DriveSmart India: Transparent Car Research for Everyone
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded with a passion for automotive transparency, <strong>DriveSmart India</strong> empowers buyers across metro and regional cities with verified on-road pricing estimates, independent fuel comparisons, and realistic running cost breakdowns.
          </p>
        </header>

        {/* Hero Banner Image */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800">
          <SmartImage
            src="/images/car-buying-guide-india-hero.webp"
            alt="Editorial team of DriveSmart India analyzing passenger vehicle specifications and on-road prices"
            width={1000}
            height={450}
            className="w-full h-auto object-cover max-h-[380px]"
          />
        </div>

        {/* Section 1: H2 */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1F3A] dark:text-white">
            Our Mission as a Dedicated Car Guide Website India
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            As a dedicated <strong>car guide website India</strong> motorists rely upon, our core philosophy is simple: cut through dealership jargon, aggressive sales targets, and hidden accessory packages. We deliver honest, mathematically grounded assessments so you can purchase vehicles matching your actual financial capabilities.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Whether you are evaluating a compact family hatchback or high-riding crossover, our car guide website India provides reliable spec comparisons and regulatory guidance aligned with official MoRTH transport guidelines.
          </p>
        </section>

        {/* Section 2: H2 */}
        <section className="mb-12 space-y-4">
          <h2 className="text-2xl font-bold text-[#0B1F3A] dark:text-white">
            Honest, Data-Driven Car Buying Help
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Modern vehicle showrooms can be overwhelming for first-time owners. Our editorial team provides comprehensive <strong>car buying help</strong>, including step-by-step pre-delivery inspection checklists, insurance rider evaluations (Zero Dep vs RTI), and loan EMI calculations.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 not-prose my-6">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Zero Dealer Bias</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                We accept no dealership commissions. Our reviews evaluate engineering merit, safety crash ratings, and running costs solely for the consumer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Real Running Costs</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Rather than trusting lab claims, our calculators provide tangible car buying help based on practical fuel prices and city commuting distances.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Actionable Checklists</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                From daylight PDI inspections to monsoon underbody anti-rust protection, we provide structured checklists you can use in the showroom.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion / Last Paragraph */}
        <section className="bg-slate-100 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Drive With Unwavering Confidence
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            In conclusion, <strong>DriveSmart India</strong> remains steadfastly committed to serving buyers across India with trustworthy data, transparent toolkits, and practical ownership wisdom.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/cars"
              className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-5 py-3 rounded-xl transition-colors"
            >
              <span>Explore Latest Cars in India</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 transition-colors"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
