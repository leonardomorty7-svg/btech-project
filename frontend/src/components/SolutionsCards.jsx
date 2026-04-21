import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FileSignature, Folder, Settings, Puzzle, ArrowRight } from 'lucide-react';
import SolutionVisual from './SolutionVisual';

const solutionsData = [
    {
        id: "firma",
        title: "Firma electrónica",
        description: "Validación legal y trazable, sin fricción.",
        icon: FileSignature,
        image: "/assets/solutions/firma.png"
    },
    {
        id: "gestion",
        title: "Gestión documental",
        description: "Acceso, control y automatización en un solo flujo.",
        icon: Folder,
        image: "/assets/solutions/gestion.png"
    },
    {
        id: "bpm",
        title: "Automatización BPM",
        description: "Orquesta procesos sin intervención manual.",
        icon: Settings,
        image: "/assets/solutions/bpm.png"
    },
    {
        id: "integraciones",
        title: "Integraciones",
        description: "Conecta tu ecosistema sin reemplazar sistemas.",
        icon: Puzzle,
        image: "/assets/solutions/integraciones.png"
    }
];

const slideVariants = {
    initial: (direction) => ({
        opacity: 0,
        filter: "blur(8px)",
        scale: 1.02,
        y: direction > 0 ? 40 : -40
    }),
    animate: {
        opacity: 1,
        filter: "blur(0px)",
        scale: 1,
        y: 0
    },
    exit: (direction) => ({
        opacity: 0,
        filter: "blur(8px)",
        scale: 0.98,
        y: direction > 0 ? -40 : 40
    })
};

export default function SolutionsCards({ solutionsFromApi }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1);
    const containerRef = useRef(null);

    // Merge API data if available
    const displayData = solutionsData.map((item, idx) => {
        const apiItem = solutionsFromApi?.find(s =>
            s.attributes?.title?.toLowerCase().includes(item.id) ||
            s.title?.toLowerCase().includes(item.id) ||
            idx === solutionsFromApi.indexOf(s)
        );
        return {
            ...item,
            title: apiItem?.attributes?.title || apiItem?.title || item.title,
            description: apiItem?.attributes?.description || apiItem?.description || item.description,
        };
    });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const totalSteps = displayData.length + 1;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.max(Math.floor(latest * totalSteps), 0),
            totalSteps - 1
        );
        if (index !== activeIndex) {
            setScrollDirection(index > activeIndex ? 1 : -1);
            setActiveIndex(index);
        }
    });

    return (
        <section ref={containerRef} id="soluciones" className="relative z-10 w-full bg-[#03010C]" style={{ height: `${totalSteps * 100}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">

                {/* ── GLOBAL SECTION BACKGROUND — single source of ambient atmosphere ── */}
                {/* Central radial glow — animated to feel alive */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[5%] left-[15%] w-[55%] h-[55%] bg-[#1a06a0] rounded-full blur-[180px] opacity-[0.10]" />
                    <div className="absolute top-[55%] right-[5%] w-[35%] h-[35%] bg-[#3b1fa0] rounded-full blur-[150px] opacity-[0.07]" />
                    {/* Dot grid */}
                    <div
                        className="absolute inset-0 opacity-[0.05]"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)',
                            backgroundSize: '28px 28px'
                        }}
                    />
                </div>

                {/* SLIDE CONTENT AREA */}
                <div className="absolute inset-0 pointer-events-auto">
                    <AnimatePresence mode="wait" custom={scrollDirection}>
                        <motion.div
                            key={activeIndex === 0 ? "intro" : displayData[activeIndex - 1].id}
                            custom={scrollDirection}
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 w-full h-full flex flex-col justify-center items-center px-6"
                        >
                            {activeIndex === 0 ? (
                                /* ── SLIDE 0: INTRO NARRATIVE (FULL SCREEN) ── */
                                <div className="text-center w-full" style={{ maxWidth: '1100px' }}>
                                    <h2 className="text-white mb-8">
                                        Soluciones modulares<br />para operaciones críticas
                                    </h2>
                                    <p className="opacity-80 mb-12">
                                        Automatiza, integra y escala sin fricción
                                    </p>
                                    <ul className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
                                        {[
                                            'Centraliza información crítica',
                                            'Automatiza procesos complejos',
                                            'Integra sistemas sin fricción',
                                        ].map((item) => (
                                            <li
                                                key={item}
                                                className="flex items-center gap-2.5 text-sm md:text-base font-medium tracking-wide"
                                                style={{ color: 'rgba(255,255,255,0.45)' }}
                                            >
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4e2bcd', display: 'inline-block', flexShrink: 0 }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : (
                                /* ── SLIDES 1-4: PRODUCT SOLUTIONS ── */
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-7xl mx-auto pt-24 lg:pt-0">
                                    {/* LEFT: Text Content */}
                                    <div className="w-full">
                                        <div className="mb-6 inline-flex p-4 rounded-2xl bg-surface/50 border border-white/5 text-violet">
                                            {(() => {
                                                const Icon = displayData[activeIndex - 1].icon;
                                                return <Icon size={40} />;
                                            })()}
                                        </div>
                                        <h3 className="text-white mb-4">
                                            {displayData[activeIndex - 1].title}
                                        </h3>
                                        <p className="mb-8" style={{ maxWidth: '420px' }}>
                                            {displayData[activeIndex - 1].description}
                                        </p>
                                        
                                        <button className="flex items-center gap-3 text-violet font-semibold text-lg hover:text-white transition-colors group">
                                            Explorar solución 
                                            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>

                                    {/* RIGHT: Visual Content */}
                                    <div className="w-full min-h-[320px] lg:min-h-[520px] relative flex items-center" style={{ filter: 'drop-shadow(0 0 48px rgba(78,43,205,0.22))' }}>
                                        <SolutionVisual type={displayData[activeIndex - 1].id} />

                                        {/* Slide counter */}
                                        <div className="absolute bottom-6 left-6 z-10">
                                            <div className="glass px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest text-violet uppercase border-violet/20 bg-[#03010C]/60 backdrop-blur-md">
                                                0{activeIndex} / 0{displayData.length}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden pointer-events-none z-10">
                    <motion.div
                        className="h-full bg-violet"
                        style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
                    />
                </div>
            </div>
        </section>
    );
}
