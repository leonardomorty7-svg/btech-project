import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FileSignature, Folder, Settings, Puzzle, ArrowRight } from 'lucide-react';
import SolutionVisual from './SolutionVisual';

const solutionsData = [
    {
        id: "firma",
        title: "Firma electrónica",
        description: "Proceso de firma 100% legal, seguro y trazable para validar cualquier documento a distancia.",
        icon: FileSignature,
        image: "/assets/solutions/firma.png"
    },
    {
        id: "gestion",
        title: "Gestión documental",
        description: "Almacenamiento seguro, búsqueda inteligente y ciclo de vida automatizado.",
        icon: Folder,
        image: "/assets/solutions/gestion.png"
    },
    {
        id: "bpm",
        title: "Automatización BPM",
        description: "Orquesta tareas y conecta equipos para agilizar tus flujos organizacionales.",
        icon: Settings,
        image: "/assets/solutions/bpm.png"
    },
    {
        id: "integraciones",
        title: "Integraciones",
        description: "Conectores nativos para sistemas core como SAP, Salesforce y Microsoft 365.",
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

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.max(Math.floor(latest * displayData.length), 0),
            displayData.length - 1
        );
        if (index !== activeIndex) {
            setScrollDirection(index > activeIndex ? 1 : -1);
            setActiveIndex(index);
        }
    });

    return (
        <section ref={containerRef} id="soluciones" className="relative z-10 w-full bg-[#03010C]" style={{ height: `${displayData.length * 100}vh` }}>
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

                {/* PERSISTENT HEADER */}
                <div className="absolute top-32 left-0 right-0 z-20 pointer-events-auto text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Soluciones diseñadas <br className="hidden md:block" /> para el mundo real.</h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">Herramientas modulares que se integran en tu ecosistema para resolver problemas complejos de forma sencilla.</p>
                </div>

                <div className="absolute inset-0 pt-32 pointer-events-auto">
                    <AnimatePresence mode="wait" custom={scrollDirection}>
                        <motion.div
                            key={displayData[activeIndex].id}
                            custom={scrollDirection}
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.7, ease: "easeInOut" }}
                            className="absolute inset-0 w-full h-full flex flex-col justify-center max-w-7xl px-6 mx-auto pt-28"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                                {/* LEFT: Text Content */}
                                <div className="w-full">
                                    <div className="mb-6 inline-flex p-4 rounded-2xl bg-surface/50 border border-white/5 text-violet">
                                        {(() => {
                                            const Icon = displayData[activeIndex].icon;
                                            return <Icon size={40} />;
                                        })()}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                                        {displayData[activeIndex].title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-8 leading-relaxed">
                                        {displayData[activeIndex].description}
                                    </p>
                                    
                                    <button className="flex items-center gap-3 text-violet font-semibold text-lg hover:text-white transition-colors group">
                                        Explorar solución 
                                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>

                                {/* RIGHT: Animated Visual — no frame, embedded in background, nudged to optical center */}
                                <div className="w-full min-h-[280px] lg:min-h-[460px] relative flex items-center">
                                    <SolutionVisual type={displayData[activeIndex].id} />

                                    {/* Slide counter */}
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <div className="glass px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-violet uppercase border-violet/20 bg-[#03010C]/60 backdrop-blur-md">
                                            0{activeIndex + 1} / 0{displayData.length}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
