import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, ShieldCheck, Award } from 'lucide-react';

const benefits = [
    { icon: <Zap size={32} />, title: 'Aumento de Eficiencia (+60%)', desc: 'Libere a su equipo para centrarse en tareas de valor.' },
    { icon: <TrendingUp size={32}/>, title: 'Capacidad de Crecimiento', desc: 'Escale operaciones sin aumentar costes fijos.' },
    { icon: <ShieldCheck size={32}/>, title: 'Reducción de Errores', desc: 'Minimice el riesgo humano con precisión documental.' },
    { icon: <Award size={32}/>, title: 'Liderazgo e Innovación', desc: 'Diferénciese y lidere con la tecnología del futuro.' },
];

export const Slide14: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Beneficios Clave</h2>
            <div className="grid grid-cols-2 gap-8">
                {benefits.map((benefit) => (
                    <div key={benefit.title} className="bg-slate-50/50 rounded-xl p-6 border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex items-center gap-6 mb-4">
                            <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg">
                                {benefit.icon}
                            </div>
                            <h3 className="text-5xl font-bold text-slate-900">{benefit.title}</h3>
                        </div>
                        <p className="text-2xl text-slate-600 pl-20">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};