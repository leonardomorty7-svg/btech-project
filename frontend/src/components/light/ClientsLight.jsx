import React from 'react';

const partnerLogos = [
    "petroamazonas.png", "Consejo-judicial-colombia.png", "elfec.png", "OEI.png", "Intencia-de-bancos.png",
    "Ministerio-produccion.png", "Cartopel.png", "iess.png", "Cobis-topaz.png", "Ministerio-de-turismo.png",
    "Metro.png", "UNIB.png", "MBN.png", "Ministerio-de-ambiente.png", "Petroecuador.png",
    "Superintendencia.png", "ARUS.png", "El-nuevo-ecuador.png", "Domain-consulting.png", "Aditmao.png",
    "RRI.png", "Famalink.png", "Ositran.png", "cuerpo-de-bomberos.png", "Banco-central-ecuador.png"
];

export default function ClientsLight({ variant = 'default' }) {
    // variant 'embedded' is used for the main homepage (light theme)
    // variant 'default' is used for the /light sub-page (dark theme)
    const isDark = variant !== 'embedded';
    
    // Duplicate for seamless infinite scroll
    const marqueeLogos = [...partnerLogos, ...partnerLogos];

    return (
        <section 
            id="partners" 
            className={`py-24 md:py-48 relative overflow-hidden transition-colors duration-500 border-t 
                ${isDark ? 'bg-[#03010C] text-white border-white/5' : 'bg-white text-gray-900 border-black/5'}`}
        >
            {/* ── Background decoration (only for dark mode) ── */}
            {isDark && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                     style={{ backgroundImage: 'radial-gradient(#4e2bcd 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
            )}
            
            {/* ── Header (Shrink-to-fit Center with Logo) ── */}
            <div className="w-full flex justify-center mb-20 md:mb-32 relative z-10 animate-light-fade">
                <div className="inline-block text-center px-6">
                    <p className="text-violet text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                        Confían en nosotros
                    </p>
                    <h2 className={`mb-8 lg:whitespace-nowrap ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Organizaciones que confían en 
                        <img 
                            src={isDark ? "/assets/logos/btech-logo-negative.svg" : "/assets/logos/btech-logo-neutral.svg"} 
                            alt="B-TECH" 
                            className="inline-block align-middle h-[0.55em] ml-2 relative -top-[0.02em]" 
                        />
                    </h2>
                    <p className={`text-[18px] leading-relaxed lg:whitespace-nowrap ${isDark ? 'text-white/80' : 'text-gray-600'}`}>
                        Infrastructura digital para organizaciones de alta exigencia.
                    </p>
                </div>
            </div>

            {/* ── Premium Marquee Container ── */}
            <div className="relative w-full overflow-hidden py-8 animate-light-slide">
                
                {/* ── Gradient Overlays (Pointer-events: none to allow logo hover) ── */}
                <div 
                    className="absolute left-0 top-0 bottom-0 w-[150px] z-20 pointer-events-none"
                    style={{ background: `linear-gradient(to right, ${isDark ? '#03010C' : '#FFFFFF'} 0%, transparent 100%)` }} 
                />
                
                <div 
                    className="absolute right-0 top-0 bottom-0 w-[150px] z-20 pointer-events-none"
                    style={{ background: `linear-gradient(to left, ${isDark ? '#03010C' : '#FFFFFF'} 0%, transparent 100%)` }} 
                />

                {/* ── Marquee Track ── */}
                <div className="pause-on-hover px-4 cursor-default">
                    <div 
                        className="animate-marquee flex items-center gap-12 md:gap-16 w-max flex-nowrap"
                        style={{ '--duration': '50s' }}
                    >
                        {marqueeLogos.map((logo, index) => (
                            <div key={index} className="flex-shrink-0 flex items-center justify-center h-10 md:h-12 group transition-all duration-500 pointer-events-auto">
                                <img
                                    src={`/assets/logos/${logo}`}
                                    alt={`Partner logo ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    className={`h-full w-auto object-contain transition-all duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105
                                        ${isDark 
                                            ? 'brightness-0 invert opacity-50 group-hover:opacity-100 contrast-125' 
                                            : 'opacity-70 group-hover:opacity-100'
                                        }`}
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
