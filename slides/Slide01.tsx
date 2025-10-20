import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

export const Slide01: React.FC = () => {
  return (
    <SlideWrapper className="flex items-center justify-center p-12 bg-grid-pattern-light">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <div className="relative text-center z-10">
        <div className="text-8xl mb-8">⚖️</div>
        <h1 className="text-[12rem] leading-none font-bold tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
          <span className="text-slate-800"> AI</span>
        </h1>
        <p className="mt-8 text-5xl text-slate-700 font-light tracking-wide">
          Automatización Legal IA
        </p>
        <div className="mt-16 inline-block bg-slate-100/50 border border-slate-200 rounded-lg px-12 py-5">
          <p className="text-lg font-semibold tracking-widest uppercase text-cyan-500">Preparado para INTLAW</p>
        </div>
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 text-xs text-slate-500">
          AGENTS AI Limited · 2025
        </div>
      </div>
    </SlideWrapper>
  );
};