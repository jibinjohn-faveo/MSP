import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lock, User, Mail, Phone, Building } from 'lucide-react';

interface TrustBannerCTAProps {
  onSignUp: () => void;
}

export const TrustBannerCTA: React.FC<TrustBannerCTAProps> = ({ onSignUp }) => {
  const [showInlineForm, setShowInlineForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section className="bg-gradient-to-r from-[#0077d4] via-[#0082e6] to-[#0284c7] py-20 px-4 sm:px-6 lg:px-8 text-center text-white relative overflow-hidden shadow-inner">
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Main Heading from Screenshot 10 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight [text-wrap:balance]">
          See Why 5000+ Businesses Trust Faveo
        </h2>

        {/* 2-line Subheading from Screenshot 10 */}
        <p className="mt-4 text-xl sm:text-2xl font-normal text-sky-100 tracking-wide">
          Learn How Faveo Service Desk
        </p>
        <p className="text-xl sm:text-2xl font-normal text-sky-100 tracking-wide">
          Can Make Your Customer Happy
        </p>

        {!showInlineForm ? (
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* White SIGN UP Button from Screenshot 10 */}
            <button
              onClick={() => setShowInlineForm(true)}
              className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm sm:text-base tracking-wider uppercase rounded-xl shadow-xl transition-all duration-150 hover:scale-105 active:scale-95 cursor-pointer"
            >
              SIGN UP
            </button>
            <button
              onClick={onSignUp}
              className="px-6 py-4 bg-sky-900/40 hover:bg-sky-900/60 border border-sky-300/40 text-white font-semibold text-sm rounded-xl transition-all cursor-pointer"
            >
              Launch Instant 14-Day Trial
            </button>
          </div>
        ) : (
          /* Inline 4-field Quick Form (Name, Email, Phone, Company) */
          <div className="mt-10 max-w-2xl mx-auto bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl text-left transition-all">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="text-center pb-2">
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Sign Up for Your Free Faveo RMM Trial
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    14 days free trial · No Credit card Required · Setup in minutes
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Company Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        placeholder="Acme MSP Inc."
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-[#0082e6] hover:bg-[#0072cb] text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit and Activate Workspace</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    100% Secure Data Transmission
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowInlineForm(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-slate-900">
                  Thank you, {formData.name}!
                </h4>
                <p className="text-sm text-slate-600">
                  We've initiated the setup for <strong className="text-slate-800">{formData.companyName}</strong>. Check <span className="font-semibold text-sky-600">{formData.email}</span> for your login details.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-sky-600 font-bold hover:underline cursor-pointer"
                >
                  ← Submit another
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
