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


      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: 'circOut' }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${scrolled
            ? 'bg-spidey-black/80 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl'
            : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link to="hero" smooth duration={500} className="cursor-pointer group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl font-black font-heading tracking-tighter text-white">
                SUBHAJIT<span className="text-spidey-red group-hover:text-spidey-blue transition-colors">.DEV</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.to}
                        smooth
                        duration={500}
                        offset={-80}
                        spy
                        activeClass="!text-white !bg-spidey-red shadow-[0_0_15px_rgba(225,29,72,0.4)]"
                        className="px-5 py-2 text-[10px] font-bold text-slate-400 hover:text-white cursor-pointer transition-all duration-300 rounded-full uppercase tracking-widest font-display"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            
            <Link
                to="contact"
                smooth
                duration={500}
                className="btn-spidey text-[10px] px-6 py-2 rounded-full cursor-pointer shadow-lg hover:shadow-spidey-red/40"
            >
              SIGNAL ME
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-2xl text-white hover:text-spidey-red transition-colors bg-white/5 rounded-lg border border-white/10"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              className="fixed top-20 right-6 w-64 bg-spidey-dark/95 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl z-[70] md:hidden"
            >
              <div className="p-6 flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.to}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setMobileOpen(false)}
                    className="px-5 py-4 text-xs font-bold text-slate-400 hover:text-white hover:bg-spidey-red/20 rounded-2xl cursor-pointer transition-all border-l-4 border-transparent hover:border-spidey-red uppercase tracking-widest"
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
