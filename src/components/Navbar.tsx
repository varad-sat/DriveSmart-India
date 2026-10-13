import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { searchContent, SearchResult } from '../data/searchIndex';
import {
  Menu,
  X,
  Search,
  Heart,
  Scale,
  Sun,
  Moon,
  Compass,
  Fuel,
  ShieldCheck,
  Car,
  Calculator,
  ChevronDown,
  Sparkles,
  ArrowRight,
  FileText,
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult>({ articles: [], cars: [] });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toolsDropdown, setToolsDropdown] = useState(false);

  const searchContainerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { favourites, compareList, setIsGarageOpen, theme, toggleTheme } = useApp();

  // Handle live search
  useEffect(() => {
    if (searchQuery.trim().length > 1) {
      const results = searchContent(searchQuery);
      setSearchResults(results);
      setIsSearchOpen(true);
    } else {
      setSearchResults({ articles: [], cars: [] });
      setIsSearchOpen(false);
    }
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
    setToolsDropdown(false);
    setSearchQuery('');
  }, [location.pathname]);

  const navLinks = [
    { to: '/new-cars-in-india-2026', label: '2026 Cars', icon: Car },
    { to: '/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india', label: 'Fuel Types', icon: Fuel },
    { to: '/first-car-buying-guide-india-step-by-step', label: 'Buying Guide', icon: Compass },
    { to: '/monsoon-car-care-tips-rainy-season-protection', label: 'Monsoon Care', icon: ShieldCheck },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0B1F3A] text-white shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#FF6B1A] rounded-lg p-1 shrink-0"
          >
            <div className="w-10 h-10 rounded-lg bg-[#FF6B1A] flex items-center justify-center font-black text-xl text-white shadow-lg transition-transform group-hover:scale-105">
              DS
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-white group-hover:text-[#FF6B1A] transition-colors leading-none">
                DriveSmart <span className="text-[#FF6B1A]">India</span>
              </span>
              <span className="text-[10px] text-slate-300 font-medium tracking-wider uppercase mt-1">
                2026 Car Buying Authority
              </span>
            </div>
          </Link>

          {/* Search Bar in Navbar */}
          <div
            ref={searchContainerRef}
            className="hidden md:flex relative flex-1 max-w-xs lg:max-w-sm mx-2"
          >
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => {
                  if (searchQuery.trim().length > 1) setIsSearchOpen(true);
                }}
                placeholder="Search articles, guides, cars..."
                className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B1A] focus:ring-1 focus:ring-[#FF6B1A] transition-all"
                aria-label="Search content across articles and 2026 cars"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
                  aria-label="Clear search query"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Live Search Dropdown */}
            {isSearchOpen && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-2 z-50 max-h-96 overflow-y-auto text-slate-900 dark:text-white animate-in fade-in duration-150">
                {searchResults.articles.length === 0 && searchResults.cars.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-500 dark:text-slate-400">
                    No results matching &ldquo;{searchQuery}&rdquo;. Try keywords like &ldquo;CNG&rdquo;, &ldquo;loan&rdquo;, &ldquo;Sierra&rdquo;, &ldquo;tyres&rdquo;.
                  </div>
                ) : (
                  <div className="space-y-3">
                    {/* Matched Articles & Tools */}
                    {searchResults.articles.length > 0 && (
                      <div>
                        <div className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                          Guides & Tools
                        </div>
                        <div className="mt-1 space-y-1">
                          {searchResults.articles.map((item) => (
                            <Link
                              key={item.url}
                              to={item.url}
                              className="block p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                            >
                              <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A]">
                                {item.title}
                              </div>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                                {item.snippet}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Matched Cars */}
                    {searchResults.cars.length > 0 && (
                      <div>
                        <div className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-800">
                          2026 Cars ({searchResults.cars.length})
                        </div>
                        <div className="mt-1 space-y-1">
                          {searchResults.cars.map((car) => (
                            <Link
                              key={car.slug}
                              to={`/cars/${car.seoSlug}`}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group"
                            >
                              <div>
                                <div className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#FF6B1A]">
                                  {car.name}
                                </div>
                                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                                  {car.brand} • {car.bodyType} • {car.fuelTypes.join(', ')}
                                </div>
                              </div>
                              <span className="text-[11px] font-semibold text-[#FF6B1A]">
                                {car.priceMinLakh ? `From ₹${car.priceMinLakh}L` : 'TBC'}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1" aria-label="Main Navigation">
            <Link
              to="/"
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                location.pathname === '/'
                  ? 'bg-white/10 text-white font-bold'
                  : 'text-slate-200 hover:text-white hover:bg-white/5'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#FF6B1A] text-white font-semibold shadow-xs'
                      : 'text-slate-200 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsDropdown(!toolsDropdown)}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
                aria-expanded={toolsDropdown}
              >
                <span>Calculators</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              {toolsDropdown && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-2 z-50 text-slate-900 dark:text-white">
                  <Link
                    to="/tools/car-loan-emi-calculator-india"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium"
                  >
                    <Calculator className="w-4 h-4 text-[#FF6B1A]" />
                    <span>Car Loan EMI Calculator</span>
                  </Link>
                  <Link
                    to="/tools/car-fuel-cost-calculator-india"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium"
                  >
                    <Fuel className="w-4 h-4 text-[#FF6B1A]" />
                    <span>Fuel Cost Calculator</span>
                  </Link>
                  <Link
                    to="/compare-cars-in-india"
                    onClick={() => setToolsDropdown(false)}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-medium"
                  >
                    <Scale className="w-4 h-4 text-[#FF6B1A]" />
                    <span>Compare Cars</span>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Action Icons: Compare, Favourites, Theme Toggle */}
          <div className="flex items-center gap-2">
            {/* Compare shortcut */}
            <Link
              to="/compare-cars-in-india"
              className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Compare Cars"
              aria-label="View Car Comparison"
            >
              <Scale className="w-5 h-5" />
              {compareList.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#FF6B1A] text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {compareList.length}
                </span>
              )}
            </Link>

            {/* My Garage / Favourites */}
            <button
              onClick={() => setIsGarageOpen(true)}
              className="relative p-2 rounded-lg text-slate-300 hover:text-rose-400 hover:bg-white/10 transition-colors"
              title="Open My Garage"
              aria-label="Open My Garage favourites"
            >
              <Heart className={`w-5 h-5 ${favourites.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {favourites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-xs">
                  {favourites.length}
                </span>
              )}
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-white/10 transition-colors"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} mode`}
              aria-label="Toggle dark/light mode"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-300" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="xl:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#FF6B1A]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-menu" className="xl:hidden bg-[#08172c] border-b border-slate-700 px-4 pt-3 pb-6 space-y-3">
          {/* Mobile search bar */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, 2026 cars..."
              className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#FF6B1A]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
          </div>

          {/* Mobile search results */}
          {searchQuery.trim().length > 1 && (
            <div className="bg-slate-900/90 rounded-xl p-3 max-h-60 overflow-y-auto space-y-2 border border-slate-700">
              {searchResults.articles.map((item) => (
                <Link
                  key={item.url}
                  to={item.url}
                  onClick={() => setIsOpen(false)}
                  className="block p-2 rounded-lg hover:bg-slate-800 text-xs"
                >
                  <div className="font-bold text-white">{item.title}</div>
                </Link>
              ))}
              {searchResults.cars.map((car) => (
                <Link
                  key={car.slug}
                  to={`/cars/${car.seoSlug}`}
                  onClick={() => setIsOpen(false)}
                  className="block p-2 rounded-lg hover:bg-slate-800 text-xs"
                >
                  <div className="font-bold text-white">{car.name} ({car.brand})</div>
                </Link>
              ))}
            </div>
          )}

          <div className="space-y-1 pt-1">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5"
            >
              Home Overview
            </Link>
            <Link
              to="/new-cars-in-india-2026"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5"
            >
              <Car className="w-4 h-4 text-[#FF6B1A]" />
              <span>Latest 2026 Cars (10 Models)</span>
            </Link>
            <Link
              to="/compare-cars-in-india"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5"
            >
              <Scale className="w-4 h-4 text-[#FF6B1A]" />
              <span>Compare Vehicles ({compareList.length})</span>
            </Link>
            <Link
              to="/tools/car-loan-emi-calculator-india"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5"
            >
              <Calculator className="w-4 h-4 text-[#FF6B1A]" />
              <span>Car Loan EMI Calculator</span>
            </Link>
            <Link
              to="/tools/car-fuel-cost-calculator-india"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/5"
            >
              <Fuel className="w-4 h-4 text-[#FF6B1A]" />
              <span>Fuel Cost Calculator</span>
            </Link>

            <div className="pt-2 border-t border-slate-800">
              <div className="px-3 py-1 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                In-Depth Buying Guides
              </div>
              {navLinks.slice(1).map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5"
                  >
                    <Icon className="w-4 h-4 text-orange-400" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
