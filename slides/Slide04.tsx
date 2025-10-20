import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, Users, MessageSquare } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ value }: { value: number }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, value, { 
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 4,
        });
        return controls.stop;
    }, [value]);

    return <motion.span>{rounded}</motion.span>;
};

const stats = [
    { value: '>85%', label: 'Potencial Automatización', icon: <Bot size={48} /> },
    { value: '+30%', label: 'Proyección Captación', icon: <Users size={48} /> },
    { value: '24/7', label: 'Disponibilidad IA', icon: <MessageSquare size={48} /> },
]

export const Slide04: React.FC = () => {
  return (
    <SlideWrapper className="p-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Visión: INTLAW AI</h2>
      <p className="mt-4 text-3xl text-slate-600">Un ecosistema legal inteligente y proactivo.</p>
      
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="text-3xl font-semibold text-slate-700 mb-12 tracking-wider uppercase">Dashboard de Impacto</h3>
        <div className="grid grid-cols-3 gap-8">
            {stats.map(stat => {
                const isAnimatable = !isNaN(parseInt(stat.value.replace(/[^0-9]/g, '')));
                const numberValue = isAnimatable ? parseInt(stat.value.replace(/[^0-9]/g, '')) : 0;
                
                return (
                    <div key={stat.label} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 shadow-lg flex flex-col items-center justify-center hover:bg-white transition-colors duration-300">
                        <div className="text-cyan-500 mb-6">{stat.icon}</div>
                        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                            {stat.value.startsWith('>') && '>'}
                            {stat.value.startsWith('+') && '+'}
                            {isAnimatable ? <AnimatedNumber value={numberValue} /> : stat.value}
                            {stat.value.endsWith('%') && '%'}
                        </div>
                        <div className="mt-4 text-2xl font-semibold text-slate-600 uppercase tracking-widest">{stat.label}</div>
                    </div>
                );
            })}
        </div>
      </div>
    </SlideWrapper>
  );
};
