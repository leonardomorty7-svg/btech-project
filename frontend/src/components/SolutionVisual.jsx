import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   Transparent shell — NO background, no glow,
   no dot grid. The section provides all of that.
   This only positions children.
───────────────────────────────────────────── */
function VisualCanvas({ children }) {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-transparent">
            {/* Combined transform: slight upward nudge to align with text optical center + 15% scale boost */}
            <div
                className="w-full"
                style={{ transform: 'translateY(-4%) scale(1.15)', transformOrigin: 'center center' }}
            >
                {children}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   1. FIRMA ELECTRÓNICA — animated SVG stroke
───────────────────────────────────────────── */
function FirmaVisual() {
    const strokePath = "M 40 90 C 60 50, 90 30, 120 70 C 145 100, 155 60, 180 55 C 210 50, 220 80, 240 75 C 260 70, 270 50, 290 60";

    return (
        <VisualCanvas>
            <svg
                viewBox="0 0 330 140"
                className="w-full"
                fill="none"
                style={{ filter: 'drop-shadow(0 0 18px rgba(78,43,205,0.35))' }}
            >
                {/* Faint base trail */}
                <path d={strokePath} stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeLinecap="round" />

                {/* Animated signature stroke */}
                <motion.path
                    d={strokePath}
                    stroke="url(#sigGrad)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5 }}
                />

                {/* Glow particle at stroke tip */}
                <motion.circle
                    r="5"
                    fill="#cfbbef"
                    filter="url(#sigGlow)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0] }}
                    transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.5, times: [0, 0.1, 0.9, 1] }}
                >
                    <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s" path={strokePath} />
                </motion.circle>

                {/* Completion pulse ring */}
                <motion.circle
                    cx="290" cy="60" r="8"
                    stroke="#8168B1" strokeWidth="1.5" fill="none"
                    initial={{ opacity: 0, r: 5 }}
                    animate={{ opacity: [0, 0.9, 0], r: [5, 22, 5] }}
                    transition={{ duration: 1.2, delay: 2.4, repeat: Infinity, repeatDelay: 2.8 }}
                />

                <defs>
                    <linearGradient id="sigGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="40%" stopColor="#4e2bcd" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#cfbbef" />
                    </linearGradient>
                    <filter id="sigGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>
            </svg>
        </VisualCanvas>
    );
}

/* ─────────────────────────────────────────────
   2. GESTIÓN DOCUMENTAL — pulsing document network
───────────────────────────────────────────── */
const docNodes = [
    { cx: 165, cy: 70,  label: "HUB", r: 18 },
    { cx: 80,  cy: 30,  label: "DOC", r: 12 },
    { cx: 250, cy: 30,  label: "PDF", r: 12 },
    { cx: 60,  cy: 120, label: "XML", r: 12 },
    { cx: 270, cy: 120, label: "IMG", r: 12 },
    { cx: 165, cy: 145, label: "ARC", r: 10 },
];
const docEdges = [[0,1],[0,2],[0,3],[0,4],[0,5]];

