import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const ProcessingBlock = ({ pages, time }: { pages: string, time:string }) => (
    <div className="bg-slate-100/50 p-4 rounded-lg border border-slate-200 my-2">
        <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            <p className="text-base font-semibold text-cyan-600">IA Procesando {pages}...</p>
        </div>
        <div className="text-base text-slate-700">
            Análisis completado en <span className="font-bold">{time}</span>.
        </div>
    </div>
);

export const Slide11: React.FC = () => {
    return (
        <SlideWrapper className="p-8 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 3 en Acción</h2>
            <p className="text-slate-600 text-center mb-6 text-2xl">Procesando miles de páginas en minutos.</p>

            <div className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex">
                {/* Left Panel - Documents */}
                <div className="w-2/5 border-r border-slate-200 p-5 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-xl mb-4">📁 Expediente Activo</h3>
                    <div className="space-y-4 flex-grow overflow-y-auto pr-2">
                        {[{n:'Contrato_Principal.pdf', p:'487 pág', s:'Procesando...'},{n:'Normativa_Aplicable.pdf', p:'1,166 pág', s:'Completado'}].map(d=>(
                            <div key={d.n} className="bg-slate-100/50 p-4 rounded-md flex items-center gap-4">
                                <span className="text-4xl">📄</span>
                                <div className="flex-grow"><p className="font-medium text-slate-700 text-xl">{d.n}</p><p className="text-slate-500 text-base">{d.p}</p></div>
                                <span className={`font-semibold text-base ${d.s==='Completado' ? 'text-green-500' : 'text-yellow-500'}`}>{d.s}</span>
                            </div>
                        ))}
                    </div>
                     <div className="mt-4 p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg text-center text-white">
                         <p className="text-6xl font-bold">1,653</p>
                         <p className="text-base uppercase font-semibold tracking-wider">Páginas Totales</p>
                     </div>
                </div>

                {/* Right Panel - Chat */}
                <div className="w-3/5 p-5 flex flex-col">
                    <div className="flex-grow space-y-4">
                        <div className="flex justify-end">
                            <div className="bg-cyan-600 text-white p-4 rounded-lg max-w-md text-lg">
                                Analiza el expediente e identifica cláusulas incumplidas.
                            </div>
                        </div>
                        <div>
                             <ProcessingBlock pages="1,653 páginas" time="2m 15s"/>
                            <div className="bg-slate-100 p-4 rounded-lg max-w-md text-lg text-slate-700 inline-block mt-2">
                                ✅ <span className="font-bold">Análisis completado:</span> 8 cláusulas incumplidas.
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <input type="text" placeholder="Haz una pregunta sobre los documentos..." className="w-full bg-white border border-slate-300 rounded-md p-3 text-lg outline-none focus:ring-1 focus:ring-cyan-500" />
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
};