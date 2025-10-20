import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

export const Slide15: React.FC = () => {
    return (
        <SlideWrapper className="p-16">
            <h2 className="text-8xl font-bold tracking-tighter text-slate-900 mb-12 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Modelo de Inversión</h2>

            <div className="grid grid-cols-2 gap-8 mb-8">
                {/* Plan 1 */}
                <div className="bg-slate-100/50 rounded-xl p-8 border border-slate-200 flex flex-col">
                    <h3 className="text-4xl font-bold text-slate-900 mb-6">Plan 1: Financiado</h3>
                    <div className="bg-white p-6 rounded-lg text-lg space-y-4 mb-6 flex-grow">
                        <div className="flex justify-between items-baseline"><span className="text-slate-500">Inicial:</span> <span className="font-semibold text-slate-900 text-4xl">€9,000</span></div>
                        <div className="flex justify-between items-baseline"><span className="text-slate-500">Mensual:</span> <span className="font-semibold text-slate-900 text-4xl">€4,000</span></div>
                        <div className="flex justify-between items-baseline"><span className="text-slate-500">Duración:</span> <span className="font-semibold text-slate-900 text-4xl">12 meses</span></div>
                    </div>
                    <p className="text-base font-normal text-slate-400 text-center mt-2">Total: €57,000</p>
                </div>

                {/* Plan 2 - Recommended */}
                <div className="bg-slate-100/50 rounded-xl p-8 border-2 border-cyan-500 relative flex flex-col">
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-sm font-bold px-4 py-1.5 rounded-full uppercase">Recomendado</div>
                    <h3 className="text-4xl font-bold text-slate-900 mb-6">Plan 2: Hitos</h3>
                    <div className="bg-white p-6 rounded-lg text-lg space-y-4 mb-6 flex-grow">
                        <div className="flex justify-between items-baseline"><span className="text-slate-500">Pago 1 (Inicio):</span> <span className="font-semibold text-slate-900 text-4xl">€15,000</span></div>
                        <div className="flex justify-between items-baseline"><span className="text-slate-500">Pago 2 (Despliegue):</span> <span className="font-semibold text-slate-900 text-4xl">€15,000</span></div>
                        <div className="flex justify-between items-baseline"><span className="text-slate-500">Pago 3 (Post):</span> <span className="font-semibold text-slate-900 text-4xl">€15,000</span></div>
                    </div>
                     <p className="text-base font-normal text-slate-400 text-center mt-2">Total: €45,000</p>
                </div>
            </div>

            <div className="bg-red-500/10 border-l-4 border-red-500 p-6 rounded-md text-center">
                <h4 className="font-bold text-3xl text-red-500 mb-2">GARANTÍA DE REEMBOLSO TOTAL</h4>
                <p className="text-slate-700 text-xl">Si no funciona como se espera, se corrige o se reembolsa. 100% garantizado.</p>
            </div>
        </SlideWrapper>
    );
};