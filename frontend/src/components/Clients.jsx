import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const defaultCases = [
    {
        client: "Ministerio de Finanzas",
        sector: "Gobierno",
        description: "Transformación del ciclo presupuestario mediante automatización BPM e integración con SAP, eliminando la dependencia de procesos manuales y hojas de cálculo compartidas.",
        problem: "Sistema legacy lento y propenso a errores humanos en la gestión de presupuestos.",
        solution: "Implementación de automatización BPM y repositoría cloud con integración SAP.",
        result: "99.9%",
        resultLabel: "Uptime garantizado",
        metric2: "5×",
        metric2Label: "Velocidad de procesamiento"
    },
    {
        client: "Banco Nacional",
        sector: "Finanzas",
        description: "Habilitación de la firma digital avanzada para todos los procesos de crédito y onboarding, con validez legal plena y trazabilidad completa de cada transacción.",
        problem: "Ausencia de validación digital legal en procesos de crédito y apertura de cuentas.",
        solution: "Módulo de firma electrónica avanzada integrado al core bancario existente.",
        result: "100%",
        resultLabel: "Cumplimiento normativo",
        metric2: "0",
        metric2Label: "Documentos en papel"
    },
    {
        client: "Tribunal Superior de Justicia",
        sector: "Justicia",
        description: "Digitalización completa del expediente judicial y migración al entorno virtual, reduciendo dramáticamente los tiempos de resolución y mejorando el acceso a la justicia.",
        problem: "Expedientes físicos dispersos con tiempos de respuesta inaceptables.",
        solution: "Digitalización completa de expedientes y habilitación de audiencias virtuales.",
        result: "80%",
        resultLabel: "Reducción en tiempos",
        metric2: "12K+",
        metric2Label: "Expedientes migrados"
    }
];

const caseVariants = {
    initial: (dir) => ({ opacity: 0, y: dir > 0 ? 20 : -20 }),
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
    exit:    (dir) => ({ opacity: 0, y: dir > 0 ? -20 : 20, transition: { duration: 0.3, ease: "easeIn" } })
};

// Animate number counting up for metrics
function MetricValue({ value, label, large = false }) {
    return (
        <div className="flex flex-col gap-2">
            <div className={`font-bold text-white tracking-tight leading-none ${large ? 'text-[72px] md:text-[88px]' : 'text-[52px] md:text-[64px] text-[#a08be8]'}`}>
                {value}
            </div>
            <div className="text-[11px] font-bold text-gray-500 uppercase tracking-[0.18em]">
                {label}
            </div>
        </div>
    );
}

export default function Clients({ casesFromApi }) {
    const [active, setActive] = useState(0);
    const [dir, setDir] = useState(1);

    const hasCases = casesFromApi && casesFromApi.length > 0;
    const raw = hasCases ? casesFromApi.map(c => c.attributes || c) : defaultCases;

    const items = raw.map((c, i) => ({
        client:       c.client       || c.title         || defaultCases[i]?.client       || "Cliente",
        sector:       c.sector       || c.category      || defaultCases[i]?.sector       || "",
        description:  c.description  ||                    defaultCases[i]?.description  || "",
        problem:      c.problem      || c.challenge      || defaultCases[i]?.problem      || "",
        solution:     c.solution     ||                    defaultCases[i]?.solution     || "",
        result:       c.result       ||                    defaultCases[i]?.result       || "—",
        resultLabel:  c.resultLabel  ||                    defaultCases[i]?.resultLabel  || "",
        metric2:      c.metric2      ||                    defaultCases[i]?.metric2      || "",
        metric2Label: c.metric2Label ||                    defaultCases[i]?.metric2Label || "",
    }));

    const go = (idx) => {
        setDir(idx > active ? 1 : -1);
        setActive(idx);
    };

    const current = items[active];

    return (
        <section className="min-h-screen bg-[#03010C] flex items-center justify-center px-6 py-24 relative z-10 border-t border-white/5 overflow-hidden">

            {/* Ambient glow */}
            <div className="absolute top-1/3 right-0 w-[480px] h-[480px] bg-[#1a0a6e] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#2408c0] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">

                {/* ── HEADER — full width, above both columns ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-violet text-sm font-bold tracking-[0.2em] uppercase mb-4">
                        Casos de éxito
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-white leading-[1.05]">
                        Resultados reales.<br className="hidden md:block" /> Impacto medible.
                    </h2>
                </motion.div>

                {/* ── TWO-COLUMN BODY ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20 items-start">

                    {/* ── LEFT: Case selector (30%) ── */}
                    <div className="flex flex-col gap-1">
                        {items.map((c, idx) => (
                            <button
                                key={idx}
                                onClick={() => go(idx)}
                                className={`group flex flex-col text-left px-5 py-4 rounded-xl transition-all duration-300 ${
                                    active === idx
                                        ? 'bg-white/5'
                                        : 'hover:bg-white/3'
                                }`}
                            >
                                {/* Active indicator bar */}
                                <div className="flex items-center gap-3 mb-1">
                                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                                        active === idx ? 'bg-violet scale-125' : 'bg-white/15'
                                    }`} />
                                    <span className={`text-[15px] font-semibold transition-colors duration-300 ${
                                        active === idx ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                                    }`}>
                                        {c.client}
                                    </span>
                                </div>
                                <div className={`ml-[18px] text-[12px] font-medium tracking-wider uppercase transition-colors duration-300 ${
                                    active === idx ? 'text-violet' : 'text-gray-700'
                                }`}>
                                    {c.sector}
                                </div>
                            </button>
                        ))}

                        {/* Progress pills */}
                        <div className="flex gap-2 mt-6 px-5">
                            {items.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => go(idx)}
                                    className={`h-[2px] rounded-full transition-all duration-500 ${
                                        active === idx ? 'w-8 bg-violet' : 'w-4 bg-white/10 hover:bg-white/25'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Active case — narrative panel (70%) ── */}
                    <div className="relative min-h-[520px]">
                        <AnimatePresence mode="wait" custom={dir}>
                            <motion.div
                                key={active}
                                custom={dir}
                                variants={caseVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full"
                            >
                                {/* Category badge */}
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet/25 bg-violet/8 mb-6">
                                    <div className="w-1 h-1 rounded-full bg-violet" />
                                    <span className="text-violet text-[11px] font-bold tracking-[0.2em] uppercase">
                                        {current.sector}
                                    </span>
                                </div>

                                {/* Case title */}
                                <h3 className="text-white text-[36px] md:text-[44px] font-bold tracking-tight leading-[1.05] mb-5">
                                    {current.client}
                                </h3>

                                {/* Short narrative description */}
                                <p className="text-gray-400 text-[17px] leading-[1.75] max-w-xl mb-12">
                                    {current.description}
                                </p>

                                {/* Challenge + Solution — pure spacing, no borders */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-600 tracking-[0.25em] uppercase mb-3">
                                            El desafío
                                        </p>
                                        <p className="text-gray-300 text-[15px] leading-[1.7]">
                                            {current.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-600 tracking-[0.25em] uppercase mb-3">
                                            La solución
                                        </p>
                                        <p className="text-gray-300 text-[15px] leading-[1.7]">
                                            {current.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* ── METRICS — the hero moment ── */}
                                <div className="flex items-end gap-16 pt-10 border-t border-white/[0.06]">
                                    <MetricValue value={current.result} label={current.resultLabel} large />
                                    {current.metric2 && (
                                        <MetricValue value={current.metric2} label={current.metric2Label} />
                                    )}
                                </div>

                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
