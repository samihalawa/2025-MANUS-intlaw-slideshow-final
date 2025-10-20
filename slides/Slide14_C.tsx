import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Euro, FileText, Check, Clock, CheckSquare } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest).toLocaleString('es-ES'));

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5, ease: 'easeOut' });
        return controls.stop;
    }, [value]);

    return (
        <span className="flex items-center justify-center">
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

// FIX: Changed component to React.FC with a props interface to correctly handle the 'children' prop.
interface TimelineItemProps {
    children: React.ReactNode;
    isLast?: boolean;
    delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ children, isLast = false, delay = 0 }) => (
    <motion.div 
        className="flex gap-4"
        variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { delay } }
        }}
    >
        <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-cyan-300 rounded-full ring-4 ring-cyan-300/30"></div>
            {!isLast && <div className="w-0.5 flex-grow bg-white/15 my-2"></div>}
        </div>
        <div className="pb-6 text-sm text-white/70">{children}</div>
    </motion.div>
);

const StatCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; className?: string }> = ({ icon, title, children, className }) => (
    <div className={`bg-white/8 border border-white/15 rounded-2xl p-6 h-full flex flex-col backdrop-blur-md shadow-[0_18px_40px_rgba(8,20,48,0.25)] ${className ?? ''}`}>
        <h3 className="text-lg font-semibold text-white/80 uppercase tracking-[0.35em] mb-4 flex items-center gap-3">
            {icon}{title}
        </h3>
        <div className="flex-grow text-white">{children}</div>
    </div>
);

export const Slide14_C: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-6xl font-bold tracking-tight text-[#071733] text-center mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Plataforma Unificada: Vista del Caso 360°</h2>
            <p className="text-[#2C4874] text-center mb-8 text-lg uppercase tracking-[0.35em]">Operación · Análisis · Acciones · ROI</p>

            <motion.div 
                className="bg-gradient-to-br from-[#050F24] via-[#10224A] to-[#1A3766] rounded-[40px] p-8 border border-white/12 text-white shadow-[0_30px_80px_rgba(7,15,32,0.45)]"
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.1 }}
                viewport={{ once: true }}
            >
                {/* Header */}
                <motion.div variants={{hidden: {opacity:0, y:-20}, visible: {opacity:1, y:0}}} className="border-b border-white/15 pb-6 mb-6">
                    <h2 className="text-3xl font-semibold text-white tracking-tight">Caso 4588 · Compañía XYZ S.L.</h2>
                    <div className="flex gap-6 text-xs text-white/60 mt-3 uppercase tracking-[0.35em] flex-wrap">
                        <span><strong className="text-white/80">Tipo</strong> Contrato Mercantil</span>
                        <span><strong className="text-white/80">Socio</strong> Ignacio Jové</span>
                        <span className="flex items-center gap-2"><strong className="text-white/80">Estado</strong> <span className="flex items-center gap-2 text-emerald-200 font-semibold"><div className="w-2.5 h-2.5 bg-emerald-300 rounded-full"></div>Análisis Completado</span></span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column */}
                    <motion.div variants={{hidden: {opacity:0, x:-20}, visible: {opacity:1, x:0}}} className="col-span-2 space-y-6">
                        <StatCard icon={<Euro className="text-cyan-200"/>} title="Análisis Financiero y Pricing IA">
                            <div className="space-y-4 text-white">
                                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Salud financiera estimada · Caja 300.000€+</p>
                                <div className="bg-white/10 p-5 rounded-2xl border border-white/10">
                                    <p className="font-semibold text-cyan-100 text-xs uppercase tracking-[0.35em]">Rango recomendado IA</p>
                                    <p className="text-3xl font-bold text-white mt-2">€6,000 - €8,500</p>
                                </div>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <label className="font-semibold text-xs uppercase tracking-[0.35em] text-white/60">Propuesta actual</label>
                                    <div className="w-48 bg-white text-[#071733] border-2 border-white/80 rounded-xl p-3 text-2xl font-bold text-center shadow-lg shadow-black/10">
                                       <AnimatedNumber value={7200} prefix="€ "/>
                                    </div>
                                    <button className="bg-gradient-to-r from-[#42E4CF] to-[#2F8FFF] text-[#041630] font-semibold py-3 px-6 rounded-xl text-sm uppercase tracking-[0.3em] hover:opacity-95 transition-opacity shadow-lg shadow-cyan-500/20">
                                        Enviar Propuesta
                                    </button>
                                </div>
                            </div>
                        </StatCard>
                        <StatCard icon={<FileText className="text-cyan-200"/>} title="Documentos y Acciones">
                             <div className="flex items-center justify-between bg-white/10 p-4 rounded-xl border border-white/15">
                                <p className="text-base font-semibold text-white">Contrato_V1.pdf</p>
                                <span className="text-xs font-semibold text-emerald-200 uppercase tracking-[0.35em]">Analizado</span>
                             </div>
                             <button className="mt-4 w-full bg-white/10 text-white font-semibold py-4 rounded-xl text-sm uppercase tracking-[0.3em] border border-white/15 hover:bg-white/15 transition-colors">
                                Generar propuesta de honorarios
                             </button>
                        </StatCard>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div variants={{hidden: {opacity:0, x:20}, visible: {opacity:1, x:0}}} className="space-y-6">
                        <StatCard icon={<Clock className="text-cyan-200"/>} title="Línea de Tiempo">
                            <motion.div variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                                <TimelineItem delay={0.2}><p className="text-white/70"><strong className="text-white">Hoy:</strong> Chequeo financiero OK</p></TimelineItem>
                                <TimelineItem delay={0.4}><p className="text-white/70"><strong className="text-white">Ayer:</strong> Análisis IA completado</p></TimelineItem>
                                <TimelineItem delay={0.6}><p className="text-white/70"><strong className="text-white">Ayer:</strong> Documento recibido</p></TimelineItem>
                                <TimelineItem delay={0.8} isLast><p className="text-white/40"><strong className="text-white/60">Hace 2 días:</strong> Lead recibido (WhatsApp)</p></TimelineItem>
                            </motion.div>
                        </StatCard>
                         <StatCard icon={<Check className="text-cyan-200"/>} title="Próximas Tareas IA">
                            <motion.ul variants={{visible: {transition: {staggerChildren: 0.3}}}} className="space-y-3 text-sm">
                                <motion.li variants={{hidden: {opacity:0, x:-10}, visible:{opacity:1, x:0}}} className="flex items-center gap-3"><motion.div initial={{scale:0}} animate={{scale:1, transition:{delay:0.5}}}><CheckSquare className="text-cyan-300"/></motion.div><span className="text-white/80">Revisar y confirmar honorarios.</span></motion.li>
                                <motion.li variants={{hidden: {opacity:0, x:-10}, visible:{opacity:1, x:0}}} className="flex items-center gap-3"><motion.div initial={{scale:0}} animate={{scale:1, transition:{delay:0.8}}}><CheckSquare className="text-cyan-300"/></motion.div><span className="text-white/80">Enviar propuesta al cliente.</span></motion.li>
                            </motion.ul>
                        </StatCard>
                    </motion.div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};
