import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import profilePic from '../assets/hero.png';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-spidey-black"
    >
      {/* Cinematic Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-spidey-red/20 blur-[150px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-spidey-blue/20 blur-[150px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Particles/Dust */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-particle-float"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 10 + 's',
              animationDuration: (Math.random() * 10 + 15) + 's'
            }}
          />
        ))}
      </div>

      {/* Subtle Web Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-web" />

      {/* Web Swing Line Component */}
      <motion.div 
        className="absolute top-0 right-[15%] w-[1px] h-[300px] bg-white/20 origin-top animate-web-swing hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="absolute bottom-0 left-[-4px] w-2 h-2 rounded-full bg-spidey-red shadow-[0_0_10px_#E11D48]" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section: Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1">
          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight font-heading"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="text-spidey-red drop-shadow-[0_0_15px_rgba(225,29,72,0.5)]">Subhajit Manna</span>
          </motion.h1>

          {/* Typing Animation Subheading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8 min-h-[40px] flex items-center"
          >
            <h2 className="text-xl sm:text-3xl font-display text-spidey-blue tracking-widest uppercase">
              Full Stack Developer
            </h2>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.6 }}
             className="mb-10"
          >
            <span className="text-lg sm:text-2xl font-light text-slate-300 italic opacity-80">
              <TypeAnimation
                sequence={[
                  'I build fast, scalable, and modern web apps',
                  2000,
                  'Design with speed, deploy with precision',
                  2000,
                  'Crafting digital experiences that stick',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-cursor"
              />
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link to="projects" smooth duration={500} offset={-80} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto btn-spidey group flex items-center justify-center gap-2">
                <span>View Projects</span>
                <HiArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </Link>

            <a href="/resume.pdf" className="w-full sm:w-auto" download>
              <button className="w-full sm:w-auto btn-outline-spidey flex items-center justify-center gap-2">
                <HiDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </a>
          </motion.div>
        </div>

        {/* Right Section: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative order-2 flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Animated Glow Rings */}
            <div className="absolute -inset-4 bg-spidey-red/20 blur-2xl rounded-full animate-pulse-glow opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-spidey-red via-spidey-blue to-spidey-red rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-500 animate-tilt" />
            
            {/* Image Container */}
            <div className="relative bg-spidey-black/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={profilePic} 
                alt="Subhajit Manna" 
                className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-spidey-red" />
            <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-spidey-blue" />
          </div>
        </motion.div>
      </div>

      {/* Corner Web Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none overflow-hidden">
        <div className="absolute top-[-50px] right-[-50px] w-full h-full border-[1px] border-spidey-red rounded-full rotate-45" />
        <div className="absolute top-[-30px] right-[-30px] w-full h-full border-[1px] border-spidey-red rounded-full rotate-45" />
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
      >
        <Link to="about" smooth duration={500}>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-spidey-red rounded-full" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
