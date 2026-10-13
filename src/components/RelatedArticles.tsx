import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Compass, ShieldCheck, ArrowRight } from 'lucide-react';

interface RelatedArticlesProps {
  currentPath: string;
}

interface ArticleInfo {
  path: string;
  title: string;
  description: string;
  readTime: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentPath }) => {
  const articles: ArticleInfo[] = [
    {
      path: '/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india',
      title: 'Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?',
      description: 'Comprehensive analysis of running costs, mileage, long-term maintenance, and environmental impact across all 4 fuels in India.',
      readTime: '9 min read',
      icon: Fuel,
      tag: 'Powertrain Guide',
    },
    {
      path: '/first-car-buying-guide-india-step-by-step',
      title: 'First Car Buying Guide: 10 Steps for Indian Buyers',
      description: 'Essential walkthrough covering real budgets, loan EMIs, test-drive checks, insurance negotiation, and pre-delivery inspection.',
      readTime: '10 min read',
      icon: Compass,
      tag: 'Buyer Handbook',
    },
    {
      path: '/monsoon-car-care-tips-rainy-season-protection',
      title: 'Monsoon Car Care Tips: 12 Ways to Protect Your Car',
      description: 'Practical rainy season checklist for tyre tread, hydrostatic lock prevention, brake pads, electrical safety, and rust prevention.',
      readTime: '8 min read',
      icon: ShieldCheck,
      tag: 'Seasonal Protection',
    },
    {
      path: '/car-insurance-guide-india-zero-dep-explained',
      title: 'Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained',
      description: 'Learn how to choose car insurance in India: understand Zero Depreciation, Return to Invoice, and Engine Protect riders, plus how to save 30% online.',
      readTime: '8 min read',
      icon: ShieldCheck,
      tag: 'Insurance & Protection',
    },
    {
      path: '/manual-vs-automatic-cars-india-amt-cvt-dct',
      title: 'Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter',
      description: 'Compare manual and automatic gearboxes: shift smoothness, city convenience, real-world mileage, and long-term transmission reliability.',
      readTime: '9 min read',
      icon: Compass,
      tag: 'Drivetrain Analysis',
    },
    {
      path: '/car-mileage-tips-india-boost-fuel-economy',
      title: 'Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy',
      description: 'Ten proven techniques to increase car mileage on Indian roads: tyre pressure, expressway cruising speed, air filter care, and idling habits.',
      readTime: '8 min read',
      icon: Fuel,
      tag: 'Fuel Efficiency Tips',
    },
  ];

  const filtered = articles.filter((a) => !currentPath.includes(a.path.replace('-car-comparison-india', '').replace('-india-step-by-step', '').replace('-rainy-season-protection', '').replace('-zero-dep-explained', '').replace('-amt-cvt-dct', '').replace('-boost-fuel-economy', '')) && a.path !== currentPath);

  return (
    <section aria-labelledby="related-articles-heading" className="my-16 pt-10 border-t border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 id="related-articles-heading" className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
            Related Guides You Might Need
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Continue your automotive journey with our hand-picked companion resources.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => {
          const Icon = item.icon;
          return (
            <article
              key={item.path}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between h-[250px] w-full"
            >
              <div>
                <div className="flex items-center justify-between mb-3 h-6 shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A]">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </span>
                  <span className="text-xs text-slate-400">{item.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug line-clamp-2 h-14 flex items-center">
                  <Link
                    to={item.path}
                    className="hover:text-[#FF6B1A] transition-colors line-clamp-2"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2 h-10 overflow-hidden">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-auto flex items-center justify-between h-10 shrink-0">
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF6B1A] hover:text-[#e05b12] group truncate max-w-[calc(100%-10px)]"
                >
                  <span className="truncate">
                    {item.path.includes('petrol-vs-diesel')
                      ? 'Explore our petrol vs diesel vs CNG vs EV comparison'
                      : item.path.includes('first-car-buying')
                      ? 'Explore our complete first car buying guide'
                      : item.path.includes('monsoon-car')
                      ? 'Explore our monsoon car care tips'
                      : item.path.includes('car-insurance')
                      ? 'Explore our car insurance guide India'
                      : item.path.includes('manual-vs-automatic')
                      ? 'Explore our manual vs automatic cars in India guide'
                      : 'Explore our car mileage tips India'}
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
