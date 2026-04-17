import { motion } from 'framer-motion';

const benefits = [
    {
        metric: "60%",
        title: "Reducción de carga operativa",
        desc: "Menos tiempo invertido en tareas manuales repetitivas."
    },
    {
        metric: "100%",
        title: "Trazabilidad garantizada",
        desc: "Registro inmutable de cada operación crítica en el sistema."
    },
    {
        metric: "Escalable",
        title: "Infraestructura cloud-ready",
        desc: "Preparada para crecer junto al volumen de tu organización."
    },
    {
        metric: "Día 1",
        title: "Impacto desde el inicio",
        desc: "Resultados medibles desde la primera semana de implementación."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut", delay: i * 0.12 }
    })
};

export default function BenefitsList() {
    return (
        <section className="min-h-screen bg-[#F5F6FA] flex items-center justify-center px-6 py-20 relative z-20 border-t border-gray-200 overflow-hidden">
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* LEFT: Narrative */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col justify-center"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight tracking-tight text-gray-900 mb-8">
                        Beneficios tangibles<br className="hidden md:block" /> desde el día uno
                    </h2>

                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-sm mb-12">
                        Transformar tu arquitectura tecnológica impacta directamente en el ROI de tu operación.
                    </p>

                    <button className="self-start flex items-center gap-2 text-gray-900 font-semibold text-base border-b-2 border-gray-900 pb-1 hover:border-violet hover:text-violet transition-colors duration-300 group">
                        Ver análisis de impacto
                        <span className="translate-x-0 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                </motion.div>

                {/* RIGHT: Benefits vertical list */}
                <div className="flex flex-col divide-y divide-gray-200">
                    {benefits.map((ben, idx) => (
                        <motion.div
                            key={idx}
                            custom={idx}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-start gap-8 py-8 group"
                        >
                            {/* Metric / Keyword */}
                            <div className="text-3xl md:text-4xl font-bold text-[#4e2bcd] tracking-tight min-w-[80px] flex-shrink-0 leading-none pt-1">
                                {ben.metric}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-gray-900 text-[18px] md:text-[20px] font-semibold mb-1 leading-snug">
                                    {ben.title}
                                </h3>
                                <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed">
                                    {ben.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

