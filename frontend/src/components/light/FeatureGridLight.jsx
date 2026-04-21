import React from 'react';
import { Layers, Cpu, Activity, Workflow } from 'lucide-react';

const defaultFeatures = [
    { title: "Centralización", desc: "Una única fuente de verdad para toda tu operación digital", icon: Layers },
    { title: "Automatización", desc: "Procesos automatizados sin intervención manual", icon: Cpu },
    { title: "Trazabilidad", desc: "Visibilidad total en tiempo real", icon: Activity },
    { title: "Integración", desc: "Sistemas conectados en una arquitectura unificada", icon: Workflow }
];

export default function FeatureGridLight({ featuresFromApi }) {
    const hasApiData = featuresFromApi && featuresFromApi.length > 0;
    const items = hasApiData ? featuresFromApi.map((item, idx) => ({
        title: item.attributes?.title || item.title || defaultFeatures[idx]?.title || "",
        desc:  item.attributes?.description || item.description || defaultFeatures[idx]?.desc || "",
        icon: defaultFeatures[idx]?.icon || Layers
    })) : defaultFeatures;

    return (
        <section id="que-hacemos" className="py-40 md:py-60 px-6 bg-[#03010C] relative overflow-hidden text-white border-t border-white/5">
            {/* Ambient subtle glow — parity with main theme */}
            <div 
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% -10%, #2408c0 0%, transparent 60%)', opacity: 0.15 }}
            />
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-32 md:mb-44 animate-light-fade">
                    <h2 className="text-white mb-8 lg:whitespace-nowrap">La base de una operación digital real</h2>
                    <p className="md:whitespace-nowrap md:max-w-none mx-auto text-white/90 text-[18px] font-medium">
                        Centraliza, automatiza y controla cada proceso con una arquitectura modular y escalable.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-20 animate-light-slide">
                    {items.map((feat, index) => (
                        <div key={index} className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
                            <div className="mb-[16px] p-2 flex items-center justify-center">
                                <feat.icon className="w-10 h-10 md:w-12 md:h-12 text-gray-500 group-hover:text-violet transition-colors" strokeWidth={1.2} />
                            </div>
                            <h3 className="text-white mb-[12px] group-hover:text-violet transition-colors">{feat.title}</h3>
                            <p className="text-white/80 text-[18px] max-w-[280px]">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
