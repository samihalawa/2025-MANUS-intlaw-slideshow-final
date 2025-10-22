import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { GraduationCap, Link, Lock, CheckSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const includedItems = [
    { icon: <GraduationCap size={32} />, title: 'Capacitación & Adopción' },
    { icon: <Link size={32} />, title: 'Integración Completa' },
    { icon: <Lock size={32} />, title: 'Seguridad & Cumplimiento' },
    { icon: <CheckSquare size={32} />, title: 'Criterios de Aceptación' },
];

export const Slide16: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Próximos Pasos</h2>

            <div className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 mb-8">
                <h3 className="text-4xl font-bold text-slate-900 mb-6 text-center">Hoja de Ruta de Colaboración</h3>
                <div className="bg-white rounded-lg p-8 border-2 border-cyan-500 shadow-lg flex items-center justify-around text-center">
                    <div>
                        <p className="text-base text-cyan-600 font-bold uppercase mb-2">Fase 1: Implementación Core</p>
                        <p className="text-8xl font-bold text-slate-900">80 días</p>
                        <p className="text-slate-600 mt-2 text-xl max-w-sm">Despliegue de módulos de crecimiento y fiabilidad documental.</p>
                    </div>
                    <div className="text-5xl font-light text-slate-300">+</div>
                    <div>
                        <p className="text-base text-cyan-600 font-bold uppercase mb-2">Fase 2: Optimización Continua</p>
                        <p className="text-8xl font-bold text-slate-900">Meses 3-12</p>
                        <p className="text-slate-600 mt-2 text-xl max-w-sm">Ajuste colaborativo para maximizar el rendimiento y la adopción.</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                {includedItems.map((section, i) => (
                    <div key={section.title} className="bg-slate-50/50 p-6 rounded-lg border border-slate-200">
                        <h4 className="text-3xl font-bold text-slate-900 flex items-center gap-4">
                            <motion.div
                                animate={{ y: [-2, 2, -2] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                            >
                                {section.icon}
                            </motion.div>
                            {section.title}
                        </h4>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};