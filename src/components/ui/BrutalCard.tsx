import React from 'react';

interface BrutalCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const BrutalCard: React.FC<BrutalCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false 
}) => {
  return (
    <div 
      className={`
        bg-neo-card text-neo-bg border-[3px] border-neo-border shadow-brutal p-6 
        ${hoverEffect ? 'transition-transform hover:-translate-y-1 hover:shadow-brutal-lg' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
