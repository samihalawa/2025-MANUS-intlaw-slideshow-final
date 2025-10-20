import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { GraduationCap, Link, Lock, CheckSquare } from 'lucide-react';

const includedItems = [
    { icon: <GraduationCap size={32} />, title: 'Capacitación & Adopción' },
    { icon: <Link size={32} />, title: 'Integración Completa' },
    { icon: <Lock size={32} />, title: 'Seguridad & Cumplimiento' },
    { icon: <CheckSquare size={32} />, title: 'Criterios de Aceptación' },
];

export const Slide16: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Próximos Pasos</h2>

            <div className="bg-slate-50/50 rounded-xl p-8 border border-slate-200 mb-8">
                <h3 className="text-4xl font-bold text-slate-900 mb-6 text-center">Opciones de Implementación</h3>
                <div className="grid grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg p-8 border-2 border-cyan-500 text-center shadow-lg">
                         <div className="bg-cyan-500 text-white text-base font-bold px-3 py-1 rounded-full uppercase inline-block mb-4">Recomendado</div>
                         <p className="text-8xl font-bold text-slate-900">80 días</p>
                         <p className="text-slate-600 mt-2 text-xl">Implementación completa y personalizada de los 4 módulos.</p>
                    </div>
                     <div className="bg-white rounded-lg p-8 border border-slate-200 text-center">
                         <p className="text-base text-slate-500 uppercase mb-4">Pack Express</p>
                         <p className="text-8xl font-bold text-slate-900">40 días</p>
                         <p className="text-slate-600 mt-2 text-xl">Implementación acelerada con un equipo de proyecto dedicado.</p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
                {includedItems.map(section => (
                    <div key={section.title} className="bg-slate-50/50 p-6 rounded-lg border border-slate-200">
                        <h4 className="text-3xl font-bold text-slate-900 flex items-center gap-4">{section.icon} {section.title}</h4>
                    </div>
                ))}
            </div>
        </SlideWrapper>
    );
};
