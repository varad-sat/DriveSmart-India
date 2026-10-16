import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { SEO_DATA } from '../data/seoKeywords';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import {
  Calculator,
  ChevronRight,
  Sparkles,
  Info,
  ArrowRight,
  TrendingUp,
  CreditCard,
  CheckCircle2,
} from 'lucide-react';

export const EmiCalculatorPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const priceParam = searchParams.get('price');

  // Input states
  const [carPriceLakh, setCarPriceLakh] = useState<number>(() => {
    const parsed = parseFloat(priceParam || '');
    return !isNaN(parsed) && parsed > 0 ? parsed : 12.0;
  });

  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20% default
  const [interestRate, setInterestRate] = useState<number>(9.0); // 9.0% annual interest
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 years

  // Synchronise if URL search parameter changes
  useEffect(() => {
    if (priceParam) {
      const p = parseFloat(priceParam);
      if (!isNaN(p) && p > 0) {
        setCarPriceLakh(p);
      }
    }
  }, [priceParam]);

  // Calculations
  const totalPrice = carPriceLakh * 100000;
  const downPaymentAmount = (totalPrice * downPaymentPercent) / 100;
  const principalLoan = Math.max(0, totalPrice - downPaymentAmount);

  const { monthlyEmi, totalInterest, totalPayable } = useMemo(() => {
    const P = principalLoan;
    const n = tenureYears * 12;
    const r = interestRate / 12 / 100;

    if (P <= 0 || n <= 0) {
      return { monthlyEmi: 0, totalInterest: 0, totalPayable: 0 };
    }

    if (r === 0) {
      const emi = P / n;
      return { monthlyEmi: emi, totalInterest: 0, totalPayable: P };
    }

    // Standard reducing balance EMI formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const payable = emi * n;
    const interest = payable - P;

    return {
      monthlyEmi: Math.round(emi),
      totalInterest: Math.round(interest),
      totalPayable: Math.round(payable),
    };
  }, [principalLoan, interestRate, tenureYears]);

  // Donut chart dataset
  const chartData = [
    { name: 'Principal Loan', value: Math.round(principalLoan), color: '#0B1F3A' },
    { name: 'Total Interest', value: Math.round(totalInterest), color: '#FF6B1A' },
  ];

  const formatRupees = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Car Loan EMI Calculator India: Monthly Cost | DriveSmart',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    description:
      'Calculate your car loan monthly EMI, total interest and down payment with our interactive sliders and donut chart. Plan your car finance with DriveSmart.',
    url: 'https://drivesmart-india.vercel.app/tools/car-loan-emi-calculator-india',
  };

  const emiSeo = SEO_DATA['/tools/emi-calculator'];

  return (
    <>
      <SEOHead
        title={emiSeo.title}
        description={emiSeo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/tools/car-loan-emi-calculator-india"
        keywords={`${emiSeo.mainKeyword}, ${emiSeo.relatedKeywords.join(', ')}`}
        type="website"
        schema={schema}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
              <Link to="/new-cars-in-india-2026" className="hover:text-[#FF6B1A] transition-colors">
                2026 Cars
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Car Loan EMI Calculator
              </span>
            </li>
          </ol>
        </nav>

        {/* Page Header (Single H1) */}
        <header className="mb-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Planning</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight">
            Car Loan EMI Calculator India: Monthly Loan Finance
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Estimate your <strong>monthly car EMI</strong>, total interest payouts, and optimal down payment using our interactive <strong>car loan EMI calculator</strong>. Compare bank <strong>car loan interest rate</strong> options across 3 to 7 year tenures.
          </p>
        </header>

        {/* Main Grid: Left Controls, Right Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-7">
            {/* 1. Car Price Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="car-price-slider" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Car Ex-Showroom / On-Road Price
                </label>
                <div className="flex items-center gap-1">
                  <span className="text-base font-extrabold text-[#FF6B1A]">
                    ₹{carPriceLakh.toFixed(2)} Lakh
                  </span>
                  <span className="text-xs text-slate-400">
                    ({formatRupees(totalPrice)})
                  </span>
                </div>
              </div>
              <input
                id="car-price-slider"
                type="range"
                min="4"
                max="50"
                step="0.25"
                value={carPriceLakh}
                onChange={(e) => setCarPriceLakh(parseFloat(e.target.value))}
                className="w-full accent-[#FF6B1A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹4 Lakh</span>
                <span>₹25 Lakh</span>
                <span>₹50 Lakh</span>
              </div>
            </div>

            {/* 2. Down Payment Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="down-payment-slider" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Down Payment ({downPaymentPercent}%)
                </label>
                <div className="text-base font-extrabold text-slate-900 dark:text-white">
                  {formatRupees(downPaymentAmount)}
                </div>
              </div>
              <input
                id="down-payment-slider"
                type="range"
                min="10"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(parseInt(e.target.value))}
                className="w-full accent-[#FF6B1A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>10% (Min)</span>
                <span>20% (Recommended)</span>
                <span>60%</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                Principal Loan Amount: <strong>{formatRupees(principalLoan)}</strong>
              </p>
            </div>

            {/* 3. Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="interest-rate-slider" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Annual Interest Rate (%)
                </label>
                <div className="text-base font-extrabold text-slate-900 dark:text-white">
                  {interestRate.toFixed(1)}% p.a.
                </div>
              </div>
              <input
                id="interest-rate-slider"
                type="range"
                min="7.5"
                max="14.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="w-full accent-[#FF6B1A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>7.5% (Public Banks)</span>
                <span>9.0% (Average)</span>
                <span>14.0% (NBFCs)</span>
              </div>
            </div>

            {/* 4. Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="loan-tenure-slider" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Loan Tenure ({tenureYears} Years / {tenureYears * 12} Months)
                </label>
                <div className="text-base font-extrabold text-slate-900 dark:text-white">
                  {tenureYears} Years
                </div>
              </div>
              <input
                id="loan-tenure-slider"
                type="range"
                min="1"
                max="7"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(parseInt(e.target.value))}
                className="w-full accent-[#FF6B1A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 Year</span>
                <span>4 Years (Ideal)</span>
                <span>7 Years (Max)</span>
              </div>
            </div>

            {/* Formula Reference */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-400 font-mono">
              EMI = P × r × (1 + r)ⁿ / ((1 + r)ⁿ - 1)
            </div>
          </div>

          {/* Results & Donut Chart Column (5 Cols) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Calculated Monthly Payment
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#FF6B1A] mt-1">
                {formatRupees(monthlyEmi)}
                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 ml-1">
                  / month
                </span>
              </div>

              {/* Breakdown cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    Total Interest
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {formatRupees(totalInterest)}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700">
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold">
                    Total Loan Repayment
                  </div>
                  <div className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {formatRupees(totalPayable)}
                  </div>
                </div>
              </div>

              {/* Donut Chart (Recharts) */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 text-center mb-2">
                  Principal vs. Interest Breakdown
                </div>
                <div className="h-48 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={75}
                        paddingAngle={4}
                        dataKey="value"
                      >
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(val: any) => formatRupees(Number(val) || 0)}
                        contentStyle={{
                          backgroundColor: '#0B1F3A',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px',
                        }}
                      />
                      <Legend
                        verticalAlign="bottom"
                        iconType="circle"
                        wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Quick Action Link */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
              <Link
                to="/first-car-buying-guide-india-step-by-step#step-5-loan-tips"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#132c4e] text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors"
              >
                <span>Read our car loan tips for first-time buyers</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 20/4/10 Rule Educational Advisory Section */}
        <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <SmartImage
              src="/images/first-car-buying-guide.webp"
              alt="Car loan EMI calculator visual guide comparing interest rates and monthly car EMI"
              width={800}
              height={350}
              className="w-full h-44 object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-1">
              Car Loan EMI Calculator: Smart 20/4/10 Financing Strategy
            </h2>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Evaluate Car Loan Interest Rate Options & Monthly Car EMI
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300">
            <div className="p-4 rounded-2xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 space-y-1.5">
              <span className="font-extrabold text-[#FF6B1A] text-sm block">
                20% Down Payment
              </span>
              <p className="leading-relaxed">
                Pay a minimum of 20% from savings to avoid negative equity. A car depreciates the moment it leaves the showroom floor; a 20% buffer prevents your loan balance from exceeding the car’s secondary resale value.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm block">
                4-Year Maximum Tenure
              </span>
              <p className="leading-relaxed">
                Cap your financing tenure at 48 months (4 years). Extending loans to 7 years reduces monthly EMI slightly but inflates total compound interest payouts by up to 60%.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1.5">
              <span className="font-extrabold text-slate-900 dark:text-white text-sm block">
                10% Total Income Cap
              </span>
              <p className="leading-relaxed">
                Ensure all transportation costs combined (monthly EMI + petrol/EV charging + periodic insurance reserve) stay under 10% of your gross monthly take-home income.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center space-y-2 mt-8">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Smart Car Financing with DriveSmart
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            In conclusion, running our <strong>car loan EMI calculator</strong> before visiting dealership finance desks prevents high interest penalties and protects your household cash flow.
          </p>
        </section>
      </div>
    </>
  );
};
