import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-accent top-[-100px] left-[-100px] animate-float" />
        <div className="glow-orb w-[400px] h-[400px] bg-robotic-green top-[60%] right-[-80px] animate-float-slow" />
        <div className="glow-orb w-[300px] h-[300px] bg-robotic-purple bottom-[-50px] left-[40%] animate-float-slower" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid opacity-40" />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-dark-900/50 to-dark-900" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none glass tech-border mb-8"
        >
          <span className="w-2 h-2 bg-robotic-green rounded-none animate-pulse shadow-[0_0_5px_#39ff14]" />
          <span className="text-xs uppercase tracking-[0.2em] text-accent font-bold">System Status: ONLINE</span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">Subhajit</span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 min-h-[60px] sm:min-h-[40px] flex items-center justify-center px-2"
        >
          <span className="text-base sm:text-2xl md:text-3xl font-mono text-accent-light px-2 font-medium text-center">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React & Laravel Developer',
                2000,
                'UI/UX Enthusiast',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-lg sm:text-xl text-dark-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, scalable web applications with clean architecture
          and beautiful user experiences.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 w-full"
        >
          <Link to="projects" smooth duration={500} offset={-80} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto justify-center btn-primary text-white flex items-center gap-2 group">
              <span>View Projects</span>
              <HiArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </Link>

          <a href="/resume.pdf" className="w-full sm:w-auto justify-center btn-outline flex items-center gap-2" download>
            <HiDownload className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          <Link to="contact" smooth duration={500} offset={-80} className="w-full sm:w-auto">
            <button className="w-full sm:w-auto justify-center btn-outline flex items-center gap-2 !border-robotic-green/40 !text-robotic-green hover:!bg-robotic-green/10">
              <HiMail className="w-4 h-4" />
              <span>Initialize COMMS</span>
            </button>
          </Link>
        </motion.div>

        {/* Tech Stack Mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-6 flex-wrap"
        >
          <span className="text-sm text-dark-400 uppercase tracking-wider">Tech Stack</span>
          <div className="h-px w-8 bg-dark-500" />
          {['React', 'Laravel', 'JavaScript', 'PHP', 'MySQL', 'Tailwind'].map((tech) => (
            <span key={tech} className="text-sm text-dark-300 font-mono hover:text-accent-light transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link to="about" smooth duration={500} className="cursor-pointer">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-9 rounded-none border-2 border-accent/40 flex justify-center pt-2"
          >
            <div className="w-1 h-3 bg-accent rounded-none" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
