import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Target, Eye, LayoutGrid, ThumbsUp, CircleDollarSign, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

const agendaItems = [
  { text: "Desafíos", icon: <Target size={40} /> },
  { text: "Visión INTLAW AI", icon: <Eye size={40} /> },
  { text: "Módulos de Solución", icon: <LayoutGrid size={40} /> },
  { text: "Beneficios Clave", icon: <ThumbsUp size={40} /> },
  { text: "Inversión", icon: <CircleDollarSign size={40} /> },
  { text: "Próximos Pasos", icon: <MoveRight size={40} /> }
];

const listVariants = {
  visible: {
    transition: { staggerChildren: 0.1 }
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const Slide02: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>Agenda</h2>
      <motion.div
        className="space-y-6"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        {agendaItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-8 p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex-shrink-0 w-24 h-24 flex items-center justify-center bg-slate-100 text-cyan-500 rounded-lg">
              {item.icon}
            </div>
            <p className="text-5xl font-medium text-slate-800">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};