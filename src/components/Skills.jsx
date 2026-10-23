import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiJavascript, SiReact, SiLaravel, SiPhp, SiMysql,
  SiTailwindcss, SiGit, SiGithub, SiHtml5, SiPostgresql,
  SiMongodb, SiFastapi, SiPython, SiPostman, SiDocker,
  SiSupabase, SiVuedotjs
} from 'react-icons/si';
import { FaCss3Alt, FaJava } from "react-icons/fa";
import { HiServer, HiCode, HiDatabase, HiCog, HiCollection, HiCheckCircle } from 'react-icons/hi';
import { VscFileCode } from 'react-icons/vsc';

const skillCategories = [
  {
    title: 'Backend Engineering',
    subtitle: 'APIs & Server Architecture',
    color: 'text-spidey-red',
    glowColor: 'bg-spidey-red',
    icon: <HiServer className="w-5 h-5 text-spidey-red" />,
    skills: [
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'FastAPI', icon: <SiFastapi /> },
      { name: 'REST APIs', icon: <HiServer /> },
    ],
  },
  {
    title: 'Frontend Development',
    subtitle: 'User Interfaces & Client State',
    color: 'text-spidey-blue',
    glowColor: 'bg-spidey-blue',
    icon: <HiCode className="w-5 h-5 text-spidey-blue" />,
    skills: [
      { name: 'JavaScript (ES6+)', icon: <SiJavascript /> },
      { name: 'React.js', icon: <SiReact /> },
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'AJAX / jQuery', icon: <SiJavascript /> },
    ],
  },
  {
    title: 'Databases & Storage',
    subtitle: 'Data Modeling & Query Optimization',
    color: 'text-spidey-red',
    glowColor: 'bg-spidey-red',
    icon: <HiDatabase className="w-5 h-5 text-spidey-red" />,
    skills: [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
  },
  {
    title: 'API Testing & Platforms',
    subtitle: 'Testing, Version Control & DevOps',
    color: 'text-spidey-blue',
    glowColor: 'bg-spidey-blue',
    icon: <HiCog className="w-5 h-5 text-spidey-blue" />,
    skills: [
      { name: 'Swagger / OpenAPI', icon: <VscFileCode /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Bruno', icon: <VscFileCode /> },
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
  },
  {
    title: 'Additional Technologies',
    subtitle: 'Specialized Enterprise & App Tools',
    color: 'text-spidey-red',
    glowColor: 'bg-spidey-red',
    icon: <HiCollection className="w-5 h-5 text-spidey-red" />,
    skills: [
      { name: 'Java', icon: <FaJava /> },
      { name: 'Vue.js', icon: <SiVuedotjs /> },
      { name: 'Microsoft Power Apps', icon: <HiCog /> },
      { name: 'SharePoint', icon: <HiDatabase /> },
    ],
  },
  {
    title: 'Core Software Concepts',
    subtitle: 'Architecture, Security & Methodologies',
    color: 'text-spidey-blue',
    glowColor: 'bg-spidey-blue',
    icon: <HiCheckCircle className="w-5 h-5 text-spidey-blue" />,
    skills: [
      { name: 'Object-Oriented Programming (OOP)' },
      { name: 'MVC Architecture' },
      { name: 'Authentication & RBAC' },
      { name: 'Data Structures & Algorithms' },
      { name: 'Workflow Automation' },
      { name: 'API Testing Automation' },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-white/5 hover:border-spidey-blue/30 relative overflow-hidden group shadow-2xl flex flex-col justify-between"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-28 h-28 opacity-10 rounded-full blur-2xl ${category.glowColor}`} />
              
              <div>
                <div className="flex items-start justify-between mb-6 border-b border-white/5 pb-4">
                  <div>
                    <h3 className={`text-xl font-bold font-heading ${category.color}`}>
                      {category.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                      {category.subtitle}
                    </p>
                  </div>
                  <div className="h-9 w-9 border border-white/10 rounded-lg flex items-center justify-center bg-white/5 shadow-inner">
                    {category.icon}
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: catIdx * 0.1 + skillIdx * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-white/10 hover:border-spidey-blue/40 text-slate-200 hover:text-white transition-all shadow-sm group/badge cursor-default"
                    >
                      {skill.icon && (
                        <span className={`${category.color} text-sm transition-transform group-hover/badge:scale-110`}>
                          {skill.icon}
                        </span>
                      )}
                      <span className="text-xs font-medium tracking-wide">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