function DocVisual() {
    return (
        <VisualCanvas>
            <svg
                viewBox="0 0 330 175"
                className="w-full"
                fill="none"
                style={{ filter: 'drop-shadow(0 0 16px rgba(36,8,192,0.4))' }}
            >
                {/* Connection lines */}
                {docEdges.map(([a, b], i) => (
                    <line key={i}
                        x1={docNodes[a].cx} y1={docNodes[a].cy}
                        x2={docNodes[b].cx} y2={docNodes[b].cy}
                        stroke="#3a1fd4" strokeWidth="1" strokeOpacity="0.55"
                        strokeDasharray="4 4"
                    />
                ))}

                {/* Animated pulses traveling along edges */}
                {docEdges.map(([a, b], i) => (
                    <motion.circle key={`p-${i}`} r="3" fill="#8168B1" fillOpacity="0.95">
                        <animateMotion
                            dur={`${2 + i * 0.4}s`}
                            repeatCount="indefinite"
                            begin={`${i * 0.5}s`}
                            path={`M ${docNodes[a].cx} ${docNodes[a].cy} L ${docNodes[b].cx} ${docNodes[b].cy}`}
                        />
                    </motion.circle>
                ))}

                {/* Nodes — transparent fill so section bg shows through */}
                {docNodes.map((n, i) => (
                    <g key={i}>
                        <motion.circle
                            cx={n.cx} cy={n.cy} r={n.r}
                            fill="transparent"
                            stroke={i === 0 ? "#6a4cff" : "#3a1fd4"}
                            strokeWidth={i === 0 ? 1.8 : 1.2}
                            animate={{ opacity: [0.65, 1, 0.65] }}
                            transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <text x={n.cx} y={n.cy + 4}
                            textAnchor="middle" fontSize={i === 0 ? "6" : "5"}
                            fill={i === 0 ? "#6a4cff" : "#8168B1"}
                            fontFamily="monospace" fontWeight="bold">
                            {n.label}
                        </text>
                    </g>
                ))}
            </svg>
        </VisualCanvas>
    );
}

/* ─────────────────────────────────────────────
   3. AUTOMATIZACIÓN BPM — directional flow pipeline
───────────────────────────────────────────── */
const bpmNodes = [
    { x: 30,  y: 88, label: "INICIO"   },
    { x: 105, y: 55, label: "TAREA 1"  },
    { x: 180, y: 88, label: "DECISIÓN" },
    { x: 255, y: 55, label: "TAREA 2"  },
    { x: 300, y: 88, label: "FIN"      },
];
const bpmEdges = [[0,1],[1,2],[2,3],[3,4],[2,4]];

