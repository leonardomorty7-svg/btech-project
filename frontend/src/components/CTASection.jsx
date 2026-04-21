import { motion } from 'framer-motion';
import AnimatedLinesBackground from './AnimatedLinesBackground';

export default function CTASection() {
    return (
        <section className="min-h-screen bg-[#03010C] flex flex-col relative overflow-hidden border-t border-white/5">

            {/* Reuse the ambient animated line layer for visual continuity */}
            <div className="absolute inset-0 z-0">
                <AnimatedLinesBackground theme="dark" />
            </div>

            {/* Central glow behind headline */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2408c0] rounded-full blur-[180px] opacity-20 pointer-events-none z-0" />

            {/* ── CTA BLOCK (top ~80%) ── */}
            <div className="flex-1 flex items-center justify-center px-6 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-violet text-sm font-semibold tracking-[0.2em] uppercase mb-8">
                        Próximo paso
                    </p>

                    <h2 className="text-white mb-8">
                        Lleva tu operación<br className="hidden md:block" /> al siguiente nivel
                    </h2>

                    <p className="opacity-80 md:text-2xl mb-14 mx-auto max-w-xl">
                        Únete a las organizaciones que ya transforman su gestión con infraestructura tecnológica de clase enterprise.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#4e2bcd] hover:bg-[#5d38e0] transition-colors duration-300 px-10 py-4 rounded-full text-white font-semibold text-[17px] shadow-[0_0_40px_rgba(78,43,205,0.4)] hover:shadow-[0_0_60px_rgba(78,43,205,0.6)]">
                            Solicitar demo
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 px-10 py-4 rounded-full text-white font-semibold text-[17px] backdrop-blur-sm">
                            Hablar con un experto
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* ── FOOTER STRIP (bottom ~20%) ── */}
            <div className="relative z-10 px-6 pb-10 pt-8 border-t border-white/5">
                <div className="max-w-6xl mx-auto">
                    {/* Main footer row */}
                    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-10">

                        {/* Logo + tagline */}
                        <div className="flex flex-col items-center md:items-start gap-3">
                            <a href="/" className="inline-flex items-center">
                                <img
                                    src="/assets/logos/btech-logo-negative.svg"
                                    alt="B-Tech Logo"
                                    className="h-5 w-auto object-contain"
                                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='inline'; }}
                                />
                                <span className="text-white font-semibold text-lg tracking-wide hidden">B-TECH</span>
                            </a>
                            <p className="text-gray-600 text-[13px] max-w-[220px] text-center md:text-left leading-relaxed">
                                Infraestructura tecnológica para entornos críticos.
                            </p>
                        </div>

                        {/* Nav links — two groups inline */}
                        <nav className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-3">
                            <div className="flex flex-col gap-3 text-right">
                                <a href="#soluciones" className="text-gray-500 hover:text-white text-[13px] transition-colors duration-200">Soluciones</a>
                                <a href="#que-hacemos" className="text-gray-500 hover:text-white text-[13px] transition-colors duration-200">Qué hacemos</a>
                                <a href="#sectores" className="text-gray-500 hover:text-white text-[13px] transition-colors duration-200">Sectores</a>
                            </div>
                            <div className="flex flex-col gap-3 text-right">
                                <a href="#" className="text-gray-500 hover:text-white text-[13px] transition-colors duration-200">Blog</a>
                                <a href="#" className="text-gray-500 hover:text-white text-[13px] transition-colors duration-200">Contacto</a>
                                <a href="mailto:info@btech.com" className="text-gray-500 hover:text-violet text-[13px] transition-colors duration-200">info@btech.com</a>
                            </div>
                        </nav>
                    </div>

                    {/* Legal strip */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 border-t border-white/5">
                        <p className="text-gray-700 text-[12px]">
                            © {new Date().getFullYear()} BTECH. Todos los derechos reservados.
                        </p>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors duration-200">Privacidad</a>
                            <a href="#" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors duration-200">Términos</a>
                            <a href="#" className="text-gray-700 hover:text-gray-400 text-[12px] transition-colors duration-200">Cookies</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

