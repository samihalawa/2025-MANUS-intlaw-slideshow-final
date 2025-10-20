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
import { Slide10_B } from './slides/Slide10_B';
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
  Slide10_B, // M2: Opportunities Radar
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

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setScale(width / SLIDE_WIDTH);
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
      className="w-full"
      style={{
        height: SLIDE_HEIGHT * scale,
      }}
    >
      <div
        style={{
          width: SLIDE_WIDTH,
          height: SLIDE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
};


export default function App() {
  return (
    <div className="w-full bg-slate-900 font-sans text-base flex flex-col items-center py-12 px-8">
      <main className="w-full max-w-6xl space-y-8">
        {slides.map((SlideComponent, index) => (
          <ScaledSlide key={index}>
            <SlideComponent />
          </ScaledSlide>
        ))}
      </main>
    </div>
  );
}