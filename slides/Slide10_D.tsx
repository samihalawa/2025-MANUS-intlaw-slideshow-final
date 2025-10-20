import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Play, DatabaseZap, Users, Mail, Loader } from 'lucide-react';
import { motion } from 'framer-motion';

const CampaignWorkflow = () => (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-10">
        {/* Input */}
        <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}}>
            <label className="text-xl font-semibold text-slate-600 mb-2 block">Describa su cliente ideal (Lenguaje Natural):</label>
            <div className="flex gap-4">
                <textarea 
                    className="w-full bg-slate-100/70 border-2 border-slate-300 rounded-lg p-4 text-2xl text-slate-800 resize-none"
                    rows={2}
                    defaultValue="Empresas de Real Estate en Madrid que hayan realizado transacciones > 1M€ en los últimos 6 meses."
                />
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-lg text-xl flex items-center justify-center gap-3 transition-colors">
                    <Play /> Iniciar
                </button>
            </div>
        </motion.div>

        {/* Processing */}
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.3, delayChildren: 0.5 } }
            }}
            className="flex justify-around items-center my-10 relative"
        >
             <svg className="absolute w-full h-px top-1/2 -translate-y-1/2 -z-10" >
                <line x1="15%" y1="0" x2="85%" y2="0" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5 5"/>
            </svg>
            {[
                { icon: <DatabaseZap size={32}/>, text: 'Búsqueda IA' },
                { icon: <Users size={32}/>, text: 'Identificación Contactos' },
                { icon: <Mail size={32}/>, text: 'Generación Emails' },
            ].map((step, i) => (
                <motion.div key={i} variants={{hidden: {opacity:0, scale:0.8}, visible: {opacity:1, scale:1}}} className="flex flex-col items-center gap-3 text-center bg-white px-4">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-200 text-cyan-500">{step.icon}</div>
                    <p className="font-semibold text-slate-700 text-lg max-w-[150px]">{step.text}</p>
                </motion.div>
            ))}
        </motion.div>

        {/* Output */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0, transition: {delay: 1.5}}}>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Resultados de Campaña Activa:</h3>
            <div className="bg-slate-50/80 rounded-lg border border-slate-200 p-4 space-y-3">
                 {[
                    { lead: 'Global Estate Corp (CEO: Ana García)', status: 'sent' },
                    { lead: 'Luxury Properties SL (Dir. Legal: Carlos Soler)', status: 'sent' },
                    { lead: 'Finca Urbana SA (CEO: Elena Ruiz)', status: 'sending' },
                 ].map((result, i) => (
                    <div key={i} className="bg-white p-4 rounded-md flex justify-between items-center border border-slate-200 shadow-sm">
                        <p className="font-semibold text-2xl text-slate-800">{result.lead}</p>
                        {result.status === 'sent' && <div className="text-lg font-semibold bg-green-500/10 text-green-600 px-3 py-1 rounded-full">Email Enviado</div>}
                        {result.status === 'sending' && <div className="text-lg font-semibold bg-blue-500/10 text-blue-600 px-3 py-1 rounded-full flex items-center gap-2"><Loader size={16} className="animate-spin"/> Enviando...</div>}
                    </div>
                 ))}
            </div>
            <p className="text-center text-slate-500 mt-4 text-lg font-semibold">Campaña Activa: 3/50 Emails Enviados | Tasa Apertura (Estimada): 65%</p>
        </motion.div>
    </div>
);


export const Slide10_D: React.FC = () => {
    return (
        <SlideWrapper className="p-12 flex flex-col items-center justify-center">
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 2: Campañas de Captación Automatizadas</h2>
            <p className="text-3xl text-slate-600 mb-8 text-center">De una idea a una campaña de prospección en un clic.</p>
            <CampaignWorkflow />
        </SlideWrapper>
    );
};
