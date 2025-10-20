import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, FileText, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppMockup = () => (
    <div className="w-[375px] h-[720px] bg-black rounded-[40px] shadow-2xl border-4 border-slate-700 overflow-hidden mx-auto">
        <div className="h-full flex flex-col bg-[#ece5dd]">
            {/* Header */}
            <div className="bg-[#075e54] p-3 flex items-center gap-3 text-white pt-10">
                <span className="text-2xl">‹</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4a9eff] to-[#3b7dd6] flex items-center justify-center font-bold text-lg">IA</div>
                <div>
                    <p className="font-semibold text-base">INTLAW AI</p>
                    <p className="text-xs">online</p>
                </div>
            </div>
            {/* Chat Area */}
            <div className="flex-grow p-4 space-y-2">
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 0.5}}} className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg max-w-[80%] text-sm shadow rounded-tl-none">Entendido su caso de contrato. Para darle una cotización, por favor, envíeme los documentos.</div>
                </motion.div>
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 1.5}}} className="flex justify-end">
                    <div className="bg-[#dcf8c6] p-2 rounded-lg max-w-[80%] text-sm shadow rounded-br-none flex items-center gap-2"><FileText size={18} className="text-slate-600"/> Contrato_V1.pdf</div>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 2.5}}} className="flex justify-center">
                     <div className="bg-[#fff4ce] p-2 rounded-lg max-w-[85%] text-xs text-center text-slate-700">✅ Análisis completado. <strong>Caso ID-4588</strong> creado en el sistema.</div>
                </motion.div>
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 4.0}}} className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg max-w-[80%] text-sm shadow rounded-tl-none">Un abogado especializado le contactará en breve.</div>
                </motion.div>
            </div>
            {/* Input bar */}
            <div className="bg-[#f0f0f0] p-2 flex items-center gap-2">
                <span className="text-xl">😊</span>
                <input className="flex-grow bg-white rounded-full p-2 text-sm" placeholder="Mensaje" disabled />
                <span className="text-xl">📎</span>
            </div>
        </div>
    </div>
);

const NewLeadCard = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, transition: { delay: 4.5, type: 'spring' } }}
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 space-y-5 h-full flex flex-col justify-center max-w-lg"
    >
        <div>
            <span className="inline-block bg-[#4ade80] text-white px-4 py-1 rounded-full font-bold text-sm">Nuevo Lead Cualificado</span>
        </div>
        
        <div>
            <h3 className="text-3xl font-bold text-[#1a2947]">Compañía XYZ S.L.</h3>
            <p className="text-lg text-[#1e40af] font-semibold bg-[#dbeafe] inline-block px-2 py-0.5 rounded mt-1">Caso ID-4588</p>
        </div>
        
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-base space-y-2">
            <div className="flex"><strong className="font-semibold text-slate-500 w-24 inline-block">Contacto:</strong> <span className="font-semibold text-slate-800">+34 6XX XXX XXX</span></div>
            <div className="flex"><strong className="font-semibold text-slate-500 w-24 inline-block">Tipo:</strong> <span className="font-semibold text-slate-800">Contrato Mercantil</span></div>
            <div className="flex"><strong className="font-semibold text-slate-500 w-24 inline-block">Canal:</strong> <span className="font-semibold text-slate-800">WhatsApp</span></div>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <p className="font-bold text-slate-600 text-sm mb-2 flex items-center gap-2"><Target size={16} />Resumen por IA:</p>
            <p className="text-slate-800 text-base">Contrato de 50 págs. Cláusulas clave: Confidencialidad, Pago (90 días). <span className="bg-[#4ade80] text-white px-2 py-0.5 rounded font-bold text-xs">Potencial ALTO</span></p>
        </div>
    </motion.div>
);

export const Slide08_B: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-5xl font-bold tracking-tighter text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 1: Ejemplo Práctico (WhatsApp)</h2>
            <p className="text-2xl text-slate-600 mb-6">De WhatsApp a un caso cualificado en segundos, sin intervención humana.</p>
            <div className="grid grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                    <WhatsAppMockup />
                </div>
                <div className="flex justify-center h-full">
                    <NewLeadCard />
                </div>
            </div>
        </SlideWrapper>
    );
};
