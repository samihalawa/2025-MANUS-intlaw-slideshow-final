import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const agendaItems = [
  "Desafíos",
  "Visión INTLAW AI",
  "Módulos de Solución",
  "Beneficios Clave",
  "Inversión",
  "Próximos Pasos"
];

export const Slide02: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>Agenda</h2>
      <div className="space-y-8">
        {agendaItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 p-8 bg-slate-100/50 rounded-lg border border-transparent hover:border-cyan-500/50 hover:bg-slate-100 transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white font-bold text-4xl shadow-lg">
              {index + 1}
            </div>
            <p className="text-5xl font-medium text-slate-800">{item}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
};