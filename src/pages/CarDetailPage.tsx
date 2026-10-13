import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { CARS_DATA, Car, getCarBySlug, getCarUrl } from '../data/cars';
import { useApp } from '../context/AppContext';
import { getCarPageSEO } from '../data/seoKeywords';
import {
  Heart,
  Scale,
  Calculator,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Users,
  Fuel,
  Car as CarIcon,
  Sparkles,
  ArrowRight,
  Calendar,
  AlertCircle,
  Check,
} from 'lucide-react';

export const CarDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isFavourite, toggleFavourite, isInCompare, addToCompare } = useApp();

  const car = getCarBySlug(slug);

  if (!car) {
    return <Navigate to="/new-cars-in-india-2026" replace />;
  }

  const isFav = isFavourite(car.slug);
  const inComp = isInCompare(car.slug);

  const priceText =
    car.priceMinLakh && car.priceMaxLakh
      ? `₹${car.priceMinLakh.toFixed(2)} – ₹${car.priceMaxLakh.toFixed(2)} Lakh`
      : 'Price: to be confirmed';

  // Read SEO metadata from seoKeywords generator
  const carSeo = getCarPageSEO(car.name, car.slug);
  const title = carSeo.title;
  const description = carSeo.metaDescription;

  // Related cars (other cars from same brand or body type)
  const relatedCars = CARS_DATA.filter(
    (c) => c.slug !== car.slug && (c.bodyType === car.bodyType || c.brand === car.brand)
  ).slice(0, 3);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: car.name,
    image: `https://drivesmart-india.vercel.app${car.image}`,
    description: car.overview,
    brand: {
      '@type': 'Brand',
      name: car.brand,
    },
    url: `https://drivesmart-india.vercel.app/cars/${car.seoSlug}`,
    offers: car.priceMinLakh
      ? {
          '@type': 'AggregateOffer',
          priceCurrency: 'INR',
          lowPrice: car.priceMinLakh * 100000,
          highPrice: (car.priceMaxLakh ?? car.priceMinLakh) * 100000,
          offerCount: 1,
        }
      : undefined,
  };

  return (
    <>
      <SEOHead
        title={title}
        description={description}
        canonicalUrl={`https://drivesmart-india.vercel.app/cars/${car.seoSlug}`}
        ogImage={`https://drivesmart-india.vercel.app${car.image}`}
        keywords={`${carSeo.mainKeyword}, ${carSeo.relatedKeywords.join(', ')}`}
        type="article"
        schema={schema}
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
              <Link to="/new-cars-in-india-2026" className="hover:text-[#FF6B1A] transition-colors">
                2026 Cars
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                {car.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Hero Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
            {/* Left: Image with car name fallback */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative">
                <SmartImage
                  src={car.image}
                  alt={`${car.name} price in India - ${car.bodyType} exterior styling, key ${car.name} features and design`}
                  width={800}
                  height={480}
                  fallbackText={car.name}
                  loading="eager"
                  className="w-full h-auto rounded-2xl object-cover shadow-xs"
                />
              </div>

              {/* Quick specs pill grid */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Body Style
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                    {car.bodyType}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Fuel Types
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block truncate">
                    {car.fuelTypes.join(', ')}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-center">
                  <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Capacity
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 block">
                    {car.seating} Seats
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Primary Info and Interactive Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B1F3A] text-white">
                    {car.brand}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A]">
                    {car.launchYear} Launch
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight">
                  {car.name} Price in India, Specs & Features (2026)
                </h1>

                {/* Price display */}
                <div className="mt-4 p-4 rounded-2xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-900/50">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 block uppercase tracking-wider">
                    Estimated Price Range
                  </span>
                  <div className="text-2xl sm:text-3xl font-black text-[#FF6B1A] mt-1">
                    {priceText}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 italic">
                    Prices are approximate ex-showroom and may change.
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  Check the latest <strong>{car.name} price in India</strong>, explore top <strong>{car.name} features</strong>, and review detailed <strong>{car.name} pros and cons</strong> before booking your vehicle. {car.tagline}
                </p>
              </div>

              {/* Interactive Actions */}
              <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {/* Pre-filled EMI calculator button */}
                {car.priceMinLakh && (
                  <Link
                    to={`/tools/car-loan-emi-calculator-india?price=${car.priceMinLakh}`}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-sm font-bold py-3 px-6 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Calculate EMI for this car</span>
                  </Link>
                )}

                <div className="grid grid-cols-2 gap-3">
                  {/* Add to compare button */}
                  <button
                    onClick={() => addToCompare(car.slug)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors border ${
                      inComp
                        ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {inComp ? <Check className="w-4 h-4 text-[#FF6B1A]" /> : <Scale className="w-4 h-4" />}
                    <span>{inComp ? 'Added to Compare' : 'Add to Compare'}</span>
                  </button>

                  {/* Save to favourites button */}
                  <button
                    onClick={() => toggleFavourite(car.slug)}
                    className={`inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl text-xs font-bold transition-colors border ${
                      isFav
                        ? 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-200 dark:border-rose-900'
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : ''}`} />
                    <span>{isFav ? 'Saved in Garage' : 'Save to favourites'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Sections: Overview, Key Features, Pros & Cons */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-3">
                {car.name} Overview & Indian Market Positioning
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {car.overview}
              </p>
              <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-200">
                  Buyer Recommendation:
                </span>
                <p>
                  Review our{' '}
                  <Link
                    to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                    className="font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
                  >
                    petrol vs diesel vs CNG vs EV comparison
                  </Link>{' '}
                  to evaluate how this model’s fuel options fit your monthly travel mileage in Indian driving conditions.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-4">
                Key {car.name} Features & Technology Highlights
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.keyFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pros and Cons Side-by-Side */}
            <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-6">
                Detailed {car.name} Pros and Cons for Indian Buyers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pros */}
                <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50">
                  <h3 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Reasons to Buy (Pros)</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {car.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="p-5 rounded-2xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50">
                  <h3 className="text-sm font-bold text-rose-800 dark:text-rose-300 flex items-center gap-2 mb-3">
                    <XCircle className="w-4 h-4 text-rose-600" />
                    <span>Things to Consider (Cons)</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    {car.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column: Helpful Buying Guides & Tool Shortcuts */}
          <div className="lg:col-span-4 space-y-6">
            {/* On-Road Price Advice */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Planning Your Purchase?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Before booking, make sure to read our 10-step handbook to protect yourself against dealer accessory markups and obtain genuine insurance quotes:
              </p>
              <Link
                to="/first-car-buying-guide-india-step-by-step"
                className="block p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-xs font-bold text-[#FF6B1A] hover:underline"
              >
                Read our complete first car buying guide
              </Link>
              <Link
                to="/tools/car-fuel-cost-calculator-india"
                className="block p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-[#FF6B1A]"
              >
                Calculate monthly fuel running costs
              </Link>
            </div>

            {/* Note on showroom pricing */}
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-5 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block mb-0.5">Showroom Price Notice</span>
                Prices are approximate ex-showroom and may change. Final on-road prices will include state RTO tax (8%–18%), motor insurance, and mandatory FASTag.
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion / Final Verdict */}
        <section className="bg-slate-100 dark:bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 mb-10 text-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            {car.name} Price in India: Final Buying Verdict
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            In conclusion, the <strong>{car.name} price in India</strong> delivers strong competitive value when balanced against its rich {car.name} features and overall ownership comfort.
          </p>
        </section>

        {/* Related Cars Section */}
        {relatedCars.length > 0 && (
          <section className="pt-8 border-t border-slate-200 dark:border-slate-800">
            <h2 className="text-2xl font-black text-[#0B1F3A] dark:text-white tracking-tight mb-6">
              Similar 2026 Vehicles to Consider
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCars.map((rel) => {
                const pDisplay =
                  rel.priceMinLakh && rel.priceMaxLakh
                    ? `₹${rel.priceMinLakh.toFixed(2)} – ₹${rel.priceMaxLakh.toFixed(2)} Lakh`
                    : 'Price: to be confirmed';
                return (
                  <div
                    key={rel.slug}
                    className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <SmartImage
                        src={rel.image}
                        alt={rel.imageAlt}
                        width={400}
                        height={240}
                        fallbackText={rel.name}
                        loading="lazy"
                        className="h-36 w-full object-cover rounded-xl mb-3"
                      />
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B1A]">
                        {rel.brand} • {rel.bodyType}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        <Link to={`/cars/${rel.seoSlug}`} className="hover:text-[#FF6B1A]">
                          {rel.name}
                        </Link>
                      </h3>
                      <div className="text-xs font-bold text-[#FF6B1A] mt-1">
                        {pDisplay}
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-4">
                      <Link
                        to={`/cars/${rel.seoSlug}`}
                        className="text-xs font-bold text-[#FF6B1A] hover:underline inline-flex items-center gap-1"
                      >
                        <span>View {rel.name} price and features</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </>
  );
};
