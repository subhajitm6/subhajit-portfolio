import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-spidey-black py-12 border-t border-white/5 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-web opacity-5 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="text-center md:text-left group">
            <span className="text-2xl font-bold font-heading text-white tracking-widest group-hover:text-spidey-red transition-colors">
              SUBHAJIT<span className="text-spidey-blue">.DEV</span>
            </span>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-slate-500 mt-2">
              Logic Unit: <span className="text-spidey-red animate-pulse">Optimal</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: <FaGithub />, href: 'https://github.com/subhajitm6', label: 'GitHub', color: 'hover:text-spidey-red hover:shadow-spidey-red/40' },
              { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/subhajit-manna-1608651a9/', label: 'LinkedIn', color: 'hover:text-spidey-blue hover:shadow-spidey-blue/40' },
              { icon: <FaInstagram />, href: 'https://www.instagram.com/hiii_subha/', label: 'Instagram', color: 'hover:text-spidey-red hover:shadow-spidey-red/40' },
              { icon: <FaEnvelope />, href: 'mailto:subhajitmanna367@gmail.com', label: 'Email', color: 'hover:text-spidey-blue hover:shadow-spidey-blue/40' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-12 h-12 rounded-xl glass-card flex items-center justify-center text-slate-400 border border-white/5 transition-all duration-300 hover:-translate-y-2 shadow-lg ${s.color}`}
              >
                <div className="text-xl">{s.icon}</div>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-500 font-display tracking-widest uppercase">
            © {new Date().getFullYear()} Subhajit Manna • Developed for the <span className="text-spidey-red">Heroic</span> Web
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
