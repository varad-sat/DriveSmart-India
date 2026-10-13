import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { CARS_DATA, Car } from '../data/cars';
import { useApp } from '../context/AppContext';
import {
  Search,
  Filter,
  RotateCcw,
  Heart,
  Scale,
  Sparkles,
  ArrowRight,
  Calculator,
  SlidersHorizontal,
  ChevronRight,
  Check,
} from 'lucide-react';

export const CarsListingPage: React.FC = () => {
  const { isFavourite, toggleFavourite, isInCompare, addToCompare } = useApp();

  // Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedBodyType, setSelectedBodyType] = useState('All');
  const [selectedFuel, setSelectedFuel] = useState('All');
  const [maxBudget, setMaxBudget] = useState(35); // ₹5 to ₹35 Lakh
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc'>('newest');

  // Available filter options
  const brands = useMemo(() => ['All', ...Array.from(new Set(CARS_DATA.map((c) => c.brand)))], []);
  const bodyTypes = useMemo(() => ['All', ...Array.from(new Set(CARS_DATA.map((c) => c.bodyType)))], []);
  const fuelOptions = ['All', 'Petrol', 'Diesel', 'CNG', 'Electric'];

  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Search
      const matchesSearch =
        !searchTerm.trim() ||
        car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        car.tagline.toLowerCase().includes(searchTerm.toLowerCase());

      // Brand
      const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;

      // Body Type
      const matchesBody = selectedBodyType === 'All' || car.bodyType === selectedBodyType;

      // Fuel Type
      const matchesFuel = selectedFuel === 'All' || car.fuelTypes.includes(selectedFuel as any);

      // Budget (if car has priceMinLakh)
      const matchesBudget = !car.priceMinLakh || car.priceMinLakh <= maxBudget;

      return matchesSearch && matchesBrand && matchesBody && matchesFuel && matchesBudget;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') {
        const pA = a.priceMinLakh ?? 999;
        const pB = b.priceMinLakh ?? 999;
        return pA - pB;
      }
      if (sortBy === 'price-desc') {
        const pA = a.priceMaxLakh ?? a.priceMinLakh ?? 0;
        const pB = b.priceMaxLakh ?? b.priceMinLakh ?? 0;
        return pB - pA;
      }
      return 0; // default newest / original list
    });
  }, [searchTerm, selectedBrand, selectedBodyType, selectedFuel, maxBudget, sortBy]);

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedBrand('All');
    setSelectedBodyType('All');
    setSelectedFuel('All');
    setMaxBudget(35);
    setSortBy('newest');
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Latest Cars in India 2026: Prices & Specs | DriveSmart',
    description:
      'Explore new cars launched in India in 2026. Filter by brand, fuel type, body style and budget from ₹5 to ₹35 lakh. Find your ideal ride today.',
    url: 'https://drivesmart-india.vercel.app/cars',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: CARS_DATA.map((car, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://drivesmart-india.vercel.app/cars/${car.slug}`,
        name: car.name,
      })),
    },
  };

  return (
    <>
      <SEOHead
        title="Latest Cars in India 2026: Prices & Specs | DriveSmart"
        description="Explore new cars launched in India in 2026. Filter by brand, fuel type, body style and budget from ₹5 to ₹35 lakh. Find your ideal ride today."
        canonicalUrl="https://drivesmart-india.vercel.app/cars"
        type="website"
        schema={schema}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="mb-4">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#FF6B1A] transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                2026 Car Launches
              </span>
            </li>
          </ol>
        </nav>

        {/* Page Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>2026 Indian Automotive Market</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight">
                Latest Cars Launched in India (2026)
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
                Explore the latest passenger cars, born-electric crossovers, and family SUVs introduced to Indian roads. Filter by fuel, budget, or brand to shortlist your next vehicle.
              </p>
            </div>

            <div className="text-xs text-slate-500 dark:text-slate-400 italic bg-slate-100 dark:bg-slate-800/80 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700">
              Prices are approximate ex-showroom and may change.
            </div>
          </div>
        </header>

        {/* Filter & Search Bar Controls */}
        <section
          aria-label="Filter Controls"
          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs mb-8 space-y-5"
        >
          {/* Top row: Search and Sort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative md:col-span-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by car name, brand, or feature (e.g. Sierra, ADAS, Hybrid)..."
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sort-select" className="text-xs font-semibold text-slate-600 dark:text-slate-300 shrink-0">
                Sort By:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
              >
                <option value="newest">Featured / 2026 Launches</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Dropdown filters & Budget Slider */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
            {/* Brand Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Body Type Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Body Style
              </label>
              <select
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
              >
                {bodyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Fuel Type Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Fuel Powertrain
              </label>
              <select
                value={selectedFuel}
                onChange={(e) => setSelectedFuel(e.target.value)}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
              >
                {fuelOptions.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                <span>Max Budget:</span>
                <span className="text-[#FF6B1A] font-extrabold">Up to ₹{maxBudget} Lakh</span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                step="1"
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full accent-[#FF6B1A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹5L</span>
                <span>₹20L</span>
                <span>₹35L</span>
              </div>
            </div>
          </div>

          {/* Results Count & Clear Button */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span>
              Showing <strong>{filteredCars.length}</strong> of {CARS_DATA.length} cars
            </span>
            {(searchTerm || selectedBrand !== 'All' || selectedBodyType !== 'All' || selectedFuel !== 'All' || maxBudget < 35) && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#FF6B1A] hover:text-[#e05b12] font-semibold hover:underline"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear filters</span>
              </button>
            )}
          </div>
        </section>

        {/* Cars Grid */}
        {filteredCars.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              No Vehicles Matched Your Criteria
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Try raising your budget threshold or clearing the fuel/brand filters to view other available 2026 launches.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => {
              const priceDisplay =
                car.priceMinLakh && car.priceMaxLakh
                  ? `₹${car.priceMinLakh.toFixed(2)} – ₹${car.priceMaxLakh.toFixed(2)} Lakh`
                  : 'Price: to be confirmed';
              const isFav = isFavourite(car.slug);
              const inComp = isInCompare(car.slug);

              return (
                <article
                  key={car.slug}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Actions */}
                    <div className="relative">
                      <SmartImage
                        src={car.image}
                        alt={car.imageAlt}
                        width={600}
                        height={360}
                        fallbackText={car.name}
                        loading="lazy"
                        className="h-48 w-full object-cover"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex items-center gap-1.5">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#0B1F3A]/90 text-white backdrop-blur-xs">
                          {car.brand}
                        </span>
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-semibold bg-white/90 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 shadow-xs">
                          {car.bodyType}
                        </span>
                      </div>

                      {/* Heart Button */}
                      <button
                        onClick={() => toggleFavourite(car.slug)}
                        className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 shadow-md flex items-center justify-center hover:scale-110 transition-transform"
                        title={isFav ? 'Remove from garage' : 'Save to favourites'}
                        aria-label={`Save ${car.name} to favourites`}
                      >
                        <Heart
                          className={`w-4 h-4 ${isFav ? 'fill-rose-500 text-rose-500' : 'text-slate-600 dark:text-slate-300'}`}
                        />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white leading-snug group-hover:text-[#FF6B1A] transition-colors">
                          <Link to={`/cars/${car.slug}`}>
                            {car.name}
                          </Link>
                        </h2>
                        <div className="text-base font-black text-[#FF6B1A] mt-1">
                          {priceDisplay}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {car.tagline}
                      </p>

                      {/* Fuel badges & Seating */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {car.fuelTypes.map((fuel) => (
                          <span
                            key={fuel}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {fuel}
                          </span>
                        ))}
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                          {car.seating} Seater
                        </span>
                      </div>

                      {/* Key Pros highlight */}
                      <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 text-[11px] text-slate-600 dark:text-slate-400 space-y-1">
                        <div className="font-semibold text-slate-800 dark:text-slate-200">
                          Top Highlight:
                        </div>
                        <div className="line-clamp-1 text-slate-600 dark:text-slate-400">
                          ✓ {car.pros[0]}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0 space-y-2.5">
                    <div className="flex items-center justify-between text-xs pt-3 border-t border-slate-100 dark:border-slate-800">
                      {/* Compare toggle */}
                      <button
                        onClick={() => addToCompare(car.slug)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                          inComp
                            ? 'bg-[#0B1F3A] text-white'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        }`}
                        aria-pressed={inComp}
                      >
                        {inComp ? <Check className="w-3.5 h-3.5 text-[#FF6B1A]" /> : <Scale className="w-3.5 h-3.5" />}
                        <span>{inComp ? 'Added to Compare' : 'Add to Compare'}</span>
                      </button>

                      {/* Pre-filled EMI link */}
                      {car.priceMinLakh && (
                        <Link
                          to={`/tools/emi-calculator?price=${car.priceMinLakh}`}
                          className="inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white font-medium"
                          title={`Calculate loan EMI for ${car.name}`}
                        >
                          <Calculator className="w-3.5 h-3.5 text-[#FF6B1A]" />
                          <span>EMI Calculator</span>
                        </Link>
                      )}
                    </div>

                    <Link
                      to={`/cars/${car.slug}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                    >
                      <span>View {car.name} price and features</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};
