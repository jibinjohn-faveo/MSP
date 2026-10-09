import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Copy, Terminal } from 'lucide-react';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultEndpoints?: number;
  defaultDeployment?: string;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  defaultEndpoints = 100,
  defaultDeployment = 'cloud'
}) => {
  const [fullName, setFullName] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [endpointCount, setEndpointCount] = useState(defaultEndpoints);
  const [deploymentType, setDeploymentType] = useState(defaultDeployment);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workEmail || !fullName) return;
    setIsSubmitted(true);
  };

  const handleCopyCmd = () => {
    navigator.clipboard.writeText(
      `msiexec /i FaveoAgentSetup.msi /qn SERVER="https://${companyName ? companyName.toLowerCase().replace(/[^a-z0-9]/g, '') : 'demo'}.faveo.io" TOKEN="trial_tk_${Math.floor(Math.random() * 89999 + 10000)}"`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors z-10 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 sm:p-8">
            {/* Header matching original copy */}
            <div className="text-center pb-4 border-b border-slate-100">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                Instant Provisioning
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                Start Your Free Faveo Trial
              </h3>
              <div className="mt-2 flex items-center justify-center gap-3 text-xs text-slate-500 font-medium">
                <span>Setup in minutes</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Business Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@yourcompany.com"
                  value={workEmail}
                  onChange={(e) => setWorkEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex MSP"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Managed Endpoints
                  </label>
                  <input
                    type="number"
                    min="5"
                    max="10000"
                    value={endpointCount}
                    onChange={(e) => setEndpointCount(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">
                  Deployment Preference
                </label>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      deploymentType === 'cloud'
                        ? 'bg-blue-50/70 border-blue-600 text-blue-900 font-semibold ring-1 ring-blue-600/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="modalDeploymentType"
                      value="cloud"
                      checked={deploymentType === 'cloud'}
                      onChange={() => setDeploymentType('cloud')}
                      className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900 leading-tight">Faveo Cloud</span>
                      <span className="text-[10px] text-slate-500 font-normal leading-tight">Managed SaaS</span>
                    </div>
                  </label>

                  <label
                    className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer transition-all ${
                      deploymentType === 'self-hosted'
                        ? 'bg-blue-50/70 border-blue-600 text-blue-900 font-semibold ring-1 ring-blue-600/20'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="modalDeploymentType"
                      value="self-hosted"
                      checked={deploymentType === 'self-hosted'}
                      onChange={() => setDeploymentType('self-hosted')}
                      className="w-4 h-4 text-blue-600 accent-blue-600 cursor-pointer"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900 leading-tight">On-Premise</span>
                      <span className="text-[10px] text-slate-500 font-normal leading-tight">Self-Hosted</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Security & Agreement notice matching exact original text */}
              <div className="pt-2 text-[11px] text-slate-500 text-center leading-normal">
                <div className="flex items-center justify-center gap-1 text-slate-700 font-medium mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                  <span>Your information is 100% secure</span>
                </div>
                <span>
                  By clicking “Start Free Trial” you agree to our{' '}
                  <a href="#" className="text-blue-600 underline">Terms</a> &amp;{' '}
                  <a href="#" className="text-blue-600 underline">Privacy Policy</a>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-6 text-center animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Welcome to Faveo RMM!
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                We've provisioned your 14-day evaluation sandbox for <strong className="text-slate-900">{workEmail}</strong>.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-left text-xs font-mono space-y-2">
              <div className="text-slate-400 text-[10px] uppercase font-sans font-semibold">
                Quick Start: Install Agent on First Endpoint
              </div>
              <div className="p-2.5 bg-slate-900 text-emerald-400 rounded-lg break-all text-[11px] relative">
                msiexec /i FaveoAgentSetup.msi /qn SERVER="https://trial.faveo.io"
              </div>
              <button
                type="button"
                onClick={handleCopyCmd}
                className="w-full py-1.5 bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 font-sans font-medium rounded text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Silent MSI Install Command'}</span>
              </button>
            </div>

            <div className="pt-2">
              <button
                onClick={onClose}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Close &amp; Launch Console
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
