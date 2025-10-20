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

const featureCards = [
  {
    title: 'Cualificación 24/7',
    caption: 'Lead scoring inteligente con la terminología jurídica de INTLAW.',
  },
  {
    title: 'Agendado Automático',
    caption: 'Reserva reuniones con socios y sincroniza calendarios en segundos.',
  },
  {
    title: 'Captura Segura',
    caption: 'Portal cifrado con almacenamiento conforme a RGPD y cadena de custodia.',
  },
  {
    title: 'Caso en CRM',
    caption: 'Generación de expediente y número de caso sin intervención manual.',
  },
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
    <div className="w-full max-w-[420px]">
      <div className="relative rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0F1F3C] via-[#132A52] to-[#1E3A66] shadow-[0_30px_80px_rgba(8,15,35,0.55)] overflow-hidden">
        <div className="p-6 bg-white/10 backdrop-blur-sm border-b border-white/10 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3CD4F5] to-[#6FA8FF] flex items-center justify-center text-[#06102A] shadow-lg">
            <Bot size={30} />
          </div>
          <div>
            <div className="font-semibold text-white text-2xl">INTLAW AI Assistant</div>
            <div className="text-sm text-emerald-300 font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
              Sesión segura activa
            </div>
          </div>
        </div>
        <div id="chat-container" className="p-6 space-y-4 h-[360px] overflow-y-auto scroll-smooth">
          <AnimatePresence>
            {messages.map((msg, i) => {
              if (msg.type === 'upload_action') {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-end my-2"
                  >
                    <div className="p-3 rounded-2xl bg-white/15 text-white flex items-center gap-3 text-lg font-semibold">
                      <FileCheck className="text-sky-200" />
                      <span>Contrato_Borrador.pdf</span>
                    </div>
                  </motion.div>
                );
              }
              if (msg.from) {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${msg.from === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`p-4 rounded-2xl max-w-[85%] text-lg leading-relaxed ${
                        msg.from === 'bot'
                          ? 'bg-white/10 text-white/90 border border-white/10 rounded-bl-none'
                          : `bg-gradient-to-r from-[#42E3C8] to-[#1E8CFF] text-white rounded-br-none ${msg.type === 'button_click' ? 'opacity-50' : ''}`
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                    {msg.type === 'upload' && (
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mt-4 w-full border border-dashed border-white/25 rounded-2xl p-8 text-center bg-white/5 backdrop-blur-md"
                      >
                        <UploadCloud className="w-16 h-16 text-cyan-200 mx-auto mb-4" />
                        <p className="font-semibold text-white text-xl">Arrastre y suelte sus archivos</p>
                        <p className="text-white/70 text-sm">Transferencia cifrada + control de acceso granular</p>
                      </motion.div>
                    )}
                  </motion.div>
                );
              }
              return null;
            })}
          </AnimatePresence>
        </div>
        <div className="p-5 border-t border-white/10 bg-white/5 backdrop-blur">
          {showButtons ? (
            <div className="flex gap-4">
              <button
                onClick={handleButtonClick}
                className="flex-1 bg-gradient-to-r from-[#34FACB] to-[#3EA8FF] text-[#04122F] font-semibold py-3 px-4 rounded-xl text-lg shadow-lg shadow-cyan-500/25 transition-transform hover:translate-y-[-1px]"
              >
                Sí, proceder
              </button>
              <button className="flex-1 bg-white/10 text-white/80 font-semibold py-3 px-4 rounded-xl text-lg border border-white/20 transition-colors hover:bg-white/15">
                No, gracias
              </button>
            </div>
          ) : (
            <div className="relative">
              <input
                type="text"
                placeholder="Escriba un mensaje..."
                className="w-full bg-white/10 border border-white/20 rounded-xl p-4 text-sm text-white/80 placeholder:text-white/40"
                disabled
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-white/50">
                IA redactando...
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const Slide07_B: React.FC = () => {
  return (
    <SlideWrapper className="p-14">
      <div className="relative h-full">
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-[#050E24] via-[#0F2246] to-[#18386C]" />
        <div className="absolute inset-0 rounded-[40px] opacity-50 bg-[radial-gradient(circle_at_top_left,rgba(82,200,255,0.35),transparent_55%)]" />
        <div className="relative z-10 grid grid-cols-[1.1fr,0.9fr] gap-14 h-full text-white px-10 py-8">
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-cyan-100 text-xs font-semibold tracking-[0.3em] uppercase px-5 py-2 rounded-full">
                Módulo 1
              </span>
              <h2
                className="mt-6 text-6xl font-bold leading-tight text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Automatización Web de Principio a Fin
              </h2>
              <p className="mt-6 text-white/70 text-lg max-w-xl">
                IA que capta, cualifica y abre expedientes con la formalidad que espera un cliente corporativo.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-5">
              {featureCards.map((item) => (
                <div
                  key={item.title}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md transition-transform hover:-translate-y-1 hover:bg-white/10"
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-cyan-200 uppercase tracking-wide">
                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                    {item.title}
                  </div>
                  <p className="mt-3 text-white/75 text-sm leading-relaxed">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-6 text-sm uppercase tracking-[0.35em] text-white/40">
              <span>Lead → Cuestionario → Documentos → Caso 4587</span>
              <span className="hidden xl:inline-flex">SLA &lt; 90 segundos</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <ChatbotMockup />
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};
