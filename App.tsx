import React, { useState, useEffect, useRef } from 'react';

// Import all slides from the 'slides' directory
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03_Analysis } from './slides/Slide03_Analysis';
import { Slide04 } from './slides/Slide04';
import { Slide07_B } from './slides/Slide07_B';
import { Slide08_B } from './slides/Slide08_B'; 
import { Slide10_D } from './slides/Slide10_D'; 
import { Slide11_B } from './slides/Slide11_B';
import { Slide13_B } from './slides/Slide13_B';
import { Slide14_C } from './slides/Slide14_C'; 
import { Slide14_Dashboard } from './slides/Slide14_Dashboard';
import { Slide15 } from './slides/Slide15';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';

// --- MAIN PRESENTATION COMPONENT ---

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

// Array of slide components from the 'slides' folder
const slides = [
  Slide01,            // 1. Title
  Slide02,            // 2. Agenda
  Slide03_Analysis,   // 3. Needs Analysis
  Slide04,            // 4. Vision & Impact Dashboard
  Slide07_B,          // 5. Module 1: Web Automation (Polished Chatbot UI)
  Slide08_B,          // 6. Module 1 (Advanced): Multichannel Lead Capture (Enhanced WhatsApp to CRM UI)
  Slide10_D,          // 7. Module 2: Automated Prospecting Campaigns (New Dashboard UI)
  Slide11_B,          // 8. Module 3: Document Agent with Citations (New Split-Screen UI)
  Slide13_B,          // 9. Module 4: AI Document Generation (New Copilot to Preview UI)
  Slide14_C,          // 10. Unified Platform: 360° Case View (New Case Dashboard UI)
  Slide14_Dashboard,  // 11. ROI Dashboard (New Impactful Metrics UI)
  Slide15,            // 12. Investment Model
  Slide16,            // 13. Next Steps
  Slide17             // 14. Closing & Thank You
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