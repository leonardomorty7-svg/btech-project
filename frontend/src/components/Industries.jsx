import { motion } from 'framer-motion';
import { Landmark, Briefcase, Scale, Building2 } from 'lucide-react';

const defaultSectors = [
    {
        title: "Gobierno",
        desc: "Digitalización del estado y servicios al ciudadano",
        icon: Landmark,
        accent: "from-[#7850ff]/20 to-transparent"
    },
    {
        title: "Finanzas",
        desc: "Core bancario, onboarding digital y antifraude",
        icon: Briefcase,
        accent: "from-[#4e2bcd]/15 to-transparent"
    },
    {
        title: "Justicia",
        desc: "Expedientes electrónicos y audiencias virtuales",
        icon: Scale,
        accent: "from-[#7850ff]/15 to-transparent"
    },
    {
        title: "Salud",
        desc: "Historia clínica unificada e interoperabilidad",
        icon: Building2,
        accent: "from-[#4e2bcd]/15 to-transparent"
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }
    })
};

export default function Industries({ sectorsFromApi }) {
    const hasApiData = sectorsFromApi && sectorsFromApi.length > 0;

    const items = hasApiData ? sectorsFromApi.map((item, idx) => ({
        title: item.attributes?.name || item.name || defaultSectors[idx]?.title || "Sector",
        desc: item.attributes?.description || item.description || defaultSectors[idx]?.desc || "",
        icon: defaultSectors[idx]?.icon || Landmark,
        accent: defaultSectors[idx]?.accent || "from-[#7850ff]/15 to-transparent"
    })) : defaultSectors;

    // Ensure we render 4 items
    const gridItems = [...items, ...defaultSectors].slice(0, 4);

    return (
        <section id="sectores" className="relative bg-[#03010C] flex items-center justify-center px-6 py-32 md:py-48 z-10 border-t border-white/5 overflow-hidden">
            
            {/* ── Ambient background depth ── */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1a0a6e] rounded-full blur-[180px] opacity-[0.14] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0d1a5e] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-28 md:mb-36 text-center"
                >
                    <h2 className="text-white mb-6">
                        Sectores especializados
                    </h2>
                    <p className="opacity-75 md:whitespace-nowrap md:max-w-none mx-auto">
                        Experiencia probada en las industrias más reguladas y críticas.
                    </p>
                </motion.div>

                {/* ── 2x2 Individual Cards Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {gridItems.map((sec, idx) => {
                        const Icon = sec.icon;
                        const isMainHighlight = idx === 0;

                        return (
                            <motion.div
                                key={idx}
                                custom={idx}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className={`group relative rounded-3xl p-10 md:p-14 cursor-default overflow-hidden border transition-all duration-500
                                    ${isMainHighlight 
                                        ? 'bg-white/[0.04] border-white/[0.06]' 
                                        : 'bg-white/[0.02] border-white/[0.04]'
                                    } hover:bg-[#7850ff14] hover:border-[#7850ff40] hover:-translate-y-1.5`}
                            >
                                {/* Active gradient glow on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${sec.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                
                                <div className="relative z-10">
                                    {/* Icon — floating, elevated */}
                                    <div className="mb-10 w-14 h-14 flex items-center justify-center rounded-2xl border border-violet/20 bg-white/5 text-violet group-hover:scale-110 group-hover:border-violet/40 group-hover:bg-violet/10 group-hover:shadow-[0_0_24px_rgba(120,80,255,0.2)] transition-all duration-500">
                                        <Icon size={26} />
                                    </div>

                                    {/* Sector name — Stronger hierarchy */}
                                    <h3 className="text-white mb-4">
                                        {sec.title}
                                    </h3>

                                    {/* Sharp one-line description */}
                                    <p className="opacity-75 max-w-sm group-hover:text-gray-300 transition-colors duration-500">
                                        {sec.desc}
                                    </p>
                                </div>

                                {/* Decorative flare */}
                                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-violet/5 rounded-full blur-[48px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

