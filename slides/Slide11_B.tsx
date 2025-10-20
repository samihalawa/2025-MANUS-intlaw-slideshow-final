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
        <SlideWrapper className="p-10 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tight text-[#071733] text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Agente de Documentos con Citas</h2>
            <p className="text-[#2C4874] text-center mb-6 text-xl uppercase tracking-[0.35em]">
                Evidencia cada conclusión con citas verificables · 0% alucinaciones
            </p>

            <div className="flex-grow relative">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#041026] via-[#10224A] to-[#1D386B]" />
                <div className="absolute inset-0 rounded-[36px] border border-white/15" />
                <div className="relative z-10 h-full grid grid-cols-[0.85fr,1.35fr,0.85fr] gap-6 p-6 text-white">
                {/* Left Panel - Documents */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col backdrop-blur-sm">
                    <h3 className="font-semibold text-white/80 text-sm uppercase tracking-[0.35em] mb-4 flex items-center gap-3">
                        <Folder className="text-cyan-200"/>Expediente
                    </h3>
                    <div className="space-y-3 text-sm">
                         {[{n:'Contrato_Principal.pdf', a:true},{n:'Anexo II P.I.pdf', a:false},{n:'Normativa_Aplicable.pdf', a:false}].map(d=>(
                            <div key={d.n} className={`p-4 rounded-xl flex items-center gap-3 border transition-colors ${d.a ? 'bg-white/15 border-white/25' : 'bg-white/5 border-white/10'}`}>
                                <FileText className={`w-7 h-7 flex-shrink-0 ${d.a ? 'text-cyan-200' : 'text-white/40'}`}/>
                                <p className={`font-semibold text-base ${d.a ? 'text-white' : 'text-white/60'}`}>{d.n}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Panel - Document Viewer */}
                <div className="rounded-2xl bg-[#0A1E3D]/90 border border-white/15 p-6 relative overflow-hidden shadow-inner">
                     <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/40 mb-4">
                        <span>Contrato_Principal.pdf</span>
                        <span>Vista IA</span>
                     </div>
                     <div className="h-full overflow-y-auto pr-2 text-white/80 text-base space-y-5 font-mono leading-relaxed">
                        <p className="opacity-40">...</p>
                        <p className="relative">
                            <AnimatePresence>
                            {highlightedClause === 'c1' && (
                                <motion.span 
                                    className="absolute -inset-x-2 -inset-y-1 bg-amber-400/40 rounded-md"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                />
                            )}
                            </AnimatePresence>
                            <span className="relative">Artículo 4.B. Transferencia de Propiedad Intelectual. Tras la transacción, todos los derechos de Propiedad Intelectual, sin excepción, serán transferidos en su totalidad y de forma exclusiva a la Compradora.</span>
                        </p>
                        <p className="opacity-40">...</p>
                        <p className="relative">
                            <AnimatePresence>
                            {highlightedClause === 'c2' && (
                                <motion.span 
                                    className="absolute -inset-x-2 -inset-y-1 bg-amber-400/40 rounded-md"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                />
                            )}
                            </AnimatePresence>
                            <span className="relative text-white">[Este highlight simula estar en el Anexo II, página 4]</span>
                        </p>
                     </div>
                </div>

                {/* Right Panel - Chat */}
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col backdrop-blur-sm">
                    <h3 className="font-semibold text-white/80 text-sm uppercase tracking-[0.35em] mb-4 flex items-center gap-3">
                        <Sparkles className="text-cyan-200"/>Chat IA
                    </h3>
                    <div className="flex-grow space-y-4 overflow-y-auto pr-2">
                        <AnimatePresence>
                        {messages.map((msg, i) => (
                             <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`flex items-start gap-3 ${msg.from === 'user' ? 'justify-end' : ''}`}>
                                {msg.from === 'bot' && <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center flex-shrink-0 border border-white/15"><Bot size={20}/></div>}
                                <div className="space-y-2">
                                    {msg.type === 'processing' ? (
                                        <div className="bg-white/10 p-3 rounded-xl flex items-center gap-3 border border-white/10"><Loader className="w-5 h-5 text-cyan-200 animate-spin"/><p className="text-sm font-semibold text-cyan-100 tracking-[0.3em] uppercase">Analizando…</p></div>
                                    ) : (
                                        <div className={`p-4 rounded-2xl max-w-xs text-sm leading-relaxed ${msg.from === 'user' ? 'bg-gradient-to-r from-[#42E4CF] to-[#2F8FFF] text-[#041630] rounded-br-none' : 'bg-white/10 text-white rounded-bl-none border border-white/10'}`}>
                                            <p>{msg.text}</p>
                                            {msg.citations && msg.citations.map(c => (
                                                <p
                                                    key={c.id}
                                                    onMouseEnter={() => setHighlightedClause(c.id)}
                                                    onMouseLeave={() => setHighlightedClause(null)}
                                                    className="mt-3 p-3 bg-white/10 rounded border border-white/10 cursor-pointer hover:bg-amber-300/30 hover:text-[#0A1B33] transition-colors"
                                                >
                                                    {c.text}
                                                </p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {msg.from === 'user' && <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0"><User size={20} className="text-white"/></div>}
                            </motion.div>
                        ))}
                        </AnimatePresence>
                    </div>
                </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
