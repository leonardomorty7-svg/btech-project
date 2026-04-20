import { motion } from 'framer-motion';
import AnimatedLinesBackground from './AnimatedLinesBackground';

export default function Hero({
    ctaPrimary = "Solicitar demo",
    ctaSecondary = "Hablar con un experto",
}) {
    return (
        <section className="relative h-screen bg-[#03010C] flex flex-col items-center justify-center overflow-hidden">

            {/* ── Background system ── */}
            <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-[#2408c0] rounded-full blur-[160px] opacity-25 pointer-events-none z-0" />
            <div className="absolute top-[-10%] right-[10%] w-[45%] h-[55%] bg-[#4e2bcd] rounded-full blur-[140px] opacity-20 pointer-events-none z-0" />
            
            {/* Soft bottom fade — merges into HeroStatement */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-[#03010C]/60 to-transparent pointer-events-none z-0" />

            {/* Animated data lines */}
            <div className="absolute inset-0 z-0">
                <AnimatedLinesBackground theme="dark" />
            </div>

            {/* ── Content ── */}
            <div className="w-full px-6 md:px-12 lg:px-16 xl:px-24 relative z-10 flex flex-col items-center text-center">

                <div style={{ maxWidth: '1400px', width: '100%', marginBottom: '52px' }}>
                    <h1
                        className="text-white font-semibold"
                        style={{
                            fontSize: 'clamp(36px, 5vw, 86px)',
                            lineHeight: 1.1,
                            letterSpacing: '-0.025em',
                            margin: 0,
                        }}
                    >
                        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>Transformamos la operación</span>
                        <span style={{ display: 'block', whiteSpace: 'nowrap' }}>digital de tu organización.</span>
                    </h1>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <button className="group/btn bg-[#4e2bcd] hover:bg-[#5d38e0] transition-all duration-300 px-12 py-5 rounded-full text-white font-bold text-[18px] shadow-[0_0_50px_rgba(78,43,205,0.4)] hover:shadow-[0_0_70px_rgba(78,43,205,0.6)] hover:scale-[1.04] w-full sm:w-auto cursor-pointer relative overflow-hidden">
                        <span className="relative z-10">{ctaPrimary}</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                    </button>
                    <button className="bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all duration-300 px-10 py-5 rounded-full text-white/50 hover:text-white font-semibold text-[17px] backdrop-blur-sm w-full sm:w-auto cursor-pointer">
                        {ctaSecondary}
                    </button>
                </div>
            </div>

            {/* ── Refined Scroll Indicator ── */}
            <motion.button 
                initial={{ opacity: 0 }}
                animate={{ 
                    opacity: [0.6, 0.9, 0.6],
                    y: [0, 12, 0]
                }}
                transition={{ 
                    duration: 1.8, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                onClick={() => {
                    const nextSection = document.getElementById('historia');
                    if (nextSection) {
                        nextSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
                className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group scale-110 md:scale-125"
            >
                <motion.svg 
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
                </motion.svg>
                <span className="text-[12px] font-bold text-white/70 group-hover:text-white uppercase tracking-[0.3em] transition-colors">
                    Scroll down
                </span>
            </motion.button>
        </section>
    );
}
