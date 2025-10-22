import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, Users, Clock, Euro } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

const AnimatedNumber = ({ value }: { value: number }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { 
                duration: 1.5,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, value]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
};

const stats = [
    { value: '>85%', label: 'Potencial Automatización', icon: <Bot size={48} /> },
    { value: '+30%', label: 'Proyección Captación', icon: <Users size={48} /> },
    { value: '+40%', label: 'Incremento Rentabilidad', icon: <Euro size={48} /> },
    { value: '<60s', label: 'Tiempo de Respuesta', icon: <Clock size={48} /> },
]

export const Slide04: React.FC = () => {
  return (
    <SlideWrapper className="p-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Visión: INTLAW AI</h2>
      <p className="mt-4 text-3xl text-slate-600">Un ecosistema legal inteligente y proactivo.</p>
      
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="text-3xl font-semibold text-slate-700 mb-12 tracking-wider uppercase">Dashboard de Impacto</h3>
        <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => {
                const isAnimatable = !isNaN(parseInt(stat.value.replace(/[^0-9]/g, '')));
                const numberValue = isAnimatable ? parseInt(stat.value.replace(/[^0-9]/g, '')) : 0;
                
                return (
                    <div key={stat.label} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 shadow-lg flex flex-col items-center justify-center hover:bg-white transition-colors duration-300">
                        <motion.div 
                          className="text-cyan-500 mb-6"
                          animate={{ scale: [1, 1.1, 1], y: [0, -5, 0] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                        >
                          {stat.icon}
                        </motion.div>
                        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                            {stat.value.startsWith('>') && '>'}
                            {stat.value.startsWith('+') && '+'}
                             {stat.value.startsWith('<') && '<'}
                            {isAnimatable ? <AnimatedNumber value={numberValue} /> : stat.value}
                            {stat.value.endsWith('%') && '%'}
                            {stat.value.endsWith('s') && 's'}
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