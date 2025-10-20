import React, { useEffect } from 'react';
import { SlideWrapper } from '../components/SlideWrapper';
import { Euro, FileText, Check, Clock, CheckSquare } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedNumberProps {
    value: number;
    prefix?: string;
    suffix?: string;
}

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: AnimatedNumberProps) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, latest => Math.round(latest).toLocaleString('es-ES'));

    useEffect(() => {
        const controls = animate(count, value, { duration: 1.5, ease: 'easeOut', repeat: Infinity, repeatDelay: 4 });
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

interface TimelineItemProps {
    children: React.ReactNode;
    isLast?: boolean;
    delay?: number;
}

// FIX: Explicitly type component with React.FC to resolve TypeScript errors with 'children' prop.
const TimelineItem: React.FC<TimelineItemProps> = ({ children, isLast = false, delay = 0 }) => (
    <motion.div 
        className="flex gap-4"
        variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0, transition: { delay } }
        }}
    >
        <div className="flex flex-col items-center">
            <div className="w-5 h-5 bg-cyan-500 rounded-full ring-4 ring-cyan-500/20"></div>
            {!isLast && <div className="w-0.5 flex-grow bg-slate-300 my-2"></div>}
        </div>
        <div className="pb-6 text-lg">{children}</div>
    </motion.div>
);

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
}

// FIX: Explicitly type component with React.FC to resolve TypeScript errors with 'children' prop.
const StatCard: React.FC<StatCardProps> = ({ icon, title, children, className }) => (
    <div className={`bg-white rounded-xl shadow-lg border border-slate-200 p-6 h-full flex flex-col ${className}`}>
        <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">{icon}{title}</h3>
        <div className="flex-grow">{children}</div>
    </div>
);

export const Slide14_C: React.FC = () => {
    return (
        <SlideWrapper className="p-12">
            <h2 className="text-6xl font-bold tracking-tighter text-slate-900 text-center mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Plataforma Unificada: Vista del Caso 360°</h2>
            <p className="text-2xl text-slate-600 mb-8 text-center">Toda la inteligencia de un caso en una sola pantalla.</p>

            <motion.div 
                className="bg-slate-50/70 rounded-2xl p-8 border border-slate-200"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
            >
                {/* Header */}
                <motion.div variants={{hidden: {opacity:0, y:-20}, visible: {opacity:1, y:0}}} className="border-b border-slate-200 pb-4 mb-6">
                    <h2 className="text-4xl font-bold text-slate-900">Caso 4588: Compañía XYZ S.L.</h2>
                    <div className="flex gap-6 text-xl text-slate-600 mt-2">
                        <span><strong className="font-semibold">Tipo:</strong> Contrato Mercantil</span>
                        <span><strong className="font-semibold">Socio:</strong> Ignacio Jové</span>
                        <span className="flex items-center gap-2"><strong className="font-semibold">Estado:</strong> 
                            <span className="flex items-center gap-2 text-green-600 font-bold">
                                <motion.div 
                                    className="w-2.5 h-2.5 bg-green-500 rounded-full"
                                    animate={{ scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                />
                                Análisis Completado
                            </span>
                        </span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-3 gap-6">
                    {/* Left Column */}
                    <motion.div variants={{hidden: {opacity:0, x:-20}, visible: {opacity:1, x:0}}} className="col-span-2 space-y-6">
                        <StatCard icon={<Euro className="text-cyan-500"/>} title="Análisis Financiero y Pricing IA">
                            <div className="space-y-4">
                                <p className="text-xl"><strong>Salud Financiera:</strong> Caja Estimada: 300.000€+</p>
                                <div className="bg-cyan-500/10 p-4 rounded-lg">
                                    <p className="font-bold text-cyan-800">Rango de Honorarios Recomendado IA:</p>
                                    <p className="text-4xl font-bold text-slate-800 mt-1">€6,000 - €8,500</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <label className="font-semibold text-xl">Propuesta Actual:</label>
                                    <div className="w-48 bg-white border-2 border-slate-300 rounded-md p-2 text-2xl font-bold text-slate-800 text-center">
                                       <AnimatedNumber value={7200} prefix="€ "/>
                                    </div>
                                    <button className="bg-cyan-500 text-white font-bold py-3 px-4 rounded-md text-lg hover:bg-cyan-600 transition-colors">Enviar Propuesta</button>
                                </div>
                            </div>
                        </StatCard>
                        <StatCard icon={<FileText className="text-cyan-500"/>} title="Documentos y Acciones">
                             <div className="flex items-center justify-between bg-slate-100 p-3 rounded-md">
                                <p className="text-xl font-semibold">Contrato_V1.pdf</p>
                                <span className="text-lg font-semibold text-green-500">Analizado</span>
                             </div>
                             <button className="mt-4 w-full bg-slate-800 text-white font-bold py-3 rounded-md text-lg hover:bg-slate-900 transition-colors">Generar Propuesta de Honorarios</button>
                        </StatCard>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div variants={{hidden: {opacity:0, x:20}, visible: {opacity:1, x:0}}} className="space-y-6">
                        <StatCard icon={<Clock className="text-cyan-500"/>} title="Línea de Tiempo">
                            <motion.div variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
                                <TimelineItem delay={0.2}><p><strong className="font-semibold">Hoy:</strong> Chequeo financiero OK</p></TimelineItem>
                                <TimelineItem delay={0.4}><p><strong className="font-semibold">Ayer:</strong> Análisis IA completado</p></TimelineItem>
                                <TimelineItem delay={0.6}><p><strong className="font-semibold">Ayer:</strong> Documento recibido</p></TimelineItem>
                                <TimelineItem delay={0.8} isLast><p className="text-slate-500"><strong className="font-semibold">Hace 2 días:</strong> Lead recibido (WhatsApp)</p></TimelineItem>
                            </motion.div>
                        </StatCard>
                         <StatCard icon={<Check className="text-cyan-500"/>} title="Próximas Tareas IA">
                            <motion.ul variants={{visible: {transition: {staggerChildren: 0.3}}}} className="space-y-2 text-lg">
                                <motion.li variants={{hidden: {opacity:0, x:-10}, visible:{opacity:1, x:0}}} className="flex items-center gap-2"><motion.div initial={{scale:0}} animate={{scale:1, transition:{delay:0.5}}}><CheckSquare className="text-cyan-600"/></motion.div> Revisar y confirmar honorarios.</motion.li>
                                <motion.li variants={{hidden: {opacity:0, x:-10}, visible:{opacity:1, x:0}}} className="flex items-center gap-2"><motion.div initial={{scale:0}} animate={{scale:1, transition:{delay:0.8}}}><CheckSquare className="text-cyan-600"/></motion.div> Enviar propuesta al cliente.</motion.li>
                            </motion.ul>
                        </StatCard>
                    </motion.div>
                </div>
            </motion.div>
        </SlideWrapper>
    );
};
