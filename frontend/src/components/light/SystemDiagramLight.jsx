import React from 'react';
import { Database, Workflow, Cloud, Layout } from 'lucide-react';

const steps = [
    { title: "Repositorio", icon: Database, label: "01", desc: "Almacenamiento e ingesta de datos" },
    { title: "BPM", icon: Workflow, label: "02", desc: "Reglas de negocio y flujos" },
    { title: "Servicios", icon: Cloud, label: "03", desc: "APIs nativas y conectores" },
    { title: "UI", icon: Layout, label: "04", desc: "Interfaces escalables" }
];

const ICON_SIZE = 72;

export default function SystemDiagramLight() {
    return (
        <section className="min-h-screen flex items-center justify-center px-6 relative z-10 overflow-hidden bg-[#03010C] py-24">
            
            {/* ── Ambient background depth — Parity with original ── */}
            <div className="absolute top-[35%] left-[10%] w-[55%] h-[45%] bg-[#1a06a0] rounded-full blur-[140px] opacity-[0.12] pointer-events-none" />
            <div className="absolute bottom-[15%] right-[8%] w-[35%] h-[40%] bg-[#2e1280] rounded-full blur-[120px] opacity-[0.07] pointer-events-none" />

            {/* Dot grid */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)',
                    backgroundSize: '28px 28px'
                }}
            />

            <div className="max-w-6xl mx-auto w-full py-20">
                {/* Section Header */}
                <div className="text-center mb-28 animate-light-fade">
                    <h2 className="text-white mb-6">
                        ¿Cómo funciona?
                    </h2>
                    <p className="text-white/90 max-w-xl mx-auto text-[18px]">
                        Arquitectura por capas diseñada para escalar con tu organización.
                    </p>
                </div>

                {/* Horizontal Layout */}
                <div className="w-full overflow-x-auto hide-scrollbar">
                    <div className="relative flex items-start justify-between min-w-[720px] lg:min-w-full animate-light-slide">
                        
                        {/* Background connector line (Static but high contrast) */}
                        <div
                            className="absolute z-0"
                            style={{
                                top: `${ICON_SIZE / 2 + 28}px`,
                                left: '12.5%',
                                right: '12.5%',
                                height: '1px',
                                background: 'linear-gradient(90deg, #4e2bcd, #6a4cff, #4e2bcd)',
                                opacity: 0.6
                            }}
                        />

                        {steps.map((step, idx) => (
                            <div key={idx} className="relative z-10 flex flex-col items-center text-center" style={{ width: `${100 / steps.length}%` }}>
                                {/* Number */}
                                <div className="text-[13px] font-mono font-semibold tracking-[0.25em] mb-3 text-violet">
                                    {step.label}
                                </div>

                                {/* Icon circle */}
                                <div
                                    className="flex items-center justify-center rounded-full mb-6 border border-violet bg-[#03010C] shadow-[0_0_28px_rgba(78,43,205,0.3)]"
                                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                                >
                                    <step.icon size={26} className="text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-white mb-3">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[18px] leading-snug text-white/80 max-w-[170px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
