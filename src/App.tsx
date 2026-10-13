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
import { InsuranceGuidePage } from './pages/InsuranceGuidePage';
import { TransmissionGuidePage } from './pages/TransmissionGuidePage';
import { MileageTipsPage } from './pages/MileageTipsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { NewSuvsArticlePage } from './pages/NewSuvsArticlePage';
import { ElectricCarsArticlePage } from './pages/ElectricCarsArticlePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

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
                {/* Home */}
                <Route path="/" element={<HomePage />} />

                {/* Blog Listing & Articles */}
                <Route path="/blog" element={<BlogListingPage />} />
                <Route
                  path="/blog/new-suvs-in-india-2026"
                  element={<NewSuvsArticlePage />}
                />
                <Route
                  path="/blog/electric-cars-in-india-2026"
                  element={<ElectricCarsArticlePage />}
                />
                <Route
                  path="/blog/petrol-vs-diesel-vs-cng-vs-ev"
                  element={<FuelComparisonPage />}
                />

                {/* About & Contact Pages */}
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Guides & Comparisons - Keyword Rich URLs & Aliases */}
                <Route
                  path="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                  element={<FuelComparisonPage />}
                />
                <Route
                  path="/petrol-vs-diesel-vs-cng-vs-ev"
                  element={<FuelComparisonPage />}
                />

                <Route
                  path="/first-car-buying-guide-india-step-by-step"
                  element={<FirstCarGuidePage />}
                />
                <Route
                  path="/first-car-buying-guide"
                  element={<FirstCarGuidePage />}
                />

                <Route
                  path="/monsoon-car-care-tips-rainy-season-protection"
                  element={<MonsoonCarePage />}
                />
                <Route
                  path="/monsoon-car-care-tips"
                  element={<MonsoonCarePage />}
                />

                <Route
                  path="/car-insurance-guide-india-zero-dep-explained"
                  element={<InsuranceGuidePage />}
                />
                <Route
                  path="/car-insurance-guide-india"
                  element={<InsuranceGuidePage />}
                />

                <Route
                  path="/manual-vs-automatic-cars-india-amt-cvt-dct"
                  element={<TransmissionGuidePage />}
                />
                <Route
                  path="/manual-vs-automatic-cars-india"
                  element={<TransmissionGuidePage />}
                />

                <Route
                  path="/car-mileage-tips-india-boost-fuel-economy"
                  element={<MileageTipsPage />}
                />
                <Route
                  path="/car-mileage-tips-india"
                  element={<MileageTipsPage />}
                />

                {/* Cars Catalog - Keyword Rich URLs & Filter Shortcuts */}
                <Route path="/new-cars-in-india-2026" element={<CarsListingPage />} />
                <Route path="/cars" element={<CarsListingPage />} />
                <Route path="/electric-cars-in-india" element={<CarsListingPage defaultFuel="Electric" />} />
                <Route path="/suv-cars-in-india" element={<CarsListingPage defaultBody="SUV" />} />

                {/* Car Detail Pages - Individual Keyword Slugs & Standard Slugs */}
                <Route path="/cars/:slug" element={<CarDetailPage />} />

                {/* Comparison Tool - Keyword Rich URLs & Aliases */}
                <Route path="/compare-cars-in-india" element={<ComparePage />} />
                <Route path="/compare" element={<ComparePage />} />

                {/* Financial & Running Cost Calculators */}
                <Route
                  path="/tools/car-loan-emi-calculator-india"
                  element={<EmiCalculatorPage />}
                />
                <Route
                  path="/tools/emi-calculator"
                  element={<EmiCalculatorPage />}
                />
                <Route
                  path="/tools/car-fuel-cost-calculator-india"
                  element={<FuelCostCalculatorPage />}
                />
                <Route
                  path="/tools/fuel-cost-calculator"
                  element={<FuelCostCalculatorPage />}
                />

                {/* 404 Fallback */}
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
