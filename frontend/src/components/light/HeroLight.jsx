import React from 'react';
import HeroBackgroundLight from './HeroBackgroundLight';
import AnimatedLinesLight from './AnimatedLinesLight';

export default function HeroLight({
    ctaPrimary = "Solicitar demo",
    ctaSecondary = "Hablar con un experto",
}) {
    return (
        <section className="relative h-screen bg-[#03010C] flex flex-col items-center justify-center overflow-hidden">

            {/* ── Background system ── */}
            <div className="absolute inset-0 z-0">
                <HeroBackgroundLight />
            </div>

            {/* Animated data lines (static in light version) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <AnimatedLinesLight />
            </div>

            {/* ── Content ── */}
            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center text-center animate-light-slide">

                <div style={{ maxWidth: '1400px', width: '100%', marginBottom: '52px' }}>
                    <h1 className="text-white">
                        <span className="block whitespace-nowrap">Transformamos la operación</span>
                        <span className="block whitespace-nowrap">digital de tu organización.</span>
                    </h1>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="group/btn bg-[#4e2bcd] hover:bg-[#5d38e0] transition-all duration-300 px-12 py-5 rounded-full text-white font-bold text-[18px] shadow-[0_0_50px_rgba(78,43,205,0.3)] hover:shadow-[0_0_70px_rgba(78,43,205,0.5)] w-full sm:w-auto cursor-pointer relative overflow-hidden">
                        <span className="relative z-10">{ctaPrimary}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 px-10 py-5 rounded-full text-white/50 hover:text-white font-semibold text-[17px] backdrop-blur-sm w-full sm:w-auto cursor-pointer">
                        {ctaSecondary}
                    </button>
                </div>
            </div>

            {/* ── Scroll Indicator ── */}
            <button 
                onClick={() => {
                    const nextSection = document.getElementById('historia');
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className="absolute bottom-16 md:bottom-20 left-0 w-full z-20 flex flex-col items-center justify-center gap-2 cursor-pointer group scale-110 md:scale-125 opacity-70 hover:opacity-100 transition-opacity"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="text-white/80 group-hover:text-white transition-colors"
                >
                    <path d="m6 9 6 6 6-6"/>
                </svg>
                <span className="text-[13px] font-bold text-white/80 group-hover:text-white uppercase tracking-[0.3em] transition-colors">
                    Scroll down
                </span>
            </button>
        </section>
    );
}
