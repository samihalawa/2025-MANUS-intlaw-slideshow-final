import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, User } from 'lucide-react';
import { motion } from 'framer-motion';

const leadsData = [
    { name: "TechCorp SL", type: "Derecho Mercantil", score: 95, priority: "ALTA", priorityColor: "red" },
    { name: "InnoSolutions SA", type: "Contratos", score: 92, priority: "ALTA", priorityColor: "red" },
];

const listVariants = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
    },
};

const itemVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
};

const CRMDashboardMockup = () => (
    <div className="w-full bg-white/80 rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-4xl font-bold text-slate-800">Leads Cualificados</h3>
            <div className="text-lg font-semibold bg-cyan-500/10 text-cyan-600 px-3 py-1 rounded-full">En Tiempo Real</div>
        </div>
        <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
        >
            {leadsData.map((lead, i) => (
                <motion.div
                    key={i}
                    variants={itemVariants}
                    className="bg-white p-4 rounded-lg flex items-center gap-6 border border-slate-200 hover:border-cyan-500/50 transition-colors duration-300 shadow-sm"
                >
                    <div className={`w-20 h-20 rounded-full bg-slate-200 flex items-center justify-center`}>
                        <User className="w-10 h-10 text-slate-500" />
                    </div>
                    <div className="flex-grow">
                        <p className="font-bold text-4xl text-slate-800">{lead.name}</p>
                        <p className="text-3xl text-slate-500">{lead.type}</p>
                    </div>
                    <div className="text-right">
                        <p className={`text-6xl font-bold text-slate-800`}>{lead.score}</p>
                        <motion.div
                            animate={{ scale: lead.priority === "ALTA" ? [1, 1.05, 1] : 1 }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className={`inline-block`}
                        >
                            <p className={`text-xl font-bold px-3 py-1 rounded-full ${lead.priorityColor === 'red' ? 'text-red-500 bg-red-500/10' : ''}`}>{lead.priority}</p>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    </div>
);

export const Slide08: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-md mb-8">
        <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-1">Problema</p>
        <p className="text-slate-700 text-2xl">Cualificación manual lenta e ineficaz.</p>
      </div>
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-cyan-500/10 text-cyan-600 text-lg font-bold px-4 py-2 rounded-full mb-4">Módulo 2 · SOLUCIÓN</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>CRM con Filtrado IA</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div><span className="text-5xl text-slate-700">Filtrado Automático</span></div>
            <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div><span className="text-5xl text-slate-700">Cualificación IA</span></div>
            <div className="flex items-center gap-4"><div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div><span className="text-5xl text-slate-700">Priorización Leads</span></div>
          </div>
        </div>
        <div className="flex justify-center">
          <CRMDashboardMockup />
        </div>
      </div>
    </SlideWrapper>
  );
};