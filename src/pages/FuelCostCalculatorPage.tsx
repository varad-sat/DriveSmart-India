import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { SEO_DATA } from '../data/seoKeywords';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import {
  Fuel,
  ChevronRight,
  TrendingDown,
  Sparkles,
  Award,
  ArrowRight,
  Zap,
  RotateCcw,
} from 'lucide-react';

interface FuelSetting {
  id: string;
  name: string;
  unit: string;
  pricePerUnit: number;
  efficiency: number; // km per unit
  color: string;
}

export const FuelCostCalculatorPage: React.FC = () => {
  const [monthlyKm, setMonthlyKm] = useState<number>(1200);

  // Editable defaults for Indian market in 2026
  const [petrolPrice, setPetrolPrice] = useState<number>(96.0);
  const [petrolMileage, setPetrolMileage] = useState<number>(14.0); // km/l

  const [dieselPrice, setDieselPrice] = useState<number>(89.0);
  const [dieselMileage, setDieselMileage] = useState<number>(18.0); // km/l

  const [cngPrice, setCngPrice] = useState<number>(76.0);
  const [cngMileage, setCngMileage] = useState<number>(24.0); // km/kg

  const [evTariff, setEvTariff] = useState<number>(8.0); // ₹ per kWh
  const [evEfficiency, setEvEfficiency] = useState<number>(7.2); // km per kWh

  // Calculations
  const results = useMemo(() => {
    const pCostKm = petrolMileage > 0 ? petrolPrice / petrolMileage : 0;
    const dCostKm = dieselMileage > 0 ? dieselPrice / dieselMileage : 0;
    const cCostKm = cngMileage > 0 ? cngPrice / cngMileage : 0;
    const eCostKm = evEfficiency > 0 ? evTariff / evEfficiency : 0;

    const items = [
      {
        id: 'ev',
        name: 'Electric (EV)',
        costPerKm: eCostKm,
        monthlyCost: Math.round(eCostKm * monthlyKm),
        yearlyCost: Math.round(eCostKm * monthlyKm * 12),
        color: '#10b981', // emerald
      },
      {
        id: 'cng',
        name: 'CNG',
        costPerKm: cCostKm,
        monthlyCost: Math.round(cCostKm * monthlyKm),
        yearlyCost: Math.round(cCostKm * monthlyKm * 12),
        color: '#0284c7', // sky
      },
      {
        id: 'diesel',
        name: 'Diesel',
        costPerKm: dCostKm,
        monthlyCost: Math.round(dCostKm * monthlyKm),
        yearlyCost: Math.round(dCostKm * monthlyKm * 12),
        color: '#64748b', // slate
      },
      {
        id: 'petrol',
        name: 'Petrol',
        costPerKm: pCostKm,
        monthlyCost: Math.round(pCostKm * monthlyKm),
        yearlyCost: Math.round(pCostKm * monthlyKm * 12),
        color: '#FF6B1A', // orange
      },
    ];

    // Identify cheapest
    const sorted = [...items].sort((a, b) => a.monthlyCost - b.monthlyCost);
    const cheapest = sorted[0];
    const petrolItem = items.find((i) => i.id === 'petrol')!;
    const annualSavingsVsPetrol = Math.max(0, petrolItem.yearlyCost - cheapest.yearlyCost);

    return {
      items,
      cheapest,
      annualSavingsVsPetrol,
    };
  }, [
    monthlyKm,
    petrolPrice,
    petrolMileage,
    dieselPrice,
    dieselMileage,
    cngPrice,
    cngMileage,
    evTariff,
    evEfficiency,
  ]);

  const handleResetDefaults = () => {
    setMonthlyKm(1200);
    setPetrolPrice(96.0);
    setPetrolMileage(14.0);
    setDieselPrice(89.0);
    setDieselMileage(18.0);
    setCngPrice(76.0);
    setCngMileage(24.0);
    setEvTariff(8.0);
    setEvEfficiency(7.2);
  };

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
    name: 'Car Fuel Cost Calculator India: Petrol vs EV | DriveSmart',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'All',
    description:
      'Compare monthly and yearly driving costs for Petrol, Diesel, CNG, and Electric cars based on your monthly distance. Highlight the cheapest fuel with DriveSmart.',
    url: 'https://drivesmart-india.vercel.app/tools/car-fuel-cost-calculator-india',
  };

  const fuelSeo = SEO_DATA['/tools/fuel-cost-calculator'];

  return (
    <>
      <SEOHead
        title={fuelSeo.title}
        description={fuelSeo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/tools/car-fuel-cost-calculator-india"
        keywords={`${fuelSeo.mainKeyword}, ${fuelSeo.relatedKeywords.join(', ')}`}
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
              <Link to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india" className="hover:text-[#FF6B1A] transition-colors">
                Fuel Guides
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Fuel Cost Calculator
              </span>
            </li>
          </ol>
        </nav>

        {/* Header (Single H1) */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-2">
                <Fuel className="w-3.5 h-3.5" />
                <span>Running Cost Comparison</span>
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight">
                Fuel Cost Calculator India: Running Cost Analysis
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 max-w-2xl leading-relaxed">
                Use our <strong>fuel cost calculator India</strong> to evaluate <strong>petrol vs CNG cost</strong> differences and deploy our <strong>EV running cost calculator</strong> to benchmark real expenses for your monthly commute.
              </p>
            </div>

            <button
              onClick={handleResetDefaults}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset National Averages</span>
            </button>
          </div>
        </header>

        {/* Highlight Banner: Cheapest Option */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                Most Cost-Effective Powertrain
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {results.cheapest.name} is the Cheapest Choice
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                At {monthlyKm} km/month, you spend just <strong>{formatRupees(results.cheapest.monthlyCost)}/month</strong> (₹{results.cheapest.costPerKm.toFixed(2)}/km).
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 text-right w-full md:w-auto">
            <span className="text-[11px] font-semibold text-slate-400 block">
              Annual Savings vs Petrol
            </span>
            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 block">
              Save {formatRupees(results.annualSavingsVsPetrol)} / year
            </span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Inputs Column */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-7">
            {/* Monthly Km Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="monthly-km-slider" className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Monthly Driving Distance
                </label>
                <div className="text-base font-extrabold text-[#FF6B1A]">
                  {monthlyKm.toLocaleString()} km / month
                </div>
              </div>
              <input
                id="monthly-km-slider"
                type="range"
                min="300"
                max="4000"
                step="50"
                value={monthlyKm}
                onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
                className="w-full accent-[#FF6B1A] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>300 km (Low)</span>
                <span>1,200 km (Avg City)</span>
                <span>4,000 km (Heavy Highway)</span>
              </div>
            </div>

            {/* Editable Fuel Parameters */}
            <div className="space-y-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Customise Fuel Prices & Real-World Mileage
              </span>

              {/* Petrol */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-orange-50/50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 items-center text-xs">
                <span className="font-bold text-slate-900 dark:text-white">
                  Petrol
                </span>
                <div>
                  <label htmlFor="petrol-price-input" className="text-[10px] text-slate-500 block">Price (₹/L)</label>
                  <input
                    id="petrol-price-input"
                    type="number"
                    step="0.5"
                    value={petrolPrice}
                    onChange={(e) => setPetrolPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
                <div>
                  <label htmlFor="petrol-mileage-input" className="text-[10px] text-slate-500 block">Mileage (km/L)</label>
                  <input
                    id="petrol-mileage-input"
                    type="number"
                    step="0.5"
                    value={petrolMileage}
                    onChange={(e) => setPetrolMileage(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
              </div>

              {/* Diesel */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 items-center text-xs">
                <span className="font-bold text-slate-900 dark:text-white">
                  Diesel
                </span>
                <div>
                  <label htmlFor="diesel-price-input" className="text-[10px] text-slate-500 block">Price (₹/L)</label>
                  <input
                    id="diesel-price-input"
                    type="number"
                    step="0.5"
                    value={dieselPrice}
                    onChange={(e) => setDieselPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
                <div>
                  <label htmlFor="diesel-mileage-input" className="text-[10px] text-slate-500 block">Mileage (km/L)</label>
                  <input
                    id="diesel-mileage-input"
                    type="number"
                    step="0.5"
                    value={dieselMileage}
                    onChange={(e) => setDieselMileage(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
              </div>

              {/* CNG */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-sky-50/50 dark:bg-sky-950/20 border border-sky-100 dark:border-sky-900/40 items-center text-xs">
                <span className="font-bold text-slate-900 dark:text-white">
                  CNG
                </span>
                <div>
                  <label htmlFor="cng-price-input" className="text-[10px] text-slate-500 block">Price (₹/kg)</label>
                  <input
                    id="cng-price-input"
                    type="number"
                    step="0.5"
                    value={cngPrice}
                    onChange={(e) => setCngPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
                <div>
                  <label htmlFor="cng-mileage-input" className="text-[10px] text-slate-500 block">Mileage (km/kg)</label>
                  <input
                    id="cng-mileage-input"
                    type="number"
                    step="0.5"
                    value={cngMileage}
                    onChange={(e) => setCngMileage(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
              </div>

              {/* Electric EV */}
              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/40 items-center text-xs">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" />
                  <span>EV (Electric)</span>
                </span>
                <div>
                  <label htmlFor="ev-tariff-input" className="text-[10px] text-slate-500 block">Tariff (₹/unit)</label>
                  <input
                    id="ev-tariff-input"
                    type="number"
                    step="0.5"
                    value={evTariff}
                    onChange={(e) => setEvTariff(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
                <div>
                  <label htmlFor="ev-efficiency-input" className="text-[10px] text-slate-500 block">Efficiency (km/unit)</label>
                  <input
                    id="ev-efficiency-input"
                    type="number"
                    step="0.2"
                    value={evEfficiency}
                    onChange={(e) => setEvEfficiency(parseFloat(e.target.value) || 0)}
                    className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-xs text-slate-900 dark:text-white font-bold"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Results & Visual Chart Column */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Monthly Running Cost Comparison
              </div>

              {/* Bar Chart (Recharts) */}
              <div className="h-56 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={results.items}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 35, bottom: 5 }}
                  >
                    <XAxis
                      type="number"
                      tickFormatter={(val) => `₹${val}`}
                      stroke="#94a3b8"
                      fontSize={11}
                    />
                    <YAxis
                      dataKey="name"
                      type="category"
                      stroke="#94a3b8"
                      fontSize={11}
                      width={80}
                    />
                    <Tooltip
                      formatter={(val: any) => [`₹${(Number(val) || 0).toLocaleString()}`, 'Monthly Cost']}
                      contentStyle={{
                        backgroundColor: '#0B1F3A',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="monthlyCost" radius={[0, 8, 8, 0]}>
                      {results.items.map((entry) => (
                        <Cell key={entry.id} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Itemised Cost Summary */}
              <div className="mt-4 space-y-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {results.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between text-xs p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/60"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {item.name}
                      </span>
                      <span className="text-slate-400 text-[11px]">
                        (₹{item.costPerKm.toFixed(2)}/km)
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-extrabold text-slate-900 dark:text-white block">
                        {formatRupees(item.monthlyCost)}/mo
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        {formatRupees(item.yearlyCost)}/yr
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Link to Fuel Comparison Article */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1F3A] hover:bg-[#132c4e] text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors"
              >
                <span>Read our petrol vs diesel vs CNG vs EV comparison</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Informational SEO H2 & Conclusion Section */}
        <section className="mt-12 p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/40">
            <SmartImage
              src="/images/petrol-vs-diesel-vs-cng-vs-ev.webp"
              alt="Fuel cost calculator India infographic comparing petrol vs CNG cost and electric running expenses"
              width={800}
              height={350}
              className="w-full h-44 object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-1">
              Fuel Cost Calculator India: Powertrain Economics
            </h2>
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-4">
              Evaluating Petrol vs CNG Cost & EV Running Cost Calculator Insights
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              Calculating true operational expenditure goes far beyond checking pump prices. While petrol remains versatile for low runtimes under 500 km per month, evaluating <strong>petrol vs CNG cost</strong> allows commuters traveling 40 km daily to save significant money. For heavy urban drivers, our <strong>EV running cost calculator</strong> proves that electricity charges under ₹1.50 per km generate massive savings across 5 years.
            </p>
          </div>

          {/* Conclusion */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-center">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              In conclusion, running this <strong>fuel cost calculator India</strong> before choosing between petrol, CNG, or EV ensures your choice aligns with your actual monthly commute distance.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
