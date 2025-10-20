import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Folder, FileText, Bot, User, Loader, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const chatSequence = [
    { from: 'user', text: 'Analizar contradicciones entre el Contrato Principal y el Anexo II sobre Propiedad Intelectual.' },
    { from: 'bot', type: 'processing' },
    { from: 'bot', type: 'text', text: "Análisis completado. He encontrado una contradicción crítica:",
      citations: [
        { id: 'c1', text: "1. El Contrato Principal indica que la PI pertenece 100% al Comprador." },
        { id: 'c2', text: "2. El Anexo II establece que la PI es compartida (50/50)." }
      ]
    },
];

export const Slide11_B: React.FC = () => {
    const [messages, setMessages] = useState([chatSequence[0]]);
    const [highlightedClause, setHighlightedClause] = useState<string | null>(null);

    useInterval(() => {
        setMessages(prev => (prev.length < chatSequence.length) ? [...prev, chatSequence[prev.length]] : [chatSequence[0]]);
    }, 5000);

    return (
        <SlideWrapper className="p-8 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Agente de Documentos con Citas</h2>
            <p className="text-slate-600 text-center mb-6 text-2xl">La garantía de 0% Alucinaciones: la IA cita sus fuentes.</p>

            <div className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex gap-4 p-4">
                {/* Left Panel - Documents */}
                <div className="w-1/4 p-4 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-2xl mb-4 flex items-center gap-3"><Folder/>Expediente</h3>
                    <div className="space-y-3">
                         {[{n:'Contrato_Principal.pdf', a:true},{n:'Anexo II P.I.pdf', a:false},{n:'Normativa_Aplicable.pdf', a:false}].map(d=>(
                            <div key={d.n} className={`p-3 rounded-md flex items-center gap-3 border transition-colors ${d.a ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-white border-slate-200'}`}>
                                <FileText className={`w-8 h-8 flex-shrink-0 ${d.a ? 'text-cyan-500' : 'text-slate-400'}`}/>
                                <p className={`font-medium text-xl ${d.a ? 'text-slate-800' : 'text-slate-500'}`}>{d.n}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Panel - Document Viewer */}
                <div className="w-2/4 bg-white h-full rounded-lg shadow-inner border border-slate-200 p-6 relative overflow-y-auto">
                     <p className="font-bold text-xl mb-4">Contrato_Principal.pdf</p>
                     <div className="text-slate-600 text-xl space-y-4 font-mono leading-relaxed">
                        <p>...</p>
                        <p className="relative">
                            <AnimatePresence>
                            {highlightedClause === 'c1' && (
                                <motion.span 
                                    className="absolute -inset-x-2 -inset-y-1 bg-yellow-300/80 rounded"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                />
                            )}
                            </AnimatePresence>
                            <span className="relative">Artículo 4.B. Transferencia de Propiedad Intelectual. Tras la transacción, todos los derechos de Propiedad Intelectual, sin excepción, serán transferidos en su totalidad y de forma exclusiva a la Compradora.</span>
                        </p>
                         <p>...</p>
                          <p className="relative">
                            <AnimatePresence>
                            {highlightedClause === 'c2' && (
                                <motion.span 
                                    className="absolute -inset-x-2 -inset-y-1 bg-yellow-300/80 rounded"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                />
                            )}
                            </AnimatePresence>
                            <span className="relative">[Este highlight simula estar en el Anexo II, página 4]</span>
                        </p>
                     </div>
                </div>

                {/* Right Panel - Chat */}
                <div className="w-1/4 p-4 flex flex-col bg-slate-100/50 rounded-lg">
                    <h3 className="font-bold text-slate-900 text-2xl mb-4 flex items-center gap-3"><Sparkles className="text-cyan-500"/>Chat IA</h3>
                    <div className="flex-grow space-y-4">
                        <AnimatePresence>
                        {messages.map((msg, i) => (
                             <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                {msg.from === 'bot' && <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center flex-shrink-0"><Bot size={20}/></div>}
                                <div className="space-y-2">
                                    {msg.type === 'processing' ? (
                                        <div className="bg-white p-3 rounded-lg flex items-center gap-3 border border-slate-200"><Loader className="w-5 h-5 text-cyan-500 animate-spin"/><p className="text-lg font-semibold text-cyan-600">Analizando...</p></div>
                                    ) : (
                                        <div className={`p-3 rounded-lg max-w-lg text-xl ${msg.from === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none border border-slate-200'}`}>
                                            <p>{msg.text}</p>
                                            {msg.citations && msg.citations.map(c => (
                                                <p key={c.id} onMouseEnter={() => setHighlightedClause(c.id)} onMouseLeave={() => setHighlightedClause(null)} className="mt-2 p-2 bg-slate-100 rounded cursor-pointer hover:bg-yellow-100 transition-colors border-l-4 border-slate-300 hover:border-yellow-400">{c.text}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {msg.from === 'user' && <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0"><User size={20} className="text-slate-600"/></div>}
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};