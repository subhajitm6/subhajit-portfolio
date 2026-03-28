import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi';

const highlights = [
  {
    icon: <HiCode className="w-6 h-6" />,
    title: 'Clean Architecture',
    desc: 'Building scalable and maintainable web systems with precision.',
  },
  {
    icon: <HiLightningBolt className="w-6 h-6" />,
    title: 'High Performance',
    desc: 'Optimizing for speed and efficiency across all platforms.',
  },
  {
    icon: <HiGlobe className="w-6 h-6" />,
    title: 'Modern Ecosystem',
    desc: 'Leveraging the latest technologies to solve complex problems.',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-spidey-dark" ref={ref}>
      {/* Background patterns */}
      <div className="absolute inset-0 bg-web opacity-5 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-spidey-blue/5 blur-[120px] rounded-full animate-pulse-glow" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40%] h-[40%] bg-spidey-red/5 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-display text-spidey-red uppercase tracking-[0.4em] mb-4 block">
            The Origin Story
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white">
            Digital <span className="text-spidey-blue">Specialist</span>
          </h2>
          <div className="w-24 h-1 bg-spidey-red mx-auto mt-6 rounded-full shadow-[0_0_10px_#E11D48]" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8 sm:p-10 border-l-4 border-spidey-red">
              <p className="text-slate-100 leading-relaxed text-xl mb-6">
                I am <span className="text-spidey-red font-bold">Subhajit Manna</span>, a Full Stack Developer 
                driven by the responsibility of crafting high-impact digital experiences. 
                Like a well-woven web, I ensure every line of code is connected, strong, and purposeful.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                With a deep focus on <span className="text-spidey-blue font-medium">React</span> and <span className="text-spidey-blue font-medium">Node.js</span>, 
                I bridge the gap between creative design and technical excellence. 
                My mission is to build applications that are not just functional, but feel alive and responsive to every interaction.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Whether it's architecting a robust backend or polishing a fluid UI, 
                I bring the same intensity and precision to every project. 
                I believe that with great code comes great user experience.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8">
                {[
                  { num: '4+', label: 'Strategic Projects' },
                  { num: '1+', label: 'Year Analysis' },
                  { num: '10+', label: 'Core Skills' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center group p-4 rounded-xl bg-slate-900/40 border border-white/5 hover:border-spidey-blue/30 transition-all duration-300">
                    <div className="text-3xl font-bold text-spidey-red drop-shadow-[0_0_8px_rgba(225,29,72,0.4)] transition-all group-hover:scale-110">{stat.num}</div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 mt-2 font-display">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
                whileHover={{ scale: 1.05, translateX: 10 }}
                className="glass rounded-xl p-6 cursor-default group border border-white/5 hover:border-spidey-blue/40 transition-all shadow-xl"
              >
                <div className="flex items-center gap-5">
                  <div className="p-3 rounded-lg bg-spidey-blue/10 text-spidey-blue group-hover:bg-spidey-blue group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-spidey-blue/40">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 group-hover:text-spidey-blue transition-colors">{item.title}</h3>
                    <p className="text-sm text-slate-400 leading-snug">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Subtle Web Texture Corner */}
      <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 opacity-10 pointer-events-none rotate-12">
        <div className="absolute inset-0 border-[1px] border-spidey-blue rounded-full scale-150" />
        <div className="absolute inset-0 border-[1px] border-spidey-blue rounded-full scale-125" />
        <div className="absolute inset-0 border-[1px] border-spidey-blue rounded-full scale-100" />
      </div>
    </section>
  );
};

export default About;
