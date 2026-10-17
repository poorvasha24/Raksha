import React from 'react';
import { Sprout, Recycle, Network, AlertCircle, ArrowRight } from 'lucide-react';

export const FutureRoadmap: React.FC = () => {
  const phases = [
    {
      phaseNumber: 'PHASE 1',
      tag: 'CURRENT FOCUS',
      title: 'Individual Batch Organic Composting',
      description:
        'Organic waste composting using individual batch-processing containers. On-site aerobic decomposition of kitchen scraps and landscaping carbon into finished compost.',
      status: 'Active Venture Development',
      badgeClass: 'bg-[#244C3A] text-white',
      borderClass: 'border-[#244C3A]',
      icon: Sprout,
      clarification: 'Organic waste only (no plastics). Each batch matures in its own modular container.',
    },
    {
      phaseNumber: 'PHASE 2',
      tag: 'FUTURE EXPANSION',
      title: 'Segregated Recyclable Plastics',
      description:
        'Separate collection and segregation of recyclable plastics, with suitable materials sent to authorized recycling partners.',
      status: 'Planned Partnership Phase',
      badgeClass: 'bg-[#EDE9DF] text-[#244C3A] border border-[#244C3A]/20',
      borderClass: 'border-[#EDE9DF]',
      icon: Recycle,
      clarification: 'Future initiative. Plastics will be managed through entirely separate collection streams, never inside composting units.',
    },
    {
      phaseNumber: 'PHASE 3',
      tag: 'LONG-TERM VISION',
      title: 'Integrated Institutional Resource Recovery',
      description:
        'Explore an integrated institutional waste-management system covering organic waste, plastics, paper, and other recyclable streams through appropriate separate processes.',
      status: 'Concept Exploration',
      badgeClass: 'bg-[#F8F8F2] text-[#252A26]/70 border border-[#EDE9DF]',
      borderClass: 'border-[#EDE9DF]',
      icon: Network,
      clarification: 'Comprehensive multi-stream management coordinating separate, specialized recovery channels.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            Strategic Horizon
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance">
            Growing Towards Integrated Waste Management.
          </h2>
          <p className="mt-3 text-base text-[#252A26]/75">
            While RAKSHA is strictly focused on organic waste composting today, we envision supporting broader institutional circularity through structured, separate material pathways.
          </p>
        </div>

        {/* 3-Stage Timeline (Horizontal on desktop, Vertical on mobile) */}
        <div className="relative mb-10">
          {/* Subtle horizontal connecting bar on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-12 left-12 right-12 h-0.5 bg-[#EDE9DF] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {phases.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.phaseNumber}
                  className={`p-6 sm:p-7 rounded-xl bg-[#F8F8F2] border ${item.borderClass} flex flex-col justify-between transition-colors`}
                >
                  <div>
                    {/* Top Row: Phase Number and Tag */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-[#244C3A] tracking-wider">
                        {item.phaseNumber}
                      </span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${item.badgeClass}`}>
                        {item.tag}
                      </span>
                    </div>

                    {/* Icon and Title */}
                    <div className="w-10 h-10 rounded-lg bg-white border border-[#EDE9DF] flex items-center justify-center text-[#244C3A] mb-4">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    <h3 className="text-lg font-bold text-[#252A26] tracking-tight mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#252A26]/75 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footnote / Material Stream Note */}
                  <div className="pt-3 border-t border-[#EDE9DF] text-xs text-[#252A26]/70 leading-relaxed">
                    <span className="font-semibold text-[#252A26] block mb-0.5">Stream Scope:</span>
                    {item.clarification}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="p-4 sm:p-5 rounded-xl bg-[#EDE9DF]/50 border border-[#EDE9DF] flex items-start gap-3 text-xs text-[#252A26]/80 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#244C3A] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#252A26] font-semibold">Important Scope Notice:</strong> Plastic recycling is a future expansion roadmap, not a current RAKSHA capability. Plastics cannot and must never be placed inside organic waste composting containers. RAKSHA does not employ AI sorting, robotics, or on-site plastic melting equipment; any future plastics handling will rely strictly on manual front-of-house sorting and verified off-site recycling partners.
          </div>
        </div>
      </div>
    </section>
  );
};
