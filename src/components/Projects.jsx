import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiReact, SiLaravel, SiJavascript, SiMysql } from 'react-icons/si';

const projects = [
  {
    title: 'Crypto Tracker',
    subtitle: 'Market Dashboard',
    description:
      'A real-time cryptocurrency tracking application featuring live data visualizations and portfolio management.',
    tech: ['React', 'API', 'Charts', 'Tailwind'],
    icon: <SiReact className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    liveUrl: 'https://subhajit-crypto-place.netlify.app/',
    githubUrl: 'https://github.com/subhajitm6/crypto-place',
  },
  {
    title: 'Smart Expense',
    subtitle: 'Financial Intelligence',
    description:
      'Intelligent budget tracking system with visual analytics and data persistence for personal management.',
    tech: ['JS', 'Charts', 'LocalDB'],
    icon: <SiJavascript className="w-10 h-10" />,
    color: 'from-spidey-red/40 to-black',
    accentColor: 'text-spidey-red',
    glowColor: 'shadow-spidey-red/20',
    liveUrl: 'https://cash-flow--msubhajit.replit.app',
    githubUrl: '',
  },
  {
    title: 'Payroll System',
    subtitle: 'Enterprise Core',
    description:
      'A robust HR solution featuring automated calculations, role management, and encrypted storage.',
    tech: ['Laravel', 'MySQL', 'PHP'],
    icon: <SiLaravel className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'SEO Platform',
    subtitle: 'Search Mastery',
    description:
      'Fully optimized publishing system with dynamic sitemaps and advanced meta-management protocols.',
    tech: ['Laravel', 'SEO', 'MySQL'],
    icon: <SiMysql className="w-10 h-10" />,
    color: 'from-spidey-red/40 to-black',
    accentColor: 'text-spidey-red',
    glowColor: 'shadow-spidey-red/20',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard = ({ project, i, isInView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.2 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-spidey-red/30 transition-all duration-500 shadow-2xl h-full flex flex-col"
      >
        {/* Card Header/Image Area */}
        <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-8`}>
           <div className="absolute inset-0 bg-web opacity-20 group-hover:opacity-40 transition-opacity" />
           <motion.div 
             style={{ translateZ: 50 }}
             className={`relative z-10 ${project.accentColor} filter drop-shadow-[0_0_15px_currentColor]`}
           >
              {project.icon}
           </motion.div>
           
           {/* Floating Light Effect */}
           <div className="absolute -inset-2 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </div>

        {/* Card Content */}
        <div className="p-8 flex-1 flex flex-col" style={{ translateZ: 30 }}>
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white font-heading group-hover:text-spidey-red transition-colors">
                {project.title}
              </h3>
              <p className={`text-xs font-display tracking-widest uppercase mt-1 ${project.accentColor}`}>
                {project.subtitle}
              </p>
            </div>

            <p className="text-sm text-slate-400 mb-6 leading-relaxed flex-1">
              {project.description}
            </p>

            {/* Tech Cluster */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="text-[9px] font-bold text-slate-500 border border-white/10 px-2 py-0.5 rounded tracking-tighter uppercase group-hover:border-spidey-blue/30 group-hover:text-slate-300 transition-colors">
                  {t}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-4" style={{ translateZ: 40 }}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-spidey py-2 text-[10px] text-center flex items-center justify-center gap-2"
              >
                <HiExternalLink className="w-4 h-4" />
                DEMO
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-outline-spidey py-2 text-[10px] text-center flex items-center justify-center gap-2 border-white/10 text-white hover:border-spidey-blue"
              >
                <HiCode className="w-4 h-4" />
                CODE
              </a>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative bg-spidey-dark overflow-hidden" ref={ref}>
      {/* Background Web pattern corner */}
      <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none">
        <div className="absolute bottom-[-50px] left-[-50px] w-full h-full border-b border-l border-spidey-red rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-display text-spidey-red uppercase tracking-[0.4em] mb-4 block">
            System Builds
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Core <span className="text-spidey-blue">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-red mx-auto mt-6 rounded-full shadow-[0_0_10px_#E11D48]" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
