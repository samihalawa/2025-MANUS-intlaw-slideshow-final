import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

export const Slide17: React.FC = () => {
  return (
    <SlideWrapper className="flex flex-col items-center justify-center p-16 text-center">
      <h2 className="text-[12rem] leading-none font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
        ¡Gracias!
      </h2>
      <p className="text-4xl text-slate-700 max-w-4xl leading-relaxed">
        Listos para potenciar su práctica legal con inteligencia artificial.
      </p>
      <div className="mt-20 border-t-2 border-cyan-500 pt-10">
        <p className="text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
           <span className="text-slate-800"> AI</span>
        </p>
         <p className="text-xl text-slate-500 mt-4">sami@agentsai.ltd</p>
      </div>
    </SlideWrapper>
  );
};