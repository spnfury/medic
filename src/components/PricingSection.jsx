import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
    return (
        <section id="precios" className="py-24 bg-[#F8FAFC]">
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#1CAEC1] font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Planes Flexibles
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-brand-blue mb-6"
                    >
                        Invierte en tu tranquilidad
                    </motion.h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
                        Elige el plan que mejor se adapte a tus necesidades de prevención y salud.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Free Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg relative overflow-hidden"
                    >
                        <h3 className="text-2xl font-bold text-brand-blue mb-2">Gratuito</h3>
                        <p className="text-gray-400 mb-6 text-sm">Para empezar a cuidarte</p>
                        <div className="text-4xl font-bold text-brand-blue mb-8">
                            0€ <span className="text-lg font-normal text-gray-400">/ para siempre</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-gray-600">
                                <Check className="text-[#1CAEC1] shrink-0" size={20} />
                                <span>Historial médico básico</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <Check className="text-[#1CAEC1] shrink-0" size={20} />
                                <span>Recomendaciones estándar</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-600">
                                <Check className="text-[#1CAEC1] shrink-0" size={20} />
                                <span>Subida de pruebas (Límite básico)</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 shrink-0">!</div>
                                <span>Incluye publicidad</span>
                            </li>
                        </ul>

                        <Button className="w-full bg-gray-100 hover:bg-gray-200 text-brand-blue font-bold py-6 rounded-xl">
                            Descargar App
                        </Button>
                    </motion.div>

                    {/* Premium Plan */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-blue p-8 rounded-3xl shadow-xl relative overflow-hidden text-white transform md:-translate-y-4"
                    >
                        <div className="absolute top-0 right-0 bg-[#F07C49] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                            RECOMENDADO
                        </div>

                        <h3 className="text-2xl font-bold mb-2">Premium</h3>
                        <p className="text-blue-200 mb-6 text-sm">Salud completa sin límites</p>
                        <div className="text-4xl font-bold mb-8">
                            45€ <span className="text-lg font-normal text-blue-200">/ año</span>
                        </div>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="bg-[#1CAEC1] rounded-full p-1 mt-0.5">
                                    <Check className="text-white" size={12} />
                                </div>
                                <span>Todo lo incluido en el plan Gratuito</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#1CAEC1] rounded-full p-1 mt-0.5">
                                    <Check className="text-white" size={12} />
                                </div>
                                <span><strong>Sin publicidad</strong></span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#1CAEC1] rounded-full p-1 mt-0.5">
                                    <Check className="text-white" size={12} />
                                </div>
                                <span>Sincronización con Calendario (Google/Outlook/Apple)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#1CAEC1] rounded-full p-1 mt-0.5">
                                    <Check className="text-white" size={12} />
                                </div>
                                <span><strong>Segunda opinión médica</strong> (hasta 5/año)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-[#1CAEC1] rounded-full p-1 mt-0.5">
                                    <Check className="text-white" size={12} />
                                </div>
                                <span>Historial médico ilimitado</span>
                            </li>
                        </ul>

                        <Button className="w-full bg-[#1CAEC1] hover:bg-[#1593a3] text-white font-bold py-6 rounded-xl border-none">
                            Empezar Prueba Gratuita
                        </Button>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 text-sm">
                        * Servicio Concierge (recopilación de historial completo) disponible bajo demanda por 200€.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
