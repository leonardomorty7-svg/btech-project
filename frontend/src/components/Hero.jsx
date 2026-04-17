import AnimatedLinesBackground from './AnimatedLinesBackground';

export default function Hero({
    ctaPrimary = "Solicitar demo",
    ctaSecondary = "Hablar con un experto",
}) {
    return (
        <section className="relative min-h-[100vh] bg-[#03010C] flex items-center pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">

            {/* ── Background system (mirrors CTA section) ── */}

            {/* Deep base orb — violet purple, slightly more saturated than CTA for contrast */}
            <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-[#2408c0] rounded-full blur-[160px] opacity-25 pointer-events-none z-0" />
            {/* Secondary lavender orb — top right, soft highlight */}
            <div className="absolute top-[-10%] right-[10%] w-[45%] h-[55%] bg-[#4e2bcd] rounded-full blur-[140px] opacity-20 pointer-events-none z-0" />
            {/* Bottom dark anchor */}
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#03010C] to-transparent pointer-events-none z-0" />

            {/* Animated data lines — same component, dark theme */}
            <div className="absolute inset-0 z-0">
                <AnimatedLinesBackground theme="dark" />
            </div>

            {/* ── Content ── */}
            <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-start text-left">
                <h1 className="text-white text-[44px] md:text-[56px] lg:text-[72px] leading-[1.05] font-bold w-full mb-6 tracking-tight">
                    <span className="block whitespace-nowrap">Estructuramos la transformación</span>
                    <span className="block whitespace-nowrap">digital de tu organización.</span>
                </h1>

                <p className="text-white/70 text-[16px] md:text-[18px] w-full mb-12 leading-[1.7] max-w-2xl">
                    <span className="block lg:inline">Centraliza tu información, automatiza procesos y asegura cada operación con infraestructura </span>
                    <span className="block lg:inline">tecnológica escalable, diseñada para entornos críticos.</span>
                </p>

                {/* Buttons — aligned with CTA section style */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button className="bg-[#4e2bcd] hover:bg-[#5d38e0] transition-colors duration-300 px-10 py-4 rounded-full text-white font-bold text-[17px] shadow-[0_0_40px_rgba(78,43,205,0.4)] hover:shadow-[0_0_60px_rgba(78,43,205,0.6)] w-full sm:w-auto cursor-pointer">
                        {ctaPrimary}
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 px-10 py-4 rounded-full text-white font-semibold text-[17px] backdrop-blur-sm w-full sm:w-auto cursor-pointer">
                        {ctaSecondary}
                    </button>
                </div>
            </div>
        </section>
    );
}

