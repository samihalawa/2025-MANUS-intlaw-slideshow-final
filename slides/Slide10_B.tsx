import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Lightbulb, Building, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const opportunities = [
    { name: "Global Estate Corp", signal: "Ampliación de Capital", niche: "Real Estate", potential: "ALTO", color: "red" },
    { name: "Innovate BioTech", signal: "Registro de Patente", niche: "Propiedad Intelectual", potential: "MEDIO", color: "yellow" },
    { name: "Familia G. Lorca", signal: "Declaración de Herederos", niche: "Herencias", potential: "ALTO", color: "red" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
};

export const Slide10_B: React.FC = () => {
    return (
        <SlideWrapper className="p-12 flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Radar de Oportunidades Proactivas</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">Detectando clientes potenciales antes que nadie.</p>

            <div className="w-full max-w-6xl bg-slate-50/70 rounded-2xl shadow-xl border border-slate-200 p-6">
                <header className="flex justify-between items-center mb-4">
                    <h3 className="text-3xl font-bold text-slate-800 flex items-center gap-3"><Sparkles className="text-cyan-500" />Señales Detectadas</h3>
                    <div className="flex items-center gap-4">
                         <div className="text-right">
                            <p className="text-4xl font-bold text-slate-800">17</p>
                            <p className="text-sm text-slate-500 uppercase font-semibold">Nuevas esta semana</p>
                        </div>
                         <div className="text-right">
                            <p className="text-4xl font-bold text-slate-800">83</p>
                            <p className="text-sm text-slate-500 uppercase font-semibold">Total mes</p>
                        </div>
                    </div>
                </header>

                <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {opportunities.map((op, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white rounded-lg p-5 flex items-center gap-6 border border-slate-200 hover:shadow-lg hover:border-cyan-400/50 transition-all duration-300"
                        >
                            <div className={`w-20 h-20 rounded-lg bg-cyan-500/10 text-cyan-500 flex items-center justify-center`}>
                                <Building size={40} />
                            </div>
                            <div className="flex-grow">
                                <p className="font-bold text-3xl text-slate-800">{op.name}</p>
                                <div className="flex items-center gap-4 text-slate-500 mt-1 text-lg">
                                    <span className="flex items-center gap-2"><Lightbulb size={16}/> {op.signal}</span>
                                    <span className="flex items-center gap-2"><MapPin size={16}/> {op.niche}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className={`text-xl font-bold text-${op.color}-500 bg-${op.color}-500/10 px-3 py-1 rounded-full`}>{op.potential}</p>
                            </div>
                             <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-colors">
                                Contactar
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SlideWrapper>
    );
};