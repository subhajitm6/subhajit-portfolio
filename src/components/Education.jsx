import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiAcademicCap, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const educationData = [
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'SKF Group of Institutions',
    university: 'Maulana Abul Kalam Azad University of Technology (MAKAUT)',
    duration: '2019 – 2023',
    grade: 'CGPA: 9.32 / 10',
    location: 'India',
    details: 'Comprehensive core coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Software Engineering.',
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="section-padding relative bg-spidey-black overflow-hidden" ref={ref}>
      {/* Background web overlay */}
      <div className="absolute inset-0 bg-web opacity-5 pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-spidey-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-spidey-red uppercase tracking-[0.4em] mb-4 block">
            Academic Foundation
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Formal <span className="text-spidey-blue">Education</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-red mx-auto mt-6 rounded-full shadow-[0_0_10px_#E11D48]" />
        </motion.div>

        {/* Education Timeline / Cards */}
        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              whileHover={{ scale: 1.01 }}
              className="glass-card rounded-2xl p-7 sm:p-9 border border-white/5 hover:border-spidey-red/40 transition-all shadow-2xl relative group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-spidey-red/10 border border-spidey-red/20 flex items-center justify-center flex-shrink-0 text-spidey-red text-2xl shadow-lg">
                    <HiAcademicCap />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-spidey-red transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-200 mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-spidey-blue font-medium mt-0.5">
                      {edu.university}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2 border-t md:border-t-0 pt-3 md:pt-0 border-white/5 flex-shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap">
                    <HiCalendar className="text-spidey-blue flex-shrink-0" />
                    {edu.duration}
                  </span>
                  <span className="inline-flex items-center text-xs font-bold font-mono text-spidey-red bg-spidey-red/10 px-3 py-1 rounded-full border border-spidey-red/20 whitespace-nowrap">
                    {edu.grade}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 mb-4 ml-0 md:ml-16">
                <HiLocationMarker className="text-spidey-blue" />
                <span>{edu.location}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed ml-0 md:ml-16 pt-3 border-t border-white/5">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
