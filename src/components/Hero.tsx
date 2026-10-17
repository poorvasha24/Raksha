import React from 'react';
import { CheckCircle2, RotateCw, Sparkles } from 'lucide-react';
import compostImage from '../assets/images/finished_compost_soil_1792241089924.jpg';
import containerImage from '../assets/images/hero_clean_containers_1792225530408.jpg';
import natureImage from '../assets/images/hero_nature_bg_1792225531468.jpg';

interface HeroProps {
  onRequestDemo: () => void;
  onExploreHowItWorks: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestDemo, onExploreHowItWorks }) => {
  return (
    <section id="home" className="relative py-10 sm:py-16 lg:py-20 overflow-hidden">
      {/* Background Nature Image - visible in the background and adding natural atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={natureImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-right md:object-center opacity-50"
        />
        {/* Soft gradient from left: keeps left text area crisp and readable while letting natural greens show */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8F8F2] via-[#F8F8F2]/90 via-35% md:via-45% to-[#F8F8F2]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F2] via-transparent to-transparent md:hidden" />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
          {/* Left Column: text block */}
          <div className="w-full md:w-[50%] lg:w-[52%] flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="text-xs uppercase tracking-widest font-bold text-[#244C3A] mb-3.5">
              SUSTAINABLE WASTE MANAGEMENT
            </div>

            {/* Headline - naturally wraps in 2-3 lines */}
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.2] font-bold text-[#252A26] tracking-tight mb-5 max-w-[500px]">
              Turn Organic Waste Into Something Valuable.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg leading-relaxed text-[#252A26]/80 mb-7 max-w-[480px]">
              RAKSHA is a modular, on-site composting concept that transforms cafeteria organic waste into useful compost. Each container processes its own batch while other containers support continuous waste collection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4">
              <button
                type="button"
                onClick={onRequestDemo}
                className="h-11 px-6 text-sm font-medium text-white bg-[#244C3A] hover:bg-[#1B3A2C] active:bg-[#142C21] rounded-lg shadow-xs transition-all duration-150 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244C3A] whitespace-nowrap"
              >
                Request a Demo
              </button>
              <button
                type="button"
                onClick={onExploreHowItWorks}
                className="h-11 px-6 text-sm font-medium text-[#244C3A] bg-white hover:bg-[#EDE9DF] border border-[#244C3A]/20 rounded-lg shadow-2xs transition-all duration-150 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#244C3A] whitespace-nowrap"
              >
                Explore How It Works
              </button>
            </div>

            {/* Subtle supporting line */}
            <p className="text-xs sm:text-sm text-[#252A26]/65 mb-6">
              Designed for campuses, cafeterias, and commercial institutions.
            </p>

            {/* Trust checkmarks row */}
            <div className="pt-5 border-t border-[#EDE9DF] flex flex-wrap items-center gap-5 sm:gap-6 text-xs text-[#252A26]/75">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#244C3A] shrink-0" />
                <span>Independent batch composting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#244C3A] shrink-0" />
                <span>Continuous waste collection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#244C3A] shrink-0" />
                <span>Modular on-site units</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean container setup photo + finished compost photo filling the empty space */}
          <div className="w-full md:w-[50%] lg:w-[48%] flex flex-col gap-3.5 justify-center mt-4 md:mt-0">
            {/* Primary Container Setup Photo */}
            <div className="rounded-2xl bg-white/95 backdrop-blur-xs border border-[#EDE9DF] p-3 sm:p-3.5 shadow-sm">
              <div className="relative overflow-hidden rounded-xl bg-[#F8F8F2] aspect-[16/10]">
                <img
                  src={containerImage}
                  alt="Modular wooden institutional composting containers with dark green lids beside a campus greenhouse and garden"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#252A26]/85 backdrop-blur-xs text-white text-[11px] font-medium flex items-center gap-1.5 shadow-xs">
                  <RotateCw className="w-3 h-3 text-[#8FA894]" />
                  <span>Modular On-Site Setup</span>
                </div>
              </div>

              {/* Clean, restrained caption underneath without artificial labels */}
              <div className="mt-2.5 px-1 py-0.5 flex items-center justify-between text-xs text-[#252A26]/70">
                <span>Modular cedar batch containers with hinged lids</span>
                <span className="text-[#244C3A] font-semibold">Institutional Prototype</span>
              </div>
            </div>

            {/* Complementary Image filling the empty space: Finished Compost Soil */}
            <div className="rounded-2xl bg-white/95 backdrop-blur-xs border border-[#EDE9DF] p-3 sm:p-3.5 shadow-sm">
              <div className="relative overflow-hidden rounded-xl bg-[#F8F8F2] aspect-[16/8]">
                <img
                  src={compostImage}
                  alt="Rich dark finished organic compost in hands with gardening tray ready for campus soil"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#244C3A]/90 backdrop-blur-xs text-white text-[11px] font-medium flex items-center gap-1.5 shadow-xs">
                  <Sparkles className="w-3 h-3 text-[#8FA894]" />
                  <span>Finished Compost Harvest</span>
                </div>
                <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-xs text-white text-[10px] font-medium">
                  Cured organic soil
                </div>
              </div>

              <div className="mt-2.5 px-1 py-0.5 flex items-center justify-between text-xs text-[#252A26]/70">
                <span>Nutrient-rich humus returned to campus grounds & gardens</span>
                <span className="text-[#244C3A] font-semibold">Zero-Waste Loop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
