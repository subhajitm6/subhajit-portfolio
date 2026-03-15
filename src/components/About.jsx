import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiLightningBolt, HiGlobe } from 'react-icons/hi';

const highlights = [
  {
    icon: <HiCode className="w-6 h-6" />,
    title: 'Clean Code',
    desc: 'Writing maintainable, scalable code with best practices',
  },
  {
    icon: <HiLightningBolt className="w-6 h-6" />,
    title: 'Performance',
    desc: 'Optimized applications that load fast and run smooth',
  },
  {
    icon: <HiGlobe className="w-6 h-6" />,
    title: 'Modern Stack',
    desc: 'Using cutting-edge technologies for modern solutions',
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background orb */}
      <div className="glow-orb w-[400px] h-[400px] bg-accent top-[20%] right-[-200px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono text-accent uppercase tracking-[0.3em]">
            &gt; Initializing Bio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 uppercase tracking-tighter">
            Digital <span className="gradient-text">Profile</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-none p-6 sm:p-8 space-y-5 tech-border">
              <p className="text-dark-100 leading-relaxed text-lg">
                I am a dedicated <span className="text-accent font-semibold uppercase tracking-wider">Full Stack Logic specialist</span> focused on 
                constructing modern digital architectures using{' '}
                <span className="text-robotic-green font-medium">React</span>,{' '}
                <span className="text-robotic-purple font-medium">Laravel</span>,{' '}
                <span className="text-robotic-green font-medium">PHP</span>, and{' '}
                <span className="text-robotic-purple font-medium">MySQL</span>.
              </p>
              <p className="text-dark-200 leading-relaxed">
                I specialize in crafting scalable web applications with clean architecture. 
                From designing intuitive user interfaces to building robust backend systems, 
                I focus on delivering complete solutions that solve real problems.
              </p>
              <p className="text-dark-200 leading-relaxed">
                My passion lies in writing clean, maintainable code, optimizing application 
                performance, and creating modern UI experiences. I'm constantly learning new 
                technologies and best practices to stay at the forefront of web development.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
                {[
                  { num: '4+', label: 'Projects' },
                  { num: '1+', label: 'Year Exp.' },
                  { num: '10+', label: 'Tech Skills' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-none bg-accent/5 border border-accent/10">
                    <div className="text-2xl font-bold gradient-text">{stat.num}</div>
                    <div className="text-[10px] uppercase tracking-widest text-dark-300 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass rounded-none p-5 cursor-default group border-l-4 border-accent"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-none bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-dark-300">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
