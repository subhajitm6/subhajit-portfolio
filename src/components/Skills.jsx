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
    title: 'Programming Languages',
    color: 'from-yellow-500/20 to-orange-500/20',
    borderColor: 'border-yellow-500/20',
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
    title: 'Frameworks & Libraries',
    color: 'from-accent/20 to-purple-500/20',
    borderColor: 'border-accent/20',
    skills: [
      { name: 'Laravel', icon: <SiLaravel />, level: 85 },
      { name: 'React.js', icon: <SiReact />, level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 90 },
      { name: 'Bootstrap', icon: <SiBootstrap />, level: 85 },
    ],
  },
  {
    title: 'Databases',
    color: 'from-cyan/20 to-blue-500/20',
    borderColor: 'border-cyan/20',
    skills: [
      { name: 'MySQL', icon: <SiMysql />, level: 80 },
      { name: 'MS Dataverse', icon: <HiDatabase />, level: 70 },
      { name: 'SharePoint List', icon: <HiDatabase />, level: 75 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/20',
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
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[400px] h-[400px] bg-cyan left-[-200px] top-[30%]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">
            &gt; Scaning Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 uppercase tracking-tighter">
            Core <span className="gradient-text">Architecture</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className={`glass rounded-none p-6 hover:border-accent/50 transition-all duration-300 group tech-border`}
            >
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-none rotate-45 bg-gradient-to-r ${category.color}`} />
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIdx * 0.15 + skillIdx * 0.08 }}
                    className="group/skill"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="text-accent text-lg group-hover/skill:scale-110 transition-transform">
                          {skill.icon}
                        </span>
                        <span className="text-xs uppercase tracking-wider font-bold text-dark-100">{skill.name}</span>
                      </div>
                      <span className="text-xs text-dark-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-dark-700 rounded-none overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: catIdx * 0.15 + skillIdx * 0.08, ease: 'easeOut' }}
                        className="h-full rounded-none bg-gradient-to-r from-accent via-robotic-purple to-robotic-green shadow-[0_0_8px_rgba(0,242,255,0.5)]"
                      />
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

export default Skills;
