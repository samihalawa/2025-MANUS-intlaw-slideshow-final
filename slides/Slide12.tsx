import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const CopilotMockup = () => (
    <div className="w-full bg-white/50 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <header className="p-4 bg-slate-100/50 border-b border-slate-200 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <span className="text-3xl">📝</span>
                <h3 className="font-bold text-2xl text-slate-900">INTLAW AI Copilot</h3>
            </div>
            <div className="text-base font-semibold bg-cyan-500/20 text-cyan-600 px-3 py-1 rounded-full">20+ Plantillas</div>
        </header>
        <div className="p-6 space-y-4 text-lg">
            <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-lg">
                <p className="text-cyan-800">Genera contrato para TechCorp y InnoSolutions.</p>
            </div>
            
            <div className="bg-slate-100/60 p-4 rounded-lg border border-slate-200 flex items-center gap-4">
                <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xl font-semibold text-slate-700">IA Procesando...</span>
            </div>

            <div className="p-5 bg-green-500/10 border border-green-500/30 rounded-lg mt-4">
                <h4 className="font-bold text-2xl text-green-600">✓ Contrato Generado</h4>
                <p className="text-lg text-slate-700 mt-1">28 páginas. Exportado a PDF + DOCX.</p>
            </div>
        </div>
    </div>
);


export const Slide12: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block bg-cyan-500/10 text-cyan-500 text-sm font-bold px-3 py-1 rounded-full mb-4">Módulo 4 · SOLUCIÓN</div>
                    <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Generación Documentos</h2>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div><span className="text-4xl text-slate-700">20+ Plantillas</span></div>
                        <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div><span className="text-4xl text-slate-700">Personalización IA</span></div>
                        <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/20 text-cyan-500 rounded-full"><CheckIcon/></div><span className="text-4xl text-slate-700">Adaptable</span></div>
                    </div>
                </div>
                <div>
                    <CopilotMockup />
                </div>
            </div>
        </SlideWrapper>
    );
};