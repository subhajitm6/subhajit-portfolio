import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiReact, SiLaravel, SiJavascript, SiMysql } from 'react-icons/si';

const projects = [
  {
    title: 'Crypto Tracker',
    subtitle: 'Real-time Crypto Market Dashboard',
    description:
      'A modern cryptocurrency tracking application that provides real-time market data, price charts, and portfolio insights using the CoinGecko API with beautiful data visualizations.',
    tech: ['React', 'CoinGecko API', 'React Google Charts', 'CSS3'],
    icon: <SiReact className="w-8 h-8" />,
    gradient: 'from-blue-500/20 to-cyan/20',
    accentColor: 'text-cyan-light',
    features: ['Real-time price tracking', 'Interactive charts', 'Market analytics', 'Responsive design'],
    liveUrl: '#',
    githubUrl: 'https://github.com/subhajitm6/crypto-place',
  },
  {
    title: 'Smart Expense Tracker',
    subtitle: 'Budget Tracking Dashboard',
    description:
      'An intelligent expense tracking application with visual analytics, budget goals, and spending insights. Built with vanilla JavaScript for maximum performance.',
    tech: ['JavaScript', 'LocalStorage', 'Chart.js', 'CSS3'],
    icon: <SiJavascript className="w-8 h-8" />,
    gradient: 'from-yellow-500/20 to-orange-500/20',
    accentColor: 'text-yellow-400',
    features: ['Budget tracking', 'Expense analytics', 'Charts & graphs', 'Data persistence'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Payroll Management System',
    subtitle: 'Enterprise HR Solution',
    description:
      'A comprehensive payroll management system with role-based access control, automated salary calculations, leave management, and email notifications via PHPMailer.',
    tech: ['Laravel', 'MySQL', 'PHPMailer', 'Bootstrap'],
    icon: <SiLaravel className="w-8 h-8" />,
    gradient: 'from-red-500/20 to-rose-500/20',
    accentColor: 'text-red-400',
    features: ['Role-based auth', 'Leave management', 'Salary slip generation', 'Email notifications'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'SEO Blog Platform',
    subtitle: 'SEO Optimized Publishing Platform',
    description:
      'A fully SEO-optimized blog platform built with Laravel, featuring structured content, meta tag management, dynamic sitemaps, and robots.txt configuration.',
    tech: ['Laravel', 'MySQL', 'SEO', 'Blade'],
    icon: <SiMysql className="w-8 h-8" />,
    gradient: 'from-accent/20 to-purple-500/20',
    accentColor: 'text-accent-light',
    features: ['SEO optimization', 'Meta tags', 'Sitemap generation', 'Structured content'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard = ({ project, i, isInView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.15 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="glass rounded-2xl overflow-hidden group hover:border-accent/30 transition-colors duration-500 relative isolate"
    >
      <div className="h-full w-full relative z-10 bg-dark-800/50">
        {/* Card Header with Gradient */}
        <div className={`h-36 bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-center justify-center`}>
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          {/* Floating Icon */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className={`relative z-10 ${project.accentColor} opacity-60 group-hover:opacity-100 transition-opacity`}
          >
            {project.icon}
          </motion.div>
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-dark-900/0 group-hover:bg-dark-900/20 transition-all duration-500" />
        </div>

        {/* Card Body */}
        <div className="p-6 relative z-20">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
              {project.title}
            </h3>
            <p className={`text-sm ${project.accentColor} font-medium mt-0.5`}>
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm text-dark-300 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-1.5 mb-4 relative z-20">
            {project.features.map((f) => (
              <span key={f} className="text-xs text-dark-300 flex items-center gap-1.5">
                <span className="w-1 h-1 bg-accent rounded-full" />
                {f}
              </span>
            ))}
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2 mb-5 relative z-20">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-mono bg-white/5 text-dark-200 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 relative z-50">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-accent/10 text-accent-light text-sm font-medium hover:bg-accent/20 transition-colors cursor-pointer"
            >
              <HiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-dark-200 text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer"
            >
              <HiCode className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[500px] h-[500px] bg-accent left-[-200px] bottom-[10%]" />

      <div className="max-w-6xl mx-auto relative cursor-none sm:cursor-auto" style={{ perspective: '1000px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent-light uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
          <p className="text-dark-300 mt-4 max-w-xl mx-auto">
            A selection of projects that showcase my skills in full-stack development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6" style={{ perspective: '1000px' }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
