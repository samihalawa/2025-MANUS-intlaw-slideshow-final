import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const benefits = [
    { number: 1, title: 'Eficiencia +60%', desc: 'Menos tareas repetitivas.' },
    { number: 2, title: 'Escalabilidad', desc: 'Más clientes, mismo equipo.' },
    { number: 3, title: 'Calidad 100%', desc: 'Cero errores humanos.' },
    { number: 4, title: 'Ventaja Competitiva', desc: 'Liderazgo tecnológico.' },
];

export const Slide14: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Beneficios Clave</h2>
            <div className="grid grid-cols-2 gap-10">
                {benefits.map((benefit) => (
                    <div key={benefit.number} className="bg-slate-100/50 rounded-xl p-8 border border-slate-200 hover:border-cyan-500/50 hover:bg-slate-100 transition-all duration-300 transform hover:-translate-y-2">
                        <div className="flex items-center gap-5 mb-5">
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full text-white font-bold text-3xl shadow-lg">
                                {benefit.number}
                            </div>
                            <h3 className="text-5xl font-bold text-slate-900">{benefit.title}</h3>
                        </div>
                        <p className="text-2xl text-slate-600">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};