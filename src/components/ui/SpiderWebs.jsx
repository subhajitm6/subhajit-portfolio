import { motion, useScroll, useTransform } from 'framer-motion';

const RealisticWebSVG = ({ className }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className} text-white/10 stroke-zinc-400/5`}>
    {/* Radiating Foundation Lines */}
    <g stroke="currentColor" strokeWidth="0.3">
      <line x1="100" y1="100" x2="200" y2="100" />
      <line x1="100" y1="100" x2="180" y2="180" />
      <line x1="100" y1="100" x2="100" y2="200" />
      <line x1="100" y1="100" x2="20" y2="180" />
      <line x1="100" y1="100" x2="0" y2="100" />
      <line x1="100" y1="100" x2="20" y2="20" />
      <line x1="100" y1="100" x2="100" y2="0" />
      <line x1="100" y1="100" x2="180" y2="20" />
      <line x1="100" y1="100" x2="150" y2="50" />
      <line x1="100" y1="100" x2="50" y2="150" />
    </g>

    {/* Concentric / Irregular Threads (Dense Center) */}
    <g stroke="currentColor" strokeWidth="0.2">
      {[...Array(12)].map((_, i) => {
        const r = (i + 1) * 8;
        return (
          <path 
            key={i} 
            d={`M ${100 + r} 100 
                C ${100 + r} ${100 + r/2}, ${100 + r/2} ${100 + r}, 100 ${100 + r}
                C ${100 - r/2} ${100 + r}, ${100 - r} ${100 + r/2}, ${100 - r} 100
                C ${100 - r} ${100 - r/2}, ${100 - r/2} ${100 - r}, 100 ${100 - r}
                C ${100 + r/2} ${100 - r}, ${100 + r} ${100 - r/2}, ${100 + r} 100`} 
            fill="none" 
            opacity={0.8 - i * 0.05}
          />
        );
      })}
    </g>

    {/* Messy / Cross-connecting Threads (Realistic feel) */}
    <g stroke="currentColor" strokeWidth="0.15" opacity="0.4">
        <path d="M120 100 Q 140 120, 160 100" />
        <path d="M100 120 Q 80 140, 100 160" />
        <path d="M80 100 Q 60 80, 40 100" />
        <path d="M100 80 Q 120 60, 100 40" />
        <path d="M130 130 Q 150 150, 170 130" />
        <path d="M70 70 Q 50 50, 30 70" />
        {/* Irregular loose ends */}
        <path d="M180 100 C 190 110, 195 90, 200 100" strokeWidth="0.1" />
        <path d="M100 20 C 110 10, 90 5, 100 0" strokeWidth="0.1" />
    </g>
  </svg>
);

const SpiderWebs = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const yInverse = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Top Right Corner (Hero) - Dense and Complex */}
      <motion.div 
        style={{ y: yParallax }}
        className="absolute -top-10 -right-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rotate-180 opacity-60"
      >
        <RealisticWebSVG className="w-full h-full" />
      </motion.div>

      {/* Bottom Left Corner (Footer Area) */}
      <motion.div 
        style={{ y: yInverse }}
        className="absolute -bottom-10 -left-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-40"
      >
        <RealisticWebSVG className="w-full h-full" />
      </motion.div>

      {/* Scattered background webs for depth */}
      <div className="absolute top-[20%] left-[-5%] w-64 h-64 opacity-10">
         <RealisticWebSVG className="w-full h-full" />
      </div>
      <div className="absolute bottom-[30%] right-[-5%] w-48 h-48 opacity-10 rotate-90">
         <RealisticWebSVG className="w-full h-full" />
      </div>
    </div>
  );
};

export default SpiderWebs;
