import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface PilotCTAProps {
  onDiscussPilot: () => void;
}

export const PilotCTA: React.FC<PilotCTAProps> = ({ onDiscussPilot }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#244C3A] text-white">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest text-[#8FA894] font-semibold block mb-3">
            Partnership Opportunities
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-5 text-balance">
            Explore RAKSHA for Your Institution.
          </h2>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-8 max-w-2xl mx-auto">
            We are developing RAKSHA to make on-site organic waste composting more practical for institutions. Share your requirements to explore a potential pilot project.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onDiscussPilot}
              className="w-full sm:w-auto h-11 px-7 text-sm font-semibold text-[#244C3A] bg-white hover:bg-[#F8F8F2] active:bg-[#EDE9DF] rounded-lg shadow-sm transition-all duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-white flex items-center justify-center gap-2"
            >
              <span>Discuss a Pilot Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Simple proof bullets without hype or pills */}
          <div className="mt-10 pt-8 border-t border-white/15 flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs text-white/70">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8FA894]" />
              <span>Tailored capacity sizing assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8FA894]" />
              <span>Operator safety & odor control focus</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#8FA894]" />
              <span>Academic & sustainability collaboration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
