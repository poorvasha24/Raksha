import React from 'react';
import { Layers, AlertCircle, CheckCircle2, SplitSquareVertical, ArrowRight } from 'lucide-react';

export const WhyMultipleContainers: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#F8F8F2] border-b border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            System Rationale
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance">
            Why Multiple Containers?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#252A26]/85 leading-relaxed font-medium">
            One container can compost organic waste on its own. Multiple containers help RAKSHA keep collecting fresh waste while earlier batches mature. This reduces the need to mix new waste into batches already undergoing composting.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Card 1: Single Container */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#EDE9DF] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#252A26]/75">
                <div className="w-8 h-8 rounded-lg bg-[#EDE9DF]/60 flex items-center justify-center text-[#252A26]">
                  <span className="text-xs font-bold">1×</span>
                </div>
                <h3 className="text-lg font-bold text-[#252A26]">
                  Single Container Scenario
                </h3>
              </div>

              <div className="p-4 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF] text-xs text-[#252A26]/80 mb-5 leading-relaxed">
                <strong className="text-[#252A26] font-semibold block mb-1">Operational Bottleneck:</strong>
                New waste may need another collection or processing arrangement while the current batch matures.
              </div>

              <p className="text-sm text-[#252A26]/75 leading-relaxed">
                When a lone container reaches capacity, adding fresh uncomposted food waste into an actively heating or curing pile continually resets the biological cycle. Alternatively, incoming cafeteria scraps must be turned away or sent to landfills until the single batch finishes.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE9DF] text-xs text-[#252A26]/60">
              Limits continuous dining service waste diversion.
            </div>
          </div>

          {/* Card 2: Multiple Containers (RAKSHA Approach) */}
          <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#244C3A]/30 shadow-xs flex flex-col justify-between ring-1 ring-[#244C3A]/10">
            <div>
              <div className="flex items-center gap-2.5 mb-4 text-[#244C3A]">
                <div className="w-8 h-8 rounded-lg bg-[#244C3A] text-white flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#252A26]">
                  Multiple Containers (RAKSHA Approach)
                </h3>
              </div>

              <div className="p-4 rounded-lg bg-[#244C3A]/5 border border-[#244C3A]/15 text-xs text-[#244C3A] mb-5 leading-relaxed">
                <strong className="font-semibold block mb-1 text-[#244C3A]">Continuous Flow Advantage:</strong>
                Different batches can be at different stages, allowing fresh waste collection to continue uninterrupted.
              </div>

              <p className="text-sm text-[#252A26]/75 leading-relaxed">
                Each container isolates its own batch from start to finish. While Container A accepts today’s lunch scraps, Containers B and C decompose and cure in peace. Once Container D is harvested, it rejoins the pool ready for the next rotation.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE9DF] text-xs text-[#244C3A] font-medium flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Enables uninterrupted cafeteria kitchen intake.</span>
            </div>
          </div>
        </div>

        {/* Transparent sizing note */}
        <div className="mt-8 text-xs text-[#252A26]/65 text-center max-w-2xl mx-auto">
          *Institutional container requirements depend on cafeteria volume, filling rates, ambient conditions, and available grounds space. System configurations are individually assessed rather than assuming a fixed container count.
        </div>
      </div>
    </section>
  );
};
