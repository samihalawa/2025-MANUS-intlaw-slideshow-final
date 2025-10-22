import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Webhook, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ignacioPoints = [
    { text: "Procesar 5,000 folios para encontrar las '50 cosas importantes' al instante." },
    { text: <>Un Agente IA con 0% Alucinaciones (Garantizado) que <i>cita</i> sus fuentes.</> },
    { text: "Simulación y Estrategia de Casos" },
];

const simonePoints = [
    { text: "Automatizar el 'scoring' de leads y la solicitud de 'compliance'" },
    { text: "Integrar un chatbot inteligente en el WordPress actual" },
    { text: "Asistencia IA en la creación y personalización de contenidos" },
];

const Card = ({ title, points, icon }: { title: string; points: { text: React.ReactNode }[]; icon: React.ReactNode; }) => (
    <div className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-cyan-500/10 text-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                {icon}
            </div>
            <h3 className="text-4xl font-bold text-slate-800">{title}</h3>
        </div>
        <ul className="space-y-4 text-2xl text-slate-700 flex-grow">
            {points.map((point, index) => (
                <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
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
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Una Solución a su Medida</h2>
            <p className="text-3xl text-slate-600 mb-12 text-center">Hemos escuchado sus desafíos y diseñado una respuesta directa.</p>

            <div className="grid grid-cols-2 gap-8">
                <Card title="Para el Área Legal: Eficiencia y Precisión" points={ignacioPoints} icon={<Target size={32}/>} />
                <Card title="Para Captación de Clientes: Crecimiento y Automatización" points={simonePoints} icon={<Webhook size={32}/>} />
            </div>
        </SlideWrapper>
    );
};