import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface BrutalButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const BrutalButton: React.FC<BrutalButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-heading font-bold text-lg border-2 border-neo-border transition-colors";
  
  const variants = {
    primary: "bg-neo-primary text-white hover:bg-[#c9452b]",
    secondary: "bg-neo-secondary text-neo-bg hover:bg-[#b08b73]",
    outline: "bg-neo-card text-neo-bg hover:bg-gray-100"
  };

  return (
    <motion.button
      whileHover={{ y: -2, boxShadow: '6px 6px 0px 0px #171717' }}
      whileTap={{ y: 4, x: 4, boxShadow: '0px 0px 0px 0px #171717' }}
      className={`${baseStyles} ${variants[variant]} shadow-brutal ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};
