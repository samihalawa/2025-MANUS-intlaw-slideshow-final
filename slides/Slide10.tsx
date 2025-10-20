import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const features = [
    { icon: '📚', text: 'Procesamiento masivo' },
    { icon: '🔍', text: 'Extracción inteligente' },
    { icon: '📊', text: 'Resúmenes automáticos' }
];

const guarantees = [
    'Cada respuesta vinculada a documentos específicos.',
    'Reembolso total si se detecta cualquier alucinación.',
];

export const Slide10: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-7xl font-bold tracking-tighter text-slate-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3: Agente Documentos</h2>
            <p className="text-3xl text-slate-600 mb-10">Precisión absoluta garantizada.</p>

            <div className="grid grid-cols-2 gap-12">
                <div className="space-y-6">
                    {features.map((feature, i) => (
                        <div key={i} className="bg-slate-100/50 p-6 rounded-lg flex items-center gap-6">
                            <div className="text-5xl">{feature.icon}</div>
                            <p className="text-3xl text-slate-700">{feature.text}</p>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[{i:'⚡',l:'Velocidad',v:'100x'},{i:'💰',l:'Ahorro',v:'80%'}].map(b=>(
                            <div key={b.l} className="bg-slate-100/50 p-4 rounded-lg text-center">
                                <div className="text-5xl mb-2">{b.i}</div>
                                <p className="font-bold text-5xl text-slate-900">{b.v}</p>
                                <p className="text-base text-slate-500 uppercase tracking-wider">{b.l}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-yellow-400/10 border-2 border-yellow-500/50 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="text-5xl font-bold text-yellow-600 flex items-center gap-3 mb-6">
                        <span>⚠️</span>
                        <span>Garantizado</span>
                    </h3>
                    <p className="text-[6rem] leading-none font-bold text-slate-900">0%</p>
                    <p className="text-4xl font-semibold text-yellow-600 mt-2">Alucinaciones</p>
                     <ul className="space-y-3 mt-8">
                        {guarantees.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="text-yellow-600 text-2xl mt-1">✓</span>
                                <span className="text-slate-700 text-xl">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SlideWrapper>
    );
};