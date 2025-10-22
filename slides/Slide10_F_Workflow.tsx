import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, ArrowRight, BarChart, User, FileText, Sparkles, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 100,
        },
    },
};

// FIX: Explicitly type Card as React.FC to ensure the 'children' prop is correctly handled by TypeScript.
const Card: React.FC<{ children: React.ReactNode; className?: string; }> = ({ children, className }) => (
    <motion.div variants={itemVariants} className={`bg-white rounded-xl shadow-lg border border-slate-200 p-6 h-full flex flex-col ${className}`}>
        {children}
    </motion.div>
);

export const Slide10_F_Workflow: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>De la Señal a la Estrategia</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">El ciclo de vida completo del caso proactivo.</p>

            <motion.div 
                className="grid grid-cols-12 gap-6 items-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {/* Step 1: Detection */}
                <div className="col-span-3">
                    <Card>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Target className="text-cyan-500"/> 1. Detección</h3>
                        <div className="bg-slate-50/70 p-4 rounded-lg border border-slate-200 flex-grow">
                            <p className="font-semibold text-slate-600 text-lg">Nueva Señal de Mercado</p>
                            <p className="font-bold text-slate-800 text-xl mt-2">Transacción Inmobiliaria</p>
                            <p className="text-slate-600 text-lg">Valor: <span className="font-semibold">€2.5M</span></p>
                            <p className="text-slate-600 text-lg">Zona: <span className="font-semibold">Recoletos, Madrid</span></p>
                            <p className="text-slate-600 text-sm mt-2">Fuente: Reg. de la Propiedad</p>
                        </div>
                    </Card>
                </div>

                 <motion.div variants={itemVariants} className="col-span-1 flex items-center justify-center h-full pt-24">
                    <ArrowRight className="text-slate-400 w-12 h-12" />
                </motion.div>

                {/* Step 2: 360 View */}
                <div className="col-span-4">
                    <Card className="bg-cyan-500/5">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><BarChart className="text-cyan-500"/> 2. Vista 360° (Auto-Generada)</h3>
                         <div className="bg-white p-4 rounded-lg border border-slate-200 space-y-4">
                            <div>
                                <h4 className="font-bold text-slate-900 text-xl">Global Realty S.L.</h4>
                                <p className="text-slate-500 text-base">Caso Proactivo #1138</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-lg flex items-center gap-2"><User size={16}/> <strong>Contacto IA:</strong> A. García (CEO)</p>
                                <p className="text-lg flex items-center gap-2"><FileText size={16}/> <strong>Documento:</strong> Nota Simple</p>
                            </div>
                            <div className="bg-slate-100/60 p-3 rounded-md">
                                <p className="font-semibold text-cyan-800 text-base">Insight Estratégico IA:</p>
                                <p className="text-slate-700 text-base">La empresa muestra un patrón de expansión recurrente. El Copilot recomienda un enfoque en servicios de consultoría urbanística para maximizar el valor a largo plazo.</p>
                            </div>
                        </div>
                    </Card>
                </div>
                
                <motion.div variants={itemVariants} className="col-span-1 flex items-center justify-center h-full pt-24">
                    <ArrowRight className="text-slate-400 w-12 h-12" />
                </motion.div>

                {/* Step 3: Action */}
                <div className="col-span-3">
                    <Card>
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Sparkles className="text-cyan-500"/> 3. Acción</h3>
                        <div className="bg-slate-50/70 p-4 rounded-lg border border-slate-200 flex-grow">
                             <p className="font-semibold text-slate-500 text-lg">Copilot de Contacto</p>
                            <p className="text-slate-700 bg-white p-3 rounded-md mt-2 text-base border">
                                "Estimada Sra. García,
                                Nuestro sistema de inteligencia de mercado ha identificado la reciente operación de Global Realty en Recoletos. Dado nuestro expertise..."
                            </p>
                        </div>
                        <button className="w-full bg-cyan-500 text-white font-bold py-3 rounded-lg text-lg flex items-center justify-center gap-3 transition-colors mt-4 hover:bg-cyan-600">
                            <Send size={18} /> Enviar Email Personalizado
                        </button>
                    </Card>
                </div>

            </motion.div>
        </SlideWrapper>
    );
};