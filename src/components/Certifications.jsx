import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCheckCircle, HiBadgeCheck } from 'react-icons/hi';
import { SiPython } from 'react-icons/si';
import { VscSymbolMethod } from 'react-icons/vsc';

const certifications = [
  {
    title: 'Programming, Data Structures, and Algorithms Using Python',
    issuer: 'NPTEL (IIT Madras)',
    date: 'March 2021',
    icon: <SiPython className="w-6 h-6 text-spidey-blue" />,
    badgeColor: 'text-spidey-blue bg-spidey-blue/10 border-spidey-blue/30',
  },
  {
    title: 'Problem Solving through Programming in C',
    issuer: 'NPTEL (IIT Kharagpur)',
    date: 'April 2020',
    icon: <VscSymbolMethod className="w-6 h-6 text-spidey-red" />,
    badgeColor: 'text-spidey-red bg-spidey-red/10 border-spidey-red/30',
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative bg-spidey-dark overflow-hidden" ref={ref}>
      {/* Background accents */}
      <div className="absolute inset-0 bg-web opacity-5 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-spidey-blue uppercase tracking-[0.4em] mb-4 block">
            Accreditations
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Verified <span className="text-spidey-red">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-blue mx-auto mt-6 rounded-full shadow-[0_0_10px_#1D4ED8]" />
        </motion.div>

        {/* Certification Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-spidey-blue/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-900/60 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-inner">
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2.5 py-0.5 rounded border border-white/5">
                      {cert.date}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-green-400 font-medium">
                      <HiCheckCircle className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 font-heading leading-snug">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <HiAcademicCap className="w-4 h-4 text-spidey-blue" />
                    <span>{cert.issuer}</span>
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
