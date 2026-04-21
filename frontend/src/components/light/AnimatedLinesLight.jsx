import React from 'react';

export default function AnimatedLinesLight() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 opacity-10">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path
                    d="M-10,30 Q25,10 50,30 T110,30"
                    fill="none" stroke="#6a4cff" strokeWidth="0.1"
                />
                <path
                    d="M-10,50 Q40,30 60,60 T110,50"
                    fill="none" stroke="#4e2bcd" strokeWidth="0.15"
                />
                <path
                    d="M-10,75 Q30,60 50,75 T110,75"
                    fill="none" stroke="#6a4cff" strokeWidth="0.1"
                />
            </svg>
            
            {/* ── Static Dot Grid ── */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-5"
                 style={{ 
                     backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', 
                     backgroundSize: '32px 32px' 
                 }}>
            </div>
        </div>
    );
}
