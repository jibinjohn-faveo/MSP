import React from 'react';
import { 
  Sparkles,
  ArrowRight,
  Layers,
  Coins,
  Zap,
  XCircle,
  CheckCircle2,
  Check
} from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface WhyFaveoProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const WhyFaveo: React.FC<WhyFaveoProps> = ({ onOpenTrial, onOpenDemo }) => {
  const painPoints = [
    {
      id: 0,
      title: "Too Many Disconnected Tools",
      icon: <Layers className="w-6 h-6 text-sky-600" />,
      problem: {
        heading: "The Old Way",
        desc: "Juggling separate apps for tickets, remote control, and assets slows technicians down."
      },
      solution: {
        heading: "The Faveo Way",
        tagline: "One Unified Workspace",
        desc: "Manage tickets, client devices, and 1-click remote sessions from one clean screen."
      }
    },
    {
      id: 1,
      title: "Surprise Bills As You Grow",
      icon: <Coins className="w-6 h-6 text-emerald-600" />,
      problem: {
        heading: "The Old Way",
        desc: "Legacy vendors sting you with sudden per-endpoint rate jumps and unexpected fees."
      },
      solution: {
        heading: "The Faveo Way",
        tagline: "Fair, Predictable Pricing",
        desc: "Transparent flat-tier pricing with zero per-device penalties as your fleet expands."
      }
    },
    {
      id: 2,
      title: "Waiting For Systems To Break",
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      problem: {
        heading: "The Old Way",
        desc: "Only discovering crashes or full disks after an angry client calls about downtime."
      },
      solution: {
        heading: "The Faveo Way",
        tagline: "AI-Powered Proactive Fixes",
        desc: "Automated AI health alerts trigger silent background scripts and updates before downtime hits."
      }
    }
  ];

  return (
    <section id="why-faveo" className="py-20 bg-gradient-to-b from-white via-slate-50/40 to-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-sky-200 shadow-2xs text-xs font-bold text-sky-700 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00a6f4]" />
            <span>Why Switch to AI-Powered Faveo RMM?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            The Problems With Most RMM Tools — And How Faveo Fixes Them
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
            No steep learning curves or complicated pricing traps. Just a faster, cleaner way to run your IT operations.
          </p>
        </div>

        {/* 3 High-Impact Problem-to-Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {painPoints.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between overflow-hidden p-7 sm:p-8"
            >
              <div>
                {/* Top Icon */}
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-5">
                  {item.title}
                </h3>

                {/* The Problem (The Old Way) */}
                <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100/90 mb-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">
                    <XCircle className="w-3.5 h-3.5 text-rose-500" />
                    <span>{item.problem.heading}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.problem.desc}
                  </p>
                </div>

                {/* The Faveo Fix */}
                <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-100/90">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-sky-700 uppercase tracking-wider mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>{item.solution.heading}</span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    {item.solution.tagline}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.solution.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Why Faveo RMM Section (5 Reasons Grid) */}
        <div className="pt-12 border-t border-slate-200">
          
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight">
              Why Faveo AI-Powered RMM Software Is The Right Choice For Your IT Needs?
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
              Built from the ground up for managed service providers to scale operations, eliminate downtime, and maximize client retention.
            </p>
          </div>

          {/* 5 Reasons Minimalist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {ORIGINAL_CONTENT.whyFaveoPoints.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-sky-600 transition-colors">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDemo}
              className="px-7 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors cursor-pointer"
            >
              Request a Demo
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
