import React, { useState } from 'react';
import {
  Shield,
  Server,
  Zap,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  Users,
  Award,
  Laptop,
  Building2,
  Clock,
  ExternalLink,
  ChevronRight,
  Sparkles,
  PhoneCall,
  Check,
  Globe2,
  AlertCircle
} from 'lucide-react';

interface Props {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const SimpleManageEngineMSP: React.FC<Props> = ({ onOpenTrial, onOpenDemo }) => {
  // Hero Lead Form State
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'cloud' | 'onprem'>('cloud');

  // Simple ROI calculation state
  const [endpoints, setEndpoints] = useState(250);
  const monthlySavings = Math.round(endpoints * 14.5);
  const technicianHours = Math.round(endpoints * 0.45);
  const roiPercentage = 442;

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setFormSubmitted(true);
  };

  const corePillars = [
    {
      id: 'resolve',
      tag: 'Service Delivery & Helpdesk',
      title: 'Resolve issues before they pile up',
      desc: 'Track, route, and resolve requests faster with a unified desk that connects alerts, devices, and user context in one place. Automate routine actions and keep SLAs on track without manual effort.',
      bulletPoints: [
        'Centralized ticketing synced with endpoint telemetry',
        'Automatic ticket dispatch and intelligent technician routing',
        'One-click remote session launch directly from the ticket'
      ],
      icon: Clock,
      color: 'blue'
    },
    {
      id: 'manage',
      tag: 'Unified Endpoint Management',
      title: 'Manage every endpoint, without gaps',
      desc: 'Deploy patches, enforce configurations, and secure every device from a single console. Get full coverage across laptops, servers, remote machines, and roaming users with unified policies.',
      bulletPoints: [
        'Multi-OS support: Windows, macOS, and Linux',
        'Automated 3rd-party software and OS patch deployment',
        'Silent background software delivery & configuration profiles'
      ],
      icon: Laptop,
      color: 'emerald'
    },
    {
      id: 'noise',
      tag: 'IT Infrastructure & Diagnostics',
      title: 'Cut through noise. Keep only the true positives',
      desc: 'Monitor networks and servers with deeper diagnostics and smarter correlation. See only actionable alerts backed by real performance data, not false alarms.',
      bulletPoints: [
        'Dynamic threshold-based CPU, memory, and disk alerts',
        'Real-time network traffic & uptime anomaly detection',
        'Automated self-healing scripts that remediate before escalation'
      ],
      icon: Zap,
      color: 'amber'
    },
    {
      id: 'security',
      tag: 'Proactive SecOps & Compliance',
      title: 'Stop threats before they start',
      desc: 'Get early visibility into threats with connected device, identity, apps, and log insights. Act faster with built-in controls that contain risks before they impact clients.',
      bulletPoints: [
        'Vulnerability scanning & automated zero-day mitigation',
        'Endpoint privilege management and USB access control',
        'Comprehensive audit logs for SOC2, HIPAA, and ISO 27001'
      ],
      icon: Shield,
      color: 'indigo'
    }
  ];

  const stats = [
    { label: 'Technicians Empowered', value: '16,000+', sub: 'Daily active operators' },
    { label: 'Compliance Certifications', value: '15+', sub: 'SOC2, ISO 27001, HIPAA, GDPR' },
    { label: 'Client Devices Managed', value: '2,000,000+', sub: 'Monitored across 45+ countries' },
    { label: 'MSPs Worldwide', value: '7,100+', sub: 'From boutique IT to global MSPs' }
  ];

