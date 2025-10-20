import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { FileText, Download, Sparkles } from 'lucide-react';

const FormInput = ({ label, value }: { label: string, value: string }) => (
    <div className="mb-4">
        <label className="text-lg font-semibold text-slate-600 mb-2 block">{label}</label>
        <input type="text" defaultValue={value} className="w-full bg-white border-2 border-slate-300 rounded-md p-3 text-xl text-slate-800 outline-none focus:ring-1 focus:ring-cyan-500 transition-all"/>
    </div>
);

const DocumentPreview = () => (
    <div className="bg-white p-10 rounded-md shadow-lg text-black leading-relaxed font-serif scale-95 origin-top relative border border-slate-200">
        <h3 className="text-center font-bold text-3xl mb-4">CONTRATO DE COMPRAVENTA</h3>
        <p className="text-center text-gray-500 mb-8 text-lg">Entre Empresa Compradora y Empresa Vendedora</p>
        <p className="font-bold mb-3 text-2xl">I. PARTES</p>
        <p className="mb-4 text-2xl">De una parte, <span className="bg-cyan-100/80 px-1 rounded font-semibold">Empresa Compradora S.L.</span>...</p>
        <p className="mb-8 text-2xl">De otra parte, <span className="bg-cyan-100/80 px-1 rounded font-semibold">Empresa Vendedora S.A.</span>...</p>
        <p className="font-bold mb-3 text-2xl">II. OBJETO</p>
        <p className="pl-4 text-2xl">1. Adquisición de <span className="bg-yellow-100/80 px-1 rounded font-semibold">activos tecnológicos</span> por <span className="bg-yellow-100/80 px-1 rounded font-semibold">el importe acordado</span>.</p>
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
                <div className="w-2/5 border-r border-slate-200 p-6 flex flex-col bg-white rounded-l-xl">
                    <h3 className="font-bold text-slate-900 text-2xl mb-2">Nuevo Documento</h3>
                    <p className="text-lg text-slate-500 mb-6">Compraventa Mercantil</p>
                    <div className="flex-grow">
                        <FormInput label="Compradora" value="Empresa Compradora S.L." />
                        <FormInput label="Vendedora" value="Empresa Vendedora S.A." />
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-lg hover:opacity-90 transition-opacity text-xl flex items-center justify-center gap-3">
                        <Sparkles /> Generar Documento
                    </button>
                </div>
                {/* Right Panel: Preview */}
                <div className="w-3/5 p-6 bg-slate-100/50 rounded-r-xl relative overflow-hidden">
                    <div className="flex justify-between items-center mb-4">
                       <h4 className="font-bold text-slate-900 text-xl flex items-center gap-2"><FileText size={20}/> Vista Previa</h4>
                       <button className="text-base bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2"><Download size={16}/> Descargar PDF</button>
                    </div>
                     <DocumentPreview />
                </div>
            </div>
        </SlideWrapper>
    );
};