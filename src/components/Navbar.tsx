import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { FaveoLogo } from './FaveoLogo';

interface NavbarProps {
  onOpenTrial: () => void;
  onOpenDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTrial, onOpenDemo }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group transition-opacity hover:opacity-90">
              <FaveoLogo className="h-10 sm:h-11 w-auto" />
            </a>
          </div>

          {/* Just Need Request a Demo & Start Free Trial Buttons (No Menu Links) */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={onOpenDemo}
              className="px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-700 hover:text-sky-600 hover:bg-sky-50/70 border border-slate-200/90 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-sky-500" />
              <span>Request a Demo</span>
            </button>

            <button
              onClick={onOpenTrial}
              className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-extrabold text-white bg-[#00a6f4] hover:bg-[#0095dc] active:bg-[#0084c4] rounded-xl shadow-md shadow-sky-400/25 hover:shadow-lg hover:shadow-sky-400/35 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
