import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BlackWidowSVG = ({ size = 70 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60 drop-shadow-2xl">
    {/* Body - Abdomen (large bulbous) */}
    <ellipse cx="50" cy="65" rx="18" ry="24" fill="#050505" />
    {/* Body - Cephalothorax (small head area) */}
    <circle cx="50" cy="40" r="10" fill="#080808" />
    
    {/* Red Hourglass Mark on Abdomen */}
    <path 
      d="M44 58 L56 58 L50 65 L44 72 L56 72 L50 65 Z" 
      fill="#E11D48" 
      className="animate-pulse"
      style={{ filter: 'drop-shadow(0 0 2px #E11D48)' }}
    />

    {/* Long Thin Legs */}
    {/* Left Side */}
    <motion.g animate={{ rotate: [0, 2, 0, -2, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
      <path d="M42 42 Q 20 20, 10 35" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M40 45 Q 15 45, 5 60" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M40 50 Q 15 65, 10 85" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M42 55 Q 25 80, 20 95" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </motion.g>

    {/* Right Side */}
    <motion.g animate={{ rotate: [0, -2, 0, 2, 0] }} transition={{ duration: 0.8, repeat: Infinity }}>
      <path d="M58 42 Q 80 20, 90 35" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M60 45 Q 85 45, 95 60" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M60 50 Q 85 65, 90 85" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M58 55 Q 75 80, 80 95" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </motion.g>
  </svg>
);

const Spider = ({ delay = 0 }) => {
  const [target, setTarget] = useState({ x: -200, y: -200, rotate: 0 });

  const getRandomPosition = () => {
    const margin = 200;
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Pick a random edge to move towards
    const edges = [
      { x: Math.random() * width, y: -margin, rotate: 0 }, // Top
      { x: width + margin, y: Math.random() * height, rotate: 90 }, // Right
      { x: Math.random() * width, y: height + margin, rotate: 180 }, // Bottom
      { x: -margin, y: Math.random() * height, rotate: -90 }, // Left
    ];
    
    return edges[Math.floor(Math.random() * edges.length)];
  };

  useEffect(() => {
    const move = () => {
      setTarget(getRandomPosition());
    };

    setTimeout(move, delay);
    const interval = setInterval(move, 20000); // Path update frequency

    return () => clearInterval(interval);
  }, [delay]);

  return (
    <motion.div
      initial={{ x: -200, y: -200, rotate: 45 }}
      animate={{ 
        x: target.x, 
        y: target.y,
        rotate: target.rotate 
      }}
      transition={{ 
        duration: 15, 
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute"
    >
      <BlackWidowSVG />
    </motion.div>
  );
};

const MovingSpider = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden hidden sm:block">
      <Spider delay={0} />
      <Spider delay={5000} />
      <Spider delay={10000} />
    </div>
  );
};

export default MovingSpider;
