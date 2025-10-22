import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { DatabaseZap, Search, FileText, Check, ShieldCheck } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const features = [
    { icon: <DatabaseZap size={40} />, text: 'Análisis Masivo de Expedientes' },
    { icon: <Search size={40} />, text: 'Extracción de Entidades y Cláusulas' },
    { icon: <FileText size={40} />, text: 'Generación de Resúmenes Ejecutivos' }
];

const guarantees = [
    'Cada respuesta vinculada a documentos específicos.',
    'Garantía de reembolso total si se detecta alguna alucinación.',
];

// FIX: Added types for component props to prevent potential runtime errors and improve type safety.
const AnimatedStat = ({ value, suffix = '' }: { value: number; suffix?: string; }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, value, { 
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3
        });
        return controls.stop;
    }, [value]);
    
    return (
        <div className="flex items-baseline justify-center">
            <motion.p className="text-6xl font-bold text-slate-900">{rounded}</motion.p>
            <p className="text-6xl font-bold text-slate-900">{suffix}</p>
        </div>
    );
};

export const Slide10: React.FC = () => {
    const benefits = [
        {l:'Análisis Acelerado',v:100, s:'x'},
        {l:'Ahorro de Tiempo',v:80, s:'%'}
    ];

    return (
        <SlideWrapper className="p-16">
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3: Analista Masivo de Documentos</h2>
            <p className="text-3xl text-slate-600 mb-10">Precisión absoluta garantizada.</p>

            <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-slate-50/50 p-6 rounded-lg flex items-center gap-6 border border-slate-200">
                            <div className="text-cyan-500">{feature.icon}</div>
                            <p className="text-3xl text-slate-700">{feature.text}</p>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {benefits.map(b=>(
                            <div key={b.l} className="bg-slate-50/50 p-4 rounded-lg text-center border border-slate-200">
                                <AnimatedStat value={b.v} suffix={b.s} />
                                <p className="text-lg text-slate-500 uppercase tracking-wider mt-1">{b.l}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-600/10 border-2 border-blue-500/50 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="text-5xl font-bold text-blue-600 flex items-center gap-4 mb-6">
                        <motion.div
                             animate={{ scale: [1, 1.05, 1] }}
                             transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <ShieldCheck size={52} />
                        </motion.div>
                        <span>Garantizado</span>
                    </h3>
                    <p className="text-[6rem] leading-none font-bold text-slate-900">0%</p>
                    <p className="text-4xl font-semibold text-blue-600 mt-2">Alucinaciones</p>
                     <ul className="space-y-3 mt-8 text-left">
                        {guarantees.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-blue-600 mt-1.5 flex-shrink-0" size={24}/>
                                <span className="text-slate-700 text-xl">{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 text-left p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <p className="font-bold text-blue-700 text-lg">¿Cómo lo garantizamos?</p>
                        <p className="text-slate-700 text-lg mt-1">Un sistema de 4 agentes IA de supervisión verifica cada dato contra las fuentes originales, asegurando una fiabilidad total.</p>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};