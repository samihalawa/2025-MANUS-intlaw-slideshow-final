import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { motion } from 'framer-motion';

export const Slide17: React.FC = () => {
  return (
    <SlideWrapper className="flex flex-col items-center justify-center p-6 md:p-16 text-center bg-grid-pattern-light min-h-screen">
       <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white"></div>
      
       <div className="relative z-10 w-full max-w-7xl">
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center">
            <h2 className="text-6xl sm:text-8xl lg:text-[10rem] leading-none font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
            Gracias.
            </h2>
            <p className="text-2xl md:text-4xl text-slate-700 max-w-4xl leading-relaxed">
            Una invitación para liderar el futuro de la práctica legal.
            </p>

            <div className="mt-24 border-t-2 border-cyan-500/50 pt-10 inline-block">
                <p className="text-xl md:text-2xl font-semibold text-slate-800">Sami Halawa</p>
                <p className="text-lg md:text-xl text-slate-600 mb-4">Project Lead</p>
                <p className="text-5xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">INTLAW</span>
                    <span className="text-slate-800"> AI</span>
                </p>
                <p className="text-lg md:text-xl text-slate-600 mt-4">sami@agentsai.ltd</p>
            </div>
        </div>
        
        {/* Footer Section */}
        <footer className="mt-24">
            <div className="border-t border-slate-200 pt-8 text-slate-600">
                <p className="text-xs text-center italic max-w-4xl mx-auto mb-8">
                <strong>Confidentiality Statement:</strong> This document contains confidential information of AGENTS AI Limited and is for the information of the intended recipient only. Any reproduction, distribution or disclosure of any part of this document is strictly prohibited without the prior written consent of the Company.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-left md:text-center">
                    <div className="md:text-right md:border-r md:pr-6 border-slate-200 space-y-1">
                        <p>Copyright © 2025 AGENTS AI Limited. All rights reserved.</p>
                        <p>Registered in England and Wales (Reg: 16570822)</p>
                        <p>Associated entity: PIME AI LTD.</p>
                    </div>
                    <div className="md:text-left md:pl-6 space-y-1">
                        <p>27 Old Gloucester Street, London, WC1N 3AX, UK</p>
                        <p>Tel: +44 7883306011</p>
                        <p>Email: info@agentsai.ltd</p>
                    </div>
                </div>
            </div>
        </footer>
       </div>
    </SlideWrapper>
  );
};