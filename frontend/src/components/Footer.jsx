export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-surface/30 pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-2">
                    <a href="/" className="inline-flex items-center mb-6">
                        <img
                            src="/assets/logos/btech-logo-negative.svg"
                            alt="B-Tech Logo"
                            className="h-5 w-auto object-contain"
                        />
                    </a>
                    <p className="text-gray-400 max-w-sm">
                        Infraestructura tecnológica diseñada para entornos críticos. Aseguramos y optimizamos cada operación.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Soluciones</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-violet transition-colors">Firma electrónica</a></li>
                        <li><a href="#" className="hover:text-violet transition-colors">Gestión documental</a></li>
                        <li><a href="#" className="hover:text-violet transition-colors">Automatización BPM</a></li>
                        <li><a href="#" className="hover:text-violet transition-colors">Integraciones</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-white mb-4">Compañía</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><a href="#" className="hover:text-violet transition-colors">Sectores</a></li>
                        <li><a href="#" className="hover:text-violet transition-colors">Casos de éxito</a></li>
                        <li><a href="#" className="hover:text-violet transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-violet transition-colors">Contacto</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                <p>&copy; {new Date().getFullYear()} BTECH Project. Todos los derechos reservados.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                    <a href="#" className="hover:text-white transition-colors">Términos</a>
                </div>
            </div>
        </footer>
    )
}