  const testimonials = [
    {
      quote:
        "A great management tool for multi-client environment. As a service provider, we need to manage patches, software delivery, mobile management for mobile apps on a multi-client environment. Remote control is probably the most important tool on a regular week. And all this is in a single console.",
      author: "Gerson M.",
      role: "IT Consultant & Managed Service Provider",
      badge: "Verified IT Consultant"
    },
    {
      quote:
        "We heavily use the below features, and it works perfectly: multi-tenancy, patch management, software deployment, and configuration management. The visibility across disparate client networks without needing VPNs has saved us hundreds of technician hours.",
      author: "Faraz H.",
      role: "ITSM Team Lead, IT & Managed Services",
      badge: "Verified Enterprise MSP Lead"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800">
      {/* Top Utility Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Identity */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">
                  MSP Central
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                  By Faveo
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Complete IT Management & Security Platform
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <a
              href="tel:+18005550199"
              className="hidden md:flex items-center space-x-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
              <span>Talk to IT Specialist</span>
            </a>

            <button
              onClick={onOpenDemo}
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              Request Demo
            </button>

            <button
              onClick={onOpenTrial}
              className="inline-flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all"
            >
              <span>TRY IT FOR FREE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - Streamlined High Converting 2-Column */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Complete IT Management & Security Platform</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                All your MSP tools, <br className="hidden sm:inline" />
                <span className="text-blue-600">in one place.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Bring IT operations, security, and service delivery together with one platform
                designed to simplify how MSPs work. Less noise from too many tools and a more
                connected way to keep client infrastructure running the way it should.
              </p>

              {/* Clean Value Bullets */}
              <div className="pt-2 space-y-3">
                {[
                  'Unified Remote Monitoring & Management (RMM) + Ticketing',
                  'Zero-touch automated patch management across Windows, Mac & Linux',
                  'One-click secure remote control without end-user friction',
                  'Choice of Faveo Cloud SaaS or Complete On-Premise Self-Hosted'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 mt-0.5 shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Quick Trust Badges */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>30-Day Free Trial</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>No Credit Card Required</span>
                </span>
                <span className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>Setup in under 5 minutes</span>
                </span>
              </div>
            </div>

            {/* Right: Focused Conversion Signup Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-slate-200/70 border border-slate-200 relative">
                <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                  Instant Access
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-slate-900">Get Started with MSP Central</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Full-featured 30-day trial. Zero commitment.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">Your Trial is Ready!</h4>
                      <p className="text-xs text-slate-600 mt-1.5 max-w-xs mx-auto">
                        We sent instant login instructions & agent download links to{' '}
                        <strong className="text-slate-800">{email}</strong>.
                      </p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg text-left border border-slate-200 text-xs text-slate-600">
                      <p className="font-semibold text-slate-800 mb-1">Quick Next Step:</p>
                      <p>Run the silent agent deployment on your first endpoint to see live telemetry immediately.</p>
                    </div>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      Sign up another workspace
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="technician@mspcompany.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                      <span className="flex items-center space-x-1.5">
                        <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                        <span>Data Center: <strong>US East (Cloud)</strong></span>
                      </span>
                      <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                        Change
                      </span>
                    </div>

                    <div className="flex items-start space-x-2 pt-1">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <label htmlFor="terms" className="text-xs text-slate-500 leading-tight">
                        I agree to the <a href="#privacy" className="text-blue-600 hover:underline">Terms of Service</a> & <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={!agreed}
                      className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-extrabold text-sm py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 tracking-wide"
                    >
                      <span>TRY IT FOR FREE</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <div className="relative py-2 text-center">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-slate-200" />
                      </div>
                      <span className="relative bg-white px-2 text-[11px] font-semibold text-slate-400 uppercase">
                        Or sign in using
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        type="button"
                        onClick={onOpenTrial}
                        className="flex items-center justify-center space-x-2 py-2 px-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                          />
                        </svg>
                        <span>Google</span>
                      </button>

                      <button
                        type="button"
                        onClick={onOpenTrial}
                        className="flex items-center justify-center space-x-2 py-2 px-3 border border-slate-200 rounded-lg hover:bg-slate-50 text-xs font-semibold text-slate-700 transition-colors"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 23 23">
                          <path fill="#f35325" d="M1 1h10v10H1z" />
                          <path fill="#81bc06" d="M12 1h10v10H12z" />
                          <path fill="#05a6f0" d="M1 12h10v10H1z" />
                          <path fill="#ffba08" d="M12 12h10v10H12z" />
                        </svg>
                        <span>Microsoft</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE BANNER */}
      <section className="py-14 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-xs font-extrabold uppercase tracking-widest text-blue-600">
            One Platform to Manage IT, Security, and Service Delivery
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            ITOps and SecOps, Unified and Simplified
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            MSP Central brings your monitoring, management, and security controls into one place so
            you can run remote networks and client environments with clarity, not clutter. Less noise
            from tool sprawl and a more connected way to keep client SLAs guaranteed.
          </p>
        </div>
      </section>

      {/* 4 CORE BENEFIT PILLARS - Clean Grid */}
      <section className="py-16 bg-[#fafbfc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block">
                        {pillar.tag}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{pillar.title}</h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    {pillar.bulletPoints.map((bp, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs font-medium text-slate-700">
                        <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                        <span>{bp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI & IMPACT SECTION */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-xs font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                <span>Total Economic Impact Study</span>
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                Achieve <span className="text-emerald-400">442% ROI</span> and{' '}
                <span className="text-blue-400">$3.7 million</span> in net savings.
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Consolidate separate RMM agents, patching tools, and ticketing software into one
                connected console. Eliminate redundant technician licenses and slash mean-time-to-resolution (MTTR).
              </p>

              <div className="pt-2">
                <button
                  onClick={onOpenTrial}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Explore customer savings analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Interactive Quick Sizing Calculator */}
            <div className="lg:col-span-6 bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Estimate Your Monthly Efficiency
                </span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Live Calculator
                </span>
              </div>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-200">
                    Number of Managed Endpoints:
                  </label>
                  <span className="text-lg font-extrabold text-blue-400">{endpoints} Devices</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="25"
                  value={endpoints}
                  onChange={(e) => setEndpoints(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>50 endpoints</span>
                  <span>1,000 endpoints</span>
                  <span>2,000+ endpoints</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/80">
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
                  <span className="text-xs text-slate-400 block mb-1">Estimated Savings / mo</span>
                  <span className="text-xl sm:text-2xl font-black text-emerald-400">
                    ${monthlySavings.toLocaleString()}
                  </span>
                </div>
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
                  <span className="text-xs text-slate-400 block mb-1">Tech Hours Saved / mo</span>
                  <span className="text-xl sm:text-2xl font-black text-blue-400">
                    {technicianHours} hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REAL SOCIAL PROOF / REVIEWS */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
              Customer Validation
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Before you decide, look at how MSP Central performs for teams like yours.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <blockquote className="text-slate-700 text-sm leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {t.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARD NUMBERS / CREDIBILITY BAR */}
      <section className="py-12 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white rounded-xl border border-slate-200/60 shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-700 mt-1">{stat.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE 3-STEP CUSTOMER JOURNEY FUNNEL */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2 block">
              Clear Onboarding Path
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Get Up and Running in 3 Simple Steps
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              No long sales calls or complex server configs needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Create Workspace</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sign up with your work email. Choose between instant US/EU Cloud SaaS or self-hosted container deployment.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Deploy Lightweight Agent</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Push agents via PowerShell, Bash, GPO, or Intune. Devices report telemetry, patch status, and specs within 60 seconds.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Manage & Troubleshoot</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Execute automated scripts, run one-click reboots, push security updates, and deliver 5-star MSP support without VPNs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CLEAN CALL TO ACTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            The platform that ties your IT together
          </h2>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Consolidate your MSP stack today. Experience seamless remote management, automated patching, and unified service delivery.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTrial}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-blue-700 font-extrabold text-base shadow-lg hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
            >
              <span>SIGN UP FOR FREE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white border border-blue-400/40 font-bold text-base transition-colors"
            >
              Schedule Live 1-on-1 Demo
            </button>
          </div>

          <p className="text-xs text-blue-200 pt-2">
            30-day free trial • No credit card required • Deploy in minutes
          </p>
        </div>
      </section>

      {/* CLEAN MINIMAL FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
              M
            </div>
            <span className="text-slate-200 font-bold">MSP Central</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400">© 2026 Ladybird Web Solution Pvt Ltd. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-slate-400 font-medium">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Security & GDPR</a>
            <button onClick={onOpenTrial} className="text-blue-400 hover:text-blue-300 font-bold">
              Start Free Trial
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
