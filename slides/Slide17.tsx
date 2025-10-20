import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { motion } from 'framer-motion';

export const Slide17: React.FC = () => {
  return (
    <SlideWrapper className="flex flex-col items-center justify-center p-12 text-center bg-grid-pattern-light">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <div className="relative z-10">
        <h2 className="text-[8rem] leading-none font-bold tracking-tighter text-slate-900 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
          Gracias.
        </h2>
        <p className="text-5xl text-slate-700 max-w-4xl leading-relaxed">
          Transformemos la práctica legal con IA.
        </p>

        <motion.div 
          className="mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="bg-gradient-to-r from-[#4a9eff] to-[#3b7dd6] text-white font-bold text-3xl px-12 py-5 rounded-lg shadow-lg hover:shadow-[#4a9eff]/50 transition-shadow">
              Agendar Demo
          </button>
        </motion.div>

        <div className="mt-12 border-t-2 border-[#4a9eff]/50 pt-8 inline-block">
            <p className="text-2xl font-semibold text-slate-800">Ignacio Jové</p>
            <p className="text-lg text-slate-600 mb-2">Project Lead</p>
            <p className="text-5xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9eff] to-[#3b7dd6]">INTLAW</span>
                <span className="text-slate-800"> AI</span>
            </p>
            <p className="text-xl text-slate-500 mt-2">sami@agentsai.ltd</p>
        </div>
      </div>
    </SlideWrapper>
  );
};