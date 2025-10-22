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
  hidden: { x: -50 },
  visible: { x: 0, transition: { type: 'spring', stiffness: 100 } },
};

export const Slide02: React.FC = () => {
  return (
    <SlideWrapper className="p-6 md:p-16">
      <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-8 md:mb-16" style={{ fontFamily: "'Playfair Display', serif" }}>Agenda</h2>
      <motion.div
        className="space-y-6"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {agendaItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-center gap-4 md:gap-8 p-4 md:p-6 bg-slate-50 rounded-lg border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-slate-100 text-cyan-500 rounded-lg">
              {item.icon}
            </div>
            <p className="text-3xl md:text-5xl font-medium text-slate-800">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </SlideWrapper>
  );
};