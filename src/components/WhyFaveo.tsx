import React from 'react';
import { 
  Check, 
  Globe, 
  FileText, 
  MapPin, 
  Gauge, 
  ShieldCheck, 
  Settings, 
  Clock, 
  Laptop
} from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface WhyFaveoProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const WhyFaveo: React.FC<WhyFaveoProps> = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <section id="why-faveo" className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: IT Professional & Laptop Workstation Illustration matching Screenshots 11-16 */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[500px] p-6 bg-gradient-to-b from-sky-50/60 to-white rounded-3xl border border-sky-100 shadow-sm flex items-center justify-center">
              
              {/* Floating badges corresponding to the screenshot */}
              {/* RMM Badge */}
              <div className="absolute top-4 right-16 bg-amber-400 text-slate-900 font-extrabold text-xs px-2.5 py-1 rounded shadow-md z-20 flex items-center gap-1 animate-bounce">
                <span>RMM</span>
              </div>

              {/* Web Globe */}
              <div className="absolute top-10 left-12 p-2 bg-sky-100 text-sky-600 rounded-full shadow-sm z-10">
                <Globe className="w-5 h-5" />
              </div>

              {/* Script / Policy Document */}
              <div className="absolute top-24 left-6 p-2 bg-amber-100 text-amber-600 rounded-lg shadow-sm z-10">
                <FileText className="w-5 h-5" />
              </div>

              {/* Clock Timer */}
              <div className="absolute top-28 right-8 p-2 bg-yellow-100 text-yellow-600 rounded-full shadow-sm z-10">
                <Clock className="w-5 h-5" />
              </div>

              {/* Map Pin */}
              <div className="absolute bottom-28 left-8 p-2 bg-rose-100 text-rose-500 rounded-full shadow-sm z-10">
                <MapPin className="w-5 h-5" />
              </div>

              {/* Shield & Gears */}
              <div className="absolute bottom-16 right-16 p-2 bg-emerald-100 text-emerald-600 rounded-full shadow-sm z-10">
                <ShieldCheck className="w-5 h-5" />
              </div>

              {/* Central Workstation Graphic */}
              <div className="relative z-10 w-full py-8 flex flex-col items-center">
                
                {/* SVG Illustration of IT Specialist and Central Monitoring Laptop */}
                <div className="w-full max-w-[360px] aspect-[4/3] bg-white rounded-2xl border-2 border-slate-800 shadow-2xl p-4 flex flex-col justify-between relative overflow-hidden">
                  
                  {/* Laptop Top Bezel */}
                  <div className="flex items-center justify-between border-b pb-2 border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">FAVEO RMM CONSOLE</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>

                  {/* Laptop Dashboard Screen Content */}
                  <div className="py-2 space-y-2">
                    {/* Live Gauges */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-sky-50 rounded-lg p-2 border border-sky-100 flex items-center gap-2">
                        <Gauge className="w-5 h-5 text-sky-600" />
                        <div>
                          <span className="text-[10px] text-slate-500 block">CPU Usage</span>
                          <span className="text-xs font-bold text-slate-800">18.4% Normal</span>
                        </div>
                      </div>
                      <div className="bg-emerald-50 rounded-lg p-2 border border-emerald-100 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-600" />
                        <div>
                          <span className="text-[10px] text-slate-500 block">Patch Status</span>
                          <span className="text-xs font-bold text-emerald-700">100% Up to date</span>
                        </div>
                      </div>
                    </div>

                    {/* Progress bars */}
                    <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 space-y-1">
                      <div className="flex justify-between text-[10px] text-slate-600 font-semibold">
                        <span>Endpoints Synchronized</span>
                        <span className="text-sky-600 font-mono">1,420 / 1,420</span>
                      </div>
                      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-sky-500 h-full w-[100%] rounded-full" />
                      </div>
                    </div>

                    {/* Live Actions */}
                    <div className="flex items-center justify-between pt-1 text-[11px]">
                      <span className="inline-flex items-center gap-1 text-slate-600 font-medium">
                        <Settings className="w-3.5 h-3.5 text-slate-400 animate-spin" />
                        Automation Engine Active
                      </span>
                      <span className="text-emerald-600 font-semibold text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                        All Systems Green
                      </span>
                    </div>
                  </div>

                  {/* Bottom Bar */}
                  <div className="bg-slate-900 -mx-4 -mb-4 p-2 text-center text-white text-[10px] font-mono">
                    PROACTIVE MSP INFRASTRUCTURE MANAGEMENT
                  </div>
                </div>

                {/* Laptop Base Stand */}
                <div className="w-48 h-3 bg-slate-400 rounded-b-lg -mt-0.5 shadow-sm" />

              </div>

            </div>
          </div>

          {/* Right Column: Title & 5 Checkmarked Points exactly matching Screenshots 11-16 */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-800 tracking-tight leading-tight">
              Why Faveo RMM Software Is The Right Choice For Your IT Needs?
            </h2>

            {/* Checklist with clean checkmarks */}
            <div className="space-y-5 pt-2">
              {ORIGINAL_CONTENT.whyFaveoPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0">
                    <Check className="w-6 h-6 text-slate-900 stroke-[3]" />
                  </div>
                  <p className="text-lg sm:text-xl text-slate-800 font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenTrial}
                className="px-8 py-3.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Start Free Trial
              </button>
              <button
                onClick={onOpenDemo}
                className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                Request a Demo
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
