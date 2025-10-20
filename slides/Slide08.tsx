import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const CRMDashboardMockup = () => (
    <div className="w-full bg-white/50 rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 group">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-3xl font-bold text-slate-800">Leads Cualificados</h3>
            <div className="text-sm font-semibold bg-cyan-500/20 text-cyan-500 px-3 py-1 rounded-full">En Tiempo Real</div>
        </div>
        {
            [
                { name: "TechCorp SL", type: "Derecho Mercantil", score: 95, priority: "ALTA", priorityColor: "red" },
                { name: "InnoSolutions SA", type: "Contratos", score: 92, priority: "ALTA", priorityColor: "red" },
            ].map((lead, i) => (
                <div key={i} className="bg-slate-100/70 p-4 rounded-lg flex items-center gap-4 border border-slate-200 hover:border-cyan-500/50 transition-colors duration-300">
                    <div className={`w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center font-bold text-3xl text-cyan-500`}>{lead.name.substring(0, 2)}</div>
                    <div className="flex-grow">
                        <p className="font-bold text-3xl text-slate-800">{lead.name}</p>
                        <p className="text-lg text-slate-500">{lead.type}</p>
                    </div>
                    <div className="text-right">
                        <p className={`text-6xl font-bold text-slate-800`}>{lead.score}</p>
                        <p className={`text-lg font-bold text-${lead.priorityColor}-500`}>{lead.priority}</p>
                    </div>
                </div>
            ))
        }
    </div>
);

export const Slide08: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-md mb-8">
        <p className="text-red-500 font-semibold text-sm uppercase tracking-wider mb-1">Problema</p>
        <p className="text-slate-700 text-2xl">Cualificación manual lenta e ineficaz.</p>
      </div>
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-cyan-500/10 text-cyan-500 text-sm font-bold px-3 py-1 rounded-full mb-4">Módulo 2 · SOLUCIÓN</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>CRM con Filtrado IA</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div><span className="text-4xl text-slate-700">Filtrado Automático</span></div>
            <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div><span className="text-4xl text-slate-700">Cualificación IA</span></div>
            <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div><span className="text-4xl text-slate-700">Priorización Leads</span></div>
          </div>
        </div>
        <div className="flex justify-center">
          <CRMDashboardMockup />
        </div>
      </div>
    </SlideWrapper>
  );
};