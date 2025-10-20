import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Search, Filter, Send, Target } from 'lucide-react';
// FIX: Import `Variants` type from framer-motion to ensure correct type inference.
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type `stepVariants` with `Variants` to prevent type widening issues with nested properties.
const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i:number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            type: 'spring',
            stiffness: 100,
        }
    })
};

const steps = [
    { icon: <Search size={40}/>, title: 'Identificar Señales', desc: 'IA rastrea datos públicos para detectar oportunidades.'},
    { icon: <Filter size={40}/>, title: 'Cualificar por Nicho', desc: 'Filtra oportunidades por nicho (herencias, real estate).'},
    { icon: <Send size={40}/>, title: 'Contacto Personalizado', desc: 'Genera emails de contacto proactivo y relevante.'},
    { icon: <Target size={40}/>, title: 'Captación Efectiva', desc: 'Adelántese a la competencia y capte nuevos clientes.'},
];

export const Slide10_A: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-9xl font-bold tracking-tighter text-slate-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 2: Prospección Proactiva</h2>
            <p className="text-4xl text-slate-600 mb-12 text-center">Captación proactiva por nicho.</p>
            <div className="grid grid-cols-4 gap-8">
                {steps.map((step, i) => (
                    <motion.div 
                        key={step.title}
                        className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 text-center flex flex-col items-center hover:bg-white hover:shadow-lg transition-all"
                        custom={i}
                        variants={stepVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="w-24 h-24 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg mb-6">
                            {step.icon}
                        </div>
                        <h3 className="text-5xl font-bold text-slate-800 mb-4">{step.title}</h3>
                        <p className="text-3xl text-slate-600 flex-grow">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SlideWrapper>
    );
};