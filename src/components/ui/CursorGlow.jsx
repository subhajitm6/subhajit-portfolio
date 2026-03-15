import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName.toLowerCase() === 'button' || 
          e.target.tagName.toLowerCase() === 'a' ||
          e.target.closest('button') || 
          e.target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-none pointer-events-none z-50 mix-blend-screen border-2 border-accent"
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isHovering ? 2 : 1,
        rotate: isHovering ? 45 : 0,
        backgroundColor: isHovering ? 'rgba(0, 242, 255, 0.3)' : 'rgba(0, 242, 255, 0.1)',
        boxShadow: isHovering 
          ? '0 0 25px 5px rgba(0, 242, 255, 0.5)' 
          : '0 0 10px 2px rgba(0, 242, 255, 0.2)'
      }}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    />
  );
};

export default CursorGlow;
