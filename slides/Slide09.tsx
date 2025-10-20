import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const CRMApp = () => {
    const leads = [
        { name: 'María González', company: 'TechCorp SL', score: 95, priority: 'ALTA' },
        { name: 'Carlos Ruiz', company: 'Innovatech', score: 92, priority: 'ALTA' },
    ];

    return (
        <div className="bg-white rounded-xl shadow-2xl border border-slate-200 flex h-[600px]">
            {/* Sidebar */}
            <div className="w-60 bg-slate-100/50 rounded-l-xl p-5 flex flex-col">
                <div className="font-bold text-3xl text-slate-900 mb-10">INTLAW</div>
                <nav className="space-y-3">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-lg rounded-md text-slate-500 hover:bg-slate-200/50 hover:text-slate-900"><span>📊</span> Dashboard</a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-lg rounded-md bg-cyan-500/20 text-cyan-600 font-semibold"><span>👥</span> Leads</a>
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-lg rounded-md text-slate-500 hover:bg-slate-200/50 hover:text-slate-900"><span>📞</span> Clientes</a>
                </nav>
                <div className="mt-auto">
                    <a href="#" className="flex items-center gap-3 px-4 py-3 text-lg rounded-md text-slate-500 hover:bg-slate-200/50 hover:text-slate-900"><span>⚙️</span> Config</a>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <header className="p-4 border-b border-slate-200 flex items-center justify-end">
                    <div className="flex items-center gap-4">
                        <div className="text-slate-500 text-xl">🔔</div>
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-base">IJ</div>
                            <span className="text-lg font-medium text-slate-700">Ignacio Jové</span>
                        </div>
                    </div>
                </header>
                <main className="p-5 overflow-y-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-5">Leads Cualificados</h2>
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        {[{l:'Total Leads', v:'47'}, {l:'Alta Prioridad', v:'12'}, {l:'Tasa Conversión', v:'68%'}].map(s=>(
                             <div key={s.l} className="bg-slate-100/50 p-4 rounded-md"><p className="text-slate-500 mb-1 text-lg">{s.l}</p><p className="text-4xl font-semibold text-slate-900">{s.v}</p></div>
                        ))}
                    </div>
                    <div className="bg-slate-100/30 rounded-lg border border-slate-200">
                        <table className="w-full text-left">
                            <thead className="text-base text-slate-500 uppercase border-b border-slate-200">
                                <tr>
                                    <th className="p-4">Lead</th><th className="p-4">Score IA</th><th className="p-4">Prioridad</th><th className="p-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {leads.map((lead, i) => (
                                    <tr key={i} className="border-b border-slate-200/50 hover:bg-slate-100/40">
                                        <td className="p-4">
                                            <div className="font-semibold text-slate-900 text-2xl">{lead.name}</div>
                                            <div className="text-slate-500 text-lg">{lead.company}</div>
                                        </td>
                                        <td className="p-4 font-bold text-cyan-500 text-4xl">{lead.score}</td>
                                        <td className="p-4"><span className={`px-3 py-1.5 rounded-full text-lg font-semibold ${lead.priority === 'ALTA' ? 'bg-red-500/20 text-red-500' : 'bg-yellow-500/20 text-yellow-500'}`}>{lead.priority}</span></td>
                                        <td className="p-4 text-right"><button className="bg-slate-200/50 hover:bg-slate-200 border border-slate-300 px-4 py-2 rounded-md text-base text-slate-800">Ver</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
};


export const Slide09: React.FC = () => {
  return (
    <SlideWrapper className="p-8 flex flex-col items-center justify-center">
        <h2 className="text-6xl font-bold tracking-tighter text-slate-900 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>CRM con Cualificación IA</h2>
        <CRMApp />
    </SlideWrapper>
  );
};