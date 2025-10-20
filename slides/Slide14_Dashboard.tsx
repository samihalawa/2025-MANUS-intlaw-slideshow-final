import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
// FIX: Added Clock to the import from lucide-react.
import { Zap, TrendingUp, ShieldCheck, Award, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const MetricCard: React.FC<{ icon: React.ReactNode; title: string; value: string; description: string; }> = ({ icon, title, value, description }) => (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl flex flex-col text-center items-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#dbeafe] to-[#bfdbfe] text-[#1a2947] rounded-xl flex items-center justify-center mb-4">{icon}</div>
        <p className="text-lg font-bold text-slate-500 uppercase tracking-wider">{title}</p>
        <p className="text-7xl font-bold text-[#1a2947] my-2">{value}</p>
        <p className="text-base text-slate-600 flex-grow">{description}</p>
    </div>
);

const ComparisonCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; }> = ({ icon, title, children }) => (
    <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl col-span-2">
        <h3 className="text-2xl font-bold text-[#1a2947] mb-6 flex items-center gap-3">{icon}{title}</h3>
        {children}
    </div>
);

export const Slide14_Dashboard: React.FC = () => {
    return (
        <SlideWrapper className="p-12 bg-slate-50">
            <h2 className="text-5xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Dashboard de Retorno de Inversión (ROI)</h2>
            <p className="text-xl text-slate-600 mb-8 text-center">Visualizando el impacto tangible de INTLAW AI.</p>
            
            <div className="grid grid-cols-4 grid-rows-2 gap-6 h-[520px]">
                <MetricCard icon={<Zap size={32}/>} title="Eficiencia" value="+60%" description="En tareas automatizables" />
                <MetricCard icon={<TrendingUp size={32}/>} title="Crecimiento" value="+25%" description="Capacidad de casos" />
                
                <ComparisonCard icon={<ShieldCheck size={24} />} title="Reducción de Errores Documentales">
                    <div className="flex items-center justify-around">
                        <div className="text-center">
                             <p className="text-lg font-bold text-slate-500 mb-2">Antes</p>
                             <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center" style={{background: 'conic-gradient(#ef4444 0% 15%, #f1f5f9 15% 100%)'}}>
                                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-[#1a2947]">15%</div>
                             </div>
                        </div>
                        <p className="text-5xl font-bold text-slate-400">→</p>
                        <div className="text-center">
                            <p className="text-lg font-bold text-slate-500 mb-2">Después</p>
                             <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center" style={{background: 'conic-gradient(#4ade80 0% 1%, #f1f5f9 1% 100%)'}}>
                                 <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-3xl font-bold text-[#1a2947]">&lt;1%</div>
                             </div>
                        </div>
                    </div>
                </ComparisonCard>
                
                <MetricCard icon={<Clock size={32}/>} title="Respuesta" value="<60s" description="A nuevos leads" />
                <MetricCard icon={<Award size={32}/>} title="Innovación" value="#1" description="Liderazgo tecnológico" />
            </div>
        </SlideWrapper>
    );
};