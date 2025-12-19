import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shield, Activity, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
    const features = [
        {
            icon: Activity,
            title: "Monitoreo Constante",
            description: "Sigue tus signos vitales y métricas de salud en tiempo real con integración de wearables."
        },
        {
            icon: Shield,
            title: "Seguridad Robusta",
            description: "Tus datos están protegidos con encriptación de grado médico y autenticación biométrica."
        },
        {
            icon: Calendar,
            title: "Gestión de Citas",
            description: "Organiza tu agenda médica y recibe recordatorios inteligentes directamente en tu móvil."
        },
        {
            icon: Smartphone,
            title: "Historial Digital",
            description: "Accede a todos tus informes pediátricos, análisis y recetas desde un solo lugar seguro."
        }
    ];

    return (
        <section id="caracteristicas" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1CAEC1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0C25A3]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#1CAEC1] font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Funcionalidades Premium
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
                    >
                        Todo lo que necesitas <br /> para tu bienestar
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-500 max-w-2xl mx-auto font-light"
                    >
                        Diseñado para simplificar tu vida y darte la tranquilidad que mereces al gestionar tu salud.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#0C25A3]/5 text-[#0C25A3] flex items-center justify-center mb-6 group-hover:bg-[#0C25A3] group-hover:text-white transition-colors">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <Button
                            className="h-16 px-10 rounded-full bg-white border-2 border-gray-100 text-[#0C25A3] hover:border-[#0C25A3] hover:bg-white text-xl font-bold transition-all shadow-lg hover:shadow-2xl flex items-center gap-3"
                        >
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1CAEC1] to-[#0C25A3]">
                                Explorar características
                            </span>
                            <ArrowRight className="text-[#0C25A3]" />
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
