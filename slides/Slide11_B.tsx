import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Slide11_B: React.FC = () => {
    const [highlight, setHighlight] = useState(false);

    return (
        <SlideWrapper className="p-12 flex flex-col">
            <div className="text-center mb-6">
                <h2 className="text-5xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3: Agente de Documentos Masivos</h2>
                <p className="text-xl text-slate-600 mt-2">La IA analiza miles de páginas y cita cada una de sus fuentes.</p>
                <div className="inline-block mt-4 bg-[#4ade80] text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    <ShieldCheck size={16}/> 0% Alucinaciones - Garantizado
                </div>
            </div>
            
            <div className="flex-grow bg-slate-50 rounded-2xl border border-slate-200 flex shadow-xl">
                {/* Left Panel - Document Viewer */}
                <div className="w-3/5 border-r border-slate-200 p-8">
                    <h3 className="font-bold text-lg text-slate-700">Contrato_Principal.pdf (Página 4/50)</h3>
                    <div className="mt-4 bg-white rounded-lg p-6 h-[400px] shadow-inner border border-slate-200 overflow-hidden">
                        <div className="font-mono text-slate-800 text-base leading-relaxed space-y-4">
                            <p><strong>Artículo 4. Transferencia de Activos.</strong></p>
                            <p><strong>4.A. Activos Materiales.</strong> La Vendedora transferirá todos los activos materiales listados en el Anexo I...</p>
                            <p className="relative">
                                <span className={`absolute -inset-x-1 -inset-y-0.5 bg-yellow-300/70 rounded transition-opacity duration-300 ${highlight ? 'opacity-100' : 'opacity-0'}`}></span>
                                <span className="relative"><strong>4.B. Propiedad Intelectual.</strong> Tras la transacción, todos los derechos de Propiedad Intelectual, sin excepción, serán transferidos en su totalidad y de forma exclusiva a la Compradora.</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Panel - Chat */}
                <div className="w-2/5 p-8 flex flex-col">
                     <h3 className="font-bold text-lg text-slate-700 mb-4">Chat IA</h3>
                     <div className="flex-grow space-y-4">
                        {/* User Message */}
                        <div className="flex justify-end">
                            <div className="bg-[#1a2947] text-white p-3 rounded-2xl rounded-br-sm max-w-xs text-base">
                                ¿Qué dice el contrato sobre la Propiedad Intelectual?
                            </div>
                        </div>
                        {/* AI Message */}
                        <div className="flex justify-start">
                            <motion.div 
                                className="bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-sm max-w-sm text-base shadow-md"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0, transition: { delay: 1 } }}
                            >
                                <p className="text-slate-800">El contrato establece una transferencia total y exclusiva de la Propiedad Intelectual a la Compradora.</p>
                                <motion.div 
                                    className="mt-2 p-2 bg-slate-100 rounded cursor-pointer border-l-4 border-slate-300 hover:border-yellow-400 hover:bg-yellow-100 transition-colors"
                                    onHoverStart={() => setHighlight(true)}
                                    onHoverEnd={() => setHighlight(false)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { delay: 1.5 } }}
                                >
                                    <p className="font-bold text-xs text-slate-600">Referencia:</p>
                                    <p className="text-sm text-slate-800">Contrato_Principal.pdf - Artículo 4.B, p.4</p>
                                </motion.div>
                            </motion.div>
                        </div>
                     </div>
                     <input type="text" placeholder="Pregunta algo sobre los documentos..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-3 text-base mt-4" disabled />
                </div>
            </div>
        </SlideWrapper>
    );
};