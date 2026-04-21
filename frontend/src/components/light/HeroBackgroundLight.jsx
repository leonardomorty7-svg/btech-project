import React from "react";

export default function HeroBackgroundLight() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#070514]">
            {/* ── Visual Parity (Static orbs replacing animated ones) ── */}
            
            {/* Orb 1: Violeta Profundo */}
            <div 
                className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full opacity-40 blur-[100px] mix-blend-screen"
                style={{ backgroundColor: '#4e2bcd' }}
            />

            {/* Orb 2: Azul Eléctrico */}
            <div 
                className="absolute bottom-[10%] right-[10%] w-[55%] h-[55%] rounded-full opacity-35 blur-[110px] mix-blend-screen"
                style={{ backgroundColor: '#2408c0' }}
            />

            {/* Orb 3: Lavanda Brillante (Highlight focus) */}
            <div 
                className="absolute top-[10%] right-[30%] w-[45%] h-[45%] rounded-full opacity-40 blur-[90px] mix-blend-screen"
                style={{ backgroundColor: '#cfbbef' }}
            />
            
            {/* ── Vignette Layer ── */}
            <div className="absolute inset-0 z-10 opacity-70 mix-blend-multiply pointer-events-none"
                style={{ background: 'radial-gradient(circle at 45% 40%, transparent 15%, #020108 100%)' }}>
            </div>
        </div>
    );
}
