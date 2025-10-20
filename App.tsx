import React, { useState, useEffect, useRef } from 'react';

// Import all slides from the 'slides' directory
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03 } from './slides/Slide03';
import { Slide03_Analysis } from './slides/Slide03_Analysis';
import { Slide04 } from './slides/Slide04';
import { Slide07_B } from './slides/Slide07_B';
import { Slide08 } from './slides/Slide08';
import { Slide08_B } from './slides/Slide08_B';
import { Slide09_B } from './slides/Slide09_B';
import { Slide10 } from './slides/Slide10';
import { Slide10_A } from './slides/Slide10_A';
import { Slide10_D } from './slides/Slide10_D';
import { Slide10_C } from './slides/Slide10_C';
import { Slide11_B } from './slides/Slide11_B';
import { Slide12 } from './slides/Slide12';
import { Slide13_B } from './slides/Slide13_B';
import { Slide14 } from './slides/Slide14';
import { Slide14_Dashboard } from './slides/Slide14_Dashboard';
import { Slide14_C } from './slides/Slide14_C';
import { Slide15 } from './slides/Slide15';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';


// --- MAIN PRESENTATION COMPONENT ---

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

// Array of slide components from the 'slides' folder
const slides = [
  Slide01, // Title
  Slide02, // Agenda
  Slide03, // Challenges
  Slide03_Analysis, // Tailored Solution
  Slide04, // Vision
  Slide07_B, // M1: Web Automation Intro
  Slide08_B, // M1: WhatsApp Example
  Slide08, // M2: CRM Intro
  Slide10_A, // M2: Proactive Prospecting
  Slide10_D, // M2: Campaign Automation UI
  Slide09_B, // M2: Summary Dashboard
  Slide10, // M3: Document Agent Intro
  Slide11_B, // M3: Analysis with Citations
  Slide10_C, // M3: Knowledge Graph
  Slide12, // M4: Document Generation Intro
  Slide13_B, // M4: AI Copilot Demo
  Slide14, // Benefits Summary
  Slide14_Dashboard, // ROI Dashboard
  Slide14_C, // Unified Case View
  Slide15, // Investment
  Slide16, // Next Steps
  Slide17, // Thank You
];


interface ScaledSlideProps {
  children: React.ReactNode;
}

const ScaledSlide: React.FC<ScaledSlideProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && slideRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        const newScale = Math.min(width / SLIDE_WIDTH, height / SLIDE_HEIGHT);
        setScale(newScale);
      }
    };

    const resizeObserver = new ResizeObserver(updateScale);
    const currentRef = containerRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    updateScale();

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center items-center"
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '100vw',
        maxHeight: '100vh',
        aspectRatio: `${SLIDE_WIDTH} / ${SLIDE_HEIGHT}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        ref={slideRef}
        style={{
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: `translate(-50%, -50%) scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}


export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const CurrentSlideComponent = slides[currentSlideIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      } else if (event.key === 'ArrowLeft') {
        setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full bg-slate-900 font-sans text-base flex flex-col items-center justify-center min-h-screen p-4">
      <main className="w-full h-screen flex items-center justify-center">
        <ScaledSlide>
          <CurrentSlideComponent />
        </ScaledSlide>
      </main>
    </div>
  );
}