import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import FullscreenMenu from './FullscreenMenu';

const navLinks = [
    { label: 'Qué hacemos', href: '#que-hacemos' },
    { label: 'Soluciones',  href: '#soluciones'  },
    { label: 'Sectores',    href: '#sectores'     },
    { label: 'Integraciones', href: '#integraciones' },
];

export default function Navbar() {
    const [scrolled, setScrolled]   = useState(false);
    const [menuOpen, setMenuOpen]   = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, 'change', (y) => {
        setScrolled(y > 40);
    });

    return (
        <>
            <motion.nav
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
            >
                {/* Floating pill container */}
                <motion.div
                    animate={{
                        background: scrolled
                            ? 'rgba(3, 1, 12, 0.82)'
                            : 'rgba(3, 1, 12, 0.55)',
                        borderColor: scrolled
                            ? 'rgba(255,255,255,0.10)'
                            : 'rgba(255,255,255,0.07)',
                        backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
                        boxShadow: scrolled
                            ? '0 8px 40px rgba(0,0,0,0.45), 0 0 0 0.5px rgba(255,255,255,0.06) inset'
                            : '0 4px 24px rgba(0,0,0,0.25)',
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full max-w-[1400px] border rounded-2xl px-10 h-[58px] flex items-center justify-between"
                    style={{
                        background: 'rgba(3, 1, 12, 0.55)',
                        borderColor: 'rgba(255,255,255,0.07)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    {/* ── Logo ── */}
                    <a href="/" className="flex items-center flex-shrink-0">
                        <img
                            src="/assets/logos/btech-logo-negative.svg"
                            alt="B-Tech"
                            className="h-[22px] w-auto object-contain"
                        />
                    </a>

                    {/* ── Desktop nav links ── */}
                    <div className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="relative px-4 py-2 text-[13.5px] font-medium text-gray-400 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.06] group"
                            >
                                {link.label}
                                <span className="absolute bottom-[6px] left-4 right-4 h-[1px] bg-violet/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* ── Right: CTA + Hamburger Toggle ── */}
                    <div className="flex items-center gap-6">
                        {/* Secondary: ghost */}
                        <a
                            href="#contacto"
                            className="hidden md:inline-flex items-center text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Contacto
                        </a>

                        {/* Primary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="hidden md:flex relative px-5 py-2 rounded-full text-[13.5px] font-semibold text-white overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #4e2bcd 0%, #3a1fa0 100%)',
                                boxShadow: '0 0 0 1px rgba(106,76,255,0.35), 0 4px 16px rgba(78,43,205,0.35)'
                            }}
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
                            <span className="relative">Solicitar demo</span>
                        </motion.button>

                        {/* Hamburger Menu Toggle (Visible globally) */}
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="flex items-center justify-center w-10 h-10 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 group border border-transparent hover:border-white/10 active:scale-95"
                            aria-label="Open fullscreen menu"
                        >
                            <div className="flex flex-col gap-1.5 items-end group-hover:items-center transition-all duration-300">
                                <span className="w-6 h-[1.5px] bg-current rounded-full" />
                                <span className="w-4 group-hover:w-6 h-[1.5px] bg-current rounded-full transition-all duration-300" />
                                <span className="w-5 group-hover:w-6 h-[1.5px] bg-current rounded-full transition-all duration-300" />
                            </div>
                        </button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* ── Fullscreen Navigation Menu Overlay ── */}
            <FullscreenMenu 
                isOpen={menuOpen} 
                onClose={() => setMenuOpen(false)} 
            />
        </>
    );
}
