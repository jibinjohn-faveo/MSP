import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Terminal, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Laptop, 
  Sparkles,
  Server,
  Activity,
  Zap
} from 'lucide-react';
import { ORIGINAL_CONTENT } from '../data/content';

interface PlatformTourProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const PlatformTour: React.FC<PlatformTourProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const slides = ORIGINAL_CONTENT.platformSlides;
  const current = slides[activeSlideIndex];

  // Auto-advance timer can be paused on hover if desired, or manual navigation
  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  // Slide icons
  const slideIcons = [
    <Cpu className="w-5 h-5" key="cpu" />,
    <Terminal className="w-5 h-5" key="terminal" />,
    <Layers className="w-5 h-5" key="layers" />,
    <ShieldCheck className="w-5 h-5" key="shield" />
  ];

  return (
    <section id="platform" className="py-24 bg-gradient-to-b from-white via-sky-50/30 to-white border-b border-sky-100 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-bold border border-sky-200/80 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Interactive Platform Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight leading-tight">
            Manage Everything from One Platform
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            Explore the four foundational pillars powering modern MSP remote monitoring, asset audits, and security patching.
          </p>
        </div>

        {/* Modern Slide Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
          {slides.map((slide, idx) => {
            const isActive = activeSlideIndex === idx;
            return (
              <button
                key={slide.title}
                onClick={() => setActiveSlideIndex(idx)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-sky-500 shadow-md shadow-sky-100 ring-2 ring-sky-500/20'
                    : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Active top progress accent line */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-600" />
                )}
                
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-sky-600' : 'text-slate-400'}`}>
                    0{idx + 1}
                  </span>
                  <div className={`p-1.5 rounded-lg ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    {React.cloneElement(slideIcons[idx], {
                      className: `w-4 h-4 ${isActive ? 'text-white' : 'text-slate-600'}`
                    })}
                  </div>
                </div>

                <div className={`text-sm font-bold truncate ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
                  {slide.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Showcase Slide Card (2-Column: Left 3D Tower, Right Slide Content & Points) */}
        <div className="bg-white rounded-3xl border border-sky-100 shadow-xl shadow-sky-100/60 p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Crisp 3D Isometric Platform Tower with Active Pillar Glow */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                
                {/* Ambient glow behind tower */}
                <div className="absolute inset-0 bg-sky-400/10 rounded-full blur-2xl -z-10" />

                {/* 3D Isometric Architecture Diagram */}
                <svg viewBox="0 0 500 500" className="w-full h-full select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="roof-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="50%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>
                    <linearGradient id="active-pillar" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="20%" stopColor="#bae6fd" />
                      <stop offset="100%" stopColor="#0284c7" />
                    </linearGradient>
                    <linearGradient id="inactive-pillar" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <filter id="pillar-glow" x="-40%" y="-40%" width="180%" height="180%">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* BASE LAYER 1: SECURITY */}
                  <polygon points="250,450 410,360 410,385 250,475 90,385 90,360" fill="#0f172a" />
                  <polygon points="90,360 250,450 250,425 90,335" fill="#0369a1" />
                  <polygon points="250,450 410,360 410,335 250,425" fill="#0284c7" />
                  <text x="175" y="400" fill="#ffffff" fontSize="12" fontWeight="700" transform="rotate(29 175 400)" letterSpacing="1">
                    Security
                  </text>

                  {/* BASE LAYER 2: INTEGRATIONS */}
                  <polygon points="250,395 410,305 410,330 250,420 90,330 90,305" fill="#38bdf8" />
                  <polygon points="90,305 250,395 250,370 90,280" fill="#0284c7" />
                  <polygon points="250,395 410,305 410,280 250,370" fill="#0369a1" />
                  <text x="160" y="348" fill="#ffffff" fontSize="12" fontWeight="700" transform="rotate(29 160 348)" letterSpacing="1">
                    Integrations
                  </text>

                  {/* Middle Platform Surface with Connection Status Indicators */}
                  <polygon points="250,340 410,250 250,170 90,250" fill="#0284c7" opacity="0.15" />
                  <circle cx="160" cy="310" r="5" fill="#0284c7" />
                  <circle cx="205" cy="335" r="5" fill="#0284c7" />
                  <circle cx="250" cy="358" r="5" fill="#0284c7" />
                  <circle cx="295" cy="335" r="5" fill="#0284c7" />
                  <circle cx="340" cy="310" r="5" fill="#0284c7" />

                  {/* --- 4 VERTICAL SUPPORT PILLARS --- */}

                  {/* Pillar 1: Agent Software */}
                  <g onClick={() => setActiveSlideIndex(0)} className="cursor-pointer">
                    {activeSlideIndex === 0 && (
                      <polygon points="90,240 120,222 120,135 90,150" fill="#38bdf8" opacity="0.6" filter="url(#pillar-glow)" />
                    )}
                    <polygon 
                      points="95,240 115,228 115,135 95,150" 
                      fill={activeSlideIndex === 0 ? "url(#active-pillar)" : "url(#inactive-pillar)"} 
                    />
                  </g>

                  {/* Pillar 2: RMM */}
                  <g onClick={() => setActiveSlideIndex(1)} className="cursor-pointer">
                    {activeSlideIndex === 1 && (
                      <polygon points="175,285 205,268 205,178 175,195" fill="#38bdf8" opacity="0.7" filter="url(#pillar-glow)" />
                    )}
                    <polygon 
                      points="180,285 200,273 200,178 180,195" 
                      fill={activeSlideIndex === 1 ? "url(#active-pillar)" : "url(#inactive-pillar)"} 
                    />
                  </g>

                  {/* Pillar 3: Asset Management */}
                  <g onClick={() => setActiveSlideIndex(2)} className="cursor-pointer">
                    {activeSlideIndex === 2 && (
                      <polygon points="295,285 325,268 325,178 295,195" fill="#38bdf8" opacity="0.7" filter="url(#pillar-glow)" />
                    )}
                    <polygon 
                      points="300,285 320,273 320,178 300,195" 
                      fill={activeSlideIndex === 2 ? "url(#active-pillar)" : "url(#inactive-pillar)"} 
                    />
                  </g>

                  {/* Pillar 4: Patch Management */}
                  <g onClick={() => setActiveSlideIndex(3)} className="cursor-pointer">
                    {activeSlideIndex === 3 && (
                      <polygon points="380,240 410,222 410,135 380,150" fill="#38bdf8" opacity="0.6" filter="url(#pillar-glow)" />
                    )}
                    <polygon 
                      points="385,240 405,228 405,135 385,150" 
                      fill={activeSlideIndex === 3 ? "url(#active-pillar)" : "url(#inactive-pillar)"} 
                    />
                  </g>

                  {/* TOP TIED PLATFORM (FAVEO ROOF) */}
                  <polygon points="90,150 250,230 250,200 90,120" fill="#0369a1" />
                  <polygon points="250,230 410,150 410,120 250,200" fill="#0284c7" />
                  <polyline points="90,150 250,230 410,150" stroke="#7dd3fc" strokeWidth="2.5" />

                  {/* Top Roof Surface */}
                  <polygon points="250,60 410,120 250,200 90,120" fill="url(#roof-grad)" stroke="#bae6fd" strokeWidth="2" />

                  {/* Clean Centered FAVEO Brand Wordmark */}
                  <text x="250" y="125" textAnchor="middle" fill="#ffffff" fontSize="24" fontWeight="800" letterSpacing="5">
                    FAVEO
                  </text>
                  <line x1="205" y1="135" x2="295" y2="135" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <line x1="250" y1="128" x2="250" y2="142" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />

                  {/* OS Badges: Apple, Windows, Linux */}
                  <circle cx="150" cy="140" r="10" fill="#ffffff" opacity="0.9" />
                  <text x="150" y="144" textAnchor="middle" fontSize="11" fill="#0f172a" fontWeight="bold"></text>

                  <circle cx="250" cy="170" r="10" fill="#ffffff" opacity="0.9" />
                  <text x="250" y="174" textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="bold">⊞</text>

                  <circle cx="350" cy="140" r="10" fill="#ffffff" opacity="0.9" />
                  <text x="350" y="144" textAnchor="middle" fontSize="11" fill="#f59e0b" fontWeight="bold">🐧</text>
                </svg>

                {/* Live Active Pillar Status Pill below tower */}
                <div className="absolute -bottom-3 bg-slate-900 text-white px-4 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 shadow-lg border border-slate-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sky-300 font-semibold uppercase">{current.title}</span>
                  <span className="text-slate-400">· Active</span>
                </div>

              </div>
            </div>

            {/* Right Column: Slide Title, Original Description & Structured Slide Points */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Slide Counter & Header */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold font-mono text-sky-600 mb-2">
                  <span className="px-2.5 py-0.5 bg-sky-50 rounded-md border border-sky-200">
                    SLIDE {current.step}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-600 font-sans uppercase tracking-wider">
                    {current.title}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {current.title}
                </h3>

                {/* Original Content Paragraph exactly preserved */}
                <p className="mt-3 text-base sm:text-[17px] text-slate-600 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* SLIDE POINTS CARDS: Breaking down key capabilities into structured slide items */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-500" />
                  <span>Key Slide Capabilities:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {current.highlights.map((point, idx) => (
                    <div 
                      key={point}
                      className="p-3.5 bg-slate-50/80 hover:bg-sky-50/50 rounded-xl border border-slate-200/80 hover:border-sky-300 transition-all flex items-start gap-2.5"
                    >
                      <div className="p-1 rounded-md bg-sky-100 text-sky-700 mt-0.5 shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Platforms Tag line */}
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-700">Supported OS Platforms:</span>
                {current.osSupport.map((os) => (
                  <span key={os} className="px-2.5 py-1 bg-sky-50 border border-sky-100 text-sky-800 rounded-md font-medium text-xs">
                    {os}
                  </span>
                ))}
              </div>

              {/* Slide Navigation Controls & CTAs */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                
                {/* Stepper Navigation: < 1 / 4 > */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-600 transition-all shadow-xs cursor-pointer active:scale-95"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  <div className="font-mono text-sm font-bold text-slate-800 px-3 py-1.5 bg-slate-100 rounded-lg">
                    {current.step}
                  </div>

                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-sky-600 transition-all shadow-xs cursor-pointer active:scale-95"
                    aria-label="Next slide"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>

                  <span className="text-xs text-slate-500 hidden sm:inline">
                    Click arrows or tabs to switch
                  </span>
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={onOpenTrial}
                    className="px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                  >
                    Start Free Trial
                  </button>
                  <button
                    onClick={onOpenDemo}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl transition-all cursor-pointer"
                  >
                    Request a Demo
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
