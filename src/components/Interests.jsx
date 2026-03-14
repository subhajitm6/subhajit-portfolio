import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiPuzzle, HiDesktopComputer, HiCode } from 'react-icons/hi';

const interests = [
  {
    icon: <HiPuzzle className="w-8 h-8" />,
    title: 'DSA Problem Solving',
    description: 'Solving algorithmic challenges and improving problem-solving skills through competitive programming.',
    color: 'from-accent to-purple-500',
  },
  {
    icon: <HiDesktopComputer className="w-8 h-8" />,
    title: 'Technology',
    description: 'Exploring new frameworks, staying updated with latest tech trends and emerging technologies.',
    color: 'from-cyan to-blue-500',
  },
  {
    icon: <HiCode className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that provide seamless user experiences.',
    color: 'from-pink-500 to-rose-500',
  },
];

const Interests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="interests" className="section-padding relative" ref={ref}>
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent-light uppercase tracking-widest">Interests</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            What drives <span className="gradient-text">me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl p-7 text-center group hover:border-accent/30 transition-all duration-500"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-accent-light mb-5 bg-accent/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-accent-light transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-dark-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
