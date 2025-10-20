import React, { useState } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FileText, Download, Sparkles, Link, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FormInput = ({ label, value }: { label: string; value: string; }) => (
    <div>
        <label className="text-xs font-semibold text-white/60 uppercase tracking-[0.3em] mb-2 block">{label}</label>
        <input
            type="text"
            value={value}
            readOnly
            className="w-full bg-white/10 border border-white/15 rounded-2xl p-4 text-lg text-white tracking-tight outline-none transition-transform focus:-translate-y-0.5"
        />
    </div>
);

const DocumentPreview = ({ data }: { data: { compradora: string, vendedora: string }}) => (
    <div className="bg-white rounded-3xl shadow-[0_25px_60px_rgba(10,18,45,0.25)] h-full overflow-hidden relative border border-slate-100">
        <div className="p-10 text-[#0B1D3A] leading-relaxed font-serif">
            <h3 className="text-center font-bold text-3xl mb-4 tracking-[0.25em] uppercase text-[#071733]">Contrato de Compraventa</h3>
            <p className="text-center text-slate-500 mb-8 text-lg uppercase tracking-[0.3em]">{data.compradora || '…'} · {data.vendedora || '…'}</p>
            <p className="mb-6 text-xl">De una parte, <span className="bg-[#E3F2FF] px-2 rounded font-semibold text-[#0B1D3A]">{data.compradora || '[COMPRADORA]'}</span>…</p>
            <p className="mb-6 text-xl">De otra parte, <span className="bg-[#E3F2FF] px-2 rounded font-semibold text-[#0B1D3A]">{data.vendedora || '[VENDEDORA]'}</span>…</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent"></div>
    </div>
);

const CrmModal = ({ onSelect, onClose }: { onSelect: () => void; onClose: () => void; }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-[#020817]/90 backdrop-blur flex items-center justify-center z-50"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-gradient-to-br from-[#071732] to-[#132E56] text-white rounded-3xl shadow-[0_25px_70px_rgba(3,10,30,0.55)] w-full max-w-lg overflow-hidden border border-white/10"
            onClick={e => e.stopPropagation()}
        >
            <div className="p-5 border-b border-white/10">
                <h3 className="text-xl font-semibold tracking-[0.3em] uppercase text-white/80">Buscar Lead en CRM</h3>
            </div>
            <div className="p-4">
                <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18}/>
                    <input type="text" placeholder="Buscar por nombre o empresa..." className="w-full pl-12 py-3 bg-white/10 border border-white/15 rounded-2xl text-sm text-white placeholder:text-white/40"/>
                </div>
                <div 
                    className="p-4 rounded-2xl hover:bg-white/10 cursor-pointer border border-white/5 transition-colors"
                    onClick={onSelect}
                >
                    <p className="font-semibold text-lg text-white">TechCorp S.L.</p>
                    <p className="text-white/50 text-xs uppercase tracking-[0.35em] mt-1">Lead activo · Prioridad Alta</p>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

export const Slide13_B: React.FC = () => {
    const [formData, setFormData] = useState({ compradora: '', vendedora: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelect = () => {
        setFormData({ compradora: 'TechCorp S.L.', vendedora: 'InnoSolutions S.A.' });
        setIsModalOpen(false);
    };

    return (
        <SlideWrapper className="p-10 flex flex-col relative">
            <h2 className="text-6xl font-bold tracking-tight text-[#071733] text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Generación de Documentos Conectada</h2>
            <p className="text-[#2C4874] text-center mb-6 text-xl uppercase tracking-[0.35em]">Lead · CRM · Documento · Firma</p>

            <div className="flex-grow relative min-h-[520px]">
                <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-[#041026] via-[#122750] to-[#1D386A]" />
                <div className="absolute inset-0 rounded-[36px] border border-white/15" />
                <div className="relative z-10 h-full flex rounded-[36px] overflow-hidden">
                {/* Left Panel: Form */}
                <div className="w-2/5 border-r border-white/10 p-8 flex flex-col bg-white/5 backdrop-blur">
                    <h3 className="font-semibold text-white/80 text-sm uppercase tracking-[0.35em] mb-6">Nuevo: Compraventa mercantil</h3>
                    <div className="flex-grow space-y-4">
                        <FormInput label="Compradora" value={formData.compradora} />
                        <FormInput label="Vendedora" value={formData.vendedora} />
                    </div>
                     <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-white/10 hover:bg-white/15 text-white font-semibold py-4 rounded-2xl transition-colors text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 mb-3 border border-white/15">
                        <Link /> Importar desde CRM
                    </button>
                    <button className="w-full bg-gradient-to-r from-[#42E4CF] to-[#2F8FFF] text-[#041630] font-semibold py-4 rounded-2xl hover:opacity-95 transition-opacity text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 shadow-lg shadow-cyan-500/25">
                        <Sparkles /> Generar Documento
                    </button>
                </div>
                {/* Right Panel: Preview */}
                <div className="w-3/5 p-8 bg-white/5 backdrop-blur flex flex-col">
                     <div className="flex-grow overflow-hidden">
                        <DocumentPreview data={formData} />
                     </div>
                </div>
            </div>
            </div>
            
            <AnimatePresence>
                {isModalOpen && <CrmModal onSelect={handleSelect} onClose={() => setIsModalOpen(false)} />}
            </AnimatePresence>
        </SlideWrapper>
    );
};
