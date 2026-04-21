import React from 'react';

export default function HeroStatementLight() {
    return (
        <section
            className="relative bg-[#03010C] flex items-center justify-center text-center overflow-hidden"
            style={{ minHeight: '100vh', padding: '0 clamp(24px, 6vw, 96px)' }}
        >
            {/* ── Top-fade ── */}
            <div
                className="absolute top-0 left-0 w-full pointer-events-none z-0"
                style={{ height: '220px', background: 'linear-gradient(to bottom, #03010C, transparent)' }}
            />

            {/* ── Single centered ambient glow (Simplified) ── */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#2408c0] rounded-full blur-[100px] opacity-[0.08] pointer-events-none z-0" />

            {/* ── Bottom fade ── */}
            <div
                className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
                style={{ height: '160px', background: 'linear-gradient(to top, #03010C, transparent)' }}
            />

            <div className="relative z-10 w-full animate-light-slide" style={{ maxWidth: '1400px', margin: '0 auto' }}>
                <h2 className="text-white">
                    <span className="block whitespace-nowrap">Centraliza tu información,</span>
                    <span className="block whitespace-nowrap">automatiza procesos y asegura</span>
                    <span className="block whitespace-nowrap">cada operación crítica.</span>
                </h2>
            </div>
        </section>
    );
}
