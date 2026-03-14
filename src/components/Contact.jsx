import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';

const contactInfo = [
  {
    icon: <HiMail className="w-5 h-5" />,
    label: 'Email',
    value: 'subhajitmanna367@gmail.com',
    href: 'mailto:subhajitmanna367@gmail.com',
  },
  {
    icon: <HiPhone className="w-5 h-5" />,
    label: 'Phone',
    value: '+91 8910443107',
    href: 'tel:+918910443107',
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    label: 'LinkedIn',
    value: 'Subhajit Manna',
    href: 'https://www.linkedin.com/in/subhajit-manna-1608651a9/',
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:subhajitmanna367@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="glow-orb w-[400px] h-[400px] bg-accent right-[-150px] top-[20%]" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-mono text-accent-light uppercase tracking-widest">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            Let's <span className="gradient-text">connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-cyan mx-auto rounded-full" />
          <p className="text-dark-300 mt-4 max-w-lg mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-dark-200 mb-2 block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-white placeholder-dark-400 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm text-dark-200 mb-2 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-white placeholder-dark-400 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm text-dark-200 mb-2 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-dark-700/50 border border-dark-500/50 text-white placeholder-dark-400 focus:border-accent/50 focus:outline-none focus:ring-1 focus:ring-accent/30 transition-all text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-white w-full !py-3.5 text-base"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === 'LinkedIn' ? '_blank' : undefined}
                rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-accent/30 transition-all duration-300 block"
              >
                <div className="p-3 rounded-lg bg-accent/10 text-accent-light group-hover:bg-accent/20 transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-dark-400 uppercase tracking-wider">{info.label}</p>
                  <p className="text-sm text-white font-medium mt-0.5">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="glass rounded-xl p-5 flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent-light">
                <HiLocationMarker className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-dark-400 uppercase tracking-wider">Location</p>
                <p className="text-sm text-white font-medium mt-0.5">India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
