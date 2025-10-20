import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';

const FormInput = ({ label, value }: { label: string, value: string }) => (
    <div className="mb-4">
        <label className="text-base font-semibold text-slate-600 mb-2 block">{label}</label>
        <input type="text" defaultValue={value} className="w-full bg-slate-100/50 border border-slate-300 rounded-md p-3 text-lg text-slate-800 outline-none focus:ring-1 focus:ring-cyan-500"/>
    </div>
);

const DocumentPreview = () => (
    <div className="bg-white p-10 rounded-md shadow-lg text-black leading-relaxed font-serif scale-95 origin-top relative">
        <h3 className="text-center font-bold text-3xl mb-4">CONTRATO DE COMPRAVENTA</h3>
        <p className="text-center text-gray-500 mb-8 text-base">Entre TechCorp SL e Innovatech SA</p>
        <p className="font-bold mb-3 text-2xl">I. PARTES</p>
        <p className="mb-4 text-xl">De una parte, <span className="bg-cyan-100 px-1 rounded font-semibold">TechCorp Solutions SL</span>...</p>
        <p className="mb-8 text-xl">De otra parte, <span className="bg-cyan-100 px-1 rounded font-semibold">Innovatech Industries SA</span>...</p>
        <p className="font-bold mb-3 text-2xl">II. OBJETO</p>
        <p className="pl-4 text-xl">1. Adquisición de <span className="bg-yellow-100 px-1 rounded font-semibold">activos tecnológicos</span> por <span className="bg-yellow-100 px-1 rounded font-semibold">el importe acordado</span>.</p>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white via-white to-transparent"></div>
    </div>
);

export const Slide13: React.FC = () => {
    return (
        <SlideWrapper className="p-8 flex flex-col">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Generación de Documentos</h2>
            <p className="text-slate-600 text-center mb-6 text-2xl">De prompt a documento en segundos.</p>

            <div className="flex-grow bg-slate-50 rounded-xl border border-slate-200 flex min-h-[550px]">
                {/* Left Panel: Form */}
                <div className="w-2/5 border-r border-slate-200 p-6 flex flex-col">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">Nuevo Documento</h3>
                    <p className="text-lg text-slate-500 mb-6">Compraventa Mercantil</p>
                    <div className="flex-grow">
                        <FormInput label="Compradora" value="TechCorp Solutions SL" />
                        <FormInput label="Vendedora" value="Innovatech Industries SA" />
                        <FormInput label="Importe" value="Acuerdo de Colaboración" />
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-xl">
                        ✓ Generar Documento
                    </button>
                </div>
                {/* Right Panel: Preview */}
                <div className="w-3/5 p-6 bg-slate-100/50 rounded-r-xl relative overflow-hidden">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="font-bold text-slate-900 text-xl">📄 Vista Previa</h4>
                       <button className="text-base bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold">⬇ Descargar PDF</button>
                    </div>
                     <DocumentPreview />
                </div>
            </div>
        </SlideWrapper>
    );
};