import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Slide15: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Modelo de Inversión</h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Plan 1 */}
                <div className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col hover:shadow-xl transition-shadow duration-300">
                    <h3 className="text-4xl font-bold text-slate-900 text-center">Plan Financiado</h3>
                    <p className="text-xl text-slate-600 mb-6 text-center">Ideal para un flujo de caja predecible y una inversión distribuida.</p>
                    <div className="bg-slate-50/50 p-6 rounded-lg text-xl space-y-4 mb-6 flex-grow border border-slate-200">
                        <div className="text-center"><span className="text-slate-500">Inicial</span> <br/><span className="font-semibold text-slate-900 text-6xl">€9,000</span></div>
                        <hr/>
                        <div className="text-center"><span className="text-slate-500">Mensual (9 meses)</span> <br/><span className="font-semibold text-slate-900 text-6xl">€4,000</span></div>
                    </div>
                    <p className="text-2xl font-bold text-slate-800 text-center mt-2">Total: €45,000</p>
                </div>

                {/* Plan 2 - Recommended */}
                <div className="bg-white rounded-xl p-8 border-2 border-cyan-500 relative flex flex-col shadow-2xl shadow-cyan-500/20">
                    <motion.div 
                        className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-base font-bold px-4 py-1.5 rounded-full uppercase"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Recomendado
                    </motion.div>
                    <h3 className="text-4xl font-bold text-slate-900 text-center">Plan por Hitos</h3>
                     <p className="text-xl text-slate-600 mb-6 text-center">Alinea la inversión con el progreso y <span className="font-bold text-cyan-600">ofrece un ahorro del 20%</span>.</p>
                    <div className="bg-slate-50/50 p-6 rounded-lg text-xl space-y-4 mb-6 flex-grow border border-cyan-500/50">
                        <div className="text-center"><span className="text-slate-500">Hito 1 (Inicio)</span> <br/><span className="font-semibold text-slate-900 text-6xl">€12,000</span></div>
                        <hr/>
                        <div className="text-center"><span className="text-slate-500">Hito 2 (Despliegue)</span><br/><span className="font-semibold text-slate-900 text-6xl">€12,000</span></div>
                        <hr/>
                         <div className="text-center"><span className="text-slate-500">Hito 3 (Post)</span><br/><span className="font-semibold text-slate-900 text-6xl">€12,000</span></div>
                    </div>
                    <div className="text-center mt-2">
                        <p className="text-2xl font-bold text-slate-800">Total: €36,000</p>
                        <p className="text-lg font-semibold text-slate-500 line-through">€45,000</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-600/10 border-l-4 border-blue-500 p-6 rounded-md text-center">
                <h4 className="font-bold text-3xl text-blue-600 mb-2 flex items-center justify-center gap-3"><ShieldCheck size={32}/> GARANTÍA DE REEMBOLSO TOTAL</h4>
                <p className="text-slate-700 text-xl">Si no funciona como se espera, se corrige o se reembolsa. 100% garantizado.</p>
            </div>
        </SlideWrapper>
    );
};
