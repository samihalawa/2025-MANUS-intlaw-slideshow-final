import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const ChatbotWidget = () => (
    <div className="absolute bottom-6 right-6 w-80 bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/20 z-20">
      <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-md font-bold">AI</div>
        <div>
          <div className="font-bold text-white text-sm">INTLAW AI Assistant</div>
          <div className="text-xs text-white/80">Online</div>
        </div>
      </div>
      <div className="p-3 space-y-3 h-48 text-base bg-white/50 text-slate-800">
        <div className="p-2 rounded-lg bg-slate-100 max-w-[85%]">
          <p>¿En qué puedo ayudarte?</p>
        </div>
        <div className="flex justify-end">
          <div className="p-2 rounded-lg bg-cyan-600 text-white max-w-[85%]">
            <p>Derecho mercantil.</p>
          </div>
        </div>
      </div>
       <div className="p-2 border-t border-slate-200">
        <input type="text" placeholder="Escribe tu mensaje..." className="w-full bg-slate-100 border border-slate-300 rounded-md p-1.5 text-sm focus:ring-cyan-500 focus:border-cyan-500 outline-none" />
      </div>
    </div>
);


export const Slide06: React.FC = () => {
    return (
        <SlideWrapper className="p-16 flex flex-col">
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 2: Integración IA</h2>
            
            <div className="flex-grow bg-slate-100/50 rounded-xl p-2 border border-slate-200 shadow-2xl relative">
                {/* Browser bar */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 bg-white rounded-full flex-grow h-8 flex items-center px-4 text-sm text-slate-500 border border-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-slate-400"><path d="M18 8.5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8"></path><path d="M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"></path><path d="M21 21v-1.5"></path></svg>
                        https://intlaw.eu
                    </div>
                </div>

                {/* Website Content */}
                <div className="relative h-[450px] overflow-hidden">
                    <div className="absolute inset-0 bg-slate-300">
                        {/* Fake website hero */}
                        <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-200">
                            <h1 className="text-6xl font-bold text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>MEET THE TEAM</h1>
                            <p className="mt-4 text-xl text-slate-700 max-w-lg">Asesoramiento legal integral.</p>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-slate-200/80 to-transparent"></div>

                    {/* Chatbot Widget */}
                    <ChatbotWidget />

                    <div className="absolute top-1/3 right-[420px] bg-cyan-500/90 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg animate-pulse">
                        ⚡ Integración Perfecta
                    </div>
                     <div className="absolute top-1/2 right-[450px] bg-cyan-500/90 text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg animate-pulse delay-200">
                        🎯 Captura Automática
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};