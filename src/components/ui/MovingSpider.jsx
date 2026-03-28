import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BlackWidowSVG = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-90 drop-shadow-2xl">
    {/* Body - Abdomen (large bulbous) */}
    <ellipse cx="50" cy="65" rx="18" ry="24" fill="#000000" />
    {/* Body - Cephalothorax (small head area) */}
    <circle cx="50" cy="40" r="10" fill="#050505" />
    
    {/* Red Hourglass Mark on Abdomen */}
    <path 
      d="M44 58 L56 58 L50 65 L44 72 L56 72 L50 65 Z" 
      fill="#E11D48" 
      className="animate-pulse"
      style={{ filter: 'drop-shadow(0 0 4px #E11D48)' }}
    />

    {/* Long Thin Legs */}
    {/* Left Side */}
    <motion.g animate={{ rotate: [0, 5, 0, -5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M42 42 Q 22 18, 12 30" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M40 45 Q 15 42, 5 55" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M40 50 Q 15 62, 10 80" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M42 55 Q 25 78, 20 92" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
    </motion.g>

    {/* Right Side */}
    <motion.g animate={{ rotate: [0, -5, 0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
      <path d="M58 42 Q 78 18, 88 30" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M60 45 Q 85 42, 95 55" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M60 50 Q 85 62, 90 80" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M58 55 Q 75 78, 80 92" stroke="#000000" strokeWidth="3" strokeLinecap="round" fill="none" />
    </motion.g>
  </svg>
);

const Spider = ({ initialPos, delay = 0 }) => {
  const [target, setTarget] = useState(initialPos);
  
  const moveSpider = () => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1000;
    
    // Pick a random destination
    const nextX = Math.random() * (width + 400) - 200;
    const nextY = Math.random() * (height + 400) - 200;
    
    // Calculate rotation to face the next point
    const angle = Math.atan2(nextY - target.y, nextX - target.x) * (180 / Math.PI);
    
    setTarget({ x: nextX, y: nextY, rotate: angle + 90 }); // +90 because default SVG matches "up"
  };

  useEffect(() => {
    const timeout = setTimeout(moveSpider, delay);
    const interval = setInterval(moveSpider, 35000); // Wait for the long transition to nearly finish
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: initialPos.x, y: initialPos.y, rotate: initialPos.rotate }}
      animate={{ 
        x: target.x, 
        y: target.y,
        rotate: target.rotate 
      }}
      transition={{ 
        duration: 35, 
        ease: "easeInOut"
      }}
      style={{ position: 'fixed', left: 0, top: 0 }}
      className="pointer-events-none"
    >
      <BlackWidowSVG />
    </motion.div>
  );
};

const MovingSpider = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-visible hidden sm:block">
      <Spider initialPos={{ x: -100, y: 100, rotate: 45 }} delay={0} />
      <Spider initialPos={{ x: 1200, y: 500, rotate: -45 }} delay={5000} />
      <Spider initialPos={{ x: 500, y: -200, rotate: 180 }} delay={12000} />
    </div>
  );
};

export default MovingSpider;
