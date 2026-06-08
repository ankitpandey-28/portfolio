import { useRef, useEffect } from 'react';

const Experience = () => {
  const experienceRef = useRef(null);

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

    const elements = experienceRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const showCertificate = (certificate) => {
    alert(`Certificate: ${certificate.title}\n\nIssued by: ${certificate.issuer}\nDate: ${certificate.date}\n\n${certificate.description}`);
  };

  const experiences = [
    {
      company: "Timken",
      position: "Intern",
      duration: "Industry Exposure Program",
      description: "Gained valuable industry exposure in logistics and process optimization. Developed understanding of enterprise operations, supply chain management, and the importance of efficient systems in large-scale organizations.",
      achievements: [
        "Process Understanding & Analysis",
        "Logistics Operations Insight",
        "Enterprise System Exposure",
        "Professional Workflow Experience"
      ],
      certificate: {
        title: "Internship Completion Certificate",
        issuer: "Timken Engineering",
        date: "2024",
        description: "Successfully completed industry exposure program with focus on logistics and operational excellence."
      }
    }
  ];

  return (
    <section id="experience" className="experience" ref={experienceRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Experience</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item animate-on-scroll">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="experience-card glass-card">
                <h3 className="company-name">{exp.company}</h3>
                <span className="position">{exp.position}</span>
                <span className="duration">{exp.duration}</span>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="achievements">
                  <h4 className="achievements-title">Key Takeaways</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="achievement-item">
                        <span className="achievement-icon">•</span>
                        <span className="achievement-text">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.certificate && (
                  <div className="certificate-section">
                    <button 
                      className="certificate-button"
                      onClick={() => showCertificate(exp.certificate)}
                    >
                      <span className="button-icon">🏆</span>
                      View Certificate
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
