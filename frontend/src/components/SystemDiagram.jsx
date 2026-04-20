import { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Database, Workflow, Cloud, Layout } from 'lucide-react';

const steps = [
    { title: "Repositorio", icon: Database, label: "01", desc: "Almacenamiento e ingesta de datos" },
    { title: "BPM", icon: Workflow, label: "02", desc: "Reglas de negocio y flujos" },
    { title: "Servicios", icon: Cloud, label: "03", desc: "APIs nativas y conectores" },
    { title: "UI", icon: Layout, label: "04", desc: "Interfaces escalables" }
];

const ICON_SIZE = 72; // px — w-18 h-18

export default function SystemDiagram() {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(-1);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "center 40%"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if      (latest < 0.15) setActiveIndex(-1);
        else if (latest < 0.35) setActiveIndex(0);
        else if (latest < 0.55) setActiveIndex(1);
        else if (latest < 0.75) setActiveIndex(2);
        else                    setActiveIndex(3);
    });

    return (
        <section ref={containerRef} className="min-h-screen flex items-center justify-center px-6 relative z-10 overflow-hidden bg-[#03010C]">

            {/* ── Ambient background depth — matches ecosystem sections ── */}

            {/* Primary orb: sits behind the pipeline line, offset left of center */}
            <div className="absolute top-[35%] left-[10%] w-[55%] h-[45%] bg-[#1a06a0] rounded-full blur-[160px] opacity-[0.13] pointer-events-none" />

            {/* Secondary orb: lower right, muted lavender */}
            <div className="absolute bottom-[15%] right-[8%] w-[35%] h-[40%] bg-[#2e1280] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />

            {/* Dot grid — same as SolutionsCards */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)',
                    backgroundSize: '28px 28px'
                }}
            />

            <div className="max-w-6xl mx-auto w-full py-20">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-28"
                >
                    <h2 
                        className="font-bold text-white mb-6"
                        style={{ 
                            fontSize: 'clamp(48px, 5.5vw, 76px)', 
                            lineHeight: 1.05, 
                            letterSpacing: '-0.045em' 
                        }}
                    >
                        ¿Cómo funciona?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">
                        Arquitectura por capas diseñada para escalar con tu organización.
                    </p>
                </motion.div>

                {/* Horizontally scrollable rail — prevents vertical stacking on narrow screens */}
                <div className="w-full overflow-x-auto hide-scrollbar">
                    <div className="relative flex items-start justify-between min-w-[720px] lg:min-w-full">

                        {/* ─── Background connector line ─── */}
                        <div
                            className="absolute z-0"
                            style={{
                                top: `${ICON_SIZE / 2 + 28}px`, /* 28px = number label height + gap */
                                left: '12.5%',
                                right: '12.5%',
                                height: '1px',
                                background: 'rgba(36,8,192,0.25)'
                            }}
                        />

                        {/* ─── Scroll-driven fill line ─── */}
                        <motion.div
                            className="absolute z-0 origin-left"
                            style={{
                                top: `${ICON_SIZE / 2 + 28}px`,
                                left: '12.5%',
                                right: '12.5%',
                                height: '1px',
                                background: 'linear-gradient(90deg, #4e2bcd, #6a4cff)',
                                boxShadow: '0 0 10px 1px rgba(106,76,255,0.5)',
                                scaleX: scrollYProgress,
                            }}
                        />

                        {/* ─── Steps ─── */}
                        {steps.map((step, idx) => {
                            const isActive = activeIndex >= idx;

                            return (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.12 }}
                                    className="relative z-10 flex flex-col items-center text-center"
                                    style={{ width: `${100 / steps.length}%` }}
                                >
                                    {/* Number */}
                                    <div className={`text-[13px] font-mono font-semibold tracking-[0.25em] mb-3 transition-colors duration-700
                                        ${isActive ? 'text-violet' : 'text-gray-700'}`}>
                                        {step.label}
                                    </div>

                                    {/* Icon circle — must match ICON_SIZE */}
                                    <div
                                        className={`flex items-center justify-center rounded-full mb-6 border transition-all duration-700
                                            ${isActive
                                                ? 'border-violet shadow-[0_0_28px_rgba(78,43,205,0.45)] scale-105'
                                                : 'border-[#2408c0]/25 scale-100'
                                            }`}
                                        style={{ width: ICON_SIZE, height: ICON_SIZE, background: '#03010C' }}
                                    >
                                        <step.icon
                                            size={26}
                                            className={`transition-colors duration-700 ${isActive ? 'text-white' : 'text-gray-600'}`}
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 
                                        className={`font-semibold mb-3 transition-colors duration-700 transition-all`}
                                        style={{ 
                                            fontSize: '28px', 
                                            lineHeight: 1.15, 
                                            letterSpacing: '-0.025em',
                                            color: isActive ? 'white' : 'rgba(255,255,255,0.25)' 
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    {/* Description — single constrained line */}
                                    <p className={`text-[14px] leading-snug max-w-[140px] transition-colors duration-700
                                        ${isActive ? 'text-gray-400' : 'text-gray-700'}`}>
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

