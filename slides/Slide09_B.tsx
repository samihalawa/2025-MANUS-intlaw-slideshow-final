import React, { useState, useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { LayoutDashboard, Users, Briefcase, Settings, Bell, ChevronDown, Sparkles, Target, Database, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const InboxView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className="grid grid-cols-5 gap-6">
            <div className="col-span-3">
                 <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm">
                    <table className="w-full text-left">
                        <thead className="text-lg text-slate-500 uppercase bg-slate-50/80">
                            <tr><th colSpan={3} className="p-4 font-semibold">Bandeja de Entrada (Reactivo)</th></tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200/50">
                            {[{ n: 'TechCorp SL', s: 95, a: true }, { n: 'InnoSolutions SA', s: 92, a: false }].map((lead) => (
                                <tr key={lead.n} className={`hover:bg-slate-50/40 ${lead.a ? 'bg-cyan-500/5' : ''}`}>
                                    <td className="p-4">
                                        <div className="font-semibold text-slate-900 text-3xl">{lead.n}</div>
                                    </td>
                                    <td className="p-4 font-bold text-cyan-500 text-5xl">{lead.s}</td>
                                    <td className="p-4 text-right"><span className={`px-3 py-1.5 rounded-full text-xl font-semibold bg-red-500/10 text-red-600`}>ALTA</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="col-span-2">
                 <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm h-full">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">TechCorp SL</h3>
                    <div className="bg-slate-100/50 p-3 rounded-md">
                        <p className="font-semibold text-slate-500 text-lg">Análisis IA (API Externa)</p>
                        <p className="text-slate-700 text-xl mt-2"><strong className="font-semibold">Fuente:</strong> Registro Mercantil</p>
                        <p className="text-slate-700 text-xl"><strong className="font-semibold">Facturación 2024:</strong> €5.2M</p>
                        <p className="text-slate-700 text-xl"><strong className="font-semibold">Decisor Clave:</strong> Juan Pérez (CEO)</p>
                    </div>
                    <p className="mt-4 text-slate-500 text-lg"><strong className="font-semibold text-slate-800">Estado:</strong> Pendiente de revisión</p>
                </div>
            </div>
        </div>
    </motion.div>
);

const ProspeccionView = () => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Campañas de Prospección Activas</h2>
        <div className="space-y-6">
            {[
                { title: "Herencias (BOE)", icon: <Database />, results: [{ t: 'Familia Pérez (Madrid)', d: 'Edicto BOE 2025-10-19' }, { t: 'Herederos de A. Gómez (Barcelona)', d: 'Edicto BOE 2025-10-18' }] },
                { title: "Real Estate (>2M€)", icon: <Home />, results: [{ t: 'Transacción Alto Valor (Valencia)', d: 'Registro 2025-10-17' }] }
            ].map(c => (
                <div key={c.title} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-slate-900 text-2xl mb-4 flex items-center gap-3">{c.icon}{c.title}</h3>
                    <div className="space-y-3">
                        {c.results.map(r => (
                            <div key={r.t} className="bg-slate-50/60 p-3 rounded-md flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-slate-800 text-xl">{r.t}</p>
                                    <p className="text-slate-500 text-lg italic">Detectado: {r.d}</p>
                                </div>
                                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-md text-lg transition-colors">Generar Contacto</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
);

export const Slide09_B: React.FC = () => {
    const [activeTab, setActiveTab] = useState('inbox');
    const navItems = [{ i: <Users size={24}/>, l: 'Leads', a: true }, { i: <Briefcase size={24}/>, l: 'Clientes' }];

    useEffect(() => {
        const toggleTab = () => {
            setActiveTab(prev => prev === 'inbox' ? 'prospecting' : 'inbox');
        };
        const intervalId = setInterval(toggleTab, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <SlideWrapper className="p-8 flex flex-col items-center justify-center">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Dashboard de Oportunidades</h2>
            <div className="bg-white rounded-xl shadow-2xl border border-slate-200 flex h-[600px] w-full max-w-7xl">
                <div className="w-64 bg-slate-50/50 rounded-l-xl p-5 flex flex-col border-r border-slate-200">
                    <div className="font-bold text-3xl text-slate-900 mb-10 tracking-tighter" style={{fontFamily: "'Playfair Display', serif"}}>INTLAW</div>
                    <nav className="space-y-2">
                        {navItems.map(item => (
                            <a href="#" key={item.l} className={`flex items-center gap-4 px-4 py-3 text-xl rounded-md font-medium ${item.a ? 'bg-cyan-500/10 text-cyan-600' : 'text-slate-500 hover:bg-slate-200/50'}`}>{item.i} {item.l}</a>
                        ))}
                    </nav>
                    <a href="#" className="flex items-center gap-4 px-4 py-3 text-xl rounded-md text-slate-500 hover:bg-slate-200/50 mt-auto"><Settings size={24}/> Config</a>
                </div>

                <div className="flex-1 flex flex-col">
                    <header className="p-4 border-b border-slate-200 flex items-center justify-between">
                        <div className="flex items-center">
                            <button onClick={() => setActiveTab('inbox')} className={`px-4 py-2 text-xl font-semibold transition-all ${activeTab === 'inbox' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500'}`}>Bandeja de Entrada (Reactivo)</button>
                            <button onClick={() => setActiveTab('prospecting')} className={`px-4 py-2 text-xl font-semibold flex items-center gap-2 transition-all ${activeTab === 'prospecting' ? 'text-cyan-600 border-b-2 border-cyan-600' : 'text-slate-500'}`}>
                                <Target size={20}/>Prospección IA (Proactivo)
                            </button>
                        </div>
                        <div className="flex items-center gap-6">
                            <Bell className="text-slate-500" size={28}/>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-lg">SK</div>
                                <span className="text-xl font-medium text-slate-700">Sami Khouri</span>
                                <ChevronDown className="text-slate-400" size={20}/>
                            </div>
                        </div>
                    </header>
                    <main className="p-6 bg-slate-50/30 flex-grow overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {activeTab === 'inbox' ? <InboxView key="inbox" /> : <ProspeccionView key="prospect" />}
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </SlideWrapper>
    );
};