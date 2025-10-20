import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const conversation = [
  { from: 'bot', text: 'Bienvenido a INTLAW AI. ¿Cómo puedo ayudarle?' },
  { from: 'user', text: 'Asesoramiento para contrato mercantil.' },
  { from: 'bot', text: 'Entendido. ¿Valor estimado del contrato?', tag: 'CONTRATO MERCANTIL' },
  { from: 'user', text: '50.000€ - 75.000€' },
  { from: 'bot', type: 'typing' },
  { from: 'bot', text: 'Perfecto. Un socio le contactará. ¿Puede subir documentos?' },
];

const ChatbotMockup = () => {
  const [messages, setMessages] = useState([conversation[0]]);

  useInterval(() => {
    setMessages(prev => {
      if (prev.length < conversation.length) {
        return [...prev, conversation[prev.length]];
      }
      return [conversation[0]]; // Loop
    });
  }, 2500);

  return (
    <div className="w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
      <div className="bg-[#1a2947] text-white p-5 flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#4a9eff] to-[#3b7dd6] rounded-full flex items-center justify-center font-bold text-xl">IA</div>
        <div>
          <h3 className="text-xl font-semibold">INTLAW AI Assistant</h3>
          <div className="flex items-center gap-2 text-sm text-[#4ade80]">
            <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse"></span>
            Online
          </div>
        </div>
      </div>
      <div className="p-6 bg-slate-50 h-[420px] overflow-y-auto flex flex-col gap-4">
        <AnimatePresence>
          {messages.map((msg, i) => {
            if (msg.type === 'typing') {
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
                  <div className="bg-white p-3 rounded-2xl rounded-bl-sm shadow-md flex gap-2 items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-0"></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                  </div>
                </motion.div>
              );
            }
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div className={`p-4 rounded-2xl max-w-[85%] text-2xl shadow-md ${
                  msg.from === 'bot' 
                  ? 'bg-white text-[#1a2947] rounded-bl-sm' 
                  : 'bg-[#1a2947] text-white rounded-br-sm'
                }`}>
                  <p>{msg.text}</p>
                   {msg.tag && <div className="mt-2 inline-block bg-[#dbeafe] text-[#1e40af] text-sm font-bold px-3 py-1 rounded-full">{msg.tag}</div>}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="p-5 bg-white border-t border-slate-200 flex items-center gap-3">
        <input type="text" placeholder="Escriba un mensaje..." className="w-full bg-slate-100 border-2 border-slate-200 rounded-full p-3 text-lg" disabled />
        <button className="w-12 h-12 bg-gradient-to-br from-[#4a9eff] to-[#3b7dd6] text-white rounded-full flex-shrink-0 flex items-center justify-center text-2xl">➤</button>
      </div>
    </div>
  );
};

export const Slide07_B: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <div className="grid grid-cols-2 gap-12 items-center h-full">
        <div>
          <div className="inline-block bg-[#dbeafe] text-[#1e40af] text-lg font-bold px-4 py-2 rounded-full mb-4">Módulo 1</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Automatización Web</h2>
          <div className="space-y-6 text-5xl text-slate-700">
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500 w-8 h-8"/><span>Cualificación 24/7</span></div>
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500 w-8 h-8"/><span>Agendamiento automático</span></div>
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500 w-8 h-8"/><span>Captura Segura de Documentos</span></div>
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500 w-8 h-8"/><span>Creación automática de casos</span></div>
          </div>
        </div>
        <div className="flex justify-center">
          <ChatbotMockup />
        </div>
      </div>
    </SlideWrapper>
  );
};