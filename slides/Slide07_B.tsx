import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Bot, UploadCloud, FileCheck, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInterval } from '../hooks/useInterval';

const conversation = [
  { from: 'bot', text: 'Bienvenido al asistente de INTLAW. ¿En qué podemos ayudarle hoy?' },
  { from: 'user', text: 'Necesito asesoramiento para un contrato mercantil.' },
  { from: 'bot', text: 'Entendido. Para dirigirle al especialista, ¿cuál es el valor estimado del contrato?' },
  { from: 'user', text: 'Aproximadamente 250.000€.' },
  { from: 'bot', text: 'Gracias. Para este tipo de consulta, nuestra tarifa de análisis inicial es de 250€. ¿Desea proceder?', type: 'buttons' },
  { from: 'user', text: 'Sí, proceder.', type: 'button_click' },
  { from: 'bot', text: 'Perfecto. Para acelerar su caso, por favor, arrastre y suelte la documentación relevante en la siguiente caja segura.', type: 'upload' },
  { from: 'user', type: 'upload_action' },
  { from: 'bot', text: 'Documento recibido. He creado su caso (ID-4587) y un socio le contactará en breve. Gracias.' },
];

const ChatbotMockup = () => {
  const [messages, setMessages] = useState([conversation[0]]);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  useInterval(() => {
    if (messages.length < conversation.length) {
      const nextMessage = conversation[messages.length];
      
      if (nextMessage.type === 'buttons') {
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
      
      if (nextMessage.type !== 'button_click') {
        setMessages(prev => [...prev, nextMessage]);
      }
    } else {
      // Loop conversation
      setMessages([conversation[0]]);
      setShowButtons(false);
    }
  }, 2500);

  const handleButtonClick = () => {
    setShowButtons(false);
    setMessages(prev => [...prev, conversation.find(m => m.type === 'button_click')!]);
  };

  return (
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
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
      <div id="chat-container" className="p-6 space-y-4 h-[420px] bg-white/50 overflow-y-auto scroll-smooth">
        <AnimatePresence>
          {messages.map((msg, i) => {
            if (msg.type === 'upload_action') {
              return <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} className="flex justify-end my-2"><div className="p-3 rounded-2xl bg-green-100 text-green-800 flex items-center gap-3 text-xl font-semibold"><FileCheck /><span>Contrato_Borrador.pdf</span></div></motion.div>;
            }
            if (msg.from) {
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
                >
                  <div className={`p-4 rounded-2xl max-w-[85%] text-2xl ${
                    msg.from === 'bot' 
                    ? 'bg-slate-200 text-slate-800 rounded-bl-none' 
                    : `bg-cyan-600 text-white rounded-br-none ${msg.type === 'button_click' ? 'opacity-50' : ''}`
                  }`}>
                    <p>{msg.text}</p>
                  </div>
                  {msg.type === 'upload' && <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} className="mt-4 w-full border-4 border-dashed border-slate-300 rounded-2xl p-8 text-center bg-slate-100/50"><UploadCloud className="w-16 h-16 text-cyan-500 mx-auto mb-4" /><p className="font-bold text-slate-700 text-2xl">Arrastre y suelte sus archivos</p><p className="text-slate-500 text-xl">Carga segura y encriptada</p></motion.div>}
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
      <div className="p-4 border-t border-slate-200 bg-slate-100/80">
        {showButtons ? (
          <div className="flex gap-4">
            <button onClick={handleButtonClick} className="flex-1 bg-cyan-600 text-white font-semibold py-3 px-4 rounded-lg text-xl hover:bg-cyan-700 transition-colors">Sí, proceder</button>
            <button className="flex-1 bg-slate-300 text-slate-700 font-semibold py-3 px-4 rounded-lg text-xl hover:bg-slate-400 transition-colors">No, gracias</button>
          </div>
        ) : (
          <input type="text" placeholder="Escriba un mensaje..." className="w-full bg-white border-2 border-slate-300 rounded-lg p-4 text-xl" disabled />
        )}
      </div>
    </div>
  );
};

export const Slide07_B: React.FC = () => {
  return (
    <SlideWrapper className="p-16">
      <div className="grid grid-cols-2 gap-12 items-center h-full">
        <div>
          <div className="inline-block bg-cyan-500/10 text-cyan-600 text-lg font-bold px-4 py-2 rounded-full mb-4">Módulo 1</div>
          <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>Automatización Web de Principio a Fin</h2>
          <div className="space-y-8 text-4xl text-slate-700">
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500"/><span>Cualificación 24/7</span></div>
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500"/><span>Cita reuniones Automática</span></div>
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500"/><span>Captura Segura de Documentos</span></div>
            <div className="flex items-center gap-4"><CheckCircle className="text-green-500"/><span>Creación de Caso Automática</span></div>
          </div>
        </div>
        <div className="flex justify-center">
          <ChatbotMockup />
        </div>
      </div>
    </SlideWrapper>
  );
};