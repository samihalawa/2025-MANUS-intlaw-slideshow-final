import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ value, suffix = '', duration = 1.5 }: { value: number; suffix?: string; duration?: number; }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));
    
    useEffect(() => {
        const controls = animate(count, value, { duration });
        return () => controls.stop();
    }, [value, duration]);

    return (
        <>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </>
    );
};

const BarChart = ({ data }: { data: { label: string; value: number; color: string; }[] }) => (
    <div className="flex items-end justify-around h-48">
        {data.map(item => (
            <div key={item.label} className="flex flex-col items-center">
                <motion.div 
                    className={`w-16 rounded-t-md ${item.color}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${item.value}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                ></motion.div>
                <p className="mt-2 text-sm font-semibold text-slate-600">{item.label}</p>
            </div>
        ))}
    </div>
);

export const Slide14_Dashboard: React.FC = () => {
    const efficiencyData = [
        { label: 'Antes', value: 25, color: 'bg-slate-300' },
        { label: 'Después', value: 85, color: 'bg-cyan-500' },
    ];
     const capacityData = [
        { label: 'Antes', value: 40, color: 'bg-slate-300' },
        { label: 'Después', value: 90, color: 'bg-cyan-500' },
    ];

    return (
        <SlideWrapper className="p-12 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Dashboard de Retorno de Inversión (ROI)</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">Visualizando el impacto tangible de INTLAW AI.</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 flex-grow">
                {/* Eficiencia */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Zap className="text-cyan-500"/> Aumento de Eficiencia</h3>
                    <div className="text-center mb-4">
                        <p className="text-6xl font-bold text-cyan-500">
                           +<AnimatedNumber value={60} suffix="%" />
                        </p>
                        <p className="text-slate-600 text-lg">En tareas automatizables</p>
                    </div>
                    <BarChart data={efficiencyData} />
                </div>
                 {/* Crecimiento */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200">
                     <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><TrendingUp className="text-cyan-500"/> Capacidad de Crecimiento</h3>
                     <div className="text-center mb-4">
                        <p className="text-6xl font-bold text-cyan-500">
                           +<AnimatedNumber value={25} suffix="%" />
                        </p>
                        <p className="text-slate-600 text-lg">Casos gestionados sin ampliar equipo</p>
                    </div>
                     <BarChart data={capacityData} />
                </div>
                 {/* Reducción Errores */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center text-center">
                     <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><ShieldCheck className="text-cyan-500"/> Reducción de Errores</h3>
                     <p className="text-xl text-slate-500 line-through">15% Tasa de Error Humano</p>
                     <p className="text-7xl font-bold text-cyan-500 mt-2">
                        &lt;<AnimatedNumber value={1} suffix="%" />
                     </p>
                     <p className="text-slate-600 text-lg mt-2">En análisis y redacción documental</p>
                </div>
                 {/* Liderazgo */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 flex flex-col items-center justify-center text-center">
                     <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Award className="text-cyan-500"/> Liderazgo e Innovación</h3>
                     <p className="text-7xl font-bold text-cyan-500">
                        #<AnimatedNumber value={1} />
                     </p>
                     <p className="text-slate-600 text-lg mt-2">Posicionamiento como firma líder en tecnología legal</p>
                </div>
            </div>
        </SlideWrapper>
    );
};