import React from 'react';
import {
  Boxes,
  RotateCcw,
  Sparkles,
  MapPin,
  TrendingUp,
  Leaf
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      title: 'Independent Batch Processing',
      description:
        'Designed so each container composts its own isolated batch from start to finish without needing to transfer waste between units.',
      icon: Boxes,
    },
    {
      title: 'Continuous Waste Collection',
      description:
        'Aims to maintain ongoing daily cafeteria scrap intake by directing fresh waste to available units while filled batches mature.',
      icon: RotateCcw,
    },
    {
      title: 'Modular Container Setup',
      description:
        'Intended to fit flexible campus service courtyards, kitchen perimeters, or garden zones with minimal site preparation.',
      icon: MapPin,
    },
    {
      title: 'Useful Compost for Gardens and Landscaping',
      description:
        'Created to generate nutrient-rich organic humus on-site for campus lawns, tree rings, floral borders, and vegetable beds.',
      icon: Sparkles,
    },
    {
      title: 'Adaptable Capacity',
      description:
        'Conceived to allow institutions to adjust container numbers according to seasonal cafeteria dining numbers and scrap volumes.',
      icon: TrendingUp,
    },
    {
      title: 'Sustainability-Focused Design',
      description:
        'Aims to foster visible environmental stewardship and circular resource recovery within institutional dining communities.',
      icon: Leaf,
    },
  ];

  return (
    <section id="benefits" className="py-16 sm:py-24 bg-[#F8F8F2]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            Intended Advantages
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance">
            Designed for Institutional Practicality.
          </h2>
          <p className="mt-3 text-base text-[#252A26]/75">
            Raksha focuses on practical operational utility—addressing real spatial, sanitation, and labor realities faced by institutional facilities teams.
          </p>
        </div>

        {/* Clean Two-Row Grid with Six Consistent Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 sm:p-7 rounded-xl bg-white border border-[#EDE9DF] shadow-xs flex flex-col justify-between"
              >
                <div>
                  {/* Single simple icon */}
                  <div className="w-11 h-11 rounded-lg bg-[#F8F8F2] border border-[#EDE9DF] flex items-center justify-center text-[#244C3A] mb-5">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>

                  {/* Short heading */}
                  <h3 className="text-lg font-bold text-[#252A26] tracking-tight mb-2">
                    {card.title}
                  </h3>

                  {/* No more than two lines of supporting text (described as intended benefits) */}
                  <p className="text-sm text-[#252A26]/70 leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet footnote regarding intended benefits vs proven outcomes */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#252A26]/60">
            *Performance characteristics describe intended architectural and operational design goals evaluated during pilot testing.
          </p>
        </div>
      </div>
    </section>
  );
};
