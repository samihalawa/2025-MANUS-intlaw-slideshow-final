import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const ChatbotMockup = () => (
  <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative group">
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
    <div className="p-4 bg-slate-100/50 border-b border-slate-200 flex items-center gap-3">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-xl font-bold">AI</div>
      <div>
        <div className="font-bold text-slate-900 text-lg">INTLAW AI Assistant</div>
        <div className="text-sm text-green-500 flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></span>
          Online
        </div>
      </div>
    </div>
    <div className="p-6 space-y-4 h-96 bg-white">
      <div className="p-4 rounded-lg bg-slate-100 max-w-[80%]">
        <p className="text-2xl text-slate-700">¡Hola! ¿En qué puedo ayudarte?</p>
      </div>
      <div className="flex justify-end">
        <div className="p-4 rounded-lg bg-cyan-600 text-white max-w-[80%]">
          <p className="text-2xl">Necesito un contrato mercantil.</p>
        </div>
      </div>
      <div className="p-4 rounded-lg bg-slate-100 max-w-[80%]">
        <p className="text-2xl text-slate-700">Perfecto. ¿Tu email?</p>
      </div>
    </div>
    <div className="p-3 border-t border-slate-200 bg-slate-100/50">
        <input type="text" placeholder="Escribe tu mensaje..." className="w-full bg-white border border-slate-300 rounded-md p-3 text-xl text-slate-700 placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
    </div>
  </div>
);


export const Slide05: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-md mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-1">Problema</p>
        <p className="text-slate-700 text-2xl">Clientes esperan. Oportunidades perdidas.</p>
      </div>
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-cyan-500/10 text-cyan-500 text-sm font-bold px-3 py-1 rounded-full mb-4">Módulo 1 · SOLUCIÓN</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>IA en Web</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div>
              <span className="text-4xl text-slate-700">Chatbot 24/7</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div>
              <span className="text-4xl text-slate-700">Lead Gathering</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div>
              <span className="text-4xl text-slate-700">Respuestas Instantáneas</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ChatbotMockup />
        </div>
      </div>
    </SlideWrapper>
  );
};