import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CARS_DATA } from '../data/cars';
import { SmartImage } from './SmartImage';
import { X, Trash2, Calculator, ArrowRight, Heart, Car } from 'lucide-react';

export const GarageDrawer: React.FC = () => {
  const { favourites, toggleFavourite, isGarageOpen, setIsGarageOpen } = useApp();

  if (!isGarageOpen) return null;

  const savedCars = CARS_DATA.filter((car) => favourites.includes(car.slug));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="garage-title">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsGarageOpen(false)}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-rose-500/10 flex items-center justify-center text-rose-500">
                <Heart className="w-5 h-5 fill-rose-500" />
              </div>
              <div>
                <h2 id="garage-title" className="text-lg font-bold text-slate-900 dark:text-white">
                  My Garage
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {savedCars.length} {savedCars.length === 1 ? 'vehicle' : 'vehicles'} saved to favourites
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsGarageOpen(false)}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close garage drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {savedCars.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-500 dark:text-slate-400">
                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-1">
                  Your Garage is Empty
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed mb-6">
                  Save your shortlisted cars here by clicking the heart icon on any car card or detail page.
                </p>
                <Link
                  to="/new-cars-in-india-2026"
                  onClick={() => setIsGarageOpen(false)}
                  className="inline-flex items-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
                >
                  <span>Explore 2026 Car Launches</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ) : (
              savedCars.map((car) => {
                const priceText =
                  car.priceMinLakh && car.priceMaxLakh
                    ? `₹${car.priceMinLakh.toFixed(2)} – ₹${car.priceMaxLakh.toFixed(2)} Lakh`
                    : 'Price: to be confirmed';
                return (
                  <div
                    key={car.slug}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs flex flex-col gap-3 group"
                  >
                    <div className="flex gap-3 items-center">
                      <div className="w-20 h-14 shrink-0 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-700">
                        <SmartImage
                          src={car.image}
                          alt={car.imageAlt}
                          width={80}
                          height={56}
                          fallbackText={car.name}
                          className="h-14 w-20 object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6B1A]">
                          {car.brand} • {car.bodyType}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {car.name}
                        </h4>
                        <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                          {priceText}
                        </div>
                      </div>
                      <button
                        onClick={() => toggleFavourite(car.slug)}
                        title="Remove from garage"
                        className="p-2 text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                        aria-label={`Remove ${car.name} from garage`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60 text-xs gap-2">
                      <Link
                        to={`/cars/${car.seoSlug}`}
                        onClick={() => setIsGarageOpen(false)}
                        className="text-[#FF6B1A] hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>View {car.name} price and features</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      {car.priceMinLakh && (
                        <Link
                          to={`/tools/car-loan-emi-calculator-india?price=${car.priceMinLakh}`}
                          onClick={() => setIsGarageOpen(false)}
                          className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white inline-flex items-center gap-1 font-medium"
                          title="Calculate loan EMI for this car"
                        >
                          <Calculator className="w-3.5 h-3.5" />
                          <span>EMI Calculator</span>
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer actions */}
          {savedCars.length > 0 && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between gap-3">
              <Link
                to="/compare-cars-in-india"
                onClick={() => setIsGarageOpen(false)}
                className="flex-1 bg-[#0B1F3A] hover:bg-[#132c4e] text-white text-center text-xs font-bold py-2.5 px-3 rounded-lg transition-colors"
              >
                Compare Cars Now
              </Link>
              <Link
                to="/tools/car-loan-emi-calculator-india"
                onClick={() => setIsGarageOpen(false)}
                className="flex-1 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-center text-xs font-bold py-2.5 px-3 rounded-lg transition-colors"
              >
                Plan Monthly Budget
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
