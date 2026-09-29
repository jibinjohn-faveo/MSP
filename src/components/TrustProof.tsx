import React from 'react';
import { ORIGINAL_CONTENT } from '../data/content';
import { Star, Shield, ArrowRight, Quote } from 'lucide-react';

interface TrustProofProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const TrustProof: React.FC<TrustProofProps> = ({ onOpenTrial, onOpenDemo }) => {
  const testimonials = [
    {
      quote: "Before Faveo RMM, we had technicians wasting hours traveling to client offices just to run updates or check disk errors. Now our entire MSP fleet of 1,200+ endpoints is patched silently in the background, with all alerts creating instant tickets inside Faveo ServiceDesk.",
      author: "Marcus Vance",
      role: "Lead Systems Architect & Partner",
      company: "Vance IT Solutions (MSP)",
      impact: "74% drop in manual dispatch visits"
    },
    {
      quote: "The ability to run custom PowerShell and Bash scripts across hundreds of client devices simultaneously with role-based access has transformed our service level agreements. Faveo's pricing is transparent and scalable without punitive per-endpoint traps.",
      author: "Sarah Lindqvist",
      role: "Director of Managed Operations",
      company: "Nordic Cloud Infrastructure",
      impact: "Reduced patch turnaround by 3.5 days"
    },
    {
      quote: "We needed a platform that supported both Windows workstations and our specialized Linux compute nodes without complex multi-vendor license sprawl. Faveo delivered everything in one lightweight agent.",
      author: "David Chen",
      role: "Chief Information Officer",
      company: "Apex Global Technology",
      impact: "Consolidated 3 legacy RMM tools into one"
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Social Proof &amp; Reliability
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight [text-wrap:balance]">
            {ORIGINAL_CONTENT.socialProof.title}
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            {ORIGINAL_CONTENT.socialProof.subtitle}
          </p>
        </div>

        {/* 4 Quantitative Rigor Metric Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {ORIGINAL_CONTENT.socialProof.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl border border-slate-200/90 bg-slate-50 text-center hover:border-slate-300 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm font-medium text-slate-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 3 Real Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                {/* Zero-pill impact note */}
                <div className="text-xs text-blue-700 font-semibold mb-2">
                  Impact: {t.impact}
                </div>
                <div className="text-sm font-bold text-slate-900">{t.author}</div>
                <div className="text-xs text-slate-500 font-medium">
                  {t.role} · {t.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar from Original: "Sign Up" */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenTrial}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md shadow-blue-600/25 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Sign Up for Free (14-Day Trial)</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="mt-2 text-xs text-slate-500">
            No credit card required · Instant setup in minutes · 100% Secure
          </p>
        </div>

      </div>
    </section>
  );
};
