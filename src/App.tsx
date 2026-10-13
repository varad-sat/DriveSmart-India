import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { GarageDrawer } from './components/GarageDrawer';
import { FloatingCompareBar } from './components/FloatingCompareBar';

import { HomePage } from './pages/HomePage';
import { FuelComparisonPage } from './pages/FuelComparisonPage';
import { FirstCarGuidePage } from './pages/FirstCarGuidePage';
import { MonsoonCarePage } from './pages/MonsoonCarePage';
import { CarsListingPage } from './pages/CarsListingPage';
import { CarDetailPage } from './pages/CarDetailPage';
import { ComparePage } from './pages/ComparePage';
import { EmiCalculatorPage } from './pages/EmiCalculatorPage';
import { FuelCostCalculatorPage } from './pages/FuelCostCalculatorPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <HelmetProvider>
      <AppProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[#FF6B1A] selection:text-white transition-colors duration-200">
            <Navbar />
            <div className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="/petrol-vs-diesel-vs-cng-vs-ev"
                  element={<FuelComparisonPage />}
                />
                <Route
                  path="/first-car-buying-guide"
                  element={<FirstCarGuidePage />}
                />
                <Route
                  path="/monsoon-car-care-tips"
                  element={<MonsoonCarePage />}
                />
                <Route path="/cars" element={<CarsListingPage />} />
                <Route path="/cars/:slug" element={<CarDetailPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route
                  path="/tools/emi-calculator"
                  element={<EmiCalculatorPage />}
                />
                <Route
                  path="/tools/fuel-cost-calculator"
                  element={<FuelCostCalculatorPage />}
                />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>
            <Footer />
            <GarageDrawer />
            <FloatingCompareBar />
          </div>
        </BrowserRouter>
      </AppProvider>
    </HelmetProvider>
  );
}
