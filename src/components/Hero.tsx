import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Check, Building, User, Mail, Phone } from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface HeroProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
  onExploreFunnel: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTrial, onOpenDemo, onExploreFunnel }) => {
  // Form State with the 4 required fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: ''
  });

  const [deploymentType, setDeploymentType] = useState<'cloud' | 'on-premise'>('cloud');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="overview" className="relative pt-10 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-sky-50/70 via-white to-white border-b border-sky-100 overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-1/4 w-[650px] h-[450px] bg-sky-200/40 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Banner Layout: Left Copy & Trust, Right Embedded Lead Capture Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Headlines, Subheading & Core Value Points */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top kicker tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-sky-200/80 shadow-xs text-xs font-semibold text-sky-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{ORIGINAL_CONTENT.hero.kicker}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-normal">Remote Monitoring & Management</span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.14] [text-wrap:balance]">
              <span className="text-[#00a6f4]">AI-Powered RMM</span> Software to Centralize Your IT Infrastructure
            </h1>

            {/* Subheadline exactly from original content */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
              {ORIGINAL_CONTENT.hero.subheadline}
            </p>

            {/* Core Value Checklist: 3 points highlighting AI-Powered RMM software */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>AI-Powered RMM software for proactive monitoring, intelligent health alerts, and multi-tenant tracking</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>IT Asset Management and Easy Agent Deployment</span>
              </div>
              <div className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span>One-click remote reboot, silent troubleshooting, and background script execution</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Banner Form (Name, Email, Phone, Company) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sky-200/90 shadow-2xl shadow-sky-100/60 relative">

              {/* Form Heading */}
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                Get Started with Faveo RMM
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Centralize your IT infrastructure, deploy updates, and fix systems remotely.
              </p>

              {/* Deployment Toggle: Cloud vs On-premise */}
              <div className="mt-4 grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setDeploymentType('cloud')}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    deploymentType === 'cloud'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Cloud
                </button>
                <button
                  type="button"
                  onClick={() => setDeploymentType('on-premise')}
                  className={`py-2 rounded-lg transition-all cursor-pointer ${
                    deploymentType === 'on-premise'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  On-premise
                </button>
              </div>

              {!isSubmitted ? (
                /* The 4-Field Form */
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  {/* Field 1: Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 2: Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 3: Phone Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Field 4: Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Building className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Acme MSP Technologies"
                        className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-lg shadow-sky-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <span>Setting up your environment...</span>
                      ) : (
                        <>
                          <span>Start Free Trial</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* Instant Confirmation Card */
                <div className="mt-6 py-6 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      Welcome aboard, {formData.name}!
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      Your Faveo RMM environment for <strong className="text-slate-800">{formData.companyName}</strong> has been provisioned.
                    </p>
                  </div>

                  <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 text-left text-xs space-y-2">
                    <div className="font-semibold text-sky-900">What happens next:</div>
                    <div className="text-slate-700">
                      1. Check <strong className="text-slate-900">{formData.email}</strong> for your workspace credentials.
                    </div>
                    <div className="text-slate-700">
                      2. Download the lightweight agent to begin monitoring your first device in seconds.
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs text-sky-600 font-semibold hover:underline cursor-pointer"
                  >
                    ← Submit another request
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
