export interface PageSEO {
  path: string;
  mainKeyword: string;
  relatedKeywords: [string, string] | string[];
  title: string;
  metaDescription: string;
  robots?: string;
}

export const SEO_DATA: Record<string, PageSEO> = {
  // Homepage
  '/': {
    path: '/',
    mainKeyword: 'car buying guide India',
    relatedKeywords: ['latest cars in India 2026', 'car tips for beginners'],
    title: 'Car Buying Guide India: Latest Cars 2026 | DriveSmart',
    metaDescription: 'Your complete car buying guide India. Explore latest cars in India 2026 and essential car tips for beginners to choose the ideal vehicle for your budget.',
  },

  // Article 1 - New SUVs in India 2026
  '/blog/new-suvs-in-india-2026': {
    path: '/blog/new-suvs-in-india-2026',
    mainKeyword: 'new SUVs in India 2026',
    relatedKeywords: ['latest SUV launches India', 'best SUV under 15 lakh'],
    title: 'New SUVs in India 2026: Latest Launches | DriveSmart',
    metaDescription: 'Explore new SUVs in India 2026 with specs, prices and features. Check out latest SUV launches India and find the best SUV under 15 lakh for your family.',
  },

  // Article 2 - Electric Cars in India 2026
  '/blog/electric-cars-in-india-2026': {
    path: '/blog/electric-cars-in-india-2026',
    mainKeyword: 'electric cars in India 2026',
    relatedKeywords: ['best electric car in India', 'EV price in India'],
    title: 'Electric Cars in India 2026: Best EV Models | DriveSmart',
    metaDescription: 'Discover top electric cars in India 2026. Compare driving range, find the best electric car in India, and evaluate transparent EV price in India updates.',
  },

  // Article 3 - Petrol vs Diesel vs CNG vs EV
  '/blog/petrol-vs-diesel-vs-cng-vs-ev': {
    path: '/blog/petrol-vs-diesel-vs-cng-vs-ev',
    mainKeyword: 'petrol vs diesel vs CNG vs EV',
    relatedKeywords: ['which fuel type car is best', 'EV vs petrol running cost'],
    title: 'Petrol vs Diesel vs CNG vs EV in India 2026 | DriveSmart',
    metaDescription: 'Compare petrol vs diesel vs CNG vs EV to discover which fuel type car is best for your daily commute. Calculate EV vs petrol running cost savings today.',
  },
  '/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india': {
    path: '/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india',
    mainKeyword: 'petrol vs diesel vs CNG vs EV',
    relatedKeywords: ['which fuel type car is best', 'EV vs petrol running cost'],
    title: 'Petrol vs Diesel vs CNG vs EV in India 2026 | DriveSmart',
    metaDescription: 'Compare petrol vs diesel vs CNG vs EV to discover which fuel type car is best for your daily commute. Calculate EV vs petrol running cost savings today.',
  },

  // All Cars Catalog
  '/cars': {
    path: '/cars',
    mainKeyword: 'latest cars in India',
    relatedKeywords: ['new car launches 2026', 'car prices in India'],
    title: 'Latest Cars in India: New 2026 Launches | DriveSmart',
    metaDescription: 'Explore the latest cars in India with verified on-road estimates. Compare new car launches 2026, check exact car prices in India, and filter by fuel.',
  },
  '/new-cars-in-india-2026': {
    path: '/new-cars-in-india-2026',
    mainKeyword: 'latest cars in India',
    relatedKeywords: ['new car launches 2026', 'car prices in India'],
    title: 'Latest Cars in India: New 2026 Launches | DriveSmart',
    metaDescription: 'Explore the latest cars in India with verified on-road estimates. Compare new car launches 2026, check exact car prices in India, and filter by fuel.',
  },

  // Compare Tool
  '/compare': {
    path: '/compare',
    mainKeyword: 'compare cars in India',
    relatedKeywords: ['car comparison tool', 'SUV comparison India'],
    title: 'Compare Cars in India: Side by Side | DriveSmart',
    metaDescription: 'Easily compare cars in India with our interactive car comparison tool. Review side-by-side specs, prices, and SUV comparison India metrics instantly.',
  },
  '/compare-cars-in-india': {
    path: '/compare-cars-in-india',
    mainKeyword: 'compare cars in India',
    relatedKeywords: ['car comparison tool', 'SUV comparison India'],
    title: 'Compare Cars in India: Side by Side | DriveSmart',
    metaDescription: 'Easily compare cars in India with our interactive car comparison tool. Review side-by-side specs, prices, and SUV comparison India metrics instantly.',
  },

  // EMI Calculator
  '/tools/emi-calculator': {
    path: '/tools/emi-calculator',
    mainKeyword: 'car loan EMI calculator',
    relatedKeywords: ['car loan interest rate', 'monthly car EMI'],
    title: 'Car Loan EMI Calculator: Interest & EMI | DriveSmart',
    metaDescription: 'Use our free car loan EMI calculator to plan your budget. Check current car loan interest rate options and calculate your exact monthly car EMI easily.',
  },
  '/tools/car-loan-emi-calculator-india': {
    path: '/tools/car-loan-emi-calculator-india',
    mainKeyword: 'car loan EMI calculator',
    relatedKeywords: ['car loan interest rate', 'monthly car EMI'],
    title: 'Car Loan EMI Calculator: Interest & EMI | DriveSmart',
    metaDescription: 'Use our free car loan EMI calculator to plan your budget. Check current car loan interest rate options and calculate your exact monthly car EMI easily.',
  },

  // Fuel Cost Calculator
  '/tools/fuel-cost-calculator': {
    path: '/tools/fuel-cost-calculator',
    mainKeyword: 'fuel cost calculator India',
    relatedKeywords: ['petrol vs CNG cost', 'EV running cost calculator'],
    title: 'Fuel Cost Calculator India: Petrol vs CNG | DriveSmart',
    metaDescription: 'Calculate running expenses with our fuel cost calculator India. Compare petrol vs CNG cost savings and use our EV running cost calculator for your trips.',
  },
  '/tools/car-fuel-cost-calculator-india': {
    path: '/tools/car-fuel-cost-calculator-india',
    mainKeyword: 'fuel cost calculator India',
    relatedKeywords: ['petrol vs CNG cost', 'EV running cost calculator'],
    title: 'Fuel Cost Calculator India: Petrol vs CNG | DriveSmart',
    metaDescription: 'Calculate running expenses with our fuel cost calculator India. Compare petrol vs CNG cost savings and use our EV running cost calculator for your trips.',
  },

  // Blog Listing
  '/blog': {
    path: '/blog',
    mainKeyword: 'car blog India',
    relatedKeywords: ['car buying tips', 'new car news India'],
    title: 'Car Blog India: Buying Tips & New News | DriveSmart',
    metaDescription: 'Welcome to the leading car blog India. Read essential car buying tips, stay updated on new car news India, and explore independent vehicle comparisons.',
  },

  // About Page
  '/about': {
    path: '/about',
    mainKeyword: 'DriveSmart India',
    relatedKeywords: ['car guide website India', 'car buying help'],
    title: 'DriveSmart India: Car Guide & Buying Help | About Us',
    metaDescription: 'Learn about DriveSmart India, the dedicated car guide website India drivers trust for transparent, unbiased car buying help, toolkits, and reviews.',
  },

  // Contact Page
  '/contact': {
    path: '/contact',
    mainKeyword: 'contact DriveSmart India',
    relatedKeywords: ['car buying advice', 'ask a car question'],
    title: 'Contact DriveSmart India: Car Buying Advice & Help',
    metaDescription: 'Get in touch with contact DriveSmart India. Reach out for expert car buying advice, ask a car question, or request assistance for your next car purchase.',
  },

  // 404 Page
  '/404': {
    path: '/404',
    mainKeyword: '',
    relatedKeywords: [],
    title: 'Page Not Found: 404 Error Guide | DriveSmart',
    metaDescription: 'The automotive guide you are looking for does not exist. Explore DriveSmart India for the latest cars, buying guides, comparisons, and financial tools.',
    robots: 'noindex',
  },
};

