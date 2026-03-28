import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/ui/ScrollProgress';
import MovingSpider from './components/ui/MovingSpider';
import SpiderWebs from './components/ui/SpiderWebs';

function App() {
  useEffect(() => {
    const handleClick = (e) => {
      const pulse = document.createElement('div');
      pulse.className = 'click-pulse';
      pulse.style.left = `${e.clientX}px`;
      pulse.style.top = `${e.clientY}px`;
      document.body.appendChild(pulse);
      
      setTimeout(() => {
        pulse.remove();
      }, 500);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="relative bg-spidey-dark min-h-screen overflow-x-hidden transition-colors duration-500">
      <CustomCursor />
      <ScrollProgress />
      <SpiderWebs />
      <MovingSpider />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      
      {/* Background Web Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-web z-0" />
      {/* Glow effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-spidey-red/5 blur-[120px] rounded-full animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-spidey-blue/5 blur-[120px] rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
}

export default App;
