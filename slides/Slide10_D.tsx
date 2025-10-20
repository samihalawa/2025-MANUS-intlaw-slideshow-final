import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Play, Sparkles, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const MetricCard = ({ label, value, change }: { label: string; value: string; change: string; }) => (
    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
        <p className="text-sm font-semibold text-slate-500">{label}</p>
        <p className="text-4xl font-bold text-[#1a2947]">{value}</p>
        <p className="text-sm font-semibold text-[#4ade80]">{change}</p>
    </div>
);

const ContactRow = ({ logo, name, details, status, color }: { logo: string; name: string; details: string; status: string; color: string; }) => (
     <div className="bg-white p-3 rounded-lg flex items-center gap-4 border border-slate-200">
        <div className="w-12 h-12 bg-gradient-to-br from-[#4a9eff] to-[#3b7dd6] rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white text-lg">{logo}</div>
        <div className="flex-grow">
            <p className="font-semibold text-slate-800 text-base">{name}</p>
            <p className="text-xs text-slate-500">{details}</p>
        </div>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${color}`}>{status}</span>
    </div>
);

export const Slide10_D: React.FC = () => {
    return (
        <SlideWrapper className="p-12 flex flex-col">
            <h2 className="text-5xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Módulo 2: Campañas de Captación Automatizadas</h2>
            <p className="text-xl text-slate-600 mb-6 text-center">De una idea en lenguaje natural a una campaña de prospección activa en un clic.</p>
            
            <motion.div 
                className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 flex-grow grid grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* Left Panel: Campaign Setup & Metrics */}
                <div className="flex flex-col gap-6">
                    <div>
                        <label className="text-base font-semibold text-slate-600 mb-2 block">1. Describa su Cliente Ideal:</label>
                        <div className="bg-slate-100 border-2 border-slate-200 rounded-lg p-3 text-base text-[#1a2947]">
                            Empresas de Real Estate en Madrid con transacciones &gt; 1M€ en los últimos 6 meses.
                        </div>
                    </div>
                     <motion.button 
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-[#4a9eff] to-[#3b7dd6] text-white font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center gap-3 transition-colors w-full"
                    >
                        <Sparkles /> Iniciar Campaña IA
                    </motion.button>

                    <div className="pt-6 border-t border-slate-200">
                         <label className="text-base font-semibold text-slate-600 mb-2 block">2. Métricas en Tiempo Real:</label>
                         <div className="grid grid-cols-2 gap-4">
                            <MetricCard label="Empresas Identificadas" value="47" change="↑ 12 hoy" />
                            <MetricCard label="Emails Enviados" value="47" change="100% entregados" />
                            <MetricCard label="Tasa de Apertura" value="68%" change="↑ +12%" />
                            <MetricCard label="Respuestas" value="9" change="19% tasa" />
                         </div>
                    </div>
                </div>

                {/* Right Panel: Results */}
                <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-base font-semibold text-slate-600">3. Contactos Recientes:</label>
                        <span className="text-sm font-bold px-3 py-1 rounded-full bg-[#4ade80] text-white flex items-center gap-2"><div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>ACTIVA</span>
                    </div>
                    <div className="space-y-3">
                        <ContactRow logo="IP" name="Inmobiliaria Premium S.L." details="Madrid · €2.3M transacción" status="✓ Respondió" color="bg-[#d1fae5] text-[#065f46]" />
                        <ContactRow logo="RG" name="Real Group Investments" details="Madrid · €1.8M transacción" status="👁 Abierto" color="bg-[#fef3c7] text-[#92400e]" />
                        <ContactRow logo="CV" name="Capital Ventures Madrid" details="Madrid · €3.1M transacción" status="✓ Respondió" color="bg-[#d1fae5] text-[#065f46]" />
                        <ContactRow logo="HE" name="Heritage Estate Partners" details="Madrid · €1.5M transacción" status="📤 Enviado" color="bg-[#dbeafe] text-[#1e40af]" />
                    </div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};