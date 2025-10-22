import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { MapPin, Building, Search, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const RealisticMapView = () => (
    <div className="w-full h-full bg-slate-300 relative overflow-hidden rounded-lg">
        {/* Faux map background */}
        <div 
            className="absolute inset-0 opacity-80"
            style={{
                backgroundImage: 'linear-gradient(45deg, #cbd5e1 25%, transparent 25%), linear-gradient(-45deg, #cbd5e1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #cbd5e1 75%), linear-gradient(-45deg, transparent 75%, #cbd5e1 75%)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
            }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-slate-300"></div>

        {/* Map UI Elements */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
            <button className="w-10 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-slate-600 text-xl font-bold">+</button>
            <button className="w-10 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-slate-600 text-xl font-bold">-</button>
        </div>

        {/* Other property pins */}
        <MapPin className="absolute w-8 h-8 text-cyan-500 drop-shadow-md" style={{ top: '30%', left: '40%' }} fill="currentColor" />
        <MapPin className="absolute w-8 h-8 text-cyan-500 drop-shadow-md" style={{ top: '65%', left: '25%' }} fill="currentColor" />
        <MapPin className="absolute w-8 h-8 text-cyan-500 drop-shadow-md" style={{ top: '20%', left: '70%' }} fill="currentColor" />


        {/* Selected property pin */}
        <motion.div
            className="absolute"
            style={{ top: '45%', left: '55%' }}
            animate={{ scale: [1, 1.2, 1], y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
            <MapPin className="w-12 h-12 text-red-500 drop-shadow-lg" fill="#ef4444" />
            <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-red-500/30 animate-ping"></div>
        </motion.div>
    </div>
);

const LeadDetailCard = () => (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-slate-800">Oportunidad Detectada</h3>
            <span className="font-semibold text-lg bg-green-500/10 text-green-600 px-3 py-1 rounded-full">ALTA</span>
        </div>
        
        <div className="mb-4">
            <p className="font-bold text-slate-800 text-3xl">Oficinas en Recoletos</p>
            <p className="text-slate-500 text-xl">Calle de Serrano, Madrid</p>
        </div>

        <div className="bg-slate-50/70 p-4 rounded-lg border border-slate-200 space-y-2 text-xl flex-grow">
            <p><strong className="font-semibold text-slate-600 w-32 inline-block">Transacción:</strong> <span className="font-bold text-slate-800">€2.5M</span></p>
            <p><strong className="font-semibold text-slate-600 w-32 inline-block">Señal IA:</strong> Cambio de titularidad</p>
            <p><strong className="font-semibold text-slate-600 w-32 inline-block">Fuente:</strong> Reg. de la Propiedad</p>
        </div>

        <div className="mt-4">
            <h4 className="font-bold text-xl mb-2 text-slate-700 flex items-center gap-2"><Sparkles /> Enriquecimiento de Datos (IA):</h4>
            <div className="space-y-2">
                <p className="text-lg bg-slate-100 p-2 rounded-md"><strong className="font-semibold">Decisor Identificado:</strong> A. García (CEO, Global Realty)</p>
                <p className="text-lg bg-slate-100 p-2 rounded-md"><strong className="font-semibold">Análisis Financiero:</strong> Facturación 2024: €12.8M</p>
            </div>
        </div>

        <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-lg text-xl flex items-center justify-center gap-3 transition-colors mt-6"
        >
            <Sparkles /> Usar Copilot de Contacto
        </motion.button>
    </div>
);

export const Slide10_E_Idealista: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Caso de Uso: Prospección en Real Estate</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">De datos públicos a clientes de alto valor, automáticamente.</p>
            
            <div className="grid grid-cols-3 gap-8 min-h-[550px]">
                {/* Map View */}
                <div className="col-span-2 bg-slate-100 rounded-2xl border border-slate-200 p-4 flex flex-col">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-md border border-slate-200 mb-4 shadow-sm">
                        <Search size={20} className="text-slate-400 flex-shrink-0"/>
                        <p className="text-lg text-slate-800 font-semibold truncate">Filtro: Transacción &gt; 1M€ | Uso Comercial | Madrid Centro</p>
                    </div>
                    <div className="flex-grow bg-slate-300 rounded-lg relative overflow-hidden">
                        <RealisticMapView />
                    </div>
                </div>

                {/* Lead Detail Panel */}
                <div>
                    <LeadDetailCard />
                </div>
            </div>
        </SlideWrapper>
    );
};