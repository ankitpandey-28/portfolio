import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroBackground = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} color="#ffcc00" />
      <pointLight position={[-10, -10, -5]} intensity={0.2} color="#ffcc00" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[0, 0, -5]}>
          <torusGeometry args={[3, 1, 16, 32]} />
          <meshStandardMaterial 
            color="#ffcc00" 
            emissive="#ffcc00" 
            emissiveIntensity={0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <mesh position={[4, 2, -3]}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#ffcc00" 
            emissive="#ffcc00" 
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-4, -2, -4]}>
          <tetrahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial 
            color="#ffcc00" 
            emissive="#ffcc00" 
            emissiveIntensity={0.25}
            metalness={0.7}
            roughness={0.3}
            transparent
            opacity={0.25}
          />
        </mesh>
      </Float>
      
      <fog attach="fog" args={['#000000', 5, 20]} />
    </>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // GSAP Animations
    const tl = gsap.timeline();
    
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power4.out" }
    )
    .fromTo(subheadlineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.4"
    );

    // Scroll animations
    gsap.to(heroRef.current, {
      y: -100,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-text">Initializing Command Center</div>
        </div>
      )}
      
      <section id="home" className="hero" ref={heroRef}>
        <div className="hero-bg">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} />
            <HeroBackground />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              enableRotate={false}
              autoRotate
              autoRotateSpeed={0.5}
            />
          </Canvas>
        </div>
        
        <div className="hero-content">
          <h1 className="hero-headline" ref={headlineRef}>
            Precision.<br />
            Intelligence.<br />
            Security.
          </h1>
          
          <p className="hero-subheadline" ref={subheadlineRef}>
            Hi, I'm Ankit Pandey — an AI-Assisted Frontend Developer and Cybersecurity student
            focused on building modern, secure, and high-impact web interfaces.
          </p>
          
          <div className="hero-cta" ref={ctaRef}>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              Work With Me
              <span className="link-arrow">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
