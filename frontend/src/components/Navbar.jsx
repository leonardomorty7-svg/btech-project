import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

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
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'inline';
                            }}
                        />
                        <span
                            className="hidden text-white font-bold text-[17px] tracking-tight"
                            style={{ display: 'none' }}
                        >
                            B-TECH
                        </span>
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
                                {/* Hover underline glow */}
                                <span className="absolute bottom-[6px] left-4 right-4 h-[1px] bg-violet/60 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left rounded-full" />
                            </a>
                        ))}
                    </div>

                    {/* ── Right: CTA + mobile toggle ── */}
                    <div className="flex items-center gap-6">
                        {/* Secondary: ghost */}
                        <a
                            href="mailto:info@btech.com"
                            className="hidden md:inline-flex items-center text-[13px] font-medium text-gray-400 hover:text-white transition-colors duration-200"
                        >
                            Contacto
                        </a>

                        {/* Primary CTA */}
                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                            className="relative px-5 py-2 rounded-xl text-[13.5px] font-bold text-white overflow-hidden group"
                            style={{
                                background: 'linear-gradient(135deg, #4e2bcd 0%, #3a1fa0 100%)',
                                boxShadow: '0 0 0 1px rgba(106,76,255,0.35), 0 4px 16px rgba(78,43,205,0.35)'
                            }}
                        >
                            {/* Hover shimmer */}
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
                            <span className="relative">Solicitar demo</span>
                        </motion.button>

                        {/* Mobile menu toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-gray-400 hover:text-white hover:bg-white/8 transition-all duration-200"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </motion.div>
            </motion.nav>

            {/* ── Mobile menu overlay ── */}
            <motion.div
                initial={false}
                animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-40 md:hidden"
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-[#03010C]/90 backdrop-blur-lg"
                    onClick={() => setMenuOpen(false)}
                />

                {/* Drawer */}
                <motion.div
                    animate={{ y: menuOpen ? 0 : -16, opacity: menuOpen ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-[80px] left-4 right-4 bg-[#0a0718] border border-white/8 rounded-2xl p-6 flex flex-col gap-2"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-3 text-[15px] font-medium text-gray-300 hover:text-white rounded-xl hover:bg-white/5 transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="mt-4 pt-4 border-t border-white/8">
                        <button className="w-full py-3 rounded-xl text-[15px] font-bold text-white"
                            style={{
                                background: 'linear-gradient(135deg, #4e2bcd 0%, #3a1fa0 100%)',
                                boxShadow: '0 0 0 1px rgba(106,76,255,0.3), 0 4px 20px rgba(78,43,205,0.3)'
                            }}
                        >
                            Solicitar demo
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
