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
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  User,
  Calendar,
  Clock,
  ExternalLink,
  AlertTriangle,
  FileText,
} from 'lucide-react';

export const InsuranceGuidePage: React.FC = () => {
  const tocItems = [
    { id: 'why-insurance-essential', title: 'Why Is Car Insurance Critical in India?' },
    { id: 'zero-dep-explained', title: 'What Is Zero Depreciation Car Insurance?' },
    { id: 'engine-protection', title: 'Why Do You Need Engine Protection Cover?' },
    { id: 'return-to-invoice', title: 'How Does Return to Invoice (RTI) Work?' },
    { id: 'dealership-vs-online', title: 'Should You Buy Insurance Online or From the Dealer?' },
    { id: 'ncb-transfer', title: 'How to Transfer Your No Claim Bonus (NCB)?' },
    { id: 'comparison-table', title: 'Car Insurance Add-Ons Comparison Table' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ];

  const faqData = [
    {
      q: 'Is Zero Depreciation insurance mandatory by Indian law?',
      a: 'No. The Motor Vehicles Act only mandates third-party liability insurance. Zero Depreciation is an optional add-on for comprehensive policies, but it is strongly recommended for all new cars up to 5 years of age.',
    },
    {
      q: 'Does standard car insurance cover water damage in the engine?',
      a: 'No. Standard comprehensive policies treat engine water damage (hydrostatic lock) during floods as consequential loss and reject the claim. You must purchase an Engine and Gearbox Protection rider to cover flood water ingress.',
    },
    {
      q: 'How much can I save by buying car insurance online instead of through the dealer?',
      a: 'Car buyers typically save between 20% and 40% on own-damage premiums by purchasing directly from IRDAI-registered online insurers or asking dealers to match online aggregator quotations.',
    },
    {
      q: 'Can I transfer my 50% No Claim Bonus to a brand new car purchase?',
      a: 'Yes. The No Claim Bonus belongs to the driver, not the car. When selling your old vehicle, request an NCB Retention Certificate from your insurer and apply the up to 50% discount to your new car purchase.',
    },
    {
      q: 'What is the claim settlement process after an accident in India?',
      a: 'Inform your insurer immediately, photograph the incident scene, file a cashless claim at an authorised network garage, submit documents (RC, driving licence, policy copy), and wait for the surveyor inspection before repairs commence.',
    },
  ];

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained',
      description:
        'Complete guide to Indian car insurance policies: Zero Depreciation, Return to Invoice, Engine Protection add-ons, and how to save 30% on showroom quotes.',
      image: 'https://drivesmart-india.vercel.app/images/car-insurance-guide-india.webp',
      author: {
        '@type': 'Organization',
        name: 'DriveSmart Team',
        url: 'https://drivesmart-india.vercel.app/',
      },
      publisher: {
        '@type': 'Organization',
        name: 'DriveSmart India',
        url: 'https://drivesmart-india.vercel.app/',
      },
      datePublished: '2026-10-12',
      dateModified: '2026-10-12',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://drivesmart-india.vercel.app/car-insurance-guide-india-zero-dep-explained',
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
          name: 'Car Insurance Guide India',
          item: 'https://drivesmart-india.vercel.app/car-insurance-guide-india-zero-dep-explained',
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

  const seo = SEO_DATA['/car-insurance-guide-india'];

  return (
    <>
      <ReadingProgressBar />
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/car-insurance-guide-india-zero-dep-explained"
        ogImage="https://drivesmart-india.vercel.app/images/car-insurance-guide-india.webp"
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
              <span className="text-slate-800 dark:text-slate-200 font-medium">
                Car Insurance Guide India
              </span>
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0B1F3A] dark:text-white tracking-tight leading-tight mb-4">
            Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pb-4 border-b border-slate-200 dark:border-slate-800">
            <span className="flex items-center gap-1.5 font-medium text-slate-900 dark:text-white">
              <User className="w-4 h-4 text-[#FF6B1A]" />
              <span>DriveSmart Team</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Updated: October 2026</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>8 min read</span>
            </span>
            <span className="ml-auto inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              IRDAI Guidelines Compliant
            </span>
          </div>

          <ShareButtons
            title="Car Insurance Guide India: Zero Dep, RTI & Engine Protect Explained"
            url="/car-insurance-guide-india"
          />
        </header>

        {/* Featured Image */}
        <SmartImage
          src="/images/car-insurance-guide-india.webp"
          alt="Car insurance policy documents and contract paperwork for car insurance guide India"
          width={1200}
          height={630}
          loading="eager"
          caption="Navigating insurance policy add-on riders, legal policy wording, and online premium comparisons."
        />

        {/* Introduction */}
        <div className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal mb-8">
          Purchasing insurance for your motor vehicle is one of the biggest ongoing ownership expenses after fuel. Yet thousands of Indian motorists blindly accept bloated dealership insurance quotes with high margins and critical coverage gaps. In this comprehensive <strong>car insurance guide India</strong>, we explain how to buy comprehensive car insurance online and leverage zero dep insurance benefits alongside Return to Invoice (RTI) and Engine Protection, ensuring full financial security without unnecessary markups.
        </div>

        <TableOfContents items={tocItems} />

        <div className="max-w-[750px] mx-auto space-y-12 text-slate-800 dark:text-slate-200 text-[16px] sm:text-[17px] leading-[1.8]">
          {/* Section 1 */}
          <section id="why-insurance-essential" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Why Is Comprehensive Car Insurance Critical in India?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Car insurance is critical in India because standard motor policies legally protect you against catastrophic third-party liabilities under the Motor Vehicles Act, while comprehensive own-damage policies absorb massive financial losses from road accidents, natural disasters, theft, and urban flash flooding.
            </p>
            <p>
              In India, new passenger vehicles must be insured under a bundled structure: a mandatory 3-year third-party liability cover combined with a 1-year own-damage (OD) policy. While third-party coverage pays for injury or property damage inflicted on others, own-damage coverage pays for repairs to your own car.
            </p>
            <p>
              Before accepting the dealership insurance quote, review our{' '}
              <Link
                to="/first-car-buying-guide-india-step-by-step"
                className="font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                first car buying guide
              </Link>{' '}
              to see how to negotiate insurance add-ons and eliminate dealer markups.
            </p>
          </section>

          {/* Section 2 */}
          <section id="zero-dep-explained" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              What Are the Core Zero Dep Insurance Benefits in India?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Zero Depreciation (Nil-Dep) car insurance is an add-on rider that guarantees full reimbursement on replacement parts during accident claims without deducting mandatory depreciation penalties of up to 50% on plastic, rubber, nylon, and glass components.
            </p>
            <p>
              Under a basic policy, insurance companies apply steep statutory depreciation when calculating claim settlements: 50% on rubber and plastic components (such as bumper assemblies and fluid hoses), 30% on fiberglass parts, and up to 50% on metal panels depending on vehicle age.
            </p>
            <p>
              With a Zero Depreciation cover, your out-of-pocket payment is restricted purely to standard compulsory claim deductibles (usually ₹1,000 to ₹2,000 as per IRDAI guidelines). For any vehicle under five years old, Zero Dep is an indispensable investment.
            </p>
          </section>

          {/* Section 3 */}
          <section id="engine-protection" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Why Do You Need Engine Protection Cover?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              You need Engine Protection cover because standard car insurance policies explicitly exclude damage caused by water ingress (hydrostatic lock) and lubricant leakage. An Engine and Gearbox Protection rider covers full repair or replacement bills that frequently exceed ₹1.5 lakh to ₹3 lakh.
            </p>
            <p>
              During torrential Indian monsoon rains, navigating waterlogged underpasses is a common hazard. If water enters the engine intake while the engine is running, pistons seize instantly. Insurers classify attempts to restart a submerged engine as &ldquo;consequential loss&rdquo; and reject standard claims.
            </p>
            <p>
              To learn practical techniques for avoiding water ingress entirely, explore our{' '}
              <Link
                to="/monsoon-car-care-tips-rainy-season-protection"
                className="font-semibold text-[#FF6B1A] underline hover:text-[#e05b12]"
              >
                monsoon car care tips
              </Link>{' '}
              for Indian road conditions.
            </p>
          </section>

          {/* Section 4 */}
          <section id="return-to-invoice" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How Does Return to Invoice (RTI) Work?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              Return to Invoice (RTI) is an insurance add-on that bridges the gap between your car’s depreciated Insured Declared Value (IDV) and its original invoice price, including registration road taxes and road tolls, in the catastrophic event of total constructive loss or complete vehicular theft.
            </p>
            <p>
              If a six-month-old car worth ₹12 lakh on-road is stolen or irreparably crushed, a standard insurer pays only the IDV (typically 90% of ex-showroom value, or around ₹9.5 lakh). The owner loses over ₹2.5 lakh. With an RTI add-on, the insurer reimburses the original on-road purchase invoice amount down to the exact rupee.
            </p>
          </section>

          {/* Section 5 */}
          <section id="dealership-vs-online" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Should You Buy Insurance Online or From the Dealer?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              You should compare online quotes against dealer quotes before deciding: dealership insurance offers smoother cashless coordination in case of claims, but online aggregator policies are typically twenty to forty percent cheaper for identical coverage. Ask the showroom to price-match your online quote.
            </p>
            <p>
              Showrooms frequently inflate insurance quotes by bundling unwanted riders like key replacement, personal baggage, and exorbitant handling commissions. If you generate a quote online through reputable portals and present it to the showroom manager, most dealerships match the price rather than losing a customer.
            </p>
          </section>

          {/* Section 6 */}
          <section id="ncb-transfer" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              How to Transfer Your No Claim Bonus (NCB)?
            </h2>
            <p className="bg-orange-50/70 dark:bg-orange-950/30 border-l-4 border-[#FF6B1A] p-4 rounded-r-lg font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
              To transfer your No Claim Bonus (NCB), request an NCB Retention Certificate from your current insurance provider upon selling your existing car, and submit it when insuring your new vehicle to instantly deduct twenty to fifty percent from your own-damage premium.
            </p>
            <p>
              The No Claim Bonus is awarded to the driver for maintaining an accident-free record, not to the car itself. An NCB accumulated up to 50% over five claim-free years can save you between ₹10,000 and ₹25,000 on your new vehicle&apos;s initial policy!
            </p>
          </section>

          {/* Section 7: Add-Ons Comparison Table */}
          <section id="comparison-table" className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Car Insurance Add-Ons Comparison Table
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left text-sm border-collapse rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr>
                    <th className="p-3.5 font-bold">Add-On Rider</th>
                    <th className="p-3.5 font-bold">What It Covers</th>
                    <th className="p-3.5 font-bold">Recommended For</th>
                    <th className="p-3.5 font-bold">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Zero Depreciation</td>
                    <td className="p-3.5">100% parts replacement cost without depreciation cuts</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">All cars up to 5 years old</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">15%–20% of OD</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Engine Protect</td>
                    <td className="p-3.5">Hydrostatic lock and lubricant leak engine damages</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">Flood-prone cities, coastal zones</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">5%–10% of OD</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Return to Invoice</td>
                    <td className="p-3.5">Full original on-road purchase price on theft or total loss</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">Brand new cars in year 1–3</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">8%–12% of OD</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Roadside Assistance (RSA)</td>
                    <td className="p-3.5">Towing, flat tyre puncture help, battery jump-start, fuel delivery</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">Highway travelers, family cars</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">₹500 – ₹1,500/year</td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">Consumables Cover</td>
                    <td className="p-3.5">Engine oil, nuts, bolts, coolant, washer fluids used during repair</td>
                    <td className="p-3.5 text-emerald-700 font-semibold">Vehicles under 3 years old</td>
                    <td className="p-3.5 font-bold text-[#FF6B1A]">5%–8% of OD</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Conclusion */}
          <section className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Final Takeaway: Making the Most of this Car Insurance Guide India
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              In conclusion, following this comprehensive <strong>car insurance guide India</strong> ensures you do not overpay showroom brokers while maximizing your protection on Indian roads. Compare quotes across reputable IRDAI-registered online platforms, always lock in your zero dep insurance benefits for at least the first 5 years, and retain active comprehensive car insurance coverage for true peace of mind.
            </p>
          </section>

          {/* Section 8: FAQ */}
          <section id="faq" className="space-y-6 pt-6 border-t border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#FF6B1A]" />
              <h2 className="text-2xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
                Frequently Asked Questions About Indian Car Insurance
              </h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800"
                >
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <RelatedArticles currentPath="/car-insurance-guide-india" />
        </div>
      </article>
    </>
  );
};
