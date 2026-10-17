import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onJumpToContact: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, onJumpToContact }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    preferredFormat: 'Virtual Walkthrough & Sizing Review',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.institution) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-[#EDE9DF] shadow-xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-150">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md text-[#252A26]/60 hover:text-[#252A26] hover:bg-[#EDE9DF]/60 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full bg-[#244C3A]/10 text-[#244C3A] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 id="demo-modal-title" className="text-xl font-bold text-[#252A26] mb-2">
              Demo Request Queued
            </h3>
            <p className="text-xs sm:text-sm text-[#252A26]/80 mb-6">
              Thank you, {formData.name}. We will review {formData.institution}’s institutional profile and connect regarding your {formData.preferredFormat.toLowerCase()}.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#244C3A] hover:bg-[#1B3A2C] rounded-lg transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#244C3A] mb-1">
              Institutional Briefing
            </div>
            <h3 id="demo-modal-title" className="text-xl font-bold text-[#252A26] mb-2">
              Request a Concept Walkthrough
            </h3>
            <p className="text-xs text-[#252A26]/75 mb-5">
              Discuss how modular rotating-container composting fits your campus layout, dining volume, and ground crew routines.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-[#252A26] mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Prof. Michael Chang"
                  className="w-full h-10 px-3 rounded-lg border border-[#EDE9DF] text-sm text-[#252A26] focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252A26] mb-1">
                  Institution Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="e.g. Pacific Northwest University"
                  className="w-full h-10 px-3 rounded-lg border border-[#EDE9DF] text-sm text-[#252A26] focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252A26] mb-1">
                  Institutional Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="m.chang@pnwu.edu"
                  className="w-full h-10 px-3 rounded-lg border border-[#EDE9DF] text-sm text-[#252A26] focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252A26] mb-1">
                  Preferred Presentation Format
                </label>
                <select
                  value={formData.preferredFormat}
                  onChange={(e) => setFormData({ ...formData, preferredFormat: e.target.value })}
                  className="w-full h-10 px-3 rounded-lg border border-[#EDE9DF] text-sm text-[#252A26] focus:border-[#244C3A] focus:ring-1 focus:ring-[#244C3A] outline-none"
                >
                  <option value="Virtual Walkthrough & Sizing Review">Virtual Walkthrough & Sizing Review (30 min)</option>
                  <option value="Technical Feasibility Whitepaper">Technical Feasibility Briefing Document</option>
                  <option value="On-Site Pilot Site Assessment Discussion">On-Site Pilot Assessment Planning</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 text-sm font-semibold text-white bg-[#244C3A] hover:bg-[#1B3A2C] rounded-lg transition-colors cursor-pointer"
                >
                  Confirm Request
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onJumpToContact();
                  }}
                  className="text-xs text-[#244C3A] hover:underline"
                >
                  Or fill out the detailed institutional enquiry form →
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
