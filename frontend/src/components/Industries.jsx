import { motion } from 'framer-motion';
import { Landmark, Briefcase, Scale, Building2 } from 'lucide-react';

const defaultSectors = [
    {
        title: "Gobierno",
        desc: "Modernización del estado y servicios digitales al ciudadano.",
        icon: Landmark,
        accent: "from-[#1a0a6e]/60 to-transparent"
    },
    {
        title: "Finanzas",
        desc: "Core bancario, onboarding digital y prevención de fraudes.",
        icon: Briefcase,
        accent: "from-[#0d1a5e]/60 to-transparent"
    },
    {
        title: "Justicia",
        desc: "Expedientes electrónicos y audiencias virtuales integradas.",
        icon: Scale,
        accent: "from-[#1a0a6e]/60 to-transparent"
    },
    {
        title: "Salud",
        desc: "Historia clínica unificada, integración con actores del ecosistema.",
        icon: Building2,
        accent: "from-[#0d1a5e]/60 to-transparent"
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 }
    })
};

export default function Industries({ sectorsFromApi }) {
    const hasApiData = sectorsFromApi && sectorsFromApi.length > 0;

    const items = hasApiData ? sectorsFromApi.map((item, idx) => ({
        title: item.attributes?.name || item.name || defaultSectors[idx]?.title || "Sector",
        desc: item.attributes?.description || item.description || defaultSectors[idx]?.desc || "",
        icon: defaultSectors[idx]?.icon || Landmark,
        accent: defaultSectors[idx]?.accent || "from-[#1a0a6e]/60 to-transparent"
    })) : defaultSectors;

    // Ensure we always render 4 items for a clean 2x2 grid
    const gridItems = [...items, ...defaultSectors].slice(0, 4);

    return (
        <section id="sectores" className="min-h-screen bg-[#03010C] flex items-center justify-center px-6 py-20 relative z-10 border-t border-white/5 overflow-hidden">
            
            {/* Ambient background glow */}
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#1a0a6e] rounded-full blur-[160px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#0d1a5e] rounded-full blur-[140px] opacity-15 pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
                        Sectores especializados
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
                        Experiencia probada en las industrias más reguladas y críticas.
                    </p>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
                    {gridItems.map((sec, idx) => {
                        const Icon = sec.icon;
                        return (
                            <motion.div
                                key={idx}
                                custom={idx}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="group relative bg-[#03010C] p-12 md:p-16 cursor-default overflow-hidden transition-all duration-500 hover:bg-[#080514]"
                            >
                                {/* Hover gradient wash */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${sec.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
                                
                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon — minimal, floating */}
                                    <div className="mb-8 w-12 h-12 flex items-center justify-center rounded-xl border border-violet/20 bg-violet/10 text-violet group-hover:border-violet/50 group-hover:bg-violet/20 transition-all duration-500">
                                        <Icon size={22} />
                                    </div>

                                    {/* Sector name */}
                                    <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors duration-300">
                                        {sec.title}
                                    </h3>

                                    {/* One-line description */}
                                    <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed max-w-xs group-hover:text-gray-400 transition-colors duration-300">
                                        {sec.desc}
                                    </p>
                                </div>

                                {/* Subtle corner accent */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

