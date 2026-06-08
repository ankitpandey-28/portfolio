import { useRef, useEffect } from 'react';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-content">
          <div className="animate-on-scroll">
            <p className="about-intro">
              I am a Computer Science Engineering student working as an AI-Assisted Frontend Developer with a strong academic focus on Cybersecurity.
            </p>
            
            <p className="about-details">
              I specialize in building modern, responsive, and user-centric web interfaces using React and JavaScript, enhanced through AI-assisted workflows that improve efficiency, usability, and design precision.
            </p>
            
            <p className="about-details">
              Alongside frontend development, I apply cybersecurity and networking fundamentals to follow secure coding practices and build reliable, trustworthy web applications.
            </p>
            
            <p className="about-details">
              I enjoy working on real-world projects that combine clean UI design, intelligent features, and security-aware system thinking.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <span className="highlight-text">AI-Enhanced Development</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🔒</span>
                <span className="highlight-text">Security-Conscious Design</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🎨</span>
                <span className="highlight-text">Premium UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
