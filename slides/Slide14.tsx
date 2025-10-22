import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, ShieldCheck, Award, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
    { icon: <Zap size={40} />, title: 'Horas Facturables, No Administrativas', desc: 'Recupere hasta un 60% del tiempo que su equipo dedica a tareas repetitivas y reinviértalo en estrategia legal de alto valor.' },
    { icon: <TrendingUp size={40}/>, title: 'Crecimiento sin Aumentar Costes Fijos', desc: 'Asuma más casos y clientes de mayor valor sin la necesidad de ampliar su plantilla de asociados.' },
    { icon: <ShieldCheck size={40}/>, title: 'Precisión Documental Garantizada', desc: 'Elimine el riesgo de error humano en la revisión de documentos con un sistema que cita cada una de sus fuentes.' },
    { icon: <Target size={40}/>, title: 'Inteligencia de Mercado Proactiva', desc: 'Deje de esperar clientes. Identifique y contacte proactivamente con las oportunidades de mayor rentabilidad del mercado.' },
];

export const Slide14: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Beneficios Clave</h2>
            <div className="grid grid-cols-2 gap-10">
                {benefits.map((benefit, i) => (
                    <div key={benefit.title} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex items-center gap-6 mb-5">
                            <motion.div
                                className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                            >
                                {benefit.icon}
                            </motion.div>
                            <h3 className="text-4xl font-bold text-slate-900">{benefit.title}</h3>
                        </div>
                        <p className="text-2xl text-slate-600 pl-24">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};