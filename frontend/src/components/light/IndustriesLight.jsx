import React from 'react';
import { Landmark, Briefcase, Scale, Building2 } from 'lucide-react';

const defaultSectors = [
    { title: "Gobierno", desc: "Digitalización del estado y servicios al ciudadano", icon: Landmark, accent: "from-[#7850ff]/20 to-transparent" },
    { title: "Finanzas", desc: "Core bancario, onboarding digital y antifraude", icon: Briefcase, accent: "from-[#4e2bcd]/15 to-transparent" },
    { title: "Justicia", desc: "Expedientes electrónicos y audiencias virtuales", icon: Scale, accent: "from-[#7850ff]/15 to-transparent" },
    { title: "Salud", desc: "Historia clínica unificada e interoperabilidad", icon: Building2, accent: "from-[#4e2bcd]/15 to-transparent" }
];

export default function IndustriesLight({ sectorsFromApi }) {
    const hasApiData = sectorsFromApi && sectorsFromApi.length > 0;
    const items = hasApiData ? sectorsFromApi.map((item, idx) => ({
        title: item.attributes?.name || item.name || defaultSectors[idx]?.title || "Sector",
        desc: item.attributes?.description || item.description || defaultSectors[idx]?.desc || "",
        icon: defaultSectors[idx]?.icon || Landmark,
        accent: defaultSectors[idx]?.accent || "from-[#7850ff]/15 to-transparent"
    })) : defaultSectors;

    const gridItems = [...items, ...defaultSectors].slice(0, 4);

    return (
        <section id="sectores" className="relative bg-[#03010C] flex items-center justify-center px-6 py-32 md:py-48 z-10 border-t border-white/5 overflow-hidden">
            
            {/* ── Ambient background depth ── */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#1a0a6e] rounded-full blur-[140px] opacity-[0.11] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0d1a5e] rounded-full blur-[120px] opacity-[0.09] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="mb-28 md:mb-36 text-center animate-light-fade">
                    <h2 className="text-white mb-6">Sectores especializados</h2>
                    <p className="text-white/80 md:whitespace-nowrap md:max-w-none mx-auto text-[18px]">Experiencia probada en las industrias más reguladas y críticas.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-light-slide">
                    {gridItems.map((sec, idx) => (
                        <div key={idx} className="group relative rounded-[2rem] p-12 md:p-16 border bg-white/[0.02] border-white/[0.04] hover:bg-[#7850ff14] hover:border-[#7850ff40] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden">
                            <div className={`absolute inset-0 bg-gradient-to-br ${sec.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                            
                            <div className="relative z-10">
                                <div className="mb-10 w-14 h-14 flex items-center justify-center rounded-2xl border border-violet/20 bg-white/5 text-violet group-hover:bg-violet group-hover:text-white transition-all duration-300">
                                    <sec.icon size={26} />
                                </div>
                                <h3 className="text-white mb-4">{sec.title}</h3>
                                <p className="text-white/80 text-[18px] max-w-sm group-hover:text-white transition-colors">{sec.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