/**
 * Dynamic generator for car detail pages: /cars/:slug
 * Main: "[Car Name] price in India"
 * Related: "[Car Name] features", "[Car Name] pros and cons"
 */
export function getCarPageSEO(carName: string, slug: string): PageSEO {
  const mainKeyword = `${carName} price in India`;
  const relatedKeywords: [string, string] = [
    `${carName} features`,
    `${carName} pros and cons`,
  ];

  // Keep title 50-60 chars
  let title = `${mainKeyword}: Specs & Review | DriveSmart`;
  if (title.length > 60) {
    title = `${carName} Price in India & Specs | DriveSmart`;
  }
  if (title.length > 60) {
    title = `${carName} Price in India | DriveSmart`;
  }

  // Keep meta description 140-160 chars
  const metaDescription =
    `Check latest ${carName} price in India with comprehensive specs, key ${carName} features, and detailed ${carName} pros and cons before buying.`
      .slice(0, 160);

  return {
    path: `/cars/${slug}`,
    mainKeyword,
    relatedKeywords,
    title,
    metaDescription,
  };
}

/**
 * Helper to fetch SEO details by route path
 */
export function getPageSEO(path: string): PageSEO {
  if (SEO_DATA[path]) {
    return SEO_DATA[path];
  }
  // Fallback
  return SEO_DATA['/'];
}
