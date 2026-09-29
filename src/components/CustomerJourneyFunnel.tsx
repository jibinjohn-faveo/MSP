import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, TrendingUp, Clock, DollarSign, Shield, Cloud, HardDrive, CheckCircle2 } from 'lucide-react';

interface FunnelProps {
  onOpenTrial: (defaults?: { endpoints?: number; deployment?: string }) => void;
  onOpenDemo: (defaults?: { endpoints?: number; deployment?: string }) => void;
}

export const CustomerJourneyFunnel: React.FC<FunnelProps> = ({ onOpenTrial, onOpenDemo }) => {
  const [currentStage, setCurrentStage] = useState<number>(1);
  
  // Funnel Form State
  const [endpoints, setEndpoints] = useState<number>(250);
  const [technicians, setTechnicians] = useState<number>(4);
  const [currentCostPerTech, setCurrentCostPerTech] = useState<number>(45); // hourly rate $
  const [deploymentPreference, setDeploymentPreference] = useState<'cloud' | 'self-hosted'>('cloud');
  const [primaryGoal, setPrimaryGoal] = useState<string>('Automate Patching & Remote Support');

  // ROI Mathematical Model
  // Typical MSP without RMM spends ~1.2 hours per endpoint per month on updates, health checks, troubleshooting
  // With Faveo RMM, automated scripts & background patching cuts that by ~60%
  const hoursSavedPerEndpoint = 0.75;
  const totalMonthlyHoursSaved = Math.round(endpoints * hoursSavedPerEndpoint);
  const monthlyCostSavings = Math.round(totalMonthlyHoursSaved * currentCostPerTech);
  const annualSavings = monthlyCostSavings * 12;
  const downtimeReductionPercent = 68;

  const handleStageSelect = (stage: number) => {
    setCurrentStage(stage);
  };

  return (
    <section id="journey" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
            The MSP Customer Journey · Conversion Funnel
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance]">
            Calculate Your MSP ROI & Map Your Transition to Faveo RMM
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            See exactly how centralizing endpoints, automated patching, and remote execution translate to technician hours saved and higher client margins.
          </p>
        </div>

        {/* Journey Funnel Step Progress Bar */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-2 p-1.5 bg-slate-800/80 rounded-xl border border-slate-700/60 backdrop-blur-sm">
            {[
              { num: 1, label: '01. Sizing Assessment' },
              { num: 2, label: '02. Quantified ROI' },
              { num: 3, label: '03. Deployment Fit' },
              { num: 4, label: '04. Instant Launch' }
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => handleStageSelect(step.num)}
                className={`py-2.5 px-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  currentStage === step.num
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : currentStage > step.num
                    ? 'bg-slate-700/70 text-slate-200 hover:bg-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="hidden sm:inline">{step.label}</span>
                <span className="sm:hidden">Step {step.num}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Funnel Stage Content Cards */}
        <div className="mt-8 max-w-4xl mx-auto bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          
          {/* STAGE 1: MSP Sizing Assessment */}
          {currentStage === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                  Step 1 of 4 · Baseline Evaluation
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  How many endpoints does your MSP or IT team currently oversee?
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Adjust the sliders to match your current client client devices and technician workforce.
                </p>
              </div>

              {/* Slider 1: Endpoints */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Total Managed Endpoints (Windows, Mac, Linux):</span>
                  <span className="font-mono text-lg font-bold text-blue-400 tabular-nums">
                    {endpoints.toLocaleString()} endpoints
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="3000"
                  step="25"
                  value={endpoints}
                  onChange={(e) => setEndpoints(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>25 (Small IT Team)</span>
                  <span>500 (Mid-tier MSP)</span>
                  <span>1,500</span>
                  <span>3,000+ (Enterprise MSP)</span>
                </div>
              </div>

              {/* Slider 2: Technicians */}
              <div className="space-y-2 pt-2">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300 font-medium">Active IT Technicians / Support Agents:</span>
                  <span className="font-mono text-lg font-bold text-blue-400 tabular-nums">
                    {technicians} {technicians === 1 ? 'technician' : 'technicians'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={technicians}
                  onChange={(e) => setTechnicians(Number(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>1 tech</span>
                  <span>10 techs</span>
                  <span>20 techs</span>
                  <span>30 techs</span>
                </div>
              </div>

              {/* Primary Objective selector */}
              <div className="pt-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  What is your primary efficiency bottleneck?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Automate Patching & Remote Support',
                    'Consolidate Ticketing + RMM under One Roof',
                    'Lower Per-Endpoint Licensing Costs'
                  ].map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setPrimaryGoal(goal)}
                      className={`p-3 rounded-xl border text-xs text-left font-medium transition-all cursor-pointer ${
                        primaryGoal === goal
                          ? 'bg-blue-600/30 border-blue-500 text-white'
                          : 'bg-slate-900/50 border-slate-700 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Next CTA */}
              <div className="pt-4 border-t border-slate-700 flex justify-end">
                <button
                  onClick={() => setCurrentStage(2)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Calculate ROI & Hours Saved</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STAGE 2: Quantified ROI & Efficiency Breakdown */}
          {currentStage === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">
                  Step 2 of 4 · Projected Business Impact
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Estimated Savings for {endpoints} Endpoints & {technicians} Technicians
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Based on automated agent discovery, one-click troubleshooting, and scheduled background patch rollouts.
                </p>
              </div>

              {/* Metric Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-blue-400 text-xs font-medium">
                    <Clock className="w-4 h-4" />
                    <span>Monthly Time Saved</span>
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white font-mono tabular-nums">
                    {totalMonthlyHoursSaved.toLocaleString()} <span className="text-sm font-sans font-normal text-slate-400">hrs/mo</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    ~{Math.round(totalMonthlyHoursSaved / technicians)} hours returned to each technician monthly
                  </p>
                </div>

                <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-medium">
                    <DollarSign className="w-4 h-4" />
                    <span>Est. Annual Value</span>
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">
                    ${annualSavings.toLocaleString()}
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Based on ${currentCostPerTech}/hr billable technician opportunity cost
                  </p>
                </div>

                <div className="p-4 bg-slate-900/70 rounded-xl border border-slate-700">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>Downtime Reduction</span>
                  </div>
                  <div className="mt-2 text-3xl font-extrabold text-white font-mono tabular-nums">
                    {downtimeReductionPercent}%
                  </div>
                  <p className="mt-1 text-xs text-slate-400">
                    Proactive automated threshold alerts stop silent failures
                  </p>
                </div>
              </div>

              {/* What changes for your team */}
              <div className="p-4 bg-slate-900/40 rounded-xl border border-slate-700/80 space-y-2.5 text-xs">
                <div className="text-slate-300 font-semibold uppercase tracking-wider text-[11px]">
                  What Faveo RMM eliminates from your customer journey:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Zero physical on-site visits required for software updates or diagnostic logs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Silent background patch deployments that never interrupt client users</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>One-click remote reboot, shutdown, and script execution across Windows, Mac, Linux</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Tight sync between RMM alerts and Faveo ServiceDesk incident tickets</span>
                  </div>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                <button
                  onClick={() => setCurrentStage(1)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  ← Re-adjust Endpoints
                </button>
                <button
                  onClick={() => setCurrentStage(3)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Choose Deployment Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STAGE 3: Deployment Model Selection */}
          {currentStage === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                  Step 3 of 4 · Architecture Preference
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  How would you prefer to host Faveo RMM?
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Faveo uniquely offers both fully managed Cloud and 100% Self-Hosted on-premise editions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Cloud Option */}
                <div
                  onClick={() => setDeploymentPreference('cloud')}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    deploymentPreference === 'cloud'
                      ? 'bg-blue-900/30 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500'
                      : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                      <Cloud className="w-5 h-5" />
                    </div>
                    {deploymentPreference === 'cloud' && (
                      <span className="text-xs font-semibold text-blue-400 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Selected
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mt-3">Faveo Cloud (SaaS)</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Managed turnkey infrastructure with automated daily backups, high availability, and instant setup in minutes.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Ready in under 2 minutes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Zero server maintenance or upgrades</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Global low-latency edge endpoints</span>
                    </li>
                  </ul>
                </div>

                {/* Self Hosted Option */}
                <div
                  onClick={() => setDeploymentPreference('self-hosted')}
                  className={`p-5 rounded-xl border transition-all cursor-pointer ${
                    deploymentPreference === 'self-hosted'
                      ? 'bg-blue-900/30 border-blue-500 shadow-lg shadow-blue-500/10 ring-1 ring-blue-500'
                      : 'bg-slate-900/50 border-slate-700 hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 text-purple-400 flex items-center justify-center">
                      <HardDrive className="w-5 h-5" />
                    </div>
                    {deploymentPreference === 'self-hosted' && (
                      <span className="text-xs font-semibold text-purple-400 flex items-center gap-1">
                        <Check className="w-4 h-4" /> Selected
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-white mt-3">Faveo Self-Hosted (On-Prem)</h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Deploy on your own private cloud, AWS, Azure, or Linux bare-metal servers. 100% data sovereignty & direct database control.
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Complete data privacy & compliance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Air-gapped and internal network support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Full access to source code and database</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Navigation CTAs */}
              <div className="pt-4 border-t border-slate-700 flex justify-between items-center">
                <button
                  onClick={() => setCurrentStage(2)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  ← Back to ROI
                </button>
                <button
                  onClick={() => setCurrentStage(4)}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg flex items-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Review & Complete Onboarding</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STAGE 4: Final Conversion Action */}
          {currentStage === 4 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="border-b border-slate-700 pb-4 text-center">
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wide">
                  Step 4 of 4 · Ready for Action
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Your Tailored Faveo RMM Proposal is Ready
                </h3>
                <p className="text-sm text-slate-300 mt-1 max-w-xl mx-auto">
                  Configured for <strong className="text-white">{endpoints} endpoints</strong>, <strong className="text-white">{technicians} technicians</strong>, deployed via <strong className="text-white">{deploymentPreference === 'cloud' ? 'Faveo Cloud' : 'Self-Hosted'}</strong>.
                </p>
              </div>

              {/* Summary box */}
              <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase block font-medium">Endpoints</span>
                  <span className="font-mono text-lg font-bold text-white">{endpoints}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase block font-medium">Hours Saved</span>
                  <span className="font-mono text-lg font-bold text-emerald-400">{totalMonthlyHoursSaved} /mo</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase block font-medium">Hosting</span>
                  <span className="font-mono text-lg font-bold text-blue-400 capitalize">{deploymentPreference}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 uppercase block font-medium">Trial Period</span>
                  <span className="font-mono text-lg font-bold text-white">14 Days Free</span>
                </div>
              </div>

              {/* Dual Conversion Paths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Path 1: Instant Self-Service 14-Day Free Trial */}
                <div className="p-5 bg-gradient-to-b from-blue-900/30 to-slate-900/60 rounded-xl border border-blue-500/50 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-blue-400 uppercase">Self-Service Path</div>
                    <h4 className="text-lg font-bold text-white mt-1">Start 14-Day Free Trial</h4>
                    <p className="text-xs text-slate-300 mt-2">
                      Get immediate access to test agent deployment on your test endpoints right now. No credit card required.
                    </p>
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Instant agent download link</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Pre-loaded script library included</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => onOpenTrial({ endpoints, deployment: deploymentPreference })}
                    className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Launch Free Sandbox Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Path 2: Tailored Live Architecture Demo */}
                <div className="p-5 bg-slate-900/60 rounded-xl border border-slate-700 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold text-purple-400 uppercase">Guided MSP Path</div>
                    <h4 className="text-lg font-bold text-white mt-1">Book a Live MSP Demo</h4>
                    <p className="text-xs text-slate-300 mt-2">
                      Walk through custom automation scripts, multi-tenant billing, and ServiceDesk integration with a senior product specialist.
                    </p>
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-purple-400" />
                        <span>30-minute tailored architecture review</span>
                      </li>
                      <li className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-purple-400" />
                        <span>Custom pricing quote for {endpoints} devices</span>
                      </li>
                    </ul>
                  </div>
                  <button
                    onClick={() => onOpenDemo({ endpoints, deployment: deploymentPreference })}
                    className="mt-6 w-full py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-lg border border-slate-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Schedule 1-on-1 Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Reset link */}
              <div className="pt-2 text-center">
                <button
                  onClick={() => setCurrentStage(1)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  ← Start Over with Different Sizing
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
