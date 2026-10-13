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
    url: '/petrol-vs-diesel-vs-cng-vs-ev',
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
    url: '/first-car-buying-guide',
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
    url: '/monsoon-car-care-tips',
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
    type: 'tool',
    title: 'Car Loan EMI Calculator',
    url: '/tools/emi-calculator',
    snippet: 'Calculate monthly EMIs, total interest payouts, and down payment allocations with interactive sliders and visual breakdown charts.',
    keywords: ['emi', 'loan', 'calculator', 'interest', 'monthly payment', 'tenure', 'down payment', 'bank'],
  },
  {
    type: 'tool',
    title: 'Fuel Running Cost Calculator',
    url: '/tools/fuel-cost-calculator',
    snippet: 'Simulate and compare monthly and annual fuel expenses between Petrol, Diesel, CNG, and Electric based on your monthly distance.',
    keywords: ['fuel calculator', 'cost calculator', 'petrol cost', 'ev cost', 'cng cost', 'diesel cost', 'running cost', 'per km'],
  },
  {
    type: 'tool',
    title: 'Car Comparison Tool',
    url: '/compare',
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
