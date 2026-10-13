import React from 'react';
import { Link } from 'react-router-dom';
import { Fuel, Compass, ShieldCheck, ExternalLink, Car, Calculator, Scale } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1F3A] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & About */}
          <div className="space-y-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#FF6B1A] flex items-center justify-center font-black text-lg text-white">
                DS
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                DriveSmart <span className="text-[#FF6B1A]">India</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              DriveSmart India delivers research-backed, practical advice on car buying, fuel choices, and maintenance tailored for Indian motorists.
            </p>
            <div className="text-xs text-slate-500 pt-2 border-t border-slate-800">
              Editorial standards: Independent, grounded in real-world Indian road, regulatory, and climatic realities.
            </div>
          </div>

          {/* Core Guides */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Featured Guides
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Fuel className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Petrol vs Diesel vs CNG vs EV Comparison</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/first-car-buying-guide-india-step-by-step"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>First Car Buying Guide for Indian Buyers</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/monsoon-car-care-tips-rainy-season-protection"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Monsoon Car Care Tips & Rain Protection</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/car-insurance-guide-india-zero-dep-explained"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Car Insurance Guide India (Zero Dep & RTI)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/manual-vs-automatic-cars-india-amt-cvt-dct"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Manual vs Automatic Cars in India (AMT, CVT, DCT)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/car-mileage-tips-india-boost-fuel-economy"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Fuel className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Car Mileage Tips India (Boost Fuel Economy)</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <span>Your Complete Car Buying Guide India (Homepage)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* New 2026 Launches & Tools */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              2026 Cars & Calculators
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/new-cars-in-india-2026"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Car className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Browse 10 Latest 2026 Cars in India</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/compare-cars-in-india"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Scale className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Compare Up to 3 Vehicles Side by Side</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/car-loan-emi-calculator-india"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Calculate Your Car Loan EMI</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tools/car-fuel-cost-calculator-india"
                  className="flex items-center gap-2 text-slate-300 hover:text-[#FF6B1A] transition-colors"
                >
                  <Fuel className="w-4 h-4 text-[#FF6B1A] shrink-0" />
                  <span>Calculate Monthly Fuel Running Costs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Notice & Official Portals */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
              Market Transparency
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Prices and costs vary by city and model; check with your dealer. Prices are approximate ex-showroom and may change based on state RTO charges and manufacturer price revisions.
            </p>
            <div className="pt-2 border-t border-slate-800 space-y-2">
              <a
                href="https://parivahan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
              >
                <span>Parivahan Sewa (MoRTH Vehicle Portal)</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>
              <div>
                <a
                  href="https://beeindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  <span>Bureau of Energy Efficiency (EV Standards)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 DriveSmart India. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-white transition-colors">About DriveSmart</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Car Blog India</Link>
          </div>
          <p className="flex items-center gap-1 text-slate-400">
            Crafted for smart car ownership across India
          </p>
        </div>
      </div>
    </footer>
  );
};
