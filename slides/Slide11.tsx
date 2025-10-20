import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Folder, FileText, Bot, User, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const ProcessingBlock = ({ pages, time }: { pages: string, time:string }) => (
    <div className="bg-slate-100 p-4 rounded-lg border border-slate-200 my-2 w-[400px]">
        <div className="flex items-center gap-4 mb-2">
            <Loader className="w-6 h-6 text-cyan-500 animate-spin"/>
            <p className="text-2xl font-semibold text-cyan-600">IA Procesando {pages}...</p>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5 my-2">
            <motion.div 
                className="bg-cyan-500 h-2.5 rounded-full" 
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'linear' }}
            ></motion.div>
        </div>
        <div className="text-xl text-slate-700">
            Análisis completado en <span className="font-bold">{time}</span>.
        </div>
    </div>
);

const chatSequence = [
    { from: 'user', text: 'Analizar el expediente e identificar cláusulas de posible incumplimiento.' },
    { from: 'bot', type: 'processing', pages: '1,653 páginas', time: '2m 15s' },
    { from: 'bot', type: 'text', text: 'Análisis completado. Se han identificado 8 cláusulas. ¿Se requiere un informe detallado?' },
];

export const Slide11: React.FC = () => {
    const [messages, setMessages] = useState([chatSequence[0]]);

    useInterval(() => {
        setMessages(prev => (prev.length < chatSequence.length) ? [...prev, chatSequence[prev.length]] : [chatSequence[0]]);
    }, 3500);

    return (
        <SlideWrapper className="p-8 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3 en Acción</h2>
            <p className="text-slate-600 text-center mb-6 text-2xl">Procesando miles de páginas en minutos.</p>

            <div className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex">
                {/* Left Panel - Documents */}
                <div className="w-2/5 border-r border-slate-200 p-5 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-2xl mb-4 flex items-center gap-3"><Folder/>Expediente Activo</h3>
                    <div className="space-y-4 flex-grow overflow-y-auto pr-2">
                        {[{n:'Contrato_Principal.pdf', p:'487 pág', s:'Procesando...'},{n:'Normativa_Aplicable.pdf', p:'1,166 pág', s:'Completado'}].map(d=>(
                            <div key={d.n} className="bg-white p-4 rounded-md flex items-center gap-4 border border-slate-200">
                                <FileText className="w-10 h-10 text-cyan-500 flex-shrink-0"/>
                                <div className="flex-grow"><p className="font-medium text-slate-700 text-2xl">{d.n}</p><p className="text-slate-500 text-lg">{d.p}</p></div>
                                {d.s === 'Procesando...' ? (
                                    <motion.span 
                                        animate={{ opacity: [1, 0.5, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="font-semibold text-lg text-yellow-500"
                                    >
                                        {d.s}
                                    </motion.span>
                                ) : (
                                    <span className="font-semibold text-lg text-green-500">{d.s}</span>
                                )}
                            </div>
                        ))}
                    </div>
                     <div className="mt-4 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg text-center text-white">
                         <p className="text-6xl font-bold">1,653</p>
                         <p className="text-lg uppercase font-semibold tracking-wider">Páginas Totales</p>
                     </div>
                </div>

                {/* Right Panel - Chat */}
                <div className="w-3/5 p-5 flex flex-col">
                    <div className="flex-grow space-y-4">
                        <AnimatePresence>
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}
                            >
                                {msg.from === 'bot' && <div className="w-12 h-12 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0"><Bot/></div>}
                                
                                {msg.type === 'processing' ? (
                                    <ProcessingBlock pages={msg.pages!} time={msg.time!} />
                                ) : (
                                    <div className={`p-4 rounded-2xl max-w-lg text-2xl ${msg.from === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-100 text-slate-700 rounded-bl-none'}`}>
                                        {msg.text}
                                    </div>
                                )}

                                {msg.from === 'user' && <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"><User className="text-slate-600"/></div>}
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                    <div className="mt-4">
                        <input type="text" placeholder="Realice una pregunta sobre los documentos..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-xl outline-none focus:ring-1 focus:ring-cyan-500 transition-all" />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
