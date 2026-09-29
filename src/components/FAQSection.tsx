import React, { useState } from 'react';
import { ORIGINAL_CONTENT } from '../data/content';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  onOpenDemo: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenDemo }) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]); // Open first two by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleIndex = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenIndices(ORIGINAL_CONTENT.faqs.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndices([]);
  };

  const filteredFaqs = ORIGINAL_CONTENT.faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Answers for IT Teams &amp; MSPs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Everything you need to know about Faveo RMM features, agent deployment, and device management.
          </p>
        </div>

        {/* Search & Expand Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search FAQ questions or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 self-end">
            <button
              onClick={expandAll}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={collapseAll}
              className="hover:text-blue-600 transition-colors cursor-pointer"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="mt-6 space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-xl border border-slate-200 text-sm text-slate-500">
              No matching questions found for "{searchQuery}". Try searching for "agent", "patch", or "Windows".
            </div>
          ) : (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={faq.question}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900">
                      {faq.question}
                    </span>
                    <span className="text-slate-500 shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Secondary Help Prompt */}
        <div className="mt-10 p-5 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific architectural or security question?</div>
              <div className="text-xs text-slate-500">Our senior technical team is available to review your client setup.</div>
            </div>
          </div>
          <button
            onClick={onOpenDemo}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            Speak to an IT Specialist
          </button>
        </div>

      </div>
    </section>
  );
};
