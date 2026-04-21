import React, { useEffect, useRef } from 'react';

export default function CursorInteract() {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
    const config = useRef({
        glowSize: 220,
        isActive: true,
        isOverInteractive: false
    });

    const particles = useRef([]);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        
        // Only run on desktop
        if (window.innerWidth < 1024) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const onMouseMove = (e) => {
            mouse.current.targetX = e.clientX;
            mouse.current.targetY = e.clientY;
            
            // Subtle particles on movement
            if (Math.random() > 0.9 && particles.current.length < 6) {
                particles.current.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: (Math.random() - 0.5) * 1.2,
                    life: 1.0,
                    size: Math.random() * 1.5 + 1
                });
            }
        };

        const onMouseOver = (e) => {
            const target = e.target;
            // Check for interactive elements
            const activeEl = target.closest('button, a, [role="button"], .group, .card');
            config.current.isOverInteractive = !!activeEl;
            
            // Glow is now active globally for visual consistency
            config.current.isActive = true;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('pointermove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);
        resize();

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Smooth follow
            mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.1;
            mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.1;

            if (config.current.isActive) {
                const { x, y } = mouse.current;
                const alpha = config.current.isOverInteractive ? 0.25 : 0.15;
                
                // Draw Glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, config.current.glowSize);
                gradient.addColorStop(0, `rgba(120, 80, 255, ${alpha})`);
                gradient.addColorStop(0.5, `rgba(120, 80, 255, ${alpha * 0.3})`);
                gradient.addColorStop(1, 'rgba(120, 80, 255, 0)');

                ctx.fillStyle = gradient;
                ctx.globalCompositeOperation = 'screen';
                ctx.fillRect(x - config.current.glowSize, y - config.current.glowSize, config.current.glowSize * 2, config.current.glowSize * 2);

                // Draw Particles
                ctx.globalCompositeOperation = 'source-over';
                particles.current.forEach((p, i) => {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.life -= 0.015;
                    p.size *= 0.99;

                    if (p.life <= 0) {
                        particles.current.splice(i, 1);
                        return;
                    }

                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(180, 160, 255, ${p.life * 0.4})`;
                    ctx.fill();
                });
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('pointermove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Return null if on mobile to avoid overhead
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[9999] pointer-events-none hidden lg:block"
        />
    );
}
