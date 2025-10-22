import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide01: React.FC = () => {
  return (
    <SlideWrapper className="flex items-center justify-center p-6 md:p-12 bg-grid-pattern-light min-h-screen">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <div className="relative text-center z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block p-6 bg-white rounded-2xl shadow-xl mb-8 border"
        >
          <Scale className="w-16 h-16 md:w-24 md:h-24 text-cyan-500" strokeWidth={1.5}/>
        </motion.div>
        <h1 className="text-6xl sm:text-8xl lg:text-[12rem] leading-none font-bold tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
          <span className="text-slate-800"> AI</span>
        </h1>
        <p className="mt-4 md:mt-8 text-3xl md:text-5xl text-slate-700 font-light tracking-wide">
          La Práctica Legal, Reinventada.
        </p>
        <motion.div 
          className="mt-8 md:mt-16 inline-block bg-slate-100/50 border border-slate-200 rounded-lg px-6 md:px-12 py-4 md:py-5"
          animate={{
            boxShadow: [
              "0 0 0 0px rgba(56, 189, 248, 0.3)",
              "0 0 0 20px rgba(56, 189, 248, 0)",
              "0 0 0 0px rgba(56, 189, 248, 0)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <p className="text-base md:text-lg font-semibold tracking-widest uppercase text-cyan-500">Propuesta de Colaboración</p>
        </motion.div>
        <div className="absolute bottom-[-50px] md:bottom-[-100px] left-1/2 -translate-x-1/2 text-xs text-slate-500">
          AGENTS AI Limited · 2025
        </div>
      </div>
    </SlideWrapper>
  );
};