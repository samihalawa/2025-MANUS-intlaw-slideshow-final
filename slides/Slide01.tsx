import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide01: React.FC = () => {
  return (
    <SlideWrapper className="flex items-center justify-center p-12 bg-grid-pattern-light">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      <div className="relative text-center z-10">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block p-6 bg-white rounded-2xl shadow-xl mb-8 border"
        >
          <Scale className="w-24 h-24 text-[#1a2947]" strokeWidth={1.5}/>
        </motion.div>
        <h1 className="text-[12rem] leading-none font-bold tracking-tighter" style={{ fontFamily: "'Playfair Display', serif" }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9eff] to-[#3b7dd6]">INTLAW</span>
          <span className="text-slate-800"> AI</span>
        </h1>
        <p className="mt-8 text-7xl text-slate-700 font-light tracking-wide">
          La Práctica Legal, Reinventada.
        </p>
        <div className="mt-16 inline-block bg-slate-100/50 border border-slate-200 rounded-lg px-12 py-5">
          <p className="text-3xl font-semibold tracking-widest uppercase text-[#1e40af]">Propuesta de Colaboración</p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-xs text-slate-500">
          AGENTS AI Limited · 2025
        </div>
      </div>
    </SlideWrapper>
  );
};