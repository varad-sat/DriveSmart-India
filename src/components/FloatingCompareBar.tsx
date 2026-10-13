import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { CARS_DATA } from '../data/cars';
import { SmartImage } from './SmartImage';
import { X, Scale, ArrowRight, Trash2 } from 'lucide-react';

export const FloatingCompareBar: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare } = useApp();
  const location = useLocation();

  // If empty or already on the compare page, keep the floating bar hidden
  if (compareList.length === 0 || location.pathname.includes('/compare')) {
    return null;
  }

  const selectedCars = CARS_DATA.filter((car) => compareList.includes(car.slug));

  return (
    <aside
      aria-label="Vehicle Comparison Tray"
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-3xl bg-[#0B1F3A]/95 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-slate-700/80 p-3 sm:p-4 animate-in fade-in slide-in-from-bottom duration-300"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Summary */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-9 h-9 rounded-xl bg-[#FF6B1A] flex items-center justify-center shrink-0">
            <Scale className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1 sm:flex-initial">
            <div className="text-xs font-bold text-slate-200">
              Comparing Vehicles ({compareList.length}/3)
            </div>
            <div className="text-[11px] text-slate-400">
              {3 - compareList.length > 0
                ? `Select ${3 - compareList.length} more car${3 - compareList.length > 1 ? 's' : ''} to compare`
                : 'Maximum limit reached'}
            </div>
          </div>
        </div>

        {/* Middle: Thumbnails of selected cars */}
        <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
          {selectedCars.map((car) => (
            <div
              key={car.slug}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 rounded-lg pl-2 pr-1 py-1 border border-white/10 text-xs shrink-0"
            >
              <span className="font-semibold text-slate-100 max-w-[100px] truncate">
                {car.name}
              </span>
              <button
                onClick={() => removeFromCompare(car.slug)}
                className="p-1 hover:bg-white/20 rounded-md text-slate-300 hover:text-white transition-colors"
                title={`Remove ${car.name}`}
                aria-label={`Remove ${car.name} from comparison`}
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}

          {/* Empty slot placeholder */}
          {Array.from({ length: 3 - selectedCars.length }).map((_, i) => (
            <div
              key={i}
              className="hidden md:flex items-center justify-center border border-dashed border-slate-600 rounded-lg px-2.5 py-1 text-[11px] text-slate-400 shrink-0"
            >
              + Add Car
            </div>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <button
            onClick={clearCompare}
            className="text-xs text-slate-400 hover:text-rose-400 px-2 py-1 transition-colors"
            title="Clear all cars"
          >
            Clear All
          </button>
          <Link
            to={`/compare-cars-in-india?cars=${compareList.join(',')}`}
            className="inline-flex items-center gap-1.5 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold px-4 py-2 rounded-xl shadow-md transition-all whitespace-nowrap"
          >
            <span>Compare Cars Side by Side</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </aside>
  );
};
