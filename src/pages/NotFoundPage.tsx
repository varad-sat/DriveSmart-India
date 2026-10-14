import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Compass, Fuel, ShieldCheck, Home, Car, Calculator, Scale } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Page Not Found: 404 Error Guide | DriveSmart"
        description="The automotive guide you are looking for does not exist. Explore our car buying guides, fuel comparisons and 2026 car launches."
        canonicalUrl="https://drivesmart-india.vercel.app/404"
        robots="noindex"
        type="website"
      />
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <span className="text-sm font-bold uppercase tracking-wider text-[#FF6B1A]">
          404 Error
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1F3A] dark:text-white mt-2 mb-3">
          Looking for a Car Guide or 2026 Launch?
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          We couldn&apos;t locate the exact URL you requested. Explore our research-backed automotive resources below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto mb-10">
          <Link
            to="/new-cars-in-india-2026"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] transition-colors shadow-xs group"
          >
            <Car className="w-5 h-5 text-[#FF6B1A] mb-2" />
            <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] text-sm">
              2026 Cars (10 Models)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Browse Sierra, XEV 9S, e Vitara & more</p>
          </Link>
          <Link
            to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] transition-colors shadow-xs group"
          >
            <Fuel className="w-5 h-5 text-[#FF6B1A] mb-2" />
            <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] text-sm">
              Fuel Powertrain Guide
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Petrol vs Diesel vs CNG vs EV</p>
          </Link>
          <Link
            to="/first-car-buying-guide-india-step-by-step"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] transition-colors shadow-xs group"
          >
            <Compass className="w-5 h-5 text-[#FF6B1A] mb-2" />
            <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] text-sm">
              First Car Guide
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">10 Simple steps for Indian buyers</p>
          </Link>
          <Link
            to="/monsoon-car-care-tips-rainy-season-protection"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] transition-colors shadow-xs group"
          >
            <ShieldCheck className="w-5 h-5 text-[#FF6B1A] mb-2" />
            <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] text-sm">
              Monsoon Car Care
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">12 Ways to protect your car</p>
          </Link>
          <Link
            to="/tools/car-loan-emi-calculator-india"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] transition-colors shadow-xs group"
          >
            <Calculator className="w-5 h-5 text-[#FF6B1A] mb-2" />
            <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] text-sm">
              Car Loan EMI Calculator
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Plan monthly auto loan budget</p>
          </Link>
          <Link
            to="/compare-cars-in-india"
            className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] transition-colors shadow-xs group"
          >
            <Scale className="w-5 h-5 text-[#FF6B1A] mb-2" />
            <h2 className="font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A] text-sm">
              Compare Vehicles
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Side by side spec comparison</p>
          </Link>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#0B1F3A] hover:bg-[#132c4e] text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </>
  );
};
