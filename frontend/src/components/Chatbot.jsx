import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[10001]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="absolute bottom-20 right-0 w-[320px] md:w-[380px] bg-[#0A0520] border border-white/10 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl"
                    >
                        {/* Header */}
                        <div className="bg-[#4e2bcd] p-6 flex justify-between items-center text-white">
                            <div>
                                <h4 className="font-bold text-lg">BTECH Concierge</h4>
                                <p className="text-white/60 text-xs">Transformando tu operación hoy.</p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-lg transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat area placeholder */}
                        <div className="h-[300px] p-6 flex flex-col gap-4 overflow-y-auto bg-white/[0.02]">
                            <div className="bg-white/5 p-4 rounded-2xl rounded-tl-sm max-w-[85%] text-sm text-gray-300">
                                Hola, bienvenido a BTECH. ¿En qué podemos ayudarte a optimizar tu organización?
                            </div>
                        </div>

                        {/* Input area */}
                        <div className="p-4 bg-white/5 border-t border-white/10 flex gap-2 overflow-hidden">
                            <input 
                                type="text"
                                placeholder="Escribe un mensaje..."
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-violet/50 transition-colors"
                            />
                            <button className="bg-[#4e2bcd] p-2 rounded-xl text-white hover:bg-[#5d38e0] transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Chatbot Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-[#4e2bcd] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(78,43,205,0.5)] hover:shadow-[0_0_50px_rgba(78,43,205,0.7)] transition-shadow duration-300 relative group"
            >
                <motion.div
                    animate={isOpen ? { rotate: 180, scale: 0 } : { rotate: 0, scale: 1 }}
                    className="absolute"
                >
                    <MessageCircle size={28} />
                </motion.div>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isOpen ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
                    className="absolute"
                >
                    <X size={28} />
                </motion.div>

                {/* Pulsing glow ring */}
                {!isOpen && (
                    <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full border-2 border-violet/50"
                    />
                )}
            </motion.button>
        </div>
    );
}
