import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="relative border-t border-dark-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold gradient-text font-mono">&lt; Subhajit /&gt;</span>
            <p className="text-sm text-dark-400 mt-1">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              { icon: <FaGithub />, href: 'https://github.com/subhajitm6', label: 'GitHub' },
              { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/subhajit-manna-1608651a9/', label: 'LinkedIn' },
              { icon: <FaInstagram />, href: 'https://www.instagram.com/hiii_subha/', label: 'Instagram' },
              { icon: <FaEnvelope />, href: 'mailto:subhajitmanna367@gmail.com', label: 'Email' },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-xl glass-light flex items-center justify-center text-dark-300 hover:text-accent-light hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-dark-700/30 text-center">
          <p className="text-sm text-dark-400 flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Subhajit Manna. Crafted with
            <HiHeart className="w-4 h-4 text-red-400" />
            and code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
