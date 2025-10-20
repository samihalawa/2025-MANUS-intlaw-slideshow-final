import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { motion } from 'framer-motion';

export const Slide17: React.FC = () => {
  return (
    <SlideWrapper className="flex flex-col items-center justify-center p-16 text-center bg-grid-pattern-light">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <div className="relative z-10">
        <h2 className="text-[10rem] leading-none font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
          Gracias.
        </h2>
        <p className="text-4xl text-slate-700 max-w-4xl leading-relaxed">
          Una oportunidad para transformar la práctica legal a través de la inteligencia artificial.
        </p>

        <motion.div 
          className="mt-16"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-2xl px-12 py-5 rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-shadow">
              Agendemos una demostración en vivo
          </button>
        </motion.div>

        <div className="mt-16 border-t-2 border-cyan-500/50 pt-10 inline-block">
            <p className="text-2xl font-semibold text-slate-800">Ignacio Jové</p>
            <p className="text-xl text-slate-600 mb-4">Project Lead</p>
            <p className="text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
                <span className="text-slate-800"> AI</span>
            </p>
            <p className="text-xl text-slate-500 mt-4">sami@agentsai.ltd</p>
        </div>
      </div>
    </SlideWrapper>
  );
};