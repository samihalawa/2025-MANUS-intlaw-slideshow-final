import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Webhook, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ignacioPoints = [
    { text: "Análisis Rentabilidad 'Mutaciones'" },
    { text: "Extraer leads de Idealista" },
    { text: "P&L mensual por cliente/socio" },
];

const simonePoints = [
    { text: "Automatizar scoring y compliance" },
    { text: "Integrar chatbot en WordPress" },
    { text: "Asistencia IA para contenido" },
];

const Card = ({ title, points, icon }: { title: string; points: { text: string }[]; icon: React.ReactNode; }) => (
    <div className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#dbeafe] text-[#1e40af] rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-6xl font-bold text-slate-800">{title}</h3>
        </div>
        <ul className="space-y-4 text-4xl text-slate-700 flex-grow">
            {points.map((point, index) => (
                <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                >
                    <CheckCircle className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
                    <span>{point.text}</span>
                </motion.li>
            ))}
        </ul>
    </div>
);

export const Slide03_Analysis: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-9xl font-bold tracking-tighter text-slate-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Solución a Medida</h2>
            <p className="text-4xl text-slate-600 mb-12 text-center">Respuesta a sus desafíos.</p>

            <div className="grid grid-cols-2 gap-8">
                <Card title="Para Ignacio: Eficiencia y Crecimiento" points={ignacioPoints} icon={<Target size={32}/>} />
                <Card title="Para Simone: Web y Automatización" points={simonePoints} icon={<Webhook size={32}/>} />
            </div>
        </SlideWrapper>
    );
};