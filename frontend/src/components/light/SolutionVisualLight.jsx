import React from 'react';

function VisualCanvas({ children }) {
    return (
        <div className="relative w-full h-full flex items-center justify-center bg-transparent">
            {/* 1.2x scale matching original VisualCanvas booster */}
            <div
                className="w-full"
                style={{ transform: 'translateY(-4%) scale(1.20)', transformOrigin: 'center center' }}
            >
                {children}
            </div>
        </div>
    );
}

function FirmaVisual() {
    const strokePath = "M 40 90 C 60 50, 90 30, 120 70 C 145 100, 155 60, 180 55 C 210 50, 220 80, 240 75 C 260 70, 270 50, 290 60";
    return (
        <VisualCanvas>
            <svg viewBox="0 0 330 140" className="w-full" fill="none" style={{ filter: 'drop-shadow(0 0 24px rgba(78,43,205,0.40))' }}>
                <path d={strokePath} stroke="rgba(255,255,255,0.05)" strokeWidth="2" strokeLinecap="round" />
                <path d={strokePath} stroke="url(#sigGradLight)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <defs>
                    <linearGradient id="sigGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="40%" stopColor="#4e2bcd" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#cfbbef" />
                    </linearGradient>
                </defs>
            </svg>
        </VisualCanvas>
    );
}

function DocVisual() {
    const nodes = [
        { cx: 165, cy: 70,  r: 18, label: "HUB" },
        { cx: 80,  cy: 30,  r: 12, label: "DOC" },
        { cx: 250, cy: 30,  r: 12, label: "PDF" },
        { cx: 60,  cy: 120, r: 12, label: "XML" },
        { cx: 270, cy: 120, r: 12, label: "IMG" },
        { cx: 165, cy: 145, r: 10, label: "ARC" },
    ];
    const edges = [[0,1],[0,2],[0,3],[0,4],[0,5]];
    return (
        <VisualCanvas>
            <svg viewBox="0 0 330 175" className="w-full" fill="none" style={{ filter: 'drop-shadow(0 0 22px rgba(36,8,192,0.45))' }}>
                {edges.map(([a, b], i) => (
                    <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy} stroke="#3a1fd4" strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 4" />
                ))}
                {nodes.map((n, i) => (
                    <g key={i}>
                        <circle cx={n.cx} cy={n.cy} r={n.r} stroke={i === 0 ? "#6a4cff" : "#3a1fd4"} strokeWidth={i === 0 ? 1.8 : 1.2} opacity="0.8" />
                        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize={i === 0 ? "6" : "5"} fill={i === 0 ? "#6a4cff" : "#8168B1"} fontFamily="monospace" fontWeight="bold">
                            {n.label}
                        </text>
                    </g>
                ))}
            </svg>
        </VisualCanvas>
    );
}

function BpmVisual() {
    const nodes = [
        { x: 30,  y: 88, label: "INICIO"   },
        { x: 105, y: 55, label: "TAREA 1"  },
        { x: 180, y: 88, label: "DECISIÓN" },
        { x: 255, y: 55, label: "TAREA 2"  },
        { x: 300, y: 88, label: "FIN"      },
    ];
    const edges = [[0,1],[1,2],[2,3],[3,4],[2,4]];
    return (
        <VisualCanvas>
            <svg viewBox="0 0 330 145" className="w-full" fill="none" style={{ filter: 'drop-shadow(0 0 22px rgba(78,43,205,0.4))' }}>
                {edges.map((e, i) => (
                    <line key={i} x1={nodes[e[0]].x} y1={nodes[e[0]].y} x2={nodes[e[1]].x} y2={nodes[e[1]].y} stroke="#3a1fd4" strokeOpacity="0.4" strokeWidth="1.2" />
                ))}
                {nodes.map((n, i) => (
                    <g key={i}>
                        {n.label === "DECISIÓN" ? (
                            <polygon points={`${n.x},${n.y-14} ${n.x+14},${n.y} ${n.x},${n.y+14} ${n.x-14},${n.y}`} stroke="#6a4cff" strokeWidth="1.5" opacity="0.8" />
                        ) : (
                            <rect x={n.x-18} y={n.y-12} width={36} height={24} rx={4} stroke={i === 0 || i === nodes.length-1 ? "#6a4cff" : "#3a1fd4"} strokeWidth="1.2" opacity="0.8" />
                        )}
                        <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="4.5" fill="#8168B1" fontFamily="monospace" fontWeight="bold">
                            {n.label}
                        </text>
                    </g>
                ))}
            </svg>
        </VisualCanvas>
    );
}

function IntegVisual() {
    const nodes = [
        { cx: 165, cy: 87.5, label: "BT",   r: 22, core: true  },
        { cx: 165, cy: 22,   label: "M365", r: 14, core: false },
        { cx: 270, cy: 55,   label: "SAP",  r: 14, core: false },
        { cx: 270, cy: 120,  label: "SF",   r: 14, core: false },
        { cx: 165, cy: 153,  label: "ORC",  r: 14, core: false },
        { cx: 60,  cy: 120,  label: "API",  r: 14, core: false },
        { cx: 60,  cy: 55,   label: "DB",   r: 14, core: false },
    ];
    return (
        <VisualCanvas>
            <svg viewBox="0 0 330 175" className="w-full" fill="none" style={{ filter: 'drop-shadow(0 0 26px rgba(78,43,205,0.45))' }}>
                {nodes.slice(1).map((n, i) => (
                    <line key={i} x1={nodes[0].cx} y1={nodes[0].cy} x2={n.cx} y2={n.cy} stroke="#3a1fd4" strokeWidth="1.2" strokeOpacity="0.4" />
                ))}
                {nodes.map((n, i) => (
                    <g key={i}>
                        <circle cx={n.cx} cy={n.cy} r={n.r} stroke={n.core ? "#6a4cff" : "#3a1fd4"} strokeWidth={n.core ? 2 : 1.2} opacity="0.8" />
                        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fontSize={n.core ? "7" : "5.5"} fill={n.core ? "#6a4cff" : "#8168B1"} fontFamily="monospace" fontWeight="bold">
                            {n.label}
                        </text>
                    </g>
                ))}
            </svg>
        </VisualCanvas>
    );
}

const visualMap = {
    firma:         <FirmaVisual />,
    gestion:       <DocVisual />,
    bpm:           <BpmVisual />,
    integraciones: <IntegVisual />,
};

export default function SolutionVisualLight({ type }) {
    return visualMap[type] ?? <VisualCanvas />;
}
