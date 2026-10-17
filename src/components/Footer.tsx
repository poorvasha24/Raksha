import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#EDE9DF]/60 border-t border-[#EDE9DF] py-12 lg:py-16 text-[#252A26]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-[#252A26]/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5">
            <BrandLogo />
            <p className="mt-3 text-sm text-[#252A26]/75 max-w-sm leading-relaxed">
              Modular on-site organic waste composting for institutional dining facilities and sustainable campuses.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#244C3A] mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-[#252A26]/75 hover:text-[#244C3A] transition-colors duration-150 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability Statement */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#244C3A] mb-3">
              Sustainability Commitment
            </div>
            <p className="text-sm text-[#252A26]/75 leading-relaxed">
              RAKSHA is founded on the principle that organic waste is a biological resource, not a disposal burden. By decomposing cafeteria scraps close to where meals are served, institutions can restore local soil biology and minimize transport emissions.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Concept Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#252A26]/60">
          <div>
            © {currentYear} RAKSHA Composting Initiative. All rights reserved.
          </div>
          <div className="text-center sm:text-right">
            Pre-commercial research and engineering prototype venture.
          </div>
        </div>
      </div>
    </footer>
  );
};
