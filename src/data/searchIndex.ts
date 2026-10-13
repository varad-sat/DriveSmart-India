import { CARS_DATA, Car } from './cars';

export interface SearchArticleItem {
  type: 'article' | 'tool';
  title: string;
  url: string;
  snippet: string;
  keywords: string[];
}

export const ARTICLES_SEARCH_INDEX: SearchArticleItem[] = [
  {
    type: 'article',
    title: 'Petrol vs Diesel vs CNG vs EV: Which Car to Buy in 2026?',
    url: '/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india',
    snippet: 'Compare running costs per km (₹1.20 EV vs ₹7.50 petrol), mileage, DPF maintenance, and resale value across Indian cities.',
    keywords: [
      'petrol',
      'diesel',
      'cng',
      'ev',
      'electric vehicle',
      'fuel cost',
      'running cost',
      'mileage',
      'maintenance',
      'battery',
      'charging',
      'hybrid',
      'resale',
      'dpf',
      'ncr rule',
      'dual cylinder',
    ],
  },
  {
    type: 'article',
    title: 'First Car Buying Guide: 10 Steps for Indian Buyers',
    url: '/first-car-buying-guide-india-step-by-step',
    snippet: 'Comprehensive walkthrough covering real budgets, car loan EMIs, test-drive checks, insurance add-ons, and daylight PDI inspection.',
    keywords: [
      'first car',
      'buying guide',
      'budget',
      'car loan',
      'emi',
      'test drive',
      'on-road price',
      'rto',
      'insurance',
      'zero dep',
      'engine protection',
      'negotiation',
      'pdi',
      'pre delivery inspection',
      'checklist',
    ],
  },
  {
    type: 'article',
    title: 'Monsoon Car Care Tips: 12 Ways to Protect Your Car',
    url: '/monsoon-car-care-tips-rainy-season-protection',
    snippet: 'Essential rainy season precautions for tyre tread (2.5mm minimum), hydroplaning, wipers, underbody rustproofing, and avoiding hydrostatic lock.',
    keywords: [
      'monsoon',
      'rain',
      'rainy season',
      'tyres',
      'tread depth',
      'aquaplaning',
      'wipers',
      'brakes',
      'rust',
      'underbody coating',
      'waterlogged',
      'flood',
      'hydrostatic lock',
      'crank engine',
      'engine protect insurance',
    ],
  },
  {
    type: 'article',
    title: 'Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained',
    url: '/car-insurance-guide-india-zero-dep-explained',
    snippet: 'Compare insurance add-on riders: Zero Depreciation, Return to Invoice (RTI), Engine Protect, and learn how to save 30% online.',
    keywords: [
      'insurance',
      'car insurance',
      'zero dep',
      'nil depreciation',
      'return to invoice',
      'rti',
      'engine protect',
      'idv',
      'ncb',
      'no claim bonus',
      'dealer insurance',
      'online insurance',
      'irda',
    ],
  },
  {
    type: 'article',
    title: 'Manual vs Automatic Cars in India: AMT vs CVT vs DCT vs Torque Converter',
    url: '/manual-vs-automatic-cars-india-amt-cvt-dct',
    snippet: 'Comprehensive comparison of AMT, CVT, DCT, and Torque Converter transmissions for city traffic, mileage, and long-term reliability.',
    keywords: [
      'automatic',
      'manual',
      'amt',
      'ags',
      'cvt',
      'dct',
      'dsg',
      'torque converter',
      'transmission',
      'gearbox',
      'clutch',
      'traffic',
      'overheating',
      'automatic mileage',
    ],
  },
  {
    type: 'article',
    title: 'Car Mileage Tips India: 10 Proven Ways to Boost Fuel Economy',
    url: '/car-mileage-tips-india-boost-fuel-economy',
    snippet: '10 practical tips to increase real fuel efficiency in India: tyre pressure, expressway cruising speeds, AC management, and signal idling.',
    keywords: [
      'mileage',
      'fuel economy',
      'fuel efficiency',
      'mileage tips',
      'petrol mileage',
      'tyre pressure',
      'psi',
      'ac mileage',
      'idling',
      'air filter',
      'driving habits',
      'synthetic oil',
    ],
  },
  {
    type: 'tool',
    title: 'Car Loan EMI Calculator',
    url: '/tools/car-loan-emi-calculator-india',
    snippet: 'Calculate monthly EMIs, total interest payouts, and down payment allocations with interactive sliders and visual breakdown charts.',
    keywords: ['emi', 'loan', 'calculator', 'interest', 'monthly payment', 'tenure', 'down payment', 'bank'],
  },
  {
    type: 'tool',
    title: 'Fuel Running Cost Calculator',
    url: '/tools/car-fuel-cost-calculator-india',
    snippet: 'Simulate and compare monthly and annual fuel expenses between Petrol, Diesel, CNG, and Electric based on your monthly distance.',
    keywords: ['fuel calculator', 'cost calculator', 'petrol cost', 'ev cost', 'cng cost', 'diesel cost', 'running cost', 'per km'],
  },
  {
    type: 'tool',
    title: 'Car Comparison Tool',
    url: '/compare-cars-in-india',
    snippet: 'Compare up to 3 cars launched in India side-by-side on price, seating, features, pros, cons, and fuel types.',
    keywords: ['compare', 'comparison', 'compare cars', 'versus', 'specs', 'side by side'],
  },
];

export interface SearchResult {
  articles: SearchArticleItem[];
  cars: Car[];
}

export function searchContent(query: string): SearchResult {
  const clean = query.trim().toLowerCase();
  if (!clean) {
    return { articles: [], cars: [] };
  }

  const matchedArticles = ARTICLES_SEARCH_INDEX.filter((item) => {
    return (
      item.title.toLowerCase().includes(clean) ||
      item.snippet.toLowerCase().includes(clean) ||
      item.keywords.some((k) => k.includes(clean) || clean.includes(k))
    );
  });

  const matchedCars = CARS_DATA.filter((car) => {
    return (
      car.name.toLowerCase().includes(clean) ||
      car.brand.toLowerCase().includes(clean) ||
      car.bodyType.toLowerCase().includes(clean) ||
      car.fuelTypes.some((f) => f.toLowerCase().includes(clean)) ||
      car.tagline.toLowerCase().includes(clean) ||
      car.keyFeatures.some((feat) => feat.toLowerCase().includes(clean))
    );
  });

  return {
    articles: matchedArticles,
    cars: matchedCars,
  };
}
