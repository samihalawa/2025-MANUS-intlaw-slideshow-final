import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Link, AlertTriangle, CalendarDays } from 'lucide-react';
import { motion } from 'framer-motion';

const Node = ({ name, position, isCentral = false }: { name: string, position: string, isCentral?: boolean }) => (
    <motion.div
        className={`absolute ${position} w-32 h-32 rounded-full flex items-center justify-center text-center p-2 text-lg font-semibold border-4 ${isCentral ? 'bg-cyan-500 text-white border-cyan-700' : 'bg-white text-slate-800 border-slate-300'} shadow-lg`}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: Math.random() }}
    >
        {name}
    </motion.div>
);

const Line = ({ from, to }: { from: {x: string, y: string}, to: {x: string, y: string} }) => (
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <line x1={from.x} y1={from.y} x2={to.x} y2={to.y} stroke="#cbd5e1" strokeWidth="3" />
    </svg>
);

export const Slide10_C: React.FC = () => {
    const nodes = {
        center: { x: '50%', y: '50%' },
        c1: { x: '20%', y: '20%' },
        c2: { x: '80%', y: '25%' },
        c3: { x: '15%', y: '75%' },
        c4: { x: '75%', y: '80%' },
    };

    return (
        <SlideWrapper className="p-12 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Inteligencia Documental</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">Conectando los puntos clave de miles de páginas.</p>
            <div className="flex-grow grid grid-cols-3 gap-8">
                {/* Knowledge Graph */}
                <div className="col-span-2 bg-slate-50/70 rounded-2xl p-6 border border-slate-200 relative">
                     <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Link className="text-cyan-500"/> Mapa de Entidades</h3>
                     <div className="relative w-full h-full -z-10">
                        <Line from={nodes.center} to={nodes.c1} />
                        <Line from={nodes.center} to={nodes.c2} />
                        <Line from={nodes.center} to={nodes.c3} />
                        <Line from={nodes.center} to={nodes.c4} />
                        <Node name="Contrato Principal" position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" isCentral />
                        <Node name="TechCorp S.L." position="top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2" />
                        <Node name="Anexo II Prop. Int." position="top-[25%] left-[80%] -translate-x-1/2 -translate-y-1/2" />
                        <Node name="Acta de Fusión" position="top-[75%] left-[15%] -translate-x-1/2 -translate-y-1/2" />
                        <Node name="Cláusula 4.B" position="top-[80%] left-[75%] -translate-x-1/2 -translate-y-1/2" />
                     </div>
                </div>
                {/* Insights Panel */}
                <div className="flex flex-col gap-8">
                    <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><AlertTriangle className="text-red-500"/> Cláusulas Críticas</h3>
                        <div className="space-y-3">
                            <div className="bg-red-500/10 p-3 rounded-md border-l-4 border-red-500">
                                <p className="font-semibold text-slate-800 text-xl">Contradicción de P.I.</p>
                                <p className="text-slate-600 text-lg">Contrato Principal vs. Anexo II</p>
                            </div>
                             <div className="bg-yellow-500/10 p-3 rounded-md border-l-4 border-yellow-500">
                                <p className="font-semibold text-slate-800 text-xl">Fecha de Vencimiento</p>
                                <p className="text-slate-600 text-lg">Acuerdo de Confidencialidad</p>
                            </div>
                        </div>
                    </div>
                     <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200 flex-1">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><CalendarDays className="text-cyan-500"/> Línea de Tiempo</h3>
                        <ul className="space-y-3 text-lg">
                           <li className="flex items-center gap-3"><span className="font-bold text-slate-700">15 ENE:</span> Firma Contrato</li>
                           <li className="flex items-center gap-3"><span className="font-bold text-slate-700">01 FEB:</span> Inicio Vigencia</li>
                           <li className="flex items-center gap-3"><span className="font-bold text-slate-700">15 MAR:</span> Primer Pago</li>
                        </ul>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};