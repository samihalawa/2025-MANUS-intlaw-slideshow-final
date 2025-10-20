import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { CheckCircle, Bot, Zap, Clock, BarChart } from 'lucide-react';

const LeadNotification = () => (
    <div className="absolute top-8 right-8 w-[400px] bg-white rounded-xl shadow-2xl border border-slate-200 z-30 p-6 transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-green-500/20">
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-500 flex-shrink-0 flex items-center justify-center">
                 <CheckCircle size={32} />
            </div>
            <div>
              <h4 className="font-bold text-3xl text-slate-900">Nuevo Lead Cualificado</h4>
              <p className="text-xl text-slate-600 mt-1">Lead asignado al equipo mercantil.</p>
            </div>
        </div>
        <div className="text-xl space-y-3 bg-slate-100/50 p-4 rounded-md mt-4">
            <p><strong className="text-slate-700 w-24 inline-block">Nombre:</strong> M. González</p>
            <p><strong className="text-slate-700 w-24 inline-block">Prioridad:</strong> <span className="font-bold text-red-500 text-2xl bg-red-500/10 px-2 py-1 rounded">ALTA (95)</span></p>
        </div>
    </div>
);

const ChatWidgetConversation = () => (
     <div className="absolute bottom-8 right-8 w-96 bg-white rounded-xl shadow-2xl border border-slate-200 z-20 overflow-hidden">
      <div className="p-4 bg-slate-100/80 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white"><Bot size={24}/></div>
        <div>
          <div className="font-bold text-slate-900 text-lg">Asistente INTLAW</div>
          <div className="text-sm text-green-600 font-semibold">Online</div>
        </div>
      </div>
      <div className="p-4 space-y-4 h-72 text-lg bg-white overflow-y-auto">
        <div className="p-3 rounded-lg bg-slate-200 max-w-[85%] text-slate-800 rounded-bl-none"><p>...¿podrías compartir tu email?</p></div>
        <div className="flex justify-end"><div className="p-3 rounded-lg bg-cyan-600 text-white max-w-[85%] rounded-br-none"><p>empresa@mail.com</p></div></div>
        <div className="p-3 rounded-lg bg-slate-200 max-w-[85%] text-slate-800 rounded-bl-none"><p>¡Gracias! Te contactaremos.</p></div>
      </div>
    </div>
);


export const Slide07: React.FC = () => {
    return (
        <SlideWrapper className="p-16 flex flex-col">
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Conversación Inteligente</h2>
            <p className="text-slate-600 text-center mb-8 text-2xl">Reemplazando formularios por diálogos.</p>
            
            <div className="flex-grow bg-slate-100 rounded-xl p-2 border border-slate-200 shadow-2xl relative">
                <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div><div className="w-3 h-3 bg-yellow-500 rounded-full"></div><div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 bg-white rounded-full flex-grow h-8 flex items-center px-4 text-sm text-slate-500 border border-slate-200">https://intlaw.eu</div>
                </div>

                <div className="relative h-[450px] overflow-hidden bg-slate-200 flex items-center justify-center">
                    <p className="text-4xl text-slate-400 font-bold">Contenido del Sitio Web</p>
                    <LeadNotification />
                    <ChatWidgetConversation />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                <div className="bg-slate-50/50 p-6 rounded-lg border border-slate-200">
                    <BarChart className="w-12 h-12 text-cyan-500 mx-auto mb-2"/>
                    <div className="text-6xl font-bold text-slate-900">3x</div>
                    <div className="text-xl text-slate-600 uppercase tracking-wider mt-2">Más Conversiones</div>
                </div>
                <div className="bg-slate-50/50 p-6 rounded-lg border border-slate-200">
                    <Zap className="w-12 h-12 text-cyan-500 mx-auto mb-2"/>
                    <div className="text-6xl font-bold text-slate-900">70%</div>
                    <div className="text-xl text-slate-600 uppercase tracking-wider mt-2">Tasa Completado</div>
                </div>
                <div className="bg-slate-50/50 p-6 rounded-lg border border-slate-200">
                    <Clock className="w-12 h-12 text-cyan-500 mx-auto mb-2"/>
                    <div className="text-6xl font-bold text-slate-900">&lt; 30s</div>
                    <div className="text-xl text-slate-600 uppercase tracking-wider mt-2">Tiempo Captura</div>
                </div>
            </div>
        </SlideWrapper>
    );
};