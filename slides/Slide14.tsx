import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Zap, TrendingUp, ShieldCheck, Award } from 'lucide-react';

const benefits = [
    { icon: <Zap size={40} />, title: 'Aumento de Eficiencia (+60%)', desc: 'Libere a su equipo para centrarse en tareas de valor.' },
    { icon: <TrendingUp size={40}/>, title: 'Capacidad de Crecimiento', desc: 'Escale operaciones sin aumentar costes fijos.' },
    { icon: <ShieldCheck size={40}/>, title: 'Reducción de Errores', desc: 'Minimice el riesgo humano con precisión documental.' },
    { icon: <Award size={40}/>, title: 'Liderazgo e Innovación', desc: 'Diferénciese y lidere con la tecnología del futuro.' },
];

export const Slide14: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-9xl font-bold tracking-tighter text-slate-900 mb-16 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Beneficios Clave</h2>
            <div className="grid grid-cols-1 gap-10">
                {benefits.map((benefit) => (
                    <div key={benefit.title} className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 hover:border-cyan-500/50 hover:bg-white transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex items-center gap-6 mb-5">
                            <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center bg-cyan-500/10 text-cyan-500 rounded-lg">
                                {benefit.icon}
                            </div>
                            <h3 className="text-7xl font-bold text-slate-900">{benefit.title}</h3>
                        </div>
                        <p className="text-4xl text-slate-600 pl-28">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};