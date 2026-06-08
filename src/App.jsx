import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingPage from './components/LoadingPage';
import AccessPage from './components/AccessPage';
import './App.css';

function App() {
  const [appStage, setAppStage] = useState('loading'); // loading, access, main

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Cleanup event listeners
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  const handleLoadingComplete = () => {
    setAppStage('access');
  };

  const handleAccessComplete = () => {
    setAppStage('main');
  };

  const renderCurrentStage = () => {
    switch(appStage) {
      case 'loading':
        return <LoadingPage onComplete={handleLoadingComplete} />;
      case 'access':
        return <AccessPage onStart={handleAccessComplete} />;
      case 'main':
        return (
          <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
          </div>
        );
      default:
        return <LoadingPage onComplete={handleLoadingComplete} />;
    }
  };

  return renderCurrentStage();
}

export default App;
