import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

export const Slide04: React.FC = () => {
  return (
    <SlideWrapper className="p-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Visión: INTLAW AI</h2>
      <p className="mt-4 text-3xl text-slate-600">Un ecosistema legal inteligente y proactivo.</p>
      
      <div className="mt-16 w-full max-w-5xl bg-slate-100/50 rounded-xl p-10 border border-slate-200 shadow-2xl">
        <h3 className="text-3xl font-semibold text-slate-700 mb-12 tracking-wider uppercase">Dashboard de Impacto</h3>
        <div className="grid grid-cols-3 gap-8">
          <div className="flex flex-col">
            <div className="text-[10rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">85%</div>
            <div className="mt-4 text-2xl font-semibold text-slate-600 uppercase tracking-widest">Tareas Automatizadas</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[10rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">+30%</div>
            <div className="mt-4 text-2xl font-semibold text-slate-600 uppercase tracking-widest">Adquisición Clientes</div>
          </div>
          <div className="flex flex-col">
            <div className="text-[10rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">24/7</div>
            <div className="mt-4 text-2xl font-semibold text-slate-600 uppercase tracking-widest">Soporte Chatbot</div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};