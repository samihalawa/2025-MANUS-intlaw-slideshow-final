import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, Users, MessageSquare } from 'lucide-react';

const stats = [
    { value: '85%', label: 'Tareas Automatizadas', icon: <Bot size={48} /> },
    { value: '+30%', label: 'Adquisición Clientes', icon: <Users size={48} /> },
    { value: '24/7', label: 'Soporte Chatbot', icon: <MessageSquare size={48} /> },
]

export const Slide04: React.FC = () => {
  return (
    <SlideWrapper className="p-16 flex flex-col items-center justify-center text-center">
      <h2 className="text-8xl font-bold tracking-tighter text-slate-900" style={{ fontFamily: "'Playfair Display', serif" }}>Visión: INTLAW AI</h2>
      <p className="mt-4 text-3xl text-slate-600">Un ecosistema legal inteligente y proactivo.</p>
      
      <div className="mt-16 w-full max-w-6xl">
        <h3 className="text-3xl font-semibold text-slate-700 mb-12 tracking-wider uppercase">Dashboard de Impacto</h3>
        <div className="grid grid-cols-3 gap-8">
            {stats.map(stat => (
                <div key={stat.label} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 shadow-lg flex flex-col items-center justify-center hover:bg-white transition-colors duration-300">
                    <div className="text-cyan-500 mb-6">{stat.icon}</div>
                    <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">{stat.value}</div>
                    <div className="mt-4 text-2xl font-semibold text-slate-600 uppercase tracking-widest">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>
    </SlideWrapper>
  );
};