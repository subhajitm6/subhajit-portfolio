import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    company: 'SIGILO TECHNOLOGY PVT. LTD.',
    role: 'Power Apps Developer',
    period: 'Jul 2023 – Feb 2024',
    location: 'India',
    description: [
      'Built an end-to-end inspection form system using Microsoft Power Apps, streamlining field operations and data collection workflows',
      'Integrated SharePoint for centralized document storage and management, enabling seamless access across teams',
      'Implemented complex validation rules and dynamic form logic to ensure data accuracy and scalability',
      'Collaborated with cross-functional teams to gather requirements and deliver production-ready solutions',
    ],
    tech: ['Power Apps', 'SharePoint', 'Microsoft Dataverse', 'Office 365'],
  },
  {
    company: 'BWJ TECH SOLUTIONS PVT. LTD.',
    role: 'Full Stack Developer',
    period: 'Present',
    location: 'India',
    description: [
      'Developing scalable web applications using Laravel and React.js with focus on clean architecture',
      'Building RESTful APIs and integrating frontend components with robust backend services',
      'Implementing responsive designs using Tailwind CSS and modern UI/UX principles',
      'Working with MySQL databases, optimizing queries for performance and reliability',
    ],
    tech: ['Laravel', 'React.js', 'MySQL', 'Tailwind CSS', 'PHP'],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding relative bg-spidey-dark overflow-hidden" ref={ref}>
      {/* Background Web pattern corner */}
      <div className="absolute top-0 right-0 w-80 h-80 opacity-5 pointer-events-none rotate-90">
         <div className="absolute inset-0 border-[1px] border-spidey-red rounded-full scale-150" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-display text-spidey-red uppercase tracking-[0.4em] mb-4 block">
            Battle Log
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Professional <span className="text-spidey-blue">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-red mx-auto mt-6 rounded-full shadow-[0_0_10px_#E11D48]" />
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central Line - "The Web Thread" */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-[1px] bg-gradient-to-b from-spidey-red via-spidey-blue to-spidey-red opacity-30 shadow-[0_0_10px_rgba(225,29,72,0.3)]" />

          <div className="space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[20px] md:left-1/2 top-0 -translate-x-1/2 flex items-center justify-center z-20">
                  <motion.div 
                    animate={{ scale: [1, 1.2, 1], boxShadow: ['0 0 0px #E11D48', '0 0 15px #E11D48', '0 0 0px #E11D48'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-10 h-10 rounded-full border-2 border-spidey-red bg-spidey-black flex items-center justify-center p-2`}
                  >
                    <HiBriefcase className="text-spidey-blue w-full h-full" />
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ml-12 md:ml-0 mt-2 md:mt-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    className="glass-card rounded-2xl p-6 sm:p-8 border border-white/5 hover:border-spidey-red/40 transition-all shadow-2xl relative group"
                  >
                    {/* Role & Company */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white font-heading group-hover:text-spidey-red transition-colors">{exp.role}</h3>
                        <span className="text-[10px] font-display text-spidey-blue bg-spidey-blue/10 px-2 py-1 rounded">
                           {exp.period}
                        </span>
                      </div>
                      <p className="text-spidey-red font-bold text-sm tracking-widest uppercase">{exp.company}</p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
                      <HiLocationMarker className="text-spidey-blue" />
                      {exp.location}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((d, j) => (
                        <li key={j} className="text-sm text-slate-300 flex items-start gap-3 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-spidey-red rounded-full mt-1.5 flex-shrink-0 animate-pulse" />
                          {d}
                        </li>
                      ))}
                    </ul>

                    {/* Tech used */}
                    <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-bold text-slate-400 bg-white/5 rounded-full border border-white/5 hover:border-spidey-blue/50 hover:text-spidey-blue transition-all"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
