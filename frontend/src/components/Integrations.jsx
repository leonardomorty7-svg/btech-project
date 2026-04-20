import { motion } from 'framer-motion';
import { useState } from 'react';

// Platform definitions with abbreviated logos and brand accent color for hover
const defaultIntegrations = [
    { name: "Microsoft 365", abbr: "M365",  color: "#00a4ef" },
    { name: "SAP",           abbr: "SAP",   color: "#0070f2" },
    { name: "Salesforce",    abbr: "SF",    color: "#00a1e0" },
    { name: "Oracle",        abbr: "ORC",   color: "#f80000" },
];

// Static SVG connection definitions (pairs of node indices)
const connections = [
    [0, 1], [1, 2], [2, 3], [0, 2], [1, 3]
];

// Node positions as percentage (x, y) within the visual container
const nodePositions = [
    { x: 15, y: 30 },
    { x: 38, y: 65 },
    { x: 62, y: 25 },
    { x: 85, y: 60 },
];

function NetworkLines({ activeIdx }) {
    return (
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4e2bcd" stopOpacity="0" />
                    <stop offset="50%" stopColor="#6a4cff" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#4e2bcd" stopOpacity="0" />
                </linearGradient>
            </defs>
            {connections.map(([a, b], i) => {
                const pa = nodePositions[a];
                const pb = nodePositions[b];
                const isActive = activeIdx === a || activeIdx === b;
                return (
                    <line
                        key={i}
                        x1={pa.x} y1={pa.y}
                        x2={pb.x} y2={pb.y}
                        stroke={isActive ? "#6a4cff" : "#2408c0"}
                        strokeWidth={isActive ? "0.6" : "0.35"}
                        strokeOpacity={isActive ? 0.7 : 0.25}
                        style={{ transition: "all 0.4s ease" }}
                    />
                );
            })}
            {/* Animated particle along the main spine */}
            {connections.slice(0, 3).map(([a, b], i) => {
                const pa = nodePositions[a];
                const pb = nodePositions[b];
                return (
                    <motion.circle
                        key={`p-${i}`}
                        r="0.7"
                        fill="#cfbbef"
                        fillOpacity="0.7"
                        animate={{
                            cx: [pa.x, pb.x, pa.x],
                            cy: [pa.y, pb.y, pa.y],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 4 + i * 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 1.2
                        }}
                    />
                );
            })}
        </svg>
    );
}

export default function Integrations({ integrationsFromApi }) {
    const [activeIdx, setActiveIdx] = useState(null);

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

            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2408c0] rounded-full blur-[180px] opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT: Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <p className="text-violet text-sm font-semibold tracking-[0.2em] uppercase mb-6">
                        Integraciones nativas
                    </p>
                    <h2 
                        className="font-bold tracking-tight text-white mb-8"
                        style={{ fontSize: 'clamp(44px, 5vw, 68px)', lineHeight: 1.05, letterSpacing: '-0.03em' }}
                    >
                        Conecta tu<br className="hidden md:block" /> ecosistema
                    </h2>
                    <p 
                        className="text-gray-400 leading-relaxed max-w-md"
                        style={{ fontSize: 'clamp(18px, 1.6vw, 21px)', opacity: 0.75 }}
                    >
                        Nuestra plataforma se conecta nativamente con las herramientas enterprise que ya utilizas, sin reemplazarlas.
                    </p>

                    {/* Subtle stat row */}
                    <div className="mt-16 flex gap-14 md:gap-16">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">40+</div>
                            <div className="text-gray-500 text-sm font-medium">Conectores listos</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">REST</div>
                            <div className="text-gray-500 text-sm font-medium">API estándar</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">ISO</div>
                            <div className="text-gray-500 text-sm font-medium">Certificado</div>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT: Network visualization */}
                <div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px]" style={{ transform: 'scale(1.12)', transformOrigin: 'center' }}>
                    
                    {/* SVG network lines + particles */}
                    <NetworkLines activeIdx={activeIdx} />

                    {/* Platform nodes */}
                    {gridItems.map((integ, idx) => {
                        const pos = nodePositions[idx];
                        const isActive = activeIdx === idx;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.12 }}
                                onMouseEnter={() => setActiveIdx(idx)}
                                onMouseLeave={() => setActiveIdx(null)}
                                className="absolute flex flex-col items-center cursor-default"
                                style={{
                                    left: `calc(${pos.x}% - 48px)`,
                                    top: `calc(${pos.y}% - 48px)`
                                }}
                            >
                                {/* Logo node circle */}
                                <div
                                    className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center transition-all duration-400 border"
                                    style={{
                                        background: isActive ? `${integ.color}14` : 'rgba(255,255,255,0.03)',
                                        borderColor: isActive ? `${integ.color}60` : 'rgba(255,255,255,0.08)',
                                        boxShadow: isActive ? `0 0 40px ${integ.color}35` : 'none'
                                    }}
                                >
                                    <span
                                        className="text-[15px] font-semibold tracking-wide transition-colors duration-400"
                                        style={{ color: isActive ? integ.color : '#6b7280' }}
                                    >
                                        {integ.abbr}
                                    </span>
                                </div>

                                {/* Platform name label */}
                                <span className={`mt-3 text-[13px] font-medium tracking-wide whitespace-nowrap transition-colors duration-400 ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {integ.name}
                                </span>
                            </motion.div>
                        );
                    })}

                    {/* Center "BTECH node" at the hub */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{ 
                                boxShadow: ['0 0 24px rgba(78,43,205,0.35)', '0 0 50px rgba(78,43,205,0.6)', '0 0 24px rgba(78,43,205,0.35)']
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="w-[68px] h-[68px] rounded-full bg-[#4e2bcd] flex items-center justify-center border-2 border-violet/50"
                        >
                            <span className="text-white text-[13px] font-semibold tracking-wider">BT</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

