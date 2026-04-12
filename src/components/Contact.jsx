import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full identity name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Transmission frequency (email) is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid frequency format (email)';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Transmission content (message) is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field as user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
    // Clear status message when user starts typing again
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Initiating transmission...' });

    // Use environment variables for EmailJS
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debugging: Log configuration status (avoiding sensitive values in clear text if possible, but identifying if they exist)
    console.log('--- EmailJS Handshake ---');
    console.log('Service ID status:', serviceID ? 'Loaded' : 'Missing');
    console.log('Template ID status:', templateID ? 'Loaded' : 'Missing');
    console.log('Public Key status:', publicKey ? 'Loaded' : 'Missing');

    // Check for missing environment variables
    if (!serviceID || !templateID || !publicKey) {
      console.error('Critical Error: EmailJS environment variables are missing!', {
        serviceID: serviceID ? 'PRESENT' : 'MISSING',
        templateID: templateID ? 'PRESENT' : 'MISSING',
        publicKey: publicKey ? 'PRESENT' : 'MISSING',
      });
      setStatus({ type: 'error', message: 'Configuration error. Transmission aborted.' });
      setIsSubmitting(false);
      return;
    }

    // Parameters MUST match EmailJS template variables exactly
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      to_email: 'subhajitmanna367@gmail.com',
    };

    console.log('Sending payload:', templateParams);

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('TRANSMISSION SUCCESSFUL:', response.status, response.text);
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('TRANSMISSION FAILED:', err);
        // Log detailed error for debugging 422
        if (err.text) {
          console.error('EmailJS Error Details:', err.text);
        }
        setStatus({ type: 'error', message: 'Message failed to send. Please check your connection.' });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
                    placeholder="Full Name"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-900/50 border ${errors.name ? 'border-spidey-red/70' : 'border-white/5'} text-white placeholder-slate-600 focus:border-spidey-red/50 focus:outline-none focus:ring-1 focus:ring-spidey-red/20 transition-all text-sm`}
                  />
                  {errors.name && <p className="text-spidey-red text-[10px] uppercase tracking-wider ml-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Frequency</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-5 py-4 rounded-xl bg-slate-900/50 border ${errors.email ? 'border-spidey-red/70' : 'border-white/5'} text-white placeholder-slate-600 focus:border-spidey-red/50 focus:outline-none focus:ring-1 focus:ring-spidey-red/20 transition-all text-sm`}
                  />
                  {errors.email && <p className="text-spidey-red text-[10px] uppercase tracking-wider ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Transmission</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your message goes here..."
                  className={`w-full px-5 py-4 rounded-xl bg-slate-900/50 border ${errors.message ? 'border-spidey-red/70' : 'border-white/5'} text-white placeholder-slate-600 focus:border-spidey-red/50 focus:outline-none focus:ring-1 focus:ring-spidey-red/20 transition-all text-sm resize-none`}
                />
                {errors.message && <p className="text-spidey-red text-[10px] uppercase tracking-wider ml-1">{errors.message}</p>}
              </div>

              {status.message && (
                <div className={`text-center py-2 px-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' :
                  status.type === 'error' ? 'bg-spidey-red/10 text-spidey-red border border-spidey-red/20' :
                    'bg-spidey-blue/10 text-spidey-blue border border-spidey-blue/20'
                  }`}>
                  {status.message}
                </div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`btn-spidey w-full py-4 text-base shadow-[0_0_20px_rgba(225,29,72,0.3)] transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed grayscale' : 'hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]'}`}
              >
                {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
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
