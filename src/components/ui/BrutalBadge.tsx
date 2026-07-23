import React from 'react';

interface BrutalBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const BrutalBadge: React.FC<BrutalBadgeProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <span 
      className={`
        inline-block px-3 py-1 bg-[#fff6e5] border-[2px] border-neo-border 
        shadow-[2px_2px_0px_0px_#171717] font-body text-xs font-bold text-neo-bg 
        ${className}
      `}
    >
      {children}
    </span>
  );
};
