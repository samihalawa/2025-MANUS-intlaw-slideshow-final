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
                <p className="mt-2 text-xs font-semibold text-white/60 uppercase tracking-[0.3em]">{item.label}</p>
            </div>
        ))}
    </div>
);

export const Slide14_Dashboard: React.FC = () => {
    const efficiencyData = [
        { label: 'Antes', value: 25, color: 'bg-white/30' },
        { label: 'Después', value: 85, color: 'bg-cyan-300' },
    ];
     const capacityData = [
        { label: 'Antes', value: 40, color: 'bg-white/30' },
        { label: 'Después', value: 90, color: 'bg-cyan-300' },
    ];

    return (
        <SlideWrapper className="p-12 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tight text-[#071733] text-center mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Dashboard de Retorno de Inversión (ROI)</h2>
            <p className="text-[#2C4874] text-center mb-10 text-lg uppercase tracking-[0.35em]">Eficiencia · Crecimiento · Calidad · Liderazgo</p>
            <div className="grid grid-cols-2 grid-rows-2 gap-8 flex-grow">
                {/* Eficiencia */}
                <div className="bg-gradient-to-br from-[#051026] via-[#102148] to-[#1A3665] rounded-3xl p-6 border border-white/12 text-white shadow-[0_22px_60px_rgba(7,15,32,0.4)]">
                    <h3 className="text-lg font-semibold text-white/80 uppercase tracking-[0.35em] mb-4 flex items-center gap-3"><Zap className="text-cyan-200"/> Aumento de Eficiencia</h3>
                    <div className="text-center mb-4">
                        <p className="text-5xl font-bold text-cyan-200">
                           +<AnimatedNumber value={60} suffix="%" />
                        </p>
                        <p className="text-white/60 text-sm uppercase tracking-[0.35em] mt-2">En tareas automatizables</p>
                    </div>
                    <BarChart data={efficiencyData} />
                </div>
                 {/* Crecimiento */}
                <div className="bg-gradient-to-br from-[#051026] via-[#11244E] to-[#1D3B6E] rounded-3xl p-6 border border-white/12 text-white shadow-[0_22px_60px_rgba(7,15,32,0.4)]">
                     <h3 className="text-lg font-semibold text-white/80 uppercase tracking-[0.35em] mb-4 flex items-center gap-3"><TrendingUp className="text-cyan-200"/> Capacidad de Crecimiento</h3>
                     <div className="text-center mb-4">
                        <p className="text-5xl font-bold text-cyan-200">
                           +<AnimatedNumber value={25} suffix="%" />
                        </p>
                        <p className="text-white/60 text-sm uppercase tracking-[0.35em] mt-2">Casos gestionados sin ampliar equipo</p>
                    </div>
                     <BarChart data={capacityData} />
                </div>
                 {/* Reducción Errores */}
                <div className="bg-gradient-to-br from-[#051026] via-[#102349] to-[#1C3768] rounded-3xl p-6 border border-white/12 flex flex-col items-center justify-center text-center text-white shadow-[0_22px_60px_rgba(7,15,32,0.4)]">
                     <h3 className="text-lg font-semibold text-white/80 uppercase tracking-[0.35em] mb-4 flex items-center gap-3"><ShieldCheck className="text-cyan-200"/> Reducción de Errores</h3>
                     <p className="text-sm text-white/40 line-through uppercase tracking-[0.35em]">15% tasa de error humano</p>
                     <p className="text-6xl font-bold text-cyan-200 mt-2">
                        &lt;<AnimatedNumber value={1} suffix="%" />
                     </p>
                     <p className="text-white/60 text-sm mt-2 uppercase tracking-[0.35em]">En análisis y redacción documental</p>
                </div>
                 {/* Liderazgo */}
                <div className="bg-gradient-to-br from-[#051026] via-[#122650] to-[#1E3C70] rounded-3xl p-6 border border-white/12 flex flex-col items-center justify-center text-center text-white shadow-[0_22px_60px_rgba(7,15,32,0.4)]">
                     <h3 className="text-lg font-semibold text-white/80 uppercase tracking-[0.35em] mb-4 flex items-center gap-3"><Award className="text-cyan-200"/> Liderazgo e Innovación</h3>
                     <p className="text-6xl font-bold text-cyan-200">
                        #<AnimatedNumber value={1} />
                     </p>
                     <p className="text-white/60 text-sm mt-2 uppercase tracking-[0.35em]">Posicionamiento como firma líder en tecnología legal</p>
                </div>
            </div>
        </SlideWrapper>
    );
};
