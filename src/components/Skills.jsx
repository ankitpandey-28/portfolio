import { useRef, useEffect } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

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

    const elements = skillsRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        "HTML5 & Semantic Markup",
        "CSS3 & Tailwind CSS",
        "JavaScript (ES6+)",
        "React.js & Hooks",
        "Responsive Design",
        "UI/UX Principles",
        "Animation & Transitions"
      ]
    },
    {
      title: "AI-Assisted Development",
      icon: "🤖",
      skills: [
        "AI-Powered Code Generation",
        "AI Tools Integration",
        "Prompt Engineering",
        "AI API Integration",
        "Automated Workflows",
        "Code Optimization with AI",
        "AI-Assisted Debugging"
      ]
    },
    {
      title: "Cybersecurity & Networking",
      icon: "🔐",
      skills: [
        "Security Fundamentals",
        "Network Protocols",
        "Authentication Systems",
        "Secure Communication",
        "Threat Awareness",
        "Data Protection",
        "Security Best Practices"
      ]
    },
    {
      title: "Cyber Forensics",
      icon: "🔍",
      skills: [
        "Foundational Concepts",
        "Evidence Collection",
        "Analysis Techniques",
        "Documentation Skills",
        "Tool Familiarity",
        "Investigation Methods"
      ]
    }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card glass-card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-header">
                <span className="card-icon">{category.icon}</span>
                <h3 className="card-title">{category.title}</h3>
              </div>
              
              <ul className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <span className="skill-bullet"></span>
                    <span className="skill-text">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
