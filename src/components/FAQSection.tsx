import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'Does waste move between containers during composting?',
      answer:
        'No. Each batch remains in its original container throughout the composting and maturation process. Waste does not move from one container to another.',
    },
    {
      id: 'faq-2',
      question: 'Why does RAKSHA use multiple containers?',
      answer:
        'Multiple containers allow new batches to be collected while earlier batches continue composting. This prevents the need to mix fresh cafeteria scraps into batches that are already undergoing biological decomposition.',
    },
    {
      id: 'faq-3',
      question: 'Does RAKSHA currently process plastic?',
      answer:
        'No. The initial focus is organic waste composting. Separate plastic collection and recycling partnerships are planned for future expansion.',
    },
    {
      id: 'faq-4',
      question: 'How many containers are required?',
      answer:
        'This depends on daily waste volume, how quickly containers fill, composting duration, and available space. Sizing is individually assessed for each facility rather than assuming a fixed number.',
    },
    {
      id: 'faq-5',
      question: 'How long does composting take?',
      answer:
        'It depends on the selected method, materials, moisture, temperature, and aeration. The process and timeline must be validated through testing.',
    },
    {
      id: 'faq-6',
      question: 'Can the finished compost be used immediately?',
      answer:
        'It should be used only after it has matured sufficiently and its suitability for the intended application has been assessed.',
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#F8F8F2]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#244C3A]/90 block mb-3">
            Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#252A26] tracking-tight text-balance">
            Frequently Asked Questions.
          </h2>
          <p className="mt-3 text-base text-[#252A26]/75">
            Key operational, spatial, and biological considerations for institutions evaluating modular on-site composting.
          </p>
        </div>

        {/* Clean Accordion with Consistent Spacing & Subtle Dividers */}
        <div className="max-w-3xl divide-y divide-[#EDE9DF] border-y border-[#EDE9DF]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-5 sm:py-6">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus-visible:outline-2 focus-visible:outline-[#244C3A] rounded-sm py-1"
                >
                  <span className="text-base sm:text-lg font-bold text-[#252A26] group-hover:text-[#244C3A] transition-colors duration-150">
                    {faq.question}
                  </span>
                  <span className="shrink-0 w-8 h-8 rounded-md bg-white border border-[#EDE9DF] flex items-center justify-center text-[#244C3A] group-hover:border-[#8FA894] transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[2]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[2]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-12 text-sm sm:text-base text-[#252A26]/75 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet prompt */}
        <div className="mt-8 text-xs text-[#252A26]/60">
          Have an institutional question not answered here? Use the enquiry form below to connect with our engineering and pilot planning team.
        </div>
      </div>
    </section>
  );
};
