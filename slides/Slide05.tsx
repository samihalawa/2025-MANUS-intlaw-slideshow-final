import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Check, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const conversation = [
  { from: 'bot', text: 'Bienvenido al asistente de INTLAW. ¿En qué se puede ayudar?' },
  { from: 'user', text: 'Se requiere asesoramiento para un contrato mercantil.' },
  { from: 'bot', text: 'Entendido. Para proceder, se solicita un correo electrónico de contacto.' },
];

const ChatbotMockup = () => {
  const [messages, setMessages] = useState([conversation[0]]);

  useInterval(() => {
    setMessages(prev => {
      if (prev.length < conversation.length) {
        return [...prev, conversation[prev.length]];
      }
      // Loop conversation
      return [conversation[0]];
    });
  }, 2500);

  return (
    <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="p-4 bg-slate-100/80 border-b border-slate-200 flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
          <Bot size={32} />
        </div>
        <div>
          <div className="font-bold text-slate-900 text-2xl">INTLAW AI Assistant</div>
          <div className="text-lg text-green-600 font-semibold flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            Online
          </div>
        </div>
      </div>
      <div className="p-6 space-y-4 h-96 bg-white/50">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${msg.from === 'user' ? 'justify-end' : ''}`}
            >
              <div className={`p-4 rounded-2xl max-w-[80%] text-2xl ${
                msg.from === 'bot' 
                ? 'bg-slate-200 text-slate-800 rounded-bl-none' 
                : 'bg-cyan-600 text-white rounded-br-none'
              }`}>
                <p>{msg.text}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="p-4 border-t border-slate-200 bg-slate-100/80">
        <input type="text" placeholder="Escriba un mensaje..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-xl text-slate-700 placeholder-slate-400 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all" />
      </div>
    </div>
  );
};


export const Slide05: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <div className="bg-red-500/10 border-l-4 border-red-500 p-4 rounded-md mb-8">
        <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-1">Problema</p>
        <p className="text-slate-700 text-2xl">Clientes esperan. Oportunidades perdidas.</p>
      </div>
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-cyan-500/10 text-cyan-600 text-lg font-bold px-4 py-2 rounded-full mb-4">Módulo 1 · SOLUCIÓN</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>IA en Web</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div>
              <span className="text-4xl text-slate-700">Chatbot 24/7</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div>
              <span className="text-4xl text-slate-700">Lead Gathering</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg"><Check/></div>
              <span className="text-4xl text-slate-700">Respuestas Instantáneas</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <ChatbotMockup />
        </div>
      </div>
    </SlideWrapper>
  );
};
