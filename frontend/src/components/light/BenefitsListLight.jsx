import React from 'react';

const narrativeSteps = [
    { type: "metric", metric: "60%", title: "Menos carga operativa", desc: "Reducción medida en tareas manuales y procesos redundantes." },
    { type: "metric", metric: "100%", title: "Trazabilidad garantizada", desc: "Control total y auditoría inmutable de cada transacción." },
    { type: "metric", metric: "Escalable", title: "Infraestructura cloud-ready", desc: "Capacidad de respuesta inmediata ante picos de demanda." },
    { type: "metric", metric: "Día 1", title: "Resultados desde el inicio", desc: "Curva de implementación optimizada para impacto inmediato." }
];

export default function BenefitsListLight() {
    return (
        <section className="relative z-10 w-full bg-[#03010C] py-32 md:py-48 overflow-hidden border-t border-white/5">
            {/* ── Ambient background orbs ── */}
            <div className="absolute top-[30%] left-[5%] w-[40%] h-[40%] bg-[#2408c0] rounded-full blur-[140px] opacity-[0.08] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[35%] bg-[#4e2bcd] rounded-full blur-[110px] opacity-[0.06] pointer-events-none" />

            <div className="w-full relative z-10 px-6">
                {/* ── Header (Shrink-to-fit Center) ── */}
                <div className="w-full flex justify-center mb-24 md:mb-32 animate-light-fade">
                    <div className="inline-block text-center">
                        <p className="text-violet text-xs font-bold tracking-[0.3em] uppercase mb-6">Eficiencia & Impacto</p>
                        <h2 className="text-white mb-8 lg:whitespace-nowrap">Beneficios tangibles desde el primer día</h2>
                        <p className="text-white/90 lg:whitespace-nowrap mt-4 text-[18px]">
                            Tu arquitectura tecnológica impacta directamente el ROI operativo
                        </p>
                    </div>
                </div>

                {/* ── Metrics Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 animate-light-slide">
                    {narrativeSteps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:bg-[#4e2bcd10] hover:border-violet/30 transition-all duration-500">
                            <div className="text-[#4e2bcd] font-bold text-6xl lg:text-7xl mb-8 group-hover:scale-110 transition-transform duration-500" style={{ filter: 'drop-shadow(0 0 20px rgba(78,43,205,0.3))' }}>
                                {step.metric}
                            </div>
                            <h3 className="text-white text-xl md:text-2xl mb-4 group-hover:text-white transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-white/80 text-[18px] leading-relaxed">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
