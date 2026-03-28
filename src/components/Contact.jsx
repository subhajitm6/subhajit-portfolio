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
    <section id="contact" className="section-padding relative bg-spidey-black overflow-hidden" ref={ref}>
      {/* Background patterns */}
      <div className="absolute inset-0 bg-web opacity-5 pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-spidey-red/5 blur-[120px] rounded-full animate-pulse-glow" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-spidey-blue uppercase tracking-[0.4em] mb-4 block">
            Signal Channel
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Establish <span className="text-spidey-red">Link</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-blue mx-auto mt-6 rounded-full shadow-[0_0_10px_#1D4ED8]" />
          <p className="text-slate-400 mt-6 max-w-lg mx-auto text-sm italic opacity-80">
            Synchronize projects or initiate collaborative protocols. Responsive 24/7.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 sm:p-10 space-y-6 border border-white/5 relative overflow-hidden group">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Full Name"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/5 text-white placeholder-slate-600 focus:border-spidey-red/50 focus:outline-none focus:ring-1 focus:ring-spidey-red/20 transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Frequency</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email Address"
                    className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/5 text-white placeholder-slate-600 focus:border-spidey-red/50 focus:outline-none focus:ring-1 focus:ring-spidey-red/20 transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Transmission</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Your message goes here..."
                  className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-white/5 text-white placeholder-slate-600 focus:border-spidey-red/50 focus:outline-none focus:ring-1 focus:ring-spidey-red/20 transition-all text-sm resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-spidey w-full py-4 text-base shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)] transition-all"
              >
                Send Transmission
              </motion.button>
              
              {/* Web corner Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 pointer-events-none">
                 <div className="absolute top-[-20px] right-[-20px] w-full h-full border-t border-r border-spidey-red rounded-tr-[50px]" />
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.label === 'LinkedIn' ? '_blank' : undefined}
                rel={info.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                whileHover={{ scale: 1.05, x: 10 }}
                className="glass rounded-2xl p-6 flex items-center gap-5 group border border-white/5 hover:border-spidey-blue/40 transition-all duration-300 shadow-xl"
              >
                <div className="p-4 rounded-xl bg-spidey-blue/10 text-spidey-blue group-hover:bg-spidey-blue group-hover:text-white transition-all shadow-lg group-hover:shadow-spidey-blue/40">
                  {info.icon}
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">{info.label}</p>
                  <p className="text-sm text-white font-medium mt-1 truncate">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="glass rounded-2xl p-6 flex items-center gap-5 border border-white/5 shadow-xl bg-slate-900/40"
            >
              <div className="p-4 rounded-xl bg-spidey-red/10 text-spidey-red shadow-lg">
                <HiLocationMarker className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Location</p>
                <p className="text-sm text-white font-medium mt-1">West Bengal, India</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
