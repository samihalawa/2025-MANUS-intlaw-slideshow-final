import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, FilePlus, Loader, CheckCircle } from 'lucide-react';

const CopilotMockup = () => (
    <div className="w-full bg-white/80 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        <header className="p-4 bg-slate-100/80 border-b border-slate-200 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <FilePlus className="w-9 h-9 text-cyan-500" />
                <h3 className="font-bold text-3xl text-slate-900">INTLAW AI Copilot</h3>
            </div>
            <div className="text-lg font-semibold bg-slate-200 text-slate-600 px-3 py-1 rounded-full">20+ Plantillas</div>
        </header>
        <div className="p-6 space-y-4">
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-lg">
                <p className="text-cyan-800 text-2xl">Genera contrato para TechCorp y InnoSolutions.</p>
            </div>
            
            <div className="bg-slate-100/60 p-4 rounded-lg border border-slate-200 flex items-center gap-4">
                <Loader className="w-6 h-6 text-cyan-500 animate-spin"/>
                <span className="text-2xl font-semibold text-slate-700">IA Procesando...</span>
            </div>

            <div className="p-5 bg-green-500/10 border border-green-500/20 rounded-lg mt-4 flex items-center gap-4">
                 <CheckCircle className="w-10 h-10 text-green-500" />
                 <div>
                    <h4 className="font-bold text-3xl text-green-600">Contrato Generado</h4>
                    <p className="text-xl text-slate-700 mt-1">28 páginas. Exportado a PDF + DOCX.</p>
                </div>
            </div>
        </div>
    </div>
);


export const Slide12: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <div className="grid grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block bg-cyan-500/10 text-cyan-600 text-lg font-bold px-4 py-2 rounded-full mb-4">Módulo 4 · SOLUCIÓN</div>
                    <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Generación Documentos</h2>
                    <div className="space-y-8">
                        <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div><span className="text-4xl text-slate-700">20+ Plantillas</span></div>
                        <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div><span className="text-4xl text-slate-700">Personalización IA</span></div>
                        <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div><span className="text-4xl text-slate-700">Adaptable</span></div>
                    </div>
                </div>
                <div>
                    <CopilotMockup />
                </div>
            </div>
        </SlideWrapper>
    );
};