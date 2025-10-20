import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide15: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-9xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Inversión</h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Plan 1 */}
                <div className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-4xl font-bold text-slate-900 text-center">Plan Financiado</h3>
                    <p className="text-2xl text-slate-600 mb-6 text-center">Flujo de caja predecible.</p>
                    <div className="bg-slate-50/50 p-6 rounded-lg text-xl space-y-4 mb-6 flex-grow border border-slate-200">
                        <div className="text-center"><span className="text-slate-500">Inicial</span> <br/><span className="font-semibold text-slate-900 text-7xl">€9,000</span></div>
                        <hr/>
                        <div className="text-center"><span className="text-slate-500">Mensual (9 meses)</span> <br/><span className="font-semibold text-slate-900 text-7xl">€4,000</span></div>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 text-center mt-2">Total: €45,000</p>
                </div>

                {/* Plan 2 - Recommended */}
                <div className="bg-white rounded-xl p-8 border-2 border-[#4a9eff] relative flex flex-col shadow-2xl shadow-[#4a9eff]/20">
                    <motion.div 
                        className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#4a9eff] text-white text-base font-bold px-4 py-1.5 rounded-full uppercase"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Recomendado
                    </motion.div>
                    <h3 className="text-4xl font-bold text-slate-900 text-center">Plan por Hitos</h3>
                     <p className="text-2xl text-slate-600 mb-6 text-center">Inversión alineada al progreso.</p>
                    <div className="bg-slate-50/50 p-6 rounded-lg text-xl space-y-4 mb-6 flex-grow border border-[#4a9eff]/50">
                        <div className="text-center"><span className="text-slate-500">Hito 1 (Inicio)</span> <br/><span className="font-semibold text-slate-900 text-7xl">€15,000</span></div>
                        <hr/>
                        <div className="text-center"><span className="text-slate-500">Hito 2 (Despliegue)</span><br/><span className="font-semibold text-slate-900 text-7xl">€15,000</span></div>
                        <hr/>
                         <div className="text-center"><span className="text-slate-500">Hito 3 (Post)</span><br/><span className="font-semibold text-slate-900 text-7xl">€15,000</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-2xl font-bold text-slate-800">Total: €45,000</p>
                    </div>
                </div>
            </div>

            <div className="bg-[#dbeafe] border-l-4 border-[#4a9eff] p-6 rounded-md text-center">
                <h4 className="font-bold text-4xl text-[#1e40af] mb-2 flex items-center justify-center gap-3"><ShieldCheck size={32}/> GARANTÍA DE REEMBOLSO TOTAL</h4>
                <p className="text-slate-700 text-3xl">Si no cumple expectativas: se corrige o reembolsa. 100% garantizado.</p>
            </div>
        </SlideWrapper>
    );
};