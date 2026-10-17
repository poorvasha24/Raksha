import React from 'react';
import { Layers, RotateCw, CheckCircle, Repeat } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const principles = [
    {
      title: 'Modular container arrangement',
      description:
        'Standardized containers fit available institution grounds, courtyards, or service pads without heavy civil infrastructure.',
      icon: Layers,
    },
    {
      title: 'Separate batches at different stages',
      description:
        'Each container houses a distinct batch, isolating fresh kitchen inputs from actively decomposing and curing compost.',
      icon: RotateCw,
    },
    {
      title: 'Collection of finished compost',
      description:
        'When a batch completes stabilization, staff retrieve nutrient-rich compost directly on-site for garden and landscape beds.',
      icon: CheckCircle,
    },
    {
      title: 'Reuse of containers for future batches',
      description:
        'Empty containers re-enter rotation immediately, establishing a predictable, continuous cycle for institutional food waste.',
      icon: Repeat,
    },
  ];

  return (
    <section id="solution" className="py-16 sm:py-24 bg-[#F8F8F2]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Concept Notice */}
        <div className="mb-6 inline-flex items-center gap-2 text-xs text-[#244C3A] font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#244C3A]" />
          <span>Research & Prototype Development</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Key Ideas */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#252A26] tracking-tight mb-4 text-balance">
              Meet RAKSHA.
            </h2>
            <p className="text-base sm:text-lg text-[#252A26]/80 leading-relaxed mb-6">
              RAKSHA explores a practical way to process organic waste close to where it is generated, using multiple containers to manage separate composting batches.
            </p>

            <p className="text-sm text-[#252A26]/70 leading-relaxed mb-8">
              Rather than treating cafeteria food scraps as an undifferentiated waste stream sent to distant municipal landfills, the RAKSHA concept decentralizes composting into clean, manageable modular cells tailored to institutional daily dining flows.
            </p>

            {/* Core Architectural Pillars */}
            <div className="space-y-4">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#EDE9DF]"
                  >
                    <div className="p-2 rounded-lg bg-[#F8F8F2] text-[#244C3A] shrink-0 mt-0.5 border border-[#EDE9DF]/80">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#252A26] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#252A26]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Concept Diagram / Prototype Blueprint */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="p-6 rounded-2xl bg-white border border-[#EDE9DF]">
              <div className="border-b border-[#EDE9DF] pb-4 mb-6">
                <div className="text-xs uppercase tracking-wider font-semibold text-[#244C3A]/90">
                  Concept Architecture
                </div>
                <h3 className="text-lg font-bold text-[#252A26] mt-1">
                  Independent Batch Processing
                </h3>
                <p className="text-xs text-[#252A26]/65 mt-1">
                  How separate modular containers process their own batches in place while collection continues.
                </p>
              </div>

              {/* Graphic Flow Representation */}
              <div className="space-y-3.5">
                <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF]">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[#244C3A] text-white text-xs font-semibold flex items-center justify-center">
                      A
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#252A26]">Container A — Filling Phase</div>
                      <div className="text-xs text-[#252A26]/70">Fresh daily food scraps & dry carbon bulking added</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#244C3A]">Fresh Intake</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF]">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[#8FA894] text-white text-xs font-semibold flex items-center justify-center">
                      B
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#252A26]">Container B — Composting In Place</div>
                      <div className="text-xs text-[#252A26]/70">Aerobic microbial heat decomposition inside the unit</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#252A26]/75">In-Place</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF]">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[#EDE9DF] text-[#244C3A] text-xs font-bold flex items-center justify-center border border-[#244C3A]/20">
                      C
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#252A26]">Container C — Maturing In Place</div>
                      <div className="text-xs text-[#252A26]/70">Humus stabilization and cooling in the same unit</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#252A26]/75">Maturing</span>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#F8F8F2] border border-[#244C3A]/30">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded bg-[#244C3A] text-white text-xs font-semibold flex items-center justify-center">
                      D
                    </span>
                    <div>
                      <div className="text-xs font-bold text-[#252A26]">Container D — Harvest & Reset</div>
                      <div className="text-xs text-[#252A26]/70">Finished compost harvested; container prepared for reuse</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#244C3A]">Harvest</span>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-6 pt-4 border-t border-[#EDE9DF] text-xs text-[#252A26]/60 leading-relaxed">
                <span className="font-semibold text-[#252A26]">Independent Processing Principle:</span> Waste remains inside its designated container throughout composting. Incoming cafeteria waste is directed to another container once a unit reaches planned capacity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
