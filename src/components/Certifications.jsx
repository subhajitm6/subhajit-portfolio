import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCheckCircle } from 'react-icons/hi';

const certifications = [
  {
    title: 'Programming, Data Structures and Algorithms using Python',
    issuer: 'NPTEL (IIT Madras)',
    icon: '🐍',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Problem Solving through Programming in C',
    issuer: 'NPTEL (IIT Kharagpur)',
    icon: '⚙️',
    color: 'from-blue-500/20 to-cyan/20',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative" ref={ref}>
      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent-light uppercase tracking-widest">
            Certifications
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            My <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass rounded-2xl p-6 group hover:border-accent/30 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl flex-shrink-0`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white mb-1 group-hover:text-accent-light transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-dark-300">
                    <HiAcademicCap className="w-4 h-4 text-accent" />
                    {cert.issuer}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-green-400">
                    <HiCheckCircle className="w-4 h-4" />
                    Verified Certificate
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
