import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Scale } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide01: React.FC = () => {
  return (
    <SlideWrapper className="flex items-center justify-center p-12">
      <div className="absolute inset-0 bg-gradient-to-br from-[#07122C] via-[#0D1F46] to-[#18386D]" />
      <div className="absolute inset-0 bg-grid-pattern-light opacity-30" />
      <div className="absolute -top-24 -right-16 w-[32rem] h-[32rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-20 w-[28rem] h-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative text-center z-10 max-w-5xl mx-auto">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block p-6 bg-white/10 backdrop-blur-xl rounded-3xl shadow-xl mb-10 border border-white/20"
        >
          <Scale className="w-24 h-24 text-cyan-300" strokeWidth={1.3} />
        </motion.div>
        <h1
          className="text-[9rem] leading-none font-bold tracking-tight text-white drop-shadow-[0_12px_30px_rgba(12,24,54,0.45)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-white">INTLAW</span>
          <span className="text-white/80"> AI</span>
        </h1>
        <p className="mt-10 text-4xl text-white/70 font-light tracking-wide">
          La Práctica Legal, Reinventada.
        </p>
        <div className="mt-16 inline-flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-12 py-5">
          <span className="inline-flex h-3 w-3 rounded-full bg-cyan-300 animate-pulse" />
          <p className="text-base font-semibold tracking-[0.5em] uppercase text-white/80">
            Propuesta de Colaboración
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-sm tracking-[0.45em] text-white/50 uppercase">
          AGENTS AI Limited · 2025
        </div>
      </div>
    </SlideWrapper>
  );
};
