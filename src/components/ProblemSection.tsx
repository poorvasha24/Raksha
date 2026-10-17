import React from 'react';
import { Utensils, Truck, Sparkles, ArrowRight } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Daily Waste',
      subtitle: 'Consistent Inflow',
      description: 'Cafeterias generate organic waste every day.',
      detail:
        'Food prep scraps, unserved meal surplus, and plate returns accumulate on a predictable schedule across breakfast, lunch, and dinner services.',
      icon: Utensils,
    },
    {
      title: 'Disposal Challenges',
      subtitle: 'Logistical Friction',
      description: 'Managing and transporting waste requires ongoing effort.',
      detail:
        'Frequent hauling schedules, odour management in loading docks, and municipal collection restrictions create daily operational friction for facility teams.',
      icon: Truck,
    },
    {
      title: 'Lost Potential',
      subtitle: 'Unrealized Value',
      description: 'Organic waste can become a useful resource when processed appropriately.',
      detail:
        'Instead of burdening landfill streams, discarded organic matter holds nitrogen, carbon, and biological nutrients capable of nourishing institution soil.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            The Institutional Challenge
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#252A26] tracking-tight text-balance">
            Organic Waste Needs a Better Solution.
          </h2>
          <p className="mt-3 text-base text-[#252A26]/75">
            Institutional kitchens operate on steady dining volumes. Conventional waste management often overlooks the opportunity to close the organic loop directly on campus.
          </p>
        </div>

        {/* Three Aligned Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#F8F8F2] border border-[#EDE9DF] transition-colors duration-200"
              >
                <div>
                  {/* Clean Icon Container with restrained sage/forest styling */}
                  <div className="w-12 h-12 rounded-lg bg-white border border-[#EDE9DF] flex items-center justify-center text-[#244C3A] mb-6">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Clean editorial numbering & kicker */}
                  <div className="text-xs text-[#244C3A] font-medium tracking-wide mb-1">
                    0{idx + 1} · {item.subtitle}
                  </div>

                  <h3 className="text-xl font-bold text-[#252A26] tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm font-medium text-[#244C3A] mb-3">
                    {item.description}
                  </p>

                  <p className="text-sm text-[#252A26]/70 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
