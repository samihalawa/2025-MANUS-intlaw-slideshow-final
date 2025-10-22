import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FastForward, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const addons = [
    {
        icon: <FastForward size={32} />,
        title: "Entrega Acelerada (30 días)",
        desc: "Implementación funcional de los módulos clave para un retorno de la inversión más rápido.",
        price: "+€4,000"
    },
    {
        icon: <MessageSquare size={32} />,
        title: "Automatización de WhatsApp",
        desc: "Responda y cualifique leads automáticamente a través del canal de mensajería más popular.",
        price: "+€5,000"
    },
    {
        icon: <Phone size={32} />,
        title: "Automatización Telefónica",
        desc: "Implemente un agente de voz IA para gestionar llamadas entrantes y cualificar clientes.",
        price: "+€6,000"
    }
];

export const Slide15_Addons: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Módulos y Servicios Adicionales</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {addons.map((addon, i) => (
                    <motion.div
                        key={addon.title}
                        className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col hover:shadow-xl transition-shadow duration-300"
                        initial={{ y: 50 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-cyan-500 mb-4">{addon.icon}</div>
                        <h3 className="text-3xl font-bold text-slate-800 mb-3 flex-grow">{addon.title}</h3>
                        <p className="text-xl text-slate-600 mb-6 flex-grow">{addon.desc}</p>
                        <div className="text-4xl font-bold text-slate-900 text-right mt-auto">{addon.price}</div>
                    </motion.div>
                ))}
            </div>
        </SlideWrapper>
    );
};