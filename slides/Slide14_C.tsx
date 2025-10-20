import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Euro, FileText, Clock, Check, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Card: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; className?: string }> = ({ icon, title, children, className }) => (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-200 p-6 flex flex-col ${className}`}>
        <h3 className="text-2xl font-bold text-[#1a2947] mb-4 flex items-center gap-3">{icon}{title}</h3>
        <div className="flex-grow">{children}</div>
    </div>
);

const TimelineItem: React.FC<{ children: React.ReactNode; isLast?: boolean;}> = ({ children, isLast = false }) => (
    <div className="flex gap-3">
        <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-[#4a9eff] rounded-full ring-4 ring-white relative z-10"></div>
            {!isLast && <div className="w-0.5 flex-grow bg-slate-200 -mt-1"></div>}
        </div>
        <div className="pb-4 text-xl flex-grow">{children}</div>
    </div>
);

export const Slide14_C: React.FC = () => {
    return (
        <SlideWrapper className="p-10">
            <h2 className="text-5xl font-bold tracking-tighter text-slate-900 text-center mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Plataforma Unificada: Vista 360°</h2>
            <p className="text-xl text-slate-600 mb-4 text-center">Toda la inteligencia en una pantalla.</p>

            <motion.div 
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex-grow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Header */}
                <div className="border-b border-slate-200 pb-4 mb-6">
                    <h2 className="text-4xl font-bold text-[#1a2947]">Caso 4588: Compañía XYZ S.L.</h2>
                    <div className="flex items-center gap-2 text-xl text-slate-600 mt-2">
                        <Briefcase size={16} /> Contrato Mercantil
                        <span className="text-slate-300">|</span>
                        <span className="flex items-center gap-2 font-bold text-[#4ade80]"><div className="w-2 h-2 bg-[#4ade80] rounded-full"></div>Análisis Completado</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 gap-6">
                    <Card icon={<Euro className="text-[#4a9eff]"/>} title="Pricing IA">
                         <div className="bg-slate-100 p-4 rounded-lg">
                            <p className="font-bold text-cyan-800 text-lg">Honorarios IA:</p>
                            <p className="text-4xl font-bold text-[#1a2947] mt-1">€6,000 — €8,500</p>
                        </div>
                         <div className="mt-4 flex items-center gap-4">
                            <label className="font-semibold text-lg">Propuesta:</label>
                            <input type="text" value="€7,200" readOnly className="flex-grow bg-white border-2 border-slate-200 rounded-md p-2 text-xl font-bold text-[#1a2947] text-center" />
                            <button className="bg-[#4a9eff] text-white font-bold py-3 px-4 rounded-md text-lg hover:bg-[#3b7dd6] transition-colors">Enviar</button>
                        </div>
                    </Card>
                    
                    <Card icon={<Clock className="text-[#4a9eff]"/>} title="Línea de Tiempo">
                        <div className="relative">
                            <TimelineItem><p><strong className="font-semibold">Hoy:</strong> Chequeo financiero</p></TimelineItem>
                            <TimelineItem><p><strong className="font-semibold">Ayer:</strong> Análisis IA OK</p></TimelineItem>
                            <TimelineItem><p><strong className="font-semibold">Hace 2 días:</strong> Lead por WhatsApp</p></TimelineItem>
                        </div>
                    </Card>

                    <Card icon={<FileText className="text-[#4a9eff]"/>} title="Documentos">
                        <div className="flex items-center justify-between bg-slate-100 p-3 rounded-md">
                            <p className="text-xl font-semibold text-slate-800">Contrato_V1.pdf</p>
                            <span className="text-lg font-semibold text-[#065f46] bg-[#d1fae5] px-2 py-0.5 rounded">Analizado</span>
                        </div>
                    </Card>
                    
                    <Card icon={<Check className="text-[#4a9eff]"/>} title="Próximas Tareas IA">
                        <ul className="space-y-2 text-xl text-slate-700">
                           <li className="flex items-center gap-2 p-2 bg-slate-100 rounded-md"><input type="checkbox" className="w-5 h-5 accent-[#4a9eff]" /> Revisar y confirmar honorarios. <span className="ml-auto text-sm font-bold bg-red-500/10 text-red-600 px-2 py-0.5 rounded">ALTA</span></li>
                           <li className="flex items-center gap-2 p-2 bg-slate-100 rounded-md"><input type="checkbox" className="w-5 h-5 accent-[#4a9eff]" /> Enviar propuesta al cliente. <span className="ml-auto text-sm font-bold bg-red-500/10 text-red-600 px-2 py-0.5 rounded">ALTA</span></li>
                        </ul>
                    </Card>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};