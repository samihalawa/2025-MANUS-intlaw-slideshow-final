import React, { useState, useEffect, useRef } from 'react';

// Import all slides from the 'slides' directory
import { Slide01 } from './slides/Slide01';
import { Slide02 } from './slides/Slide02';
import { Slide03_Analysis } from './slides/Slide03_Analysis';
import { Slide03 } from './slides/Slide03';
import { Slide04 } from './slides/Slide04';
import { Slide05 } from './slides/Slide05';
import { Slide06 } from './slides/Slide06';
import { Slide07 } from './slides/Slide07';
import { Slide08 } from './slides/Slide08';
import { Slide09 } from './slides/Slide09';
import { Slide10_A } from './slides/Slide10_A';
import { Slide10_B } from './slides/Slide10_B';
import { Slide10_C } from './slides/Slide10_C';
import { Slide10 } from './slides/Slide10';
import { Slide11 } from './slides/Slide11';
import { Slide12 } from './slides/Slide12';
import { Slide13 } from './slides/Slide13';
import { Slide14_Dashboard } from './slides/Slide14_Dashboard';
import { Slide14 } from './slides/Slide14';
import { Slide15 } from './slides/Slide15';
import { Slide16 } from './slides/Slide16';
import { Slide17 } from './slides/Slide17';

// --- MAIN PRESENTATION COMPONENT ---

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;

// Array of slide components from the 'slides' folder
const slides = [
  Slide01, Slide02, Slide03_Analysis, Slide03, Slide04, Slide05, Slide06, Slide07,
  Slide08, Slide09, Slide10_A, Slide10_B, Slide10, Slide10_C, Slide11, Slide12,
  Slide13, Slide14, Slide14_Dashboard, Slide15, Slide16, Slide17
];


// FIX: The original inline prop type for ScaledSlide was causing a TypeScript error
// with the `key` prop in a list. Defining props with a separate interface resolves this.
interface ScaledSlideProps {
  children: React.ReactNode;
}

/**
 * A component that wraps a slide, scaling it to fit the container's width
 * while maintaining a 16:9 aspect ratio.
 */
// FIX: Changed to React.FC to correctly handle the 'key' prop in lists.
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

    // Use ResizeObserver for robust resizing detection
    const resizeObserver = new ResizeObserver(updateScale);
    const currentRef = containerRef.current;
    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    // Initial scale calculation
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
        // The container's height is determined by the scaled height of the slide content
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
    <div className="w-full bg-slate-900 font-sans text-base flex flex-col items-center py-24 px-16">
      <main className="w-full max-w-6xl space-y-16">
        {slides.map((SlideComponent, index) => (
          <ScaledSlide key={index}>
            <SlideComponent />
          </ScaledSlide>
        ))}
      </main>
    </div>
  );
}