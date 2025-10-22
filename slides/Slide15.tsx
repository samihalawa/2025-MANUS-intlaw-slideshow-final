import React from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import {
  MessageCircle, Mail, FilePlus, FileCheck2, Search, Link,
  Target, Filter, LayoutDashboard, Users, Wrench, Star
} from 'lucide-react';
import { motion } from 'framer-motion';

const modules = [
  {
    name: 'Módulo 1: Captación y Asistente Inteligente',
    features: [
      { icon: <MessageCircle size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Asistente Web IA:</strong> Asistente web 24/7 que cualifica, cotiza y recoge documentos automáticamente.' },
      { icon: <Mail size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Intake Multicanal:</strong> Centralice la captación de clientes desde web, email y WhatsApp.' },
      { icon: <FilePlus size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Propuesta Automática:</strong> Genere y envíe propuestas de honorarios al instante tras la cualificación.' }
    ],
    standardPrice: '€15,000',
    offerPrice: '€12,000'
  },
  {
    name: 'Módulo 2: Inteligencia Documental (Garantizado)',
    features: [
      { icon: <FileCheck2 size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Análisis Confiable:</strong> Análisis documental masivo con precisión garantizada (0% alucinaciones).' },
      { icon: <Search size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Búsqueda Inteligente:</strong> Detección instantánea de riesgos, contradicciones y cláusulas críticas.' },
      { icon: <Link size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Cita de Fuentes:</strong> Fiabilidad total: cada dato generado está vinculado a su fuente original.' }
    ],
    standardPrice: '€15,000',
    offerPrice: '€12,000'
  },
  {
    name: 'Módulo 3: Motor de Crecimiento Proactivo IA',
    features: [
      { icon: <Target size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Radar de Oportunidades:</strong> Escaneo de datos públicos para detectar eventos (transacciones, litigios) y generar clientes.' },
      { icon: <Filter size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Prospección Quirúrgica:</strong> Flujo constante de oportunidades de alto valor, filtradas para sus nichos más rentables.' },
      { icon: <LayoutDashboard size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Inteligencia Competitiva:</strong> Identifique necesidades legales de empresas antes que su competencia y actúe primero.' }
    ],
    standardPrice: '€15,000',
    offerPrice: '€12,000'
  },
  {
    name: 'Módulo 4: Copilot Documental y Asociación Estratégica',
    features: [
      { icon: <FilePlus size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Copilot de Redacción:</strong> Redacte documentos complejos desde lenguaje natural, conectado a los datos del caso.' },
      { icon: <Users size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Implementación y Adopción:</strong> Formación completa para maximizar el rendimiento del equipo desde el día uno.' },
      { icon: <Wrench size={20} className="flex-shrink-0 text-cyan-600" />, text: '<strong>Soporte Proactivo:</strong> 12 meses de soporte y monitorización para optimizar y evolucionar el sistema.' }
    ],
    standardPrice: '€15,000',
    offerPrice: '€12,000'
  }
];

const addons = [
  { name: 'Automatización de WhatsApp', price: '+€5,000' },
  { name: 'Agente de Voz Telefónico (IA)', price: '+€6,000' },
  { name: 'Entrega Acelerada (30 Días)', price: '+€4,000' }
];

export const Slide15: React.FC = () => {
  return (
    <SlideWrapper className="p-6 md:p-16 bg-slate-50/50">
      <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-slate-900 mb-4 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Inversión Estratégica</h2>
      <p className="text-xl md:text-3xl text-slate-600 mb-12 text-center max-w-4xl mx-auto">Una estructura de valor transparente con una oferta de asociación preferente.</p>
      
      <motion.div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-x-auto"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
      >
        <table className="w-full text-lg min-w-[1000px]">
          <thead>
            <tr className="border-b border-slate-300">
              <th className="w-1/2 p-6 text-left text-base md:text-xl font-bold text-slate-700 uppercase tracking-wider">Características Principales Incluidas</th>
              <th className="w-1/4 p-6 text-center text-base md:text-xl font-bold text-slate-700 uppercase tracking-wider">Asociación Estratégica</th>
              <th className="w-1/4 p-6 text-center text-base md:text-xl font-bold text-white uppercase tracking-wider bg-slate-800">
                <div className="flex items-center justify-center gap-2">
                  <Star className="text-yellow-400" size={20} fill="currentColor" />
                  Oferta FastDeal
                </div>
                <span className="text-sm font-normal normal-case text-slate-300 mt-1 block">Válido hasta 30 Oct 2025</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {modules.map((module) => (
              <tr key={module.name}>
                <td className="p-6 align-top">
                  <p className="font-bold text-xl md:text-2xl text-slate-800 mb-3">{module.name}</p>
                  <ul className="space-y-2 text-base md:text-lg">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-600">
                        {feature.icon}
                        <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="p-6 text-center align-middle font-semibold text-xl md:text-2xl text-slate-800">
                  {module.standardPrice}
                </td>
                <td className="p-6 text-center align-middle bg-cyan-500/5">
                  <span className="text-slate-500 line-through text-base md:text-lg">{module.standardPrice}</span>
                  <span className="font-bold text-2xl md:text-3xl text-cyan-600 ml-2">{module.offerPrice}</span>
                  <span className="block text-sm font-semibold text-green-600 mt-1">Ahorro 20%</span>
                </td>
              </tr>
            ))}
            <tr>
              <td className="p-6 font-semibold text-xl md:text-2xl text-slate-800" colSpan={3}>Módulos Premium Adicionales</td>
            </tr>
            {addons.map(addon => (
              <tr key={addon.name}>
                <td className="pl-12 py-3 text-slate-600">{addon.name}</td>
                <td className="text-center font-semibold text-slate-700">{addon.price}</td>
                <td className="text-center font-bold text-green-600 bg-cyan-500/5">Incluido</td>
              </tr>
            ))}
            <tr className="bg-slate-100 font-bold text-xl md:text-2xl">
              <td className="p-6 text-slate-800">INVERSIÓN TOTAL</td>
              <td className="p-6 text-center text-slate-800">
                €60,000
                <span className="block text-sm font-normal text-slate-500">(+ €15,000 módulos premium)</span>
              </td>
              <td className="p-6 text-center text-white bg-cyan-600">
                €48,000
              </td>
            </tr>
             <tr className="font-bold text-xl md:text-2xl">
              <td className="p-6 text-green-700">AHORRO TOTAL (FastDeal)</td>
              <td className="p-6 text-center"></td>
              <td className="p-6 text-center text-green-700 bg-green-500/10">
                €27,000
                <span className="block text-sm font-normal text-green-600">(€12,000 dto. + €15,000 bonus)</span>
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </SlideWrapper>
  );
};