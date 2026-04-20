import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';

const navLinks = [
    { label: 'Qué hacemos', href: '#que-hacemos' },
    { label: 'Soluciones',  href: '#soluciones'  },
    { label: 'Sectores',    href: '#sectores'     },
    { label: 'Integraciones', href: '#integraciones' },
    { label: 'Contacto',    href: '#contacto'    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    },
    exit: {
        opacity: 0,
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};

const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { 
        opacity: 0, 
        x: -10, 
        transition: { duration: 0.4 } 
    }
};

export default function FullscreenMenu({ isOpen, onClose }) {
    
    // Close on ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Lock scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 z-[60] flex flex-col lg:flex-row bg-[#03010C]"
                >
                    {/* Background Texture/Noise */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#4e2bcd]/20 to-transparent" />
                        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '32px 32px' }} />
                    </div>

                    {/* Close Button (Upper Right) */}
                    <button 
                        onClick={onClose}
                        className="absolute top-8 right-8 lg:top-12 lg:right-12 text-white/50 hover:text-white transition-colors z-[70]"
                        aria-label="Close menu"
                    >
                        <X size={32} strokeWidth={1.5} />
                    </button>

                    {/* LEFT SIDE: Main Nav (60%) */}
                    <div className="flex-1 lg:flex-[0.6] flex items-center px-8 sm:px-20 lg:px-32 py-24 lg:py-0 relative z-10">
                        <motion.nav
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="flex flex-col gap-6 lg:gap-10"
                        >
                            {navLinks.map((link) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    onClick={onClose}
                                    variants={linkVariants}
                                    className="group relative flex items-center gap-4"
                                >
                                    <span 
                                        className="text-white/30 text-xl font-medium tracking-tighter"
                                        style={{ fontVariantNumeric: 'tabular-nums' }}
                                    >
                                        //
                                    </span>
                                    <span 
                                        className="text-white font-bold tracking-tight transition-all duration-300 group-hover:text-violet group-hover:translate-x-4"
                                        style={{ fontSize: 'clamp(40px, 8vw, 84px)', lineHeight: 1 }}
                                    >
                                        {link.label}
                                    </span>
                                </motion.a>
                            ))}
                        </motion.nav>
                    </div>

                    {/* RIGHT SIDE: Context (40%) */}
                    <div className="hidden lg:flex lg:flex-[0.4] bg-white/[0.02] border-l border-white/5 flex-col justify-center px-24 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <h3 className="text-white text-2xl font-bold mb-6 max-w-sm leading-tight">
                                Transformamos la operación digital de organizaciones complejas.
                            </h3>
                            <p className="text-gray-400 text-lg mb-12 max-w-sm">
                                Infraestructura sólida para el futuro de la gestión pública y privada.
                            </p>

                            <div className="flex flex-col gap-4 items-start">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-10 py-5 rounded-full text-white font-bold flex items-center gap-3 group overflow-hidden relative"
                                    style={{ background: 'linear-gradient(135deg, #4e2bcd 0%, #3a1fa0 100%)' }}
                                >
                                    <span className="relative z-10">Solicitar demo</span>
                                    <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
                                    <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </motion.button>

                                <button className="px-6 py-3 text-gray-400 hover:text-white font-medium transition-colors text-sm">
                                    Hablar con un experto
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Footer / Info for Mobile */}
                    <div className="lg:hidden px-8 pb-12 mt-auto">
                        <button className="w-full py-5 rounded-2xl bg-violet text-white font-bold text-lg mb-4">
                            Solicitar demo
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
