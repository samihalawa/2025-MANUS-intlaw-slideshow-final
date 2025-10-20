import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Euro, BarChart, Target, FileText, Check, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

// FIX: Switched to a dedicated interface for props to resolve TypeScript errors with the `children` prop.
interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, children }) => (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 h-full">
        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">{icon}{title}</h3>
        {children}
    </div>
);

export const Slide14_C: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Plataforma Unificada: Vista del Caso 360°</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">Toda la inteligencia de un caso en una sola pantalla.</p>

            <motion.div 
                className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200"
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                {/* Header */}
                <div className="border-b border-slate-200 pb-4 mb-6">
                    <h2 className="text-4xl font-bold text-slate-900">Caso 4588: Compañía XYZ S.L.</h2>
                    <div className="flex gap-6 text-xl text-slate-600 mt-2">
                        <span><strong className="font-semibold">Tipo:</strong> Contrato Mercantil</span>
                        <span><strong className="font-semibold">Socio:</strong> Ignacio Jové</span>
                        <span><strong className="font-semibold">Estado:</strong> <span className="text-green-600 font-bold">Análisis Completado</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column */}
                    <div className="col-span-2 space-y-6">
                        <StatCard icon={<Euro className="text-cyan-500"/>} title="Análisis Financiero y Pricing IA">
                            <div className="space-y-4">
                                <p className="text-xl"><strong>Salud Financiera:</strong> Caja Estimada: 300.000€+</p>
                                <div className="bg-cyan-500/10 p-4 rounded-lg">
                                    <p className="font-bold text-cyan-800">Rango de Honorarios Recomendado IA:</p>
                                    <p className="text-4xl font-bold text-slate-800 mt-1">€6,000 - €8,500</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <label className="font-semibold text-xl">Propuesta Actual:</label>
                                    <input type="text" defaultValue="€ 7,200" className="w-48 bg-white border-2 border-slate-300 rounded-md p-2 text-xl font-bold text-slate-800 text-center" />
                                    <button className="bg-cyan-500 text-white font-bold py-2 px-4 rounded-md text-lg">Enviar Propuesta</button>
                                </div>
                            </div>
                        </StatCard>
                        <StatCard icon={<FileText className="text-cyan-500"/>} title="Documentos y Acciones">
                             <div className="flex items-center justify-between bg-slate-100 p-3 rounded-md">
                                <p className="text-xl font-semibold">Contrato_V1.pdf</p>
                                <span className="text-lg font-semibold text-green-500">Analizado</span>
                             </div>
                             <button className="mt-4 w-full bg-slate-800 text-white font-bold py-3 rounded-md text-lg">Generar Propuesta de Honorarios</button>
                        </StatCard>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <StatCard icon={<Clock className="text-cyan-500"/>} title="Línea de Tiempo">
                            <ul className="space-y-2 text-lg">
                                <li><strong>Hoy:</strong> Chequeo financiero OK</li>
                                <li><strong>Ayer:</strong> Análisis IA completado</li>
                                <li><strong>Ayer:</strong> Documento recibido</li>
                                <li className="text-slate-500"><strong>Hace 2 días:</strong> Lead recibido (WhatsApp)</li>
                            </ul>
                        </StatCard>
                         <StatCard icon={<Check className="text-cyan-500"/>} title="Próximas Tareas IA">
                            <ul className="space-y-2 text-lg">
                                <li className="flex items-center gap-2"><input type="checkbox" className="w-5 h-5"/> Revisar y confirmar honorarios.</li>
                                <li className="flex items-center gap-2"><input type="checkbox" className="w-5 h-5"/> Enviar propuesta al cliente.</li>
                            </ul>
                        </StatCard>
                    </div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};