import { useRef, useEffect } from 'react';

const Projects = () => {
  const projectsRef = useRef(null);

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

    const elements = projectsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "TranspoLink Bharat",
      category: "B2B & B2C Logistics Platform",
      description: "A comprehensive logistics platform connecting shippers with transport providers across India. Features modern dashboards, real-time tracking, and AI-assisted matching algorithms for optimal route and carrier selection.",
      features: [
        "Modern React.js Frontend",
        "AI-Powered Carrier Matching",
        "Real-time Tracking Dashboard",
        "Security-Aware Architecture",
        "Responsive Design",
        "Performance Optimized"
      ],
      technologies: ["React.js", "Tailwind CSS", "AI APIs", "Security Protocols"],
      links: {
        demo: "https://grand-brigadeiros-84dc4b.netlify.app/",
        github: "https://github.com/ankitpandey-28/transpolink-bharat"
      },
      featured: true
    },
    {
      title: "JeevanQR",
      category: "Emergency QR Alert System",
      description: "A life-saving emergency QR system for road accidents in India. Users can create and download emergency QR codes that, when scanned, provide critical emergency information instantly.",
      features: [
        "QR Code Generation",
        "Emergency Information Display",
        "Multi-language Support (Hindi/English)",
        "Mobile-Optimized Design",
        "Instant Access via Multiple Scanners",
        "Download & Print Functionality"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express.js", "QR Code APIs", "JSON Storage", "Vercel", "Google Maps"],
      links: {
        demo: "https://jeevan-qr-5tb1.vercel.app/",
        github: "https://github.com/ankitpandey-28/jeevan-qr"
      },
      featured: false
    }
  ];

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card glass-card ${project.featured ? 'featured' : ''} animate-on-scroll`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {project.featured && (
                <div className="featured-badge">
                  Featured
                </div>
              )}
              
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category">{project.category}</span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4 className="features-title">Key Features</h4>
                <ul className="features-list">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-icon">•</span>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                <h4 className="tech-title">Technologies</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <a 
                  href={project.links.demo} 
                  className="project-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <span className="link-arrow">→</span>
                </a>
                
                <a 
                  href={project.links.github} 
                  className="project-link secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                  <span className="link-arrow">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
