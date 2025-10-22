import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Link, AlertTriangle, Building, User, FileText as FileIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const entities = [
    { name: 'TechCorp S.L.', type: 'Empresa', icon: <Building /> },
    { name: 'InnoSolutions S.A.', type: 'Empresa', icon: <Building /> },
    { name: 'Juan Pérez', type: 'Persona', icon: <User /> },
    { name: 'Cláusula 4.B', type: 'Cláusula', icon: <FileIcon />, id: 'c4b', critical: true },
    { name: 'Anexo II P.I.', type: 'Documento', icon: <FileIcon />, id: 'anexo2' },
];

export const Slide10_C: React.FC = () => {
    const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);

    useInterval(() => {
        setSelectedEntityId(prev => prev === 'c4b' ? null : 'c4b');
    }, 4000);

    return (
        <SlideWrapper className="p-12 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Análisis de Expediente Interactivo</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">Conecte los puntos clave de miles de páginas, al instante.</p>
            
            <div className="flex-grow bg-slate-50 rounded-2xl border border-slate-200 flex min-h-[600px] shadow-lg">
                {/* Left Panel: Entities */}
                <div className="w-1/4 border-r border-slate-200 p-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3"><Link className="text-cyan-500"/> Entidades Clave</h3>
                    <div className="space-y-2">
                        {entities.map(entity => (
                            <div 
                                key={entity.name} 
                                className={`p-3 rounded-md flex items-center gap-3 border transition-colors cursor-pointer ${selectedEntityId === entity.id ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-white border-slate-200 hover:bg-slate-100'}`}
                            >
                                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md ${selectedEntityId === entity.id ? 'text-cyan-600' : 'text-slate-500'}`}>{entity.icon}</div>
                                <div className="flex-grow">
                                    <p className={`font-semibold text-xl ${selectedEntityId === entity.id ? 'text-slate-900' : 'text-slate-700'}`}>{entity.name}</p>
                                    <p className={`text-sm ${selectedEntityId === entity.id ? 'text-slate-600' : 'text-slate-500'}`}>{entity.type}</p>
                                </div>
                                {entity.critical && <AlertTriangle className="text-red-500 flex-shrink-0" />}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle Panel: Document Viewer */}
                <div className="w-2/4 border-r border-slate-200 bg-white p-6">
                     <h3 className="font-bold text-xl mb-4">Contrato_Principal.pdf</h3>
                     <div className="text-slate-600 text-xl space-y-4 font-mono leading-relaxed bg-slate-50/50 p-4 rounded-md h-[90%] overflow-y-auto overflow-x-hidden">
                        <p>...</p>
                        <p className="relative">
                            <AnimatePresence>
                            {selectedEntityId === 'c4b' && (
                                <motion.span 
                                    className="absolute -inset-x-2 -inset-y-1 bg-yellow-300/80 rounded"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                />
                            )}
                            </AnimatePresence>
                            <span className="relative">Artículo 4.B. Transferencia de Propiedad Intelectual. Tras la transacción, todos los derechos de Propiedad Intelectual, sin excepción, serán transferidos en su totalidad y de forma exclusiva a la Compradora.</span>
                        </p>
                         <p>...</p>
                     </div>
                </div>

                {/* Right Panel: AI Insights */}
                <div className="w-1/4 p-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        ><AlertTriangle className="text-red-500"/></motion.div>
                        Análisis IA
                    </h3>
                     <AnimatePresence>
                        {selectedEntityId === 'c4b' && (
                             <motion.div
                                initial={{ y: 20 }}
                                animate={{ y: 0 }}
                                exit={{ y: -20 }}
                                className="bg-red-500/10 p-4 rounded-lg border-l-4 border-red-500"
                            >
                                <p className="font-bold text-slate-800 text-xl mb-2">Conflicto Detectado</p>
                                <p className="text-slate-700 text-lg">
                                    Esta cláusula <strong className="font-semibold">contradice</strong> directamente la sección 2.A del <strong className="font-semibold">'Anexo II P.I.'</strong>, que estipula una propiedad compartida (50/50) post-transacción.
                                </p>
                                <button className="mt-4 bg-white border border-slate-300 px-3 py-1 text-sm font-semibold rounded-md hover:bg-slate-100">Ver Anexo II</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </SlideWrapper>
    );
};