import React from 'react';
import { 
  Monitor, 
  Terminal, 
  UserCheck, 
  Settings, 
  HeartPulse, 
  Wand2, 
  GitFork, 
  Move, 
  Laptop,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface FeatureGridProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({ onOpenTrial, onOpenDemo }) => {
  // Enhanced metadata tags for each card (keeping original descriptions untouched)
  const featureMeta = [
    {
      os: 'Multi-OS Telemetry',
      badge: 'Real-time Metrics',
      tag: 'Monitoring',
      accent: 'from-sky-500 to-blue-600',
      icon: <Monitor className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'PowerShell / Bash',
      badge: 'Zero-touch Execution',
      tag: 'Automation',
      accent: 'from-blue-600 to-indigo-600',
      icon: <Terminal className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'Windows · Mac · Linux',
      badge: '< 20MB Footprint',
      tag: 'Management',
      accent: 'from-cyan-500 to-sky-600',
      icon: <UserCheck className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'System Background',
      badge: 'Silent Diagnostics',
      tag: 'Automation',
      accent: 'from-sky-600 to-blue-700',
      icon: <Settings className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'Policy Compliance',
      badge: 'Dynamic Thresholds',
      tag: 'Monitoring',
      accent: 'from-emerald-500 to-teal-600',
      icon: <HeartPulse className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'Instant Remote',
      badge: 'Zero User Disruption',
      tag: 'Management',
      accent: 'from-amber-500 to-orange-600',
      icon: <Wand2 className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'OS & 3rd-party Apps',
      badge: 'Automated Rollouts',
      tag: 'Security',
      accent: 'from-blue-600 to-sky-500',
      icon: <GitFork className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'Granular RBAC',
      badge: 'Technician Scopes',
      tag: 'Security',
      accent: 'from-indigo-500 to-sky-600',
      icon: <Move className="w-6 h-6 text-white stroke-[2]" />
    },
    {
      os: 'Hardware & Software',
      badge: 'Single Inventory',
      tag: 'Management',
      accent: 'from-sky-500 to-cyan-600',
      icon: <Laptop className="w-6 h-6 text-white stroke-[2]" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f7fd] to-white border-b border-sky-100 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-sky-200 shadow-2xs text-xs font-bold text-sky-700 uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#00a6f4]" />
            <span>Complete RMM Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Explore the Features and Solutions of Our RMM Software
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Everything modern IT teams and MSPs require to manage endpoints, automate repetitive tasks, and secure infrastructure.
          </p>
        </div>

        {/* 3x3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {ORIGINAL_CONTENT.features.map((feat, index) => {
            const meta = featureMeta[index] || featureMeta[0];

            return (
              <div
                key={feat.id}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-sky-300 shadow-xs hover:shadow-xl hover:shadow-sky-100/70 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Subtle top accent gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00a6f4] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Header Row: Icon Badge + Monospace Index + Category Tag */}
                  <div className="flex items-start justify-between mb-6">
                    
                    {/* Gradient Circular Icon Badge with Glow */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${meta.accent} flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 group-hover:rotate-1 transition-all duration-300`}>
                      {meta.icon}
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[11px] font-mono font-bold text-slate-400 tracking-wider">
                        0{index + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-100">
                        {feat.category}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  {/* Description - EXACT ORIGINAL CONTENT PRESERVED */}
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>

                {/* Footer metadata & interactive link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {meta.os}
                  </span>

                  <button
                    onClick={onOpenTrial}
                    className="text-sky-600 font-bold hover:text-sky-700 flex items-center gap-1 group/btn cursor-pointer transition-colors"
                  >
                    <span>Try now</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
