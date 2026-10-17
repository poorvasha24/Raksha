import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';

export const BatchEstimator: React.FC<{ onDiscussEstimate: () => void }> = ({ onDiscussEstimate }) => {
  const [dailyWasteKg, setDailyWasteKg] = useState<number>(75);
  const [facilityType, setFacilityType] = useState<string>('university');

  // Calculation parameters
  // Approx 75 kg waste + ~35 kg carbon = 110 kg/day.
  // Typical modular cell takes ~7 days of fill before closure = ~770 kg capacity (~1 m³).
  // Total cycle ~6 to 8 weeks = 6 to 8 containers in rotation.
  const daysPerFill = facilityType === 'corporate' ? 5 : 7;
  const estimatedContainers = Math.max(4, Math.min(10, Math.ceil((dailyWasteKg / 75) * 5)));
  const estimatedWeeklyVolume = dailyWasteKg * (facilityType === 'corporate' ? 5 : 7);
  const estimatedGroundFootprintSqM = estimatedContainers * 2.5; // container + walking corridor
  const estimatedGroundFootprintSqFt = Math.round(estimatedGroundFootprintSqM * 10.764);

  return (
    <section className="py-16 sm:py-20 bg-[#F8F8F2] border-t border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            Institutional Planning Tool
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#252A26] tracking-tight text-balance">
            Interactive Rotation Sizing Estimator.
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#252A26]/75">
            Test how daily cafeteria scrap generation translates into modular container numbers and outdoor footprint requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-white border border-[#EDE9DF] flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#252A26] mb-2">
                  1. Facility Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'university', label: 'College / Uni' },
                    { id: 'corporate', label: 'Office Park' },
                    { id: 'hospitality', label: 'Hotel / Resort' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setFacilityType(cat.id)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer text-center ${
                        facilityType === cat.id
                          ? 'bg-[#244C3A] text-white border-[#244C3A]'
                          : 'bg-[#F8F8F2] text-[#252A26] border-[#EDE9DF] hover:border-[#8FA894]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#252A26]">
                    2. Estimated Daily Food Scrap Volume
                  </label>
                  <span className="text-sm font-bold text-[#244C3A] tabular-nums">
                    {dailyWasteKg} kg / day
                  </span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="250"
                  step="5"
                  value={dailyWasteKg}
                  onChange={(e) => setDailyWasteKg(Number(e.target.value))}
                  className="w-full accent-[#244C3A] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#252A26]/60 mt-1">
                  <span>20 kg (Small Cafe)</span>
                  <span>120 kg (Average Dining Hall)</span>
                  <span>250 kg (Central Prep)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F8F2] border border-[#EDE9DF] text-xs space-y-2 text-[#252A26]/75">
                <div className="font-semibold text-[#252A26] flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-[#244C3A]" />
                  <span>Weekly Volume Balance:</span>
                </div>
                <div>
                  Approx. <strong className="text-[#252A26] tabular-nums">{estimatedWeeklyVolume} kg</strong> kitchen waste per week, requiring balanced carbon bulking addition.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#EDE9DF] text-[11px] text-[#252A26]/60">
              *Preliminary guideline calculations for pilot planning. Final sizing accounts for seasonal peak dining terms and carbon moisture density.
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#EDE9DF]/60 border border-[#EDE9DF] flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#244C3A] mb-1">
                Estimated Modular Configuration
              </div>
              <h3 className="text-xl font-bold text-[#252A26] mb-6">
                Recommended Pilot Layout
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-[#EDE9DF]">
                  <div className="text-xs text-[#252A26]/70 mb-1">Independent Containers</div>
                  <div className="text-2xl font-bold text-[#244C3A] tabular-nums">
                    {estimatedContainers} Units
                  </div>
                  <div className="text-[11px] text-[#252A26]/60 mt-1">
                    1 filling + {estimatedContainers - 2} composting in place + 1 harvest ready
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#EDE9DF]">
                  <div className="text-xs text-[#252A26]/70 mb-1">Estimated Footprint</div>
                  <div className="text-2xl font-bold text-[#244C3A] tabular-nums">
                    ~{estimatedGroundFootprintSqM} m²
                  </div>
                  <div className="text-[11px] text-[#252A26]/60 mt-1">
                    Approx. {estimatedGroundFootprintSqFt} sq ft including access aisle
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-[#252A26]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#244C3A] shrink-0" />
                  <span>Batch fill window: ~{daysPerFill} days per container</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#244C3A] shrink-0" />
                  <span>Estimated maturation dwell: 6 to 9 weeks per batch</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#244C3A] shrink-0" />
                  <span>Zero off-site trucking requirement for organic fractions</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#EDE9DF]">
              <button
                type="button"
                onClick={onDiscussEstimate}
                className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#244C3A] hover:bg-[#1B3A2C] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Custom Site Sizing Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
