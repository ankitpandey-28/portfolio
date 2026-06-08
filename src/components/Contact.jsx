import { useRef, useEffect } from 'react';

const Contact = () => {
  const contactRef = useRef(null);

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

    const elements = contactRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      type: "email",
      label: "Personal Email",
      value: "ankitpandey2809@gmail.com",
      icon: "✉",
      link: "https://mail.google.com/mail/?view=cm&to=ankitpandey2809@gmail.com"
    },
    {
      type: "email",
      label: "University Email", 
      value: "apandey61_be24@thapar.edu",
      icon: "🎓",
      link: "mailto:apandey61_be24@thapar.edu"
    },
    {
      type: "github",
      label: "GitHub",
      value: "github.com/ankitpandey-28",
      icon: "⚡",
      link: "https://github.com/ankitpandey-28"
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      value: "linkedin.com/in/ankitpandey28",
      icon: "💼",
      link: "https://linkedin.com/in/ankitpandey28"
    }
  ];

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <div className="section-header animate-on-scroll">
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="contact-content">
          <div className="animate-on-scroll">
            <p className="contact-intro">
              I'm always interested in hearing about new opportunities, 
              exciting projects, or just having a conversation about technology, 
              AI, and cybersecurity.
            </p>
            
            <p className="contact-outro">
              Feel free to reach out through any of the channels below.
            </p>
          </div>
          
          <div className="contact-methods">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="contact-card glass-card animate-on-scroll"
                onClick={() => {
                  console.log('Card clicked:', info.link);
                  if (info.type === 'email') {
                    if (info.link.includes('gmail.com')) {
                      window.open(info.link, '_blank');
                    } else {
                      window.location.href = info.link;
                    }
                  } else {
                    window.open(info.link, '_blank', 'noopener,noreferrer');
                  }
                }}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  cursor: 'pointer'
                }}
              >
                <div className="card-icon">{info.icon}</div>
                <div className="card-content">
                  <h3 className="contact-label">{info.label}</h3>
                  <div className="contact-value">
                    {info.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
