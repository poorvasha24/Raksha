import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', variant = 'dark' }) => {
  const isLight = variant === 'light';

  return (
    <span
      className={`font-bold tracking-tight text-xl ${
        isLight ? 'text-white' : 'text-[#244C3A]'
      } ${className}`}
    >
      RAKSHA
    </span>
  );
};
