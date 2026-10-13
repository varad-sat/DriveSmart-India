import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { CARS_DATA, Car, getCarBySlug } from '../data/cars';
import { useApp } from '../context/AppContext';
import { SEO_DATA } from '../data/seoKeywords';
import {
  Scale,
  Plus,
  X,
  Calculator,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChevronRight,
  RotateCcw,
  Award,
} from 'lucide-react';

export const ComparePage: React.FC = () => {
  const { compareList, addToCompare, removeFromCompare, clearCompare } = useApp();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedSlotCar, setSelectedSlotCar] = useState<string>('');

  // Sync URL ?cars=slug1,slug2 with compareList on mount
  useEffect(() => {
    const carsFromQuery = searchParams.get('cars');
    if (carsFromQuery) {
      const slugs = carsFromQuery.split(',').map((s) => s.trim()).filter(Boolean);
      slugs.forEach((slug) => {
        const found = getCarBySlug(slug);
        if (found && !compareList.includes(found.slug)) {
          addToCompare(found.slug);
        }
      });
    }
  }, []);

  // Sync compareList changes back into URL
  useEffect(() => {
    if (compareList.length > 0) {
      setSearchParams({ cars: compareList.join(',') }, { replace: true });
    } else if (searchParams.has('cars')) {
      const next = new URLSearchParams(searchParams);
      next.delete('cars');
      setSearchParams(next, { replace: true });
    }
  }, [compareList]);

  const selectedCars = CARS_DATA.filter((car) => compareList.includes(car.slug));

  // Find lowest price minimum among selected cars (for highlight)
  const lowestPriceMin = Math.min(
    ...selectedCars
      .map((c) => c.priceMinLakh)
      .filter((p): p is number => p !== null && p !== undefined)
  );

  const handleAddFromDropdown = (slug: string) => {
    if (slug) {
      addToCompare(slug);
      setSelectedSlotCar('');
    }
  };

  const compareSeo = SEO_DATA['/compare'];
  const pageTitle = compareSeo.title;
  const pageDesc = compareSeo.metaDescription;

  const canonicalUrl = `https://drivesmart-india.vercel.app/compare-cars-in-india${
    compareList.length > 0 ? `?cars=${compareList.join(',')}` : ''
  }`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: pageTitle,
    description: pageDesc,
    url: canonicalUrl,
  };

  return (
    <>
      <SEOHead
        title={compareSeo.title}
        description={compareSeo.metaDescription}
        canonicalUrl={canonicalUrl}
        keywords={`${compareSeo.mainKeyword}, ${compareSeo.relatedKeywords.join(', ')}`}
        type="website"
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumbs" className="mb-4">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#FF6B1A] transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link to="/new-cars-in-india-2026" className="hover:text-[#FF6B1A] transition-colors">
                2026 Cars
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Vehicle Comparison Tool
              </span>
            </li>
          </ol>
        </nav>

        {/* Header (Single H1) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-2">
              <Scale className="w-3.5 h-3.5" />
              <span>Multi-Vehicle Comparison</span>
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight">
              Compare Cars in India: Spec & Price Evaluation (2026)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
              Use our interactive <strong>car comparison tool</strong> to <strong>compare cars in India</strong> side-by-side. Whether you need a comprehensive <strong>SUV comparison India</strong> or want to evaluate compact family hatchbacks, compare up to 3 vehicles across ex-showroom prices, fuel mileage, safety equipment, pros, and cons.
            </p>
          </div>

          {selectedCars.length > 0 && (
            <button
              onClick={clearCompare}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 hover:bg-rose-100 transition-colors shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear All Comparisons</span>
            </button>
          )}
        </div>

        {/* Empty state or Car Selector Tray */}
        {selectedCars.length < 3 && (
          <div className="mb-8 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center shrink-0">
                <Plus className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Add another vehicle to compare ({selectedCars.length}/3 selected)
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Select from any of India&apos;s 10 new 2026 car launches
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <select
                value={selectedSlotCar}
                onChange={(e) => handleAddFromDropdown(e.target.value)}
                className="w-full sm:w-64 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
              >
                <option value="">-- Choose a Car to Add --</option>
                {CARS_DATA.filter((c) => !compareList.includes(c.slug)).map((c) => (
                  <option key={c.slug} value={c.slug}>
                    {c.name} ({c.brand} • {c.priceMinLakh ? `₹${c.priceMinLakh}L` : 'TBC'})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* If no cars selected */}
        {selectedCars.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center mx-auto">
              <Scale className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              No Vehicles Selected for Comparison
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Select 2 or 3 vehicles from our catalog below to generate an instant side-by-side spec sheet with highlighted pricing.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-left pt-2">
              {CARS_DATA.slice(0, 6).map((car) => (
                <button
                  key={car.slug}
                  onClick={() => addToCompare(car.slug)}
                  className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-[#FF6B1A] bg-slate-50 dark:bg-slate-800/60 text-xs font-semibold text-slate-800 dark:text-slate-200 flex flex-col justify-between text-left transition-colors"
                >
                  <span className="font-bold text-slate-900 dark:text-white truncate block">
                    {car.name}
                  </span>
                  <span className="text-[11px] text-[#FF6B1A] mt-1 block">
                    + Add to Compare
                  </span>
                </button>
              ))}
            </div>

            <div>
              <Link
                to="/new-cars-in-india-2026"
                className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-5 py-3 rounded-xl shadow-md transition-all"
              >
                <span>Browse All 2026 Launches</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* Side-by-Side Comparison Table */
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60">
                    <th className="p-4 sm:p-5 w-48 text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Specification
                    </th>
                    {selectedCars.map((car) => (
                      <th
                        key={car.slug}
                        className="p-4 sm:p-5 min-w-[260px] max-w-[320px] align-top"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-[#0B1F3A] text-white">
                            {car.brand}
                          </span>
                          <button
                            onClick={() => removeFromCompare(car.slug)}
                            className="p-1 rounded-md text-slate-400 hover:text-rose-500 hover:bg-slate-200 dark:hover:bg-slate-700"
                            title={`Remove ${car.name}`}
                            aria-label={`Remove ${car.name}`}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <h3 className="text-lg font-black text-slate-900 dark:text-white leading-tight">
                          <Link to={`/cars/${car.seoSlug}`} className="hover:text-[#FF6B1A]">
                            {car.name}
                          </Link>
                        </h3>
                        <div className="w-full mt-2 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                          <SmartImage
                            src={car.image}
                            alt={`Compare cars in India: ${car.name} ${car.bodyType} side-by-side specifications`}
                            width={320}
                            height={180}
                            fallbackText={car.name}
                            loading="lazy"
                            className="h-32 w-full object-cover"
                          />
                        </div>
                      </th>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <th
                        key={idx}
                        className="p-4 sm:p-5 min-w-[220px] align-middle text-center bg-slate-50/50 dark:bg-slate-800/30 border-l border-dashed border-slate-200 dark:border-slate-800"
                      >
                        <div className="text-xs text-slate-400 font-medium">
                          + Empty Comparison Slot
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {/* Row: Ex-Showroom Price */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs">
                      Ex-Showroom Price
                    </td>
                    {selectedCars.map((car) => {
                      const isLowest =
                        car.priceMinLakh !== null &&
                        car.priceMinLakh !== undefined &&
                        car.priceMinLakh === lowestPriceMin &&
                        selectedCars.length > 1;
                      const priceString =
                        car.priceMinLakh && car.priceMaxLakh
                          ? `₹${car.priceMinLakh.toFixed(2)} – ₹${car.priceMaxLakh.toFixed(2)} Lakh`
                          : 'Price: to be confirmed';

                      return (
                        <td key={car.slug} className="p-4 sm:p-5">
                          <div
                            className={`p-3 rounded-xl ${
                              isLowest
                                ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800'
                                : 'bg-slate-50 dark:bg-slate-800/60'
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              {isLowest && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                                  <Award className="w-3.5 h-3.5" />
                                  <span>Lowest Starting Price</span>
                                </span>
                              )}
                            </div>
                            <div
                              className={`text-base font-extrabold mt-0.5 ${
                                isLowest
                                  ? 'text-emerald-700 dark:text-emerald-400'
                                  : 'text-[#FF6B1A]'
                              }`}
                            >
                              {priceString}
                            </div>
                          </div>
                        </td>
                      );
                    })}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>

                  {/* Row: Body Type & Seating */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs">
                      Body & Seating
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.slug} className="p-4 sm:p-5 text-xs text-slate-700 dark:text-slate-300">
                        <span className="font-bold text-slate-900 dark:text-white block">
                          {car.bodyType}
                        </span>
                        <span>{car.seating} Passengers</span>
                      </td>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>

                  {/* Row: Fuel Types */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs">
                      Available Powertrains
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.slug} className="p-4 sm:p-5">
                        <div className="flex flex-wrap gap-1.5">
                          {car.fuelTypes.map((fuel) => (
                            <span
                              key={fuel}
                              className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                            >
                              {fuel}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>

                  {/* Row: Key Features */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs align-top">
                      Key Highlights
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.slug} className="p-4 sm:p-5 align-top">
                        <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                          {car.keyFeatures.map((f, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#FF6B1A] font-bold">•</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>

                  {/* Row: Pros */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs align-top">
                      Pros (Why Buy)
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.slug} className="p-4 sm:p-5 align-top">
                        <ul className="space-y-1 text-xs text-emerald-800 dark:text-emerald-300 bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                          {car.pros.map((pro, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>

                  {/* Row: Cons */}
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs align-top">
                      Cons (Watch Outs)
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.slug} className="p-4 sm:p-5 align-top">
                        <ul className="space-y-1 text-xs text-rose-800 dark:text-rose-300 bg-rose-50/50 dark:bg-rose-950/20 p-3 rounded-xl border border-rose-100 dark:border-rose-900/40">
                          {car.cons.map((con, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>

                  {/* Row: Next Step Action */}
                  <tr>
                    <td className="p-4 sm:p-5 font-bold text-slate-900 dark:text-white text-xs">
                      Actions
                    </td>
                    {selectedCars.map((car) => (
                      <td key={car.slug} className="p-4 sm:p-5 space-y-2">
                        {car.priceMinLakh && (
                          <Link
                            to={`/tools/car-loan-emi-calculator-india?price=${car.priceMinLakh}`}
                            className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                          >
                            <Calculator className="w-3.5 h-3.5 text-[#FF6B1A]" />
                            <span>Calculate EMI for {car.name}</span>
                          </Link>
                        )}
                        <Link
                          to={`/cars/${car.seoSlug}`}
                          className="w-full inline-flex items-center justify-center gap-1.5 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-colors"
                        >
                          <span>View {car.name} price and features</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </td>
                    ))}
                    {Array.from({ length: 3 - selectedCars.length }).map((_, idx) => (
                      <td key={idx} className="p-4 sm:p-5 bg-slate-50/30 dark:bg-slate-800/10" />
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 text-center italic">
              Prices are approximate ex-showroom and may change. Check with your local dealership for on-road quotations.
            </div>
          </div>
        )}

        {/* SEO H2 & Conclusion Section */}
        <section className="mt-12 p-6 sm:p-8 bg-slate-100 dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
            Compare Cars in India: Objective Technical Analysis
          </h2>
          <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200">
            Interactive Car Comparison Tool & In-Depth SUV Comparison India
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Our comprehensive <strong>car comparison tool</strong> makes any family hatchback or <strong>SUV comparison India</strong> straightforward, highlighting boot spaces, cabin features, and maintenance expectations across manufacturers.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            In conclusion, using DriveSmart to <strong>compare cars in India</strong> side-by-side guarantees that your hard-earned savings go toward the vehicle best engineered for your family&apos;s daily driving needs.
          </p>
        </section>
      </div>
    </>
  );
};
