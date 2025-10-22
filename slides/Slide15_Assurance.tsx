import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { ShieldCheck, CheckSquare, Clock, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const guarantees = [
    {
        icon: <CheckSquare size={40} />,
        title: "Criterios de Aceptación Medibles",
        desc: "Cada fase se aprueba contra métricas claras de rendimiento (ej: ≥95% precisión en cualificación) antes de proceder con el pago."
    },
    {
        icon: <Clock size={40} />,
        title: "Compromiso Férreo con los Plazos",
        desc: "En caso de no cumplir con la fecha de entrega por causas atribuibles a nuestro equipo, se aplica una penalización del 10% sobre el hito."
    },
    {
        icon: <ShieldCheck size={40} />,
        title: "Soporte Post-Lanzamiento (90 Días)",
        desc: "La entrega final es solo el comienzo. Incluimos un periodo de soporte completo para la corrección de errores sin coste."
    },
    {
        icon: <Repeat size={40} />,
        title: "Cláusula de Reembolso por Defectos",
        desc: "Si un defecto crítico no se resuelve en 30 días, la inversión del módulo afectado está protegida con un reembolso del 100%."
    },
];

export const Slide15_Assurance: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Garantías: Compromiso de Riesgo Cero</h2>
            <p className="text-3xl text-slate-600 mb-16 text-center max-w-5xl mx-auto">Un marco de garantías explícitas que protege su inversión en cada paso.</p>
            
            <div className="grid grid-cols-2 gap-10">
                {guarantees.map((item, i) => (
                    <motion.div
                        key={item.title}
                        className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                    >
                        <div className="flex items-center gap-6 mb-5">
                             <motion.div
                                className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                            >
                                {item.icon}
                            </motion.div>
                            <h3 className="text-4xl font-bold text-slate-900">{item.title}</h3>
                        </div>
                        <p className="text-2xl text-slate-600 pl-24">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </SlideWrapper>
    );
};