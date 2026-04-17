import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Parallax interactivo sutil pero tecnológico
    const springConfig = { damping: 100, stiffness: 30, mass: 3 };
    const translateX = useSpring(useTransform(mouseX, [-1500, 1500], [-30, 30]), springConfig);
    const translateY = useSpring(useTransform(mouseY, [-1500, 1500], [-30, 30]), springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#070514]">
            {/* Sistema de Multi-Orbes Apple Style */}
            <motion.div
                style={{ x: translateX, y: translateY }}
                className="absolute inset-[-15%] w-[130%] h-[130%] transform-gpu"
            >
                {/* Blob 1: Violeta Profundo (Base central de anclaje) */}
                <motion.div
                    className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full opacity-60 blur-[130px] mix-blend-screen"
                    style={{ backgroundColor: '#4e2bcd' }}
                    animate={{
                        x: ["0%", "15%", "-10%", "0%"],
                        y: ["0%", "-15%", "10%", "0%"],
                        scale: [1, 1.25, 0.9, 1]
                    }}
                    transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
                />

                {/* Blob 2: Azul Eléctrico (Onda lateral fluida) */}
                <motion.div
                    className="absolute bottom-[10%] right-[10%] w-[55%] h-[55%] rounded-full opacity-50 blur-[140px] mix-blend-screen"
                    style={{ backgroundColor: '#2408c0' }}
                    animate={{
                        x: ["0%", "-20%", "15%", "0%"],
                        y: ["0%", "15%", "-20%", "0%"],
                        scale: [1, 1.1, 1.3, 1]
                    }}
                    transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, delay: 1 }}
                />

                {/* Blob 3: Lavanda Brillante (Highlight dinámico cursor) */}
                <motion.div
                    className="absolute top-[10%] right-[30%] w-[45%] h-[45%] rounded-full opacity-70 blur-[120px] mix-blend-screen"
                    style={{ backgroundColor: '#cfbbef' }}
                    animate={{
                        x: ["0%", "-25%", "25%", "0%"],
                        y: ["0%", "25%", "-15%", "0%"],
                        rotate: [0, 90, -90, 0],
                        scale: [1, 1.3, 0.8, 1]
                    }}
                    transition={{ duration: 15, ease: "easeInOut", repeat: Infinity, delay: 3 }}
                />

                {/* Blob 4: Azul Noche (Fondo de contraste) */}
                <motion.div
                    className="absolute bottom-[20%] left-[5%] w-[70%] h-[70%] rounded-full opacity-50 blur-[160px] mix-blend-screen"
                    style={{ backgroundColor: '#18218c' }}
                    animate={{
                        x: ["0%", "20%", "-5%", "0%"],
                        y: ["0%", "-5%", "20%", "0%"],
                        scale: [1, 0.9, 1.2, 1]
                    }}
                    transition={{ duration: 25, ease: "easeInOut", repeat: Infinity, delay: 2 }}
                />

                {/* Glow Superior Central para bañar el título */}
                <motion.div
                    className="absolute top-[-10%] left-[40%] w-[50%] h-[40%] rounded-full opacity-50 blur-[140px] mix-blend-screen"
                    style={{ backgroundColor: '#6a4cff' }}
                    animate={{
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 12, ease: "easeInOut", repeat: Infinity }}
                />
            </motion.div>

            {/* TEXTURE LAYER: Cinematic Grain */}
            <div
                className="absolute inset-0 z-20 opacity-[0.06] mix-blend-overlay pointer-events-none w-full h-full"
                style={{
                    backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
                    backgroundSize: "90px 90px",
                    backgroundRepeat: "repeat"
                }}
            ></div>

            {/* VIGNETTE LAYER: Dark framing to make center pop */}
            <div className="absolute inset-0 z-10 opacity-70 mix-blend-multiply pointer-events-none"
                style={{ background: 'radial-gradient(circle at 45% 40%, transparent 15%, #020108 100%)' }}>
            </div>
        </div>
    );
}
