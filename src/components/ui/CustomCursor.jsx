import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const RedSpiderSVG = ({ color = "#E11D48", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Body */}
    <ellipse cx="12" cy="14" rx="3.5" ry="5" fill={color} />
    <circle cx="12" cy="8" r="2.5" fill={color} />
    
    {/* Legs - Left */}
    <path d="M9 12 C 5 10, 4 6, 4 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8.5 14 C 4 14, 3 10, 3 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M9 16 C 5 18, 4 22, 4 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 17.5 C 7 21, 6 24, 6 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

    {/* Legs - Right */}
    <path d="M15 12 C 19 10, 20 6, 20 6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15.5 14 C 20 14, 21 10, 21 10" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M15 16 C 19 18, 20 22, 20 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 17.5 C 17 21, 18 24, 18 24" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Eyes */}
    <circle cx="11" cy="7.5" r="0.8" fill="white" />
    <circle cx="13" cy="7.5" r="0.8" fill="white" />
  </svg>
);

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth movement springs
  const springX = useSpring(mouseX, { stiffness: 400, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 28 });
  
  // Trailing point springs
  const trailX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const trailY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Trailing Blur Effect */}
      <motion.div
        style={{ x: trailX, y: trailY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-spidey-red/20 blur-xl transition-opacity"
      />

      {/* Main Spider Cursor */}
      <motion.div
        style={{ 
          x: springX, 
          y: springY,
          scale: isHovering ? 1.5 : 1,
        }}
        className="absolute -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_8px_rgba(225,29,72,0.6)]"
      >
        <RedSpiderSVG />
      </motion.div>
      
      {/* Center Glow Dot */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full opacity-50 shadow-[0_0_5px_white]"
      />
    </div>
  );
};

export default CustomCursor;
