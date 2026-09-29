import React from 'react';
import { Home, Settings2, Terminal, ShieldAlert, Laptop, Smartphone, Lock, FileSearch } from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface PillarsProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const CoreAutomationPillars: React.FC<PillarsProps> = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <section className="py-20 bg-[#f4f9fd] border-b border-sky-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title exactly matching original */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-800 tracking-tight leading-tight">
            Automate IT and Secure Devices Using Our RMM Software
          </h2>
        </div>

        {/* 2-Column Grid: Left 4 Points with circular icons, Right Connected Workflow Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 4 Core Blocks */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Install & Connect Remotely */}
            <div className="flex items-start gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white shadow-md border border-sky-100 flex items-center justify-center shrink-0 p-3">
                <div className="relative text-sky-600 flex items-center justify-center">
                  <Home className="w-9 h-9 text-slate-700 stroke-[1.5]" />
                  <div className="absolute -bottom-1 -right-1 bg-emerald-500 text-white rounded-full p-0.5">
                    <span className="block w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {ORIGINAL_CONTENT.pillars[0].title}
                </h3>
                <p className="mt-2 text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  Install the <button onClick={onOpenTrial} className="text-sky-600 hover:text-sky-700 underline font-medium cursor-pointer">Agent Software</button> once, and instantly bring remote or on-site devices under your control. No need to be physically present—Remote Monitoring and Management makes it possible.
                </p>
              </div>
            </div>

            {/* 2. Centralized Management */}
            <div className="flex items-start gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white shadow-md border border-sky-100 flex items-center justify-center shrink-0 p-3">
                <div className="text-sky-600 flex items-center justify-center">
                  <div className="relative">
                    <Settings2 className="w-9 h-9 text-sky-600 stroke-[1.75]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="w-3 h-3 bg-amber-400 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {ORIGINAL_CONTENT.pillars[1].title}
                </h3>
                <p className="mt-2 text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  {ORIGINAL_CONTENT.pillars[1].description}
                </p>
              </div>
            </div>

            {/* 3. Automations and Remote Tools */}
            <div className="flex items-start gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white shadow-md border border-sky-100 flex items-center justify-center shrink-0 p-3">
                <div className="text-sky-600 flex items-center justify-center">
                  <Terminal className="w-9 h-9 text-slate-700 stroke-[1.5]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {ORIGINAL_CONTENT.pillars[2].title}
                </h3>
                <p className="mt-2 text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  {ORIGINAL_CONTENT.pillars[2].description}
                </p>
              </div>
            </div>

            {/* 4. Secure & Efficient Troubleshooting */}
            <div className="flex items-start gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-white shadow-md border border-sky-100 flex items-center justify-center shrink-0 p-3">
                <div className="text-sky-600 flex items-center justify-center">
                  <ShieldAlert className="w-9 h-9 text-sky-600 stroke-[1.75]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                  {ORIGINAL_CONTENT.pillars[3].title}
                </h3>
                <p className="mt-2 text-slate-600 text-base sm:text-[17px] leading-relaxed">
                  {ORIGINAL_CONTENT.pillars[3].description}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Connected Multi-Node Network Map matching original aesthetic */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-white/90 via-sky-50/50 to-white/90 rounded-3xl p-6 border border-sky-200/80 shadow-xl backdrop-blur-sm flex flex-col justify-between">
              
              {/* Top Row Nodes */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-rose-100 hover:border-rose-300 transition-all">
                  <div className="p-2.5 bg-rose-50 text-rose-500 rounded-xl">
                    <Lock className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Security Policy</span>
                    <span className="text-[11px] text-slate-500">Enforced 24/7</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-amber-100 hover:border-amber-300 transition-all">
                  <div className="p-2.5 bg-amber-50 text-amber-500 rounded-xl">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Mobile Agents</span>
                    <span className="text-[11px] text-slate-500">Instant Alerting</span>
                  </div>
                </div>
              </div>

              {/* Central RMM Hub Node with animated circuit tracks */}
              <div className="my-6 relative flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 300 200" fill="none">
                  <path d="M 60 40 Q 150 100 240 40" stroke="#f43f5e" strokeWidth="2.5" strokeDasharray="5,5" />
                  <path d="M 60 160 Q 150 100 240 160" stroke="#0ea5e9" strokeWidth="2.5" strokeDasharray="5,5" />
                  <path d="M 150 20 L 150 180" stroke="#10b981" strokeWidth="2.5" strokeDasharray="5,5" />
                </svg>

                <div className="p-5 bg-gradient-to-tr from-sky-600 to-blue-700 rounded-3xl shadow-xl text-white text-center z-10 border-4 border-white">
                  <div className="w-12 h-12 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-2">
                    <Laptop className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-extrabold text-sm tracking-wide">FAVEO RMM HUB</div>
                  <div className="text-[10px] text-sky-200 mt-0.5">Central Multi-Tenant Node</div>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/30 text-emerald-200 text-[10px] font-mono rounded-full border border-emerald-400/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Syncing
                  </div>
                </div>
              </div>

              {/* Bottom Row Nodes */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-emerald-100 hover:border-emerald-300 transition-all">
                  <div className="p-2.5 bg-emerald-50 text-emerald-500 rounded-xl">
                    <FileSearch className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">System Auditing</span>
                    <span className="text-[11px] text-slate-500">Hardware & SW</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-2xl shadow-sm border border-sky-100 hover:border-sky-300 transition-all">
                  <div className="p-2.5 bg-sky-50 text-sky-600 rounded-xl">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Live Scripting</span>
                    <span className="text-[11px] text-slate-500">PowerShell / Bash</span>
                  </div>
                </div>
              </div>

              {/* Action Ribbon below right card */}
              <div className="mt-4 pt-4 border-t border-sky-100 flex items-center justify-between text-xs">
                <span className="text-slate-500">Need zero-interruption troubleshooting?</span>
                <button
                  onClick={onOpenDemo}
                  className="text-sky-600 font-bold hover:text-sky-700 underline cursor-pointer"
                >
                  See Live Demo →
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
