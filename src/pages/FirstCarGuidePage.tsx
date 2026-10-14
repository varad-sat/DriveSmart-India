import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { TableOfContents } from '../components/TableOfContents';
import { RelatedArticles } from '../components/RelatedArticles';
import { ReadingProgressBar } from '../components/ReadingProgressBar';
import { ShareButtons } from '../components/ShareButtons';
import { SEO_DATA } from '../data/seoKeywords';
import {
  Calendar,
  Clock,
  User,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  FileText,
} from 'lucide-react';

export const FirstCarGuidePage: React.FC = () => {
  const currentPath = '/first-car-buying-guide';

  const tocItems = [
    {
      id: 'step-1-budgeting',
      title: 'Step 1: How Much Should You Spend on Your First Car?',
    },
    {
      id: 'step-2-new-vs-used',
      title: 'Step 2: Should You Buy a New or Used Car?',
    },
    {
      id: 'step-3-body-type',
      title: 'Step 3: Which Car Body Type Suits You: Hatchback, Sedan or SUV?',
    },
    {
      id: 'step-4-fuel-choice',
      title: 'Step 4: Which Fuel Type Should a First-Time Buyer Choose?',
    },
    {
      id: 'step-5-loan-tips',
      title: 'Step 5: What Are the Best Car Loan Tips for First-Time Buyers?',
    },
    {
      id: 'step-6-test-drive',
      title: 'Step 6: What Should You Check During a Test Drive?',
    },
    {
      id: 'step-7-on-road-price',
      title: 'Step 7: What Is Included in the On-Road Price?',
    },
    {
      id: 'step-8-insurance',
      title: 'Step 8: Which Car Insurance Should You Choose?',
    },
    {
      id: 'step-9-negotiation',
      title: 'Step 9: How Do You Negotiate the Best Deal?',
    },
    {
      id: 'step-10-pdi-inspection',
      title: 'Step 10: What Should You Check Before Taking Delivery (PDI)?',
    },
    {
      id: 'checklist-table',
      title: 'How to Buy a New Car in India: Quick Checklist',
    },
    {
      id: 'faqs',
      title: 'Frequently Asked Questions',
    },
  ];

  const faqData = [
    {
      q: 'What is the 20/4/10 rule for financing a first car in India?',
      a: 'The 20/4/10 rule recommends making at least a 20% down payment, capping your auto loan tenure at a maximum of 4 years, and ensuring total monthly vehicle running costs (EMI plus fuel and insurance) do not exceed 10% of gross income.',
    },
    {
      q: 'Can a car buyer refuse dealer handling or logistical charges in India?',
      a: 'Yes, handling, logistics, and depot charges have been declared illegal by the Supreme Court of India and state transport commissioners; you can insist the dealership waive this line item or file a complaint with the regional transport office.',
    },
    {
      q: 'Is a zero-depreciation insurance add-on mandatory for new cars?',
      a: 'While not legally mandatory under the Motor Vehicles Act, a Zero Depreciation (Bumper-to-Bumper) cover is essential for first-time buyers because it pays 100% replacement costs for expensive plastic, fiber, and glass components during accidental collision claims.',
    },
    {
      q: 'How many kilometres should appear on the odometer during new car PDI?',
      a: 'A factory-fresh vehicle should ideally reflect between 15 and 60 kilometres on its digital odometer, representing minimal transit movement from the railway siding or stockyard to the dealer showroom floor.',
    },
    {
      q: 'Can I purchase comprehensive car insurance online rather than from the showroom?',
      a: 'Yes, buyers have the legal right to purchase insurance from any IRDAI-registered online aggregator, which frequently saves between ₹15,000 and ₹35,000 compared to inflated in-house dealership quotes.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'First Car Buying Guide: 10 Steps for Indian Buyers',
      description:
        'Our first car buying guide covers budgeting, car loans, test drives and insurance in 10 easy steps. Buy your first car with confidence. Read now.',
      image:
        'https://drivesmart-india.vercel.app/images/first-car-buying-guide.webp',
      author: {
        '@type': 'Organization',
        name: 'DriveSmart Team',
        url: 'https://drivesmart-india.vercel.app/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'DriveSmart India',
        url: 'https://drivesmart-india.vercel.app/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://drivesmart-india.vercel.app/images/car-buying-guide-india-hero.webp',
        },
      },
      datePublished: '2026-10-12',
      dateModified: '2026-10-12',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://drivesmart-india.vercel.app/first-car-buying-guide',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://drivesmart-india.vercel.app/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'First Car Buying Guide',
          item: 'https://drivesmart-india.vercel.app/first-car-buying-guide-india-step-by-step',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    },
  ];

  const seo = SEO_DATA['/first-car-buying-guide'];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/first-car-buying-guide-india-step-by-step"
        ogImage="https://drivesmart-india.vercel.app/images/first-car-buying-guide.webp"
        keywords={`${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`}
        type="article"
        schema={schema}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <Link to="/" className="hover:text-[#FF6B1A] transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-medium">
                First Car Buying Guide India
              </span>
            </li>
          </ol>
        </nav>

        {/* H1 Heading */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] tracking-tight leading-tight mb-4">
            First Car Buying Guide India: 10 Simple Steps for Beginners
          </h1>

          {/* Meta Details */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 pb-4 border-b border-slate-200">
            <span className="flex items-center gap-1.5 font-medium text-slate-900">
              <User className="w-4 h-4 text-[#FF6B1A]" />
              <span>DriveSmart Team</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Updated: October 2026</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>10 min read</span>
            </span>
            <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-50 text-[#FF6B1A] border border-orange-200">
              Buyer Protection Handbook
            </span>
          </div>

          {/* Social Share Buttons */}
          <ShareButtons
            title="First Car Buying Guide India: 10 Steps for Beginners"
            url="/first-car-buying-guide"
          />
        </header>

        {/* Featured Image */}
        <SmartImage
          src="/images/first-car-buying-guide.webp"
          alt="Modern car showroom with brand new vehicle on display for first car buying guide India"
          width={1200}
          height={630}
          loading="eager"
          caption="Navigating modern car dealerships with financial clarity, smart test drives, and showroom confidence."
        />

        {/* First 100 Words with Main Keyword */}
        <div className="text-lg text-slate-700 leading-relaxed font-normal mb-8">
          Stepping into an automobile dealership for the first time is thrilling, but without a proven <strong>first car buying guide India</strong>, enthusiastic buyers frequently face unforeseen costs. Gathering verified first time car buyer tips and establishing a disciplined budget for first car ownership ensures you choose the right model without showroom stress. In this 10-step handbook, we walk you through loans, test drives, and pre-delivery checks.
        </div>

        {/* Table of Contents */}
        <TableOfContents items={tocItems} />

        {/* Article Body - max-w ~ 750px */}
        <div className="max-w-[750px] mx-auto space-y-12 text-slate-800 text-[16px] sm:text-[17px] leading-[1.8]">
          {/* Step 1 */}
          <section id="step-1-budgeting" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 1: What Budget for First Car and Loan EMI Should You Plan?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              You should spend no more than half your annual household gross income on your first car, ensuring your monthly loan EMI remains below fifteen to twenty percent of net take-home salary. Always compute total on-road costs—including RTO registration, insurance, and maintenance reserves—rather than relying on advertised ex-showroom prices.
            </p>
            <p>
              In India, emotional excitement often tempts beginners into overstretching their financial limits. A car advertised at an ex-showroom price of ₹8 Lakh will easily cost ₹9.4 Lakh to ₹9.8 Lakh on-road in states like Maharashtra, Karnataka, or Kerala due to high road tax brackets (10% to 15%) and statutory municipal levies.
            </p>
            <p>
              Establish a realistic financial ceiling before browsing manufacturer brochures. Remember that car ownership involves recurrent running expenditures: comprehensive annual insurance renewals (approx. ₹18,000 to ₹30,000), monthly fuel consumption (₹4,000 to ₹8,000), scheduled periodic servicing (₹6,000 to ₹12,000), parking fees, and toll charges via FASTag.
            </p>
          </section>

          {/* Step 2 */}
          <section id="step-2-new-vs-used" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 2: Should You Buy a New or Used Car?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              If you have recently obtained your driving licence and fear minor parking dings, a well-maintained 3-to-4-year-old certified pre-owned car offers minimum depreciation and lower initial capital. However, if long-term factory warranty, modern 6-airbag crash safety, and peace of mind matter most, buy a new car.
            </p>
            <p>
              Used vehicles allow first-timers to buy a higher-segment vehicle (for example, acquiring a midsize sedan for the price of an entry-level hatchback). Furthermore, new cars suffer steep initial depreciation—typically losing 25% to 35% of their market value during the first three years of registration.
            </p>
            <p>
              On the flip side, used car financing carries considerably higher interest rates (12% to 16% per annum compared to 8.75% to 9.5% for brand-new vehicles). Pre-owned cars also require rigorous mechanical scrutiny to detect flood water damage, accidental chassis repairs, or rolled-back digital odometers. For most novices who lack trusted independent mechanics, a new car backed by a 3-year or 1,00,000-km manufacturer warranty remains the lowest-stress avenue.
            </p>
          </section>

          {/* Step 3 */}
          <section id="step-3-body-type" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 3: Which Car Body Type Suits You: Hatchback, Sedan or SUV?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Hatchbacks are ideal for crowded city streets and tight parking spaces, compact SUVs offer elevated seating and high ground clearance (180–205 mm) to tackle broken monsoon roads, and sedans deliver superior highway stability, aerodynamic high-speed cruising comfort, and dedicated separate luggage boot capacity.
            </p>
            <p>
              Sub-4-metre compact crossovers have seized dominance in India due to their commanding road visibility and ability to glide over towering speed breakers without scraping underbodies. For beginner drivers, an elevated driving position provides superior spatial awareness of the vehicle's bonnet edges and surrounding bumper traffic.
            </p>
            <p>
              However, traditional premium hatchbacks should not be overlooked. They deliver sharper handling, weigh less, generate better fuel mileage, and remain far easier to parallel park in congested metropolitan apartment basements.
            </p>
          </section>

          {/* Step 4 */}
          <section id="step-4-fuel-choice" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 4: Which Fuel Type Should a First-Time Buyer Choose?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              First-time buyers driving less than 1,000 kilometres monthly should choose a refined petrol engine for its lower purchase price and minimal maintenance. For daily city commutes over 50 kilometres, choose factory-fitted CNG or an electric vehicle, while high-mileage highway drivers can still consider diesel.
            </p>
            <p>
              For a detailed breakdown of fuel economics, battery warranties, and real-world running figures, study our dedicated{' '}
              <Link
                to="/petrol-vs-diesel-vs-cng-vs-ev-car-comparison-india"
                className="font-bold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                petrol vs diesel vs CNG vs EV comparison
              </Link>
              , which breaks down exact per-kilometre operational budgets.
            </p>
            <p>
              Remember that choosing the wrong fuel can lock you into years of regret. If you select a diesel for occasional weekend drives in Delhi-NCR, you face strict 10-year registration caps and soot filter clogs. Conversely, choosing an EV without dedicated parking can make daily home charging practically impossible.
            </p>
          </section>

          {/* Step 5 */}
          <section id="step-5-loan-tips" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 5: What Are the Top First Time Car Buyer Tips for Bank Loans?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              The best car loan tips for first-time buyers include securing pre-approved financing from public or private banks before visiting dealerships, putting down at least 20% to avoid negative equity, restricting loan tenures to four or five years, and verifying zero pre-payment penalty clauses.
            </p>
            <p>
              Dealership finance managers often push tie-up loans from private non-banking financial companies (NBFCs) carrying higher interest margins or hidden documentation surcharges. Instead, check competitive auto loan terms directly on national banking portals such as the{' '}
              <a
                href="https://sbi.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                <span>State Bank of India Car Loan Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              , where floating rates for credit scores above 750 frequently hover near 8.75% to 9.25%.
            </p>
            <p>
              When applying these car loan tips for first-time buyers, beware of balloon EMI schemes that offer artificially low monthly payments initially before imposing huge lump-sum payouts in final years. A clean, standard amortising loan remains the safest vehicle financing tool.
            </p>

            {/* Interactive Calculator Promotion Card */}
            <div className="my-6 p-4 rounded-2xl bg-orange-50/80 border border-orange-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B1A] text-white flex items-center justify-center shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Calculate Your Monthly Loan Installments
                  </h3>
                  <p className="text-xs text-slate-600">
                    Adjust vehicle price, down payment, and tenure with our visual donut breakdown chart.
                  </p>
                </div>
              </div>
              <Link
                to="/tools/car-loan-emi-calculator-india"
                className="inline-flex items-center gap-1.5 bg-[#0B1F3A] hover:bg-[#132c4e] text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap"
              >
                <span>Calculate Your Car Loan EMI</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* Step 6 */}
          <section id="step-6-test-drive" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 6: What Should You Check During a Test Drive?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              During a test drive, check seating ergonomics, blind-spot visibility, air conditioning cooling performance in peak afternoon sun, clutch travel smoothness, suspension suppleness over broken patches, and brake pedal bite. Always test drive with your entire family on board to evaluate real-world passenger legroom and suspension load.
            </p>
            <p>
              Never settle for a 1-kilometre quick circuit around the showroom block. Insist on driving the car along routes representing your authentic daily commute: climb a steep flyover or basement ramp, tackle a broken road, reverse into a narrow parking slot, and engage highway speeds up to 80 km/h.
            </p>
            <p>
              Pay keen attention to cabin Noise, Vibration, and Harshness (NVH) levels. Verify that the rearview mirrors and wing mirrors offer wide blind-spot coverage. If you are opting for an automatic (AMT, CVT, Torque Converter, or Dual-Clutch DCT), observe whether gear shifts feel jerky in slow crawl traffic.
            </p>
          </section>

          {/* Step 7 */}
          <section id="step-7-on-road-price" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 7: What Is Included in the On-Road Price?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              The on-road price includes the ex-showroom invoice price, mandatory state Road Tax (RTO registration fees), FASTag issuance, Tax Collected at Source (1% TCS for cars above ₹10 Lakh), and motor vehicle insurance. Dealership handling fees, overpriced accessory kits, and extended warranties are optional or negotiable items.
            </p>
            <p>
              Dealers routinely print itemised quotation sheets that lump essential costs with discretionary add-ons. You are under no statutory obligation to buy chrome garnish kits, dealer-branded floor mats, air purifiers, or Teflon coating packages worth ₹25,000 to ₹40,000.
            </p>
            <p>
              Ask the sales consultant to provide a clean pro-forma invoice splitting each charge distinctly. Official state registration fees can be verified directly on the Ministry of Road Transport portal at{' '}
              <a
                href="https://parivahan.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                <span>Parivahan Sewa</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              , safeguarding you against phantom markups.
            </p>
          </section>

          {/* Step 8 */}
          <section id="step-8-insurance" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 8: Which Car Insurance Should You Choose?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Choose a Comprehensive Insurance Policy featuring a 1-year own-damage and 3-year third-party tenure with essential add-on riders: Zero Depreciation, Engine & Gearbox Protection, Return to Invoice (RTI), and 24x7 Roadside Assistance. Compare quotes online through IRDAI-registered portals to save fifteen to thirty percent.
            </p>
            <p>
              In India, standard comprehensive policies apply heavy depreciation deductions during claims: 50% on plastic, nylon, and rubber components, and 30% on fiberglass parts. A Zero Depreciation (Nil-Dep) rider eliminates these out-of-pocket costs entirely.
            </p>
            <p>
              Engine Protection cover is equally critical, especially when facing seasonal monsoon waterlogging. If water is sucked into the engine intake causing hydrostatic lock, standard comprehensive policies reject the claim as consequential damage; the Engine Protection rider covers full repair or replacement bills.
            </p>
          </section>

          {/* Step 9 */}
          <section id="step-9-negotiation" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 9: How Do You Negotiate the Best Deal?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Negotiate the best deal by pitting two competing dealerships of the same brand against each other towards month-end or festive quarter-ends. Seek cash discounts on the ex-showroom price, match dealership insurance quotes against online aggregator rates, and negotiate free 4th- and 5th-year extended manufacturer warranties.
            </p>
            <p>
              Never reveal how deeply in love you are with a specific vehicle color or variant. Sales executives are trained to sense buyer enthusiasm and withdraw discounting leverage. Maintain a composed demeanour and express interest in a competing rival brand.
            </p>
            <p>
              The most lucrative periods for discount negotiation in India are October festival seasons (Navratri, Dussehra, Diwali) and the year-end clearance window in December, when dealers push hard to liquidate existing manufacturing year stocks before January calendar price hikes.
            </p>
          </section>

          {/* Step 10 */}
          <section id="step-10-pdi-inspection" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              Step 10: What Should You Check Before Taking Delivery (PDI)?
            </h2>
            {/* Direct Answer Paragraph (40-60 words) */}
            <p className="bg-orange-50/70 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 leading-relaxed">
              Perform your Pre-Delivery Inspection (PDI) in broad daylight at the dealer stockyard before releasing the final balance payment and before registration. Check exterior paint for transit scratches, verify the Vehicle Identification Number (VIN) manufacturing month, test every electrical switch, and check tyre manufacturing date codes.
            </p>
            <p>
              Once a motor vehicle is registered with the RTO in your name, returning a defective unit becomes practically impossible under Indian consumer protection mechanisms. Inspect the car before registration papers are submitted to the regional transport office.
            </p>
            <p>
              Bring a small flashlight, a tyre pressure gauge, and a trusted friend. Verify that the toolkit, spare tyre, jack, warning triangle, and first-aid kit are in the boot. Turn the ignition on, start the air conditioning, verify all power windows, infotainment touchscreens, reverse camera guidelines, and headlamp beams.
            </p>

            <SmartImage
              src="/images/car-inspection-pdi.webp"
              alt="Pre-delivery inspection technician checking new car components in service bay"
              width={1200}
              height={630}
              loading="lazy"
              caption="Conduct a systematic pre-delivery inspection (PDI) in daylight to verify paint finish, electricals, and manufacturing date codes before registration."
            />
          </section>

          {/* Checklist Table */}
          <section id="checklist-table" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] tracking-tight">
              How to Buy a New Car in India: Quick Checklist
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              This summary checklist consolidates the entire workflow on how to buy a new car in India into five structured operational stages for first-time owners.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Stage</th>
                    <th className="p-3.5 font-bold">Key Action Items</th>
                    <th className="p-3.5 font-bold">Target Timeframe</th>
                    <th className="p-3.5 font-bold">Cost Saving Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">1. Budget & Shortlisting</td>
                    <td className="p-3.5">Calculate on-road ceiling, check safety crash test stars, fix body type</td>
                    <td className="p-3.5">4 to 6 Weeks Prior</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Prevents ₹1L–₹3L EMI overextension</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">2. Test Drive & Loans</td>
                    <td className="p-3.5">Compare public bank loan rates, test ergonomics with family</td>
                    <td className="p-3.5">3 Weeks Prior</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Saves ₹25k–₹60k in loan interest</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">3. Price Quotation & Deals</td>
                    <td className="p-3.5">Remove illegal handling charges, negotiate insurance online</td>
                    <td className="p-3.5">2 Weeks Prior</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Saves ₹20k–₹45k in dealer markups</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">4. Pre-Delivery Inspection</td>
                    <td className="p-3.5">Daylight stockyard PDI, verify VIN month & odometer (&lt; 60 km)</td>
                    <td className="p-3.5">3–5 Days Prior to RTO</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Prevents acquiring repaired stock</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">5. Showroom Handover</td>
                    <td className="p-3.5">Collect Form 20, 21, Road Tax receipt, invoice, owner manual, 2 keys</td>
                    <td className="p-3.5">Delivery Day</td>
                    <td className="p-3.5 text-emerald-700 font-bold">Ensures seamless RTO registration</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 italic">
              Prices and costs vary by city and model; check with your dealer.
            </p>
          </section>

          {/* Conclusion */}
          <section className="bg-slate-100 p-6 rounded-2xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-bold text-slate-900">
              Final Takeaway on this First Car Buying Guide India
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              In conclusion, following this comprehensive <strong>first car buying guide India</strong> equips you with the financial clarity and analytical discipline required to navigate automotive dealerships smoothly. Balancing your budget for first car targets with verified first time car buyer tips will prevent buyers remorse and secure long-term value. After bringing your new ride home, protect your valuable asset from wet-weather hazards by reading our guide to{' '}
              <Link
                to="/monsoon-car-care-tips-rainy-season-protection"
                className="font-bold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                essential monsoon car care tips
              </Link>{' '}
              covering underbody rustproofing and flood prevention.
            </p>
            <p className="text-xs text-slate-500 italic">
              Prices and costs vary by city and model; check with your dealer.
            </p>
          </section>

          {/* FAQ Section */}
          <section id="faqs" className="space-y-6 pt-6 border-t border-slate-200">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF6B1A]" />
              <h2 className="text-2xl font-extrabold text-[#0B1F3A] tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs"
                >
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles Component */}
          <RelatedArticles currentPath={currentPath} />
        </div>
      </article>
    </>
  );
};
