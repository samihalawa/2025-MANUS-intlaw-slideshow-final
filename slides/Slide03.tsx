import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const challenges = [
  { title: "Ineficiencia", desc: "Procesos lentos y costosos." },
  { title: "Tareas Manuales", desc: "Errores y falta de escalabilidad." },
  { title: "Documentos Lentos", desc: "Generación manual consume tiempo." },
  { title: "Análisis Masivo", desc: "Inviabilidad de revisar todo." },
];

export const Slide03: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>Desafíos Clave</h2>
      <div className="grid grid-cols-2 gap-8">
        {challenges.map((challenge, index) => (
          <div key={index} className="bg-slate-100/50 rounded-lg p-8 border-l-4 border-cyan-500 transition-all duration-300 hover:bg-slate-100 hover:shadow-2xl hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full font-bold text-xl">
                {index + 1}
              </div>
              <h3 className="text-4xl font-bold text-slate-800">{challenge.title}</h3>
            </div>
            <p className="text-2xl text-slate-600">{challenge.desc}</p>
          </div>
        ))}
      </div>
    </SlideWrapper>
  );
};