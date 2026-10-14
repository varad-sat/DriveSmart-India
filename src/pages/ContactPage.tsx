import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { SmartImage } from '../components/SmartImage';
import { SEO_DATA } from '../data/seoKeywords';
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, ChevronRight, HelpCircle } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const seo = SEO_DATA['/contact'];
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    budget: '',
    question: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.metaDescription}
        canonicalUrl="https://drivesmart-india.vercel.app/contact"
        keywords={`${seo.mainKeyword}, ${seo.relatedKeywords.join(', ')}`}
        type="website"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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
                Contact Us
              </span>
            </li>
          </ol>
        </nav>

        {/* Header (Single H1) */}
        <header className="mb-10 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Reader Support & Inquiries</span>
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] dark:text-white tracking-tight mb-4">
            Contact DriveSmart India: Editorial Support & Reader Assistance
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Welcome to the official desk to <strong>contact DriveSmart India</strong>. Whether you seek custom <strong>car buying advice</strong> for your daily office commute or want to <strong>ask a car question</strong> regarding insurance riders, our independent editorial team is here to assist.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <section className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white">
                Need Personalized Car Buying Advice?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Finding the right vehicle requires matching on-road pricing with real-world fuel economy. Reach out to contact DriveSmart India for objective car buying advice free of dealership influence.
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Email Editorial Desk</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">editorial@drivesmart-india.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-50 dark:bg-orange-950/40 text-[#FF6B1A] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500">Location</div>
                    <div className="text-sm font-bold text-slate-900 dark:text-white">Bengaluru & New Delhi, India</div>
                  </div>
                </div>
              </div>
            </section>

            <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200 dark:border-slate-800">
              <SmartImage
                src="/images/first-car-buying-guide.webp"
                alt="Direct contact DriveSmart India communication channel for automotive queries"
                width={480}
                height={260}
                className="w-full h-44 object-cover"
              />
            </div>
          </div>

          {/* Form: Ask a Car Question */}
          <div className="lg:col-span-7">
            <section className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs">
              <h2 className="text-xl font-bold text-[#0B1F3A] dark:text-white mb-2">
                Ask a Car Question to Our Automotive Panel
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill in your details below to ask a car question or receive targeted car buying advice tailored to your budget.
              </p>

              {submitted ? (
                <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-2xl text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Thank You for Your Inquiry!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    We have received your automotive query. When you contact DriveSmart India, our senior editorial team reviews every inquiry to deliver comprehensive car buying advice within 24 to 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-[#FF6B1A] hover:underline pt-2"
                  >
                    Send another question
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Varad Sharma"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        City / State
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Pune, Maharashtra"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Approximate Budget (₹ Lakh)
                      </label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        placeholder="e.g. ₹10 - ₹15 Lakh"
                        className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2.5 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Your Vehicle Query or Question *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.question}
                      onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                      placeholder="Ask a car question regarding fuel comparison, waiting periods, pre-delivery inspections or dealer quotes..."
                      className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-[#FF6B1A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#e05b12] text-white text-xs font-bold py-3 px-5 rounded-xl transition-colors shadow-xs"
                  >
                    <span>Submit Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>

        {/* Conclusion / Last Paragraph */}
        <section className="bg-slate-100 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 text-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
            How to Contact DriveSmart India for Support
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            In conclusion, whenever you need transparent automotive research or want to <strong>contact DriveSmart India</strong>, our team is always eager to help you negotiate with dealers and choose the best car for your budget.
          </p>
        </section>
      </div>
    </>
  );
};
