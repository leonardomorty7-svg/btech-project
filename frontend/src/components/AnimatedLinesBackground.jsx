import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedLinesBackground({ theme = "light", activeTrigger = 0 }) {
    const controls = useAnimation();

    // Trigger subtle variation if activeTrigger prop changes
    useEffect(() => {
        controls.start({
            scale: [1, 1.02, 1],
            transition: { duration: 1.5, ease: "easeInOut" }
        });
    }, [activeTrigger, controls]);

    const isLight = theme === "light";
    
    // Light theme looks best with darker deep blue vectors on a very sub-opacity layer with multiply.
    // Dark theme benefits from brighter lavender vectors with screen/overlay.
    const containerClass = `absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 ${
        isLight ? "opacity-[0.14] mix-blend-multiply" : "opacity-[0.25] mix-blend-screen"
    }`;

    // On Light mode, we use darker violet to read against white. 
    // On Dark mode, we use brighter purples.
    const grad1_start = isLight ? "#2408c0" : "#6a4cff";
    const grad1_end   = isLight ? "#4e2bcd" : "#cfbbef";
    
    const grad2_start = isLight ? "#18218c" : "#8168B1";
    const grad2_end   = isLight ? "#2408c0" : "#E6E6FA";

    return (
        <div className={containerClass}>
            {/* Structured Vector Variables (Data Flow) */}
            <motion.div 
                animate={controls}
                className="absolute inset-0 pointer-events-none"
            >
                <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    {/* Upper Wave */}
                    <motion.path
                        animate={{
                            d: [
                                "M-10,30 Q25,10 50,30 T110,30",
                                "M-10,30 Q25,50 50,30 T110,30",
                                "M-10,30 Q25,10 50,30 T110,30"
                            ]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        fill="none" stroke="url(#dynamicGrad1)" strokeWidth="0.2"
                    />
                    
                    {/* Middle Flowing Wave */}
                    <motion.path
                        animate={{
                            d: [
                                "M-10,50 Q40,30 60,60 T110,50",
                                "M-10,50 Q40,70 60,40 T110,50",
                                "M-10,50 Q40,30 60,60 T110,50"
                            ]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        fill="none" stroke="url(#dynamicGrad2)" strokeWidth="0.3"
                    />

                    {/* Lower Minimal Wave */}
                    <motion.path
                        animate={{
                            d: [
                                "M-10,75 Q30,60 50,75 T110,75",
                                "M-10,75 Q30,90 50,75 T110,75",
                                "M-10,75 Q30,60 50,75 T110,75"
                            ]
                        }}
                        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        fill="none" stroke="url(#dynamicGrad1)" strokeWidth="0.15"
                    />

                    <defs>
                        <linearGradient id="dynamicGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="30%" stopColor={grad1_start} stopOpacity="0.8" />
                            <stop offset="70%" stopColor={grad1_end} stopOpacity="0.8" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                        <linearGradient id="dynamicGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="40%" stopColor={grad2_start} stopOpacity="0.7" />
                            <stop offset="60%" stopColor={grad2_end} stopOpacity="0.7" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>
            </motion.div>

            {/* Overlapping minimal grid dots for tech foundation */}
            <div className={`absolute inset-0 z-10 pointer-events-none mix-blend-overlay ${isLight ? 'opacity-[0.10]' : 'opacity-[0.05]'}`}
                 style={{ 
                     backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'} 1px, transparent 0)`, 
                     backgroundSize: '32px 32px' 
                 }}>
            </div>
        </div>
    );
}
