import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const navLinks = [
    { label: 'Qué hacemos', href: '#que-hacemos' },
    { label: 'Soluciones',  href: '#soluciones'  },
    { label: 'Sectores',    href: '#sectores'     },
    { label: 'Integraciones', href: '#integraciones' },
];

export default function NavbarLight() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 animate-light-fade">
            <div
                className={`w-full max-w-[1400px] border rounded-2xl px-10 h-[58px] flex items-center justify-between transition-all duration-400 ${
                    scrolled 
                    ? 'bg-[#03010C]/82 border-white/10 backdrop-blur-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.45),0_0_0_0.5px_rgba(255,255,255,0.06)_inset]' 
                    : 'bg-[#03010C]/55 border-white/07 backdrop-blur-[12px] shadow-[0_4px_24px_rgba(0,0,0,0.25)]'
                }`}
                style={{
                    borderColor: scrolled ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.07)'
                }}
            >
                {/* Logo */}
                <a href="/light" className="flex items-center flex-shrink-0 transition-opacity hover:opacity-80">
                    <img
                        src="/assets/logos/btech-logo-negative.svg"
                        alt="B-Tech"
                        loading="lazy"
                        decoding="async"
                        className="h-[22px] w-auto object-contain"
                    />
                </a>

                {/* Desktop Nav */}
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

                {/* Right Area */}
                <div className="flex items-center gap-6">
                    <a href="#contacto" className="hidden md:inline-flex text-[13px] font-medium text-gray-400 hover:text-white transition-colors">
                        Contacto
                    </a>
                    
                    <button 
                        className="relative px-5 py-2 rounded-full text-[13.5px] font-semibold text-white overflow-hidden group shadow-[0_4px_16px_rgba(78,43,205,0.35)]"
                        style={{ background: 'linear-gradient(135deg, #4e2bcd 0%, #3a1fa0 100%)' }}
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-out" />
                        <span className="relative">Solicitar demo</span>
                    </button>

                    {/* Mobile Hamburger Toggle (Visual only in light) */}
                    <button className="flex flex-col gap-1.5 items-end hover:items-center transition-all duration-300 text-white/70 hover:text-white md:hidden">
                        <span className="w-6 h-[1.5px] bg-current rounded-full" />
                        <span className="w-4 h-[1.5px] bg-current rounded-full" />
                        <span className="w-5 h-[1.5px] bg-current rounded-full" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