function BpmVisual() {
    const pathStr = ([a, b]) =>
        `M ${bpmNodes[a].x} ${bpmNodes[a].y} L ${bpmNodes[b].x} ${bpmNodes[b].y}`;

    return (
        <VisualCanvas>
            <svg
                viewBox="0 0 330 145"
                className="w-full"
                fill="none"
                style={{ filter: 'drop-shadow(0 0 14px rgba(78,43,205,0.3))' }}
            >
                {/* Background flow lines */}
                {bpmEdges.map((edge, i) => (
                    <line key={i}
                        x1={bpmNodes[edge[0]].x} y1={bpmNodes[edge[0]].y}
                        x2={bpmNodes[edge[1]].x} y2={bpmNodes[edge[1]].y}
                        stroke="#3a1fd4" strokeOpacity="0.45" strokeWidth="1.2"
                    />
                ))}

                {/* Directional particles */}
                {bpmEdges.map((edge, i) => (
                    <motion.circle key={`mp-${i}`} r="4" fill="#4e2bcd" fillOpacity="0.9">
                        <animateMotion
                            dur={`${1.8 + i * 0.3}s`}
                            repeatCount="indefinite"
                            begin={`${i * 0.35}s`}
                            path={pathStr(edge)}
                        />
                    </motion.circle>
                ))}

                {/* Nodes — transparent fill */}
                {bpmNodes.map((n, i) => {
                    const isDiamond = n.label === "DECISIÓN";
                    return (
                        <g key={i}>
                            {isDiamond ? (
                                <motion.polygon
                                    points={`${n.x},${n.y-14} ${n.x+14},${n.y} ${n.x},${n.y+14} ${n.x-14},${n.y}`}
                                    fill="transparent"
                                    stroke="#6a4cff" strokeWidth="1.5"
                                    animate={{ opacity: [0.55, 1, 0.55] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />
                            ) : (
                                <motion.rect
                                    x={n.x-18} y={n.y-12} width={36} height={24} rx={4}
                                    fill="transparent"
                                    stroke={i === 0 || i === bpmNodes.length-1 ? "#6a4cff" : "#3a1fd4"}
                                    strokeWidth="1.2"
                                    animate={{ opacity: [0.55, 1, 0.55] }}
                                    transition={{ duration: 2.2 + i * 0.2, repeat: Infinity }}
                                />
                            )}
                            <text x={n.x} y={n.y + 4}
                                textAnchor="middle" fontSize="4.5"
                                fill="#8168B1" fontFamily="monospace" fontWeight="bold">
                                {n.label}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </VisualCanvas>
    );
}

/* ─────────────────────────────────────────────
   4. INTEGRACIONES — hub-and-spoke ecosystem
───────────────────────────────────────────── */
const integNodes = [
    { cx: 165, cy: 87.5, label: "BT",   r: 22, core: true  },
    { cx: 165, cy: 22,   label: "M365", r: 14, core: false },
    { cx: 270, cy: 55,   label: "SAP",  r: 14, core: false },
    { cx: 270, cy: 120,  label: "SF",   r: 14, core: false },
    { cx: 165, cy: 153,  label: "ORC",  r: 14, core: false },
    { cx: 60,  cy: 120,  label: "API",  r: 14, core: false },
    { cx: 60,  cy: 55,   label: "DB",   r: 14, core: false },
];

function IntegVisual() {
    return (
        <VisualCanvas>
            <svg
                viewBox="0 0 330 175"
                className="w-full"
                fill="none"
                style={{ filter: 'drop-shadow(0 0 18px rgba(78,43,205,0.35))' }}
            >
                {/* Spoke lines */}
                {integNodes.slice(1).map((n, i) => (
                    <line key={i}
                        x1={integNodes[0].cx} y1={integNodes[0].cy}
                        x2={n.cx} y2={n.cy}
                        stroke="#3a1fd4" strokeWidth="1.2" strokeOpacity="0.45"
                    />
                ))}

                {/* Particles riding spokes inward */}
                {integNodes.slice(1).map((n, i) => (
                    <motion.circle key={`tp-${i}`} r="3.5" fill="#cfbbef" fillOpacity="0.85">
                        <animateMotion
                            dur={`${2.5 + i * 0.4}s`}
                            repeatCount="indefinite"
                            begin={`${i * 0.45}s`}
                            path={`M ${n.cx} ${n.cy} L ${integNodes[0].cx} ${integNodes[0].cy}`}
                        />
                    </motion.circle>
                ))}

                {/* Core pulsing ring */}
                <motion.circle
                    cx={integNodes[0].cx} cy={integNodes[0].cy} r={integNodes[0].r + 8}
                    stroke="#4e2bcd" strokeWidth="1.2" fill="none"
                    animate={{ opacity: [0.2, 0.7, 0.2], r: [30, 38, 30] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* All nodes — transparent fills */}
                {integNodes.map((n, i) => (
                    <g key={i}>
                        <motion.circle
                            cx={n.cx} cy={n.cy} r={n.r}
                            fill="transparent"
                            stroke={n.core ? "#6a4cff" : "#3a1fd4"}
                            strokeWidth={n.core ? 2 : 1.2}
                            animate={{ opacity: [0.65, 1, 0.65] }}
                            transition={{ duration: 2 + i * 0.25, repeat: Infinity }}
                        />
                        <text x={n.cx} y={n.cy + 4}
                            textAnchor="middle" fontSize={n.core ? "7" : "5.5"}
                            fill={n.core ? "#6a4cff" : "#8168B1"}
                            fontFamily="monospace" fontWeight="bold">
                            {n.label}
                        </text>
                    </g>
                ))}
            </svg>
        </VisualCanvas>
    );
}

/* ─────────────────────────────────────────────
   ROUTER — maps solution id → animation
───────────────────────────────────────────── */
const visualMap = {
    firma:         <FirmaVisual />,
    gestion:       <DocVisual />,
    bpm:           <BpmVisual />,
    integraciones: <IntegVisual />,
};

export default function SolutionVisual({ type }) {
    return visualMap[type] ?? <VisualCanvas />;
}
