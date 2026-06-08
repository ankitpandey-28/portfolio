import { useEffect, useState } from 'react';

const LoadingPage = ({ onComplete }) => {
  const [stage, setStage] = useState('initializing');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Stage 1: Initializing (0-40%)
    const stage1 = setTimeout(() => {
      setProgress(40);
      setStage('scanning');
    }, 800);

    // Stage 2: Scanning (40-70%)
    const stage2 = setTimeout(() => {
      setProgress(70);
      setStage('connecting');
    }, 1600);

    // Stage 3: Connecting (70-90%)
    const stage3 = setTimeout(() => {
      setProgress(90);
      setStage('finalizing');
    }, 2400);

    // Stage 4: Finalizing (90-100%)
    const stage4 = setTimeout(() => {
      setProgress(100);
      setStage('ready');
    }, 3000);

    // Complete and transition to main app
    const complete = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(stage1);
      clearTimeout(stage2);
      clearTimeout(stage3);
      clearTimeout(stage4);
      clearTimeout(complete);
    };
  }, [onComplete]);

  const getStageText = () => {
    switch(stage) {
      case 'initializing': return 'INITIALIZING SYSTEMS';
      case 'scanning': return 'SCANNING MODULES';
      case 'connecting': return 'CONNECTING NETWORKS';
      case 'finalizing': return 'FINALIZING SETUP';
      case 'ready': return 'INITIALIZATION COMPLETE';
      default: return 'INITIALIZING SYSTEMS';
    }
  };

  const getStageIcon = () => {
    switch(stage) {
      case 'initializing': return '⚡';
      case 'scanning': return '🔍';
      case 'connecting': return '🌐';
      case 'finalizing': return '⚙️';
      case 'ready': return '✨';
      default: return '⚡';
    }
  };

  return (
    <div className="loading-page">
      <div className="loading-space">
        {/* Animated Background Grid */}
        <div className="grid-background">
          <div className="grid-lines"></div>
        </div>

        {/* Central Loading Hub */}
        <div className="loading-hub">
          {/* Rotating Rings */}
          <div className="rings-container">
            <div className="ring ring-outer"></div>
            <div className="ring ring-middle"></div>
            <div className="ring ring-inner"></div>
          </div>

          {/* Core System */}
          <div className="system-core">
            <div className="core-icon">{getStageIcon()}</div>
            <div className="core-pulse"></div>
          </div>

          {/* Status Text */}
          <div className="status-container">
            <div className="status-text">{getStageText()}</div>
            <div className="status-subtitle">QUANTUM INTERFACE v2.0</div>
          </div>

          {/* Progress Bar */}
          <div className="progress-container">
            <div className="progress-track">
              <div 
                className="progress-fill-advanced" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-percentage">{progress}%</div>
          </div>

          {/* System Stats */}
          <div className="system-stats">
            <div className="stat-item">
              <span className="stat-label">CORES</span>
              <span className="stat-value">8</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">RAM</span>
              <span className="stat-value">32GB</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">STATUS</span>
              <span className={`stat-value ${stage === 'ready' ? 'online' : 'booting'}`}>
                {stage === 'ready' ? 'ONLINE' : 'BOOTING'}
              </span>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="particles-advanced">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle-advanced"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
