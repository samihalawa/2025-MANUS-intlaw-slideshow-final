import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FileText, Sparkles, Loader, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DocumentPreview = () => (
    <div className="bg-white rounded-md shadow-lg h-full overflow-hidden relative border border-slate-200">
        <div className="p-8 font-serif text-sm text-slate-800 leading-relaxed">
            <h3 className="text-center font-bold text-xl mb-2">CONTRATO DE COMPRAVENTA MERCANTIL</h3>
            <p className="text-center text-slate-500 mb-6 text-xs">Entre TechCorp S.L. y InnoSolutions S.A.</p>
            <p className="font-bold mb-1">I. COMPARECEN</p>
            <p className="mb-4">De una parte, <span className="font-semibold">TechCorp S.L.</span>, y de otra, <span className="font-semibold">InnoSolutions S.A.</span></p>
            <p className="font-bold mb-1">II. CLÁUSULAS</p>
            <p className="mb-2"><strong>PRIMERA.- OBJETO.</strong> El objeto del presente contrato es la compraventa de los activos...</p>
            <p className="mb-2"><strong>SEGUNDA.- CONFIDENCIALIDAD.</strong> Las partes se comprometen a mantener confidencialidad durante <span className="bg-yellow-200/80 px-1 rounded">cinco (5) años</span>.</p>
            <p className="mb-2"><strong>TERCERA.- PAGO.</strong> El pago se realizará a los <span className="bg-yellow-200/80 px-1 rounded">sesenta (60) días</span> de la fecha de factura.</p>
            <p><strong>CUARTA.- ARBITRAJE.</strong> Para cualquier controversia, las partes se someten al arbitraje de la Corte de <span className="bg-yellow-200/80 px-1 rounded">Madrid</span>.</p>
        </div>
    </div>
);


export const Slide13_B: React.FC = () => {
    const [status, setStatus] = useState<'prompt' | 'processing' | 'done'>('prompt');

    useEffect(() => {
        const sequence = ['prompt', 'processing', 'done'];
        let currentIndex = 0;
        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % sequence.length;
            setStatus(sequence[currentIndex] as any);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SlideWrapper className="p-12 flex flex-col">
            <h2 className="text-5xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Generación de Documentos con IA</h2>
            <p className="text-xl text-slate-600 text-center mb-6">De una instrucción en lenguaje natural a un contrato completo y preciso.</p>

            <div className="flex-grow bg-slate-50 rounded-2xl border border-slate-200 flex shadow-xl">
                {/* Left Panel: Copilot */}
                <div className="w-2/5 border-r border-slate-200 p-8 flex flex-col bg-white rounded-l-2xl">
                    <h3 className="font-bold text-xl text-slate-800 mb-2 flex items-center gap-2"><Sparkles className="text-[#4a9eff]" />INTLAW AI Copilot</h3>
                    <p className="text-base text-slate-500 mb-4">Describe el documento que necesitas.</p>
                    
                    <div className="bg-slate-100 border-2 border-slate-200 p-4 rounded-lg flex-grow">
                        <p className="text-[#1a2947] text-base leading-relaxed">
                            Generar un borrador de contrato de compraventa mercantil entre <strong>TechCorp SL</strong> y <strong>InnoSolutions SA</strong>, incluyendo una cláusula de confidencialidad de <strong>5 años</strong>, arbitraje en <strong>Madrid</strong> y condiciones de pago a <strong>60 días</strong>.
                        </p>
                    </div>
                    <AnimatePresence>
                        {status === 'processing' && (
                            <motion.div key="processing" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 rounded-lg flex items-center gap-4 mt-4">
                                <Loader className="w-6 h-6 text-[#4a9eff] animate-spin"/>
                                <span className="text-base font-semibold text-slate-700">IA Procesando...</span>
                            </motion.div>
                        )}
                        {status === 'done' && (
                            <motion.div key="done" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg mt-4 flex items-center gap-3">
                                <CheckCircle className="w-8 h-8 text-green-500" />
                                <div>
                                    <h4 className="font-bold text-base text-green-700">Contrato Generado</h4>
                                    <p className="text-sm text-slate-600">Listo para revisar.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* Right Panel: Preview */}
                <div className="w-3/5 p-8 flex flex-col">
                    <h4 className="font-bold text-lg text-slate-700 mb-4 flex items-center gap-2 flex-shrink-0"><FileText size={20}/> Vista Previa en Tiempo Real</h4>
                     <div className="flex-grow min-h-0">
                        <AnimatePresence>
                        {status === 'done' && (
                             <motion.div
                                key="preview"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="h-full"
                             >
                                <DocumentPreview />
                             </motion.div>
                        )}
                        </AnimatePresence>
                     </div>
                </div>
            </div>
        </SlideWrapper>
    );
};