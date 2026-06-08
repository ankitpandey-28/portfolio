import { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const [isLanding, setIsLanding] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Trigger landing animation after a short delay
    const landingTimer = setTimeout(() => {
      setIsLanding(false);
      setShowContent(true);
    }, 3500);

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      if (heroRef.current) {
        const yPos = -(scrolled * 0.4);
        heroRef.current.style.transform = `translateY(${yPos}px)`;
      }
    };

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      
      const moveX = (clientX - centerX) / 50;
      const moveY = (clientY - centerY) / 50;
      
      heroRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(landingTimer);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Landing Animation Overlay */}
      {isLanding && (
        <div className="landing-overlay">
          {/* Corner Content */}
          <div className="corner-content corner-tl">
            <div className="corner-text">ANKIT</div>
            <div className="corner-line"></div>
          </div>
          
          <div className="corner-content corner-tr">
            <div className="corner-text">PANDEY</div>
            <div className="corner-line"></div>
          </div>
          
          <div className="corner-content corner-bl">
            <div className="corner-text">DEVELOPER</div>
            <div className="corner-line"></div>
          </div>
          
          <div className="corner-content corner-br">
            <div className="corner-text">CYBERSECURITY</div>
            <div className="corner-line"></div>
          </div>

          {/* Electrical Sparks */}
          <div className="electrical-sparks">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="spark"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Merge Effect */}
          <div className="merge-effect">
            <div className="merge-ring"></div>
            <div className="merge-flash"></div>
          </div>
        </div>
      )}

      <div className={`hero-content ${showContent ? 'visible' : ''}`} ref={heroRef}>
        <h1 className="hero-title">
          <span className="title-line">Ankit</span>
          <span className="title-line">Pandey</span>
        </h1>
        
        <div className="hero-subtitle">
          <span className="subtitle-text">AI-Assisted Frontend Developer</span>
          <span className="subtitle-divider">•</span>
          <span className="subtitle-text">Cybersecurity Student</span>
        </div>
        
        <p className="hero-tagline">
          Crafting digital experiences with intelligence and security at core
        </p>
        
        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
            <span className="link-arrow">→</span>
          </button>
          
          <a 
            href="/Ankit_job_resume.pdf" 
            download="Ankit_Pandey_Resume.pdf"
            className="btn btn-secondary"
          >
            Download Resume
            <span className="link-arrow">→</span>
          </a>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
