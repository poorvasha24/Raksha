import React, { useState } from 'react';
import {
  Utensils,
  Inbox,
  Clock,
  Sparkles,
  ArrowRight,
  Info,
  Layers,
  Thermometer,
  ShieldCheck,
  RotateCw
} from 'lucide-react';
import { RotatingContainerDiagram } from './RotatingContainerDiagram';

interface ContainerStage {
  id: number;
  label: string;
  stageName: string;
  statusText: string;
  tempStatus: string;
  operationalAction: string;
  detailedProcess: string;
  idealMoisture: string;
  c_n_balance: string;
}

export const HowItWorks: React.FC = () => {
  const [activeContainerIndex, setActiveContainerIndex] = useState<number>(0);

  const steps = [
    {
      number: '01',
      title: 'COLLECT',
      summary: 'Collect suitable organic waste from the cafeteria.',
      detail:
        'Segregate pre-consumer kitchen preparation scraps, vegetable trimmings, coffee grounds, and suitable food scraps in dedicated cafeteria bins.',
      icon: Utensils,
    },
    {
      number: '02',
      title: 'FILL A CONTAINER',
      summary: 'Add fresh organic waste and suitable dry carbon material in appropriate proportions.',
      detail:
        'Transfer daily organics into an available container alongside dry carbon bulking material (such as dry leaves, wood shavings, or shredded brown cardboard) for proper structure and porosity.',
      icon: Inbox,
    },
    {
      number: '03',
      title: 'COMPOST IN PLACE',
      summary: 'Allow the batch to compost in the same container under suitable conditions.',
      detail:
        'When the container reaches its planned capacity, that batch remains inside the same container with managed ventilation and moisture. Incoming cafeteria waste is directed to another available container.',
      icon: Clock,
    },
    {
      number: '04',
      title: 'HARVEST & REUSE',
      summary: 'Once the batch is fully mature, harvest the compost and prepare the empty container for another cycle.',
      detail:
        'Collect cured, finished compost for campus grounds, flowerbeds, or student gardens. The emptied container is cleaned and returns to the available container pool.',
      icon: Sparkles,
    },
  ];

  const containers: ContainerStage[] = [
    {
      id: 1,
      label: 'Container A',
      stageName: 'Filling Phase',
      statusText: 'Receiving Fresh Cafeteria Waste',
      tempStatus: 'Ambient (20°C - 30°C)',
      operationalAction: 'Daily Scrap Loading & Dry Carbon Layering',
      detailedProcess:
        'Receives daily kitchen scraps and dry carbon bulking in appropriate proportions. Waste stays in Container A through all subsequent composting phases.',
      idealMoisture: '50% - 60% (damp sponge consistency)',
      c_n_balance: '25:1 to 30:1 C:N initial balance',
    },
    {
      id: 2,
      label: 'Container B',
      stageName: 'Active Composting',
      statusText: 'Composting In Place',
      tempStatus: 'Thermophilic (50°C - 65°C)',
      operationalAction: 'Regulated Aerobic Airflow & Bio-Decomposition',
      detailedProcess:
        'Capacity reached. The batch composts inside this same container with suitable ventilation. Naturally occurring aerobic microorganisms generate thermophilic heat to decompose organics.',
      idealMoisture: '50% - 55% maintained',
      c_n_balance: 'Active in-situ decomposition',
    },
    {
      id: 3,
      label: 'Container C',
      stageName: 'Maturation & Curing',
      statusText: 'Stabilizing in Container',
      tempStatus: 'Cooling Phase (35°C - 45°C)',
      operationalAction: 'Moisture Equilibrium & Humus Formation',
      detailedProcess:
        'Batch stabilizes and cures undisturbed in Container C. Temperatures gently cool as organic compounds convert into dark, earthy, biologically active humus.',
      idealMoisture: '45% - 50%',
      c_n_balance: 'Approaching maturity in place',
    },
    {
      id: 4,
      label: 'Container D',
      stageName: 'Ready For Harvest',
      statusText: 'Cured Compost & Container Reuse',
      tempStatus: 'Ambient Matched',
      operationalAction: 'Compost Harvest & Container Sanitization',
      detailedProcess:
        'Batch is fully mature. Mature compost is harvested for campus grounds and gardens. Container D is emptied, inspected, and ready to accept the next fresh waste intake.',
      idealMoisture: '40% crumbly texture',
      c_n_balance: 'Finished mature organic compost',
    },
  ];

  const currentContainer = containers[activeContainerIndex];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white border-b border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            System Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance">
            How It Works.
          </h2>
          <p className="mt-3 text-base text-[#252A26]/75">
            A continuous four-stage lifecycle engineered to integrate seamlessly into existing institutional kitchen routines without disrupting dining room operations.
          </p>
        </div>

        {/* 4-Step Horizontal Workflow on Desktop & Vertical Timeline on Mobile */}
        <div className="relative mb-20">
          {/* Subtle connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-1/2 -translate-y-8 left-8 right-8 h-0.5 bg-[#EDE9DF] z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="p-6 rounded-xl bg-[#F8F8F2] border border-[#EDE9DF] flex flex-col justify-between"
                >
                  <div>
                    {/* Step badge & icon */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-lg bg-white border border-[#EDE9DF] flex items-center justify-center text-[#244C3A]">
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <span className="text-xs font-semibold text-[#8FA894] tracking-wider">
                        STEP {step.number}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#252A26] tracking-tight mb-2">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-medium text-[#244C3A] mb-2.5">
                      {step.summary}
                    </p>

                    <p className="text-xs text-[#252A26]/70 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual Showing 4+ Composting Containers At Different Stages */}
        <div className="mb-14">
          <RotatingContainerDiagram />
        </div>

        {/* Detailed Container Batch Inspector */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F8F2] border border-[#EDE9DF]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#EDE9DF]">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#244C3A]">
                <RotateCw className="w-3.5 h-3.5" />
                <span>Technical Stage Inspector</span>
              </div>
              <h3 className="text-xl font-bold text-[#252A26] mt-1">
                Batch Biology & Environmental Parameters
              </h3>
            </div>
            <p className="text-xs text-[#252A26]/70 max-w-md">
              Select any container below to examine its internal bio-stage, operational status, temperature curve, and staff handling protocol.
            </p>
          </div>

          {/* Interactive Container Batch Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mt-6">
            {containers.map((cont, idx) => {
              const isSelected = activeContainerIndex === idx;
              return (
                <button
                  key={cont.id}
                  type="button"
                  onClick={() => setActiveContainerIndex(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white border-[#244C3A] shadow-xs ring-1 ring-[#244C3A]'
                      : 'bg-white/80 border-[#EDE9DF] hover:border-[#8FA894] hover:bg-white'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-[#244C3A]">
                        {cont.label}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          idx === 0
                            ? 'bg-[#244C3A]'
                            : idx === 3
                            ? 'bg-[#8FA894]'
                            : 'bg-[#EDE9DF]'
                        }`}
                      />
                    </div>
                    <div className="text-xs font-semibold text-[#252A26] mb-1">
                      {cont.stageName}
                    </div>
                    <div className="text-[11px] text-[#252A26]/65 line-clamp-2">
                      {cont.statusText}
                    </div>
                  </div>

                  <div className="mt-4 pt-2.5 border-t border-[#EDE9DF] flex items-center justify-between text-[11px] text-[#244C3A] font-medium">
                    <span>Inspect</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stage Detail Inspector Drawer / Panel */}
          <div className="mt-6 p-5 sm:p-6 rounded-xl bg-white border border-[#EDE9DF]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-[#EDE9DF]">
              <div>
                <div className="text-xs font-medium text-[#244C3A]">
                  Active Stage Focus · {currentContainer.label}
                </div>
                <h4 className="text-lg font-bold text-[#252A26]">
                  {currentContainer.stageName} ({currentContainer.statusText})
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5 text-[#252A26]/80">
                  <Thermometer className="w-3.5 h-3.5 text-[#244C3A]" />
                  <span>{currentContainer.tempStatus}</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#252A26]/80">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#244C3A]" />
                  <span>{currentContainer.idealMoisture}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
              <div className="md:col-span-8">
                <p className="text-xs sm:text-sm text-[#252A26]/80 leading-relaxed mb-3">
                  {currentContainer.detailedProcess}
                </p>
                <div className="text-xs text-[#244C3A] font-medium">
                  Protocol: {currentContainer.operationalAction}
                </div>
              </div>

              <div className="md:col-span-4 p-3.5 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF] text-xs space-y-1.5">
                <div className="font-semibold text-[#252A26]">Batch Parameters</div>
                <div className="text-[#252A26]/75">Balance: {currentContainer.c_n_balance}</div>
                <div className="text-[#252A26]/75">Airflow: Managed aerobic exchange</div>
              </div>
            </div>
          </div>

          {/* Important Requirement Note */}
          <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-[#EDE9DF]/50 border border-[#EDE9DF] text-xs text-[#252A26]/80">
            <Info className="w-4 h-4 text-[#244C3A] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p>
                <strong className="font-semibold text-[#252A26]">Composting Parameters & Timeline:</strong> Composting time depends on the selected method, materials, moisture, temperature, and aeration.
              </p>
              <p className="text-[#252A26]/75">
                Containers are not airtight sealed units; aerobic composting requires suitable ventilation and moisture management throughout. Sizing and container count are determined based on an institution's daily waste volume, batch-filling time, composting duration, and available site space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
