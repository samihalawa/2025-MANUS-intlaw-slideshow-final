import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { DatabaseZap, Search, FileText, Check, ShieldCheck } from 'lucide-react';

const features = [
    { icon: <DatabaseZap size={40} />, text: 'Procesamiento masivo' },
    { icon: <Search size={40} />, text: 'Extracción inteligente' },
    { icon: <FileText size={40} />, text: 'Resúmenes automáticos' }
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
                        <div key={i} className="bg-slate-50/50 p-6 rounded-lg flex items-center gap-6 border border-slate-200">
                            <div className="text-cyan-500">{feature.icon}</div>
                            <p className="text-3xl text-slate-700">{feature.text}</p>
                        </div>
                    ))}
                    <div className="grid grid-cols-2 gap-6 pt-4">
                        {[{l:'Velocidad',v:'100x'},{l:'Ahorro',v:'80%'}].map(b=>(
                            <div key={b.l} className="bg-slate-50/50 p-4 rounded-lg text-center border border-slate-200">
                                <p className="font-bold text-6xl text-slate-900">{b.v}</p>
                                <p className="text-lg text-slate-500 uppercase tracking-wider">{b.l}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-blue-600/10 border-2 border-blue-500/50 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                    <h3 className="text-5xl font-bold text-blue-600 flex items-center gap-4 mb-6">
                        <ShieldCheck size={52} />
                        <span>Garantizado</span>
                    </h3>
                    <p className="text-[6rem] leading-none font-bold text-slate-900">0%</p>
                    <p className="text-4xl font-semibold text-blue-600 mt-2">Alucinaciones</p>
                     <ul className="space-y-3 mt-8 text-left">
                        {guarantees.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="text-blue-600 mt-1.5 flex-shrink-0" size={24}/>
                                <span className="text-slate-700 text-xl">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SlideWrapper>
    );
};