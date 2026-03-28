import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript, SiReact, SiLaravel, SiPhp, SiMysql,
  SiTailwindcss, SiBootstrap, SiGit, SiGithub, SiFigma,
  SiHtml5, SiJquery,
} from 'react-icons/si';
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from 'react-icons/fa';
import { HiDatabase, HiOfficeBuilding, HiCog } from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Offensive Capability',
    subtitle: 'Languages',
    color: 'text-spidey-red',
    glowColor: 'bg-spidey-red',
    skills: [
      { name: 'Java', icon: <FaJava />, level: 75 },
      { name: 'JavaScript', icon: <SiJavascript />, level: 85 },
      { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
      { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
      { name: 'jQuery', icon: <SiJquery />, level: 70 },
      { name: 'PHP', icon: <SiPhp />, level: 80 },
    ],
  },
  {
    title: 'Structural Systems',
    subtitle: 'Frameworks',
    color: 'text-spidey-blue',
    glowColor: 'bg-spidey-blue',
    skills: [
      { name: 'Laravel', icon: <SiLaravel />, level: 85 },
      { name: 'React.js', icon: <SiReact />, level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
    ],
  },
  {
    title: 'Data Intelligence',
    subtitle: 'Databases',
    color: 'text-spidey-red',
    glowColor: 'bg-spidey-red',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
      { name: 'MS Dataverse', icon: <HiDatabase />, level: 70 },
      { name: 'SharePoint List', icon: <HiDatabase />, level: 75 },
    ],
  },
  {
    title: 'Utility Arsenal',
    subtitle: 'Tools',
    color: 'text-spidey-blue',
    glowColor: 'bg-spidey-blue',
    skills: [
      { name: 'Git', icon: <SiGit />, level: 85 },
      { name: 'GitHub', icon: <SiGithub />, level: 85 },
      { name: 'Power Apps', icon: <HiCog />, level: 75 },
      { name: 'Office 365', icon: <HiOfficeBuilding />, level: 80 },
      { name: 'Figma', icon: <SiFigma />, level: 70 },
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding relative bg-spidey-black overflow-hidden" ref={ref}>
      {/* Background Web pattern corner */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none">
        <div className="absolute top-[-20px] left-[-20px] w-full h-full border-t border-l border-spidey-blue rounded-tl-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-spidey-blue uppercase tracking-[0.4em] mb-4 block">
            Capabilities Arsenal
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Core <span className="text-spidey-red">Architecture</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-blue mx-auto mt-6 rounded-full shadow-[0_0_10px_#1D4ED8]" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-8 border border-white/5 hover:border-spidey-blue/30 relative overflow-hidden group shadow-2xl"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full blur-3xl ${category.glowColor}`} />
              
              <div className="flex items-end justify-between mb-8 border-b border-white/5 pb-4">
                <div>
                  <h3 className={`text-2xl font-bold font-heading ${category.color}`}>
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">
                    {category.subtitle}
                  </p>
                </div>
                <div className="h-10 w-10 border border-white/10 rounded-lg flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                  {catIdx % 2 === 0 ? <HiCog className="animate-spin-slow" /> : <HiLightningBolt />}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: catIdx * 0.2 + skillIdx * 0.1 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`${category.color} text-xl transition-transform group-hover/skill:scale-125 duration-300`}>
                          {skill.icon}
                        </span>
                        <span className="text-xs uppercase tracking-wider font-bold text-slate-300">{skill.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden p-[1px]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: catIdx * 0.2 + skillIdx * 0.1, ease: 'circOut' }}
                        className={`h-full rounded-full transition-all duration-500 relative ${category.glowColor}`}
                      >
                         <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HiLightningBolt = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
);

export default Skills;
