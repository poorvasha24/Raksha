import React from 'react';
import { GraduationCap, Building2, UtensilsCrossed, Building } from 'lucide-react';
import cafeteriaImage from '../assets/images/sector_cafeteria_1792221471726.jpg';
import campusImage from '../assets/images/sector_campus_1792221471708.jpg';
import hotelImage from '../assets/images/sector_hotel_1792221472136.jpg';
import officeParkImage from '../assets/images/sector_office_park_1792221471955.jpg';

interface Sector {
  title: string;
  context: string;
  description: string;
  keyUseCases: string;
  image: string;
  icon: React.ElementType;
}

export const WhoItServes: React.FC = () => {
  const sectors: Sector[] = [
    {
      title: 'Colleges and Universities',
      context: 'Higher Education Campuses',
      description:
        'Engage residential dining halls, student unions, and agricultural grounds with an educational, tangible composting installation.',
      keyUseCases: 'Dining hall plate waste, prep scraps, campus grounds mulch reuse',
      image: campusImage,
      icon: GraduationCap,
    },
    {
      title: 'Office Parks',
      context: 'Corporate Facilities',
      description:
        'Help property managers and corporate cafeteria operators meet tenant ESG expectations with clean, odor-managed on-site units.',
      keyUseCases: 'Employee dining cafeterias, coffee bars, corporate park flowerbeds',
      image: officeParkImage,
      icon: Building2,
    },
    {
      title: 'Hotels and Restaurants',
      context: 'Hospitality & Dining',
      description:
        'Provide resort and hotel culinary departments a responsible outlet for banquet waste, connecting kitchen scraps directly to kitchen gardens.',
      keyUseCases: 'Banquet prep trimmings, buffet surplus, herb & culinary garden soil',
      image: hotelImage,
      icon: UtensilsCrossed,
    },
    {
      title: 'Commercial Cafeterias',
      context: 'Institutional Food Service',
      description:
        'Assist contract caterers, hospital dining facilities, and civic centers in handling high-throughput organic waste at the point of origin.',
      keyUseCases: 'Large volume vegetable peeling, high-speed scrap segregation, reduced skip loads',
      image: cafeteriaImage,
      icon: Building,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#EDE9DF]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            Institutional Fit
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance">
            Who It Serves.
          </h2>
          <p className="mt-3 text-base text-[#252A26]/75">
            Designed for environments where cafeteria meals are prepared in bulk and local grounds benefit from sustainable soil restoration.
          </p>
        </div>

        {/* 4 Visually Consistent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.title}
                className="rounded-xl bg-[#F8F8F2] border border-[#EDE9DF] overflow-hidden flex flex-col justify-between group transition-colors duration-200"
              >
                <div>
                  {/* Consistent 4:3 Image Aspect Ratio */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDE9DF]">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-3 text-white text-xs font-medium drop-shadow-sm flex items-center gap-1.5">
                      <Icon className="w-3.5 h-3.5 stroke-[2]" />
                      <span>{sector.context}</span>
                    </div>
                  </div>

                  {/* Card Content with aligned headers and descriptions */}
                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#252A26] tracking-tight mb-2">
                      {sector.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#252A26]/75 leading-relaxed mb-4">
                      {sector.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[#EDE9DF] text-[11px] text-[#244C3A]">
                    <span className="font-semibold block text-[#252A26]">Focus Areas:</span>
                    <span className="text-[#252A26]/70 leading-normal">{sector.keyUseCases}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
