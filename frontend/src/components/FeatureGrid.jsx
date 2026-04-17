import { useState } from 'react';
import { motion } from 'framer-motion';

const defaultFeatures = [
    {
        title: "Centralización",
        desc: "Unifica toda la información dispersa en un repositorio único y seguro."
    },
    {
        title: "Automatización",
        desc: "Optimiza procesos manuales y flujos de trabajo con motores BPM avanzados."
    },
    {
        title: "Trazabilidad",
        desc: "Control total sobre auditorías y cambios en el sistema con un registro inmutable."
    },
    {
        title: "Integración",
        desc: "Conecta todos tus sistemas y bases de datos legacy a una capa moderna."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }
    })
};

export default function FeatureGrid({ featuresFromApi }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const hasApiData = featuresFromApi && featuresFromApi.length > 0;
    const items = hasApiData ? featuresFromApi.map((item, idx) => ({
        title: item.attributes?.title || item.title || defaultFeatures[idx]?.title || "",
        desc:  item.attributes?.description || item.description || defaultFeatures[idx]?.desc || ""
    })) : defaultFeatures;

    return (
        <section
            id="que-hacemos"
            className="min-h-[100vh] py-32 px-6 flex items-center justify-center relative text-gray-900 overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #F8FAFF 0%, #EEF1FF 55%, #E8EDFF 100%)' }}
        >
            {/* ── Background atmosphere ── */}

            {/* Soft radial glow — top center, very diffused */}
            <div
                className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(78,43,205,0.07) 0%, transparent 70%)' }}
            />

            {/* Bottom-left secondary glow */}
            <div
                className="absolute bottom-[-5%] left-[-5%] w-[45%] h-[50%] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(36,8,192,0.05) 0%, transparent 70%)' }}
            />

            {/* Subtle dot grain texture */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.35]"
                style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(78,43,205,0.12) 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Top edge fade to connect smoothly from Hero dark */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4e2bcd]/20 to-transparent" />

            <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col justify-center">

                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-20 text-center"
                >
                    {/* Eyebrow */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6
                        border border-[#4e2bcd]/20 bg-[#4e2bcd]/5 backdrop-blur-sm">
                        <div className="w-1 h-1 rounded-full bg-[#4e2bcd]" />
                        <span className="text-[11px] font-bold text-[#4e2bcd] tracking-[0.2em] uppercase">
                            Capacidades core
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-gray-900">
                        ¿Qué hacemos?
                    </h2>
                    <p className="text-[17px] md:text-[18px] text-gray-500 max-w-xl mx-auto leading-relaxed">
                        Fundamentos sólidos para estructurar una transformación tecnológica sin fricción, adaptada al mundo real.
                    </p>
                </motion.div>

                {/* ── 2×2 Tech-light grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {items.map((feat, index) => {
                        const isActive = index === activeIndex;
                        const numberStr = `0${index + 1}`;

                        return (
                            <motion.div
                                key={index}
                                custom={index}
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ y: -3, transition: { duration: 0.25, ease: 'easeOut' } }}
                                onMouseEnter={() => setActiveIndex(index)}
                                onClick={() => setActiveIndex(index)}
                                className="relative cursor-pointer overflow-hidden rounded-2xl p-8 transition-all duration-400"
                                style={{
                                    background: isActive
                                        ? 'rgba(255, 255, 255, 0.85)'
                                        : 'rgba(255, 255, 255, 0.45)',
                                    border: isActive
                                        ? '1px solid rgba(78, 43, 205, 0.22)'
                                        : '1px solid rgba(78, 43, 205, 0.09)',
                                    boxShadow: isActive
                                        ? '0 4px 32px rgba(78,43,205,0.10), 0 1px 0 rgba(255,255,255,0.9) inset'
                                        : '0 2px 12px rgba(78,43,205,0.04)',
                                    backdropFilter: 'blur(12px)',
                                    transition: 'background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease'
                                }}
                            >
                                {/* Large ghost number — behind content */}
                                <div
                                    className="absolute right-5 top-3 font-black font-mono tracking-tighter leading-none select-none pointer-events-none transition-all duration-500"
                                    style={{
                                        fontSize: 'clamp(80px, 9vw, 110px)',
                                        color: isActive
                                            ? 'rgba(78, 43, 205, 0.07)'
                                            : 'rgba(78, 43, 205, 0.04)',
                                        lineHeight: 1,
                                    }}
                                >
                                    {numberStr}
                                </div>

                                {/* Active left accent bar */}
                                <div
                                    className="absolute left-0 top-8 bottom-8 w-[3px] rounded-full transition-all duration-500"
                                    style={{
                                        background: isActive ? '#4e2bcd' : 'transparent',
                                        boxShadow: isActive ? '0 0 12px rgba(78,43,205,0.5)' : 'none',
                                        opacity: isActive ? 1 : 0
                                    }}
                                />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Number label with glow dot */}
                                    <div className="flex items-center gap-2 mb-5">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full transition-all duration-400"
                                            style={{
                                                background: isActive ? '#4e2bcd' : '#c4b5fd',
                                                boxShadow: isActive ? '0 0 6px rgba(78,43,205,0.6)' : 'none'
                                            }}
                                        />
                                        <span
                                            className="text-[11px] font-bold font-mono tracking-[0.22em] transition-colors duration-400"
                                            style={{ color: isActive ? '#4e2bcd' : '#9ca3af' }}
                                        >
                                            {numberStr}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3
                                        className="text-[22px] md:text-[24px] font-bold mb-3 leading-snug tracking-tight transition-all duration-400"
                                        style={{ color: isActive ? '#0f0a1e' : '#374151' }}
                                    >
                                        {feat.title}
                                    </h3>

                                    {/* Description */}
                                    <p
                                        className="text-[15px] leading-relaxed line-clamp-2 transition-colors duration-400"
                                        style={{ color: isActive ? '#4b5563' : '#6b7280', maxWidth: '88%' }}
                                    >
                                        {feat.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
