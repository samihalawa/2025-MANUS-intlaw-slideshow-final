import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, FileText, Briefcase, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const WhatsAppMockup = () => (
    <div className="w-[360px] h-[640px] bg-white rounded-[40px] shadow-2xl border-8 border-slate-800 overflow-hidden mx-auto">
        <div className="h-full flex flex-col">
            {/* Header */}
            <div className="bg-slate-100 p-3 flex items-center gap-3 border-b border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white"><Bot size={24}/></div>
                <div>
                    <p className="font-bold text-slate-800 text-lg">INTLAW AI</p>
                    <p className="text-sm text-green-600 font-semibold">online</p>
                </div>
            </div>
            {/* Chat Area */}
            <div className="flex-grow p-4 bg-[#E5DDD5] space-y-3">
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 0.5}}} className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-2 rounded-lg max-w-[80%] text-base shadow">Hola, necesito ayuda con un contrato de compraventa bastante complejo.</div>
                </motion.div>
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 1.5}}} className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg max-w-[80%] text-base shadow">Entendido. Para analizarlo y asignarle un especialista, ¿podría enviarme el borrador del contrato?</div>
                </motion.div>
                 <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 2.8}}} className="flex justify-end">
                    <div className="bg-[#DCF8C6] p-2 rounded-lg max-w-[80%] text-base shadow flex flex-col items-end">
                        <div className="flex items-center gap-2 p-2 bg-slate-100/50 rounded-md border border-slate-200 w-full">
                            <FileText size={32} className="text-slate-600 flex-shrink-0"/> 
                            <span className="font-semibold">Contrato_V1.pdf</span>
                        </div>
                        <span className="mt-1">Aquí está todo.</span>
                    </div>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 4.0}}} className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg max-w-[80%] text-base shadow">Recibido y analizando...</div>
                </motion.div>
                <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0, transition: {delay: 5.5}}} className="flex justify-start">
                    <div className="bg-white p-2 rounded-lg max-w-[80%] text-base shadow">Análisis preliminar completado. Caso ID-4588 creado. Un socio le contactará en breve. Gracias.</div>
                </motion.div>
            </div>
        </div>
    </div>
);

// FIX: Explicitly type `dashboardVariants` and `itemVariants` with `Variants` from framer-motion to resolve type errors.
const dashboardVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.4, delay: 6.0 } }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' } }
};

const NewLeadCard = () => (
    <motion.div 
        variants={dashboardVariants}
        initial="hidden"
        animate="visible"
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 space-y-6 h-full flex flex-col justify-center"
    >
        <motion.div variants={itemVariants}>
            <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold text-slate-900">Nuevo Lead Cualificado</h3>
                <span className="text-lg font-semibold bg-green-500/10 text-green-600 px-3 py-1 rounded-full">Recibido</span>
            </div>
             <p className="text-xl text-slate-500 mt-1">Caso ID-4588</p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="bg-slate-50/70 p-4 rounded-lg border border-slate-200 space-y-2">
            <p className="text-xl"><strong className="font-semibold text-slate-600 w-28 inline-block">Empresa:</strong> Compañía XYZ S.L.</p>
            <p className="text-xl"><strong className="font-semibold text-slate-600 w-28 inline-block">Contacto:</strong> +34 6XX XXX XXX</p>
            <p className="text-xl"><strong className="font-semibold text-slate-600 w-28 inline-block">Tipo:</strong> Contrato Mercantil</p>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-cyan-500/5 p-4 rounded-lg border border-cyan-500/30">
            <p className="font-bold text-cyan-800 text-xl mb-2 flex items-center gap-2"><Target size={20} />Resumen por IA:</p>
            <p className="text-slate-600 text-lg">
                Contrato de 50 págs. Cláusulas clave: Confidencialidad (3 años), Pago (90 días). Potencial de honorarios alto.
            </p>
        </motion.div>
    </motion.div>
);

export const Slide08_B: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 1 (Avanzado): Captación Multicanal y Cualificación IA</h2>
            <p className="text-3xl text-slate-600 mb-8">De WhatsApp a un caso cualificado en segundos.</p>
            <div className="grid grid-cols-2 gap-12 items-center">
                <div className="flex justify-center">
                    <WhatsAppMockup />
                </div>
                <div>
                    <NewLeadCard />
                </div>
            </div>
        </SlideWrapper>
    );
};