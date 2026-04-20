import { motion } from 'framer-motion';
import { Layers, Cpu, Activity, Workflow } from 'lucide-react';

const defaultFeatures = [
    {
        title: "Centralización",
        desc: "Una única fuente de verdad para toda tu operación digital",
        icon: Layers
    },
    {
        title: "Automatización",
        desc: "Procesos automatizados sin intervención manual",
        icon: Cpu
    },
    {
        title: "Trazabilidad",
        desc: "Visibilidad total en tiempo real",
        icon: Activity
    },
    {
        title: "Integración",
        desc: "Sistemas conectados en una arquitectura unificada",
        icon: Workflow
    }
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function FeatureGrid({ featuresFromApi }) {
    const hasApiData = featuresFromApi && featuresFromApi.length > 0;
    const items = hasApiData ? featuresFromApi.map((item, idx) => ({
        title: item.attributes?.title || item.title || defaultFeatures[idx]?.title || "",
        desc:  item.attributes?.description || item.description || defaultFeatures[idx]?.desc || "",
        icon: defaultFeatures[idx]?.icon || Layers
    })) : defaultFeatures;

    return (
        <section
            id="que-hacemos"
            className="py-40 md:py-60 px-6 bg-[#F9FBFF] relative overflow-hidden"
        >
            {/* Ambient light wash */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% -10%, #E0E7FF 0%, transparent 60%)', opacity: 0.4 }}
            />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* ── Header — Editorial & Command ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-32 md:mb-44"
                >
                    <h2 
                        className="font-bold text-gray-900 mb-8 lg:whitespace-nowrap"
                        style={{ fontSize: 'clamp(44px, 6vw, 84px)', lineHeight: 1, letterSpacing: '-0.04em' }}
                    >
                        La base de una operación digital real
                    </h2>
                    <p className="text-gray-500 text-lg md:text-xl lg:whitespace-nowrap opacity-80 leading-relaxed font-medium">
                        Centraliza, automatiza y controla cada proceso con una arquitectura modular y escalable.
                    </p>
                </motion.div>

                {/* ── 4-Column Feature Strip ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20"
                >
                    {items.map((feat, index) => {
                        const Icon = feat.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="group flex flex-col items-center text-center transition-all duration-500 cursor-default hover:-translate-y-0.5"
                            >
                                {/* Minimalist Icon — Aligned on top axis */}
                                <div className="mb-[16px] p-2 transition-all duration-500 min-h-[64px] flex items-center justify-center">
                                    <Icon 
                                        className="w-10 h-10 md:w-12 md:h-12 text-gray-400/80 transition-colors duration-500 group-hover:text-violet" 
                                        strokeWidth={1.2} 
                                    />
                                </div>

                                {/* Title — High Contrast & Semibold */}
                                <h3 
                                    className="text-gray-900 font-semibold tracking-tight mb-[12px] transition-colors duration-300" 
                                    style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', lineHeight: 1.1 }}
                                >
                                    {feat.title}
                                </h3>
                                
                                {/* Description — Regular Gray / Centered and contained */}
                                <p className="text-gray-500 text-base md:text-lg font-medium opacity-75 max-w-[240px] leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                                    {feat.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
