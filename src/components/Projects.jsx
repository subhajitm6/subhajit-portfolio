import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiCode, HiCheck } from 'react-icons/hi';
import { SiReact, SiLaravel, SiJavascript, SiFastapi, SiGithub } from 'react-icons/si';
import { HiLightningBolt, HiDocumentReport } from 'react-icons/hi';

const projects = [
  {
    title: 'SaaS API Test Automation Platform',
    subtitle: 'Automated Testing & Analytics',
    description:
      'A comprehensive SaaS platform that automates API testing using Swagger definitions, tracking real-time execution, metrics, and automated reporting.',
    tech: ['Laravel', 'React.js', 'Swagger', 'MySQL'],
    icon: <SiLaravel className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    highlights: [
      'Swagger-based automated test generation reducing manual effort by 70%',
      'Real-time execution monitoring, pass/fail analytics & latency tracking',
      'Automated PDF report export & reusable modular UI components',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'HR & Payroll Automation Portal',
    subtitle: 'Enterprise Core System',
    description:
      'Role-based payroll and personnel workflow system automating employee records, leaves, salary calculations, and compliance reporting.',
    tech: ['Laravel', 'MySQL', 'AJAX', 'jQuery'],
    icon: <SiLaravel className="w-10 h-10" />,
    color: 'from-spidey-red/40 to-black',
    accentColor: 'text-spidey-red',
    glowColor: 'shadow-spidey-red/20',
    highlights: [
      'Automated salary, bonus, and deduction logic cutting manual effort by 60%',
      'Automated payslip generation with email notifications & monthly digests',
      'AJAX live filtering, dashboards, and instant PDF report exports',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Retail Sales & Order Management System',
    subtitle: 'Operations & Commerce Platform',
    description:
      'Centralized operations hub handling sales orders, product inventories, automated billing, and customer loyalty retention.',
    tech: ['Laravel', 'MySQL', 'AJAX', 'jQuery'],
    icon: <SiLaravel className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    highlights: [
      'Centralized order & product workflows reducing admin overhead by 50%',
      'Automated invoice generation & trigger-based email notifications',
      'Real-time sales performance metrics & customer loyalty tracking',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Stock Price Predictor Web App',
    subtitle: 'Market Forecasting Platform',
    description:
      'Predictive analytics application that forecasts stock price trends using historical market datasets with responsive visualization dashboards.',
    tech: ['React.js', 'Tailwind CSS', 'Python', 'FastAPI', 'PostgreSQL'],
    icon: <SiFastapi className="w-10 h-10" />,
    color: 'from-spidey-red/40 to-black',
    accentColor: 'text-spidey-red',
    glowColor: 'shadow-spidey-red/20',
    highlights: [
      'Automated data cleaning & pipeline reducing prep effort by 50%',
      'Interactive visual charts for market trajectories and forecast trends',
      'Strict input validation interface cutting user errors by 40%',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'Digital Inspection & Document Management',
    subtitle: 'Field Workflow Automation',
    description:
      'Model-driven inspection form application with predefined rules, centralized document storage, and structured verification workflows.',
    tech: ['Power Apps', 'SharePoint', 'Dataverse', 'Workflows'],
    icon: <HiDocumentReport className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    highlights: [
      'Model-driven inspection forms cutting manual data entry by 50%',
      'Centralized SharePoint integration cutting document retrieval time by 40%',
      'Standardized validation controls cutting entry inaccuracies by 45%',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    title: 'GitHub Profile Finder',
    subtitle: 'Developer Tool & Search Platform',
    description:
      'A responsive web application built with React.js and Tailwind CSS that allows users to search for GitHub usernames and explore public developer profiles and repository statistics using the GitHub REST API.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript (ES6+)', 'GitHub REST API'],
    icon: <SiGithub className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    highlights: [
      'Instant username search fetching real-time public GitHub developer profiles',
      'Displays avatar, bio, follower/following counts, and public repositories',
      'Clean responsive layout with integrated loading & error state handling',
    ],
    liveUrl: 'https://github-profile-finder-vuxn.onrender.com/',
    githubUrl: '',
  },
  {
    title: 'Crypto Tracker',
    subtitle: 'Market Intelligence Dashboard',
    description:
      'Real-time cryptocurrency tracking application featuring live data visualizations, active market movements, and portfolio tracking.',
    tech: ['React.js', 'Tailwind CSS', 'REST API', 'Charts'],
    icon: <SiReact className="w-10 h-10" />,
    color: 'from-spidey-red/40 to-black',
    accentColor: 'text-spidey-red',
    glowColor: 'shadow-spidey-red/20',
    highlights: [
      'Live crypto ticker feeds with interactive pricing charts',
      'Clean responsive layout with instant search and trending metrics',
    ],
    liveUrl: 'https://subhajit-crypto-place.netlify.app/',
    githubUrl: 'https://github.com/subhajitm6/crypto-place',
  },
  {
    title: 'Smart Expense (Cash Flow)',
    subtitle: 'Financial Intelligence Tool',
    description:
      'Interactive budget tracking application with visual breakdown analytics, category insights, and local data persistence.',
    tech: ['JavaScript', 'Charts', 'Tailwind CSS', 'LocalDB'],
    icon: <SiJavascript className="w-10 h-10" />,
    color: 'from-spidey-blue/40 to-black',
    accentColor: 'text-spidey-blue',
    glowColor: 'shadow-spidey-blue/20',
    highlights: [
      'Income/expense categorization and visual budgetary charts',
      'Persistent client state and transaction history analytics',
    ],
    liveUrl: 'https://cash-flow--msubhajit.replit.app',
    githubUrl: '',
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

  const hasLinks = Boolean(project.liveUrl || project.githubUrl);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: i * 0.15 }}
      className="group relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="glass-card rounded-3xl overflow-hidden border border-white/5 hover:border-spidey-red/30 transition-all duration-500 shadow-2xl h-full flex flex-col"
      >
        {/* Card Header Area */}
        <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center p-6`}>
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
        <div className="p-7 flex-1 flex flex-col justify-between" style={{ translateZ: 30 }}>
            <div>
              <div className="mb-3">
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-spidey-red transition-colors">
                  {project.title}
                </h3>
                <p className={`text-[11px] font-display tracking-widest uppercase mt-1 ${project.accentColor}`}>
                  {project.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ul className="space-y-1.5 mb-5 bg-black/20 p-3 rounded-xl border border-white/5">
                  {project.highlights.map((hl, hlIdx) => (
                    <li key={hlIdx} className="text-xs text-slate-400 flex items-start gap-2">
                      <span className="text-spidey-blue mt-0.5 flex-shrink-0">
                        <HiCheck className="w-3.5 h-3.5" />
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tech Cluster */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md tracking-tight uppercase group-hover:border-spidey-blue/40 group-hover:text-white transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: only render valid links */}
            {hasLinks ? (
              <div className="flex gap-3 pt-3 border-t border-white/5" style={{ translateZ: 40 }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-spidey py-2 text-[11px] text-center flex items-center justify-center gap-1.5"
                  >
                    <HiExternalLink className="w-3.5 h-3.5" />
                    LIVE DEMO
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-outline-spidey py-2 text-[11px] text-center flex items-center justify-center gap-1.5 border-white/10 text-white hover:border-spidey-blue"
                  >
                    <HiCode className="w-3.5 h-3.5" />
                    SOURCE
                  </a>
                )}
              </div>
            ) : (
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span className="italic flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-spidey-blue" />
                  Enterprise / Internal System
                </span>
                <span className="font-mono text-[10px] uppercase text-slate-400">Validated</span>
              </div>
            )}
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
