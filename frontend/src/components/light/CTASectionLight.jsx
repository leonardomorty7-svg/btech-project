import React from 'react';
import AnimatedLinesLight from './AnimatedLinesLight';

export default function CTASectionLight() {
    return (
        <section className="min-h-screen bg-[#03010C] flex flex-col relative overflow-hidden border-t border-white/5">

            {/* Static background lines lines with visual parity opacity */}
            <div className="absolute inset-0 z-0 opacity-40">
                <AnimatedLinesLight />
            </div>

            {/* Central static glow — Parity with original */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2408c0] rounded-full blur-[160px] opacity-[0.15] pointer-events-none z-0" />

            {/* ── CTA BLOCK ── */}
            <div className="flex-1 flex items-center justify-center px-6 py-24 relative z-10 animate-light-fade">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-violet text-sm font-semibold tracking-[0.2em] uppercase mb-8">
                        Próximo paso
                    </p>

                    <h2 className="text-white mb-8">
                        Lleva tu operación<br className="hidden md:block" /> al siguiente nivel
                    </h2>

                    <p className="text-white/90 text-[18px] mb-14 mx-auto max-w-xl">
                        Únete a las organizaciones que ya transforman su gestión con infraestructura tecnológica de clase enterprise.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-5">
                        <button className="bg-[#4e2bcd] hover:bg-[#5d38e0] transition-all duration-300 px-12 py-5 rounded-full text-white font-bold text-[18px] shadow-[0_0_50px_rgba(78,43,205,0.4)] hover:shadow-[0_0_70px_rgba(78,43,205,0.6)]">
                            Solicitar demo
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 px-10 py-5 rounded-full text-white/50 hover:text-white font-semibold text-[17px] backdrop-blur-sm">
                            Hablar con un experto
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Full Footer Strip — Parity with original ── */}
            <div className="relative z-10 px-6 pb-12 pt-10 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-12">

                        <div className="flex flex-col items-center md:items-start gap-4">
                            <a href="/light" className="inline-flex items-center">
                                <img
                                    src="/assets/logos/btech-logo-negative.svg"
                                    alt="B-Tech Logo"
                                    loading="lazy"
                                    decoding="async"
                                    className="h-5 w-auto object-contain"
                                />
                            </a>
                            <p className="text-white/60 text-[13px] max-w-[220px] text-center md:text-left leading-relaxed">
                                Infraestructura tecnológica para entornos críticos.
                            </p>
                        </div>

                        <nav className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-4">
                            <div className="flex flex-col gap-3 text-right">
                                <a href="#soluciones" className="text-gray-500 hover:text-white text-[13px] transition-colors">Soluciones</a>
                                <a href="#que-hacemos" className="text-gray-500 hover:text-white text-[13px] transition-colors">Qué hacemos</a>
                                <a href="#sectores" className="text-gray-500 hover:text-white text-[13px] transition-colors">Sectores</a>
                            </div>
                            <div className="flex flex-col gap-3 text-right">
                                <a href="#" className="text-gray-500 hover:text-white text-[13px] transition-colors">Blog</a>
                                <a href="#" className="text-gray-500 hover:text-white text-[13px] transition-colors">Contacto</a>
                                <a href="mailto:info@btech.com" className="text-gray-500 hover:text-violet text-[13px] transition-colors">info@btech.com</a>
                            </div>
                        </nav>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
                        <p className="text-gray-700 text-[12px]">
                            © {new Date().getFullYear()} BTECH. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-8">
                            <a href="#" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors">Privacidad</a>
                            <a href="#" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors">Términos</a>
                            <a href="#" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
