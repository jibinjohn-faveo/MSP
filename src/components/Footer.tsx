import React from 'react';
import { FaveoLogo } from './FaveoLogo';

interface FooterProps {
  onOpenDemo: () => void;
  onOpenTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDemo, onOpenTrial }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Footer Links Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Overview */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center">
              <FaveoLogo className="h-8 w-auto" variant="dark" />
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Enterprise Remote Monitoring and Management software for MSPs and internal IT departments.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenTrial}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-[11px] font-medium transition-colors"
              >
                Start 14-Day Free Trial
              </button>
            </div>
          </div>

          {/* Col 2: Alternatives & Products */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Alternatives &amp; Suite
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Faveo Helpdesk
                </a>
              </li>
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Faveo ServiceDesk
                </a>
              </li>
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Faveo Invoicing
                </a>
              </li>
              <li className="pt-2 text-slate-500 font-mono text-[10px] uppercase">Alternatives</li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Freshdesk Alternative
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Zendesk Alternative
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Support & Resources */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Support &amp; Community
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  User Manual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Installation Manual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support Community Edition
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenDemo}
                  className="hover:text-white transition-colors text-left"
                >
                  Request a Demo
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Become a Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Our Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  We Love Open Source
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Faveo Road Map
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Developer Portal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Server Status
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Policies & Security */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Policies &amp; Compliance
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  EULA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Deletion Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Hosting Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Secure Customer Service Software
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookies Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GDPR &amp; EU Data Protection
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Company */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Awards and Certificates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Customer Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blogs &amp; Events
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Social Channels */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            Copyright © 2026 · Ladybird Web Solution Pvt Ltd. All Rights Reserved.
          </div>

          {/* Social Links (Clean text links) */}
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              X (Twitter)
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              YouTube
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Facebook
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <span aria-hidden="true">·</span>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              WhatsApp
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
