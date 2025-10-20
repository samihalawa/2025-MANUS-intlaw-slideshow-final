import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Play, DatabaseZap, Users, Mail, Loader, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const resultsData = [
    { lead: 'Global Estate Corp (CEO: Ana García)', status: 'sending' },
    { lead: 'Luxury Properties SL (Dir. Legal: Carlos Soler)', status: 'pending' },
    { lead: 'Finca Urbana SA (CEO: Elena Ruiz)', status: 'pending' },
];

const CampaignWorkflow = () => {
    const [start, setStart] = useState(false);
    const [results, setResults] = useState(resultsData.map(r => ({ ...r, status: 'pending' })));

    useInterval(() => {
        if (!start) return;
        
        const nextPendingIndex = results.findIndex(r => r.status === 'pending');
        if (nextPendingIndex !== -1) {
            // Start sending
            setResults(prev => prev.map((r, i) => i === nextPendingIndex ? { ...r, status: 'sending' } : r));
            
            // Finish sending after a delay
            setTimeout(() => {
                 setResults(prev => prev.map((r, i) => i === nextPendingIndex ? { ...r, status: 'sent' } : r));
            }, 1000);
        } else {
            // If all are sent, reset after a delay
            setTimeout(() => {
                setResults(resultsData.map(r => ({...r, status: 'pending'})));
                setStart(false);
            }, 3000)
        }
    }, start ? 1500 : null);

    const processVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: i * 0.4 + (start ? 0.5 : 0) } })
    };
    
    return (
    <div className="w-full max-w-5xl mx-auto bg-gradient-to-br from-[#041026] via-[#0F1F3F] to-[#1B3564] rounded-[36px] shadow-[0_25px_70px_rgba(6,14,32,0.5)] border border-white/15 p-12 text-white backdrop-blur-sm">
        {/* Input */}
        <div>
            <label className="text-sm font-semibold text-white/70 mb-3 block tracking-[0.35em] uppercase">Prompt legal de partida</label>
            <div className="flex gap-4 items-start flex-wrap">
                <textarea 
                    className="flex-1 min-w-[320px] bg-white/10 border border-white/20 rounded-2xl p-5 text-lg text-white tracking-tight leading-relaxed resize-none shadow-inner"
                    rows={3}
                    defaultValue="Empresas de Real Estate en Madrid que hayan realizado transacciones > 1M€ en los últimos 6 meses."
                    readOnly
                />
                <motion.button 
                    onClick={() => setStart(true)}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#42E4CF] to-[#2F8FFF] text-[#041433] font-semibold py-4 px-8 rounded-2xl text-lg flex items-center justify-center gap-3 transition-transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/30 disabled:opacity-50"
                    disabled={start}
                >
                    <Play /> Iniciar
                </motion.button>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/40">Conversión automática a campaña outbound multicanal</p>
        </div>

        {/* Processing */}
        <div className="flex justify-around items-center my-12 relative">
             <svg className="absolute w-full h-px top-1/2 -translate-y-1/2 -z-10">
                <motion.line x1="15%" y1="0" x2="85%" y2="0" stroke="rgba(86,160,255,0.4)" strokeWidth="2" strokeDasharray="10 10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: start ? 1 : 0 }}
                    transition={{ duration: 1, delay: start ? 0.5 : 0 }}
                />
            </svg>
            {[
                { icon: <DatabaseZap size={32}/>, text: 'Búsqueda IA' },
                { icon: <Users size={32}/>, text: 'Identificación Contactos' },
                { icon: <Mail size={32}/>, text: 'Generación Emails' },
            ].map((step, i) => (
                <motion.div key={i} custom={i} variants={processVariants} initial="hidden" animate={start ? "visible" : "hidden"} className="flex flex-col items-center gap-4 text-center px-4">
                    <div className="w-20 h-20 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 text-cyan-200 shadow-inner">{step.icon}</div>
                    <p className="font-semibold text-white/80 text-sm uppercase tracking-[0.25em] max-w-[150px]">{step.text}</p>
                </motion.div>
            ))}
        </div>

        {/* Output */}
        <div>
            <h3 className="text-lg font-semibold text-white/70 uppercase tracking-[0.3em] mb-4">Resultados de campaña activa</h3>
            <div className="bg-white/5 rounded-2xl border border-white/15 p-5 space-y-3 min-h-[220px]">
                 {results.map((result, i) => (
                     <AnimatePresence key={i}>
                     {result.status !== 'pending' &&
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-gradient-to-r from-white/15 to-white/5 p-4 rounded-xl flex flex-wrap justify-between items-center border border-white/10 gap-4"
                        >
                            <p className="font-semibold text-lg text-white">{result.lead}</p>
                            <AnimatePresence mode="wait">
                                {result.status === 'sent' && <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.8}} key="sent" className="text-xs font-semibold bg-emerald-300/20 text-emerald-200 px-3 py-1 rounded-full flex items-center gap-2 tracking-[0.3em] uppercase"><CheckCircle size={16}/>Email enviado</motion.div>}
                                {result.status === 'sending' && <motion.div initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.8}} key="sending" className="text-xs font-semibold bg-cyan-400/20 text-cyan-200 px-3 py-1 rounded-full flex items-center gap-2 tracking-[0.3em] uppercase"><Loader size={16} className="animate-spin"/>Enviando…</motion.div>}
                            </AnimatePresence>
                        </motion.div>
                     }
                     </AnimatePresence>
                 ))}
            </div>
        </div>
    </div>
    )
};


export const Slide10_D: React.FC = () => {
    return (
        <SlideWrapper className="p-12 flex flex-col items-center justify-center">
            <div className="text-center max-w-4xl mb-10">
                <h2 className="text-6xl font-bold tracking-tight text-[#071733]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Módulo 2: Campañas de Captación Automatizadas
                </h2>
                <p className="text-base text-[#27426E] uppercase tracking-[0.35em] mt-4">“Objetivo Bomba” · Outreach jurídico con supervisión IA</p>
                <p className="text-2xl text-slate-600 mt-4">
                    Pida a la IA un perfil, reciba una campaña completa con contactos, mensajes y seguimiento.
                </p>
            </div>
            <CampaignWorkflow />
        </SlideWrapper>
    );
};
