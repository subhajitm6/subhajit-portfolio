import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import CursorGlow from './components/ui/CursorGlow';
import Background3D from './components/ui/Background3D';

function App() {
  return (
    <div className="relative bg-dark-900 min-h-screen">
      <Background3D />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
