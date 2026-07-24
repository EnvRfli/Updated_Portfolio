import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// SVG Star shape for neo-brutalism
const StarSVG = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 0L37.5 22.5H60L42.5 37.5L47.5 60L30 45L12.5 60L17.5 37.5L0 22.5H22.5L30 0Z" stroke="#334155" strokeWidth="6" strokeLinejoin="round" />
  </svg>
);

const TriangleSVG = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 L55 55 L5 55 Z" stroke="#334155" strokeWidth="6" strokeLinejoin="round" />
  </svg>
);

const CrossSVG = () => (
  <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 0H40V20H60V40H40V60H20V40H0V20H20V0Z" stroke="#334155" strokeWidth="6" strokeLinejoin="round" />
  </svg>
);

export const FloatingBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const shapes = [
    { id: 1, type: 'star', x: '10%', y: '15%', delay: 0 },
    { id: 2, type: 'circle', x: '85%', y: '20%', delay: 1, size: 'w-12 h-12 rounded-full border-[5px] border-[#334155]' },
    { id: 3, type: 'square', x: '75%', y: '65%', delay: 2, size: 'w-12 h-12 border-[5px] border-[#334155]' },
    { id: 4, type: 'triangle', x: '15%', y: '75%', delay: 1.5 },
    { id: 5, type: 'pill', x: '45%', y: '35%', delay: 0.5, size: 'w-16 h-8 rounded-full border-[5px] border-[#334155]' },
    { id: 6, type: 'cross', x: '85%', y: '85%', delay: 2.5 },
    { id: 7, type: 'circle', x: '25%', y: '45%', delay: 0.8, size: 'w-8 h-8 rounded-full border-[4px] border-[#334155]' },
    { id: 8, type: 'star', x: '60%', y: '80%', delay: 1.2 },
    { id: 9, type: 'square', x: '5%', y: '50%', delay: 1.8, size: 'w-10 h-10 border-[4px] border-[#334155]' },
    { id: 10, type: 'triangle', x: '55%', y: '10%', delay: 2.2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-70">
      {shapes.map((shape) => {
        let content;
        if (shape.type === 'star') content = <StarSVG />;
        else if (shape.type === 'triangle') content = <TriangleSVG />;
        else if (shape.type === 'cross') content = <CrossSVG />;
        else content = <div className={shape.size} />;

        return (
          <motion.div
            key={shape.id}
            className="absolute"
            style={{ left: shape.x, top: shape.y }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 8 + (shape.delay * 2), // varied durations
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay
            }}
          >
            {content}
          </motion.div>
        );
      })}
    </div>
  );
};
