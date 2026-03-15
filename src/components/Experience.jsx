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
    <section id="experience" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="glow-orb w-[400px] h-[400px] bg-purple-600 right-[-200px] top-[20%]" />

      <div className="max-w-4xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent-light uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Where I've <span className="gradient-text">worked</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-2 sm:ml-0">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-[1px] timeline-line opacity-30" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              className={`relative mb-12 md:w-[calc(50%-30px)] ${
                i % 2 === 0 ? 'md:mr-auto md:pr-0' : 'md:ml-auto md:pl-0'
              } pl-10 md:pl-0`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-[7px] top-6 w-[18px] h-[18px] rounded-full border-[3px] border-accent bg-dark-900 z-10 ${
                  i % 2 === 0 ? 'md:left-auto md:-right-[39px]' : 'md:right-auto md:-left-[39px]'
                }`}
              >
                <div className="w-full h-full rounded-full bg-accent/30 animate-pulse" />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                className="glass rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
              >
                {/* Company & Role */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <HiBriefcase className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                    <p className="text-accent-light font-medium text-sm">{exp.company}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-dark-300">
                  <span className="flex items-center gap-1.5">
                    <HiCalendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((d, j) => (
                    <li key={j} className="text-sm text-dark-200 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs font-mono bg-accent/10 text-accent-light rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
