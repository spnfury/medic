import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Shield, Activity, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturesSection = () => {
    const features = [
        {
            icon: Activity,
            title: "Recomendaciones Personalizadas",
            description: "Recibe un plan de pruebas a medida, basado en tu edad, antecedentes y estilo de vida."
        },
        {
            icon: Shield,
            title: "Avalado por Expertos",
            description: "Algoritmos diseñados con rigor médico para garantizar la precisión de cada recomendación."
        },
        {
            icon: Smartphone, // Reusing Smartphone for 'Active' feel or generic app usage, or maybe Calendar/Bell for reminders if we had that. Let's stick to Smartphone or similar.
            title: "Prevención Activa",
            description: "No esperes a enfermar. Anticípate con chequeos periódicos sugeridos automáticamente."
        },
        {
            icon: Calendar,
            title: "Historial Estructurado",
            description: "Tu línea de vida médica organizada cronológicamente. Llévala contigo a cualquier especialista."
        }
    ];

    return (
        <section id="caracteristicas" className="py-32 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1CAEC1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0E2B43]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

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
                        className="text-4xl md:text-6xl font-bold text-brand-blue mb-6"
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
                            className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:bg-brand-blue hover:text-white transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-[#0E2B43]/5 text-[#0E2B43] flex items-center justify-center mb-6 group-hover:bg-[#0E2B43] group-hover:text-white transition-colors">
                                <feature.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-brand-blue group-hover:text-white">{feature.title}</h3>
                            <p className="text-gray-500 leading-relaxed group-hover:text-gray-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default FeaturesSection;
