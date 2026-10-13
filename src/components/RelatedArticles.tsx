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
      path: '/petrol-vs-diesel-vs-cng-vs-ev',
      title: 'Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?',
      description: 'Comprehensive analysis of running costs, mileage, long-term maintenance, and environmental impact across all 4 fuels in India.',
      readTime: '9 min read',
      icon: Fuel,
      tag: 'Powertrain Guide',
    },
    {
      path: '/first-car-buying-guide',
      title: 'First Car Buying Guide: 10 Steps for Indian Buyers',
      description: 'Essential walkthrough covering real budgets, loan EMIs, test-drive checks, insurance negotiation, and pre-delivery inspection.',
      readTime: '10 min read',
      icon: Compass,
      tag: 'Buyer Handbook',
    },
    {
      path: '/monsoon-car-care-tips',
      title: 'Monsoon Car Care Tips: 12 Ways to Protect Your Car',
      description: 'Practical rainy season checklist for tyre tread, hydrostatic lock prevention, brake pads, electrical safety, and rust prevention.',
      readTime: '8 min read',
      icon: ShieldCheck,
      tag: 'Maintenance Checklist',
    },
  ];

  const filtered = articles.filter((a) => a.path !== currentPath);

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
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF6B1A]">
                    <Icon className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </span>
                  <span className="text-xs text-slate-400">{item.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                  <Link
                    to={item.path}
                    className="hover:text-[#FF6B1A] transition-colors"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  to={item.path}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#FF6B1A] hover:text-[#e05b12] group"
                >
                  <span>Explore our {item.title.toLowerCase().includes('petrol') ? 'petrol vs diesel vs CNG vs EV comparison' : item.title.toLowerCase().includes('first') ? 'complete first car buying guide' : 'monsoon car care tips'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
