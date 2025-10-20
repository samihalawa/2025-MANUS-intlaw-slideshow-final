import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, FileText, Briefcase, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppMockup = () => (
    <div className="w-[360px] h-[560px] bg-gradient-to-br from-[#0B1E3F] via-[#122952] to-[#1E3E72] rounded-[40px] shadow-[0_25px_60px_rgba(5,15,35,0.55)] border border-white/10 overflow-hidden mx-auto backdrop-blur">
        <div className="h-full flex flex-col">
            <div className="bg-white/10 backdrop-blur-sm p-4 flex items-center gap-3 border-b border-white/10">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#49E1CF] to-[#44A8FF] flex items-center justify-center text-[#051126]">
                    <Bot size={20}/>
                </div>
                <div className="text-white">
                    <p className="font-semibold text-base tracking-wide">INTLAW AI</p>
                    <p className="text-xs text-emerald-300 font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-300 rounded-full animate-pulse"/> Sesión cifrada
                    </p>
                </div>
            </div>
            <div className="flex-grow p-5 space-y-3 overflow-hidden">
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 0.5}}} className="flex justify-start">
                    <div className="bg-white/15 border border-white/10 backdrop-blur-lg p-3 rounded-2xl max-w-[85%] text-sm text-white leading-relaxed">
                        Entendido su caso de contrato. Para darle una cotización, por favor, envíeme los documentos relevantes.
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 1.5}}} className="flex justify-end">
                    <div className="bg-gradient-to-r from-[#49E1CF] to-[#3492FF] text-[#04122F] font-semibold p-3 rounded-2xl max-w-[80%] text-sm flex items-center gap-2 shadow-lg">
                        <FileText size={18} className="text-[#04122F]"/> Contrato_V1.pdf
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 2.5}}} className="flex justify-start">
                    <div className="bg-white/15 border border-white/10 backdrop-blur-lg p-3 rounded-2xl max-w-[80%] text-sm text-white">
                        Recibido. Analizando...
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 4.0}}} className="flex justify-start">
                    <div className="bg-white/20 border border-white/10 backdrop-blur-lg p-3 rounded-2xl max-w-[85%] text-sm text-white leading-relaxed">
                        Análisis preliminar completado. Caso <span className="font-semibold text-cyan-200">ID-4588</span> creado en nuestro sistema.
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
);

const dashboardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delay: 4.5 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
};

const NewLeadCard = () => (
    <motion.div 
        variants={dashboardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-[0_25px_60px_rgba(7,18,40,0.45)] border border-white/15 p-8 space-y-6 h-full flex flex-col justify-center text-white"
    >
        <motion.div variants={itemVariants}>
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/70">Pipeline legal-tech</p>
                    <h3 className="text-3xl font-bold text-white mt-2">Lead Cualificado</h3>
                </div>
                <span className="text-xs font-semibold bg-emerald-400/20 text-emerald-200 px-3 py-1 rounded-full border border-emerald-300/20">Recibido</span>
            </div>
            <p className="text-sm text-white/60 mt-3 uppercase tracking-[0.4em]">Caso id-4588</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-white/8 p-4 rounded-xl border border-white/10 space-y-2 text-sm">
            <p><strong className="font-semibold text-cyan-100 w-28 inline-block">Empresa</strong>Compañía XYZ S.L.</p>
            <p><strong className="font-semibold text-cyan-100 w-28 inline-block">Contacto</strong>+34 6XX XXX XXX</p>
            <p><strong className="font-semibold text-cyan-100 w-28 inline-block">Tipo</strong>Contrato Mercantil</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#1E8CFF]/20 to-[#44E7D2]/20 p-5 rounded-xl border border-white/10">
            <p className="font-semibold text-cyan-100 text-sm mb-2 flex items-center gap-2 tracking-[0.25em] uppercase">
                <Target size={16} /> Resumen IA
            </p>
            <p className="text-white/80 text-base leading-relaxed">
                Contrato de 50 págs. Cláusulas clave: confidencialidad (3 años), pagos a 90 días, honorarios estimados altos.
            </p>
        </motion.div>
    </motion.div>
);

export const Slide08_B: React.FC = () => {
    return (
        <SlideWrapper className="p-14">
            <div className="relative h-full">
                <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#041026] via-[#0C1F3F] to-[#163560]" />
                <div className="absolute inset-0 rounded-[40px] opacity-50 bg-[radial-gradient(circle_at_top_right,rgba(80,178,255,0.35),transparent_60%)]" />
                <div className="relative z-10 h-full text-white px-12 py-10 flex flex-col">
                    <div className="flex flex-wrap items-start justify-between gap-8">
                        <div className="max-w-2xl">
                            <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-cyan-100 text-xs font-semibold tracking-[0.3em] uppercase px-5 py-2 rounded-full">
                                Módulo 1 · Avanzado
                            </span>
                            <h2 className="text-5xl font-bold tracking-tight text-white mt-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                                Captación Multicanal y Cualificación IA
                            </h2>
                            <p className="text-lg text-white/70 mt-4 max-w-xl">
                                Integraciones sobre canales críticos (WhatsApp, web, correo) que convierten conversaciones en expedientes completos listos para el socio.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 text-xs uppercase text-white/50 tracking-[0.35em]">
                            <span>Procesos auditables · RGPD ready</span>
                            <span>Tiempo medio Lead → Caso: 48 segundos</span>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-[0.95fr,1.05fr] gap-10 flex-grow items-center">
                        <div className="flex justify-center">
                            <WhatsAppMockup />
                        </div>
                        <div className="flex flex-col gap-6">
                            <NewLeadCard />
                            <div className="grid grid-cols-3 gap-4 text-xs uppercase tracking-[0.3em] text-white/60">
                                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center">
                                    <p>WhatsApp</p>
                                    <p className="text-white font-semibold mt-2 text-lg">Entrada</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center">
                                    <p>IA</p>
                                    <p className="text-white font-semibold mt-2 text-lg">Cualifica</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-center">
                                    <p>CRM</p>
                                    <p className="text-white font-semibold mt-2 text-lg">Caso 4588</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};
