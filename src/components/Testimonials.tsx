import React from 'react';
import { Star, ShieldCheck, Quote, Building2, CheckCircle2 } from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface TestimonialsProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ onOpenTrial, onOpenDemo }) => {
  const testimonials = [
    {
      quote: "Before Faveo RMM, our technicians were constantly dispatched for on-site client visits just to apply patches and restart stalled services. With Faveo, our fleet of 1,200+ endpoints is monitored proactively, and routine scripts run silently in the background.",
      author: "Marcus Vance",
      role: "Lead Systems Architect & Partner",
      company: "Vance IT Solutions (MSP)",
      endpoints: "1,200+ Endpoints Managed",
      metric: "74% drop in manual dispatches",
      badge: "MSP Partner"
    },
    {
      quote: "The ability to run customized PowerShell and Bash automation scripts across multi-tenant client environments with strict role-based permissions transformed our operations. Plus, Faveo's pricing is transparent and scalable without punitive per-endpoint jumps.",
      author: "Sarah Lindqvist",
      role: "Director of Managed Operations",
      company: "Nordic Cloud Infrastructure",
      endpoints: "3,500+ Endpoints Managed",
      metric: "Reduced patch turnaround by 3.5 days",
      badge: "Enterprise IT"
    },
    {
      quote: "We needed a unified solution that handled both Windows and Linux production machines under one console without multi-vendor software bloat. Faveo delivered everything in one lightweight agent with zero performance impact.",
      author: "David Chen",
      role: "Chief Information Officer",
      company: "Apex Global Technology",
      endpoints: "800+ Devices Managed",
      metric: "Consolidated 3 legacy RMM tools into one",
      badge: "Fast-Growth MSP"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-sky-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-sky-200 shadow-2xs text-xs font-bold text-sky-700 uppercase tracking-wider mb-4">
            <Quote className="w-3.5 h-3.5 text-[#00a6f4]" />
            <span>Customer Testimonials &amp; Social Proof</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            See Why 10,000+ Businesses &amp; MSPs Trust Faveo
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Hear from MSP owners, IT directors, and system administrators who scaled their operations and eliminated downtime with Faveo RMM.
          </p>
        </div>

        {/* Quantifiable Track Record Metrics (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {ORIGINAL_CONTENT.socialProof.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00a6f4] font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 hover:border-sky-300 shadow-xs hover:shadow-xl hover:shadow-sky-100/60 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a6f4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: 5 Stars + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-sky-50 text-sky-700 border border-sky-100">
                    {t.badge}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic font-normal">
                  "{t.quote}"
                </p>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                {/* Impact Highlight */}
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100 mb-4 w-fit">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t.metric}</span>
                </div>

                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {t.author}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {t.role}
                    </p>
                    <p className="text-xs text-slate-700 font-semibold mt-0.5 flex items-center gap-1">
                      <Building2 className="w-3 h-3 text-slate-400" />
                      {t.company}
                    </p>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {t.endpoints}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
