import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const narrativeSteps = [
    {
        type: "intro",
        title: "Beneficios tangibles desde el primer día",
        subtitle: "Tu arquitectura tecnológica impacta directamente el ROI operativo"
    },
    {
        type: "metric",
        metric: "60%",
        title: "Menos carga operativa",
        desc: "Reducción medida en tareas manuales y procesos redundantes."
    },
    {
        type: "metric",
        metric: "100%",
        title: "Trazabilidad garantizada",
        desc: "Control total y auditoría inmutable de cada transacción."
    },
    {
        type: "metric",
        metric: "Escalable",
        title: "Infraestructura cloud-ready",
        desc: "Capacidad de respuesta inmediata ante picos de demanda."
    },
    {
        type: "metric",
        metric: "Día 1",
        title: "Resultados desde el inicio",
        desc: "Curva de implementación optimizada para impacto inmediato."
    }
];

const slideVariants = {
    initial: (direction) => ({
        opacity: 0,
        y: direction > 0 ? 30 : -30,
        filter: "blur(10px)",
    }),
    animate: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
    },
    exit: (direction) => ({
        opacity: 0,
        y: direction > 0 ? -30 : 30,
        filter: "blur(10px)",
    })
};

export default function BenefitsList() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1);
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const stepSize = 1 / narrativeSteps.length;
        const index = Math.min(
            Math.floor(latest / stepSize),
            narrativeSteps.length - 1
        );
        if (index !== activeIndex) {
            setScrollDirection(index > activeIndex ? 1 : -1);
            setActiveIndex(index);
        }
    });

    return (
        <section ref={containerRef} className="relative bg-[#03010C]" style={{ height: '500vh' }}>
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                
                {/* ── Background Atmosphere (Shared Theme) ── */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] bg-[#1a06a0] rounded-full blur-[180px] opacity-[0.12]" />
                    <div className="absolute bottom-[10%] right-[15%] w-[40%] h-[40%] bg-[#3b1fa0] rounded-full blur-[160px] opacity-[0.08]" />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '32px 32px'
                        }}
                    />
                </div>

                <div className="relative z-10 w-full px-6">
                    <AnimatePresence mode="wait" custom={scrollDirection}>
                        <motion.div
                            key={activeIndex}
                            custom={scrollDirection}
                            variants={slideVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center text-center"
                        >
                            {narrativeSteps[activeIndex].type === "intro" ? (
                                <div className="w-full flex justify-center px-6">
                                    <div className="inline-block text-center">
                                        <h2 className="text-white mb-8 lg:whitespace-nowrap">
                                            {narrativeSteps[activeIndex].title}
                                        </h2>
                                        <p className="text-white/90 text-[18px] lg:whitespace-nowrap mt-4">
                                            {narrativeSteps[activeIndex].subtitle}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <div 
                                        className="text-[#4e2bcd] font-bold tracking-tighter mb-4"
                                        style={{ fontSize: 'clamp(64px, 10vw, 140px)', lineHeight: 1 }}
                                    >
                                        {narrativeSteps[activeIndex].metric}
                                    </div>
                                    <h3 className="text-white mb-6">
                                        {narrativeSteps[activeIndex].title}
                                    </h3>
                                    <p className="text-white/80 text-[18px] max-w-md mx-auto">
                                        {narrativeSteps[activeIndex].desc}
                                    </p>
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress bar indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                        className="h-full bg-[#4e2bcd]"
                        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
                    />
                </div>
            </div>
        </section>
    );
}

