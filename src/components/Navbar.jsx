import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
        <motion.div
          className="h-full bg-gradient-to-r from-accent via-robotic-purple to-robotic-green shadow-[0_0_10px_rgba(0,242,255,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'glass-strong shadow-lg shadow-black/20 py-3'
            : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth duration={500} className="cursor-pointer">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold gradient-text"
            >
              [ SUBHAJIT.SYS ]
            </motion.span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                spy
                activeClass="!text-accent !bg-accent/10 border-b-2 border-accent"
                className="px-4 py-2 text-sm text-dark-200 hover:text-white cursor-pointer transition-colors duration-300 rounded-none hover:bg-accent/5 uppercase tracking-tighter font-medium"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-3 btn-primary text-white text-sm !px-5 !py-2"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl text-dark-100 hover:text-white transition-colors"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass-strong mt-2 mx-4 rounded-none border border-accent/30 overflow-hidden"
            >
              <div className="py-4 px-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm text-dark-200 hover:text-white hover:bg-accent/10 rounded-none cursor-pointer transition-all border-l-2 border-transparent hover:border-accent uppercase tracking-widest"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
