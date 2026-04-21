import { motion } from 'framer-motion';

export default function HeroStatement() {
    return (
        <section
            className="relative bg-[#03010C] flex items-center justify-center text-center overflow-hidden"
            style={{ minHeight: '100vh', padding: '0 clamp(24px, 6vw, 96px)' }}
        >
            {/* ── Top-fade: absorbs hero's bottom, creates zero visual seam ── */}
            <div
                className="absolute top-0 left-0 w-full pointer-events-none z-0"
                style={{ height: '220px', background: 'linear-gradient(to bottom, #03010C, transparent)' }}
            />

            {/* ── Single centered ambient glow — muted echo of hero's atmosphere ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#2408c0] rounded-full blur-[200px] opacity-[0.11] pointer-events-none z-0" />

            {/* ── Bottom fade for continuity with next section ── */}
            <div
                className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
                style={{ height: '160px', background: 'linear-gradient(to top, #03010C, transparent)' }}
            />

            <div className="relative z-10 w-full" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{
                        duration: 0.9,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    className="text-white"
                >
                    <span className="block whitespace-nowrap">Centraliza tu información,</span>
                    <span className="block whitespace-nowrap">automatiza procesos y asegura</span>
                    <span className="block whitespace-nowrap">cada operación crítica.</span>
                </motion.h2>
            </div>
        </section>
    );
}
