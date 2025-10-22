import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Search, Filter, Send, Target } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

// FIX: Explicitly type `stepVariants` with `Variants` from framer-motion to resolve the type error.
const stepVariants: Variants = {
    hidden: { y: 30 },
    visible: (i:number) => ({
        y: 0,
        transition: {
            delay: i * 0.2,
            type: 'spring',
            stiffness: 100,
        }
    })
};

const steps = [
    { icon: <Search size={40}/>, title: '1. Defina su Objetivo', desc: "Describa su cliente ideal en lenguaje natural. Ej: 'empresas de construcción en Valencia que han ganado licitaciones de >500k€'."},
    { icon: <Filter size={40}/>, title: '2. Búsqueda IA Multi-Fuente', desc: 'El sistema rastrea y cruza en tiempo real millones de datos de BOE, registros, prensa y licitaciones para encontrar coincidencias.'},
    { icon: <Send size={40}/>, title: '3. Cualificación Automática', desc: 'Cada oportunidad es analizada y enriquecida con datos clave: decisores, salud financiera y contexto del evento.'},
    { icon: <Target size={40}/>, title: '4. Contacto Inteligente', desc: 'Genere borradores de email hiper-personalizados en segundos, utilizando los insights de la IA para maximizar la tasa de respuesta.'},
];

export const Slide10_A: React.FC = () => {
    return (
        <SlideWrapper className="p-6 md:p-16">
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>El Motor de Crecimiento Proactivo</h2>
            <p className="text-xl md:text-3xl text-slate-600 mb-