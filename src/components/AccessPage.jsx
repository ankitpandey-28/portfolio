import { useState, useEffect } from 'react';

const AccessPage = ({ onStart }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Show main content after a brief delay
    const timer = setTimeout(() => {
      setShowMainContent(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    setIsTransitioning(true);
    
    // Start transition animation
    setTimeout(() => {
      onStart();
    }, 1500);
  };

  return (
    <div className="access-page">
      {/* Animated Background */}
      <div className="access-background">
        <div className="access-grid"></div>
        <div className="access-particles">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className="access-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`access-content ${showMainContent ? 'visible' : ''}`}>
        {/* Central Portal */}
        <div className="access-portal">
          <div className="portal-rings">
            <div className="portal-ring ring-outer"></div>
            <div className="portal-ring ring-middle"></div>
            <div className="portal-ring ring-inner"></div>
          </div>
          
          <div className="portal-core">
            <div className="core-glow"></div>
            <div className="core-text">ACCESS</div>
          </div>
        </div>

        {/* Access Message */}
        <div className="access-message">
          <h1 className="access-title">System Access Granted</h1>
          <p className="access-subtitle">You may now enter the quantum interface</p>
        </div>

        {/* Start Button */}
        <div className="access-controls">
          <button 
            className={`access-button ${isTransitioning ? 'transitioning' : ''}`}
            onClick={handleStart}
            disabled={isTransitioning}
          >
            <span className="button-text">
              {isTransitioning ? 'INITIALIZING...' : 'ENTER PORTAL'}
            </span>
            <div className="button-energy"></div>
          </button>
        </div>
      </div>

      {/* Transition Effect */}
      {isTransitioning && (
        <div className="transition-overlay">
          <div className="fractal-tunnel">
            <div className="tunnel-ring"></div>
            <div className="tunnel-ring"></div>
            <div className="tunnel-ring"></div>
            <div className="tunnel-ring"></div>
            <div className="tunnel-ring"></div>
          </div>
          
          <div className="transition-particles">
            {[...Array(30)].map((_, i) => (
              <div 
                key={i} 
                className="transition-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="transition-flash"></div>
        </div>
      )}
    </div>
  );
};

export default AccessPage;
