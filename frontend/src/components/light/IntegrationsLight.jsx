import React from 'react';

const defaultIntegrations = [
    { name: "Microsoft 365", abbr: "M365",  color: "#00a4ef" },
    { name: "SAP",           abbr: "SAP",   color: "#0070f2" },
    { name: "Salesforce",    abbr: "SF",    color: "#00a1e0" },
    { name: "Oracle",        abbr: "ORC",   color: "#f80000" },
];

const nodePositions = [
    { x: 15, y: 30 },
    { x: 38, y: 65 },
    { x: 62, y: 25 },
    { x: 85, y: 60 },
];

const connections = [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3]];

export default function IntegrationsLight({ integrationsFromApi }) {
    const items = (integrationsFromApi && integrationsFromApi.length > 0)
        ? integrationsFromApi.map((item, idx) => ({
            name: item.attributes?.name || item.name || defaultIntegrations[idx]?.name,
            abbr: defaultIntegrations[idx]?.abbr || item.name?.slice(0, 3).toUpperCase(),
            color: defaultIntegrations[idx]?.color || "#6a4cff"
          }))
        : defaultIntegrations;

    const gridItems = [...items, ...defaultIntegrations].slice(0, 4);

    return (
        <section className="min-h-screen bg-[#03010C] flex items-center justify-center px-6 py-20 relative z-10 border-t border-white/5 overflow-hidden">
            {/* Ambient background glow — Parity with original */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2408c0] rounded-full blur-[160px] opacity-[0.12] pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* LEFT: Narrative */}
                <div className="animate-light-fade">
                    <p className="text-violet text-sm font-semibold tracking-[0.2em] uppercase mb-6">Integraciones nativas</p>
                    <h2 className="text-white mb-8">Conecta tu<br className="hidden md:block" /> ecosistema</h2>
                    <p className="text-white/80 leading-relaxed max-w-md text-[18px]">Nuestra plataforma se conecta nativamente con las herramientas enterprise que ya utilizas, sin reemplazarlas.</p>

                    <div className="mt-16 flex gap-12 md:gap-16">
                        {['40+', 'REST', 'ISO'].map((val, i) => (
                            <div key={i}>
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{val}</div>
                                <div className="text-white/60 text-sm font-medium">{['Conectores', 'API', 'Certificado'][i]}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT: Static Network Visualization */}
                <div className="relative w-full aspect-square lg:h-[500px] animate-light-slide" style={{ transform: 'scale(1.12)', transformOrigin: 'center' }}>
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {connections.map(([a, b], i) => (
                            <line key={i} x1={nodePositions[a].x} y1={nodePositions[a].y} x2={nodePositions[b].x} y2={nodePositions[b].y} stroke="#2408c0" strokeWidth="0.4" opacity="0.3" />
                        ))}
                    </svg>

                    {gridItems.map((integ, idx) => {
                        const pos = nodePositions[idx];
                        return (
                            <div key={idx} className="absolute flex flex-col items-center group transition-transform duration-300 hover:scale-105" style={{ left: `${pos.x}%`, top: `${pos.y}%`, transform: 'translate(-50%, -50%)' }}>
                                <div className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center bg-white/[0.03] border border-white/[0.08] group-hover:border-violet group-hover:bg-[#4e2bcd10] transition-all duration-300">
                                    <span className="text-[15px] font-semibold tracking-wide text-white/50 group-hover:text-white transition-colors">{integ.abbr}</span>
                                </div>
                                <span className="mt-3 text-[13px] font-medium tracking-wide text-white/40 group-hover:text-gray-300 transition-colors">{integ.name}</span>
                            </div>
                        );
                    })}

                    {/* Center Hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-[68px] h-[68px] rounded-full bg-[#4e2bcd] flex items-center justify-center border-2 border-violet/50 shadow-[0_0_30px_rgba(78,43,205,0.4)]">
                            <span className="text-white text-[13px] font-bold">BT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
