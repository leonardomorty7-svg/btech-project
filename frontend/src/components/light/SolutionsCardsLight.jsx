import { FileSignature, Folder, Settings, Puzzle, ArrowRight } from 'lucide-react';
import SolutionVisualLight from './SolutionVisualLight';

const solutionsData = [
    {
        id: "firma",
        title: "Firma electrónica",
        description: "Validación legal y trazable, sin fricción.",
        icon: FileSignature,
    },
    {
        id: "gestion",
        title: "Gestión documental",
        description: "Acceso, control y automatización en un solo flujo.",
        icon: Folder,
    },
    {
        id: "bpm",
        title: "Automatización BPM",
        description: "Orquesta procesos sin intervención manual.",
        icon: Settings,
    },
    {
        id: "integraciones",
        title: "Integraciones",
        description: "Conecta tu ecosistema sin reemplazar sistemas.",
        icon: Puzzle,
    }
];

export default function SolutionsCardsLight({ solutionsFromApi }) {
    const displayData = solutionsData.map((item, idx) => {
        const apiItem = solutionsFromApi?.find(s =>
            s.attributes?.title?.toLowerCase().includes(item.id) ||
            s.title?.toLowerCase().includes(item.id) ||
            idx === solutionsFromApi.indexOf(s)
        );
        return {
            ...item,
            title: apiItem?.attributes?.title || apiItem?.title || item.title,
            description: apiItem?.attributes?.description || apiItem?.description || item.description,
        };
    });

    return (
        <section id="soluciones" className="relative z-10 w-full bg-[#03010C] py-24 md:py-32 overflow-hidden border-t border-white/5">
            {/* ── Visual Parity Ambient orbs ── */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[5%] left-[15%] w-[55%] h-[55%] bg-[#1a06a0] rounded-full blur-[140px] opacity-[0.10]" />
                <div className="absolute top-[55%] right-[5%] w-[35%] h-[35%] bg-[#3b1fa0] rounded-full blur-[120px] opacity-[0.07]" />
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,1) 1px, transparent 0)',
                        backgroundSize: '28px 28px'
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-28 animate-light-fade">
                    <h2 className="text-white mb-8">
                        Soluciones modulares<br />para operaciones críticas
                    </h2>
                    <p className="text-white/90 max-w-2xl mx-auto text-[18px]">
                        Automatiza, integra y escala sin fricción. Infraestructura digital robusta para entornos de alta exigencia.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {displayData.map((solution, index) => (
                        <div key={index} className="flex flex-col gap-8 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-violet/30 transition-all duration-500 group animate-light-slide">
                            <div className="flex flex-col gap-6">
                                <div className="p-4 rounded-2xl bg-violet/10 text-violet w-fit border border-violet/20 group-hover:bg-violet group-hover:text-white transition-all duration-300">
                                    <solution.icon size={32} />
                                </div>
                                <h3 className="text-white text-3xl lg:text-4xl">
                                    {solution.title}
                                </h3>
                                <p className="text-white/80 text-[18px] leading-relaxed max-w-[420px]">
                                    {solution.description}
                                </p>
                            </div>

                            <div className="w-full aspect-[4/3] lg:aspect-video relative flex items-center justify-center bg-black/40 rounded-3xl overflow-hidden border border-white/5 shadow-2xl" style={{ filter: 'drop-shadow(0 0 32px rgba(78,43,205,0.15))' }}>
                                <SolutionVisualLight type={solution.id} />
                            </div>

                            <button className="flex items-center gap-3 text-violet font-semibold text-lg hover:text-white transition-colors group/btn">
                                Explorar solución 
                                <ArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
