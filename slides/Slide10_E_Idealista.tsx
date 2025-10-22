import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { MapPin, Building, Search, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const mapImageUrl = "https://i.imgur.com/FwKC31g.png";

const LeadDetailCard = () => (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-slate-800">Lead Detectado</h3>
            <span className="font-semibold text-lg bg-green-500/10 text-green-600 px-3 py-1 rounded-full">ALTA OPORTUNIDAD</span>
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
            <h4 className="font-bold text-xl mb-2 text-slate-700 flex items-center gap-2"><User /> Contactos Clave (IA):</h4>
            <div className="space-y-2">
                <p className="text-lg bg-slate-100 p-2 rounded-md">Adm. Único: <span className="font-semibold">Global Realty S.L.</span></p>
                <p className="text-lg bg-slate-100 p-2 rounded-md">Arquitecto: <span className="font-semibold">Estudio Lamela</span></p>
            </div>
        </div>

        <motion.button 
            whileTap={{ scale: 0.95 }}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 rounded-lg text-xl flex items-center justify-center gap-3 transition-colors mt-6"
        >
            <Sparkles /> Generar Contacto Personalizado
        </motion.button>
    </div>
);

export const Slide10_E_Idealista: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Caso de Uso: Prospección en Real Estate</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">De datos públicos (Idealista, Registros) a clientes de alto valor, automáticamente.</p>
            
            <div className="grid grid-cols-3 gap-8 min-h-[550px]">
                {/* Map View */}
                <div className="col-span-2 bg-slate-100 rounded-2xl border border-slate-200 p-4 flex flex-col">
                    <div className="flex items-center gap-2 bg-white p-2 rounded-md border border-slate-200 mb-2">
                        <Search size={20} className="text-slate-400"/>
                        <p className="text-lg text-slate-800 font-semibold">Filtros: Transacción &gt; 1M€ | Uso Comercial | Madrid Centro</p>
                    </div>
                    <div className="flex-grow bg-slate-300 rounded-lg relative overflow-hidden">
                        <img src={mapImageUrl} alt="Map of Madrid with property listings" className="absolute inset-0 w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/20 to-transparent"></div>
                        <motion.div
                            className="absolute"
                            style={{ top: '45%', left: '55%' }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <MapPin className="w-12 h-12 text-red-500 drop-shadow-lg" fill="#ef4444" />
                            <div className="absolute top-0 left-0 w-12 h-12 rounded-full bg-red-500/30 animate-ping"></div>
                        </motion.div>
                         <motion.div
                            className="absolute"
                            style={{ top: '30%', left: '40%' }}
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                        >
                            <div className="w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-white/50"></div>
                             <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-cyan-400/50 animate-ping"></div>
                        </motion.div>
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