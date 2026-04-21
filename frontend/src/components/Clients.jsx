import React from 'react';
import { motion } from 'framer-motion';

const partnerLogos = [
    "petroamazonas.png", "Consejo-judicial-colombia.png", "elfec.png", "OEI.png", "Intencia-de-bancos.png",
    "Ministerio-produccion.png", "Cartopel.png", "iess.png", "Cobis-topaz.png", "Ministerio-de-turismo.png",
    "Metro.png", "UNIB.png", "MBN.png", "Ministerio-de-ambiente.png", "Petroecuador.png",
    "Superintendencia.png", "ARUS.png", "El-nuevo-ecuador.png", "Domain-consulting.png", "Aditmao.png",
    "RRI.png", "Famalink.png", "Ositran.png", "cuerpo-de-bomberos.png", "Banco-central-ecuador.png"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Clients() {
    return (
        <section id="partners" className="py-32 md:py-52 px-6 bg-[#F8F9FB] relative overflow-hidden">
            {/* ── Suble Background Enrichment ── */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                 style={{ backgroundImage: 'radial-gradient(#4e2bcd 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* ── Header Area ── */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-24 md:mb-32 lg:max-w-none"
                >
                    <p className="text-violet text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                        Confían en nosotros
                    </p>
                    <h2 className="text-gray-900 mb-8 lg:whitespace-nowrap">
                        Organizaciones que operan con B-TECH.
                    </h2>
                    <p className="text-gray-800 text-[18px] lg:whitespace-nowrap">
                        Infraestructura digital implementada en entidades públicas y privadas de alta exigencia.
                    </p>
                </motion.div>

                {/* ── Logo Grid ── */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-12 items-center"
                >
                    {partnerLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group flex items-center justify-center p-4 h-24 transition-all duration-300"
                        >
                            <img
                                src={`/assets/logos/${logo}`}
                                alt={`Partner ${index + 1}`}
                                loading="lazy"
                                className="max-h-full max-w-full object-contain filter grayscale opacity-60 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03]"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
