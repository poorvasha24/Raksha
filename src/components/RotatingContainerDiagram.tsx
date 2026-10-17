import React, { useState } from 'react';
import { ArrowDown, RotateCcw, Utensils, CheckCircle2, Sparkles, Wind, Info, CornerDownRight } from 'lucide-react';

export const RotatingContainerDiagram: React.FC = () => {
  const [selectedContainer, setSelectedContainer] = useState<string>('A');

  const containers = [
    {
      id: 'A',
      title: 'Container A',
      status: 'Filling with fresh organic waste',
      shortLabel: 'Fresh Intake Active',
      fillLevel: '75%',
      fillColor: '#8FA894',
      badgeBg: 'bg-[#244C3A] text-white',
      lidStatus: 'Lid open for daily loading',
      ventilation: 'Controlled ventilation active',
      batchNote: 'Daily cafeteria prep scraps and brown carbon bulking added in balanced ratios.',
      statusDescription: 'Actively accepting incoming cafeteria organics until planned capacity is reached.',
      wasteStays: 'Batch stays in Container A from Day 1 through harvest.',
    },
    {
      id: 'B',
      title: 'Container B',
      status: 'Batch composting',
      shortLabel: 'Composting In Place',
      fillLevel: '85%',
      fillColor: '#537560',
      badgeBg: 'bg-[#3B6B54] text-white',
      lidStatus: 'Insulated lid closed',
      ventilation: 'Aerobic airflow exchange via vents',
      batchNote: 'Capacity reached; batch now composts undisturbed in this same container.',
      statusDescription: 'Naturally occurring thermophilic microbes generate biological heat (50°C–65°C), decomposing organic matter in place.',
      wasteStays: 'No waste is transferred out. The batch decomposes entirely inside Container B.',
    },
    {
      id: 'C',
      title: 'Container C',
      status: 'Maturation',
      shortLabel: 'Maturing In Place',
      fillLevel: '60%',
      fillColor: '#3E5746',
      badgeBg: 'bg-[#8FA894] text-[#252A26]',
      lidStatus: 'Lid closed for curing',
      ventilation: 'Passive air circulation & moisture balance',
      batchNote: 'Active breakdown complete; batch cures into dark, stable humus in the same unit.',
      statusDescription: 'Temperatures cool to ambient; beneficial fungi and microorganisms stabilize compost texture and odor.',
      wasteStays: 'Remains in Container C until fully stabilized and tested.',
    },
    {
      id: 'D',
      title: 'Container D',
      status: 'Ready for harvest',
      shortLabel: 'Finished Compost',
      fillLevel: '45%',
      fillColor: '#244C3A',
      badgeBg: 'bg-[#EDE9DF] text-[#244C3A] border border-[#244C3A]/20',
      lidStatus: 'Lid open for harvesting',
      ventilation: 'Dry curing complete',
      batchNote: 'Batch fully mature. Ready to be collected for campus landscaping and garden beds.',
      statusDescription: 'Finished organic humus is harvested. The sanitized empty container returns to the available container pool.',
      wasteStays: 'Once emptied, Container D is washed and ready to receive a new batch when Container A fills.',
    },
  ];

  const active = containers.find((c) => c.id === selectedContainer) || containers[0];

  return (
    <div className="w-full bg-[#F8F8F2] rounded-2xl border border-[#EDE9DF] p-5 sm:p-8">
      {/* Header and Core Principle */}
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-[#EDE9DF] gap-4">
        <div>
          <div className="text-xs uppercase tracking-widest font-semibold text-[#244C3A] mb-1">
            Independent Batch Processing Schematic
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-[#252A26]">
            Waste Stays In the Same Container From Fill to Harvest
          </h3>
        </div>
        <div className="text-xs text-[#252A26]/75 max-w-sm bg-white p-3 rounded-lg border border-[#EDE9DF]">
          <strong className="text-[#244C3A] font-semibold block mb-0.5">Key Concept:</strong>
          Waste does <em>not</em> move from one container to another during composting. Each container processes its own batch independently.
        </div>
      </div>

      {/* Fresh Waste Inflow Indicator pointing to Container A */}
      <div className="pt-6 pb-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#244C3A]/10 text-[#244C3A] text-xs font-semibold">
            <Utensils className="w-3.5 h-3.5" />
            <span>Current Inflow: Fresh Cafeteria Waste → Container A</span>
          </div>
          <div className="text-[11px] text-[#252A26]/60">
            *Illustrative stages shown; container count is tailored to site volume.
          </div>
        </div>
      </div>

      {/* Four Containers Side by Side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 my-4">
        {containers.map((container) => {
          const isSelected = selectedContainer === container.id;
          const isFreshInflow = container.id === 'A';
          const isHarvestReady = container.id === 'D';

          return (
            <div
              key={container.id}
              onClick={() => setSelectedContainer(container.id)}
              className={`relative rounded-xl border p-4 sm:p-5 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#244C3A] shadow-xs ring-1 ring-[#244C3A]'
                  : 'bg-white/80 border-[#EDE9DF] hover:border-[#8FA894] hover:bg-white'
              }`}
            >
              {/* Inflow indicator above Container A */}
              {isFreshInflow && (
                <div className="mb-2 flex items-center justify-center gap-1.5 py-1 px-2 rounded bg-[#244C3A] text-white text-[10px] font-semibold tracking-wide">
                  <ArrowDown className="w-3 h-3 animate-bounce" />
                  <span>Accepting Today's Waste</span>
                </div>
              )}

              {/* Ready for harvest badge above Container D */}
              {isHarvestReady && (
                <div className="mb-2 flex items-center justify-center gap-1.5 py-1 px-2 rounded bg-[#EDE9DF] text-[#244C3A] border border-[#244C3A]/20 text-[10px] font-semibold">
                  <Sparkles className="w-3 h-3" />
                  <span>Harvest Ready</span>
                </div>
              )}

              {/* Spacer if no top badge */}
              {!isFreshInflow && !isHarvestReady && (
                <div className="mb-2 py-1 px-2 text-[10px] text-center text-[#252A26]/60 font-medium">
                  Composting In Place
                </div>
              )}

              <div>
                {/* Header with Title and Status Tag */}
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-[#252A26]">
                    {container.title}
                  </h4>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${container.badgeBg}`}>
                    {container.shortLabel}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#244C3A] mb-3">
                  {container.status}
                </div>

                {/* Minimal Realistic Container Schematic */}
                <div className="p-3 bg-[#F8F8F2] rounded-lg border border-[#EDE9DF] my-2 flex flex-col items-center">
                  {/* Container Lid Schematic */}
                  <div className="w-full flex justify-between items-center px-1 mb-1 text-[9px] text-[#252A26]/60">
                    <span className="flex items-center gap-1">
                      <Wind className="w-2.5 h-2.5 text-[#244C3A]" />
                      <span>Ventilated</span>
                    </span>
                    <span>{container.lidStatus.includes('open') ? 'Hinged Open' : 'Covered'}</span>
                  </div>

                  <div
                    className={`h-2.5 rounded-t-sm transition-all duration-200 border-b border-[#244C3A]/20 ${
                      container.id === 'A' || container.id === 'D'
                        ? 'w-16 bg-[#8FA894] -rotate-3 origin-left'
                        : 'w-20 bg-[#244C3A]'
                    }`}
                  />

                  {/* Container Body (Solid Timber & Steel Frame) */}
                  <div className="w-20 h-16 rounded-b-md bg-[#EDE9DF] border border-[#244C3A]/30 relative overflow-hidden flex flex-col justify-end p-1 shadow-inner">
                    {/* Visual wooden slat lines */}
                    <div className="absolute inset-x-0 top-3 h-px bg-[#244C3A]/15 pointer-events-none" />
                    <div className="absolute inset-x-0 top-7 h-px bg-[#244C3A]/15 pointer-events-none" />
                    <div className="absolute inset-x-0 top-11 h-px bg-[#244C3A]/15 pointer-events-none" />

                    {/* Compost Batch Level inside SAME container */}
                    <div
                      className="w-full rounded-sm transition-all duration-300"
                      style={{
                        height: container.fillLevel,
                        backgroundColor: container.fillColor,
                        opacity: 0.9,
                      }}
                      title={`${container.title}: Batch inside unit`}
                    />
                  </div>

                  <div className="mt-1.5 text-[10px] text-[#252A26]/70 text-center font-medium">
                    Batch Volume: ~{container.fillLevel}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#252A26]/75 mt-3 leading-relaxed">
                  {container.batchNote}
                </p>
              </div>

              {/* Footer Note */}
              <div className="mt-4 pt-2.5 border-t border-[#EDE9DF] text-[11px] text-[#244C3A] font-medium flex items-center justify-between">
                <span>Click to inspect</span>
                <span className="text-[10px] text-[#252A26]/50">Independent</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Diversion / Rotation Indicator (How Incoming Waste Shifts When A Fills) */}
      <div className="mt-4 p-4 rounded-xl bg-white border border-[#EDE9DF]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-[#252A26]/80">
          <div className="flex items-start sm:items-center gap-2">
            <CornerDownRight className="w-4 h-4 text-[#244C3A] shrink-0 mt-0.5 sm:mt-0" />
            <span>
              <strong>When Container A reaches planned capacity:</strong> Incoming daily cafeteria waste is diverted to another available empty container (e.g. Container D after harvest). Containers B and C continue maturing uninterrupted.
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0 text-[#244C3A] font-medium">
            <RotateCcw className="w-3.5 h-3.5 text-[#244C3A]" />
            <span>After harvest, Container D returns to available pool</span>
          </div>
        </div>
      </div>

      {/* Selected Container Inspector Drawer */}
      <div className="mt-5 p-5 rounded-xl bg-white border border-[#EDE9DF]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EDE9DF]">
          <div>
            <span className="text-xs font-semibold text-[#244C3A]">
              Selected Unit Focus
            </span>
            <h4 className="text-base font-bold text-[#252A26]">
              {active.title} — {active.status}
            </h4>
          </div>
          <div className="text-xs text-[#252A26]/70 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#244C3A]" />
            <span>{active.ventilation}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-3 text-xs">
          <div className="md:col-span-8 space-y-2 text-[#252A26]/80 leading-relaxed">
            <p>{active.statusDescription}</p>
            <div className="p-2.5 rounded bg-[#F8F8F2] border border-[#EDE9DF] text-[#244C3A] font-semibold">
              ✔ {active.wasteStays}
            </div>
          </div>
          <div className="md:col-span-4 p-3 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF] space-y-1 text-[#252A26]/70">
            <div className="font-semibold text-[#252A26]">Lid & Aeration:</div>
            <div>{active.lidStatus}</div>
            <div className="text-[11px] pt-1 border-t border-[#EDE9DF] text-[#252A26]/60">
              Ventilated aerobic bio-conditions maintained without transferring mass.
            </div>
          </div>
        </div>
      </div>

      {/* Mandatory Clarification Note */}
      <div className="mt-5 flex items-start gap-2.5 p-3.5 rounded-lg bg-[#EDE9DF]/50 border border-[#EDE9DF] text-xs text-[#252A26]/80">
        <Info className="w-4 h-4 text-[#244C3A] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#252A26] font-semibold">Important Clarification:</strong> These four containers represent illustrative stages, not a mandatory four-container configuration. Sizing and container count are determined based on an institution's daily waste volume, batch-filling time, composting duration, and available space.
        </div>
      </div>
    </div>
  );
};
