import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Play } from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface CTASectionProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-100 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
          Get Started Today
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
          {ORIGINAL_CONTENT.ctaBanner.heading}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          {ORIGINAL_CONTENT.ctaBanner.subheading}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenTrial}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/35 transition-all flex items-center gap-2 cursor-pointer group"
          >
            <span>Start Free Faveo Trial</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onOpenDemo}
            className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-sm rounded-xl shadow-sm hover:border-slate-400 transition-all flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span>Request a Demo</span>
          </button>
        </div>

        {/* Trust Badges - Zero-pill typography */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>14 days free trial</span>
          </div>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>No Credit card Required</span>
          </div>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Setup in minutes</span>
          </div>
          <span className="text-slate-300" aria-hidden="true">·</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Your information is 100% secure</span>
          </div>
        </div>

      </div>
    </section>
  );
};
